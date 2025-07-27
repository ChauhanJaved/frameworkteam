"use client";
//External imports
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
//Internal imports
import SectionHeader from "@/components/section-header";
import { Categories, categoryList, HeaderNavItems } from "@/data/website-data";
import { portfolioItems } from "@/data/website-data";
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
      className={`container scroll-m-20 px-5 pt-10 text-lg lg:px-10 lg:pt-20 xl:max-w-screen-xl`}
    >
      <SectionHeader
        caption="portfolio"
        desc="Showcasing Innovation | Expertise in Web Apps & Windows Apps | Proven Success in Digital Solutions"
        element="h2"
      />
      {/* ===== Catagory filter ===== */}
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
      {/* ===== End Catagory filter ===== */}
      <ul className="mt-5 flex flex-wrap items-center text-center">
        {filteredItems.map((item, index) => {
          return (
            // ===== Portfolio Item =====
            <li
              key={index}
              className="flex w-full flex-col items-center justify-center p-4 sm:w-1/2 md:w-1/3 lg:w-1/4"
            >
              <Link href={item.pageLink}>
                <div className="flex w-[200px] flex-col items-center justify-center rounded border py-3 shadow-md hover:shadow-lg active:shadow-lg">
                  <div className="relative mt-3 flex h-[150px] w-[150px] items-center justify-center overflow-hidden rounded-md bg-secondary/70">
                    <Image
                      src={item.src}
                      alt={`${item.title}`}
                      fill
                      className={`absolute inset-0 h-full w-full object-contain p-3`}
                      sizes="(max-width: 150px) 100vw, 150px"
                    />
                  </div>
                  <p className="mt-3 text-xs">{item.categories[1]}</p>
                  <p className="mt-2 text-sm font-bold">{item.title}</p>
                </div>
              </Link>
            </li>
            // ===== End Portfolio Item =====
          );
        })}
      </ul>
    </section>
  );
}
