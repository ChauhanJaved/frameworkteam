import {
  companyName,
  headerCompanyName,
  heroDesc,
  heroTitle,
} from "@/data/website-data";
import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${companyName} - India`,
    short_name: headerCompanyName,
    description: `${heroTitle}. ${heroDesc}`,
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "48x48",
        type: "image/x-icon",
      },
    ],
  };
}
