// Vendor Imports
import Link from "next/link";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { promises as fs } from "fs";
import path from "path";
import {
  CircleCheck,
  Slash,
  ArrowRight,
  Plus,
  Minus,
  Calendar,
  User,
  Clock
} from "lucide-react";

// Internal Imports
import { HeaderNavItems, websiteURL, companyName, hrefValue } from "@/data/website-data";
import { serviceItems } from "@/data/services-items";
import blogsRegistry from "@/data/blogs-registry.json";
import cloudinaryLoader from "@/lib/cloudinary-loader";
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

export async function generateStaticParams() {
  return blogsRegistry.map((blog) => ({ slug: blog.id }));
}

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const blog = blogsRegistry.find((item) => item.id === slug);
  if (!blog) return {};

  return {
    title: `${blog.title} | ${companyName}`,
    description: blog.shortDesc,
    keywords: blog.keywords,
    alternates: {
      canonical: `${websiteURL}/blog/${blog.id}/`,
    },
    openGraph: {
      title: `${blog.title} | ${companyName}`,
      description: blog.shortDesc,
      url: `${websiteURL}/blog/${blog.id}/`,
      siteName: companyName,
      locale: "en_US",
      type: "article",
      publishedTime: blog.date,
      authors: [blog.author],
      tags: [blog.category, ...blog.techStack]
    },
    twitter: {
      card: "summary_large_image",
      title: `${blog.title} | ${companyName}`,
      description: blog.shortDesc,
    }
  };
}

// Helper to calculate reading time based on word count
function getReadingTime(text: string): string {
  const wordsPerMinute = 200;
  const numberOfWords = text.split(/\s+/).length;
  const minutes = Math.ceil(numberOfWords / wordsPerMinute);
  return `${minutes} min read`;
}

// Markdown-to-JSX inline helper for link, bold styles
function parseInlineStyles(text: string): React.ReactNode[] {
  const parts: React.ReactNode[] = [];
  const regex = /(\*\*.*?\*\*|\[.*?\]\(.*?\))/g;
  const tokens = text.split(regex);
  tokens.forEach((token, idx) => {
    if (token.startsWith("**") && token.endsWith("**")) {
      parts.push(
        <strong key={idx} className="font-bold text-foreground">
          {token.slice(2, -2)}
        </strong>
      );
    } else if (token.startsWith("[") && token.includes("](") && token.endsWith(")")) {
      const closeBracket = token.indexOf("]");
      const label = token.slice(1, closeBracket);
      const url = token.slice(closeBracket + 2, -1);
      const isInternal = url.startsWith("/");
      if (isInternal) {
        parts.push(
          <Link
            key={idx}
            href={url}
            className="text-primary underline underline-offset-4 hover:text-primary/80"
          >
            {label}
          </Link>
        );
      } else {
        parts.push(
          <a
            key={idx}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline underline-offset-4 hover:text-primary/80"
          >
            {label}
          </a>
        );
      }
    } else {
      parts.push(token);
    }
  });
  return parts;
}

// Custom Markdown-to-JSX structural parser
function parseMarkdown(md: string) {
  const blocks = md.split(/\n\n+/);
  return blocks.map((block, idx) => {
    const trimmed = block.trim();
    if (!trimmed) return null;

    if (trimmed === "---" || trimmed === "***") {
      return <hr key={idx} className="my-8 border-border" />;
    }

    if (trimmed.startsWith("# ")) {
      return (
        <h1 key={idx} className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground mt-10 mb-6">
          {trimmed.substring(2)}
        </h1>
      );
    }
    if (trimmed.startsWith("## ")) {
      return (
        <h2 key={idx} className="text-2xl md:text-3xl font-bold tracking-tight text-foreground mt-8 mb-4 border-b pb-2">
          {trimmed.substring(3)}
        </h2>
      );
    }
    if (trimmed.startsWith("### ")) {
      return (
        <h3 key={idx} className="text-xl md:text-2xl font-semibold tracking-tight text-foreground mt-6 mb-3">
          {trimmed.substring(4)}
        </h3>
      );
    }
    if (trimmed.startsWith("```")) {
      const lines = trimmed.split("\n");
      const code = lines.slice(1, -1).join("\n");
      return (
        <pre key={idx} className="bg-muted p-5 rounded-xl overflow-x-auto my-6 border text-sm font-mono leading-relaxed shadow-inner">
          <code>{code}</code>
        </pre>
      );
    }
    if (trimmed.startsWith("|")) {
      const lines = trimmed.split("\n").map((l) => l.trim()).filter(Boolean);
      if (lines.length >= 2) {
        const parseRow = (rowStr: string) => {
          const parts = rowStr.split("|");
          if (parts[0] === "") parts.shift();
          if (parts[parts.length - 1] === "") parts.pop();
          return parts.map((p) => p.trim());
        };

        const headerCells = parseRow(lines[0]);
        const bodyLines = lines.slice(1).filter((l) => l.replace(/[\s|:-]/g, "").length > 0 && !l.includes("---"));

        return (
          <div key={idx} className="overflow-x-auto my-8 rounded-xl border bg-card/40 backdrop-blur-sm shadow-sm">
            <table className="w-full text-left text-sm text-muted-foreground border-collapse">
              <thead className="bg-muted/60 text-foreground font-semibold text-xs uppercase tracking-wider border-b">
                <tr>
                  {headerCells.map((header, hIdx) => (
                    <th key={hIdx} className="p-3.5 border-r last:border-r-0">
                      {parseInlineStyles(header)}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {bodyLines.map((rowLine, rIdx) => {
                  const cells = parseRow(rowLine);
                  return (
                    <tr key={rIdx} className="hover:bg-muted/30 transition-colors">
                      {cells.map((cell, cIdx) => (
                        <td key={cIdx} className="p-3.5 border-r last:border-r-0 leading-relaxed">
                          {parseInlineStyles(cell)}
                        </td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        );
      }
    }
    if (trimmed.startsWith("- ")) {
      const items = trimmed.split("\n").map((line) => line.replace(/^-\s+/, ""));
      return (
        <ul key={idx} className="list-disc pl-6 space-y-3 my-6 text-muted-foreground text-base md:text-lg">
          {items.map((item, itemIdx) => (
            <li key={itemIdx}>{parseInlineStyles(item)}</li>
          ))}
        </ul>
      );
    }
    if (trimmed.match(/^\d+\.\s+/)) {
      const items = trimmed.split("\n").map((line) => line.replace(/^\d+\.\s+/, ""));
      return (
        <ol key={idx} className="list-decimal pl-6 space-y-3 my-6 text-muted-foreground text-base md:text-lg">
          {items.map((item, itemIdx) => (
            <li key={itemIdx}>{parseInlineStyles(item)}</li>
          ))}
        </ol>
      );
    }
    return (
      <p key={idx} className="leading-8 text-muted-foreground text-base md:text-lg my-5">
        {parseInlineStyles(trimmed)}
      </p>
    );
  });
}

export default async function BlogDetailsPage({ params }: Props) {
  const { slug } = await params;
  const blog = blogsRegistry.find((item) => item.id === slug);

  if (!blog) {
    notFound();
  }

  // Load blog post body from JSON content file
  let content = "";
  try {
    const filePath = path.join(process.cwd(), "src/data/blogs", `${slug}.json`);
    const fileContent = await fs.readFile(filePath, "utf8");
    const blogData = JSON.parse(fileContent);
    content = blogData.content;
  } catch (error) {
    console.error("Failed to load blog body content file:", error);
    notFound();
  }

  // Find related services objects
  const relatedServices = serviceItems.filter((service) =>
    blog.services.includes(service.id)
  );

  const formattedDate = new Date(blog.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // ----------------------------------------------------
  // SCHEMA INJECTIONS (SEO / RICH SCHEMAS)
  // ----------------------------------------------------
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": `${websiteURL}/`
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": `${websiteURL}/blog/`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": blog.title,
        "item": `${websiteURL}/blog/${blog.id}/`
      }
    ]
  };

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": blog.title,
    "description": blog.shortDesc,
    "datePublished": blog.date,
    "dateModified": blog.date,
    "author": {
      "@type": "Person",
      "name": blog.author
    },
    "publisher": {
      "@type": "Organization",
      "name": companyName,
      "logo": {
        "@type": "ImageObject",
        "url": `${websiteURL}/favicon.ico`
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${websiteURL}/blog/${blog.id}/`
    }
  };

  const faqJsonLd = blog.faqs && blog.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": blog.faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  } : null;

  return (
    <>
      {/* Schema Injections */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}

      {/* Breadcrumb section */}
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
              <Link href="/blog/" className="transition-colors hover:text-foreground">
                Blog
              </Link>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <Slash className="size-4" />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbPage className="max-w-[150px] sm:max-w-[300px] md:max-w-[500px] lg:max-w-[700px] truncate block">{blog.title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <main className="pb-20 text-lg">
        <article className="container mx-auto px-5 py-10 xl:max-w-screen-xl">

          <header className="flex flex-col items-center text-center mb-10">
            <span className="text-sm font-semibold tracking-wider text-primary uppercase mb-3">
              {blog.category}
            </span>
            <SectionHeader
              caption={blog.title}
            />
            
            {/* Meta row */}
            <div className="flex flex-wrap items-center justify-center gap-6 mt-6 w-full text-sm text-muted-foreground border-y py-4">
              <div className="flex items-center gap-2">
                {blog.author.includes("Javed Chauhan") ? (
                  <a
                    href="https://www.linkedin.com/in/chauhanjaved/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-primary transition-colors duration-200"
                  >
                    <img
                      src={cloudinaryLoader({ src: "/frameworkteam/javed-chauhan", width: 40 })}
                      alt="Javed Chauhan"
                      className="size-6 rounded-full object-cover border border-primary/20"
                    />
                    <span>By {blog.author}</span>
                  </a>
                ) : (
                  <>
                    <User className="size-4 text-primary" />
                    <span>By {blog.author}</span>
                  </>
                )}
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="size-4 text-primary" />
                <span>{formattedDate}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="size-4 text-primary" />
                <span>{getReadingTime(content)}</span>
              </div>
            </div>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Blog Post Content */}
            <section className="lg:col-span-8 max-w-none">
              <div className="prose prose-neutral dark:prose-invert max-w-none">
                {parseMarkdown(content)}
              </div>

              {/* Technologies used tags */}
              <div className="mt-12 border-t pt-8">
                <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3">
                  Technologies covered in this article:
                </h3>
                <div className="flex flex-wrap gap-2">
                  {blog.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-secondary text-secondary-foreground text-sm font-medium rounded-full border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* FAQs Accordion Section */}
              {blog.faqs && blog.faqs.length > 0 && (
                <section className="mt-16">
                  <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
                  <div className="border rounded-2xl bg-card/30 p-6 md:p-8 backdrop-blur-sm shadow-sm divide-y divide-border">
                    {blog.faqs.map((faq, index) => (
                      <details
                        key={index}
                        className="group py-5 first:pt-0 last:pb-0 [&_summary::-webkit-details-marker]:hidden"
                      >
                        <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-base md:text-lg font-semibold text-foreground focus:outline-none focus:text-primary transition-colors">
                          <span>{faq.question}</span>
                          <span className="relative size-5 shrink-0 text-muted-foreground group-hover:text-primary transition-colors">
                            <Plus className="absolute inset-0 size-5 opacity-100 group-open:opacity-0 transition-opacity duration-300" />
                            <Minus className="absolute inset-0 size-5 opacity-0 group-open:opacity-100 transition-opacity duration-300" />
                          </span>
                        </summary>
                        <p className="mt-4 text-base text-muted-foreground leading-relaxed pr-6">
                          {faq.answer}
                        </p>
                      </details>
                    ))}
                  </div>
                </section>
              )}
            </section>

            {/* Sidebar Column: Related Services */}
            <aside className="lg:col-span-4 lg:sticky lg:top-24 space-y-6">
              {relatedServices.length > 0 && (
                <div className="bg-card/50 border rounded-2xl p-6 shadow-sm backdrop-blur-sm">
                  <h3 className="text-lg font-bold mb-4 border-b pb-2">Related Services</h3>
                  <div className="space-y-4">
                    {relatedServices.map((service, index) => (
                      <div key={index} className="flex flex-col gap-2 p-3 rounded-lg hover:bg-secondary/30 transition-colors">
                        <h4 className="font-semibold text-base text-foreground">
                          {service.title}
                        </h4>
                        <p className="text-xs text-muted-foreground line-clamp-2">
                          {service.shortDesc}
                        </p>
                        <Link href={`/${service.id}/`} className="text-xs text-primary font-medium hover:underline inline-flex items-center gap-1 mt-1">
                          View details
                          <ArrowRight className="size-3" />
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Call-to-action Section */}
              <div className="bg-gradient-to-br from-primary/10 via-card to-secondary/10 border rounded-2xl p-6 shadow-sm backdrop-blur-sm flex flex-col gap-4 text-center">
                <h3 className="text-xl font-bold">Need a custom solution?</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We design & build scalable web applications, SaaS dashboards, and high-performance websites. Let's discuss your project today!
                </p>
                <Link href={hrefValue(HeaderNavItems.Contact)} className="w-full">
                  <Button className="w-full gap-2">
                    Work With Us
                    <ArrowRight className="size-4" />
                  </Button>
                </Link>
              </div>
            </aside>
          </div>
        </article>
      </main>
    </>
  );
}
