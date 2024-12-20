"use client";
//External imports
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
//Internal imports
import SectionHeader from "@/components/section-header";
import { Categories, categoryList, HeaderNavItems } from "@/data/website-data";
import { portfolioItems } from "@/data/website-data";
import { montserrat } from "@/lib/font";
import { Button } from "@/components/ui/button";
import { SquareArrowOutUpRight } from "lucide-react";

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
      className={`${montserrat.className} scroll-m-[64px]`}
    >
      <div className="container mx-auto px-3 pt-16 text-lg xl:max-w-screen-xl">
        <SectionHeader caption="portfolio" element="h2" />
        {/* ===== Catagory filter ===== */}
        <ul className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {categoryList.map((item, index) => (
            <li key={index}>
              <Button
                onClick={() => handleCategoryClick(item)}
                variant={selectedCategory === item ? "default" : "secondary"}
              >
                {item}
              </Button>
            </li>
          ))}
        </ul>
        {/* ===== End Catagory filter ===== */}
        <div className="mt-5 flex flex-wrap items-center text-center">
          {filteredItems.map((item, index) => {
            return (
              // ===== Portfolio Item =====
              <div
                key={index}
                className="flex w-full flex-col items-center justify-center p-4 md:w-1/2 lg:w-1/3"
              >
                <Link href={item.pageLink}>
                  <div className="flex w-[300px] flex-col items-center justify-center rounded border py-3">
                    <div className="relative mt-3 flex h-[250px] w-[250px] items-center justify-center overflow-hidden rounded bg-primary-foreground">
                      <Image
                        src={item.src}
                        alt={`${item.title}`}
                        fill
                        className={`object-contain p-3`}
                      />
                    </div>
                    <p className="mt-3 text-xs">{item.categories[1]}</p>
                    <Button variant={"secondary"} className="mt-2">
                      <SquareArrowOutUpRight />
                      {item.title}
                    </Button>
                  </div>
                </Link>
              </div>
              // ===== End Portfolio Item =====
            );
          })}
        </div>
      </div>
    </section>
  );
}
