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
export const PDFCombiner: portfolioItem = {
  id: ProductIDs.PDFCombiner,
  title: productTitles.PDFCombiner,
  subtitle: productSubTitles.PDFCombiner,
  src: `/${headerCompanyName.toLowerCase()}/${productImages.PDFCombiner.imgName.toLowerCase()}`,
  width: productImages.PDFCombiner.width,
  height: productImages.PDFCombiner.height,
  categories: [Categories.All, Categories.DesktopApp],
  pageLink: `/${ProductIDs.PDFCombiner}`,
  productWebsite: productWebsites.PDFCombiner,
  downloadLink: productDownloadLinks.PDFCombiner,

  features: [
    "Local Combining with Complete Offline Security",
    "Lightning-Fast Combining Performance",
    "Efficient Batch Processing for Multiple PDFs",
    "Versatile Combining Options for Customized Output",
    "Rearrange PDF Pages Before Combining",
  ],
  description: (
    <div className="flex flex-col">
      <strong className="mt-10">
        Discover the Best PDF Combiner for Windows
      </strong>
      <p className="mt-2">
        Effortlessly manage and combine multiple PDF files with our top-tier PDF
        Combiner software, designed specifically for Windows users. Operate
        entirely offline to ensure maximum privacy and security, keeping your
        data safe from unauthorized access. No internet connection is
        required—merge your PDF documents locally with confidence and ease.
      </p>

      <strong className="mt-10">Fast and Reliable PDF Combining</strong>
      <p className="mt-2">
        Experience lightning-fast performance with our high-efficiency PDF
        combiner. Whether you&#39;re at home, in the office, or on the go, our
        software quickly merges your PDF files into a single document in just
        seconds. Boost your productivity with seamless and rapid PDF combining,
        no matter where you are.
      </p>

      <strong className="mt-10">Streamlined Batch PDF Combining</strong>
      <p className="mt-2">
        Simplify your workload with our powerful batch PDF combining feature.
        Combine multiple PDFs at once, saving you both time and effort. Whether
        you need to merge a few files or hundreds, our batch processing ensures
        you can manage large volumes of PDFs without the need for manual,
        one-by-one merging.
      </p>

      <strong className="mt-10">Built for High-Volume Combining</strong>
      <p className="mt-2">
        Ideal for large-scale projects, our PDF Combiner handles high volumes of
        PDFs with ease. Whether you&#39;re combining a few large PDFs or
        managing an extensive document collection, this reliable tool delivers
        fast, dependable results. Simply load your files, customize your
        settings, and let the software handle the rest—your PDFs will be
        combined into a single file in no time.
      </p>

      <strong className="mt-10">
        Flexible Combining Options for Full Control
      </strong>
      <p className="mt-2">
        Take full control over how you combine your PDFs. Our flexible options
        allow you to merge entire documents or rearrange pages for customized
        output. No matter your requirements, our PDF Combiner adapts to your
        needs, providing the flexibility to combine your PDFs exactly how you
        want.
      </p>

      <strong className="mt-10">Why Combine Multiple PDFs?</strong>
      <p className="mt-2">
        While individual PDFs are useful, combining them into a single document
        can significantly improve organization and accessibility. Merging PDFs
        makes it easier to share, collaborate, and store your documents in one
        cohesive file. Whether for presentations, project documentation, or
        archiving, combining PDFs gives you greater control over your files.
      </p>

      <strong className="mt-10">Conclusion</strong>
      <p className="mt-2">
        Our PDF Combiner for Windows is the ultimate tool for fast, secure, and
        user-friendly PDF management. Whether you&#39;re handling small tasks or
        managing large-scale PDF combinations, this software provides unmatched
        flexibility and performance. Download the best PDF Combiner for Windows
        today and enjoy effortless document merging like never before.
      </p>
    </div>
  ),
  metaData: {
    title: `Free ${productTitles.PDFCombiner} for Windows | Fast & Reliable PDF Combining Tool`,
    keywords:
      "PDF Combiner, Combine PDF Files, Batch PDF Combining, Windows PDF Combiner, PDF File Management",
    description:
      "Easily combine multiple PDF files with our fast and free Windows software. Enjoy an intuitive interface, batch processing, and customizable combining options for complete document control.",
    alternates: {
      canonical: productWebsites.PDFCombiner,
    },
    openGraph: {
      title: `Free ${productTitles.PDFCombiner} for Windows | Fast & Reliable PDF Combining Tool`,
      description:
        "Easily combine multiple PDF files with our fast and free Windows software. Enjoy an intuitive interface, batch processing, and customizable combining options for complete document control.",
      url: productWebsites.PDFCombiner,
      siteName: `${productTitles.PDFCombiner} for Windows`,
      images: [
        {
          url: cloudinaryLoader({
            src: `/${headerCompanyName.toLowerCase()}/${productImages.PDFCombiner.imgName.toLowerCase()}`,
            width: productImages.PDFCombiner.width,
          }),
          width: productImages.PDFCombiner.width,
          height: productImages.PDFCombiner.height,
          alt: `Free ${productTitles.PDFCombiner} for Windows`,
        },
      ],
      locale: "en_US",
      type: "article",
    },
  },
};
