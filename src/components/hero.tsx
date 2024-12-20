//External  imports
import Link from "next/link";
import Image from "next/image";

//Internal imports
import { Button } from "@/components/ui/button";
import {
  HeaderNavItems,
  headerNavItems,
  heroDesc,
  heroTitle,
} from "@/data/website-data";

import { ArrowDown, Delete, MoveDown } from "lucide-react";
import { Nunito } from "next/font/google";
import { nunito } from "@/lib/font";

const Hero = () => {
  return (
    <section
      id={HeaderNavItems.Home}
      className="relative mt-[80px] flex w-full scroll-m-[80px] flex-col items-center justify-center md:min-h-[calc(100vh-80px)]"
    >
      {/* Hero background image */}
      <Image
        className="object-cover"
        src={"/frameworkteam/hero-bg"}
        fill
        alt="hero image"
        priority
      />
      <div className="container z-0 mx-auto flex grow flex-col items-center px-3 text-lg md:flex-row-reverse xl:max-w-screen-xl">
        {/* BOX----1 */}
        <Image
          src={"/frameworkteam/hero-img"}
          alt="Hero Image"
          width={"539"}
          height={"438"}
          className="animate-up-down bg-transparent pt-8 md:w-1/2 md:pl-10 md:pt-0"
          priority
        />
        {/* BOX-----2 */}
        <div className="flex flex-col bg-transparent pb-16 pt-5 md:w-1/2 md:items-start md:pb-0 md:pt-0">
          {/* Hero Title */}
          <h2
            className={`${nunito.className} bg-transparent text-3xl font-bold text-blue-dark-imperial md:text-4xl lg:text-5xl`}
          >
            {heroTitle}
          </h2>
          {/* Hero description */}
          <p className="mt-1 bg-transparent text-lg md:text-xl lg:text-2xl">
            {heroDesc}
          </p>
          <Link href={`#${headerNavItems[1]}`} className="mt-5">
            <Button className="py-5 text-base">
              <ArrowDown />
              Read More
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
export default Hero;
