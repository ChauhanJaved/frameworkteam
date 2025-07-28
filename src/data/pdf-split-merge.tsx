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
export const PDFSplitMerge: portfolioItem = {
  id: ProductIDs.PDFSplitMerge,
  title: productTitles.PDFSplitMerge,
  subtitle: productSubTitles.PDFSplitMerge,
  src: `/${headerCompanyName.toLowerCase()}/${productImages.PDFSplitMerge.imgName.toLowerCase()}`,
  width: productImages.PDFSplitMerge.width,
  height: productImages.PDFSplitMerge.height,
  categories: [Categories.All, Categories.DesktopApp],
  pageLink: `/${ProductIDs.PDFSplitMerge}`,
  productWebsite: productWebsites.PDFSplitMerge,
  downloadLink: productDownloadLinks.PDFSplitMerge,

  features: [
    "Secure Local Splitting and Merging with Complete Offline Privacy",
    "Ultra-Fast Splitting and Merging Performance",
    "Efficient Batch Processing for Multiple PDFs",
    "Flexible Split and Merge Options for Custom Output",
    "Rearrange PDF Pages Before Merging",
  ],
  description: (
    <div className="flex flex-col">
      <strong className="mt-10">
        Discover the Best PDF Split and Merge Software for Windows
      </strong>
      <p className="mt-2">
        Easily manage and organize your PDF files with our advanced PDF Split
        Merge software, designed for Windows. Operate fully offline to ensure
        your data remains private and secure, without the need for an internet
        connection. Split and merge PDFs locally with confidence and ease,
        safeguarding your files from unauthorized access.
      </p>
      <strong className="mt-10">
        Fast and Reliable PDF Splitting and Merging
      </strong>
      <p className="mt-2">
        Enjoy high-speed performance with our efficient PDF Split Merge tool.
        Whether you&#39;re at home, in the office, or on the move, split and
        merge your PDFs in seconds. Boost your productivity with quick, reliable
        PDF splitting and merging, wherever you are.
      </p>
      <strong className="mt-10">
        Streamlined Batch PDF Splitting and Merging
      </strong>
      <p className="mt-2">
        Simplify your workload with powerful batch processing. Split or merge
        multiple PDFs simultaneously, saving you time and effort. Whether
        you&#39;re dealing with a few files or hundreds, our batch processing
        feature ensures seamless handling of large PDF volumes.
      </p>
      <strong className="mt-10">Built for High-Volume PDF Management</strong>
      <p className="mt-2">
        Perfect for large projects, our PDF Split Merge software manages high
        volumes of PDFs effortlessly. Split or merge extensive collections of
        documents quickly and reliably. Just load your files, customize the
        settings, and let the software do the rest—your PDFs will be processed
        in no time.
      </p>
      <strong className="mt-10">Advanced Splitting and Merging Options</strong>
      <p className="mt-2">
        Our PDF Split Merge software offers a range of powerful splitting
        options to suit your needs. Split a document into individual pages,
        divide by every X pages, or specify a custom page range for precise
        control. Whether you need to extract single pages or break a large PDF
        into smaller sections, our software provides the flexibility to handle
        any task with ease. Rearranging pages before merging is also quick and
        simple, giving you full control over your PDF output.
      </p>
      <strong className="mt-10">Why Split and Merge PDFs?</strong>
      <p className="mt-2">
        Splitting and merging PDFs makes managing your documents easier and more
        efficient. Whether you need to separate large documents into smaller
        sections or combine multiple PDFs for streamlined sharing and
        collaboration, this tool gives you greater control over your files.+
      </p>
      <strong className="mt-10">Conclusion</strong>
      <p className="mt-2">
        Our PDF Split Merge software for Windows is the ultimate solution for
        fast, secure, and flexible PDF management. Handle small tasks or large
        projects with ease, thanks to its robust features and high-performance
        capabilities. Download the best PDF Split Merge tool for Windows today
        and experience seamless PDF management.
      </p>
    </div>
  ),
  metaData: {
    title: `Free ${productTitles.PDFSplitMerge} for Windows | Fast & Reliable PDF Splitting and Merging Tool`,
    keywords:
      "PDF Split Merge, Split PDF Files, Merge PDF Files, Batch PDF Splitting, Batch PDF Merging, Windows PDF Split Merge, PDF File Management",
    description:
      "Effortlessly split and merge PDF files with our fast and free Windows software. Enjoy an intuitive interface, batch processing, and customizable splitting and merging options for complete document control.",
    alternates: {
      canonical: productWebsites.PDFSplitMerge,
    },
    openGraph: {
      title: `Free ${productTitles.PDFSplitMerge} for Windows | Fast & Reliable PDF Splitting and Merging Tool`,
      description:
        "Effortlessly split and merge PDF files with our fast and free Windows software. Enjoy an intuitive interface, batch processing, and customizable splitting and merging options for complete document control.",
      url: `https://www.frameworkteam.com/${ProductIDs.PDFSplitMerge}.html`,
      siteName: `${productTitles.PDFSplitMerge} for Windows`,
      images: [
        {
          url: cloudinaryLoader({
            src: `/${headerCompanyName.toLowerCase()}/${productImages.PDFSplitMerge.imgName.toLowerCase()}`,
            width: productImages.PDFSplitMerge.width,
          }),
          width: productImages.PDFSplitMerge.width,
          height: productImages.PDFSplitMerge.height,
          alt: `Free ${productTitles.PDFSplitMerge} for Windows`,
        },
      ],
      locale: "en_US",
      type: "article",
    },
  },
};
