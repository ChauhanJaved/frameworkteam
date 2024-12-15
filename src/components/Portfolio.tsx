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
          className="flex flex-wrap items-center border border-black text-center"
        >
          {filteredItems.map((item, index) => {
            return (
              // ===== Portfolio Item =====
              <div
                id={item.id}
                key={index}
                className="flex w-full scroll-m-[64px] flex-col items-center justify-center border border-red-500 p-4 md:w-1/2 lg:w-1/3"
              >
                <figure className="h-[200px] w-[250px] rounded border border-blue-600 bg-black p-4 shadow">
                  <div className="relative overflow-hidden border">
                    <Link
                      id={"image-" + index}
                      href={cloudinaryLoader({
                        src: item.src,
                        width: item.width,
                      })}
                      data-pswp-width={item.width}
                      data-pswp-height={item.height}
                      target="_blank"
                      rel="noreferrer"
                      className="pswp-gallery__item cursor-default"
                    >
                      <Image
                        src={item.src}
                        alt={`${item.title}`}
                        width={item.width}
                        height={item.height}
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className={`h-full w-full`}
                      />
                    </Link>
                    {/* Magnifying Icon */}
                    <button
                      onClick={() => {
                        document.getElementById("image-" + index)?.click();
                      }}
                      className={`absolute right-[calc(10px)] top-[calc(10px)] inline-flex items-center justify-center rounded bg-black-800 p-1 text-white opacity-80 transition-all duration-300 hover:bg-blue-ultramarine hover:opacity-100 active:bg-blue-ultramarine active:opacity-100`}
                    >
                      <HeroIcons
                        iconName={IconNames.MagnifyingGlassPlus}
                        className="size-6 font-bold"
                        strokeWidth={1.5}
                      />
                    </button>
                    {/* Link Icon */}
                    <Link
                      href={item.pageLink}
                      className={`absolute right-[calc(10px)] top-[calc(50px)] inline-flex items-center justify-center rounded bg-black-800 p-1 text-white opacity-80 transition-all duration-300 hover:bg-blue-ultramarine hover:opacity-100 active:bg-blue-ultramarine active:opacity-100`}
                    >
                      <HeroIcons
                        iconName={IconNames.Link}
                        className="size-6 font-bold"
                        strokeWidth={1.5}
                      />
                    </Link>
                  </div>
                  <figcaption className={`mt-4 text-base font-bold md:text-lg`}>
                    <Link
                      href={item.pageLink}
                      className="text-blue-dark-imperial transition-all duration-300 hover:opacity-75 active:opacity-75"
                    >
                      {item.title}
                    </Link>
                  </figcaption>
                </figure>
              </div>
              // ===== End Portfolio Item =====
            );
          })}
        </div>
      </div>
    </section>
  );
}
