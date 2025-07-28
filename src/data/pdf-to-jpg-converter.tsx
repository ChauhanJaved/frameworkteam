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
export const PDFtoJPGConverter: portfolioItem = {
  id: ProductIDs.PDFtoJPGConverter,
  title: productTitles.PDFtoJPGConverter,
  subtitle: productSubTitles.PDFtoJPGConverter,
  src: `/${headerCompanyName.toLowerCase()}/${productImages.PDFtoJPGConverter.imgName.toLowerCase()}`,
  width: productImages.PDFtoJPGConverter.width,
  height: productImages.PDFtoJPGConverter.height,
  categories: [Categories.All, Categories.DesktopApp],
  pageLink: `/${ProductIDs.PDFtoJPGConverter}`,
  productWebsite: productWebsites.PDFtoJPGConverter,
  downloadLink: productDownloadLinks.PDFtoJPGConverter,
  features: [
    "Local and Secure Offline Processing",
    "Ultra-Fast Conversion Speed",
    "Easy Batch Conversion",
    "Intuitive Drag-and-Drop Interface",
    "Customizable Output Settings",
  ],
  description: (
    <div className="flex flex-col">
      <strong className="mt-10">
        Introducing the Ultimate PDF to JPG Converter for Windows
      </strong>
      <p className="mt-2">
        Easily convert your PDF files into high-quality JPG images with our
        robust desktop software, designed specifically for Windows users. With
        our PDF to JPG converter, you can perform all conversions offline,
        keeping your data private and secure. There&#39;s no need for an
        internet connection, so you can confidently convert files locally,
        protecting them from any potential security risks or unauthorized
        access.
      </p>
      <strong className="mt-10">Fast and Reliable PDF to JPG Conversion</strong>
      <p className="mt-2">
        Our software is engineered for lightning-fast and dependable
        conversions. Whether you&#39;re at home, in the office, or on the go,
        our tool ensures rapid transformation of PDFs into JPGs, all without the
        need for an internet connection. Convert your documents to image format
        in seconds, ensuring that your work remains uninterrupted no matter
        where you are.
      </p>
      <strong className="mt-10">Streamlined Batch Conversion</strong>
      <p className="mt-2">
        Boost your productivity by converting multiple PDF files to JPG images
        in one go. Our batch conversion feature allows you to handle large
        volumes of files quickly and efficiently, saving you from the repetitive
        task of converting documents one by one. Whether you have a handful of
        PDFs or thousands, our software simplifies bulk conversion, making it
        hassle-free.
      </p>
      <strong className="mt-10">Intuitive Drag-and-Drop Interface</strong>
      <p className="mt-2">
        Designed with ease of use in mind, our PDF to JPG converter features a
        user-friendly drag-and-drop interface. Simply drag your PDF files into
        the software, and you&#39;re ready to begin the conversion process. This
        intuitive design streamlines the workflow, so you can focus on your
        tasks without getting bogged down by complicated software.
      </p>
      <strong className="mt-10">Optimized for High-Volume Conversions</strong>
      <p className="mt-2">
        Designed to handle even the most demanding tasks, our PDF to JPG
        Converter is perfect for high-volume conversions. Whether you need to
        convert a few PDFs or thousands, this powerful software handles bulk
        processing with ease. Simply drag your files or folders into the
        converter, customize your settings, and hit &#34;Convert&#34;—your PDFs
        will be quickly and efficiently turned into high-quality JPG images.
      </p>
      <strong className="mt-10">Versatile Conversion Options</strong>
      <p className="mt-2">
        Tailor your conversion process with flexible settings to suit your
        needs. Convert each PDF page into a separate high-quality JPG file with
        ease. Additionally, adjust key settings such as color mode (high color
        24-bit or grayscale 8-bit), resolution for X and Y axes in DPI, and JPEG
        quality. These options give you full control over the output, ensuring
        it meets your specific requirements.
      </p>
      <strong className="mt-10">Why Convert PDF to JPG?</strong>
      <p className="mt-2">
        PDF (Portable Document Format) is a universal file format ideal for
        sharing and archiving documents, combining text, images, and graphics in
        a single file. However, converting PDFs to JPG (Joint Photographic
        Experts Group) images can be useful when you need to embed or share
        individual pages, particularly when dealing with visual content. JPGs
        are widely supported across various platforms and devices, making them
        ideal for online sharing and presentations.
      </p>
      <strong className="mt-10">Conclusion</strong>
      <p className="mt-2">
        Our PDF to JPG Converter for Windows offers the perfect blend of speed,
        security, and ease of use. Whether you’re converting a few files or
        managing large batches, this software provides the efficiency and
        flexibility you need to get the job done. Don’t settle for less—download
        the best PDF to JPG Converter for Windows today and experience seamless
        file conversion like never before.
      </p>
    </div>
  ),
  metaData: {
    title: `Free ${productTitles.PDFtoJPGConverter} for Windows | Fast & Secure PDF to JPG Tool`,
    keywords:
      "PDF to JPG Converter, Convert PDF to JPG, Batch PDF to JPG, Windows PDF Converter, Document to Image Tool",
    description:
      "Easily convert PDF files to JPG with our fast and free Windows software. Enjoy a user-friendly interface, batch processing, and customizable settings to ensure top-quality image output.",
    alternates: {
      canonical: productWebsites.PDFtoJPGConverter,
    },
    openGraph: {
      title: `Free ${productTitles.PDFtoJPGConverter} for Windows | Fast & Secure PDF to JPG Tool`,
      description:
        "Easily convert PDF files to JPG with our fast and free Windows software. Enjoy a user-friendly interface, batch processing, and customizable settings to ensure top-quality image output.",
      url: `https://www.frameworkteam.com/${ProductIDs.PDFtoJPGConverter}.html`,
      siteName: `${productTitles.PDFtoJPGConverter} for Windows`,
      images: [
        {
          url: cloudinaryLoader({
            src: `/${headerCompanyName.toLocaleLowerCase()}/${productImages.PDFtoJPGConverter.imgName.toLocaleLowerCase()}`,
            width: productImages.PDFtoJPGConverter.width,
          }),
          width: productImages.PDFtoJPGConverter.width,
          height: productImages.PDFtoJPGConverter.height,
          alt: `Free ${productTitles.PDFtoJPGConverter} for Windows`,
        },
      ],
      locale: "en_US",
      type: "article",
    },
  },
};
