import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const allowedOrigins = [
  'https://frameworkteam.com',
  'https://www.frameworkteam.com',
  'http://localhost:3000',
  'http://127.0.0.1:3000'
];

const allowedHostnames = [
  'frameworkteam.com',
  'www.frameworkteam.com',
  'localhost',
  '127.0.0.1'
];

function getCorsHeaders(req: Request): Record<string, string> {
  const origin = req.headers.get('origin');
  const headers: Record<string, string> = {
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
  };
  if (origin && allowedOrigins.includes(origin)) {
    headers['Access-Control-Allow-Origin'] = origin;
  } else {
    // Default fallback to prevent unauthorized origins from gaining easy access headers
    headers['Access-Control-Allow-Origin'] = 'https://frameworkteam.com';
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

  try {
    const contentType = req.headers.get('content-type') || '';
    if (!contentType.includes('application/json')) {
      throw new Error('Content-Type must be application/json');
    }

    const body = await req.json().catch(() => null);
    if (!body) {
      throw new Error('Invalid JSON request body');
    }

    const { replyToEmail, subject, message, token, sourceApp } = body;

    if (!replyToEmail || !subject || !message || !token) {
      throw new Error('Missing required fields');
    }

    // Trim and sanitize inputs to clean whitespace
    const trimmedReplyTo = replyToEmail.trim();
    const trimmedSubject = subject.trim();
    const trimmedMessage = message.trim();
    const trimmedSourceApp = sourceApp ? String(sourceApp).trim() : '';

    // Email format validation (RFC-compliant regex)
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(trimmedReplyTo)) {
      throw new Error('Invalid email address format for replyToEmail');
    }
    
    if (trimmedSubject.length < 3) {
      throw new Error('Subject is too short (minimum 3 characters)');
    }
    if (trimmedSubject.length > 120) {
      throw new Error('Subject is too long (maximum 120 characters)');
    }
    
    if (trimmedMessage.length < 10) {
      throw new Error('Message is too short (minimum 10 characters)');
    }
    if (trimmedMessage.length > 25000) {
      throw new Error('Message is too long (maximum 25,000 characters)');
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

    // Validate hostname (only frameworkteam.com hostnames or local testing)
    if (!turnstileData.hostname || !allowedHostnames.includes(turnstileData.hostname)) {
      throw new Error('Invalid CAPTCHA hostname');
    }

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

    // Construct customizable sender name based on the client parameter
    const fromName = trimmedSourceApp ? `${trimmedSourceApp} Support` : 'FrameworkTeam Support';

    const emailRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: `${fromName} <support@frameworkteam.com>`, // Verified domain
        reply_to: trimmedReplyTo,
        to: ['support@frameworkteam.com'],
        subject: `[${trimmedSourceApp || 'Support'}] ${trimmedSubject}`,
        text: `From: ${trimmedReplyTo}\n\n${trimmedMessage}`,
      }),
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
