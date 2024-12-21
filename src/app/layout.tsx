//Internal imports
import "./globals.css";
import { roboto } from "@/lib/font";
import { companyName, copyrightYear } from "@/data/website-data";
import Footer from "@/components/footer";
import ScrollTop from "@/components/scroll-top";
import { Metadata, Viewport } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { ActiveSectionProvider } from "@/context/active-section-context";
import Header from "@/components/header";
import { PageOnTopProvider } from "@/context/page-on-top-context";

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
        className={`${roboto.className} text-base text-gray-700 dark:text-gray-300 lg:text-lg`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ActiveSectionProvider>
            <PageOnTopProvider>
              <ScrollTop />
              <Header />
              {children}
              <Footer companyName={companyName} copyrightYear={copyrightYear} />
            </PageOnTopProvider>
          </ActiveSectionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
