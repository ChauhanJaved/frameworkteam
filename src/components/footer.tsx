// External imports
import Link from "next/link";
import { Mail } from "lucide-react";

// Internal imports
import { raleway } from "@/lib/font";
import { email } from "@/data/website-data";

interface PropsFooter {
  companyName: string;
  copyrightYear: string;
}

export default function Footer(props: PropsFooter) {
  return (
    <footer className="relative mt-20 border-t bg-card/30 backdrop-blur-sm text-sm">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-6 md:px-8 lg:px-10">
        
        {/* Main 3-Column Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          
          {/* Column 1: Brand Logo & Short Bio */}
          <div className="flex flex-col gap-4">
            <Link
              className={`${raleway.className} flex flex-col items-start justify-center border-l-[5px] border-l-primary py-1 pl-3 text-base font-extrabold leading-tight tracking-wider text-blue-dark-imperial dark:text-foreground w-fit`}
              href="/#home"
              aria-label="Go to home page"
            >
              <p>FrameworkTeam</p>
              <p>Softwares</p>
            </Link>
            <p className="text-muted-foreground text-xs leading-relaxed max-w-xs mt-2">
              We design, build, and deploy premium web applications, SaaS platforms, and digital tools tailored to scale your business.
            </p>
          </div>

          {/* Column 2: Navigation Shortcuts */}
          <div className="flex flex-col gap-3">
            <h3 className="font-semibold text-foreground tracking-wide text-xs uppercase">Quick Links</h3>
            <ul className="flex flex-col gap-2.5 text-xs">
              <li>
                <Link href="/#home" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-muted-foreground hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/#products" className="text-muted-foreground hover:text-primary transition-colors">
                  Products & Apps
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Support / Inquiries */}
          <div className="flex flex-col gap-3">
            <h3 className="font-semibold text-foreground tracking-wide text-xs uppercase">Support & Contact</h3>
            <p className="text-muted-foreground text-xs leading-relaxed">
              Have inquiries about our development services or product licenses?
            </p>
            <div className="mt-1 flex items-center gap-2">
              <Mail className="h-4 w-4 text-primary" />
              <a href={`mailto:${email}`} className="font-medium text-xs hover:underline text-foreground">
                {email}
              </a>
            </div>
            <span className="text-[11px] text-muted-foreground/80 italic">
              Responses are typically sent within 12-24 hours.
            </span>
          </div>

        </div>

        {/* Bottom Horizontal Divider & Metadata */}
        <div className="mt-12 border-t pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground text-center sm:text-left">
            © {props.copyrightYear} {props.companyName}. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs">
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
