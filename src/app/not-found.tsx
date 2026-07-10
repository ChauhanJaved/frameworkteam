import Link from "next/link";
import { Home, ShieldAlert } from "lucide-react";

export default function NotFound() {
  return (
    <div className="relative min-h-[85vh] flex items-center justify-center overflow-hidden px-4 py-16 sm:px-6 lg:px-8">
      {/* Premium Radial Glow Background Effects */}
      <div className="absolute inset-0 -z-10 bg-background">
        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-primary/10 blur-[100px] dark:bg-primary/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-indigo-500/5 blur-[120px] dark:bg-indigo-500/10" />
        <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-accent/20 blur-[100px] dark:bg-accent/5" />
      </div>

      {/* Decorative Grid Grid Pattern */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      {/* Main Glassmorphic Card Container */}
      <div className="w-full max-w-2xl text-center relative">
        {/* Animated Floating Graphic */}
        <div className="inline-flex items-center justify-center mb-8 relative">
          <div className="relative">
            <span className="text-8xl sm:text-9xl font-extrabold tracking-tight bg-gradient-to-r from-primary via-indigo-500 to-primary bg-clip-text text-transparent select-none filter drop-shadow-sm">
              404
            </span>
            <div className="absolute -top-3 -right-3 p-2 bg-destructive/10 rounded-full border border-destructive/20 text-destructive dark:bg-destructive/20 dark:border-destructive/30 animate-pulse">
              <ShieldAlert className="h-6 w-6" />
            </div>
          </div>
        </div>

        {/* Text Headers */}
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
          Oops! Page Not Found
        </h1>
        <p className="text-muted-foreground text-base sm:text-lg max-w-md mx-auto mb-10 leading-relaxed">
          The link might be broken, or the page has been moved. Don't worry, we'll help you get back on track.
        </p>

        {/* Action Buttons */}
        <div className="flex justify-center">
          <Link
            href="/"
            className="group inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 text-sm font-semibold rounded-xl bg-primary text-primary-foreground shadow-lg shadow-primary/20 hover:bg-primary/95 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-primary/30"
          >
            <Home className="h-4 w-4" />
            Go to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
