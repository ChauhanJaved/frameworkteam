import {
  Categories,
  headerCompanyName,
  portfolioItem,
  ProductIDs,
  productImages,
  productSubTitles,
  productTitles,
  productWebsites,
  productDownloadLinks,
} from "@/data/website-data";
import cloudinaryLoader from "cloudinary-loader";
export const WebsitesScreenshotDLL: portfolioItem = {
  id: ProductIDs.WebsitesScreenshot,
  title: productTitles.WebsitesScreenshot,
  subtitle: productSubTitles.WebsitesScreenshot,
  src: `/${headerCompanyName.toLowerCase()}/${productImages.WebsitesScreenshot.imgName.toLowerCase()}`,
  width: productImages.WebsitesScreenshot.width,
  height: productImages.WebsitesScreenshot.height,
  categories: [Categories.All, Categories.Library],
  pageLink: `/${ProductIDs.WebsitesScreenshot}`,
  productWebsite: productWebsites.WebsitesScreenshot,
  downloadLink: productDownloadLinks.WebsitesScreenshot,

  features: [
    "Generate website thumbnail images",
    "Capture full-size screenshots of any web page",
    "Convert HTML to image",
    "Save resulting images to local files or in memory",
    "Capture entire web pages in one image without scrollbars",
  ],
  description: (
    <div className="flex flex-col">
      <strong className="mt-10">
        Powerful and Flexible WebsiteScreenshot .NET Component DLL
      </strong>
      <p className="mt-2">
        The WebsiteScreenshot .NET Component DLL is a robust and flexible .NET
        Class Library designed for rendering full-page website screenshots and
        thumbnail previews. Supporting multiple formats like JPG, GIF, PNG, BMP,
        and TIF, this powerful DLL makes capturing website images fast and
        customizable. Whether you&#39;re developing web or Windows applications,
        it provides the tools you need to create full-size screenshots, convert
        HTML to images, or generate thumbnail previews of web pages
        effortlessly.
      </p>
      <strong className="mt-10">Key Features</strong>
      <p className="mt-2">
        - Capture full-size screenshots of any website.
        <br />
        - Generate thumbnail images of website pages.
        <br />
        - Convert HTML code directly into image formats.
        <br />
        - Save images to local files or directly in memory.
        <br />
        - Take snapshots of entire web pages into a single image without
        scrollbars.
        <br />
        - Retrieve web pages via HTTP, HTTPS, or from a local file.
        <br />
        - Supports multiple image formats: JPG, GIF, PNG, BMP, and TIF.
        <br />
        - Adjustable JPEG quality for optimal compression.
        <br />
        - Compatible with 32-bit and 64-bit environments, including .NET 2.0 and
        .NET 4.0 assemblies.
        <br />
        - No need for third-party tools or printer drivers.
        <br />
        - Capture sites with flash content, and retrieve page metadata like
        links, title, or HTML source.
        <br />
        - Enable or disable scripts, ActiveX, and Java during the capture
        process.
        <br />
        - Set webpage load timeout and delay snapshots as needed.
        <br />
        - Flexible capture area width and height settings.
        <br />
        - Multithreaded architecture supports simultaneous processing of
        multiple requests, boosting efficiency.
        <br />
      </p>
    </div>
  ),
  metaData: {
    title: `Free ${productTitles.WebsitesScreenshot} for Windows | Capture Full-Page Screenshots and Thumbnails with .NET DLL`,
    keywords:
      "Website Screenshot .NET DLL, Full Page Website Screenshot, Web Page Thumbnails, HTML to Image Conversion, Website Image Generator, .NET Component for Screenshots, Batch Website Capture, Capture Full Web Pages, Website Screenshot API",
    description:
      "Capture full-page website screenshots, generate thumbnail previews, and convert HTML to image formats with the fast and free WebsitesScreenshot .NET DLL component. Use in your .NET applications to automate web page image captures with batch processing support.",
    alternates: {
      canonical: productWebsites.WebsitesScreenshot,
    },
    openGraph: {
      title: `Free ${productTitles.WebsitesScreenshot} for Windows | Capture Full-Page Screenshots and Thumbnails with .NET DLL`,
      description:
        "Capture full-page website screenshots, generate thumbnail previews, and convert HTML to image formats with the fast and free WebsitesScreenshot .NET DLL component. Use in your .NET applications to automate web page image captures with batch processing support.",
      url: productWebsites.WebsitesScreenshot,
      siteName: `${productTitles.WebsitesScreenshot} for Windows`,
      images: [
        {
          url: cloudinaryLoader({
            src: `/${headerCompanyName.toLowerCase()}/${productImages.WebsitesScreenshot.imgName.toLowerCase()}`,
            width: productImages.WebsitesScreenshot.width,
          }),
          width: productImages.WebsitesScreenshot.width,
          height: productImages.WebsitesScreenshot.height,
          alt: `Free ${productTitles.WebsitesScreenshot} for Windows`,
        },
      ],
      locale: "en_US",
      type: "article",
    },
  },
};
