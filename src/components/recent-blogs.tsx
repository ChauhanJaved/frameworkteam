// Vendor Imports
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";

// Internal Imports
import SectionHeader from "@/components/section-header";
import blogsRegistry from "@/data/blogs-registry.json";
import { Button } from "@/components/ui/button";

export default function RecentBlogs() {
  // Sort blogs by date (newest first) and select the top 3
  const recentBlogs = [...blogsRegistry]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  return (
    <section
      id="recent-blogs"
      className="container scroll-m-20 px-5 pt-10 lg:px-10 lg:pt-20 xl:max-w-screen-xl mx-auto"
    >
      <SectionHeader
        caption="recent blogs"
        desc="Expert Advice & Engineering Insights"
        element="h2"
      />

      <div className="mt-6 text-center max-w-3xl mx-auto">
        <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
          Explore our latest insights on modern architecture patterns, custom software delivery strategies, and web performance optimization.
        </p>
      </div>

      {/* Blogs Cards Grid */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recentBlogs.map((blog) => {
          const formattedDate = new Date(blog.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          });

          return (
            <Link
              href={`/blog/${blog.id}/`}
              key={blog.id}
              className="group block h-full focus:outline-none"
            >
              <div className="flex h-full flex-col justify-between rounded-2xl border bg-card/40 p-6 md:p-8 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-md hover:border-primary/45 hover:bg-card">
                <div>
                  {/* Category & Date Row */}
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                    <span className="px-2 py-0.5 bg-primary/10 text-primary font-semibold rounded-full uppercase tracking-wider">
                      {blog.category}
                    </span>
                    <div className="flex items-center gap-1 text-muted-foreground/80">
                      <Calendar className="size-3.5" />
                      <span>{formattedDate}</span>
                    </div>
                  </div>

                  {/* Blog Title */}
                  <h3 className="text-lg font-bold group-hover:text-primary transition-colors duration-300 line-clamp-2 leading-snug">
                    {blog.title}
                  </h3>

                  {/* Blog Short Description */}
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {blog.shortDesc}
                  </p>
                </div>

                {/* Read Article Link */}
                <div className="mt-6 flex items-center text-xs font-semibold text-primary/90 group-hover:text-primary transition-colors">
                  <span>Read Article</span>
                  <ArrowRight className="ml-1 size-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* View All Button */}
      <div className="mt-12 flex justify-center">
        <Link href="/blog/">
          <Button size="lg" variant="outline" className="px-8 border-primary/20 hover:border-primary group">
            View All Blogs
            <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </div>
    </section>
  );
}
