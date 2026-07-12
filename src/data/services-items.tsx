import { ReactNode } from "react";
import { Metadata } from "next";
import Link from "next/link";
import { websiteURL, companyName } from "@/data/website-data";

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  iconName: string;
  features: string[];
  description: ReactNode;
  faqs: FAQItem[];
  metaData: Metadata;
}

export const serviceItems: ServiceItem[] = [
  {
    id: "custom-web-applications",
    title: "Custom Web Applications",
    shortDesc: "Build fast, scalable web applications tailored to your business processes using React, Next.js, and Supabase.",
    iconName: "Laptop",
    features: [
      "Custom architectures designed for your specific business logic",
      "High performance using Next.js Server Components and server-side rendering",
      "Robust, relational data structures powered by Supabase/PostgreSQL",
      "Fully responsive user interfaces looking flawless on mobile, tablet, and desktop",
      "Secure backend endpoints, session handling, and strict data sanitization",
      "Seamless integrations with third-party automation tools and APIs",
    ],
    description: (
      <div className="flex flex-col gap-4">
        <strong className="mt-10 text-xl font-bold">Custom Web App Development Tailored for Scale</strong>
        <p>
          Off-the-shelf software solutions often force your business workflows to adapt to their limitations. 
          Our Custom Web Application development service builds products designed around your specific processes. 
          By combining Next.js with TypeScript and Supabase, we create lightning-fast, high-integrity applications 
          capable of growing with your customer base.
        </p>
        <p>
          We emphasize clean code, modular folder structures, and robust security guidelines. From interactive 
          SaaS dashboards and client portal managers to sophisticated custom CRM tools, we ensure a high-performing 
          web interface that streamlines operations and drives company efficiency.
        </p>
        <strong className="mt-6 text-lg font-semibold">Our Development Methodology:</strong>
        <ul className="list-disc pl-5 flex flex-col gap-2">
          <li><strong>Discovery & Architecture:</strong> We map out your database schemas and user flows before writing a single line of code to prevent structural bottlenecks.</li>
          <li><strong>Modern UI/UX Design:</strong> Using Tailwind CSS and headless UI structures, we deliver high-fidelity, responsive, and themeable designs.</li>
          <li><strong>Edge-Optimized Performance:</strong> By using Next.js Server Components, we deliver static HTML assets to the client, accelerating initial loading speeds.</li>
          <li><strong>Security First:</strong> Strict Row-Level Security (RLS) keeps user data separated and secure at the database layer.</li>
        </ul>
      </div>
    ),
    faqs: [
      {
        question: "What technologies do you use for custom web app development?",
        answer: "We primarily build frontend layouts using React, Next.js, and TypeScript, styled with Tailwind CSS. For backend databases and APIs, we leverage Supabase, Node.js, and serverless Edge Functions."
      },
      {
        question: "How long does it take to build a custom web application?",
        answer: "Timelines depend heavily on system complexity. A basic dashboard or client tool takes 4 to 6 weeks, whereas complex SaaS products or CRM tools take 8 to 12 weeks from scoping to production deployment."
      },
      {
        question: "Will the web application be optimized for mobile devices?",
        answer: "Yes, all applications we engineer use modern responsive design grids. Your custom web application will work seamlessly on smartphones, tablets, laptops, and desktop displays."
      }
    ],
    metaData: {
      title: `Custom Web Applications Development | ${companyName}`,
      description: "Build fast, scalable custom web applications tailored to your business processes using React, Next.js, and Supabase. Secure and responsive.",
      keywords: ["custom web applications", "React web app development", "Next.js web development", "Supabase developer", "fullstack web development", "enterprise web applications"],
    },
  },
  {
    id: "e-commerce-development",
    title: "E-commerce Development",
    shortDesc: "Create high-performance online stores powered by Shopify or headless commerce with custom storefronts built in Next.js.",
    iconName: "ShoppingBag",
    features: [
      "Headless commerce architecture using Next.js for blazing-fast speed",
      "Custom Shopify storefronts and dynamic Liquid template development",
      "Optimized product search, catalog filtering, and smart pagination",
      "Secure shopping cart systems and optimized multi-page checkout paths",
      "Inventory tracking, discount coupon structures, and shipping calculators",
      "Conversion Rate Optimization (CRO) to maximize online sales",
    ],
    description: (
      <div className="flex flex-col gap-4">
        <strong className="mt-10 text-xl font-bold">Drive Conversions with High-Speed E-commerce</strong>
        <p>
          Page speed directly impacts conversion rates. A one-second delay in mobile load times can slash conversions by up to 20%. 
          Our E-commerce development services combine the stability of commerce backend platforms (like Shopify or BigCommerce) 
          with the exceptional speed of headless Next.js frontends.
        </p>
        <p>
          By decoupling your backend from the frontend, we build online shops that load instantly, browse fluidly, and provide 
          unlimited design flexibility. Manage products easily on Shopify, while users interact with a premium, custom interface 
          specifically optimized for conversion rate performance.
        </p>
        <strong className="mt-6 text-lg font-semibold">E-commerce Capabilities:</strong>
        <ul className="list-disc pl-5 flex flex-col gap-2">
          <li><strong>Headless Next.js Commerce:</strong> Create unique shopping layouts that load in milliseconds and improve SEO visibility.</li>
          <li><strong>Shopify Custom Stores:</strong> Custom theme and app setups matching your brand's unique identity.</li>
          <li><strong>Cart & Payment Flows:</strong> Highly optimized layouts to prevent checkout abandonment.</li>
          <li><strong>Analytics & Tracking:</strong> Integration with Google Analytics 4, Meta Pixel, and server-side conversion tracking.</li>
        </ul>
      </div>
    ),
    faqs: [
      {
        question: "Do you build custom Shopify storefronts or headless e-commerce?",
        answer: "We support both. We develop custom Liquid themes directly on Shopify and build decoupled headless stores using Next.js and the Shopify Storefront API for exceptional page speeds and design freedom."
      },
      {
        question: "Can you migrate our current e-commerce website?",
        answer: "Yes. We migrate legacy WooCommerce, Magento, or custom web storefronts to headless Next.js, syncing your existing catalogs, customer details, and past purchase histories."
      },
      {
        question: "How do you optimize online stores for search engines?",
        answer: "We implement schema.org product schemas, optimize image sizes, speed up Core Web Vitals, write semantic tags, and configure crawlable dynamic sitemaps so products rank higher on Google Search."
      }
    ],
    metaData: {
      title: `E-commerce Store Development | Headless Shopify | ${companyName}`,
      description: "Create high-performance online stores powered by Shopify or headless commerce. Custom Next.js storefronts built for maximum conversions.",
      keywords: ["e-commerce development", "headless Shopify", "Next.js e-commerce storefront", "online store developers", "Shopify API integration"],
    },
  },
  {
    id: "saas-application-development",
    title: "SaaS Application Development",
    shortDesc: "Launch modern SaaS products with authentication, subscriptions, dashboards, user management, and scalable architecture.",
    iconName: "Layers",
    features: [
      "Multi-tenant database architectures keeping client schemas isolated",
      "Recurring payment schedules and subscription tier workflows (Stripe)",
      "Dynamic interactive user dashboards with rich analytics reports",
      "Granular user roles, permissions, and seat-based license managers",
      "Standard transactional email pipelines for billing and welcome guides",
      "Optimized sign-up funnels and onboarding flows to increase conversion",
    ],
    description: (
      <div className="flex flex-col gap-4">
        <strong className="mt-10 text-xl font-bold">Launch and Scale Your SaaS Platform</strong>
        <p>
          Building a Software-as-a-Service (SaaS) product requires balancing authentication, security, database performance, 
          billing cycles, and user dashboards. We build modern SaaS applications from scratch, helping you launch 
          production-ready products built on top of high-integrity tech stacks.
        </p>
        <p>
          We rely on Next.js to serve fast UI dashboards, Supabase for robust database schemas with authentication, and 
          Stripe for secure billing and subscriptions. This ensures you launch with a codebase prepared for hundreds of 
          simultaneous users and easy horizontal scaling.
        </p>
        <strong className="mt-6 text-lg font-semibold">SaaS Stack Features:</strong>
        <ul className="list-disc pl-5 flex flex-col gap-2">
          <li><strong>Subscription Lifecycles:</strong> Automated webhooks handling upgrades, downgrades, cancellations, and failed payments.</li>
          <li><strong>Role-Based Authentication:</strong> Secure workspace structures where admins, editors, and viewers have clear restrictions.</li>
          <li><strong>Real-Time Analytics:</strong> Interactive graphs tracking platform usage, billing status, and core metrics.</li>
          <li><strong>Scalable Architecture:</strong> Built using clean MVC/modular patterns for future feature expansion.</li>
        </ul>
      </div>
    ),
    faqs: [
      {
        question: "How do you isolate database records in SaaS multi-tenancy?",
        answer: "We implement PostgreSQL Row-Level Security (RLS) within our database schemas, enforcing strict lookup policies based on verified JWT session IDs to keep user accounts securely separated."
      },
      {
        question: "Can we integrate tiered billing and team seat plans?",
        answer: "Yes. We set up Stripe Billing to handle seat license calculations, free trials, coupon codes, tax calculations, and dynamic pricing metrics."
      },
      {
        question: "Will our SaaS platform support automated emails?",
        answer: "Yes, we integrate email pipelines (e.g., Resend, SendGrid) to dispatch transactional triggers like signup welcomes, invoice receipts, password changes, and payment alerts."
      }
    ],
    metaData: {
      title: `SaaS Application Development Services | ${companyName}`,
      description: "Launch modern SaaS products with authentication, subscriptions, dashboards, user management, and scalable architecture built on Next.js and Supabase.",
      keywords: ["SaaS development", "SaaS dashboard builders", "Stripe subscription integration", "multi tenant web apps", "software as a service developer"],
    },
  },
  {
    id: "admin-dashboards-internal-tools",
    title: "Admin Dashboards & Internal Tools",
    shortDesc: "Develop secure dashboards, CRMs, inventory systems, analytics portals, and business management tools.",
    iconName: "LayoutDashboard",
    features: [
      "Custom business management platforms, CRMs, and ERP systems",
      "Advanced, high-performance data tables with sorting, filtering, and exports",
      "Interactive data visualizations, charts, and metrics cards",
      "Role-Based Access Control (RBAC) ensuring precise permissions",
      "Automated CSV/Excel file parsers and report generation pipelines",
      "Direct integration with your existing databases and backend systems",
    ],
    description: (
      <div className="flex flex-col gap-4">
        <strong className="mt-10 text-xl font-bold">Empower Your Team with Custom Internal Software</strong>
        <p>
          Generic spreadsheets and disjointed tools limit your business growth. We build secure internal tools, CRM solutions, 
          and analytics portals that consolidate your data streams, automate manual workflows, and optimize daily operations.
        </p>
        <p>
          We design responsive interfaces with a primary focus on utility: fast data loading, search capabilities, 
          and intuitive layouts. Whether you need to manage product inventory, audit customer records, or visualize monthly sales metrics, 
          we engineer tools that look beautiful and work efficiently.
        </p>
      </div>
    ),
    faqs: [
      {
        question: "Can you connect an admin portal to our existing database?",
        answer: "Yes, we build dashboards that safely hook into existing database layers including PostgreSQL, MySQL, MS SQL, Firestore, or custom API endpoints."
      },
      {
        question: "How are permissions structured in your internal CRMs?",
        answer: "We develop granular Role-Based Access Control (RBAC). You can define which group of users can view, modify, or delete specific items."
      },
      {
        question: "Do you support exporting data reports?",
        answer: "Yes, we integrate components to export records, table filters, and visual analytics charts into CSV files, Excel spreadsheets, or clean PDFs."
      }
    ],
    metaData: {
      title: `Admin Dashboards & Internal Tools | CRM Developers | ${companyName}`,
      description: "Develop secure admin dashboards, custom CRMs, inventory systems, and business management tools tailored to your operational needs.",
      keywords: ["custom admin dashboard", "CRM development", "internal business tools", "analytics portal", "inventory management system"],
    },
  },
  {
    id: "mvp-development",
    title: "MVP Development",
    shortDesc: "Turn your startup idea into a production-ready MVP quickly with a modern, scalable tech stack.",
    iconName: "Rocket",
    features: [
      "Rapid turnaround to test your product concepts in live markets",
      "Focus on the Minimum Viable Product core features to maximize value",
      "Scalable coding practices that don't require full rewrites later",
      "Integrated analytics tracking to observe early user behavior",
      "Clean handoff documentation for your internal developers",
      "Cost-effective scoping to launch on time and on budget",
    ],
    description: (
      <div className="flex flex-col gap-4">
        <strong className="mt-10 text-xl font-bold">Build Your Startup MVP The Right Way</strong>
        <p>
          Launching a startup is a race against time and budget. The key to a successful Minimum Viable Product (MVP) is 
          building it quickly enough to test early, yet robustly enough that early users encounter a premium, bug-free experience. 
          We specialize in high-velocity MVP development, transforming concepts into responsive web applications in weeks.
        </p>
        <p>
          We avoid over-engineering while ensuring that the base code is clean and scalable. By leveraging frameworks like 
          Next.js, Tailwind CSS, and Supabase, we give you a launchpad that is ready to receive feedback and scale seamlessly 
          upon finding product-market fit.
        </p>
        <p className="mt-4 pt-4 border-t border-border/50 text-sm">
          Not ready to write code yet? Get a structured plan first! Try our <Link href="/mvp" className="text-primary font-semibold hover:underline">MVP Planning &amp; Architectural Blueprint</Link> service to design your database schema, wireframes, and developer prompts before coding.
        </p>
      </div>
    ),
    faqs: [
      {
        question: "How fast can you launch an MVP?",
        answer: "Most MVPs we launch take 3 to 6 weeks, depending on key feature priorities. We focus on building the absolute essentials to get your product in front of users."
      },
      {
        question: "Is MVP code throwaway, or is it scalable?",
        answer: "We write clean, modular Next.js and TypeScript code from day one. You will not have to throw it away; you can scale the existing code base as you secure funding or client traction."
      },
      {
        question: "Do you assist with product scoping for startups?",
        answer: "Yes. We help startups strip away non-essential features and select the most efficient technologies to stay on timeline and budget."
      }
    ],
    metaData: {
      title: `Startup MVP Development Services | Rapid Prototyping | ${companyName}`,
      description: "Turn your startup idea into a production-ready MVP quickly. We build functional, scalable MVPs to test your market assumptions fast.",
      keywords: ["MVP development", "startup software developer", "rapid prototyping web apps", "build minimum viable product"],
    },
  },
  {
    id: "headless-cms-websites",
    title: "Headless CMS Websites",
    shortDesc: "Build blazing-fast websites connected to Sanity, Strapi, Contentful, Hygraph, Directus, or other headless CMS platforms.",
    iconName: "Globe",
    features: [
      "Decoupled architecture for superior security and lightning page speeds",
      "Integration with Sanity, Strapi, Contentful, Hygraph, and more",
      "Custom structured content schemas matching your company documents",
      "Static Site Generation (SSG) with ISR for instantaneous page loads",
      "Perfect Core Web Vitals performance driving higher Google search ranks",
      "Global CDN caching ensuring reliable uptime under peak traffic load",
    ],
    description: (
      <div className="flex flex-col gap-4">
        <strong className="mt-10 text-xl font-bold">Unleash Speed with Headless CMS Architectures</strong>
        <p>
          Traditional CMS platforms like WordPress run heavy database queries on every single page load, creating security risks 
          and slower loading times. A Headless CMS architecture separates your content editing dashboard from your website frontend.
        </p>
        <p>
          We build headless websites using Next.js linked to premium engines like Sanity, Strapi, or Contentful. Your editors get a 
          modern content editor, while your visitors interact with pre-rendered, highly secure pages hosted on global CDNs.
        </p>
      </div>
    ),
    faqs: [
      {
        question: "What Headless CMS engines do you support?",
        answer: "We support Sanity, Strapi, Contentful, Hygraph, and Directus, choosing the appropriate option depending on whether you need a hosted cloud database or a self-managed server."
      },
      {
        question: "Why is a headless CMS site better for SEO than WordPress?",
        answer: "Because Next.js pre-compiles pages into lightweight static HTML. This results in loading speeds under 1 second, scoring 95+ on Core Web Vitals, which is a major ranking signal for search engine bots."
      },
      {
        question: "Are headless websites secure?",
        answer: "Yes, because there is no direct connection between your site's frontend and the database server. This decoupled setup removes typical attack vectors like SQL injections."
      }
    ],
    metaData: {
      title: `Headless CMS Development | Sanity & Strapi Websites | ${companyName}`,
      description: "Build blazing-fast headless CMS websites connected to Sanity, Strapi, Contentful, and more. Exceptional speed and modern content setups.",
      keywords: ["headless CMS website", "Sanity developer", "Strapi development company", "Contentful integration", "static site generation"],
    },
  },
  {
    id: "cms-integration",
    title: "CMS Integration",
    shortDesc: "Integrate your React or Next.js application with your preferred CMS so content can be managed without developers.",
    iconName: "Settings",
    features: [
      "Connect existing frontend codebases to modern CMS APIs",
      "Visual page building setups and modular block editors",
      "Staging and preview URLs for editors to review drafts",
      "Media asset optimization and delivery configurations",
      "Automated rebuild triggers via secure CMS webhook configurations",
      "Complete code separation so marketing updates don't break logic",
    ],
    description: (
      <div className="flex flex-col gap-4">
        <strong className="mt-10 text-xl font-bold">Put Marketing in Control of Content</strong>
        <p>
          Your developers shouldn't have to change code just to fix a typo or add a blog post. We integrate custom 
          React and Next.js applications with headless CMS platforms, giving your marketing team complete autonomy.
        </p>
        <p>
          We set up visual block schemas, preview environments, and webhooks. When editors click "Publish", the site automatically 
          rebuilds or updates incrementally via Next.js Incremental Static Regeneration (ISR)—keeping content fresh without developer intervention.
        </p>
      </div>
    ),
    faqs: [
      {
        question: "Can you connect an existing Next.js app to a CMS backend?",
        answer: "Yes. We configure content fetching utilities and build modular components that translate your CMS fields into layout sections in your existing React/Next.js files."
      },
      {
        question: "Do content editors need technical skills to update pages?",
        answer: "No. We set up user-friendly dashboard interfaces (rich text, block builders, media asset pickers) so anyone can publish content without writing code."
      },
      {
        question: "How long does a rebuild take when publishing CMS content?",
        answer: "We set up Next.js Incremental Static Regeneration (ISR). The page updates in the background in less than a second, without requiring a full code rebuild."
      }
    ],
    metaData: {
      title: `CMS Integration Services | Next.js Content Systems | ${companyName}`,
      description: "Connect your Next.js frontend to headless CMS platforms. Let your team manage content, blogs, and layouts without touching code.",
      keywords: ["CMS integration", "Next.js CMS developers", "headless content integrations", "automated build webhooks"],
    },
  },
  {
    id: "authentication-user-portals",
    title: "Authentication & User Portals",
    shortDesc: "Implement secure login systems, role-based access, member portals, and protected content with Supabase Auth or Clerk.",
    iconName: "Lock",
    features: [
      "Secure login systems, signups, and password reset flows",
      "Social Oauth integration (Google, GitHub, Apple, Microsoft)",
      "Magic Link and OTP login methods for friction-free entries",
      "Role-Based Access Control (RBAC) protecting secure files and views",
      "Middleware routing security keeping user sessions valid",
      "Integration with secure auth providers like Supabase Auth or Clerk",
    ],
    description: (
      <div className="flex flex-col gap-4">
        <strong className="mt-10 text-xl font-bold">Secure and Scalable Authentication Services</strong>
        <p>
          Protecting user data is critical. We build secure authentication gateways and private member portals that shield 
          your proprietary data. We follow authentication standards (JWT, secure cookies, CORS policies) to prevent data leaks.
        </p>
        <p>
          Whether you need a simple client dashboard, a premium paid-member portal, or enterprise-grade authorization flows 
          using Supabase Auth or Clerk, we structure the backend routes and middleware to keep your portal secure and intuitive.
        </p>
      </div>
    ),
    faqs: [
      {
        question: "What auth providers do you integrate?",
        answer: "We primarily implement Clerk (ideal for user portals and rapid dashboard setups) or Supabase Auth (excellent for direct database link-ups, custom metadata, and PostgreSQL RLS support)."
      },
      {
        question: "Do you support OAuth logins and Passwordless entries?",
        answer: "Yes. We configure Google, GitHub, Microsoft, Apple, or custom social integrations, as well as passwordless Magic Link and OTP setups."
      },
      {
        question: "How do you protect member-only pages?",
        answer: "We write Next.js edge Middleware to intercept page requests and verify user session tokens before loading layouts, instantly redirecting unauthenticated visitors to login screens."
      }
    ],
    metaData: {
      title: `Secure Authentication & Client Portals | ${companyName}`,
      description: "Implement secure login portals, role-based access, and member dashboards using Supabase Auth, Clerk, and Next.js middleware.",
      keywords: ["authentication systems", "Clerk developer", "Supabase Auth setup", "secure user portals", "role based access control"],
    },
  },
  {
    id: "payment-integration",
    title: "Payment Integration",
    shortDesc: "Accept payments using Stripe, Razorpay, PayPal, or other payment providers with secure checkout flows.",
    iconName: "CreditCard",
    features: [
      "Stripe Checkout, Elements, and Billing portal setups",
      "Global multi-currency support, tax calculations, and localized methods",
      "Secure Webhook endpoints handling transaction updates in real time",
      "Recurring monthly subscriptions and complex seat-based pricing",
      "Automated invoice triggers, receipt mailers, and refund workflows",
      "Fully SCA (Strong Customer Authentication) and PCI-compliant checkouts",
    ],
    description: (
      <div className="flex flex-col gap-4">
        <strong className="mt-10 text-xl font-bold">Monetize Your App with Secure Payment Checkout</strong>
        <p>
          A buggy check-out flow is the fastest way to lose customers. We construct robust payment checkout flows 
          that ensure transactions complete securely. We integrate major gateways like Stripe, Razorpay, and PayPal.
        </p>
        <p>
          Our setups handle webhooks, currency translations, automated subscription updates, and billing failures, 
          guaranteeing your system syncs with the database when payments succeed or fail.
        </p>
      </div>
    ),
    faqs: [
      {
        question: "What payment platforms do you work with?",
        answer: "We support Stripe (global), PayPal, and Razorpay (India), configuring the appropriate checkout layout depending on your target markets."
      },
      {
        question: "How are recurring billing plans and invoices configured?",
        answer: "We hook checkouts into Stripe Billing, synchronizing database events (upgrades, downgrades, defaults) through webhooks while triggering automated receipts and invoice PDFs."
      },
      {
        question: "Is user credit card data saved on our servers?",
        answer: "No. We implement secure checkout windows or embedded iFrames (like Stripe Elements) so card numbers go directly to the processor, ensuring PCI compliance."
      }
    ],
    metaData: {
      title: `Stripe & Payment Gateway Integration Services | ${companyName}`,
      description: "Integrate secure checkouts, subscription billing, and multi-currency billing using Stripe, PayPal, or Razorpay with Next.js.",
      keywords: ["payment integration", "Stripe developer", "recurring billing systems", "secure payment gateway integration", "subscription flows"],
    },
  },
  {
    id: "api-development-integration",
    title: "API Development & Integration",
    shortDesc: "Connect third-party APIs or build custom backend APIs for seamless data exchange and automation.",
    iconName: "Webhook",
    features: [
      "Design of secure, self-documenting RESTful or GraphQL APIs",
      "Third-party integrations (Salesforce, HubSpot, Zapier, Twilio)",
      "Secure API key management and token verification practices",
      "Optimized query caching, throttling, and pagination limits",
      "Automated background cron jobs and asynchronous queue setups",
      "Comprehensive API response error-handling schemas",
    ],
    description: (
      <div className="flex flex-col gap-4">
        <strong className="mt-10 text-xl font-bold">Connect and Automate Your Business Data Flow</strong>
        <p>
          Modern applications thrive on data synchronization. We develop clean, high-performance API architectures 
          that bridge your system with third-party software like CRMs, messaging queues, and custom databases.
        </p>
        <p>
          We focus on writing secure endpoints, parsing webhook payloads, and organizing async workers. This guarantees 
          that large data transfers complete reliably, without timing out or slowing down your user interface.
        </p>
      </div>
    ),
    faqs: [
      {
        question: "What backends do you use to build custom APIs?",
        answer: "We write serverless API endpoints using Next.js routes, Node.js/Express, or Deno Edge Functions, documenting outputs clearly for easy developer reference."
      },
      {
        question: "How do you protect backend routes from malicious attacks?",
        answer: "We enforce secure JWT authorization, check request validation schemas, apply rate limiting, and write secure CORS policy rules."
      },
      {
        question: "Can you connect platforms like HubSpot or Salesforce?",
        answer: "Yes. We develop custom integrations that sync user events, capture customer leads, and trigger SMS/Email notifications through Twilio and customer databases."
      }
    ],
    metaData: {
      title: `Custom API Development & Integrations | ${companyName}`,
      description: "Build robust REST/GraphQL APIs or integrate third-party web services for automated data flows and business pipelines.",
      keywords: ["API development", "integrate third party APIs", "REST API developers", "GraphQL setup", "webhook automation"],
    },
  },
  {
    id: "supabase-backend-development",
    title: "Supabase Backend Development",
    shortDesc: "Design scalable databases, authentication, storage, Edge Functions, and real-time features using Supabase.",
    iconName: "Database",
    features: [
      "Relational database schema engineering (PostgreSQL)",
      "Granular Row-Level Security (RLS) keeping client queries isolated",
      "Deno Edge Functions for serverless backend logic with low latency",
      "Real-time database listener connections for instant UI sync",
      "Asset hosting buckets with custom upload limits and access checks",
      "Database migrations tracking versions for deployment safety",
    ],
    description: (
      <div className="flex flex-col gap-4">
        <strong className="mt-10 text-xl font-bold">Supabase: The Modern PostgreSQL Backend Solution</strong>
        <p>
          Supabase offers developers the full power of PostgreSQL combined with real-time sync, file storage, 
          serverless edge functions, and user management. We specialize in building secure, production-grade backends using Supabase.
        </p>
        <p>
          We optimize query speeds, write database trigger functions, establish security policies, and deploy edge scripts. 
          This provides you with a robust database infrastructure that is secure and scalable right from the start.
        </p>
      </div>
    ),
    faqs: [
      {
        question: "Why use Supabase instead of traditional PostgreSQL databases?",
        answer: "Supabase streamlines development by bundle-packaging auto-generated REST APIs, secure user logins, storage buckets, and serverless Edge Functions directly on top of a powerful PostgreSQL engine."
      },
      {
        question: "How does PostgreSQL Row-Level Security (RLS) improve security?",
        answer: "RLS operates as a strict firewall inside the database. It validates user context tags on every query, preventing anyone from inspecting other clients' tables."
      },
      {
        question: "Can we write custom server-side logic in Supabase?",
        answer: "Yes, we write serverless Edge Functions (using Deno/TypeScript) for backend logic such as token validation, payment webhooks, or API requests."
      }
    ],
    metaData: {
      title: `Supabase Backend Development & PostgreSQL Design | ${companyName}`,
      description: "Design secure PostgreSQL databases, configure Row-Level Security, and deploy Edge Functions using Supabase.",
      keywords: ["Supabase development", "PostgreSQL database designer", "Row Level Security RLS", "Supabase Edge Functions"],
    },
  },
  {
    id: "react-nextjs-development",
    title: "React & Next.js Development",
    shortDesc: "Develop modern, responsive, SEO-friendly applications using the latest React and Next.js features.",
    iconName: "Atom",
    features: [
      "React Server Components (RSC) lowering initial JS bundle weight",
      "Dynamic routing and layout nesting (Next.js App Router)",
      "Server Actions handling form submissions without fetch routes",
      "Optimized assets via native Image, Font, and Script components",
      "Typesafe React coding with strict TypeScript compiler checks",
      "Modern client state models (Zustand, Context, React Query)",
    ],
    description: (
      <div className="flex flex-col gap-4">
        <strong className="mt-10 text-xl font-bold">Next.js Specialists Building Premium Frontends</strong>
        <p>
          We build premium frontend applications using React and Next.js. Next.js is our framework of choice because 
          it provides a great user experience through server rendering, route pre-fetching, and fast load speeds.
        </p>
        <p>
          By writing modular React components, using Tailwind CSS, and adhering to strict TypeScript guidelines, we ensure 
          that your website frontend is easy to maintain, looks beautiful, and loads instantly.
        </p>
      </div>
    ),
    faqs: [
      {
        question: "What are the core benefits of using Next.js App Router?",
        answer: "It introduces React Server Components, server actions, layout nesting, and static generation mechanisms, which drastically improve load speed, reduce bundle sizes, and optimize SEO indexing."
      },
      {
        question: "How do you style Next.js web applications?",
        answer: "We use Tailwind CSS for highly performant and responsive utilities, maintaining clean modular component files."
      },
      {
        question: "How do you handle global state in Next.js applications?",
        answer: "We implement lightweight libraries like Zustand or React Context, keeping state management clean and localized where possible."
      }
    ],
    metaData: {
      title: `React & Next.js Development Services | ${companyName}`,
      description: "Develop modern, responsive, SEO-friendly web apps using Next.js Server Components, Server Actions, and TypeScript.",
      keywords: ["React development", "Next.js App Router", "Server Components", "TypeScript React developer", "NextJS agency"],
    },
  },
  {
    id: "performance-optimization",
    title: "Performance Optimization",
    shortDesc: "Improve Core Web Vitals, loading speed, SEO, and user experience for existing React and Next.js applications.",
    iconName: "Gauge",
    features: [
      "Audit of bundle sizes, dependency bottlenecks, and script load orders",
      "Optimized Core Web Vitals (LCP, INP, CLS) for better rankings",
      "Modern image compression, lazy-loading, and layout shift fixes",
      "Edge caching policies and Incremental Static Regeneration setups",
      "Removal of unused CSS and Javascript to decrease script load",
      "Server-side rendering implementation to speed up initial paint times",
    ],
    description: (
      <div className="flex flex-col gap-4">
        <strong className="mt-10 text-xl font-bold">Boost Conversion Rates and Search Visibility</strong>
        <p>
          Slow load times lead to high bounce rates and hurt your organic search rankings. We audit your existing 
          React or Next.js codebases, identify performance bottlenecks, and implement optimization strategies.
        </p>
        <p>
          We optimize your Core Web Vitals, reduce bundle weights, resolve layout shifts, and implement caching 
          to ensure your site loads instantly on mobile connections.
        </p>
      </div>
    ),
    faqs: [
      {
        question: "What are Core Web Vitals and why are they important?",
        answer: "They are user experience metrics (Largest Contentful Paint, Interaction to Next Paint, Cumulative Layout Shift) monitored by Google to score and rank site speeds on search listings."
      },
      {
        question: "How do you improve image asset load performance?",
        answer: "We configure Next.js Image caching, convert formats to WebP/AVIF, apply responsive resizing sizes, and set placeholder structures to prevent layout shifts."
      },
      {
        question: "Can you optimize heavy external javascript packages?",
        answer: "Yes. We defer non-essential scripts, lazy-load heavy widgets, and split code modules so first-paint assets load instantly."
      }
    ],
    metaData: {
      title: `Web Performance Optimization | Next.js Core Web Vitals | ${companyName}`,
      description: "Improve Core Web Vitals, loading speeds, and SEO rankings for existing React and Next.js web applications.",
      keywords: ["performance optimization", "Core Web Vitals", "Lighthouse audit score", "Next.js speed optimization", "lazy loading"],
    },
  },
  {
    id: "migration-modernization",
    title: "Migration & Modernization",
    shortDesc: "Upgrade legacy applications or migrate websites to React, Next.js, and modern headless architectures.",
    iconName: "RefreshCw",
    features: [
      "Zero-downtime database and website migration strategies",
      "Refactoring legacy platforms into clean Next.js/React layouts",
      "Converting Javascript or PHP systems to type-safe TypeScript code",
      "Migration of databases to PostgreSQL / Supabase structures",
      "Preservation of existing SEO index links and redirect rules",
      "Clean, maintainable setup with modern components and styling",
    ],
    description: (
      <div className="flex flex-col gap-4">
        <strong className="mt-10 text-xl font-bold">Upgrade Your Legacy Software Infrastructure</strong>
        <p>
          Legacy systems can slow down your business operations and lead to high maintenance costs. We help you 
          migrate old websites, WordPress configurations, or legacy software structures to modern Next.js and Supabase stacks.
        </p>
        <p>
          We handle migration paths, structure redirects to preserve your SEO rankings, and rewrite legacy logic into 
          type-safe, component-driven layouts.
        </p>
      </div>
    ),
    faqs: [
      {
        question: "Will our website lose Google ranking search value during migration?",
        answer: "No. We establish redirect tables (301 status links), coordinate sitemaps, and audit page headers so search spiders seamlessly map the transition."
      },
      {
        question: "How do you migrate databases with live user records?",
        answer: "We plan migrations in staging, execute script checks to convert SQL/NoSQL schemas, test data integrity, and run a final delta-sync before switching DNS records with zero system downtime."
      },
      {
        question: "Why should we migrate our site to TypeScript?",
        answer: "TypeScript introduces structural compile-time typing, allowing us to find and fix potential bugs before deployment, making the app much easier to maintain."
      }
    ],
    metaData: {
      title: `Website Migration & Code Modernization Services | ${companyName}`,
      description: "Upgrade legacy applications or migrate websites to React, Next.js, and modern headless backend architectures safely.",
      keywords: ["modernize legacy code", "Next.js migration", "WordPress to Next.js", "database migration", "rewrite software typescript"],
    },
  },
  {
    id: "ai-powered-web-applications",
    title: "AI-Powered Web Applications",
    shortDesc: "Integrate OpenAI, Anthropic, or other AI models to build chatbots, content generation, search, and intelligent workflows.",
    iconName: "Brain",
    features: [
      "OpenAI GPT and Anthropic Claude integration for custom workflows",
      "Vector embeddings and similarity searches for semantic indexing",
      "Retrieval-Augmented Generation (RAG) providing context-based answers",
      "Real-time streaming text responses inside user interface layouts",
      "AI-assisted code blocks, automated content generation, and chat tools",
      "Secure prompt engineering structures keeping API keys protected",
    ],
    description: (
      <div className="flex flex-col gap-4">
        <strong className="mt-10 text-xl font-bold">Integrate Intelligent Workflows Into Your Application</strong>
        <p>
          AI integration goes beyond simple chat modules. We build custom applications that leverage Large Language Models 
          (LLMs) from OpenAI and Anthropic to automate content creation, analyze datasets, and provide intelligent user assistance.
        </p>
        <p>
          We integrate vector databases, configure context retrieval pipelines, and stream API responses to deliver 
          fast, intelligent, and highly secure AI experiences.
        </p>
      </div>
    ),
    faqs: [
      {
        question: "What LLM interfaces do you integrate?",
        answer: "We connect OpenAI (GPT models), Anthropic (Claude models), or open-source solutions like Llama via secure API calls."
      },
      {
        question: "What is Retrieval-Augmented Generation (RAG)?",
        answer: "RAG connects AI models to your private knowledge base. It indexes business data, searches for context matches, and passes information to the model to produce accurate, hallucination-free answers."
      },
      {
        question: "How do you prevent prompt injection and secure keys?",
        answer: "We process all prompt pipelines on secure backend edge utilities and never display keys or raw prompts on browser client configurations."
      }
    ],
    metaData: {
      title: `AI-Powered Web Application Development | LLM Integration | ${companyName}`,
      description: "Integrate OpenAI, Anthropic Claude, and custom LLMs into web systems to build smart search, chat helpers, and automated pipelines.",
      keywords: ["AI web development", "OpenAI integration", "Anthropic Claude API", "vector database setup", "Retrieval Augmented Generation RAG"],
    },
  },
];
