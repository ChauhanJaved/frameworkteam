"use client";
//External  imports
import React, { useEffect } from "react";
import Link from "next/link";

//Internal imports
import { poppins, raleway } from "@/lib/font";
import { HeaderModeToggle } from "@/components/header-mode-toggle";
import { HeaderNavItems, headerNavItems } from "@/data/website-data";
import HeaderSheetMainManu from "@/components/header-sheet-main-manu";

import { useActiveSection } from "@/context/active-section-context";
import { usePageOnTop } from "@/context/page-on-top-context";

interface HeaderProps {
  defaultActiveSection?: string;
}
export default function Header({ defaultActiveSection = "" }: HeaderProps) {
  const { activeSection, setActiveSection } = useActiveSection();
  const { pageOnTop, setPageOnTop } = usePageOnTop();

  // Handle direct navigation with hash
  useEffect(() => {
    const hash = window.location.hash;
    const pathName = window.location.pathname;
    if (hash) {
      const section = hash.substring(1); // Remove the "#" from the hash
      if (headerNavItems.includes(section)) {
        setActiveSection(section);
      }
    } else {
      setActiveSection(HeaderNavItems.Home);
    }
  }, [defaultActiveSection, setActiveSection]);

  return (
    <header>
      {/* z-index 10 */}
      <div
        className={`${pageOnTop ? "bg-transparent" : "bg-background shadow-sm"} fixed left-0 right-0 top-0 z-[10] flex h-20 w-full items-center justify-between px-3 transition-all duration-300`}
      >
        {/* Company name/logo */}
        <Link
          href={`/#${HeaderNavItems.Home}`}
          onClick={() => {
            setActiveSection(HeaderNavItems.Home);
            setPageOnTop(true);
          }}
        >
          <div
            className={`${raleway.className} flex flex-col items-start justify-center border-l-[5px] border-l-primary py-1 pl-3 text-lg font-extrabold leading-tight tracking-wider text-blue-dark-imperial dark:text-gray-300`}
          >
            <p>FrameworkTeam</p>
            <p>Softwares</p>
          </div>
        </Link>

        {/*Menu */}
        <nav className="flex items-center gap-2">
          {/* Desktop Menu */}
          <ul
            className={`${poppins.className} hidden items-center gap-2 text-blue-dark-imperial dark:text-gray-300 lg:flex`}
          >
            {headerNavItems.map((item) => (
              <li key={item}>
                <Link
                  onClick={() => {
                    setActiveSection(item);
                    item === HeaderNavItems.Home && setPageOnTop(true);
                  }}
                  className={`relative px-2 py-2 text-base font-semibold before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-full before:scale-0 before:bg-primary before:transition-transform before:duration-300 hover:before:scale-100 ${activeSection === item && "before:scale-100"}`}
                  href={`/#${item}`}
                >
                  {item && item[0].toUpperCase() + item.slice(1)}
                </Link>
              </li>
            ))}
            <li>
              {/* Dark mode */}
              <HeaderModeToggle />
            </li>
          </ul>
          <ul
            className={`${poppins.className} flex items-center gap-1 text-blue-dark-imperial dark:text-gray-300 lg:hidden`}
          >
            {/* Mobile meun */}
            <li className="pl-1">
              {/* Dark mode */}
              <HeaderModeToggle />
            </li>
            <li>
              <HeaderSheetMainManu />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
