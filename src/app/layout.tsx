//Internal imports
import "./globals.css";
import { roboto } from "@/lib/font";
import { companyName, copyrightYear } from "@/data/website-data";
import Footer from "@/components/footer";
import ScrollTop from "@/components/scroll-top";
import { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
};
export const metadata: Metadata = {
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${roboto.className} bg-white text-base font-normal text-black-600`}
      >
        <ScrollTop />
        {children}
        <Footer companyName={companyName} copyrightYear={copyrightYear} />
      </body>
    </html>
  );
}
