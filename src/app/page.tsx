//External imports
import type { Metadata } from "next";
//Internal imports
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import { HeaderNavItems, indexMetadata } from "@/data/website-data";
import Header from "@/components/Header";

export const metadata: Metadata = indexMetadata;

export default async function Home() {
  return (
    <>
      <Header defaultActiveSection={HeaderNavItems.Home} />
      <Hero />
      <main id="main">
        <Services />
        <Portfolio galleryID="portfolio" />
        <Contact />
      </main>
    </>
  );
}
