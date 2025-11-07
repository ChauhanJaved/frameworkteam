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
export const WebpageThumbnailer: portfolioItem = {
  id: ProductIDs.WebpageThumbnailer,
  title: productTitles.WebpageThumbnailer,
  subtitle: productSubTitles.WebpageThumbnailer,
  src: `/${headerCompanyName.toLowerCase()}/${productImages.WebpageThumbnailer.imgName.toLowerCase()}`,
  width: productImages.WebpageThumbnailer.width,
  height: productImages.WebpageThumbnailer.height,
  categories: [Categories.All, Categories.DesktopApp],
  pageLink: `/${ProductIDs.WebpageThumbnailer}`,
  productWebsite: productWebsites.WebpageThumbnailer,
  downloadLink: productDownloadLinks.WebpageThumbnailer,
  features: [
    "Batch convert HTML files into images",
    "Capture full-page screenshots of websites",
    "Schedule automatic website screenshot captures",
    "Runs in the background",
    "Supports image formats: JPG, GIF, PNG, BMP, and TIF",
  ],
  description: (
    <div className="flex flex-col">
      <strong className="mt-10">
        Webpage Thumbnailer: Convert MHTML and HTML Files to Images & Capture
        Full-Length Website Screenshots
      </strong>

      <p className="mt-2">
        Webpage Thumbnailer is a powerful and versatile Windows desktop
        application designed to convert MHTML and HTML files into high-quality
        images, capture full-length screenshots of websites, and generate
        thumbnail previews of web pages. With support for popular image formats
        such as JPG, GIF, PNG, BMP, and TIF, this tool provides a comprehensive
        solution for all your web page capture needs.
      </p>

      <p className="mt-2">
        Whether you&#39;re a web designer, a digital marketer, or a content
        creator, Webpage Thumbnailer simplifies the process of converting web
        pages into images quickly and efficiently. It allows you to capture an
        entire web page&#39;s content, from top to bottom, without the need for
        manual screen capturing or piecing together multiple screenshots.
      </p>

      <strong className="mt-10">Key Features of Webpage Thumbnailer:</strong>

      <p className="mt-2">
        <strong>Batch Conversion:</strong> Convert multiple MHTML and HTML files
        to images in a single batch. Save time by automating the conversion
        process without compromising quality.
      </p>

      <p className="mt-2">
        <strong>Full-Length Website Screenshots:</strong> Capture full-size
        screenshots of entire web pages, ensuring that all visible content is
        preserved. No need to scroll and stitch—Webpage Thumbnailer handles it
        all for you.
      </p>

      <p className="mt-2">
        <strong>Generate Thumbnail Previews:</strong> Create thumbnail-sized
        images of web pages, ideal for enhancing user experience by offering
        visual previews in search results, directories, or listings.
      </p>

      <p className="mt-2">
        <strong>Multi-Threaded Batch Mode:</strong> Efficiently handle large
        volumes of URLs or HTML files. The multi-threaded batch mode allows you
        to capture thousands of web pages at once, working in the background
        without user intervention.
      </p>

      <p className="mt-2">
        <strong>Automatic Scheduling:</strong> Schedule automatic website
        screenshot captures at specific times, enabling you to keep up-to-date
        snapshots of dynamic or frequently changing websites.
      </p>

      <p className="mt-2">
        <strong>Multiple Image Format Support:</strong> Export web pages to a
        variety of image formats, including JPG, PNG, GIF, BMP, and TIF, with
        options to customize JPEG compression for optimal file sizes.
      </p>

      <p className="mt-2">
        <strong>Flash Content Capture:</strong> Seamlessly capture websites with
        Flash elements, ensuring that all content is included in the image.
      </p>

      <p className="mt-2">
        <strong>Delayed Snapshots:</strong> Set delays before capturing a web
        page to allow content to fully load, ensuring an accurate and complete
        image.
      </p>

      <p className="mt-2">
        <strong>Customizable Web Page Settings:</strong> Disable Java, ActiveX,
        or scripts to fine-tune the appearance of web pages before capturing
        screenshots, providing maximum control over the final image.
      </p>

      <strong className="mt-10">
        Enhance User Experience with Webpage Thumbnails
      </strong>

      <p className="mt-2">
        Webpage Thumbnailer is particularly useful for displaying thumbnail
        previews alongside search results or directory listings. Providing
        visual previews enhances usability, allowing users to preview websites
        before clicking links. This feature reduces frustration from broken
        links, inappropriate content, or unwanted pop-ups, leading to higher
        user satisfaction and engagement.
      </p>

      <p className="mt-2">
        With Webpage Thumbnailer, you can effortlessly embed these thumbnails
        into your listings, giving users a quick, clear idea of the content
        before visiting each site. This improves decision-making speed and
        enhances the overall browsing experience.
      </p>

      <strong className="mt-10">Ideal for Web Designers and Developers</strong>

      <p className="mt-2">
        Webpage Thumbnailer is the perfect tool for web designers who need to
        showcase web page designs to clients. Instead of relying on manual
        screen capture methods, Webpage Thumbnailer automates the process,
        capturing the entire page with just a few clicks. Whether you need to
        convert MHTML or HTML files into JPG, PNG, GIF, BMP, or TIF images, this
        application streamlines the process for efficient client previews.
      </p>

      <strong className="mt-10">
        Perfect for Bloggers, Forum Posters, and Content Creators
      </strong>

      <p className="mt-2">
        When writing blog posts, forum comments, or articles, including a
        thumbnail image of the website you&#39;re referencing adds a
        professional touch. Webpage Thumbnailer makes it easy to generate
        thumbnails of varying sizes, helping you quickly and efficiently enhance
        your content with visual elements.
      </p>
    </div>
  ),
  metaData: {
    title: `Free ${productTitles.WebpageThumbnailer} for Windows | Fast & Efficient Web Page Screenshot and Thumbnail Tool`,
    keywords:
      "Webpage Thumbnailer, Webpage Screenshots, HTML to Image, MHTML to Image, Batch Webpage Capture, Full-Length Website Screenshots, Web Page Thumbnails, Website Thumbnail Generator, Windows Webpage Screenshot Tool",
    description:
      "Capture full-length web page screenshots and generate thumbnail previews with our fast and free Webpage Thumbnailer for Windows. Convert MHTML and HTML files to images, schedule automatic captures, and enjoy batch processing for large volumes of websites.",
    alternates: {
      canonical: productWebsites.WebpageThumbnailer,
    },
    openGraph: {
      title: `Free ${productTitles.WebpageThumbnailer} for Windows | Fast & Efficient Web Page Screenshot and Thumbnail Tool`,
      description:
        "Capture full-length web page screenshots and generate thumbnail previews with our fast and free Webpage Thumbnailer for Windows. Convert MHTML and HTML files to images, schedule automatic captures, and enjoy batch processing for large volumes of websites.",
      url: productWebsites.WebpageThumbnailer,
      siteName: `${productTitles.WebpageThumbnailer} for Windows`,
      images: [
        {
          url: cloudinaryLoader({
            src: `/${headerCompanyName.toLowerCase()}/${productImages.WebpageThumbnailer.imgName.toLowerCase()}`,
            width: productImages.WebpageThumbnailer.width,
          }),
          width: productImages.WebpageThumbnailer.width,
          height: productImages.WebpageThumbnailer.height,
          alt: `Free ${productTitles.WebpageThumbnailer} for Windows`,
        },
      ],
      locale: "en_US",
      type: "article",
    },
  },
};
