"use client";

// External Imports
import React, { useState, useEffect, useRef } from "react";
import Script from "next/script";
import {
  Sparkles,
  Copy,
  Check,
  ExternalLink,
  ArrowRight,
  Send,
  Cpu,
  Database,
  CreditCard,
  Layers,
  Info,
  CheckCircle2,
  Loader2,
  Lock,
  Zap,
  HelpCircle,
  Mail,
  FileText
} from "lucide-react";

// Internal Imports
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { email } from "@/data/website-data";

export default function MVPMarketingPage() {
  const { toast } = useToast();

  // State for AI prompt generator
  const [appIdea, setAppIdea] = useState("");
  const [isCopiedPrompt, setIsCopiedPrompt] = useState(false);

  // State for Form submission
  const [clientEmail, setClientEmail] = useState("");
  const [appName, setAppName] = useState("");
  const [aiSpecification, setAiSpecification] = useState("");
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const turnstileContainerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);

  // Master Prompt Template Generator
  const generateMasterPrompt = () => {
    const techStackDescription =
      "Frontend: React/Next.js, Backend Database & Auth: Supabase, Payments/Subscriptions: Stripe.";

    const ideaPart = appIdea.trim()
      ? `Here is my application idea:\n"${appIdea.trim()}"`
      : "Here is my application idea:\n[Describe your app here. e.g., 'A SaaS platform for independent personal trainers to schedule clients, track workouts, and process recurring monthly memberships.']";

    return `Act as a Senior Product Manager and Full-Stack System Architect. I want to build a Minimum Viable Product (MVP) based on the following stack:
${techStackDescription}

${ideaPart}

Please analyze this idea and write a highly detailed, industry-standard project specification containing:
1. TARGET AUDIENCE & PERSONAS: Outline who is using this app and their core pain points.
2. USER ROLES & PERMISSIONS: List the different roles (e.g., Guest, Authenticated Customer, Admin) and what they can/cannot do.
3. MoSCoW FEATURE PRIORITIZATION: Classify features into:
   - Must-Have (Core MVP features needed to launch)
   - Should-Have (Important but not critical for v1)
   - Could-Have (Nice-to-have visual elements or helper tools)
4. STEP-BY-STEP USER JOURNEY: A chronological walkthrough of a new user's experience (e.g., landing, signup, onboarding, performing core activity, subscription upgrade, and dashboard usage).
5. CORE DATA SCHEMA REQUIREMENTS: Suggest key data fields and objects we need to capture (e.g., profiles, listings, billing details) to structure our database.

Keep your response extremely organized, utilizing clear headings, bullet points, and professional software engineering terminology.`;
  };

  const masterPromptText = generateMasterPrompt();

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(masterPromptText);
    setIsCopiedPrompt(true);
    toast({
      title: "Master Prompt Copied !",
      description: "Paste it into ChatGPT or Claude to generate your app details.",
    });
    setTimeout(() => setIsCopiedPrompt(false), 2000);
  };

  // Initialize Turnstile widget
  useEffect(() => {
    const initTurnstile = () => {
      if (typeof window !== "undefined" && (window as any).turnstile && turnstileContainerRef.current) {
        // Clear potential duplicate containers
        turnstileContainerRef.current.innerHTML = "";

        try {
          const id = (window as any).turnstile.render(turnstileContainerRef.current, {
            sitekey: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "0x4AAAAAADC8NlV7V9DNxkYy",
            callback: (token: string) => setTurnstileToken(token),
            "expired-callback": () => setTurnstileToken(null),
            "error-callback": () => setTurnstileToken(null),
            theme: "auto",
          });
          widgetIdRef.current = id;
        } catch (e) {
          console.error("Turnstile rendering failed:", e);
        }
      }
    };

    if (typeof window !== "undefined" && (window as any).turnstile) {
      initTurnstile();
    } else {
      const interval = setInterval(() => {
        if (typeof window !== "undefined" && (window as any).turnstile) {
          initTurnstile();
          clearInterval(interval);
        }
      }, 150);
      return () => clearInterval(interval);
    }

    return () => {
      if (widgetIdRef.current && typeof window !== "undefined" && (window as any).turnstile) {
        try {
          (window as any).turnstile.remove(widgetIdRef.current);
        } catch (e) {
          // Ignore removal errors on unmount
        }
      }
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!turnstileToken) {
      toast({
        title: "Verification Required",
        description: "Please complete the Turnstile CAPTCHA verification.",
        variant: "destructive",
      });
      return;
    }

    if (!aiSpecification.trim()) {
      toast({
        title: "Requirements Missing",
        description: "Please paste your AI-generated specification in Step 3.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
      const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

      if (!supabaseUrl || !supabaseAnonKey) {
        throw new Error("Supabase credentials are not configured in environment variables.");
      }

      // Build structured email message body
      const subject = `MVP Plan for $199 Request: ${appName || "New App idea"}`;
      const emailBody = `
=== NEW MVP BLUEPRINT REQUEST ($199 OFFER) ===
Client Email: ${clientEmail}
Project Name: ${appName || "Unnamed Project"}
Primary Tech Stack Choice: Next.js + Supabase + Stripe

The full AI-generated specification has been attached to this email as a markdown file.
      `;

      const attachmentFilename = `${(appName || "unnamed-project")
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "") || "project"}-specification.md`;

      // Call the Supabase Edge Function directly via fetch
      const response = await fetch(`${supabaseUrl}/functions/v1/send-support-email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${supabaseAnonKey}`,
        },
        body: JSON.stringify({
          replyToEmail: clientEmail,
          subject: subject,
          message: emailBody,
          token: turnstileToken,
          sourceApp: "frameworkteam.com",
          attachmentText: aiSpecification,
          attachmentFilename: attachmentFilename,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || `Server responded with status ${response.status}`);
      }

      toast({
        title: "MVP Request Received !",
        description: "Your requirements have been successfully sent to our team.",
      });

      setIsSuccess(true);

      // Reset form fields
      setAppIdea("");
      setClientEmail("");
      setAppName("");
      setAiSpecification("");
      setTurnstileToken(null);
      if (typeof window !== "undefined" && (window as any).turnstile && widgetIdRef.current) {
        (window as any).turnstile.reset(widgetIdRef.current);
      }
    } catch (err: any) {
      console.error("Submission failed:", err);
      toast({
        title: "Submission Failed",
        description: err.message || "Failed to send your request. Please try again or email us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Structured Data (JSON-LD) for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "$199 App MVP Planning & Architectural Blueprint",
    "description": "Exclusive LinkedIn offer to convert your app idea into a development-ready blueprint including user journeys, interactive wireframes, Supabase database schemas, and structured prompts for app builders.",
    "provider": {
      "@type": "ProfessionalService",
      "name": "FrameworkTeam Softwares",
      "url": "https://www.frameworkteam.com",
      "logo": "https://www.frameworkteam.com/favicon.ico",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "IN"
      }
    },
    "offers": {
      "@type": "Offer",
      "price": "199.00",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "validFrom": "2026-01-01"
    },
    "serviceType": "MVP Web Application Blueprint & Design"
  };

  return (
    <>
      {/* Cloudflare Turnstile Script */}
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
        strategy="afterInteractive"
      />

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-gradient-to-b from-background via-background to-secondary/30 pt-28 pb-20">
        <div className="container mx-auto px-5 xl:max-w-screen-xl">

          {/* Hero Section */}
          <header className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 mb-6 animate-pulse">
              <Sparkles className="size-3" />
              <span>Exclusive LinkedIn Offer</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-foreground via-primary to-primary/60 bg-clip-text text-transparent">
              Turn Your App Idea Into a Solid MVP Plan for $199
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed mb-8">
              We translate your vision into a development-ready package: a fully structured **User Journey**, **UI Wireframe designs**, a production-ready **Supabase database schema**, and an engineered **Tech Prompt** to kickstart your React/Next.js app.
            </p>

            {/* Quick Tech Stack Icons */}
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 text-sm font-medium text-muted-foreground bg-card/40 border border-border/50 rounded-2xl px-6 py-4 backdrop-blur-sm">
              <span className="flex items-center gap-2">
                <Layers className="size-5 text-primary" /> React / Next.js
              </span>
              <div className="h-4 w-px bg-border hidden sm:block"></div>
              <span className="flex items-center gap-2">
                <Database className="size-5 text-emerald-500" /> Supabase DB
              </span>
              <div className="h-4 w-px bg-border hidden sm:block"></div>
              <span className="flex items-center gap-2">
                <CreditCard className="size-5 text-purple-500" /> Stripe Payments
              </span>
            </div>
          </header>

          {/* Interactive Steps Guide & Submission Form */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-20">

            {/* Step Left Panel: Interactive Prompt Generator */}
            <div className="lg:col-span-7 flex flex-col gap-6">

              {/* Box 1: Prompt Customizer */}
              <div className="bg-card/50 border rounded-2xl p-6 backdrop-blur-md shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl pointer-events-none"></div>

                <div className="flex items-center gap-3 mb-4">
                  <div className="flex-shrink-0 size-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <h2 className="text-xl font-bold">Step 1: Describe Your App</h2>
                </div>

                <p className="text-muted-foreground text-sm mb-6 leading-normal">
                  Write a brief description of the product you want to build. We will automatically inject a standard Next.js, Supabase, and Stripe integration blueprint setup into the prompt.
                </p>

                <div className="space-y-4">
                  {/* App Idea Description */}
                  <div className="space-y-2">
                    <label htmlFor="app-idea-input" className="text-sm font-semibold text-foreground">
                      Briefly describe your app idea:
                    </label>
                    <textarea
                      id="app-idea-input"
                      value={appIdea}
                      onChange={(e) => setAppIdea(e.target.value)}
                      placeholder="e.g., A client booking system for freelance photographers with calendar integrations and deposit payments..."
                      rows={4}
                      className="flex w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>
                </div>
              </div>

              {/* Box 2: Generated Prompt Codeblock */}
              <div className="bg-card/50 border rounded-2xl p-6 backdrop-blur-md shadow-sm relative overflow-hidden flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex-shrink-0 size-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <h2 className="text-xl font-bold">Step 2: Copy Prompt &amp; Run in AI Chat</h2>
                </div>

                <p className="text-muted-foreground text-sm mb-6 leading-normal">
                  Copy the master prompt generated below, open your preferred AI assistant (like Claude or ChatGPT), and paste the prompt. The AI will analyze your idea and write a highly detailed, professional project specification for you.
                </p>

                {/* Prompt block with black background */}
                <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-5 mb-6 relative group shadow-inner">
                  <div className="flex flex-col items-start sm:flex-row sm:items-center justify-between gap-3 mb-4 border-b border-neutral-800 pb-3">
                    <div className="flex items-center gap-2">
                      <Cpu className="size-4 text-primary" />
                      <span className="text-xs font-mono text-neutral-400">master_prompt_template.txt</span>
                    </div>

                    <button
                      type="button"
                      onClick={handleCopyPrompt}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-300 hover:text-white bg-neutral-800 hover:bg-neutral-700 px-3 py-1.5 rounded-lg transition-colors"
                    >
                      {isCopiedPrompt ? (
                        <>
                          <Check className="size-3 text-emerald-500" />
                          Copied!
                        </>
                      ) : (
                        <>
                          <Copy className="size-3" />
                          Copy Prompt
                        </>
                      )}
                    </button>
                  </div>

                  <div className="max-h-[220px] overflow-y-auto font-mono text-xs text-neutral-300 leading-relaxed whitespace-pre-wrap select-all pr-2">
                    {masterPromptText}
                  </div>
                </div>

                {/* Helpful Instruction Tip & Shortcuts */}
                <div className="space-y-4">
                  <div className="flex items-start gap-2.5 text-xs text-muted-foreground">
                    <Info className="size-4 text-primary shrink-0 mt-0.5" />
                    <p>
                      Click <strong>Copy Prompt</strong> above, open an AI chat assistant from the shortcuts below, paste it, run it, and copy the full response text.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2.5">
                    <a
                      href="https://claude.ai"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-foreground hover:text-primary bg-background hover:bg-muted border border-border rounded-xl px-4 py-2 transition-all shadow-sm"
                    >
                      Claude AI <ExternalLink className="size-3 text-muted-foreground" />
                    </a>
                    <a
                      href="https://chatgpt.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-foreground hover:text-primary bg-background hover:bg-muted border border-border rounded-xl px-4 py-2 transition-all shadow-sm"
                    >
                      ChatGPT <ExternalLink className="size-3 text-muted-foreground" />
                    </a>
                    <a
                      href="https://gemini.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-foreground hover:text-primary bg-background hover:bg-muted border border-border rounded-xl px-4 py-2 transition-all shadow-sm"
                    >
                      Gemini <ExternalLink className="size-3 text-muted-foreground" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Step Right Panel: Submission Form */}
            <div className="lg:col-span-5">
              <div className="bg-card/70 border rounded-2xl p-6 md:p-8 backdrop-blur-md shadow-xl relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex-shrink-0 size-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <h2 className="text-xl font-bold">Step 3: Paste Specs &amp; Submit</h2>
                </div>

                <div className={isSuccess ? "text-center py-10 animate-fade-in block" : "hidden"}>
                  <div className="mx-auto w-12 h-12 bg-emerald-100 dark:bg-emerald-950/45 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle2 className="size-6 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-foreground">Blueprint Submitted!</h3>
                  <p className="text-sm text-muted-foreground mb-6 max-w-xs mx-auto">
                    Thank you for submitting your app details. We have received your requirements and will contact you at your email address to kickstart the wireframe design!
                  </p>
                  <Button
                    onClick={() => {
                      setIsSuccess(false);
                      if (typeof window !== "undefined" && (window as any).turnstile && widgetIdRef.current) {
                        (window as any).turnstile.reset(widgetIdRef.current);
                      }
                    }}
                    variant="outline"
                    className="w-full text-sm"
                  >
                    Submit Another Idea
                  </Button>
                </div>

                <form onSubmit={handleSubmit} className={isSuccess ? "hidden" : "space-y-4"}>

                  {/* User Email */}
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-sm font-semibold flex items-center gap-1.5">
                      <Mail className="size-3.5 text-muted-foreground" /> Your Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={clientEmail}
                      onChange={(e) => setClientEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-0"
                    />
                  </div>

                  {/* App Name */}
                  <div className="space-y-1.5">
                    <label htmlFor="app-name" className="text-sm font-semibold flex items-center gap-1.5">
                      <FileText className="size-3.5 text-muted-foreground" /> App Name (Optional)
                    </label>
                    <input
                      id="app-name"
                      type="text"
                      value={appName}
                      onChange={(e) => setAppName(e.target.value)}
                      placeholder="e.g., TrainerPulse SaaS"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                    />
                  </div>

                  {/* AI Paste Textarea */}
                  <div className="space-y-1.5">
                    <label htmlFor="ai-spec" className="text-sm font-semibold block">
                      Paste the AI-Generated Output:
                    </label>
                    <textarea
                      id="ai-spec"
                      required
                      value={aiSpecification}
                      onChange={(e) => setAiSpecification(e.target.value)}
                      placeholder="Paste the user journeys, features, and database requirements generated by ChatGPT or Claude..."
                      rows={8}
                      className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary font-mono text-xs"
                    />
                  </div>

                  {/* Turnstile Verification */}
                  <div className="flex justify-center py-2">
                    <div ref={turnstileContainerRef} id="turnstile-container" className="cf-turnstile"></div>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-5 text-sm font-semibold"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="size-4 animate-spin mr-2" />
                        Sending Blueprint...
                      </>
                    ) : (
                      <>
                        <Send className="size-4 mr-2" />
                        Submit Blueprint
                      </>
                    )}
                  </Button>

                  <p className="text-center text-xs text-muted-foreground mt-3">
                    Problems submitting? Email details directly to{" "}
                    <a href={`mailto:${email}`} className="text-primary hover:underline font-semibold">
                      {email}
                    </a>
                  </p>
                </form>
              </div>
            </div>
          </section>

          {/* Service Blueprint Deliverables Section */}
          <section className="mt-20 border-t pt-16">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold tracking-tight">What You Get in Your $199 Package</h2>
              <p className="text-muted-foreground mt-4">
                We take the raw requirements you submit and build a concrete blueprint, saving you weeks of development overhead and alignment issues.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

              {/* Deliverable 1 */}
              <div className="p-6 bg-card border rounded-2xl flex flex-col">
                <div className="size-10 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-4">
                  <Layers className="size-5" />
                </div>
                <h3 className="font-bold text-lg mb-2">1. Visual UI Wireframes</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  A comprehensive mapping of all main app screens, structural page layouts, and transitions. You see exactly how the user interacts.
                </p>
              </div>

              {/* Deliverable 2 */}
              <div className="p-6 bg-card border rounded-2xl flex flex-col">
                <div className="size-10 bg-emerald-500/10 text-emerald-500 rounded-xl flex items-center justify-center mb-4">
                  <Database className="size-5" />
                </div>
                <h3 className="font-bold text-lg mb-2">2. Supabase DB Schema</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  A fully designed relational database schema ready for Supabase. Includes table layouts, columns, relations, and basic row-level security (RLS).
                </p>
              </div>

              {/* Deliverable 3 */}
              <div className="p-6 bg-card border rounded-2xl flex flex-col">
                <div className="size-10 bg-purple-500/10 text-purple-500 rounded-xl flex items-center justify-center mb-4">
                  <CreditCard className="size-5" />
                </div>
                <h3 className="font-bold text-lg mb-2">3. Payment Strategy</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Integration layout for Stripe subscriptions, detailing customer portal flows, invoice webhooks, and billing cycle mappings.
                </p>
              </div>

              {/* Deliverable 4 */}
              <div className="p-6 bg-card border rounded-2xl flex flex-col">
                <div className="size-10 bg-blue-500/10 text-blue-500 rounded-xl flex items-center justify-center mb-4">
                  <Cpu className="size-5" />
                </div>
                <h3 className="font-bold text-lg mb-2">4. Technical Master Prompt</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  A precise technical prompt formatted for AI coding assistants (like Cursor, v0, or Bolt) that instructs them exactly how to generate the code base.
                </p>
              </div>

            </div>
          </section>

          {/* Stack Showcase Section */}
          <section className="mt-20 p-8 md:p-12 rounded-3xl bg-gradient-to-br from-primary/10 via-background to-secondary border flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="flex flex-col gap-3 max-w-2xl text-center lg:text-left">
              <h2 className="text-2xl md:text-3xl font-extrabold">Build on the Best Foundation</h2>
              <p className="text-muted-foreground leading-relaxed">
                By standardizing on **Next.js** for client-side speed, **Supabase** for database auto-syncing, and **Stripe** for monetization, we ensure your MVP isn't a throwaway prototype. It is built to grow into a fully scaled product.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <div className="p-4 border rounded-xl bg-card text-center flex-1">
                <span className="text-3xl font-bold text-primary">24h</span>
                <p className="text-xs text-muted-foreground mt-1">Average Response Time</p>
              </div>
              <div className="p-4 border rounded-xl bg-card text-center flex-1">
                <span className="text-3xl font-bold text-emerald-500">100%</span>
                <p className="text-xs text-muted-foreground mt-1">Developer Ready Specs</p>
              </div>
            </div>
          </section>

          {/* FAQs Section */}
          <section className="mt-20 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8 flex items-center justify-center gap-2">
              <HelpCircle className="size-6 text-primary" /> Frequently Asked Questions
            </h2>

            <div className="border rounded-2xl bg-card/30 p-6 md:p-8 backdrop-blur-sm shadow-sm divide-y divide-border">

              {/* FAQ 1 */}
              <details className="group py-5 first:pt-0 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-base md:text-lg font-semibold text-foreground focus:outline-none focus:text-primary transition-colors">
                  <span>What exactly do I get for $199?</span>
                  <span className="text-primary font-bold text-xl group-open:rotate-45 transition-transform duration-200">+</span>
                </summary>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  For $199, you will receive a comprehensive design and tech architectural package:
                  (1) Wireframe mapping of all core screens in your app,
                  (2) A complete SQL schema database diagram designed for Supabase/PostgreSQL,
                  (3) Checkout and licensing design mappings for Stripe, and
                  (4) A detailed technical engineering prompt that you can feed into AI code generation engines (Cursor, Bolt.new, v0) to build the app code.
                </p>
              </details>

              {/* FAQ 2 */}
              <details className="group py-5 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-base md:text-lg font-semibold text-foreground focus:outline-none focus:text-primary transition-colors">
                  <span>How long does it take to deliver the blueprint?</span>
                  <span className="text-primary font-bold text-xl group-open:rotate-45 transition-transform duration-200">+</span>
                </summary>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  Once you submit your requirements and we clarify any details, your blueprint is created and sent to your email within **2 to 3 business days**.
                </p>
              </details>

              {/* FAQ 3 */}
              <details className="group py-5 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-base md:text-lg font-semibold text-foreground focus:outline-none focus:text-primary transition-colors">
                  <span>Do you also write the code or build the app?</span>
                  <span className="text-primary font-bold text-xl group-open:rotate-45 transition-transform duration-200">+</span>
                </summary>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  The $199 package is strictly for the **planning, database architectural schema, wireframes, and prompting layout**. If you wish for us to develop and host the full Next.js & Supabase application for you, we will offer a custom development quote based on the blueprint specifications.
                </p>
              </details>

              {/* FAQ 4 */}
              <details className="group py-5 last:pb-0 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-base md:text-lg font-semibold text-foreground focus:outline-none focus:text-primary transition-colors">
                  <span>Is there any refund policy?</span>
                  <span className="text-primary font-bold text-xl group-open:rotate-45 transition-transform duration-200">+</span>
                </summary>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  Because this is a highly personalized architectural drafting service requiring manual work, we cannot offer full refunds once work has begun. However, we do include one round of modifications/reviews on the wireframes and schema to ensure you are fully satisfied.
                </p>
              </details>

            </div>
          </section>

        </div>
      </main>
    </>
  );
}
