//External imports
import { Metadata } from "next";
import { ReactNode } from "react";

export const headerCompanyName: string = "FrameworkTeam";
export const companyName: string = "FrameworkTeam Softwares";
export const email: string = "support@frameworkteam.com";
export const copyrightYear: string = new Date().getFullYear().toString();
export enum HeaderNavItems {
  Home = "home",
  Services = "services",
  Portfolio = "portfolio",
  Contact = "contact",
}
export const heroTitle: string =
  "We offer cutting-edge solutions to grow your business";
export const heroDesc: string =
  "We are a team of skilled professionals dedicated to developing high-performance Web Apps and Desktop Apps, packed with powerful features to streamline your workflow, enhance productivity, and accelerate business growth.";
export const headerNavItems: string[] = [
  HeaderNavItems.Home,
  HeaderNavItems.Services,
  HeaderNavItems.Portfolio,
  HeaderNavItems.Contact,
];
export function hrefValue(item: string): string {
  return `/#${item}`;
}
export const indexMetadata: Metadata = {
  title: `${companyName} - India | Web Apps Development | Windows Apps Development`,
  description: `${heroTitle}. ${heroDesc}`,
  openGraph: {
    title: `${companyName} - India | Web Apps Development | Windows Apps Development`,
    description: `${heroTitle}. ${heroDesc}`,
    url: "https://www.frameworkteam.com/",
    siteName: `${companyName} - India`,
    images: [
      {
        url: "https://res.cloudinary.com/dgq2mp4fs/image/upload/v1721890438/frameworkteam/hero-img.png", // Must be an absolute URL
        width: 539,
        height: 438,
        alt: `${companyName} - India`,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },
};
export enum Categories {
  All = "All",
  WebApp = "Web App",
  DesktopApp = "Desktop App",
  CommandLine = "Command Line",
  Library = ".NET Library",
}
export const categoryList: string[] = [
  Categories.All,
  Categories.WebApp,
  Categories.DesktopApp,
  Categories.CommandLine,
  Categories.Library,
];

export enum ProductIDs {
  JPGtoPDFConverterWeb = "jpg-to-pdf-converter",
  PNGtoPDFConverterWeb = "png-to-pdf-converter",
  TIFFtoPDFConverterWeb = "tiff-to-pdf-converter",

  JPGtoPDFConverterDesktop = "jpg-to-pdf-converter-desktop",
  TIFFtoPDFConverterDesktop = "tiff-to-pdf-converter-desktop",
  PNGtoPDFConverterDesktop = "png-to-pdf-converter-desktop",

  PDFtoJPGConverter = "pdf-to-jpg-converter",
  PDFtoTIFFConverter = "pdf-to-tiff-converter",
  PDFtoPNGConverter = "pdf-to-png-converter",
  PDFtoImageConverter = "pdf-to-image-converter",

  TIFFSplitter = "tiff-splitter",
  TIFFCombiner = "tiff-combiner",
  TIFFSplitMerge = "tiff-split-merge",

  PDFSplitter = "pdf-splitter",
  PDFCombiner = "pdf-combiner",
  PDFSplitMerge = "pdf-split-merge",

  WebpageThumbnailer = "webpage-thumbnailer",
  ConvertHTMLtoImage = "convert-html-to-image",
  WebsitesScreenshot = "websites-screenshot",
}
export const productTitles = {
  JPGtoPDFConverterWeb: "JPG to PDF Converter",
  PNGtoPDFConverterWeb: "PNG to PDF Converter",
  TIFFtoPDFConverterWeb: "TIFF to PDF Converter",

  JPGtoPDFConverterDesktop: "JPG to PDF Converter",
  PNGtoPDFConverterDesktop: "PNG to PDF Converter",
  TIFFtoPDFConverterDesktop: "TIFF to PDF Converter",

  PDFtoJPGConverter: "PDF to JPG Converter",
  PDFtoTIFFConverter: "PDF to TIFF Converter",
  PDFtoPNGConverter: "PDF to PNG Converter",
  PDFtoImageConverter: "PDF to Image Converter",

  TIFFSplitter: "TIFF Splitter",
  TIFFCombiner: "TIFF Combiner",
  TIFFSplitMerge: "TIFF Split Merge",

  PDFSplitter: "PDF Splitter",
  PDFCombiner: "PDF Combiner",
  PDFSplitMerge: "PDF Split Merge",

  WebpageThumbnailer: "Webpage Thumbnailer",
  ConvertHTMLtoImage: "Convert HTML to Image",
  WebsitesScreenshot: "Websites Screenshot",
} as const;

export type ProductTitles = (typeof productTitles)[keyof typeof productTitles];
export const productSubTitles = {
  JPGtoPDFConverterWeb:
    "Online Tool to Convert & Merge JPG to PDF – Secure & Private, Your Files Never Leave Your Device",
  PNGtoPDFConverterWeb:
    "Online Tool to Convert & Merge PNG to PDF – Secure & Private, Your Files Never Leave Your Device",
  TIFFtoPDFConverterWeb:
    "Online Tool to Convert & Merge TIFF to PDF – Secure & Private, Your Files Never Leave Your Device",

  JPGtoPDFConverterDesktop:
    "Windows 11/10/8/7 | Fully Functional 15 Days Free Trial",
  PNGtoPDFConverterDesktop:
    "Windows 11/10/8/7 | Fully Functional 15 Days Free Trial",
  TIFFtoPDFConverterDesktop:
    "Windows 11/10/8/7 | Fully Functional 15 Days Free Trial",

  PDFtoJPGConverter: "Windows 11/10/8/7 | Fully Functional 15 Days Free Trial",
  PDFtoTIFFConverter: "Windows 11/10/8/7 | Fully Functional 15 Days Free Trial",
  PDFtoPNGConverter: "Windows 11/10/8/7 | Fully Functional 15 Days Free Trial",
  PDFtoImageConverter:
    "Windows 11/10/8/7 | Fully Functional 15 Days Free Trial",

  TIFFSplitter: "Windows 11/10/8/7 | Fully Functional 15 Days Free Trial",
  TIFFCombiner: "Windows 11/10/8/7 | Fully Functional 15 Days Free Trial",
  TIFFSplitMerge: "Windows 11/10/8/7 | Fully Functional 15 Days Free Trial",

  PDFSplitter: "Windows 11/10/8/7 | Fully Functional 15 Days Free Trial",
  PDFCombiner: "Windows 11/10/8/7 | Fully Functional 15 Days Free Trial",
  PDFSplitMerge: "Windows 11/10/8/7 | Fully Functional 15 Days Free Trial",

  WebpageThumbnailer: "Windows 11/10/8/7 | Fully Functional 15 Days Free Trial",
  ConvertHTMLtoImage: "Windows 11/10/8/7 | Command Line Tool",
  WebsitesScreenshot: "Windows 11/10/8/7 | .NET Component",
} as const;
export type ProductSubTitles =
  (typeof productSubTitles)[keyof typeof productSubTitles];
export const productWebsites = {
  JPGtoPDFConverterWeb: "https://www.pdf-tiff-tools.com/jpg-to-pdf-converter",
  PNGtoPDFConverterWeb: "https://www.pdf-tiff-tools.com/png-to-pdf-converter",
  TIFFtoPDFConverterWeb: "https://www.pdf-tiff-tools.com/tiff-to-pdf-converter",

  JPGtoPDFConverterDesktop:
    "https://www.pdf-tiff-tools.com/jpg-to-pdf-converter-desktop",
  PNGtoPDFConverterDesktop:
    "https://www.pdf-tiff-tools.com/png-to-pdf-converter-desktop",
  TIFFtoPDFConverterDesktop:
    "https://www.pdf-tiff-tools.com/tiff-to-pdf-converter-desktop",

  PDFtoJPGConverter: "https://www.pdf-tiff-tools.com/pdf-to-jpg-converter",
  PDFtoTIFFConverter: "https://www.pdf-tiff-tools.com/pdf-to-tiff-converter",
  PDFtoPNGConverter: "https://www.pdf-tiff-tools.com/pdf-to-png-converter",
  PDFtoImageConverter: "https://www.pdf-tiff-tools.com/pdf-to-image-converter",

  TIFFSplitter: "https://www.pdf-tiff-tools.com/tiff-splitter-desktop",
  TIFFCombiner: "https://www.pdf-tiff-tools.com/tiff-combiner",
  TIFFSplitMerge: "https://www.pdf-tiff-tools.com/tiff-split-merge",

  PDFSplitter: "https://www.pdf-tiff-tools.com/pdf-splitter",
  PDFCombiner: "https://www.pdf-tiff-tools.com/pdf-combiner",
  PDFSplitMerge: "https://www.pdf-tiff-tools.com/pdf-split-merge",

  WebpageThumbnailer: "https://www.webpagethumbnailer.com/",
  ConvertHTMLtoImage: "https://www.converthtmltoimage.com/",
  WebsitesScreenshot: "https://www.websitesscreenshot.com/",
} as const;
export type ProductWebsite =
  (typeof productWebsites)[keyof typeof productWebsites];

export const productDownloadLinks = {
  JPGtoPDFConverter:
    "https://www.jpg-to-pdf-converter.com/downloads/jpg-to-pdf-converter-setup.exe",
  TIFFtoPDFConverter:
    "https://www.tiff-to-pdf-converter.com/downloads/tiff-to-pdf-converter-setup.exe",
  PNGtoPDFConverter:
    "https://www.png-to-pdf-converter.com/downloads/png-to-pdf-converter-setup.exe",

  PDFtoJPGConverter:
    "https://www.pdf-to-jpg-converter.com/downloads/pdf-to-jpg-converter-setup.exe",
  PDFtoTIFFConverter:
    "https://www.pdf-to-tiff-converter.com/downloads/pdf-to-tiff-converter-setup.exe",
  PDFtoPNGConverter:
    "https://www.pdf-to-png-converter.com/downloads/pdf-to-png-converter-setup.exe",
  PDFtoImageConverter:
    "https://www.pdf-to-image-converter.com/downloads/pdf-to-image-converter-setup.exe",

  TIFFSplitter:
    "https://www.tiff-split-combine.com/downloads/tiff-splitter-setup.exe",
  TIFFCombiner:
    "https://www.tiff-split-combine.com/downloads/tiff-combiner-setup.exe",
  TIFFSplitMerge:
    "https://www.tiff-split-combine.com/downloads/tiff-split-merge-setup.exe",

  PDFSplitter:
    "https://www.pdf-split-merge.com/downloads/pdf-splitter-setup.exe",
  PDFCombiner:
    "https://www.pdf-split-merge.com/downloads/pdf-combiner-setup.exe",
  PDFSplitMerge:
    "https://www.pdf-split-merge.com/downloads/pdf-split-merge-setup.exe",

  WebpageThumbnailer:
    "https://www.webpagethumbnailer.com/media/download/webpagethumbnailer_setup.exe",
  ConvertHTMLtoImage:
    "https://www.converthtmltoimage.com/media/download/converthtmltoimage_trial.exe",
  WebsitesScreenshot:
    "https://www.websitesscreenshot.com/media/download/websitesscreenshot_trial.exe",
} as const;
export type ProductDownloadLinks =
  (typeof productDownloadLinks)[keyof typeof productDownloadLinks];

export const productImages = {
  JPGtoPDFConverterWeb: {
    imgName: "jpg-to-pdf-converter-web-icon",
    width: 1024,
    height: 1024,
  },
  PNGtoPDFConverterWeb: {
    imgName: "png-to-pdf-converter-web-icon",
    width: 1024,
    height: 1024,
  },
  TIFFtoPDFConverterWeb: {
    imgName: "tiff-to-pdf-converter-web-icon",
    width: 1024,
    height: 1024,
  },
  JPGtoPDFConverterDesktop: {
    imgName: "jpg-to-pdf-converter",
    width: 756,
    height: 463,
  },
  PNGtoPDFConverterDesktop: {
    imgName: "png-to-pdf-converter",
    width: 756,
    height: 463,
  },
  TIFFtoPDFConverterDesktop: {
    imgName: "tiff-to-pdf-converter",
    width: 756,
    height: 463,
  },

  PDFtoJPGConverter: {
    imgName: "pdf-to-jpg-converter",
    width: 756,
    height: 463,
  },
  PDFtoTIFFConverter: {
    imgName: "pdf-to-tiff-converter",
    width: 739,
    height: 469,
  },
  PDFtoPNGConverter: {
    imgName: "pdf-to-png-converter",
    width: 739,
    height: 469,
  },
  PDFtoImageConverter: {
    imgName: "pdf-to-image-converter",
    width: 739,
    height: 469,
  },

  TIFFSplitter: {
    imgName: "tiff-splitter",
    width: 739,
    height: 469,
  },
  TIFFCombiner: {
    imgName: "tiff-combiner",
    width: 739,
    height: 469,
  },
  TIFFSplitMerge: {
    imgName: "tiff-split-merge",
    width: 739,
    height: 469,
  },

  PDFSplitter: {
    imgName: "pdf-splitter",
    width: 739,
    height: 469,
  },
  PDFCombiner: {
    imgName: "pdf-combiner",
    width: 739,
    height: 469,
  },
  PDFSplitMerge: {
    imgName: "pdf-split-merge",
    width: 739,
    height: 469,
  },

  WebpageThumbnailer: {
    imgName: "webpage-thumbnailer",
    width: 520,
    height: 349,
  },
  ConvertHTMLtoImage: {
    imgName: "convert-html-to-image",
    width: 429,
    height: 271,
  },
  WebsitesScreenshot: {
    imgName: "websites-screenshot",
    width: 543,
    height: 295,
  },
};
export type ProductImage = (typeof productImages)[keyof typeof productImages];

export interface portfolioItem {
  id: string;
  title: string;
  subtitle: string;
  src: string;
  width: number;
  height: number;
  categories: string[];
  pageLink: string;
  productWebsite: ProductWebsite;
  downloadLink?: ProductDownloadLinks;
  features: string[];
  description?: ReactNode;
  metaData: Metadata;
}
