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
    <div className="flex w-full flex-col items-center bg-secondary/50 shadow-sm md:w-2/3">
      <div className="relative flex h-[300px] w-full items-center justify-center overflow-hidden">
        <Link href={props.productWebsite} target="_blank">
          <div className="flex w-[200px] flex-col items-center justify-center py-3">
            <div className="relative mt-3 flex h-[250px] w-[250px] items-center justify-center overflow-hidden rounded-md">
              <Image
                src={props.src}
                alt={props.alt}
                fill
                className={`absolute inset-0 h-full w-full object-contain p-3`}
                sizes="(max-width: 150px) 100vw, 150px"
              />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
