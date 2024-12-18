//Vendor Imports
import Image from "next/image";

//Internal Imports
import { montserrat } from "@/components/font/font";
import { HeaderNavItems, portfolioItems } from "@/data/website-data";
import BreadCrumbs from "@/components/ui/BreadCrumbs";
import SectionHeader from "@/components/ui/SectionHeader";
import HeroIcons, { IconNames } from "@/components/ui/HeroIcons";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CircleCheck, Download, SquareArrowOutUpRight } from "lucide-react";

export function generateStaticParams() {
  return portfolioItems.map((item) => ({ product: item.id }));
}
export function generateMetadata({ params }: { params: { product: string } }) {
  const portfolioItem = portfolioItems.find(
    (item) => item.id === params.product,
  );
  return portfolioItem?.metaData;
}

export default function Page({ params }: { params: { product: string } }) {
  const portfolioItem = portfolioItems.find(
    (item) => item.id === params.product,
  );
  //Breadcrumb data
  const pageLocation = [
    {
      name: `${HeaderNavItems.Home[0].toUpperCase()}${HeaderNavItems.Home.slice(1)}`,
      link: `/#${HeaderNavItems.Home}`,
    },
    {
      name: `${HeaderNavItems.Portfolio[0].toUpperCase()}${HeaderNavItems.Portfolio.slice(1)}`,
      link: `/#${HeaderNavItems.Portfolio}`,
    },
  ];
  return (
    <>
      <Header />
      <main id="main" className="text-lg">
        {portfolioItem && (
          <>
            <BreadCrumbs
              pageLocation={pageLocation}
              pageName={portfolioItem?.title}
            />
            <div className="container mx-auto flex flex-col items-center justify-center px-3 py-10 xl:max-w-screen-xl">
              <SectionHeader
                caption={portfolioItem.title}
                desc={portfolioItem.subtitle}
              />
              <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
                {portfolioItem.downloadLink && (
                  <Link href={portfolioItem.downloadLink}>
                    <Button className="py-5 text-base">
                      <Download className="" />
                      Download Now
                    </Button>
                  </Link>
                )}
                {portfolioItem.productWebsite && (
                  <Link href={portfolioItem.productWebsite} target="_blank">
                    <Button className="py-5 text-base">
                      <SquareArrowOutUpRight />
                      Product Website
                    </Button>
                  </Link>
                )}
              </div>

              <div className="mt-10 flex w-full flex-col md:flex-row">
                {/* ----- Box-1 ----- */}
                <div className="flex w-full flex-col items-center md:w-2/3">
                  <div className="relative flex h-[400px] w-full items-center justify-center overflow-hidden bg-primary-foreground">
                    <Image
                      src={portfolioItem.src}
                      alt={portfolioItem.title}
                      fill
                      className={`object-contain p-5`}
                      priority
                    />
                  </div>
                </div>
                {/* ----- Box-2 ----- */}
                <div className="mt-5 md:ml-3 md:mt-0 md:w-1/3">
                  <div className="flex flex-col text-center">
                    {portfolioItem.features.map((item, index) => (
                      <div key={index} className="mb-3 flex w-full flex-col">
                        <div className="flex flex-row items-center">
                          <div className="size-6">
                            <CircleCheck />
                          </div>
                          <div className="flex flex-grow flex-col pl-3 text-left">
                            <h2 className={`${montserrat.className} `}>
                              {item}
                            </h2>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {portfolioItem.description}
            </div>
          </>
        )}
      </main>
    </>
  );
}
