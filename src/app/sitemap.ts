import { headerCompanyName, ProductIDs } from "@/data/website-data";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `https://www.${headerCompanyName.toLowerCase()}.com`,
      lastModified: new Date(),
    },
    {
      url: `https://www.${headerCompanyName.toLowerCase()}.com/${ProductIDs.JPGtoPDFConverter}.html`,
      lastModified: new Date(),
    },
    {
      url: `https://www.${headerCompanyName.toLowerCase()}.com/${ProductIDs.TIFFtoPDFConverter}.html`,
      lastModified: new Date(),
    },
    {
      url: `https://www.${headerCompanyName.toLowerCase()}.com/${ProductIDs.PNGtoPDFConverter}.html`,
      lastModified: new Date(),
    },
    {
      url: `https://www.${headerCompanyName.toLowerCase()}.com/${ProductIDs.PDFtoJPGConverter}.html`,
      lastModified: new Date(),
    },
    {
      url: `https://www.${headerCompanyName.toLowerCase()}.com/${ProductIDs.PDFtoTIFFConverter}.html`,
      lastModified: new Date(),
    },
    {
      url: `https://www.${headerCompanyName.toLowerCase()}.com/${ProductIDs.PDFtoPNGConverter}.html`,
      lastModified: new Date(),
    },
    {
      url: `https://www.${headerCompanyName.toLowerCase()}.com/${ProductIDs.PDFtoImageConverter}.html`,
      lastModified: new Date(),
    },
    {
      url: `https://www.${headerCompanyName.toLowerCase()}.com/${ProductIDs.TIFFSplitter}.html`,
      lastModified: new Date(),
    },
    {
      url: `https://www.${headerCompanyName.toLowerCase()}.com/${ProductIDs.TIFFCombiner}.html`,
      lastModified: new Date(),
    },
    {
      url: `https://www.${headerCompanyName.toLowerCase()}.com/${ProductIDs.TIFFSplitMerge}.html`,
      lastModified: new Date(),
    },
    {
      url: `https://www.${headerCompanyName.toLowerCase()}.com/${ProductIDs.PDFSplitter}.html`,
      lastModified: new Date(),
    },
    {
      url: `https://www.${headerCompanyName.toLowerCase()}.com/${ProductIDs.PDFCombiner}.html`,
      lastModified: new Date(),
    },
    {
      url: `https://www.${headerCompanyName.toLowerCase()}.com/${ProductIDs.PDFSplitMerge}.html`,
      lastModified: new Date(),
    },
    {
      url: `https://www.${headerCompanyName.toLowerCase()}.com/${ProductIDs.WebpageThumbnailer}.html`,
      lastModified: new Date(),
    },
    {
      url: `https://www.${headerCompanyName.toLowerCase()}.com/${ProductIDs.ConvertHTMLtoImage}.html`,
      lastModified: new Date(),
    },
    {
      url: `https://www.${headerCompanyName.toLowerCase()}.com/${ProductIDs.WebsitesScreenshot}.html`,
      lastModified: new Date(),
    },
    {
      url: `https://www.${headerCompanyName.toLowerCase()}.com/privacy-policy.html`,
      lastModified: new Date(),
    },
    {
      url: `https://www.${headerCompanyName.toLowerCase()}.com/terms-of-use.html`,
      lastModified: new Date(),
    },
  ];
}
