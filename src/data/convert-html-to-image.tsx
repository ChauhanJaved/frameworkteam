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
export const ConvertHTMLtoImage: portfolioItem = {
  id: ProductIDs.ConvertHTMLtoImage,
  title: productTitles.ConvertHTMLtoImage,
  subtitle: productSubTitles.ConvertHTMLtoImage,
  src: `/${headerCompanyName.toLowerCase()}/${productImages.ConvertHTMLtoImage.imgName.toLowerCase()}`,
  width: productImages.ConvertHTMLtoImage.width,
  height: productImages.ConvertHTMLtoImage.height,
  categories: [Categories.All, Categories.CommandLine],
  pageLink: `/${ProductIDs.ConvertHTMLtoImage}`,
  productWebsite: productWebsites.ConvertHTMLtoImage,
  downloadLink: productDownloadLinks.ConvertHTMLtoImage,

  features: [
    "Effortlessly batch convert multiple HTML files to image formats",
    "Generate full-page website snapshots with ease",
    "Automate scheduled captures of website screenshots",
    "Operates seamlessly in the background",
    "Supports various image formats including JPG, GIF, PNG, BMP, and TIF",
  ],
  description: (
    <div className="flex flex-col">
      <strong className="mt-10">
        ConvertHTMLtoImage - Windows Command Line Tool
      </strong>

      <p className="mt-2">
        {" "}
        ConvertHTMLtoImage is a powerful Windows Command Line Tool designed for
        seamless HTML and MHTML file conversion to image formats like JPG, GIF,
        PNG, BMP, and TIF. This versatile tool allows you to take full-length
        website screenshots, generate thumbnail previews from any URL, and
        convert multiple web pages to images in batch mode.{" "}
      </p>
      <strong className="mt-10">Key Features</strong>

      <p className="mt-2">
        {" "}
        - Batch Convert HTML & MHTML Files: Quickly convert multiple HTML and
        MHTML files to image formats in a single command.
        <br /> - Full-Page Website Screenshots: Capture complete, full-length
        screenshots of websites with just one command.
        <br /> - Thumbnail Previews: Generate thumbnail images of website pages,
        ideal for search results or directory listings.
        <br /> - Scheduled Captures: Automate website screenshots by scheduling
        capture tasks.
        <br /> - Background Operation: Runs silently in the background without
        displaying or keeping web pages active during capture.
        <br /> - Multi-Threaded Batch Processing: Capture multiple websites
        simultaneously, enhancing efficiency and speed.
        <br /> - Supports Flash Content: Capture websites with Flash content
        without any extra configuration.
        <br /> - Customizable Settings: Adjust JPEG compression, define output
        image dimensions, and set timeouts or delays for web page loading.
        <br /> - Advanced Control: Disable Java, ActiveX, and scripts on web
        pages for optimized capturing.{" "}
      </p>
      <strong className="mt-10">Command Line Usage Examples</strong>

      <p className="mt-2">
        {" "}
        Capture Full-Size Website Screenshot:
        <br />{" "}
        <code>
          ConvertHTMLtoImage.exe /url &#34;www.ConvertHTMLtoImage.com&#34;
        </code>
        <br />
        Generate Thumbnail of a Web Page:
        <br />{" "}
        <code>
          ConvertHTMLtoImage.exe /url &#34;www.ConvertHTMLtoImage.com&#34;
          /width 100 /height 200
        </code>
        <br />
        Convert Offline HTML File to Image:
        <br />{" "}
        <code>ConvertHTMLtoImage.exe /file &#34;c:/htmlfile.html&#34;</code>
        <br />
        Batch Convert Multiple Web Pages:
        <br /> <code>ConvertHTMLtoImage.exe /list &#34;c:/list.txt&#34;</code>
      </p>
      <strong className="mt-10">
        Boost Website Usability with Thumbnail Previews
      </strong>

      <p className="mt-2">
        {" "}
        Use ConvertHTMLtoImage to add thumbnail previews of website pages
        alongside search results or directory listings. This enhances user
        experience by allowing quick previews of web pages before visiting,
        reducing frustration from broken links or inappropriate content.{" "}
      </p>
      <strong className="mt-10">Easy Integration into Web Applications</strong>

      <p className="mt-2">
        {" "}
        This command line tool can easily be integrated into applications
        developed in PHP, ASP.NET (C# or VB), or other languages, enabling
        automated image generation workflows. Although we don&#39;t provide
        sample scripts, you can explore detailed command line usage to get
        started.{" "}
      </p>
      <strong className="mt-10">
        Automate Screenshot Captures with Windows Scheduler
      </strong>

      <p className="mt-2">
        {" "}
        ConvertHTMLtoImage integrates seamlessly with Windows Scheduler to
        automate website snapshots at scheduled intervals. Simply configure the
        tool with your preferred settings and schedule your capture tasks
        effortlessly.{" "}
      </p>
    </div>
  ),
  metaData: {
    title: `Free ${productTitles.ConvertHTMLtoImage} for Windows | Convert HTML & MHTML to Images, Screenshots, and Thumbnails`,
    keywords:
      "HTML to Image, MHTML to Image, Batch HTML Conversion, Full-Length Website Screenshots, Web Page Thumbnails, Website Thumbnail Generator, Windows Command Line HTML to Image Tool, HTML Screenshot Tool, Website Batch Capture",
    description:
      "Easily convert HTML and MHTML files to images, capture full-length website screenshots, and generate thumbnail previews with our fast and free ConvertHTMLtoImage command line tool for Windows. Schedule automatic captures and process multiple websites in batch mode.",
    alternates: {
      canonical: productWebsites.ConvertHTMLtoImage,
    },
    openGraph: {
      title: `Free ${productTitles.ConvertHTMLtoImage} for Windows | Convert HTML & MHTML to Images, Screenshots, and Thumbnails`,
      description:
        "Easily convert HTML and MHTML files to images, capture full-length website screenshots, and generate thumbnail previews with our fast and free ConvertHTMLtoImage command line tool for Windows. Schedule automatic captures and process multiple websites in batch mode.",
      url: productWebsites.ConvertHTMLtoImage,
      siteName: `${productTitles.ConvertHTMLtoImage} for Windows`,
      images: [
        {
          url: cloudinaryLoader({
            src: `/${headerCompanyName.toLowerCase()}/${productImages.ConvertHTMLtoImage.imgName.toLowerCase()}`,
            width: productImages.ConvertHTMLtoImage.width,
          }),
          width: productImages.ConvertHTMLtoImage.width,
          height: productImages.ConvertHTMLtoImage.height,
          alt: `Free ${productTitles.ConvertHTMLtoImage} for Windows`,
        },
      ],
      locale: "en_US",
      type: "article",
    },
  },
};
