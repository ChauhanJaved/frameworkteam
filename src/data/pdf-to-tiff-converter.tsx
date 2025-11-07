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
export const PDFtoTIFFConverter: portfolioItem = {
  id: ProductIDs.PDFtoTIFFConverter,
  title: productTitles.PDFtoTIFFConverter,
  subtitle: productSubTitles.PDFtoTIFFConverter,
  src: `/${headerCompanyName.toLowerCase()}/${productImages.PDFtoTIFFConverter.imgName.toLowerCase()}`,
  width: productImages.PDFtoTIFFConverter.width,
  height: productImages.PDFtoTIFFConverter.height,
  categories: [Categories.All, Categories.DesktopApp],
  pageLink: `/${ProductIDs.PDFtoTIFFConverter}`,
  productWebsite: productWebsites.PDFtoTIFFConverter,
  downloadLink: productDownloadLinks.PDFtoTIFFConverter,
  features: [
    "Local and Secure Offline Conversion",
    "Blazing-Fast Processing Speed",
    "Effortless Batch Conversion",
    "Tailorable Output Settings",
    "Enhanced TIFF Configuration",
  ],
  description: (
    <div className="flex flex-col">
      <strong className="mt-10">
        Discover the Ultimate PDF to TIFF Converter for Windows
      </strong>
      <p className="mt-2">
        Effortlessly transform your PDF files into high-quality TIFF images with
        our advanced desktop software, specially crafted for Windows users. Our
        PDF to TIFF converter enables you to perform conversions entirely
        offline, ensuring that your data remains private and secure. With no
        need for an internet connection, you can convert files locally,
        safeguarding them from any security threats or unauthorized access.
      </p>
      <strong className="mt-10">
        Ultra-Fast and Dependable PDF to TIFF Conversion
      </strong>
      <p className="mt-2">
        Our software is designed for speed and reliability, offering rapid
        conversions from PDF to TIFF. Whether you&#39;re at home, in the office,
        or traveling, our tool ensures swift and efficient transformation of
        PDFs into TIFFs, all while maintaining your privacy. Convert your
        documents in seconds, ensuring that your workflow remains smooth and
        uninterrupted, regardless of your location.
      </p>
      <strong className="mt-10">Efficient Batch Conversion Made Simple</strong>
      <p className="mt-2">
        Increase your efficiency by converting multiple PDF files to TIFF images
        in one go. The batch conversion feature is built to handle large volumes
        of files quickly, eliminating the need to convert documents
        individually. Whether you&#39;re dealing with a few PDFs or handling
        thousands, our software streamlines the bulk conversion process, making
        it straightforward and stress-free.
      </p>
      <strong className="mt-10">
        Optimized for High-Volume Conversion Tasks
      </strong>
      <p className="mt-2">
        Our PDF to TIFF Converter is built to manage even the most demanding
        conversion tasks with ease. Whether you need to convert a small batch of
        PDFs or a large collection, this powerful software can handle
        high-volume processing efficiently. Simply add your files or folders
        into the converter, adjust your settings, and hit &#34;Convert&#34;—your
        PDFs will be quickly and seamlessly converted into high-quality TIFF
        images.
      </p>
      <strong className="mt-10">
        Advanced Features for Precise and Flexible Conversion
      </strong>
      <p className="mt-2">
        Transform your PDF files into high-quality TIFF images with our powerful
        PDF to TIFF converter for Windows. Tailor your output with customizable
        settings, including adjustable resolution in DPI for both X and Y
        dimensions. Choose from a variety of uncompressed color modes, such as
        23-bit CMYK, 24-bit RGB, 12-bit RGB, or 8-bit Gray, to match your
        specific needs. Take advantage of advanced compression options like LZW,
        PackBits, and various G3 and G4 fax encodings, with options for encoding
        with or without EOLs. Whether you&#39;re converting a multipage PDF into
        a multipage TIFF or splitting it into single-page TIFFs, our converter
        provides the flexibility and precision required for professional
        results.
      </p>
      <strong className="mt-10">Why Convert PDF to TIFF?</strong>
      <p className="mt-2">
        PDF (Portable Document Format) is a widely used format for sharing and
        archiving documents, combining text, images, and graphics in a single
        file. However, converting PDFs to TIFF (Tagged Image File Format) images
        can be advantageous, especially for purposes such as printing,
        professional graphics, and archival storage. TIFFs are known for their
        high quality and are widely supported across various professional
        applications, making them ideal for use in environments where image
        fidelity is paramount.
      </p>
      <strong className="mt-10">Conclusion</strong>
      <p className="mt-2">
        Our PDF to TIFF Converter for Windows offers an unmatched combination of
        speed, security, and ease of use. Whether you&#39;re converting a few
        files or managing extensive batches, this software delivers the
        performance and flexibility you need to complete your tasks with ease.
        Don&#39;t compromise—download the best PDF to TIFF Converter for Windows
        today and experience flawless file conversion at its finest.
      </p>
    </div>
  ),
  metaData: {
    title: `Free ${productTitles.PDFtoTIFFConverter} for Windows | Fast & Secure PDF to TIFF Tool`,
    keywords:
      "PDF to TIFF Converter, Convert PDF to TIFF, Batch PDF to TIFF, Windows PDF Converter, Document to Image Tool",
    description:
      "Easily convert PDF files to TIFF with our fast and free Windows software. Enjoy a user-friendly interface, batch processing, and customizable settings to ensure top-quality image output.",
    alternates: {
      canonical: productWebsites.PDFtoTIFFConverter,
    },
    openGraph: {
      title: `Free ${productTitles.PDFtoTIFFConverter} for Windows | Fast & Secure PDF to TIFF Tool`,
      description:
        "Easily convert PDF files to TIFF with our fast and free Windows software. Enjoy a user-friendly interface, batch processing, and customizable settings to ensure top-quality image output.",
      url: productWebsites.PDFtoTIFFConverter,
      siteName: `${productTitles.PDFtoTIFFConverter} for Windows`,
      images: [
        {
          url: cloudinaryLoader({
            src: `/${headerCompanyName.toLocaleLowerCase()}/${productImages.PDFtoTIFFConverter.imgName.toLocaleLowerCase()}`,
            width: productImages.PDFtoTIFFConverter.width,
          }),
          width: productImages.PDFtoTIFFConverter.width,
          height: productImages.PDFtoTIFFConverter.height,
          alt: `Free ${productTitles.PDFtoTIFFConverter} for Windows`,
        },
      ],
      locale: "en_US",
      type: "article",
    },
  },
};
