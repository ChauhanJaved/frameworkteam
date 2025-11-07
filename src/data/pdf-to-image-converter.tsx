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
export const PDFtoImageConverter: portfolioItem = {
  id: ProductIDs.PDFtoImageConverter,
  title: productTitles.PDFtoImageConverter,
  subtitle: productSubTitles.PDFtoImageConverter,
  src: `/${headerCompanyName.toLowerCase()}/${productImages.PDFtoImageConverter.imgName.toLowerCase()}`,
  width: productImages.PDFtoImageConverter.width,
  height: productImages.PDFtoImageConverter.height,
  categories: [Categories.All, Categories.DesktopApp],
  pageLink: `/${ProductIDs.PDFtoImageConverter}`,
  productWebsite: productWebsites.PDFtoImageConverter,
  downloadLink: productDownloadLinks.PDFtoImageConverter,
  features: [
    "Secure, Offline Conversion",
    "Lightning-Fast Processing",
    "Simple Batch Conversion",
    "Customizable Output Options",
    "Convert PDFs to images in various formats",
  ],
  description: (
    <div className="flex flex-col">
      <strong className="mt-10">
        Discover the Ultimate PDF to Image Converter for Windows
      </strong>
      <p className="mt-2">
        Easily convert your PDF files into various high-quality image formats
        with our powerful desktop software, specifically designed for Windows
        users. This PDF to image converter works entirely offline, ensuring
        complete data privacy and security. With no need for an internet
        connection, you can safely convert your files locally, protecting them
        from security risks or unauthorized access.
      </p>
      <strong className="mt-10">
        Fast and Reliable PDF to Image Conversion
      </strong>
      <p className="mt-2">
        Experience lightning-fast and dependable PDF to image conversion with
        our advanced software. Whether you&#39;re at home, in the office, or on
        the go, convert your documents to image formats like JPG, TIFF, PNG,
        BMP, and PCX in seconds without the need for an internet connection.
        Maintain productivity with swift and efficient conversions, no matter
        where you are.
      </p>
      <strong className="mt-10">
        Effortless Batch PDF to Image Conversion
      </strong>
      <p className="mt-2">
        Enhance your workflow by converting multiple PDF files into images in
        just one step. Our batch conversion feature allows you to handle large
        volumes of files quickly and efficiently, eliminating the need to
        convert documents individually. Whether you&#39;re dealing with a few
        PDFs or thousands, our software simplifies bulk conversion, making it
        stress-free and time-saving.
      </p>
      <strong className="mt-10">Optimized for High-Volume Conversions</strong>
      <p className="mt-2">
        Ideal for high-volume tasks, our PDF to image converter effortlessly
        handles bulk processing. Whether you&#39;re converting a few PDFs or
        managing large-scale projects, this robust software ensures quick and
        efficient conversions. Drag and drop your files or folders into the
        converter, adjust your settings, and hit &#34;Convert&#34;—your PDFs
        will be transformed into high-quality images in no time.
      </p>
      <strong className="mt-10">Customizable Conversion Settings</strong>
      <p className="mt-2">
        Our PDF to image converter supports a wide range of image formats,
        including JPG, TIFF, PNG, BMP, and PCX. You can choose to output
        multi-page TIFFs for comprehensive document handling. Advanced settings
        allow you to fine-tune color options, compression settings, and
        resolution for both precision and quality in every conversion.
      </p>
      <strong className="mt-10">Why Convert PDFs to Images?</strong>
      <p className="mt-2">
        While PDFs are excellent for sharing and archiving, converting them to
        images like JPG, PNG, TIFF, BMP, or PCX can be highly beneficial. Image
        formats offer superior quality for web use, design work, or
        presentations. With the ability to maintain image integrity and support
        transparency (in formats like PNG), converting PDFs to images is ideal
        for various applications.
      </p>
      <strong className="mt-10">Conclusion</strong>
      <p className="mt-2">
        Our PDF to Image Converter for Windows combines speed, security, and
        user-friendliness in one powerful tool. Whether converting a handful of
        files or managing large-scale projects, this software delivers the
        flexibility and efficiency you need. Don&#39;t settle for less—download
        the best PDF to Image Converter for Windows today and enjoy seamless,
        high-quality file conversion.
      </p>
    </div>
  ),
  metaData: {
    title: `Free ${productTitles.PDFtoImageConverter} for Windows | Fast & Versatile PDF to Image Tool`,
    keywords:
      "PDF to Image Converter, Convert PDF to Image, Batch PDF to Image, Windows PDF Converter, Document to Image Tool",
    description:
      "Effortlessly convert PDF files to various image formats with our fast and free Windows software. Enjoy a user-friendly interface, batch processing, and advanced settings for optimal image quality.",
    alternates: {
      canonical: productWebsites.PDFtoImageConverter,
    },
    openGraph: {
      title: `Free ${productTitles.PDFtoImageConverter} for Windows | Fast & Versatile PDF to Image Tool`,
      description:
        "Effortlessly convert PDF files to various image formats with our fast and free Windows software. Enjoy a user-friendly interface, batch processing, and advanced settings for optimal image quality.",
      url: productWebsites.PDFtoImageConverter,
      siteName: `${productTitles.PDFtoImageConverter} for Windows`,
      images: [
        {
          url: cloudinaryLoader({
            src: `/${headerCompanyName.toLowerCase()}/${productImages.PDFtoImageConverter.imgName.toLowerCase()}`,
            width: productImages.PDFtoImageConverter.width,
          }),
          width: productImages.PDFtoImageConverter.width,
          height: productImages.PDFtoImageConverter.height,
          alt: `Free ${productTitles.PDFtoImageConverter} for Windows`,
        },
      ],
      locale: "en_US",
      type: "article",
    },
  },
};
