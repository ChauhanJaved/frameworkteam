// src/data/tiff-merger-web.tsx
import {
    Categories,
    portfolioItem,
    ProductIDs,
    productImages,
    productSubTitles,
    productTitles,
    productWebsites,
} from "@/data/website-data";
import cloudinaryLoader from "@/lib/cloudinary-loader";

export const TIFFMergerWeb: portfolioItem = {
    id: ProductIDs.TIFFMergerWeb,
    title: productTitles.TIFFMergerWeb,
    subtitle: productSubTitles.TIFFMergerWeb,
    src: productImages.TIFFMergerWeb.imgName,
    width: productImages.TIFFMergerWeb.width,
    height: productImages.TIFFMergerWeb.height,
    categories: [Categories.All, Categories.WebApp, Categories.Merger],
    pageLink: `/${ProductIDs.TIFFMergerWeb}`,
    productWebsite: productWebsites.TIFFMergerWeb,
    features: [
        "Instantly Merge Multiple TIFFs Online in Your Browser",
        "Private & Secure Client-Side Processing",
        "Combine TIFFs into a Single Multi-Page File",
        "No-Upload Architecture – Files Stay on Device",
        "Works Offline with Progressive Web App (PWA)",
    ],
    description: (
        <div className="flex flex-col">
            <strong className="mt-10">
                Privacy-First Online TIFF Merger
            </strong>
            <p className="mt-2">
                Unlike traditional online tools that require large uploads, our **Online TIFF Merger** runs entirely within your browser engine. Your confidential documents never travel to a server, ensuring 100% data privacy and compliance with secure workflow standards.
            </p>

            <strong className="mt-10">
                Instant Merging – No File Limit
            </strong>
            <p className="mt-2">
                By removing the need to upload, you save bandwidth and time. Process gigabyte-sized TIFFs instantly using your device&#39;s own power. Works flawlessly even with slow or no internet connection.
            </p>

            <strong className="mt-10">Combine Multiple TIFFs</strong>
            <p className="mt-2">
                Easily merge multiple TIFF files into a single multi-page TIFF document for efficient archiving, sharing, and organization. Ideal for consolidating scanned invoices, reports, and records.
            </p>

            <strong className="mt-10">Drag-and-Drop Simplicity</strong>
            <p className="mt-2">
                Quickly load your files with a drag-and-drop interface designed for speed and ease of use. Arrange the order of your files and merge them with a single click.
            </p>

            <strong className="mt-10">
                Accessible Across Devices – Offline Capable PWA
            </strong>
            <p className="mt-2">
                Use the **TIFF Merger online** from any modern browser — desktop, laptop, or tablet. No software installation required. As a Progressive Web App (PWA), it works even when you are offline.
            </p>
        </div>
    ),

    metaData: {
        title: `Secure Online ${productTitles.TIFFMergerWeb} | Private & Free Browser Tool`,
        keywords:
            "Online TIFF Merger, Client-side TIFF Merger, Browser-based TIFF Tool, Private TIFF Merger, No Upload TIFF Merger, Offline TIFF Tool, Merge TIFF Files, Combine TIFFs, Free TIFF Merge Tool",
        description:
            "Merge multiple TIFF files directly in your browser with our private, online TIFF merger. No file uploads required—your documents stay secure on your device. Fast, free, and works offline.",
        alternates: {
            canonical: productWebsites.TIFFMergerWeb,
        },
        openGraph: {
            title: `Secure Client-Side ${productTitles.TIFFMergerWeb} | Private & Free Browser Tool`,
            description:
                "Merge multiple TIFF files directly in your browser with our private, client-side tool. No file uploads required—your documents stay secure on your device. Fast, free, and works offline.",
            url: productWebsites.TIFFMergerWeb,
            siteName: `${productTitles.TIFFMergerWeb} Online`,
            images: [
                {
                    url: cloudinaryLoader({
                        src: productImages.TIFFMergerWeb.imgName,
                        width: productImages.TIFFMergerWeb.width,
                    }),
                    width: productImages.TIFFMergerWeb.width,
                    height: productImages.TIFFMergerWeb.height,
                    alt: `Free ${productTitles.TIFFMergerWeb} Online`,
                },
            ],
            locale: "en_US",
            type: "website",
        },
    },
};
