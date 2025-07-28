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
export const PNGtoPDFConverterWeb: portfolioItem = {
  id: ProductIDs.PNGtoPDFConverterWeb,
  title: productTitles.PNGtoPDFConverterWeb,
  subtitle: productSubTitles.PNGtoPDFConverterWeb,
  src: `/${headerCompanyName.toLowerCase()}/${productImages.PNGtoPDFConverterWeb.imgName.toLowerCase()}`,
  width: productImages.PNGtoPDFConverterWeb.width,
  height: productImages.PNGtoPDFConverterWeb.height,
  categories: [Categories.All, Categories.WebApp],
  pageLink: `/${ProductIDs.PNGtoPDFConverterWeb}`,
  productWebsite: productWebsites.PNGtoPDFConverterWeb,
  features: [
    "Free and Fast PNG to PDF Conversion",
    "Offline Processing for Maximum Privacy",
    "Combine Multiple PNG Images into a Single PDF",
    "Customize Page Orientation, Size, and Margins",
    "Drag, Drop, and Rearrange with Ease",
  ],
  description: (
    <div className="flex flex-col">
      <strong className="mt-10">Privacy-Focused PNG to PDF Converter</strong>
      <p className="mt-2">
        Our PNG to PDF web app runs entirely in your browser, ensuring that no
        files are uploaded or stored on external servers. Everything is handled
        locally for complete privacy and data security, making it perfect for
        sensitive or confidential images.
      </p>
      <strong className="mt-10">Fast and Fully Offline Conversion</strong>
      <p className="mt-2">
        Unlike traditional web tools that upload your images, this converter
        processes all files directly in your browser. This ensures
        lightning-fast performance and 100% control over your data—no internet
        connection required after loading the app.
      </p>
      <strong className="mt-10">Flexible Output Options</strong>
      <p className="mt-2">
        Convert multiple PNGs into one neatly compiled PDF or generate separate
        PDF files for each image. Our tool adapts to your workflow whether
        you&apos;re archiving, organizing, or sharing visuals.
      </p>
      <strong className="mt-10">Complete Layout Control</strong>
      <p className="mt-2">
        Choose your page orientation (portrait or landscape), pick from various
        sizes (A4, Letter, or image-fit), and fine-tune margins to create
        polished documents ready for print or sharing. Perfect for both casual
        and professional needs.
      </p>
      <strong className="mt-10">Reorder with Drag-and-Drop Simplicity</strong>
      <p className="mt-2">
        Drop your PNG files into the interface and rearrange them effortlessly.
        This visual editor ensures you can preview and organize the flow of your
        PDF before finalizing.
      </p>
      <strong className="mt-10">Professional Results in Seconds</strong>
      <p className="mt-2">
        Whether you&apos;re creating digital portfolios, presentation handouts,
        or reference documents, our tool provides high-quality output with
        minimal effort—no software installation or technical skills required.
      </p>
      <strong className="mt-10">Works on Any Device – Browser-Based</strong>
      <p className="mt-2">
        Access the PNG to PDF converter from your desktop, tablet, or mobile
        browser. As a fully responsive web app, it works seamlessly across
        devices with no need to install or configure anything.
      </p>
    </div>
  ),
  metaData: {
    title: `Free ${productTitles.PNGtoPDFConverterWeb} Online | Convert PNG Images to PDF Instantly`,
    keywords:
      "PNG to PDF Converter Online, Free PNG to PDF Tool, Convert PNG to PDF Securely, PNG Image to PDF, Batch PNG to PDF Web App, Offline PNG to PDF",
    description:
      "Convert PNG images to high-quality PDF files instantly with our free web tool. Enjoy secure, offline processing, drag-and-drop functionality, and complete PDF customization options—all in your browser.",
    alternates: {
      canonical: productWebsites.PNGtoPDFConverterWeb,
    },
    openGraph: {
      title: `Free ${productTitles.PNGtoPDFConverterWeb} Online | Convert PNG Images to PDF Instantly`,
      description:
        "Convert PNG images to high-quality PDF files instantly with our free web tool. Enjoy secure, offline processing, drag-and-drop functionality, and complete PDF customization options—all in your browser.",
      url: productWebsites.PNGtoPDFConverterWeb,
      siteName: `${productTitles.PNGtoPDFConverterWeb} Online`,
      images: [
        {
          url: cloudinaryLoader({
            src: `/${headerCompanyName.toLowerCase()}/${productImages.PNGtoPDFConverterWeb.imgName.toLowerCase()}`,
            width: productImages.PNGtoPDFConverterWeb.width,
          }),
          width: productImages.PNGtoPDFConverterWeb.width,
          height: productImages.PNGtoPDFConverterWeb.height,
          alt: `Free ${productTitles.PNGtoPDFConverterWeb} Online`,
        },
      ],
      locale: "en_US",
      type: "website",
    },
  },
};
