"use client";
//External imports
import Link from "next/link";

//Internal imports
import { Button } from "@/components/ui/button";
import { HeaderNavItems, heroDesc, heroTitle } from "@/data/website-data";
import { ArrowRight } from "lucide-react";
import { poppins } from "@/lib/font";
import { useActiveSection } from "@/context/active-section-context";

export default function Hero() {
  const { setActiveSection } = useActiveSection();

  const highlightText = "Scalable Web Applications";
  const hasHighlight = heroTitle.includes(highlightText);
  const parts = hasHighlight ? heroTitle.split(highlightText) : [heroTitle];

  return (
    <section
      id={HeaderNavItems.Home}
      className="relative flex min-h-[90vh] w-full flex-col items-center justify-center overflow-hidden pt-32 pb-20 md:min-h-screen md:py-20"
    >
      {/* Premium backdrop grid & glows */}
      <div className="absolute inset-0 -z-10 bg-background">
        {/* Glowing gradients */}
        <div className="absolute left-1/2 top-1/4 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[120px] dark:bg-blue-500/5 sm:h-[500px] sm:w-[500px]" />
        <div className="absolute left-1/3 top-1/3 h-[250px] w-[250px] rounded-full bg-purple-500/10 blur-[100px] dark:bg-purple-500/5 sm:h-[300px] sm:w-[300px]" />
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_80%,transparent_100%)]" />
      </div>

      <div className="container z-10 mx-auto flex max-w-4xl grow flex-col items-center justify-center px-6 text-center lg:px-8">
        {/* Hero Title */}
        <h1
          className={`${poppins.className} text-4xl font-extrabold tracking-tight text-blue-dark-imperial dark:text-foreground sm:text-5xl md:text-6xl lg:text-7xl leading-[1.15] sm:leading-[1.1]`}
        >
          {hasHighlight ? (
            <>
              {parts[0]}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 bg-clip-text text-transparent dark:from-blue-400 dark:via-indigo-300 dark:to-purple-400">
                {highlightText}
              </span>
              {parts[1]}
            </>
          ) : (
            heroTitle
          )}
        </h1>

        {/* Hero description */}
        <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg md:text-xl leading-relaxed">
          {heroDesc}
        </p>

        {/* Action buttons */}
        <div className="mt-10 flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row">
          <Link
            href={`#${HeaderNavItems.Services}`}
            className="w-full sm:w-auto"
            onClick={() => {
              setActiveSection(HeaderNavItems.Services);
            }}
          >
            <Button className="w-full px-8 py-6 text-base font-semibold transition-all hover:scale-105 hover:shadow-lg hover:shadow-blue-500/10 duration-200 sm:w-auto">
              Our Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>

          <Link
            href={`#${HeaderNavItems.Portfolio}`}
            className="w-full sm:w-auto"
            onClick={() => {
              setActiveSection(HeaderNavItems.Portfolio);
            }}
          >
            <Button
              variant="outline"
              className="w-full border-2 px-8 py-6 text-base font-semibold transition-all hover:scale-105 duration-200 sm:w-auto dark:hover:bg-accent"
            >
              View Products
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
