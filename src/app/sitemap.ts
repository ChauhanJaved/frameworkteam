import { ProductIDs, websiteURL } from "@/data/website-data";
import { serviceItems } from "@/data/services-items";
import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  
  const staticAndProductEntries: MetadataRoute.Sitemap = [
    {
      url: `${websiteURL}/`,
      lastModified: lastModified,
    },
    {
      url: `${websiteURL}/${ProductIDs.JPGtoPDFConverterWeb}/`,
      lastModified: lastModified,
    },
    {
      url: `${websiteURL}/${ProductIDs.PNGtoPDFConverterWeb}/`,
      lastModified: lastModified,
    },
    {
      url: `${websiteURL}/${ProductIDs.TIFFtoPDFConverterWeb}/`,
      lastModified: lastModified,
    },
    {
      url: `${websiteURL}/${ProductIDs.TIFFSplitterWeb}/`,
      lastModified: lastModified,
    },
    {
      url: `${websiteURL}/${ProductIDs.TIFFMergerWeb}/`,
      lastModified: lastModified,
    },
    {
      url: `${websiteURL}/${ProductIDs.JPGtoPDFConverterDesktop}/`,
      lastModified: lastModified,
    },
    {
      url: `${websiteURL}/${ProductIDs.PNGtoPDFConverterDesktop}/`,
      lastModified: lastModified,
    },
    {
      url: `${websiteURL}/${ProductIDs.TIFFtoPDFConverterDesktop}/`,
      lastModified: lastModified,
    },
    {
      url: `${websiteURL}/${ProductIDs.PDFtoJPGConverter}/`,
      lastModified: lastModified,
    },
    {
      url: `${websiteURL}/${ProductIDs.PDFtoTIFFConverter}/`,
      lastModified: lastModified,
    },
    {
      url: `${websiteURL}/${ProductIDs.PDFtoPNGConverter}/`,
      lastModified: lastModified,
    },
    {
      url: `${websiteURL}/${ProductIDs.PDFtoImageConverter}/`,
      lastModified: lastModified,
    },
    {
      url: `${websiteURL}/${ProductIDs.TIFFSplitterDesktop}/`,
      lastModified: lastModified,
    },
    {
      url: `${websiteURL}/${ProductIDs.TIFFCombiner}/`,
      lastModified: lastModified,
    },
    {
      url: `${websiteURL}/${ProductIDs.TIFFSplitMerge}/`,
      lastModified: lastModified,
    },
    {
      url: `${websiteURL}/${ProductIDs.PDFSplitter}/`,
      lastModified: lastModified,
    },
    {
      url: `${websiteURL}/${ProductIDs.PDFCombiner}/`,
      lastModified: lastModified,
    },
    {
      url: `${websiteURL}/${ProductIDs.PDFSplitMerge}/`,
      lastModified: lastModified,
    },
    {
      url: `${websiteURL}/${ProductIDs.WebpageThumbnailer}/`,
      lastModified: lastModified,
    },
    {
      url: `${websiteURL}/${ProductIDs.ConvertHTMLtoImage}/`,
      lastModified: lastModified,
    },
    {
      url: `${websiteURL}/${ProductIDs.WebsitesScreenshot}/`,
      lastModified: lastModified,
    },
    {
      url: `${websiteURL}/${ProductIDs.FTQR}/`,
      lastModified: lastModified,
    },
    {
      url: `${websiteURL}/privacy-policy/`,
      lastModified: lastModified,
    },
    {
      url: `${websiteURL}/terms-of-use/`,
      lastModified: lastModified,
    },
  ];

  // Dynamically map over all service items to register their sitemap URLs
  const serviceEntries: MetadataRoute.Sitemap = serviceItems.map((item) => ({
    url: `${websiteURL}/${item.id}/`,
    lastModified: lastModified,
  }));

  return [...staticAndProductEntries, ...serviceEntries];
}
