"use client";
//External imports
import Link from "next/link";
import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

//Internal imports
import SectionHeader from "@/components/section-header";
import { Categories, categoryList, HeaderNavItems } from "@/data/website-data";
import { portfolioItems } from "@/data/portfolio-items";
import { Button } from "@/components/ui/button";
import { poppins } from "@/lib/font";

export default function Portfolio(props: { galleryID: string }) {
  const [selectedCategory, setSelectedCategory] = useState<string>(
    Categories.All,
  );
  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };
  const filteredItems = portfolioItems.filter((item) =>
    item.categories.includes(selectedCategory),
  );

  return (
    <section
      id={HeaderNavItems.Portfolio}
      className="container scroll-m-20 px-5 pt-10 lg:px-10 lg:pt-20 xl:max-w-screen-xl mx-auto"
    >
      <SectionHeader
        caption="products"
        desc="Showcasing Innovation | Expertise in Web Apps & Windows Apps | Proven Success in Digital Solutions"
        element="h2"
      />

      {/* ===== Category filter ===== */}
      <ul
        className={`${poppins.className} mt-10 flex flex-wrap items-center justify-center gap-3`}
      >
        {categoryList.map((item, index) => (
          <li key={index}>
            <Button
              onClick={() => handleCategoryClick(item)}
              variant={selectedCategory === item ? "default" : "outline"}
            >
              {item}
            </Button>
          </li>
        ))}
      </ul>
      {/* ===== End Category filter ===== */}

      {/* Products Cards Grid */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item, index) => {
          const displayCategory = item.categories.find((c) => c !== Categories.All) || Categories.WebApp;

          return (
            <Link
              href={item.pageLink}
              key={index}
              className="group block h-full focus:outline-none"
            >
              <div className="flex h-full flex-col justify-between rounded-2xl border border-t-2 border-t-primary/25 bg-card/40 p-6 md:p-8 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-md hover:border-primary/45 hover:border-t-primary hover:bg-card">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    {/* Category Tag */}
                    <span className="text-xs font-semibold text-primary bg-primary/10 px-2.5 py-1 rounded-full border border-primary/20">
                      {displayCategory}
                    </span>
                  </div>
                  {/* Product Title */}
                  <h3 className="text-lg font-bold group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>
                  {/* Product Subtitle */}
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {item.subtitle}
                  </p>
                </div>
                
                {/* Explore Product Interactive Link */}
                <div className="mt-6 flex items-center text-xs font-semibold text-primary/90 group-hover:text-primary transition-colors">
                  <span>Explore Product</span>
                  <ArrowRight className="ml-1 size-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
