// External imports
import Link from "next/link";

// Internal imports
import { raleway } from "@/lib/font";

interface PropsFooter {
  companyName: string;
  copyrightYear: string;
}

export default function Footer(props: PropsFooter) {
  return (
    <footer className="relative mt-20 border-t bg-card/30 backdrop-blur-md text-sm">
      {/* Visual top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-6 md:px-8 lg:px-10">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-12 md:gap-12">
          
          {/* Brand and Description Column */}
          <div className="flex flex-col gap-4 sm:col-span-2 md:col-span-4">
            <Link
              className={`${raleway.className} flex flex-col items-start justify-center border-l-[5px] border-l-primary py-1 pl-3 text-base font-extrabold leading-tight tracking-wider text-blue-dark-imperial dark:text-foreground`}
              href="/"
              aria-label="Go to home page"
            >
              <p>FrameworkTeam</p>
              <p>Softwares</p>
            </Link>
            <p className="text-muted-foreground text-xs leading-relaxed max-w-sm">
              We design and build high-performance web applications, secure client portals, custom cloud integrations, and fully offline-capable desktop utilities that help organizations streamline operations.
            </p>
          </div>

          {/* Quick Navigation Column */}
          <div className="flex flex-col gap-3 md:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-foreground/80">
              Navigation
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs">
              <li>
                <Link href="/#home" className="text-muted-foreground hover:text-primary hover:translate-x-0.5 inline-block transition-all duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-muted-foreground hover:text-primary hover:translate-x-0.5 inline-block transition-all duration-200">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/#products" className="text-muted-foreground hover:text-primary hover:translate-x-0.5 inline-block transition-all duration-200">
                  Products & Apps
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary hover:translate-x-0.5 inline-block transition-all duration-200">
                  About
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-primary hover:translate-x-0.5 inline-block transition-all duration-200">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary hover:translate-x-0.5 inline-block transition-all duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Online Web Tools Column */}
          <div className="flex flex-col gap-3 md:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-foreground/80">
              Online Utilities
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs">
              <li>
                <Link href="/free-qr-code-generator" className="text-muted-foreground hover:text-primary hover:translate-x-0.5 inline-block transition-all duration-200">
                  Free QR Generator
                </Link>
              </li>
              <li>
                <Link href="/jpg-to-pdf-converter" className="text-muted-foreground hover:text-primary hover:translate-x-0.5 inline-block transition-all duration-200">
                  JPG to PDF Converter
                </Link>
              </li>
              <li>
                <Link href="/png-to-pdf-converter" className="text-muted-foreground hover:text-primary hover:translate-x-0.5 inline-block transition-all duration-200">
                  PNG to PDF Converter
                </Link>
              </li>
              <li>
                <Link href="/tiff-splitter" className="text-muted-foreground hover:text-primary hover:translate-x-0.5 inline-block transition-all duration-200">
                  TIFF Splitter Web
                </Link>
              </li>
              <li>
                <Link href="/tiff-merger" className="text-muted-foreground hover:text-primary hover:translate-x-0.5 inline-block transition-all duration-200">
                  TIFF Merger Web
                </Link>
              </li>
            </ul>
          </div>

          {/* Desktop Tools Column */}
          <div className="flex flex-col gap-3 md:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-foreground/80">
              Desktop Software
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs">
              <li>
                <Link href="/jpg-to-pdf-converter-desktop" className="text-muted-foreground hover:text-primary hover:translate-x-0.5 inline-block transition-all duration-200">
                  JPG to PDF Desktop
                </Link>
              </li>
              <li>
                <Link href="/png-to-pdf-converter-desktop" className="text-muted-foreground hover:text-primary hover:translate-x-0.5 inline-block transition-all duration-200">
                  PNG to PDF Desktop
                </Link>
              </li>
              <li>
                <Link href="/tiff-to-pdf-converter-desktop" className="text-muted-foreground hover:text-primary hover:translate-x-0.5 inline-block transition-all duration-200">
                  TIFF to PDF Desktop
                </Link>
              </li>
              <li>
                <Link href="/tiff-splitter-desktop" className="text-muted-foreground hover:text-primary hover:translate-x-0.5 inline-block transition-all duration-200">
                  TIFF Splitter Desktop
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Sub-Footer Bar */}
        <div className="mt-12 border-t border-border/40 pt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between text-xs">
          
          {/* Copyright Info */}
          <p className="text-muted-foreground text-center sm:text-left order-last sm:order-first">
            © {props.copyrightYear} {props.companyName}. All rights reserved.
          </p>

          {/* Legal Links */}
          <div className="flex justify-center gap-6">
            <Link href="/terms-of-use/" className="text-muted-foreground hover:text-primary transition-colors duration-200">
              Terms of Use
            </Link>
            <Link href="/privacy-policy/" className="text-muted-foreground hover:text-primary transition-colors duration-200">
              Privacy Policy
            </Link>
          </div>

        </div>
      </div>
    </footer>
  );
}

