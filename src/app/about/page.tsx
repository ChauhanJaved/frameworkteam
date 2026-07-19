"use client";

// External Imports
import React from "react";
import Image from "next/image";
import {
  Calendar,
  Linkedin,
  Github,
  Zap,
  Users,
  ShieldCheck,
  TrendingDown,
  ChevronRight,
  Sparkles,
  Award,
  ArrowUpRight,
  Slash
} from "lucide-react";

// Internal Imports
import { companyName, websiteURL, HeaderNavItems } from "@/data/website-data";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import BreadcrumbNextLink from "@/components/breadcrumb-next-link";
import SectionHeader from "@/components/section-header";

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": `About Us | ${companyName}`,
    "description": `Learn about the journey of ${companyName} since 2001, meet founder Javed Chauhan, and explore our agile remote development model.`,
    "url": `${websiteURL}/about`,
  };

  const timelineEvents = [
    {
      year: "2001",
      title: "Founding & Classic .NET Era",
      desc: "Founded by Javed Chauhan as a hands-on software development venture, specializing in classic programming and robust desktop applications on the .NET framework.",
    },
    {
      year: "2012",
      title: "Cloud & SaaS Transition",
      desc: "Navigated the tectonic technology shift, migrating core workflows from native desktop platforms to scalable, cloud-native SaaS ecosystems.",
    },
    {
      year: "2020",
      title: "Headless Architectures",
      desc: "Integrated cutting-edge stack design: React, Next.js, and Supabase database architectures to build fast, lightweight, and modern web applications.",
    },
    {
      year: "2026 & Beyond",
      title: "AI-Accelerated Orchestration",
      desc: "Adopted cutting-edge AI acceleration tools (like Lovable.dev, Cursor, Antigravity, and Claude Code) to streamline boilerplates and focus 100% on high-value business logic and execution.",
    },
  ];

  const deliveryPillars = [
    {
      icon: <TrendingDown className="size-6 text-emerald-500" />,
      title: "Zero Payroll Overhead",
      desc: "We do not carry fixed monthly developer salaries. You only pay for the actual engineering injected into your project, keeping budgets lean and optimized.",
    },
    {
      icon: <Users className="size-6 text-blue-500" />,
      title: "On-Demand Scalability",
      desc: "Whether your project requires an individual expert or a coordinated team, we tap into our vast global network of vetted remote developers to source the perfect talent.",
    },
    {
      icon: <ShieldCheck className="size-6 text-indigo-500" />,
      title: "Veteran Technical Oversight",
      desc: "Unlike standard freelancer sites where you manage the developers, Javed personally designs the architecture, reviews every line of code, and remains your single anchor.",
    },
    {
      icon: <Zap className="size-6 text-purple-500" />,
      title: "AI-Accelerated Speed",
      desc: "We lean heavily into modern AI orchestration to handle repetitive structures, slashing timelines and cost, so we can focus on building unique business value.",
    },
  ];

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb container */}
      <div className="container mx-auto px-5 pt-24 xl:max-w-screen-xl">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbNextLink
                linkName="Home"
                hrefActiveSection={`/#${HeaderNavItems.Home}`}
                headerActiveSection={HeaderNavItems.Home}
              />
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <Slash className="size-4" />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbPage>About</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <main className="relative min-h-screen bg-gradient-to-b from-background via-background to-secondary/30 pt-10 pb-20 overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute left-1/2 top-1/4 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[100px] dark:bg-blue-500/5 sm:h-[450px] sm:w-[450px]" />
          <div className="absolute right-1/4 top-1/2 h-[200px] w-[200px] rounded-full bg-purple-500/10 blur-[80px] dark:bg-purple-500/5 sm:h-[250px] sm:w-[250px]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_80%,transparent_100%)]" />
        </div>

        <div className="container mx-auto px-5 xl:max-w-screen-xl">

          {/* Header */}
          <header className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 mb-6">
              <Award className="size-3" />
              <span>Over 2 Decades of Engineering Excellence</span>
            </div>
            <SectionHeader
              caption="About Our Agency"
              desc="Bridging veteran engineering leadership with flexible, modern execution models."
              element="h1"
            />
          </header>

          {/* Section 1: Our Journey */}
          <section className="mb-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

              {/* Text narrative - Left 7 columns */}
              <div className="lg:col-span-7 space-y-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-blue-dark-imperial dark:text-foreground">
                  Our Journey: Orchestrating Digital Excellence Since 2001
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  FrameworkTeam Softwares was founded in 2001 by Javed Chauhan. What began over two decades ago as a hands-on software development venture rooted in classic programming and the .NET Framework has evolved into a high-agility, modern development agency.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Over the decades, the technology landscape has completely shifted—from desktop applications to cloud-native SaaS ecosystems, headless architectures, and AI-accelerated frameworks. FrameworkTeam Softwares has successfully navigated every single transition.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Today, we operate with a lean, modern agency model. We do not keep developers on a fixed monthly payroll, which eliminates heavy corporate overhead for us and unnecessary costs for you. Instead, we combine veteran engineering leadership with a vast, thoroughly vetted global network of specialized remote developers, bringing in the exact experts needed on a flexible, project-by-project basis.
                </p>
              </div>

              {/* Graphical Timeline - Right 5 columns */}
              <div className="lg:col-span-5 bg-card/40 border rounded-2xl p-6 backdrop-blur-md relative">
                <div className="absolute top-6 left-[25px] bottom-6 w-[2px] bg-border hidden sm:block" />

                <div className="space-y-8 relative">
                  {timelineEvents.map((event, idx) => (
                    <div key={idx} className="flex gap-4 relative sm:pl-4">
                      {/* Timeline dot */}
                      <div className="hidden sm:flex size-6 rounded-full bg-background border-2 border-primary items-center justify-center z-10 shrink-0">
                        <div className="size-2 rounded-full bg-primary" />
                      </div>

                      <div className="space-y-1">
                        <span className="inline-flex items-center gap-1 text-xs font-bold text-primary uppercase tracking-wider">
                          <Calendar className="size-3" />
                          {event.year}
                        </span>
                        <h4 className="font-bold text-blue-dark-imperial dark:text-foreground">
                          {event.title}
                        </h4>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {event.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </section>

          {/* Section 2: Meet the Founder */}
          <section className="mb-24 bg-card/30 border border-border/80 rounded-3xl p-8 md:p-12 backdrop-blur-md relative overflow-hidden">
            <div className="absolute right-0 top-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

              {/* Photo Column - Left 4 columns */}
              <div className="lg:col-span-4 flex flex-col items-center justify-center">
                <div className="relative group p-1.5 rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-500 to-purple-600 shadow-xl overflow-hidden max-w-[280px] sm:max-w-[320px]">
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 via-indigo-500 to-purple-600 opacity-20 blur-md group-hover:opacity-40 transition-opacity duration-300" />
                  <div className="relative rounded-[10px] overflow-hidden bg-background">
                    <Image
                      src="/frameworkteam/javed-chauhan"
                      alt="Javed Chauhan"
                      width={350}
                      height={350}
                      className="object-cover w-full aspect-square scale-100 group-hover:scale-105 transition-transform duration-300"
                      priority
                    />
                  </div>
                </div>

                <h3 className="mt-6 text-xl font-bold text-center text-blue-dark-imperial dark:text-foreground">
                  Javed Chauhan
                </h3>
                <p className="text-sm text-primary font-medium text-center">
                  Founder & Principal Technical Director
                </p>

                {/* Social Connects */}
                <div className="flex gap-4 mt-4">
                  <a
                    href="https://www.linkedin.com/in/chauhanjaved/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#0077b5] bg-[#0077b5] text-white text-xs font-semibold hover:bg-[#005987] hover:border-[#005987] hover:shadow-lg hover:shadow-[#0077b5]/20 hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <Linkedin className="size-4" />
                    <span>LinkedIn</span>
                    <ArrowUpRight className="size-3 opacity-80" />
                  </a>
                  <a
                    href="https://github.com/ChauhanJaved"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#24292f] bg-[#24292f] text-white text-xs font-semibold hover:bg-[#1b1f23] hover:border-[#1b1f23] dark:border-zinc-800 dark:bg-zinc-900 dark:hover:bg-zinc-800 dark:hover:border-zinc-700 hover:shadow-lg hover:shadow-black/10 hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <Github className="size-4" />
                    <span>GitHub</span>
                    <ArrowUpRight className="size-3 opacity-80" />
                  </a>
                </div>
              </div>

              {/* Bio Column - Right 8 columns */}
              <div className="lg:col-span-8 space-y-6">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-500 dark:text-indigo-400 border border-indigo-500/20">
                  <Sparkles className="size-3" />
                  <span>Product-Minded Engineering Leader</span>
                </div>

                <h3 className="text-2xl font-bold text-blue-dark-imperial dark:text-foreground">
                  Meet the Founder & Technical Director
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  Javed is the engineering backbone and strategic lead at FrameworkTeam Softwares. Having built software continuously since 2001, he bridges the gap between classic data integrity and the absolute cutting edge of the modern web stack (React, Next.js, and Supabase).
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  As a product-minded engineer, Javed serves as the dedicated technical anchor for every client. Leveraging his deep technical background alongside advanced AI acceleration tools (like Lovable.dev, Cursor, Antigravity, and Claude Code), he designs the application blueprint, establishes the technical architecture, and rigorously oversees code quality to ensure flawless execution.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  For projects requiring multi-disciplinary execution, Javed hand-picks and manages trusted remote developers from his global network to match the exact requirements of the task.
                </p>
              </div>

            </div>
          </section>

          {/* Section 3: The FrameworkTeam Delivery Model */}
          <section className="space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <h2 className="text-3xl font-extrabold tracking-tight text-blue-dark-imperial dark:text-foreground">
                The FrameworkTeam Delivery Model
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We have broken the traditional agency model to give our clients maximum flexibility, speed, and cost efficiency.
              </p>
            </div>

            {/* Grid display */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {deliveryPillars.map((pillar, index) => (
                <div
                  key={index}
                  className="bg-card/50 border rounded-2xl p-6 backdrop-blur-md hover:shadow-md hover:border-primary/30 transition-all duration-300 flex gap-4 items-start group"
                >
                  <div className="p-3 bg-secondary/80 dark:bg-muted/80 rounded-xl group-hover:bg-primary/10 transition-colors shrink-0">
                    {pillar.icon}
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-bold text-lg text-blue-dark-imperial dark:text-foreground">
                      {pillar.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

        </div>
      </main>
    </>
  );
}
