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
export const PDFSplitter: portfolioItem = {
  id: ProductIDs.PDFSplitter,
  title: productTitles.PDFSplitter,
  subtitle: productSubTitles.PDFSplitter,
  src: `/${headerCompanyName.toLowerCase()}/${productImages.PDFSplitter.imgName.toLowerCase()}`,
  width: productImages.PDFSplitter.width,
  height: productImages.PDFSplitter.height,
  categories: [Categories.All, Categories.DesktopApp],
  pageLink: `/${ProductIDs.PDFSplitter}`,
  productWebsite: productWebsites.PDFSplitter,
  downloadLink: productDownloadLinks.PDFSplitter,
  features: [
    "Local Splitting with Complete Offline Security",
    "Lightning-Fast Splitting Performance",
    "Efficient Batch Processing for Multiple PDFs",
    "Versatile Splitting Options for Customized Output",
  ],
  description: (
    <div className="flex flex-col">
      <strong className="mt-10">
        Discover the Best PDF Splitter for Windows
      </strong>
      <p className="mt-2">
        Easily manage and split large PDF files with our cutting-edge PDF
        Splitter software, designed specifically for Windows users. Operate
        fully offline for maximum privacy and security, ensuring your data
        remains safe without any risk of unauthorized access. No internet
        connection is needed—split your PDF documents locally with confidence.
      </p>
      <strong className="mt-10">Fast and Reliable PDF Splitting</strong>
      <p className="mt-2">
        Split PDF files at blazing speeds with our high-performance PDF
        splitter. Whether you&#39;re working from home, in the office, or on the
        move, our software quickly separates your PDF documents into individual
        pages or sections in just seconds. Stay productive with fast and
        efficient PDF splitting, no matter where you are.
      </p>
      <strong className="mt-10">Streamlined Batch PDF Splitting</strong>
      <p className="mt-2">
        Simplify your workflow with our powerful batch PDF splitting feature.
        Process multiple PDFs in one go, saving you time and effort. Whether you
        need to split a handful of files or handle hundreds, our batch
        processing ensures you can manage large volumes of PDFs without having
        to split each document one by one.
      </p>
      <strong className="mt-10">Designed for High-Volume Splitting</strong>
      <p className="mt-2">
        Perfect for large-scale projects, our PDF Splitter handles high volumes
        with ease. Whether you&#39;re splitting a few large PDFs or managing
        extensive document collections, this robust tool delivers fast, reliable
        results. Simply load your files or folders, customize your settings, and
        let the software do the rest—your PDFs will be separated into individual
        files in no time.
      </p>
      <strong className="mt-10">
        Flexible Splitting Options for Maximum Control
      </strong>
      <p className="mt-2">
        Take full control over how you split your PDFs. Our flexible options
        allow you to split each PDF into individual pages, split by every X
        pages, or select custom page ranges for precise extractions. No matter
        your requirements, our PDF Splitter adapts to your needs, giving you the
        flexibility to split your documents exactly how you want.
      </p>
      <strong className="mt-10">Why Split Large PDFs?</strong>
      <p className="mt-2">
        While large PDF files are useful for storing comprehensive documents,
        splitting them into smaller files can improve usability. Separate pages
        or sections can be easily shared, edited, or organized. Whether you need
        to extract key sections for presentations, web use, or collaboration,
        splitting PDFs into smaller parts offers greater flexibility and
        control.
      </p>
      <strong className="mt-10">Conclusion</strong>
      <p className="mt-2">
        Our PDF Splitter for Windows is the ultimate solution for fast, secure,
        and user-friendly PDF management. Whether you&#39;re handling small
        projects or splitting large volumes of PDFs, this software delivers
        unmatched flexibility and performance. Download the best PDF Splitter
        for Windows today and enjoy hassle-free document splitting at its
        finest.
      </p>
    </div>
  ),
  metaData: {
    title: `Free ${productTitles.PDFSplitter} for Windows | Fast & Reliable PDF Splitting Tool`,
    keywords:
      "PDF Splitter, Split PDF Files, Batch PDF Splitting, Windows PDF Splitter, PDF File Management",
    description:
      "Easily split large PDF files with our fast and free Windows software. Enjoy an intuitive interface, batch processing, and customizable splitting options for precise document control.",
    alternates: {
      canonical: productWebsites.PDFSplitter,
    },
    openGraph: {
      title: `Free ${productTitles.PDFSplitter} for Windows | Fast & Reliable PDF Splitting Tool`,
      description:
        "Easily split large PDF files with our fast and free Windows software. Enjoy an intuitive interface, batch processing, and customizable splitting options for precise document control.",
      url: productWebsites.PDFSplitter,
      siteName: `${productTitles.PDFSplitter} for Windows`,
      images: [
        {
          url: cloudinaryLoader({
            src: `/${headerCompanyName.toLowerCase()}/${productImages.PDFSplitter.imgName.toLowerCase()}`,
            width: productImages.PDFSplitter.width,
          }),
          width: productImages.PDFSplitter.width,
          height: productImages.PDFSplitter.height,
          alt: `Free ${productTitles.PDFSplitter} for Windows`,
        },
      ],
      locale: "en_US",
      type: "article",
    },
  },
};
