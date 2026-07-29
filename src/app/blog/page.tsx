// Vendor Imports
import Link from "next/link";
import { Metadata } from "next";
import { Slash, Calendar, Clock, User, ArrowRight } from "lucide-react";

// Internal Imports
import { HeaderNavItems, websiteURL, companyName, hrefValue } from "@/data/website-data";
import blogsRegistry from "@/data/blogs-registry.json";
import SectionHeader from "@/components/section-header";
import { Button } from "@/components/ui/button";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import BreadcrumbNextLink from "@/components/breadcrumb-next-link";

export const metadata: Metadata = {
  title: `Industry Insights & Software Guides | ${companyName} Blog`,
  description: "Stay ahead with developer guides, cloud architecture recommendations, headless CMS insights, and scalability strategies from the FrameworkTeam software agency.",
  keywords: ["software engineering blog", "Next.js guides", "SaaS development tips", "headless CMS benefits"],
  alternates: {
    canonical: `${websiteURL}/blog/`,
  },
};

export default function BlogListingPage() {
  // Sort blogs by date descending
  const sortedBlogs = [...blogsRegistry].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <>
      {/* Breadcrumbs */}
      <div className="container mx-auto px-5 pt-24 xl:max-w-screen-xl">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbNextLink
                linkName="Home"
                hrefActiveSection={`/#${HeaderNavItems.Home}`}
                headerActiveSection={HeaderNavItems.Home}
              />
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <Slash className="size-4" />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbPage>Blog</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <main className="pb-24">
        <div className="container mx-auto px-5 py-10 xl:max-w-screen-xl">
          {/* Header */}
          <header className="flex flex-col items-center text-center mb-16">
            <SectionHeader
              caption="FrameworkTeam Insights"
            />
            <p className="mt-6 text-xl text-muted-foreground max-w-3xl leading-relaxed">
              In-depth articles, guides, and architectural case studies covering custom web application development, SaaS scalability, and modern headless integrations.
            </p>
          </header>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedBlogs.map((blog) => {
              const formattedDate = new Date(blog.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              });

              return (
                <article
                  key={blog.id}
                  className="group flex flex-col justify-between p-6 rounded-2xl bg-card/40 hover:bg-card border hover:border-primary/30 shadow-sm hover:shadow-md transition-all duration-300 backdrop-blur-sm"
                >
                  <div>
                    {/* Top Row: Date & Category */}
                    <div className="flex items-center justify-between gap-3 text-xs text-muted-foreground mb-4">
                      <span className="px-2.5 py-0.5 bg-primary/10 text-primary font-semibold rounded-full uppercase tracking-wider">
                        {blog.category}
                      </span>
                      <div className="flex items-center gap-1.5">
                        <Calendar className="size-3.5" />
                        <span>{formattedDate}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h2 className="text-xl font-bold text-foreground mb-3 leading-snug group-hover:text-primary transition-colors duration-200">
                      <Link href={`/blog/${blog.id}/`}>{blog.title}</Link>
                    </h2>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground line-clamp-3 mb-6 leading-relaxed">
                      {blog.shortDesc}
                    </p>
                  </div>

                  <div>
                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {blog.techStack.slice(0, 3).map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 bg-secondary text-secondary-foreground text-xs font-medium rounded border"
                        >
                          {tech}
                        </span>
                      ))}
                      {blog.techStack.length > 3 && (
                        <span className="text-xs text-muted-foreground self-center pl-1">
                          +{blog.techStack.length - 3} more
                        </span>
                      )}
                    </div>

                    {/* Link Button */}
                    <Link href={`/blog/${blog.id}/`} className="inline-flex w-full">
                      <Button variant="outline" className="w-full group/btn justify-between border-primary/20 hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                        <span>Read Article</span>
                        <ArrowRight className="size-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                      </Button>
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
}
