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
export const TIFFSplitMerge: portfolioItem = {
  id: ProductIDs.TIFFSplitMerge,
  title: productTitles.TIFFSplitMerge,
  subtitle: productSubTitles.TIFFSplitMerge,
  src: `/${headerCompanyName.toLowerCase()}/${productImages.TIFFSplitMerge.imgName.toLowerCase()}`,
  width: productImages.TIFFSplitMerge.width,
  height: productImages.TIFFSplitMerge.height,
  categories: [Categories.All, Categories.DesktopApp],
  pageLink: `/${ProductIDs.TIFFSplitMerge}`,
  productWebsite: productWebsites.TIFFSplitMerge,
  downloadLink: productDownloadLinks.TIFFSplitMerge,

  features: [
    "Secure Local Processing with Full Offline Privacy",
    "Blazing-Fast Splitting and Combining Performance",
    "Streamlined Batch Processing for Efficiency",
    "Flexible Splitting and Versatile Combining Options",
    "Easily Rearrange Pages Before Combining",
  ],
  description: (
    <div className="flex flex-col">
      <strong className="mt-10">
        The Ultimate TIFF Split and Merge Tool for Windows
      </strong>

      <p className="mt-2">
        Effortlessly manage your multi-page TIFF files with our all-in-one TIFF
        Split Merge software, designed exclusively for Windows users. This
        powerful desktop application operates entirely offline, ensuring
        top-notch data privacy and security. Enjoy complete peace of mind as you
        split and merge TIFF files locally, safeguarding them from any potential
        security risks or unauthorized access.
      </p>
      <strong className="mt-10">
        Blazing-Fast and Reliable TIFF Splitting & Merging
      </strong>

      <p className="mt-2">
        Whether you need to split large TIFF files into individual pages or
        merge multiple TIFFs into a single document, our software delivers
        lightning-fast performance. Perfect for use at home, in the office, or
        on the go, you can split or combine your TIFF files in seconds—no
        internet connection required. Boost your productivity with swift,
        dependable processing wherever you are.
      </p>
      <strong className="mt-10">
        Efficient Batch Processing for Splitting & Merging TIFFs
      </strong>

      <p className="mt-2">
        Streamline your workflow with our batch processing feature, enabling you
        to split or combine multiple TIFF files in a single step. Whether
        you&#39;re managing a few TIFFs or handling thousands, our software
        makes bulk processing simple and time-saving, eliminating the need to
        handle each file individually.
      </p>
      <strong className="mt-10">
        Optimized for High-Volume TIFF Operations
      </strong>

      <p className="mt-2">
        Built for high-volume tasks, our TIFF Split Merge software effortlessly
        manages large-scale projects with ease. Whether you&#39;re splitting a
        lengthy document into individual pages or combining a vast collection of
        multi-page TIFFs, this robust tool ensures fast, efficient results. Just
        add your files or folders, configure your settings, and let the software
        handle the rest—your TIFFs will be split or merged into high-quality
        files in no time.
      </p>
      <strong className="mt-10">
        Customizable Options for Splitting & Merging TIFFs
      </strong>

      <p className="mt-2">
        Take full control over your TIFF file management with our customizable
        splitting and merging options. Easily rearrange pages before merging or
        specify page ranges for splitting to tailor the final output to your
        needs. Whether organizing documents, adjusting sequences, or customizing
        layouts, our software gives you the precision tools to create the
        perfect TIFF file every time.
      </p>
      <strong className="mt-10">Why Split and Merge Multi-Page TIFFs?</strong>

      <p className="mt-2">
        Splitting and merging multi-page TIFFs provides greater flexibility and
        convenience for managing large documents. Whether for archiving,
        sharing, or organizing, our software simplifies the process, making it
        easy to customize and control your TIFF files for any purpose.
      </p>
      <strong className="mt-10">Conclusion</strong>

      <p className="mt-2">
        Our TIFF Split Merge software for Windows combines speed, security, and
        user-friendliness into one versatile tool. Whether you&#39;re splitting
        files, merging documents, or managing large-scale projects, this
        software delivers the efficiency and flexibility you need. Download the
        best TIFF Split Merge tool for Windows today and experience seamless
        file management like never before.
      </p>
    </div>
  ),
  metaData: {
    title: `Free ${productTitles.TIFFSplitMerge} for Windows | Fast & Reliable TIFF Splitting & Merging Tool`,
    keywords:
      "TIFF Splitter, TIFF Merger, Split TIFF Files, Merge TIFF Files, Batch TIFF Processing, Windows TIFF Tool, TIFF File Management",
    description:
      "Effortlessly split and merge multi-page TIFF files with our fast and free Windows software. Enjoy a user-friendly interface, batch processing, and customizable options for precise file management.",
    alternates: {
      canonical: productWebsites.TIFFSplitMerge,
    },
    openGraph: {
      title: `Free ${productTitles.TIFFSplitMerge} for Windows | Fast & Reliable TIFF Splitting & Merging Tool`,
      description:
        "Effortlessly split and merge multi-page TIFF files with our fast and free Windows software. Enjoy a user-friendly interface, batch processing, and customizable options for precise file management.",
      url: productWebsites.TIFFSplitMerge,
      siteName: `${productTitles.TIFFSplitMerge} for Windows`,
      images: [
        {
          url: cloudinaryLoader({
            src: `/${headerCompanyName.toLowerCase()}/${productImages.TIFFSplitMerge.imgName.toLowerCase()}`,
            width: productImages.TIFFSplitMerge.width,
          }),
          width: productImages.TIFFSplitMerge.width,
          height: productImages.TIFFSplitMerge.height,
          alt: `Free ${productTitles.TIFFSplitMerge} for Windows`,
        },
      ],
      locale: "en_US",
      type: "article",
    },
  },
};
