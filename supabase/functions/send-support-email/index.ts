import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "jsr:@supabase/supabase-js@2";

// =========================================================================
// CONFIG — everything you'd want to change for a different project or
// domain lives here. Nothing below this block should need editing.
// =========================================================================

// Browser origins allowed to call this function (used for CORS).
const ALLOWED_ORIGINS = [
  "https://frameworkteam.com",
  "https://www.frameworkteam.com",
];

// Hostnames allowed in the Cloudflare Turnstile response. This must be the
// bare hostname (no protocol) for every domain listed in ALLOWED_ORIGINS,
// otherwise real submissions from that domain will fail CAPTCHA
// verification even though CORS lets the request through.
const ALLOWED_HOSTNAMES = [
  "frameworkteam.com",
  "www.frameworkteam.com",
];

// Fixed sender/recipient for outgoing email. These are never taken from the
// request body, so the function can only ever email this one inbox.
const FIXED_FROM = `"FrameworkTeam Support" <support@frameworkteam.com>`;
const FIXED_TO = ["support@frameworkteam.com"];

// Request size limits.
const MAX_PAYLOAD_BYTES = 100_000; // reject requests larger than this
const MAX_SUBJECT_LENGTH = 200;
const MIN_SUBJECT_LENGTH = 3;
const MAX_MESSAGE_LENGTH = 50_000;
const MIN_MESSAGE_LENGTH = 10;

// Rate limiting.
const RATE_LIMIT_MAX_REQUESTS = 5;
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_TABLE = "contact_rate_limit";

// External endpoints.
const TURNSTILE_VERIFY_URL = "https://challenges.cloudflare.com/turnstile/v0/siteverify";
const RESEND_API_URL = "https://api.resend.com/emails";

// Names of the environment variables holding secrets (set these in your
// Supabase project's Edge Function settings).
const TURNSTILE_SECRET_ENV_VAR = "TURNSTILE_SECRET_KEY";
const RESEND_API_KEY_ENV_VAR = "RESEND_API_KEY";
const SUPABASE_URL_ENV_VAR = "SUPABASE_URL";
const SUPABASE_SERVICE_ROLE_KEY_ENV_VAR = "SUPABASE_SERVICE_ROLE_KEY";

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// =========================================================================
// Setup
// =========================================================================

const supabaseUrl = Deno.env.get(SUPABASE_URL_ENV_VAR)!;
const supabaseServiceKey = Deno.env.get(SUPABASE_SERVICE_ROLE_KEY_ENV_VAR)!;
const supabase = createClient(supabaseUrl, supabaseServiceKey);

function getCorsHeaders(req: Request): Record<string, string> {
  const origin = req.headers.get("origin");
  const headers: Record<string, string> = {
    "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Vary": "Origin",
  };
  if (origin && ALLOWED_ORIGINS.includes(origin)) {
    headers["Access-Control-Allow-Origin"] = origin;
  }
  // If origin isn't allowed, we simply omit the header — the browser
  // will block the response from being read by that page's JS.
  return headers;
}

async function checkRateLimit(
  ip: string,
  maxRequests = RATE_LIMIT_MAX_REQUESTS,
  windowMs = RATE_LIMIT_WINDOW_MS,
): Promise<boolean> {
  if (ip === "unknown") return true; // can't rate-limit what you can't identify; consider blocking instead

  const nowIso = new Date().toISOString();
  const { data: existing } = await supabase
    .from(RATE_LIMIT_TABLE)
    .select("*")
    .eq("ip", ip)
    .maybeSingle();

  if (!existing) {
    await supabase.from(RATE_LIMIT_TABLE).insert({ ip, count: 1, window_start: nowIso });
    return true;
  }

  const windowStart = new Date(existing.window_start).getTime();
  const now = Date.now();

  if (now - windowStart > windowMs) {
    // window expired, reset
    await supabase
      .from(RATE_LIMIT_TABLE)
      .update({ count: 1, window_start: nowIso })
      .eq("ip", ip);
    return true;
  }

  if (existing.count >= maxRequests) {
    return false; // over the limit
  }

  await supabase
    .from(RATE_LIMIT_TABLE)
    .update({ count: existing.count + 1 })
    .eq("ip", ip);
  return true;
}

// =========================================================================
// Handler
// =========================================================================

Deno.serve(async (req) => {
  const corsHeaders = getCorsHeaders(req);

  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  // Reject requests from disallowed origins outright. Browsers already
  // block reading the response due to the missing CORS header, but this
  // also protects non-browser callers that ignore CORS.
  const origin = req.headers.get("origin");
  if (origin && !ALLOWED_ORIGINS.includes(origin)) {
    return new Response(JSON.stringify({ error: "Origin not allowed" }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 403,
    });
  }

  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method Not Allowed" }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 405,
    });
  }

  const contentLength = Number(req.headers.get("content-length") || 0);
  if (contentLength > MAX_PAYLOAD_BYTES) {
    return new Response(JSON.stringify({ error: "Payload too large" }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 413,
    });
  }

  try {
    const contentType = req.headers.get("content-type") || "";
    if (!contentType.includes("application/json")) {
      throw new Error("Content-Type must be application/json");
    }

    const body = await req.json().catch(() => null);
    if (!body) {
      throw new Error("Invalid JSON request body");
    }

    // `to` and `from` are intentionally not read from the request body at
    // all — email always goes to/from the fixed addresses configured above.
    const { replyToEmail, subject, message, text, html, token } = body;

    const contentText = (message || text || "").trim();
    const contentHtml = (html || "").trim();

    if (!replyToEmail || !subject || (!contentText && !contentHtml) || !token) {
      throw new Error("Missing required fields");
    }

    const trimmedReplyTo = replyToEmail.trim();
    const trimmedSubject = subject.trim().replace(/[\r\n]+/g, " ");

    if (!EMAIL_REGEX.test(trimmedReplyTo)) {
      throw new Error("Invalid email address format for replyToEmail");
    }

    if (trimmedSubject.length < MIN_SUBJECT_LENGTH) {
      throw new Error(`Subject is too short (minimum ${MIN_SUBJECT_LENGTH} characters)`);
    }
    if (trimmedSubject.length > MAX_SUBJECT_LENGTH) {
      throw new Error(`Subject is too long (maximum ${MAX_SUBJECT_LENGTH} characters)`);
    }

    const totalLength = contentText.length + contentHtml.length;
    if (totalLength < MIN_MESSAGE_LENGTH) {
      throw new Error(`Message content is too short (minimum ${MIN_MESSAGE_LENGTH} characters)`);
    }
    if (totalLength > MAX_MESSAGE_LENGTH) {
      throw new Error(`Message content is too long (maximum ${MAX_MESSAGE_LENGTH} characters)`);
    }

    const clientIp = req.headers.get("x-forwarded-for")?.split(",")[0].trim() || "unknown";
    const allowed = await checkRateLimit(clientIp);
    if (!allowed) {
      throw new Error("Too many requests, please try again later");
    }

    // Verify Turnstile token
    const turnstileSecret = Deno.env.get(TURNSTILE_SECRET_ENV_VAR);
    if (!turnstileSecret) {
      throw new Error(`Server configuration error: ${TURNSTILE_SECRET_ENV_VAR} missing`);
    }

    const formData = new FormData();
    formData.append("secret", turnstileSecret);
    formData.append("response", token);
    if (clientIp !== "unknown") {
      formData.append("remoteip", clientIp);
    }

    const turnstileRes = await fetch(TURNSTILE_VERIFY_URL, {
      method: "POST",
      body: formData,
    });

    const turnstileData = await turnstileRes.json();

    // Confirm the token was solved on one of our own allowed hostnames —
    // not just that it's *a* valid token for the sitekey (which is public
    // and could otherwise be reused on any attacker-controlled page).
    if (
      !turnstileData.success ||
      !turnstileData.hostname ||
      !ALLOWED_HOSTNAMES.includes(turnstileData.hostname)
    ) {
      throw new Error("CAPTCHA verification failed");
    }

    // Send email (via Resend)
    const resendApiKey = Deno.env.get(RESEND_API_KEY_ENV_VAR);
    if (!resendApiKey) {
      console.warn("RESEND_API_KEY is not set. Email will not be actually sent.");
      return new Response(
        JSON.stringify({ success: true, message: "Mock success - API key not configured" }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 200 }
      );
    }

    const emailPayload: Record<string, any> = {
      from: FIXED_FROM,
      reply_to: trimmedReplyTo,
      to: FIXED_TO,
      subject: trimmedSubject,
    };

    if (contentText) emailPayload.text = contentText;
    if (contentHtml) emailPayload.html = contentHtml;

    const emailRes = await fetch(RESEND_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify(emailPayload),
    });

    if (!emailRes.ok) {
      const errorData = await emailRes.text();
      console.error("Resend API error:", errorData);
      throw new Error("Failed to send email");
    }

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 400,
    });
  }
});