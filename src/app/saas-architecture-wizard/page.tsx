import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { Slash, Sparkles } from "lucide-react";
import SectionHeader from "@/components/section-header";
import { companyName, HeaderNavItems, websiteURL } from "@/data/website-data";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import BreadcrumbNextLink from "@/components/breadcrumb-next-link";
import WizardContainer from "@/components/saas-architecture-wizard/wizard-container";

const pageTitle = "SaaS Architecture Wizard - Free AI Prompt Builder";
const pageDescription =
  "Generate a tailored production-grade SaaS architecture prompt for Next.js, Supabase, RLS policies, Stripe, and Vercel. Ready to paste into Cursor, v0, Claude, or Bolt.";
const canonicalUrl = `${websiteURL}/saas-architecture-wizard`;

export const metadata: Metadata = {
  title: `${pageTitle} | ${companyName}`,
  description: pageDescription,
  keywords: [
    "SaaS Architecture Wizard",
    "SaaS Prompt Generator",
    "Next.js SaaS Boilerplate",
    "Supabase Auth RLS",
    "Cursor AI SaaS Prompt",
    "v0 SaaS Architecture",
    "Stripe Subscription Database Schema",
    "Multi-tenant SaaS Architecture",
  ],
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: canonicalUrl,
    siteName: companyName,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
  },
};

export default function SaaSArchitectureWizardPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: pageTitle,
    description: pageDescription,
    url: canonicalUrl,
    applicationCategory: "DeveloperApplication",
    operatingSystem: "All",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    author: {
      "@type": "Organization",
      name: companyName,
      url: websiteURL,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

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
              <Slash />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbPage>SaaS Architecture Wizard</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <main id="main" className="py-10">
        <div className="container mx-auto px-5 xl:max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono font-medium mb-4">
              <Sparkles className="h-3.5 w-3.5" /> AI App Builder Companion
            </div>
            <SectionHeader caption="SaaS Architecture Wizard" />
            <p className="mt-4 text-muted-foreground text-base sm:text-lg leading-relaxed">
              Answer a few questions about your SaaS access scope, authentication, database schema, team permissions, and billing model. Get one production-grade master prompt ready to paste into Cursor, v0, Claude, or Bolt.
            </p>
          </div>

          <WizardContainer />
        </div>
      </main>
    </>
  );
}
