//External Imports
import React, { Fragment, useState } from "react";
import { Menu } from "lucide-react";
import Link from "next/link";

//Internal Imports
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { headerNavItems } from "@/data/website-data";
import { poppins } from "@/lib/font";
import { HeaderModeToggle } from "./header-mode-toggle";
import { Separator } from "@/components/ui/separator";
import { useActiveSection } from "@/context/active-section-context";

interface HeaderSheetMainManuProps {
  className?: string;
}
export default function HeaderSheetMainManu({
  className,
}: HeaderSheetMainManuProps) {
  const [open, setOpen] = useState(false);
  const { setActiveSection } = useActiveSection();
  const openSheet = () => {
    setOpen(true);
  };

  return (
    <Fragment>
      <Button
        size={"icon"}
        variant={"ghost"}
        onClick={openSheet}
        className={`${className} hover:text-blue-dark-imperial`}
      >
        <Menu />
      </Button>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild></SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle className="hidden">Main Manu</SheetTitle>
            <SheetDescription className="sr-only">Main Manu</SheetDescription>
          </SheetHeader>
          <nav>
            <ul className={`${poppins.className} `}>
              {headerNavItems.map((item) => (
                <li key={item} className="">
                  <SheetClose asChild>
                    <Link
                      onClick={() => {
                        setActiveSection(item);
                      }}
                      href={`#${item}`}
                    >
                      <Button variant={"ghost"}>
                        {item && item[0].toUpperCase() + item.slice(1)}
                      </Button>
                    </Link>
                  </SheetClose>
                </li>
              ))}
            </ul>
          </nav>
        </SheetContent>
      </Sheet>
    </Fragment>
  );
}
