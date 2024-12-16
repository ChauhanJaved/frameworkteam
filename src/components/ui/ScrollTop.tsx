"use client";
//External imports
import Link from "next/link";

//Internal imports
import HeroIcons, { IconNames } from "./HeroIcons";
import { useEffect, useRef, useState } from "react";

export default function ScrollTop() {
  const [isVisible, setIsVisible] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      const entry = entries[0];
      setIsVisible(!entry.isIntersecting);
    };
    observerRef.current = new IntersectionObserver(handleIntersection);
    const target = document.getElementById("page-top");
    if (target) {
      observerRef.current.observe(target);
    }
    return () => {
      if (observerRef.current && target) {
        observerRef.current.unobserve(target);
      }
    };
  });
  return (
    <>
      <div id="page-top" style={{ position: "absolute", top: 0 }}></div>
      {/* Z-index 996 (less than mobile menu) */}
      <button
        onClick={scrollToTop}
        className={`${isVisible ? "visible opacity-100" : "invisible opacity-0"} fixed bottom-4 right-4 z-[996] flex h-10 w-10 items-center justify-center rounded bg-blue-ultramarine text-white transition-all duration-300 hover:opacity-90 active:opacity-90`}
      >
        <HeroIcons
          iconName={IconNames.ArrowUp}
          className="size-6 font-bold"
          strokeWidth={1.5}
        />
      </button>
    </>
  );
}
