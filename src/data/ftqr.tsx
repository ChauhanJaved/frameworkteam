import {
  Categories,
  portfolioItem,
  ProductIDs,
  productImages,
  productSubTitles,
  productTitles,
  productWebsites,
} from "@/data/website-data";
import cloudinaryLoader from "@/lib/cloudinary-loader";

export const FTQR: portfolioItem = {
  id: ProductIDs.FTQR,
  title: productTitles.FTQR,
  subtitle: productSubTitles.FTQR,
  src: productImages.FTQR.imgName,
  width: productImages.FTQR.width,
  height: productImages.FTQR.height,
  categories: [Categories.All, Categories.WebApp],
  pageLink: `/${ProductIDs.FTQR}`,
  productWebsite: productWebsites.FTQR,
  features: [
    "Create highly customizable QR codes for free with no limits",
    "Generate QR codes for URLs, WiFi networks, UPI payments, vCards, Email, Phone, SMS, Location & Events",
    "Fully personalize colors (solids & gradients), shapes, and eye styles",
    "Upload and embed custom logos/branding in the center",
    "Export in high-quality PNG, JPEG, WEBP, SVG, or PDF formats",
    "No signup or login required — 100% private and free forever",
  ],
  description: (
    <div className="flex flex-col">
      <strong className="mt-10">
        FTQR: Beautiful, Free & Unlimited QR Code Generator
      </strong>

      <p className="mt-2">
        FTQR is a next-generation online tool that lets you design and download customized QR codes for any purpose. Whether you need a quick scan link for your personal portfolio, a table-top menu for a restaurant, a WiFi connector card, an event invitation, or an instant UPI payment link for a retail checkout, FTQR offers high-performance dynamic customization without requiring a subscription.
      </p>

      <p className="mt-2">
        Our QR code maker is designed with user privacy and smooth experience at its core. You don&apos;t need to register an account or pay premium upgrade costs. The generated static QR codes are permanent, have no print limit, and will never expire.
      </p>

      <strong className="mt-10">Key Features of FTQR:</strong>

      <p className="mt-2">
        <strong>Multi-Format Inputs:</strong> Generate tailored QR codes for standard web links (URLs), WiFi authentication parameters (SSID/Password), Indian UPI payment details, professional contact vCards, pre-written Email messages, direct phone calls, text messages (SMS), GPS coordinate layouts, and calendar event schedulers.
      </p>

      <p className="mt-2">
        <strong>Design Customization:</strong> Personalize the appearance of your QR codes by modifying the foreground color, utilizing multi-color gradients (linear/radial), adapting the background opacity, selecting custom corner square designs, choosing dot patterns, and tweaking the eye frame shapes.
      </p>

      <p className="mt-2">
        <strong>Logo & Branding Embedding:</strong> Upload your custom brand logo (JPG/PNG/SVG format) to place in the center of the QR code. You can scale the logo size and toggle background cleaning so your logo merges beautifully with the scan matrix while maintaining scanning readability.
      </p>

      <p className="mt-2">
        <strong>Scalable Vector & Raster Exports:</strong> Once designed, download your QR codes as raster images (PNG, JPEG, WEBP) optimized for standard screen displays, or export them as scalable vectors (SVG, PDF) suitable for large print materials, business cards, billboards, or stickers without pixelation.
      </p>

      <strong className="mt-10">
        Improve Customer Engagement with Branded QR Codes
      </strong>

      <p className="mt-2">
        Adding a visual touch to your QR codes improves recognition and brand trust, boosting scan rates. Instead of dull black-and-white grids, color-coordinated codes showing your company logo stand out in directories, email signatures, print media, and posters. Try FTQR today to craft standard-compliant, beautiful QR codes for your brand instantly.
      </p>
    </div>
  ),
  metaData: {
    title: `Free ${productTitles.FTQR} | Custom QR Codes with Logo & UPI`,
    keywords:
      "free QR code generator, QR code maker online, custom QR code with logo, UPI QR code generator, WiFi QR code, vCard QR code, QR code for business card, QR code for menu, custom QR code generator, frameworkteam qr code",
    description:
      "Create beautiful, fully customizable QR codes for free with FTQR by FrameworkTeam. Generate QR codes for URLs, WiFi, UPI payments, vCards, events & more. Download in PNG, SVG or PDF with logo.",
    alternates: {
      canonical: productWebsites.FTQR,
    },
    openGraph: {
      title: `Free ${productTitles.FTQR} | Custom QR Codes with Logo & UPI`,
      description:
        "Create beautiful, fully customizable QR codes for free with FTQR by FrameworkTeam. Generate QR codes for URLs, WiFi, UPI payments, vCards, events & more. Download in PNG, SVG or PDF with logo.",
      url: productWebsites.FTQR,
      siteName: `${productTitles.FTQR} Online`,
      images: [
        {
          url: cloudinaryLoader({
            src: productImages.FTQR.imgName,
            width: productImages.FTQR.width,
          }),
          width: productImages.FTQR.width,
          height: productImages.FTQR.height,
          alt: `Free ${productTitles.FTQR} Online`,
        },
      ],
      locale: "en_US",
      type: "website",
    },
  },
};
