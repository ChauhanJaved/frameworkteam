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
export const PNGtoPDFConverterDesktop: portfolioItem = {
  id: ProductIDs.PNGtoPDFConverterDesktop,
  title: productTitles.PNGtoPDFConverterDesktop,
  subtitle: productSubTitles.PNGtoPDFConverterDesktop,
  src: `/${headerCompanyName.toLowerCase()}/${productImages.PNGtoPDFConverterDesktop.imgName.toLowerCase()}`,
  width: productImages.PNGtoPDFConverterDesktop.width,
  height: productImages.PNGtoPDFConverterDesktop.height,
  categories: [Categories.All, Categories.DesktopApp],
  pageLink: `/${ProductIDs.PNGtoPDFConverterDesktop}`,
  productWebsite: productWebsites.PNGtoPDFConverterDesktop,
  downloadLink: productDownloadLinks.PNGtoPDFConverter,
  features: [
    "Private & Secure Offline Processing",
    "Ultra-Fast Conversion Performance",
    "Convenient Batch Processing",
    "User-Friendly Drag-and-Drop Interface",
    "Adaptable Conversion Options",
    "Effortless Image Order Adjustment",
  ],
  description: (
    <div className="flex flex-col">
      <strong className="mt-10">
        Presenting the Ultimate PNG to PDF Converter for Windows
      </strong>
      <p className="mt-2">
        Effortlessly transform your PNG files into PDFs with our robust desktop
        software, crafted specifically for Windows users. Operating entirely
        offline, our converter ensures that your data stays private and secure.
        With all conversions performed on your local machine, there&rsquo;s no
        need for an internet connection, greatly reducing the risk of data
        breaches or unauthorized access.
      </p>
      <strong className="mt-10">Swift and Reliable Conversions</strong>
      <p className="mt-2">
        Enjoy rapid and trustworthy PNG to PDF conversions using our software.
        Whether you&#39;re at home, in the office, or on the go, this tool is
        designed to deliver fast results without relying on an internet
        connection. Convert your PNG files into PDF format in mere seconds,
        ensuring a seamless workflow.
      </p>
      <strong className="mt-10">Streamlined Batch Conversion</strong>
      <p className="mt-2">
        Save valuable time by converting multiple PNG images to PDFs in one
        simple operation. Our batch processing feature efficiently handles large
        volumes of files, so you don&#39;t have to convert images individually.
        Whether you&#39;re managing a handful of files or processing thousands,
        our software simplifies bulk conversion with ease.
      </p>
      <strong className="mt-10">Easy Drag-and-Drop Interface</strong>
      <p className="mt-2">
        Benefit from a straightforward interface that makes file conversion
        easy, even for those new to the process. Simply drag and drop your PNG
        files into the software, and you&#39;re ready to start converting. This
        intuitive feature streamlines your work, allowing you to focus on what
        matters most.
      </p>
      <strong className="mt-10">Customizable Conversion Modes</strong>
      <p className="mt-2">
        Tailor your PDF output with easy-to-use options. Choose between
        converting each PNG file into an individual PDF or merging all your PNG
        images into a single, multi-page PDF document. These flexible modes
        cater to your basic conversion needs without unnecessary complications.
      </p>
      <strong className="mt-10">Optimized for High-Volume Conversions</strong>
      <p className="mt-2">
        Need to convert a large number of PNG files quickly? Our PNG to PDF
        Converter is among the fastest and most versatile tools available.
        Perfect for both professionals and casual users, this software lets you
        batch process extensive collections of PNG files with just a few clicks.
        Launch the converter, drag and drop your files or folders, adjust your
        settings, and click &#34;Convert&#34;—your images will be swiftly
        transformed into high-quality PDF documents.
      </p>
      <strong className="mt-10">User-Friendly with Essential Features</strong>
      <p className="mt-2">
        Our PNG to PDF Converter combines speed and ease of use with essential
        features for those who require greater control over the conversion
        process. Select from various conversion modes to ensure the final PDF
        meets your exact specifications.
      </p>
      <strong className="mt-10">Why Convert PNG to PDF?</strong>
      <p className="mt-2">
        While PNG (Portable Network Graphics) is a popular format for
        high-quality images, it can be inconvenient for sharing and printing.
        Converting PNG files to PDF (Portable Document Format) guarantees
        compatibility across devices while preserving image quality. PDFs are
        ideal for sharing, printing, and archiving, offering a versatile
        solution for your PNG files.
      </p>
      <strong className="mt-10">Conclusion</strong>
      <p className="mt-2">
        Our PNG to PDF Converter for Windows is the perfect tool for converting
        images to PDF quickly, securely, and with ease. Whether you&#39;re
        handling a few files or processing thousands, this software offers the
        speed, flexibility, and user-friendly features you need. Don&#39;t
        compromise—download the best PNG to PDF Converter for Windows today and
        experience effortless file conversion at its finest.
      </p>
    </div>
  ),
  metaData: {
    title: `Free ${productTitles.PNGtoPDFConverterDesktop} for Windows | Fast & Secure PNG to PDF Tool`,
    keywords:
      "PNG to PDF Converter, Convert PNG to PDF, Batch PNG to PDF, Windows PDF Converter, Image to PDF Tool, PNG Compression",
    description:
      "Convert PNG files to PDF with our fast and free Windows software. Enjoy a user-friendly interface, batch processing, advanced compression settings, and customizable options to ensure top-quality PDF output.",
    alternates: {
      canonical: productWebsites.PNGtoPDFConverterDesktop,
    },
    openGraph: {
      title: `Free ${productTitles.PNGtoPDFConverterDesktop} for Windows |  Fast & Secure PNG to PDF Tool`,
      description:
        "Convert PNG files to PDF with our fast and free Windows software. Enjoy a user-friendly interface, batch processing, advanced compression settings, and customizable options to ensure top-quality PDF output.",
      url: productWebsites.PNGtoPDFConverterDesktop,
      siteName: `${productTitles.PNGtoPDFConverterDesktop} for Windows`,
      images: [
        {
          url: cloudinaryLoader({
            src: `/${headerCompanyName.toLowerCase()}/${productImages.PNGtoPDFConverterDesktop.imgName.toLowerCase()}`,
            width: productImages.PNGtoPDFConverterDesktop.width,
          }),
          width: productImages.PNGtoPDFConverterDesktop.width,
          height: productImages.PNGtoPDFConverterDesktop.height,
          alt: `Free ${productTitles.PNGtoPDFConverterDesktop} for Windows`,
        },
      ],
      locale: "en_US",
      type: "article",
    },
  },
};
