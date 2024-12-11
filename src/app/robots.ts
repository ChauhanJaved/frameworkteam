import { headerCompanyName } from "@/data/website-data";
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: `https://www.${headerCompanyName.toLowerCase()}.com/sitemap.xml`,
  };
}
