import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "jsr:@supabase/supabase-js@2";

// -----------------------------------------------------------------------
// FIX #2: CORS allowlist instead of reflecting any Origin
// -----------------------------------------------------------------------
const ALLOWED_ORIGINS = [
  "https://frameworkteam.com",
  "https://www.frameworkteam.com",
  "https://qr.frameworkteam.com",
];

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

// -----------------------------------------------------------------------
// FIX #4: Durable, shared rate limiting via Postgres (Supabase) instead
// of an in-memory Map that doesn't survive across isolates/cold starts.
// Requires a table, e.g.:
//
// create table public.contact_rate_limit (
//   ip text primary key,
//   count int not null default 1,
//   window_start timestamptz not null default now()
// );
//
// This uses the service role key so it can bypass RLS from the server side.
// -----------------------------------------------------------------------
const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function checkRateLimit(ip: string, maxRequests = 5, windowMs = 60_000): Promise<boolean> {
  if (ip === "unknown") return true; // can't rate-limit what you can't identify; consider blocking instead

  const nowIso = new Date().toISOString();
  const { data: existing } = await supabase
    .from("contact_rate_limit")
    .select("*")
    .eq("ip", ip)
    .maybeSingle();

  if (!existing) {
    await supabase.from("contact_rate_limit").insert({ ip, count: 1, window_start: nowIso });
    return true;
  }

  const windowStart = new Date(existing.window_start).getTime();
  const now = Date.now();

  if (now - windowStart > windowMs) {
    // window expired, reset
    await supabase
      .from("contact_rate_limit")
      .update({ count: 1, window_start: nowIso })
      .eq("ip", ip);
    return true;
  }

  if (existing.count >= maxRequests) {
    return false; // over the limit
  }

  await supabase
    .from("contact_rate_limit")
    .update({ count: existing.count + 1 })
    .eq("ip", ip);
  return true;
}

Deno.serve(async (req) => {
  const corsHeaders = getCorsHeaders(req);

  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  // FIX #2 (continued): reject requests from disallowed origins outright.
  // Browsers already block reading the response due to missing CORS header,
  // but this also protects non-browser callers that ignore CORS.
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
  if (contentLength > 100000) {
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

    // -----------------------------------------------------------------
    // FIX #1: `to` and `from` are no longer accepted from the client at
    // all. They're not destructured, not read, not forwarded. Remove
    // sourceApp too unless you actually use it downstream.
    // -----------------------------------------------------------------
    const { replyToEmail, subject, message, text, html, token } = body;

    const contentText = (message || text || "").trim();
    const contentHtml = (html || "").trim();

    if (!replyToEmail || !subject || (!contentText && !contentHtml) || !token) {
      throw new Error("Missing required fields");
    }

    const trimmedReplyTo = replyToEmail.trim();
    const trimmedSubject = subject.trim().replace(/[\r\n]+/g, " ");

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(trimmedReplyTo)) {
      throw new Error("Invalid email address format for replyToEmail");
    }

    if (trimmedSubject.length < 3) {
      throw new Error("Subject is too short (minimum 3 characters)");
    }
    if (trimmedSubject.length > 200) {
      throw new Error("Subject is too long (maximum 200 characters)");
    }

    const totalLength = contentText.length + contentHtml.length;
    if (totalLength < 10) {
      throw new Error("Message content is too short (minimum 10 characters)");
    }
    if (totalLength > 50000) {
      throw new Error("Message content is too long (maximum 50,000 characters)");
    }

    // FIX #4 (continued): durable rate limit check
    const clientIp = req.headers.get("x-forwarded-for")?.split(",")[0].trim() || "unknown";
    const allowed = await checkRateLimit(clientIp);
    if (!allowed) {
      throw new Error("Too many requests, please try again later");
    }

    // 1. Verify Turnstile Token
    const turnstileSecret = Deno.env.get("TURNSTILE_SECRET_KEY");
    if (!turnstileSecret) {
      throw new Error("Server configuration error: TURNSTILE_SECRET_KEY missing");
    }

    const formData = new FormData();
    formData.append("secret", turnstileSecret);
    formData.append("response", token);
    if (clientIp !== "unknown") {
      formData.append("remoteip", clientIp);
    }

    const turnstileRes = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      body: formData,
    });

    const turnstileData = await turnstileRes.json();

    // -------------------------------------------------------------
    // FIX #3: verify the token was actually solved on your own site,
    // not just that it's *a* valid token for your sitekey (which is
    // public and can be reused on any attacker-controlled page).
    // -------------------------------------------------------------
    const EXPECTED_HOSTNAME = "frameworkteam.com";
    if (
      !turnstileData.success ||
      !turnstileData.hostname ||
      turnstileData.hostname !== EXPECTED_HOSTNAME
    ) {
      throw new Error("CAPTCHA verification failed");
    }

    // 2. Send Email (using Resend)
    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    if (!resendApiKey) {
      console.warn("RESEND_API_KEY is not set. Email will not be actually sent.");
      return new Response(
        JSON.stringify({ success: true, message: "Mock success - API key not configured" }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 200 }
      );
    }

    // FIX #1 (continued): from/to are fixed, server-controlled constants.
    const FIXED_FROM = `"FrameworkTeam Support" <support@frameworkteam.com>`;
    const FIXED_TO = ["support@frameworkteam.com"];

    const emailPayload: Record<string, any> = {
      from: FIXED_FROM,
      reply_to: trimmedReplyTo,
      to: FIXED_TO,
      subject: trimmedSubject,
    };

    if (contentText) emailPayload.text = contentText;
    if (contentHtml) emailPayload.html = contentHtml;

    const emailRes = await fetch("https://api.resend.com/emails", {
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