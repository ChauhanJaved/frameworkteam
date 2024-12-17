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
        src: "/icons/apple-icon.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icons/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/favicon.ico",
        sizes: "64x64 32x32 24x24 16x16",
        type: "image/x-icon",
      },
    ],
  };
}
