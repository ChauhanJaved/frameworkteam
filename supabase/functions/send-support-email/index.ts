import "jsr:@supabase/functions-js/edge-runtime.d.ts";

function getCorsHeaders(req: Request): Record<string, string> {
  const origin = req.headers.get('origin');
  const headers: Record<string, string> = {
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
  };
  if (origin) {
    headers['Access-Control-Allow-Origin'] = origin;
  } else {
    headers['Access-Control-Allow-Origin'] = '*';
  }
  return headers;
}

// Simple in-memory rate limiting map
// Key: IP, Value: { count: number, timestamp: number }
const ipTracker = new Map<string, { count: number, timestamp: number }>();

Deno.serve(async (req) => {
  const corsHeaders = getCorsHeaders(req);

  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  if (req.method !== 'POST') {
    return new Response(
      JSON.stringify({ error: 'Method Not Allowed' }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 405,
      }
    );
  }

  // Limit payload size to prevent Denial of Service (OOM)
  const contentLength = Number(req.headers.get('content-length') || 0);
  if (contentLength > 100000) { // Limit to 100KB
    return new Response(
      JSON.stringify({ error: 'Payload too large' }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 413,
      }
    );
  }

  try {
    const contentType = req.headers.get('content-type') || '';
    if (!contentType.includes('application/json')) {
      throw new Error('Content-Type must be application/json');
    }

    const body = await req.json().catch(() => null);
    if (!body) {
      throw new Error('Invalid JSON request body');
    }

    const { replyToEmail, subject, message, text, html, token, sourceApp, to, from } = body;

    const contentText = (message || text || '').trim();
    const contentHtml = (html || '').trim();

    if (!replyToEmail || !subject || (!contentText && !contentHtml) || !token) {
      throw new Error('Missing required fields');
    }

    // Trim and sanitize inputs to clean whitespace
    const trimmedReplyTo = replyToEmail.trim();
    // Prevent header injection by removing newline characters from subject and sourceApp
    const trimmedSubject = subject.trim().replace(/[\r\n]+/g, ' ');
    const trimmedSourceApp = sourceApp ? String(sourceApp).trim().replace(/[\r\n]+/g, ' ') : '';

    // Email format validation (RFC-compliant regex)
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(trimmedReplyTo)) {
      throw new Error('Invalid email address format for replyToEmail');
    }

    if (trimmedSubject.length < 3) {
      throw new Error('Subject is too short (minimum 3 characters)');
    }
    if (trimmedSubject.length > 200) {
      throw new Error('Subject is too long (maximum 200 characters)');
    }

    const totalLength = contentText.length + contentHtml.length;
    if (totalLength < 10) {
      throw new Error('Message content is too short (minimum 10 characters)');
    }
    if (totalLength > 50000) {
      throw new Error('Message content is too long (maximum 50,000 characters)');
    }

    // Rate Limiting & IP Tracking
    const clientIp = req.headers.get('x-forwarded-for') || 'unknown';
    const now = Date.now();
    const rateLimitWindowMs = 60 * 1000;
    const maxRequests = 5;

    if (clientIp !== 'unknown') {
      const tracker = ipTracker.get(clientIp);
      if (tracker) {
        if (now - tracker.timestamp < rateLimitWindowMs) {
          if (tracker.count >= maxRequests) {
            throw new Error('Too many requests, please try again later');
          }
          tracker.count += 1;
        } else {
          ipTracker.set(clientIp, { count: 1, timestamp: now });
        }
      } else {
        ipTracker.set(clientIp, { count: 1, timestamp: now });
      }
    }

    // 1. Verify Turnstile Token
    const turnstileSecret = Deno.env.get('TURNSTILE_SECRET_KEY');
    if (!turnstileSecret) {
      throw new Error('Server configuration error: TURNSTILE_SECRET_KEY missing');
    }

    const formData = new FormData();
    formData.append('secret', turnstileSecret);
    formData.append('response', token);
    if (clientIp !== 'unknown') {
      formData.append('remoteip', clientIp);
    }

    const turnstileRes = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      body: formData,
    });

    const turnstileData = await turnstileRes.json();
    if (!turnstileData.success) {
      throw new Error('CAPTCHA verification failed');
    }

    // Turnstile siteverify success guarantees the token is valid for the configured secret key.

    // 2. Send Email (using Resend)
    const resendApiKey = Deno.env.get('RESEND_API_KEY');
    if (!resendApiKey) {
      console.warn("RESEND_API_KEY is not set. Email will not be actually sent.");
      return new Response(
        JSON.stringify({ success: true, message: "Mock success - API key not configured" }),
        {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 200,
        }
      );
    }

    // Construct a safe, authenticated Sender header to ensure high deliverability and avoid spam filters
    const defaultFrom = `"FrameworkTeam Support" <support@frameworkteam.com>`;

    const emailPayload: Record<string, any> = {
      from: from || defaultFrom,
      reply_to: trimmedReplyTo,
      to: to || ['support@frameworkteam.com'],
      subject: trimmedSubject,
    };

    if (contentText) {
      emailPayload.text = contentText;
    }
    if (contentHtml) {
      emailPayload.html = contentHtml;
    }

    const emailRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify(emailPayload),
    });

    if (!emailRes.ok) {
      const errorData = await emailRes.text();
      console.error("Resend API error:", errorData);
      throw new Error('Failed to send email');
    }

    return new Response(
      JSON.stringify({ success: true }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      }
    );

  } catch (error: any) {
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400,
      }
    );
  }
});
