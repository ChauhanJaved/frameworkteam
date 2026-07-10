// Vendor Imports
import Link from "next/link";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  CircleCheck,
  Download,
  Slash,
  SquareArrowOutUpRight,
  ArrowRight,
  Laptop,
  ShoppingBag,
  Layers,
  LayoutDashboard,
  Rocket,
  Globe,
  Settings,
  Lock,
  CreditCard,
  Webhook,
  Database,
  Atom,
  Gauge,
  RefreshCw,
  Brain,
  Plus,
  Minus
} from "lucide-react";

// Internal Imports
import { Categories, HeaderNavItems, websiteURL, companyName } from "@/data/website-data";
import { portfolioItems } from "@/data/portfolio-items";
import { serviceItems } from "@/data/services-items";
import SectionHeader from "@/components/section-header";
import { Button } from "@/components/ui/button";
import ProductImage from "@/components/product-image";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import BreadcrumbNextLink from "@/components/breadcrumb-next-link";
import ProductImageWebApp from "@/components/product-image-web-app";

// Icon mapping dictionary for service details
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Laptop,
  ShoppingBag,
  Layers,
  LayoutDashboard,
  Rocket,
  Globe,
  Settings,
  Lock,
  CreditCard,
  Webhook,
  Database,
  Atom,
  Gauge,
  RefreshCw,
  Brain
};

export async function generateStaticParams() {
  const productPaths = portfolioItems.map((item) => ({ slug: item.id }));
  const servicePaths = serviceItems.map((item) => ({ slug: item.id }));
  return [...productPaths, ...servicePaths];
}

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  
  // 1. Try finding a matching portfolio product
  const portfolioItem = portfolioItems.find((item) => item.id === slug);
  if (portfolioItem) {
    return portfolioItem.metaData ?? {};
  }

  // 2. Try finding a matching service
  const serviceItem = serviceItems.find((item) => item.id === slug);
  if (serviceItem) {
    return {
      ...serviceItem.metaData,
      alternates: {
        canonical: `${websiteURL}/${serviceItem.id}/`,
      },
      openGraph: {
        title: serviceItem.metaData.title || undefined,
        description: serviceItem.metaData.description || undefined,
        url: `${websiteURL}/${serviceItem.id}/`,
        siteName: companyName,
        locale: "en_US",
        type: "website",
      }
    };
  }

  return {};
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  
  // Resolve either a product or a service item
  const portfolioItem = portfolioItems.find((item) => item.id === slug);
  const serviceItem = serviceItems.find((item) => item.id === slug);

  if (!portfolioItem && !serviceItem) {
    notFound();
  }

  // ----------------------------------------------------
  // SCHEMA INJECTIONS FOR SERVICE ITEMS (SEO & RICH RESULTS)
  // ----------------------------------------------------
  const breadcrumbJsonLd = serviceItem ? {
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
        "name": "Services",
        "item": `${websiteURL}/#services`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": serviceItem.title,
        "item": `${websiteURL}/${serviceItem.id}/`
      }
    ]
  } : null;

  const faqJsonLd = serviceItem && serviceItem.faqs ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": serviceItem.faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  } : null;

  const serviceJsonLd = serviceItem ? {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceItem.title,
    "description": serviceItem.shortDesc,
    "provider": {
      "@type": "ProfessionalService",
      "name": companyName,
      "url": websiteURL,
      "logo": `${websiteURL}/favicon.ico`,
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "IN"
      }
    }
  } : null;

  return (
    <>
      {/* Dynamic SEO JSON-LD Injections */}
      {breadcrumbJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />
      )}
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
      {serviceJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
        />
      )}

      {/* Unified Breadcrumbs */}
      <div className="px-5 pt-24 max-w-screen-xl mx-auto">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbNextLink
                linkName={
                  HeaderNavItems.Home[0].toUpperCase() +
                  HeaderNavItems.Home.slice(1)
                }
                hrefActiveSection={`/#${HeaderNavItems.Home}`}
                headerActiveSection={HeaderNavItems.Home}
              />
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <Slash className="size-4" />
            </BreadcrumbSeparator>
            {portfolioItem ? (
              <BreadcrumbItem>
                <BreadcrumbNextLink
                  linkName={
                    HeaderNavItems.Portfolio[0].toUpperCase() +
                    HeaderNavItems.Portfolio.slice(1)
                  }
                  hrefActiveSection={`/#${HeaderNavItems.Portfolio}`}
                  headerActiveSection={HeaderNavItems.Portfolio}
                />
              </BreadcrumbItem>
            ) : (
              <BreadcrumbItem>
                <BreadcrumbNextLink
                  linkName="Services"
                  hrefActiveSection={`/#${HeaderNavItems.Services}`}
                  headerActiveSection={HeaderNavItems.Services}
                />
              </BreadcrumbItem>
            )}
            <BreadcrumbSeparator>
              <Slash className="size-4" />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbPage>
                {portfolioItem ? portfolioItem.title : serviceItem?.title}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <main id="main" className="text-lg pb-20">
        {/* RENDER PORTFOLIO DETAIL VIEW */}
        {portfolioItem && (
          <article className="container mx-auto flex flex-col items-center justify-center px-5 py-10 xl:max-w-screen-xl">
            <header className="flex flex-col items-center text-center">
              <SectionHeader
                caption={portfolioItem.title}
                desc={portfolioItem.subtitle}
              />
            </header>
            
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              {portfolioItem.downloadLink && (
                <a href={portfolioItem.downloadLink}>
                  <Button className="py-5 text-base">
                    <Download className="" />
                    Download Now
                  </Button>
                </a>
              )}
              {portfolioItem.productWebsite && (
                <Link href={portfolioItem.productWebsite} target="_blank">
                  <Button className="py-5 text-base">
                    <SquareArrowOutUpRight />
                    Product Website
                  </Button>
                </Link>
              )}
            </div>

            <div className="mt-10 flex w-full flex-col justify-center md:flex-row">
              {/* ----- Box-1 ----- */}
              {portfolioItem.categories[1] === Categories.WebApp ? (
                <ProductImageWebApp
                  src={portfolioItem.src}
                  width={portfolioItem.width}
                  height={portfolioItem.height}
                  alt={portfolioItem.title}
                  productWebsite={portfolioItem.productWebsite}
                />
              ) : (
                <ProductImage
                  src={portfolioItem.src}
                  width={portfolioItem.width}
                  height={portfolioItem.height}
                  alt={portfolioItem.title}
                  galleryID="product-image"
                />
              )}

              {/* ----- Box-2 ----- */}
              <div className="mt-5 md:ml-3 md:mt-0 md:w-1/3">
                <div className="flex flex-col text-center">
                  {portfolioItem.features.map((item, index) => (
                    <div key={index} className="mb-3 flex w-full flex-col">
                      <div className="flex flex-row items-start">
                        <div className="mt-1 size-6">
                          <CircleCheck />
                        </div>
                        <div className="flex flex-grow flex-col pl-3 text-left">
                          <h2 className={`text-base lg:text-lg`}>{item}</h2>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-10 w-full prose prose-neutral dark:prose-invert">
              {portfolioItem.description}
            </div>
          </article>
        )}

        {/* RENDER SERVICE DETAIL VIEW */}
        {serviceItem && (
          <article className="container mx-auto px-5 py-10 xl:max-w-screen-xl">
            {/* Header section */}
            <header className="flex flex-col items-center text-center">
              <div className="inline-flex items-center justify-center p-4 rounded-full bg-primary/10 text-primary mb-6 ring-8 ring-primary/5">
                {(() => {
                  const IconComp = iconMap[serviceItem.iconName] || Laptop;
                  return <IconComp className="size-12" />;
                })()}
              </div>
              <SectionHeader
                caption="Our Service"
                desc={serviceItem.title}
              />
              <h1 className="sr-only">{serviceItem.title}</h1>
              <p className="mt-6 text-xl text-muted-foreground max-w-3xl leading-relaxed">
                {serviceItem.shortDesc}
              </p>
            </header>

            <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              {/* Features List Column */}
              <section className="lg:col-span-5 bg-card/50 border rounded-2xl p-6 md:p-8 backdrop-blur-sm shadow-sm">
                <h2 className="text-xl font-bold mb-6">Key Offerings</h2>
                <div className="flex flex-col gap-4">
                  {serviceItem.features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <div className="mt-1 text-primary shrink-0">
                        <CircleCheck className="size-5" />
                      </div>
                      <p className="ml-3 text-base text-foreground leading-normal">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Detailed Copy Column */}
              <section className="lg:col-span-7 prose prose-neutral dark:prose-invert max-w-none">
                <h2 className="sr-only">Detailed Overview</h2>
                <div className="text-muted-foreground text-base md:text-lg leading-relaxed flex flex-col gap-4">
                  {serviceItem.description}
                </div>
              </section>
            </div>

            {/* FAQs Accordion Section */}
            {serviceItem.faqs && serviceItem.faqs.length > 0 && (
              <section className="mt-20 max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
                <div className="border rounded-2xl bg-card/30 p-6 md:p-8 backdrop-blur-sm shadow-sm divide-y divide-border">
                  {serviceItem.faqs.map((faq, index) => (
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

            {/* Call-to-action Section */}
            <section className="mt-20 p-8 md:p-12 rounded-3xl bg-gradient-to-br from-primary/10 via-background to-secondary border flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex flex-col gap-2 max-w-2xl text-center md:text-left">
                <h3 className="text-2xl font-bold">Ready to Start Your Project?</h3>
                <p className="text-muted-foreground">
                  Get in touch with our experts to discuss how we can build custom web apps or automate internal tools for your business.
                </p>
              </div>
              <Link href={`/#${HeaderNavItems.Contact}`}>
                <Button size="lg" className="px-8 py-6 text-base group">
                  Work With Us
                  <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </section>
          </article>
        )}
      </main>
    </>
  );
}
