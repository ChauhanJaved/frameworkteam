import { headerCompanyName, ProductIDs } from "@/data/website-data";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `https://www.${headerCompanyName.toLowerCase()}.com/`,
      lastModified: new Date(),
    },
    {
      url: `https://www.${headerCompanyName.toLowerCase()}.com/${ProductIDs.JPGtoPDFConverterWeb}`,
      lastModified: new Date(),
    },
    {
      url: `https://www.${headerCompanyName.toLowerCase()}.com/${ProductIDs.JPGtoPDFConverterDesktop}`,
      lastModified: new Date(),
    },
    {
      url: `https://www.${headerCompanyName.toLowerCase()}.com/${ProductIDs.TIFFtoPDFConverterWeb}`,
      lastModified: new Date(),
    },
    {
      url: `https://www.${headerCompanyName.toLowerCase()}.com/${ProductIDs.TIFFtoPDFConverterDesktop}`,
      lastModified: new Date(),
    },
    {
      url: `https://www.${headerCompanyName.toLowerCase()}.com/${ProductIDs.PNGtoPDFConverterWeb}`,
      lastModified: new Date(),
    },
    {
      url: `https://www.${headerCompanyName.toLowerCase()}.com/${ProductIDs.PNGtoPDFConverterDesktop}`,
      lastModified: new Date(),
    },
    {
      url: `https://www.${headerCompanyName.toLowerCase()}.com/${ProductIDs.PDFtoJPGConverter}`,
      lastModified: new Date(),
    },
    {
      url: `https://www.${headerCompanyName.toLowerCase()}.com/${ProductIDs.PDFtoTIFFConverter}`,
      lastModified: new Date(),
    },
    {
      url: `https://www.${headerCompanyName.toLowerCase()}.com/${ProductIDs.PDFtoPNGConverter}`,
      lastModified: new Date(),
    },
    {
      url: `https://www.${headerCompanyName.toLowerCase()}.com/${ProductIDs.PDFtoImageConverter}`,
      lastModified: new Date(),
    },
    {
      url: `https://www.${headerCompanyName.toLowerCase()}.com/${ProductIDs.TIFFSplitter}`,
      lastModified: new Date(),
    },
    {
      url: `https://www.${headerCompanyName.toLowerCase()}.com/${ProductIDs.TIFFCombiner}`,
      lastModified: new Date(),
    },
    {
      url: `https://www.${headerCompanyName.toLowerCase()}.com/${ProductIDs.TIFFSplitMerge}`,
      lastModified: new Date(),
    },
    {
      url: `https://www.${headerCompanyName.toLowerCase()}.com/${ProductIDs.PDFSplitter}`,
      lastModified: new Date(),
    },
    {
      url: `https://www.${headerCompanyName.toLowerCase()}.com/${ProductIDs.PDFCombiner}`,
      lastModified: new Date(),
    },
    {
      url: `https://www.${headerCompanyName.toLowerCase()}.com/${ProductIDs.PDFSplitMerge}`,
      lastModified: new Date(),
    },
    {
      url: `https://www.${headerCompanyName.toLowerCase()}.com/${ProductIDs.WebpageThumbnailer}`,
      lastModified: new Date(),
    },
    {
      url: `https://www.${headerCompanyName.toLowerCase()}.com/${ProductIDs.ConvertHTMLtoImage}`,
      lastModified: new Date(),
    },
    {
      url: `https://www.${headerCompanyName.toLowerCase()}.com/${ProductIDs.WebsitesScreenshot}`,
      lastModified: new Date(),
    },
    {
      url: `https://www.${headerCompanyName.toLowerCase()}.com/privacy-policy`,
      lastModified: new Date(),
    },
    {
      url: `https://www.${headerCompanyName.toLowerCase()}.com/terms-of-use`,
      lastModified: new Date(),
    },
  ];
}
