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
export const TIFFCombiner: portfolioItem = {
  id: ProductIDs.TIFFCombiner,
  title: productTitles.TIFFCombiner,
  subtitle: productSubTitles.TIFFCombiner,
  src: `/${headerCompanyName.toLowerCase()}/${productImages.TIFFCombiner.imgName.toLowerCase()}`,
  width: productImages.TIFFCombiner.width,
  height: productImages.TIFFCombiner.height,
  categories: [Categories.All, Categories.DesktopApp],
  pageLink: `/${ProductIDs.TIFFCombiner}`,
  productWebsite: productWebsites.TIFFCombiner,
  downloadLink: productDownloadLinks.TIFFCombiner,

  features: [
    "Combine Locally with Full Offline Security",
    "Ultra-Fast Performance",
    "Efficient Batch Combining",
    "Versatile Combining Options",
    "Rearrange TIFF Pages Before Combining",
  ],
  description: (
    <div className="flex flex-col">
      <strong className="mt-10">
        Experience the Best TIFF Combiner for Windows
      </strong>
      <p className="mt-2">
        Easily manage and combine your multi-page TIFF files with our powerful
        desktop software, exclusively designed for Windows users. This TIFF
        combiner functions entirely offline, ensuring maximum data privacy and
        security. Without requiring an internet connection, you can securely
        combine your files locally, safeguarding them from potential security
        risks and unauthorized access.
      </p>
      <strong className="mt-10">
        Lightning-Fast and Dependable TIFF Combining
      </strong>
      <p className="mt-2">
        Achieve rapid and reliable TIFF combining with our cutting-edge
        software. Whether you&#39;re working from home, in the office, or on the
        go, merge your multi-page TIFF files into a single document in mere
        seconds—all without needing an internet connection. Stay productive with
        swift and efficient combining wherever you are.
      </p>
      <strong className="mt-10">Streamlined Batch TIFF Combining</strong>
      <p className="mt-2">
        Simplify your workflow by combining multiple TIFF files in one easy
        step. Our batch combining feature enables you to process large volumes
        of files quickly and efficiently, eliminating the hassle of merging
        documents one by one. Whether handling a few TIFFs or thousands, our
        software makes bulk combining stress-free and time-saving.
      </p>
      <strong className="mt-10">
        Optimized for High-Volume TIFF Combining
      </strong>
      <p className="mt-2">
        Perfect for handling high-volume tasks, our TIFF combiner is built to
        manage bulk processing with ease. Whether you&#39;re combining a handful
        of multi-page TIFFs or overseeing large-scale projects, this robust
        software ensures fast and efficient merging. Simply add your files or
        folders into the combiner, adjust your settings, and hit
        &#34;Combine&#34;—your TIFF files will be seamlessly merged into a
        single high-quality document in no time.
      </p>
      <strong className="mt-10">
        Customizable Combining Options for Total Control
      </strong>
      <p className="mt-2">
        Gain complete control over how your TIFF files are merged with our
        flexible combining options. Before combining, you can easily rearrange
        the order of your TIFF files to ensure they appear exactly as you need
        in the final document. Whether you&#39;re organizing pages for a
        presentation, adjusting the sequence for a project, or simply
        customizing the layout, our software provides the tools to fine-tune
        your TIFF files with precision before merging them into a single,
        cohesive file.
      </p>
      <strong className="mt-10">Why Combine Multi-Page TIFFs?</strong>
      <p className="mt-2">
        While individual TIFF files are useful in certain contexts, combining
        them into a single multi-page document offers greater convenience for
        archiving, sharing, and managing large documents. Whether for online
        use, design work, or presentations, merging your TIFFs into a single
        document provides enhanced versatility and ease of use.
      </p>
      <strong className="mt-10">Conclusion</strong>
      <p className="mt-2">
        Our TIFF Combiner for Windows combines speed, security, and
        user-friendliness into one powerful tool. Whether you&#39;re merging a
        few files or managing large-scale projects, this software delivers the
        flexibility and efficiency you require. Don&#39;t settle for
        less—download the top TIFF Combiner for Windows today and enjoy
        seamless, high-quality file merging.
      </p>
    </div>
  ),
  metaData: {
    title: `Free ${productTitles.TIFFCombiner} for Windows | Fast & Reliable TIFF Combining Tool`,
    keywords:
      "TIFF Combiner, Combine TIFF Files, Batch TIFF Combining, Windows TIFF Combiner, TIFF File Management",
    description:
      "Effortlessly combine multi-page TIFF files with our fast and free Windows software. Enjoy a user-friendly interface, batch processing, and customizable combining options for precise control.",
    alternates: {
      canonical: productWebsites.TIFFCombiner,
    },
    openGraph: {
      title: `Free ${productTitles.TIFFCombiner} for Windows | Fast & Reliable TIFF Combining Tool`,
      description:
        "Effortlessly combine multi-page TIFF files with our fast and free Windows software. Enjoy a user-friendly interface, batch processing, and customizable combining options for precise control.",
      url: productWebsites.TIFFCombiner,
      siteName: `${productTitles.TIFFCombiner} for Windows`,
      images: [
        {
          url: cloudinaryLoader({
            src: `/${headerCompanyName.toLowerCase()}/${productImages.TIFFCombiner.imgName.toLowerCase()}`,
            width: productImages.TIFFCombiner.width,
          }),
          width: productImages.TIFFCombiner.width,
          height: productImages.TIFFCombiner.height,
          alt: `Free ${productTitles.TIFFCombiner} for Windows`,
        },
      ],
      locale: "en_US",
      type: "article",
    },
  },
};
