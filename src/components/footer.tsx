// External imports
import Link from "next/link";

interface PropsFooter {
  companyName: string;
  copyrightYear: string;
}

export default function Footer(props: PropsFooter) {
  return (
    <footer className="relative mt-20 border-t bg-card/30 backdrop-blur-sm text-sm">
      <div className="mx-auto max-w-7xl px-5 py-8 sm:px-6 md:px-8 lg:px-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          
          {/* Copyright Section */}
          <p className="text-muted-foreground text-center sm:text-left text-xs order-last sm:order-first">
            © {props.copyrightYear} {props.companyName}. All rights reserved.
          </p>

          {/* Combined Navigation and Legal Links */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs">
            <Link href="/#home" className="text-muted-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/#services" className="text-muted-foreground hover:text-primary transition-colors">
              Services
            </Link>
            <Link href="/#products" className="text-muted-foreground hover:text-primary transition-colors">
              Products & Apps
            </Link>
            <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
              Contact
            </Link>
            <Link href="/terms-of-use/" className="text-muted-foreground hover:text-primary transition-colors">
              Terms of Use
            </Link>
            <Link href="/privacy-policy/" className="text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
          </div>

        </div>
      </div>
    </footer>
  );
}
