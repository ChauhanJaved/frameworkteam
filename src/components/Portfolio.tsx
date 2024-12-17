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
          className="flex w-full flex-wrap items-center justify-center gap-5 p-5 text-center"
        >
          {filteredItems.map((item, index) => {
            return (
              // ===== Portfolio Item =====
              <div
                id={item.id}
                key={index}
                className="flex flex-col items-center justify-center rounded border shadow-sm"
              >
                {/* Box-1 Toolbar--------- */}

                <div className="mt-2 flex w-full items-center justify-end gap-2 pr-2">
                  <Button
                    onClick={() => {
                      document.getElementById("image-" + index)?.click();
                    }}
                    variant="outline"
                    aria-label="Zoom In"
                    size={"icon"}
                  >
                    <ZoomIn />
                  </Button>
                  <Link href={item.pageLink}>
                    <Button
                      variant="outline"
                      size="icon"
                      aria-label="Open Product Page"
                    >
                      <SquareArrowOutUpRight />
                    </Button>
                  </Link>
                </div>
                {/* Box-2---------- */}
                <div className="relative mt-2 flex h-[250px] w-[250px] items-center justify-center overflow-hidden border-t bg-primary-foreground">
                  <Image
                    src={item.src}
                    alt={`${item.title}`}
                    fill
                    className={`object-contain`}
                  />
                </div>
                <div
                  className={`flex h-[75px] w-[250px] items-center justify-center border-t p-2 text-center text-sm`}
                >
                  {item.title}
                </div>
              </div>
              // ===== End Portfolio Item =====
            );
          })}
        </div>
      </div>
    </section>
  );
}
