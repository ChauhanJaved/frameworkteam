//External imports
import type { Metadata } from "next";
//Internal imports
import Hero from "@/components/hero";
import Services from "@/components/services";
import Portfolio from "@/components/portfolio";
import Contact from "@/components/contact";
import { HeaderNavItems, indexMetadata } from "@/data/website-data";
import Header from "@/components/header";

export const metadata: Metadata = indexMetadata;

export default async function Home() {
  return (
    <main id="main">
      <Hero />
      <Services />
      <Portfolio galleryID="portfolio" />
      <Contact />
    </main>
  );
}
