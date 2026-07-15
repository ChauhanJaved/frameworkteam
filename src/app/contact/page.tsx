"use client";

// External Imports
import React, { useState, useEffect, useRef } from "react";
import Script from "next/script";
import {
  Mail,
  User,
  MessageSquare,
  Send,
  Loader2,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Clock,
  Inbox
} from "lucide-react";

// Internal Imports
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { email, companyName, websiteURL, HeaderNavItems } from "@/data/website-data";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import BreadcrumbNextLink from "@/components/breadcrumb-next-link";
import SectionHeader from "@/components/section-header";
import { Slash } from "lucide-react";

export default function ContactPage() {
  const { toast } = useToast();

  // State for form
  const [name, setName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [inquiryType, setInquiryType] = useState("General Inquiry");
  const [message, setMessage] = useState("");
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const turnstileContainerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);

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

    if (message.trim().length < 10) {
      toast({
        title: "Message Too Short",
        description: "Please write a message with at least 10 characters.",
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

      const subject = `[${inquiryType}]`;
      const emailBody = `
=== NEW CONTACT FORM SUBMISSION ===
From: ${name}
Reply-To Email: ${clientEmail}
Inquiry Type: ${inquiryType}

Message:
${message}
      `;

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
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || `Server responded with status ${response.status}`);
      }

      toast({
        title: "Message Sent Successfully !",
        description: "We have received your message and will respond shortly.",
      });

      setIsSuccess(true);

      // Reset form fields
      setName("");
      setClientEmail("");
      setInquiryType("General Inquiry");
      setMessage("");
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

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": `Contact Us | ${companyName}`,
    "description": `Get in touch with ${companyName} for support, inquiries, and requests.`,
    "url": `${websiteURL}/contact`
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

      {/* Consistent Breadcrumb container outside main */}
      <div className="container mx-auto px-5 pt-24 xl:max-w-screen-xl">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbNextLink
                linkName={
                  HeaderNavItems.Home[0].toUpperCase() +
                  HeaderNavItems.Home.slice(1)
                }
                hrefActiveSection={`/#${HeaderNavItems.Home}`}
                headerActiveSection={HeaderNavItems.Home}
              />
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <Slash className="size-4" />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbPage>Contact</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <main className="min-h-screen bg-gradient-to-b from-background via-background to-secondary/30 pt-10 pb-20">
        <div className="container mx-auto px-5 xl:max-w-screen-xl">

          {/* Header */}
          <header className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 mb-6">
              <Clock className="size-3" />
              <span>Response in 12-24 Hours</span>
            </div>
            <SectionHeader
              caption="Contact Us"
              desc="Product Support | Development Inquiries | Purchase Assistance | Report an Issue"
              element="h1"
            />
          </header>

          {/* Contact Layout Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch max-w-5xl mx-auto">

            {/* Left Panel: Info Cards */}
            <div className="lg:col-span-5 flex flex-col gap-6 justify-center">

              {/* Card 1: Direct Support */}
              <div className="bg-card/50 border rounded-2xl p-6 backdrop-blur-md shadow-sm relative overflow-hidden">
                <div className="size-10 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-4">
                  <Inbox className="size-5" />
                </div>
                <h3 className="font-bold text-lg mb-2">Direct Inquiry</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Fill out our verification-protected contact form to ensure your request reaches the right queue immediately.
                </p>
                <p className="text-xs text-muted-foreground">
                  Problems submitting? Email us directly at: <br />
                  <a href={`mailto:${email}`} className="text-primary font-semibold hover:underline">{email}</a>
                </p>
              </div>

              {/* Card 2: Quality Guarantee */}
              <div className="bg-card/50 border rounded-2xl p-6 backdrop-blur-md shadow-sm relative overflow-hidden">
                <div className="size-10 bg-emerald-500/10 text-emerald-500 rounded-xl flex items-center justify-center mb-4">
                  <Sparkles className="size-5" />
                </div>
                <h3 className="font-bold text-lg mb-2">Premium Support</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  For licensed users of our templates and software, please include your purchase/order reference number in the message description for priority sorting.
                </p>
              </div>

            </div>

            {/* Right Panel: The Form */}
            <div className="lg:col-span-7">
              <div className="bg-card/70 border rounded-2xl p-6 md:p-8 backdrop-blur-md shadow-xl h-full flex flex-col justify-center">

                {/* Success View */}
                <div className={isSuccess ? "text-center py-8 animate-fade-in block" : "hidden"}>
                  <div className="mx-auto w-12 h-12 bg-emerald-100 dark:bg-emerald-950/45 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle2 className="size-6 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-foreground font-sans">Message Sent Successfully!</h3>
                  <p className="text-sm text-muted-foreground mb-6 max-w-sm mx-auto leading-relaxed">
                    Thank you for contacting us. We have successfully received your inquiry and our support team will reach out to you shortly.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Button
                      type="button"
                      onClick={() => {
                        setIsSuccess(false);
                        if (typeof window !== "undefined" && (window as any).turnstile && widgetIdRef.current) {
                          (window as any).turnstile.reset(widgetIdRef.current);
                        }
                      }}
                      variant="outline"
                      className="text-sm font-semibold"
                    >
                      Send Another Message
                    </Button>
                    <a href="/">
                      <Button type="button" className="text-sm font-semibold w-full sm:w-auto">
                        Back to Home
                        <ArrowRight className="size-4 ml-1.5" />
                      </Button>
                    </a>
                  </div>
                </div>

                {/* Form View */}
                <form onSubmit={handleSubmit} className={isSuccess ? "hidden" : "space-y-4"}>
                  <h2 className="text-xl font-bold mb-2">Send a Message</h2>

                  {/* User Name */}
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-sm font-semibold flex items-center gap-1.5">
                      <User className="size-3.5 text-muted-foreground" /> Your Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="John Doe"
                      className="flex h-10 w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-0"
                    />
                  </div>

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
                      placeholder="john@example.com"
                      className="flex h-10 w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-0"
                    />
                  </div>

                  {/* Inquiry Type */}
                  <div className="space-y-1.5">
                    <label htmlFor="inquiry-type" className="text-sm font-semibold block">
                      What is this regarding?
                    </label>
                    <select
                      id="inquiry-type"
                      value={inquiryType}
                      onChange={(e) => setInquiryType(e.target.value)}
                      className="flex h-10 w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-0 text-foreground"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Product Support">Product Support</option>
                      <option value="Development Services">Development Services</option>
                      <option value="Purchase/Billing">Purchase & Billing Inquiry</option>
                    </select>
                  </div>

                  {/* Message Area */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between items-center">
                      <label htmlFor="message" className="text-sm font-semibold flex items-center gap-1.5">
                        <MessageSquare className="size-3.5 text-muted-foreground" /> Message
                      </label>
                      <span className="text-[10px] text-muted-foreground">
                        {message.length} / 5000 chars
                      </span>
                    </div>
                    <textarea
                      id="message"
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value.slice(0, 5000))}
                      placeholder="Please write your detailed message (minimum 10 characters)..."
                      rows={5}
                      className="flex w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-0"
                    />
                  </div>

                  {/* Turnstile Container */}
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
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send className="size-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>

          </div>

        </div>
      </main>
    </>
  );
}
