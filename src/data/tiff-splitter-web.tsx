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

export const TIFFSplitterWeb: portfolioItem = {
  id: ProductIDs.TIFFSplitterWeb,
  title: productTitles.TIFFSplitterWeb,
  subtitle: productSubTitles.TIFFSplitterWeb,
  src: productImages.TIFFSplitterWeb.imgName,
  width: productImages.TIFFSplitterWeb.width,
  height: productImages.TIFFSplitterWeb.height,
  categories: [Categories.All, Categories.WebApp, Categories.Splitter],
  pageLink: `/${ProductIDs.TIFFSplitterWeb}`,
  productWebsite: productWebsites.TIFFSplitterWeb,
  features: [
    "Instantly Split Multi-Page TIFFs Online in Your Browser",
    "Private & Secure Client-Side Processing",
    "Flexible Page Selection and Splitting Options",
    "Smart File Naming and Output Organization",
    "No-Upload Architecture – Files Stay on Device",
  ],
  description: (
    <div className="flex flex-col">
      <strong className="mt-10">
        Privacy-First Online TIFF Splitter
      </strong>
      <p className="mt-2">
        Unlike traditional online tools that require large uploads, our **Online TIFF Splitter** runs entirely within your browser engine. Your confidential documents never travel to a server, ensuring 100% data privacy and compliance with secure workflow standards.
      </p>

      <strong className="mt-10">
        Instant Splitting – No File Limit
      </strong>
      <p className="mt-2">
        By removing the need to upload, you save bandwidth and time. Process gigabyte-sized TIFFs instantly using your device's own power. Works flawlessly even with slow or no internet connection.
      </p>

      <strong className="mt-10">Split Multi-Page TIFFs with Precision</strong>
      <p className="mt-2">
        Easily break down multi-page TIFF files into individual pages for more
        efficient sharing, editing, and storage. Ideal for batch-scanned
        documents, fax archives, and digitized reports that require individual
        page access or reorganization.
      </p>

      <strong className="mt-10">Extract Specific Pages or Ranges</strong>
      <p className="mt-2">
        Select exactly which pages you want to extract — single pages, custom
        ranges, or split at regular intervals. Perfect for workflows that
        require page-based isolation like invoice reviews, patient file
        extraction, or document submission systems.
      </p>

      <strong className="mt-10">Smart File Naming and Organized Outputs</strong>
      <p className="mt-2">
        Maintain order with automatically generated filenames for each split
        page. This feature streamlines batch processing for high-volume tasks
        like legal discovery, enterprise scanning, and archival systems.
      </p>

      <strong className="mt-10">Live Page Preview Before Splitting</strong>
      <p className="mt-2">
        Avoid mistakes with a built-in preview of all TIFF pages. Verify order,
        content, and selection before committing to the split — saving time and
        preventing rework.
      </p>

      <strong className="mt-10">Drag-and-Drop Simplicity</strong>
      <p className="mt-2">
        Quickly load your files with a drag-and-drop interface designed for
        speed and ease of use. No technical setup or complex navigation — just
        drag in your TIFF and start splitting.
      </p>

      <strong className="mt-10">
        Fast, Reliable TIFF Splitting in Your Browser
      </strong>
      <p className="mt-2">
        Split large TIFFs in seconds without sacrificing performance. Designed
        for users who need consistent results under heavy loads — from office
        scanning stations to enterprise digitization projects.
      </p>

      <strong className="mt-10">
        Ideal for Scanning, Archiving, and Document Automation
      </strong>
      <p className="mt-2">
        Whether you&#39;re digitizing old paperwork, breaking apart fax
        transmissions, or preparing documents for automated workflows, our TIFF
        splitter adapts to real-world needs with accuracy and speed.
      </p>

      <strong className="mt-10">
        Accessible Across Devices – Offline Capable PWA
      </strong>
      <p className="mt-2">
        Use the **TIFF splitter online** from any modern browser — desktop, laptop, or
        tablet. No software installation required. As a Progressive Web App (PWA), 
        it works even when you are offline, giving you the reliability of a desktop tool with the convenience of the web.
      </p>
    </div>
  ),

  metaData: {
    title: `Secure Online ${productTitles.TIFFSplitterWeb} | Private & Free Browser Tool`,
    keywords:
      "Online TIFF Splitter, Client-side TIFF Splitter, Browser-based TIFF Tool, Private TIFF Splitter, No Upload TIFF Splitter, Offline TIFF Tool, Split Multi-Page TIFF, Extract TIFF Pages, Free TIFF Split Tool, Batch TIFF Splitter",
    description:
      "Split multi-page TIFFs directly in your browser with our private, online TIFF splitter. No file uploads required—your documents stay secure on your device. Fast, free, and works offline.",
    alternates: {
      canonical: productWebsites.TIFFSplitterWeb,
    },
    openGraph: {
      title: `Secure Client-Side ${productTitles.TIFFSplitterWeb} | Private & Free Browser Tool`,
      description:
        "Split multi-page TIFFs directly in your browser with our private, client-side tool. No file uploads required—your documents stay secure on your device. Fast, free, and works offline.",
      url: productWebsites.TIFFSplitterWeb,
      siteName: `${productTitles.TIFFSplitterWeb} Online`,
      images: [
        {
          url: cloudinaryLoader({
            src: productImages.TIFFSplitterWeb.imgName,
            width: productImages.TIFFSplitterWeb.width,
          }),
          width: productImages.TIFFSplitterWeb.width,
          height: productImages.TIFFSplitterWeb.height,
          alt: `Free ${productTitles.TIFFSplitterWeb} Online`,
        },
      ],
      locale: "en_US",
      type: "website",
    },
  },
};
