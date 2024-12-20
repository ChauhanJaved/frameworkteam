// External imports
import Link from "next/link";
import React from "react";

interface PageLocation {
  name: string;
  link: string;
}
export default function BreadCrumbs(props: {
  pageName?: string;
  pageLocation: PageLocation[];
}) {
  return (
    <div id="breadcrumbs" className={`mt-20 bg-white-snow`}>
      <div className="container mx-auto flex flex-col px-4 py-5 md:flex-row md:justify-between xl:max-w-screen-xl">
        <nav className="flex items-center space-x-2 text-sm">
          {props.pageLocation.map((item, index) => (
            <React.Fragment key={index}>
              <Link
                href={item.link}
                className="font-bold text-blue-ultramarine transition-all duration-300 hover:opacity-75 active:opacity-75"
              >
                {item.name}
              </Link>
              <span>/</span>
            </React.Fragment>
          ))}
          {props.pageName && <span>{props.pageName}</span>}
        </nav>
      </div>
    </div>
  );
}
