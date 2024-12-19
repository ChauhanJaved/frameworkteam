"use client";

//External imports
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";

//Internal imports
import SectionHeader from "@/components/ui/SectionHeader";
import { Categories, categoryList, HeaderNavItems } from "@/data/website-data";
import { portfolioItems } from "@/data/website-data";
import { montserrat } from "@/components/font/font";
import cloudinaryLoader from "@/lib/cloudinary-loader";
import HeroIcons, { IconNames } from "./ui/HeroIcons";
import { Button } from "./ui/button";
import { SquareArrowOutUpRight, ZoomIn } from "lucide-react";
import { Badge } from "./ui/badge";

export default function Portfolio(props: { galleryID: string }) {
  const [selectedCategory, setSelectedCategory] = useState<string>(
    Categories.All,
  );
  useEffect(() => {
    let lightbox = new PhotoSwipeLightbox({
      gallery: "#" + props.galleryID,
      children: ".pswp-gallery__item",
      pswpModule: () => import("photoswipe"),
      loop: false,
    });
    //For photo caption
    lightbox.on("uiRegister", function () {
      lightbox.pswp?.ui?.registerElement({
        name: "custom-caption",
        order: 9,
        isButton: false,
        appendTo: "root",
        html: "Caption text",
        onInit: (el, pswp) => {
          lightbox.pswp?.on("change", () => {
            const currSlideElement = lightbox.pswp?.currSlide?.data.element;
            let captionHTML: string | null | undefined = "";
            if (currSlideElement) {
              const hiddenCaption = currSlideElement.querySelector(
                ".hidden-caption-content",
              );
              if (hiddenCaption) {
                // get caption from element with class hidden-caption-content
                captionHTML = hiddenCaption.innerHTML;
              } else {
                // get caption from alt attribute
                captionHTML = currSlideElement
                  ?.querySelector("img")
                  ?.getAttribute("alt");
              }
            }
            el.innerHTML = captionHTML || "";
          });
        },
      });
    });
    lightbox.init();
    return () => {
      lightbox.destroy();
    };
  });
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
        <ul className="mt-5 flex flex-wrap items-center justify-center px-3">
          {categoryList.map((item) => (
            <li
              onClick={() => handleCategoryClick(item)}
              className={`${selectedCategory === item ? "bg-blue-ultramarine text-white" : "bg-white-snow"} mb-4 mr-4 mt-4 inline-block cursor-pointer rounded px-5 py-3 text-xs uppercase transition-all duration-300 hover:bg-blue-ultramarine hover:text-white active:bg-blue-ultramarine active:text-white`}
              key={item}
            >
              {item}
            </li>
          ))}
        </ul>
        {/* ===== End Catagory filter ===== */}
        <div
          id={props.galleryID}
          className="flex flex-wrap items-center text-center"
        >
          {filteredItems.map((item, index) => {
            return (
              // ===== Portfolio Item =====
              <Link
                key={index}
                href={item.pageLink}
                className="flex w-full flex-col items-center justify-center p-4 md:w-1/2 lg:w-1/3"
              >
                <div className="flex w-[300px] flex-col items-center justify-center rounded border py-3">
                  {/* Box-1---------- */}
                  <div className="relative flex h-[250px] w-[250px] items-center justify-center overflow-hidden bg-primary-foreground">
                    <Image
                      src={item.src}
                      alt={`${item.title}`}
                      fill
                      className={`object-contain`}
                    />
                  </div>
                  {/* Box-2---------- */}
                  <Badge variant={"secondary"} className="mt-3">
                    {item.categories[1]}
                  </Badge>
                  <p className="mt-1 text-sm font-semibold">{item.title}</p>
                </div>
              </Link>
              // ===== End Portfolio Item =====
            );
          })}
        </div>
      </div>
    </section>
  );
}
