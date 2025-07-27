"use client";
import Image from "next/image";

import Link from "next/link";
import { Categories } from "@/data/website-data";

interface ProductImageWebAppProps {
  src: string;
  width: number;
  height: number;
  alt: string;
  productWebsite: string;
}
export default function ProductImageWebApp(props: ProductImageWebAppProps) {
  return (
    <div className="flex w-full flex-col items-center rounded-sm border shadow-sm md:w-1/3">
      <div className="relative flex h-[300px] w-full items-center justify-center overflow-hidden">
        <Link href={props.productWebsite} target="_blank">
          <div className="flex w-[200px] flex-col items-center justify-center rounded border bg-secondary/70 py-3 shadow-md hover:shadow-lg active:shadow-lg">
            <div className="relative mt-3 flex h-[150px] w-[150px] items-center justify-center overflow-hidden rounded-md">
              <Image
                src={props.src}
                alt={props.alt}
                fill
                className={`absolute inset-0 h-full w-full object-contain p-3`}
                sizes="(max-width: 150px) 100vw, 150px"
              />
            </div>
            <p className="mt-3 text-xs">{Categories.WebApp}</p>
            <p className="mt-2 text-sm font-bold">{props.alt}</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
