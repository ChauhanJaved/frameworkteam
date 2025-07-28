import {
  Categories,
  headerCompanyName,
  portfolioItem,
  ProductIDs,
  productImages,
  productSubTitles,
  productTitles,
  productWebsites,
} from "@/data/website-data";
import cloudinaryLoader from "cloudinary-loader";
export const TIFFtoPDFConverterWeb: portfolioItem = {
  id: ProductIDs.TIFFtoPDFConverterWeb,
  title: productTitles.TIFFtoPDFConverterWeb,
  subtitle: productSubTitles.TIFFtoPDFConverterWeb,
  src: `/${headerCompanyName.toLowerCase()}/${productImages.TIFFtoPDFConverterWeb.imgName.toLowerCase()}`,
  width: productImages.TIFFtoPDFConverterWeb.width,
  height: productImages.TIFFtoPDFConverterWeb.height,
  categories: [Categories.All, Categories.WebApp],
  pageLink: `/${ProductIDs.TIFFtoPDFConverterWeb}`,
  productWebsite: productWebsites.TIFFtoPDFConverterWeb,
  features: [
    "Secure Web App for TIFF to PDF Conversion",
    "Offline Processing – Files Never Leave Your Device",
    "Convert Multi-Page or Single TIFF Files Easily",
    "Custom Orientation, Page Size, and Margins",
    "User-Friendly Interface with Drag-and-Drop Support",
  ],
  description: (
    <div className="flex flex-col">
      <strong className="mt-10">
        Local and Private Conversion in Your Browser
      </strong>
      <p className="mt-2">
        Our TIFF to PDF converter works entirely within your browser, keeping
        your files safe and secure on your device. There are no uploads or
        external server processing, ensuring your sensitive files stay private
        and under your control.
      </p>
      <strong className="mt-10">
        100% Offline – No Uploads or Internet Required
      </strong>
      <p className="mt-2">
        Unlike many web apps that rely on cloud servers, our converter performs
        all operations locally. Enjoy fast, secure, and offline conversions
        without worrying about data breaches or internet connectivity.
      </p>
      <strong className="mt-10">
        Supports Multi-Page and Single TIFF Files
      </strong>
      <p className="mt-2">
        Easily convert both multi-page TIFF documents and individual TIFF images
        to PDFs. Whether you&apos;re working with scanned documents or
        high-quality image sequences, our tool handles all TIFF formats
        seamlessly.
      </p>
      <strong className="mt-10">Combine or Split TIFF Pages in PDF</strong>
      <p className="mt-2">
        Choose to combine all pages of a multi-page TIFF into one PDF or create
        separate PDFs for each image. This flexibility is ideal for archiving,
        organizing, or sharing content based on your needs.
      </p>
      <strong className="mt-10">
        Custom Page Settings for a Perfect Output
      </strong>
      <p className="mt-2">
        Personalize your PDF output with layout settings: Orientation: Choose
        portrait or landscape to fit your layout. Page Size: Select A4, US
        Letter, or auto-fit for accurate scaling. Margins: Customize spacing to
        optimize readability and formatting.
      </p>
      <strong className="mt-10">Ready for Print or Sharing</strong>
      <p className="mt-2">
        Generate high-quality PDFs suitable for professional printing, document
        submissions, or easy sharing. Our layout tools ensure your output looks
        sharp and consistent.
      </p>
      <strong className="mt-10">Intuitive Drag-and-Drop UI</strong>
      <p className="mt-2">
        Quickly load your TIFF files with a simple drag-and-drop interface. Save
        time and avoid complex upload menus for a seamless conversion
        experience.
      </p>
      <strong className="mt-10">Fast, Efficient TIFF to PDF Conversion</strong>
      <p className="mt-2">
        Optimized for performance, our converter processes files quickly without
        sacrificing quality. Perfect for high-volume users and time-sensitive
        tasks.
      </p>
      <strong className="mt-10">Accessible on Any Device with a Browser</strong>
      <p className="mt-2">
        As a web-based app, you can use the TIFF to PDF converter from any
        device—desktop, laptop, tablet, or smartphone. No installation needed.
        Just open the browser and start converting.
      </p>
    </div>
  ),
  metaData: {
    title: `Free ${productTitles.TIFFtoPDFConverterWeb} Online | Secure TIFF to PDF Tool`,
    keywords:
      "TIFF to PDF Converter Online, Convert TIFF to PDF Free, Multi-Page TIFF to PDF, Offline TIFF to PDF Tool, Image to PDF Web App, Secure File Converter",
    description:
      "Convert TIFF images to PDF securely with our free web app. Process files locally in your browser with no uploads, drag-and-drop support, and full PDF layout control.",
    alternates: {
      canonical: productWebsites.TIFFtoPDFConverterWeb,
    },
    openGraph: {
      title: `Free ${productTitles.TIFFtoPDFConverterWeb} Online | Secure TIFF to PDF Tool`,
      description:
        "Convert TIFF images to PDF securely with our free web app. Process files locally in your browser with no uploads, drag-and-drop support, and full PDF layout control.",
      url: productWebsites.TIFFtoPDFConverterWeb,
      siteName: `${productTitles.TIFFtoPDFConverterWeb} Online`,
      images: [
        {
          url: cloudinaryLoader({
            src: `/${headerCompanyName.toLowerCase()}/${productImages.TIFFtoPDFConverterWeb.imgName.toLowerCase()}`,
            width: productImages.TIFFtoPDFConverterWeb.width,
          }),
          width: productImages.TIFFtoPDFConverterWeb.width,
          height: productImages.TIFFtoPDFConverterWeb.height,
          alt: `Free ${productTitles.TIFFtoPDFConverterWeb} Online`,
        },
      ],
      locale: "en_US",
      type: "website",
    },
  },
};
