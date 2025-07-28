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
export const TIFFtoPDFConverterDesktop: portfolioItem = {
  id: ProductIDs.TIFFtoPDFConverterDesktop,
  title: productTitles.TIFFtoPDFConverterDesktop,
  subtitle: productSubTitles.TIFFtoPDFConverterDesktop,
  src: `/${headerCompanyName.toLowerCase()}/${productImages.TIFFtoPDFConverterDesktop.imgName.toLowerCase()}`,
  width: productImages.TIFFtoPDFConverterDesktop.width,
  height: productImages.TIFFtoPDFConverterDesktop.height,
  categories: [Categories.All, Categories.DesktopApp],
  pageLink: `/${ProductIDs.TIFFtoPDFConverterDesktop}`,
  productWebsite: productWebsites.TIFFtoPDFConverterDesktop,
  downloadLink: productDownloadLinks.TIFFtoPDFConverter,
  features: [
    "Convert Locally with Complete Offline Security",
    "Experience Ultra-Fast Conversion",
    "Effortless Batch Processing",
    "Intuitive Drag-and-Drop Functionality",
    "Versatile Conversion Options",
    "Easily Reorder Images as Needed",
  ],
  description: (
    <div className="flex flex-col">
      <strong className="mt-10">
        Introducing the Ultimate TIFF to PDF Converter for Windows
      </strong>
      <p className="mt-2">
        Convert your TIFF files to PDFs securely and efficiently with our
        powerful desktop software. Designed for Windows users, our TIFF to PDF
        converter operates entirely offline, ensuring that your data remains
        private and secure. Perform conversions on your local system,
        eliminating the need for an internet connection and reducing the risk of
        data breaches or unauthorized access.
      </p>
      <strong className="mt-10">High-Speed and Reliable Conversions</strong>
      <p className="mt-2">
        Experience fast and dependable TIFF to PDF conversions with our
        software. Whether you&#39;re at home, in the office, or on the move,
        this tool is engineered to deliver quick results without the need for an
        internet connection. Convert your TIFF files to PDF format in seconds,
        ensuring your work remains uninterrupted.
      </p>
      <strong className="mt-10">Effortless Batch Conversion</strong>
      <p className="mt-2">
        Save time by converting multiple TIFF images to PDFs in a single
        operation. Our batch processing feature handles large volumes of files
        quickly and efficiently, eliminating the hassle of converting images one
        by one. Whether you&#39;re working with a few files or thousands, our
        software simplifies bulk conversion.
      </p>
      <strong className="mt-10">Intuitive Drag-and-Drop Interface</strong>
      <p className="mt-2">
        Enjoy an easy-to-use interface that makes file conversion simple, even
        for beginners. Drag and drop your TIFF files into the software, and
        you&#39;re ready to start converting. This intuitive feature streamlines
        the process, letting you focus on your work.
      </p>
      <strong className="mt-10">Flexible Conversion Modes</strong>
      <p className="mt-2">
        Customize your PDF output with versatile conversion options. Choose to
        convert each TIFF file into a separate PDF, combine all TIFF images into
        a single multi-page PDF document, or split each TIFF image into
        individual single-page PDFs. Tailor the process to meet your specific
        needs.
      </p>
      <strong className="mt-10">Advanced Compression Settings</strong>
      <p className="mt-2">
        Optimize your PDFs with advanced compression options. Select from ZIP,
        LZW, FAX Group4, RLE, or choose no compression to maintain the highest
        image quality. These settings allow you to balance file size and image
        quality according to your preferences.
      </p>
      <strong className="mt-10">Designed for High-Volume Conversions</strong>
      <p className="mt-2">
        Need to convert thousands of TIFF files quickly? Our TIFF to PDF
        Converter is one of the fastest and most versatile solutions available.
        Ideal for professionals and casual users alike, this software allows you
        to batch process large collections of TIFF files with just a few clicks.
        Launch the converter, drag and drop your files or folders, customize
        your settings, and hit &#34;Convert&#34;—your images will be instantly
        transformed into high-quality PDF documents.
      </p>
      <strong className="mt-10">User-Friendly with Advanced Features</strong>
      <p className="mt-2">
        Our TIFF to PDF Converter is not only fast and easy to use but also
        offers advanced options for those needing more control over the
        conversion process. Adjust compression settings, choose between various
        conversion modes, and ensure the final PDF meets your exact
        requirements.
      </p>
      <strong className="mt-10">Why Convert TIFF to PDF?</strong>
      <p className="mt-2">
        TIFF (Tagged Image File Format) is a popular format for high-quality
        images, but it can be cumbersome for sharing and printing. Converting
        TIFF files to PDF (Portable Document Format) ensures compatibility
        across devices and preserves the quality of your images. PDFs are ideal
        for document sharing, printing, and archiving, providing a versatile
        solution for your TIFF files.
      </p>
      <strong className="mt-10">Conclusion</strong>
      <p className="mt-2">
        Our TIFF to PDF Converter for Windows offers the perfect solution for
        converting images to PDF quickly, securely, and with ease. Whether
        handling a few files or thousands, this software delivers the speed,
        flexibility, and user-friendly features you need. Don&#39;t settle for
        less—download the best TIFF to PDF Converter for Windows today and
        experience effortless file conversion at its finest.
      </p>
    </div>
  ),
  metaData: {
    title: `Free ${productTitles.TIFFtoPDFConverterDesktop} for Windows | Fast & Secure TIFF to PDF Tool`,
    keywords:
      "TIFF to PDF Converter, Convert TIFF to PDF, Batch TIFF to PDF, Windows PDF Converter, Image to PDF Tool, TIFF Compression",
    description:
      "Convert TIFF files to PDF with our fast and free Windows software. Enjoy a user-friendly interface, batch processing, advanced compression settings, and customizable options to ensure top-quality PDF output.",
    alternates: {
      canonical: productWebsites.TIFFtoPDFConverterDesktop,
    },
    openGraph: {
      title: `Free ${productTitles.TIFFtoPDFConverterDesktop} for Windows |  Fast & Secure TIFF to PDF Tool`,
      description:
        "Convert TIFF files to PDF with our fast and free Windows software. Enjoy a user-friendly interface, batch processing, advanced compression settings, and customizable options to ensure top-quality PDF output.",
      url: `https://www.frameworkteam.com/${ProductIDs.TIFFtoPDFConverterDesktop}.html`,
      siteName: `${productTitles.TIFFtoPDFConverterDesktop} for Windows`,
      images: [
        {
          url: cloudinaryLoader({
            src: `/${headerCompanyName.toLowerCase()}/${productImages.TIFFtoPDFConverterDesktop.imgName.toLowerCase()}`,
            width: productImages.TIFFtoPDFConverterDesktop.width,
          }),
          width: productImages.TIFFtoPDFConverterDesktop.width,
          height: productImages.TIFFtoPDFConverterDesktop.height,
          alt: `Free ${productTitles.TIFFtoPDFConverterDesktop} for Windows`,
        },
      ],
      locale: "en_US",
      type: "article",
    },
  },
};
