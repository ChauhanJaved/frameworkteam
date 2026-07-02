// Vendor Imports
import Link from "next/link";
import {
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
  ArrowRight
} from "lucide-react";

// Internal Imports
import SectionHeader from "@/components/section-header";
import { HeaderNavItems } from "@/data/website-data";
import { serviceItems } from "@/data/services-items";

// Mapping dictionary to render the matching Lucide icon dynamically
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

export default function Services() {
  return (
    <section
      id={HeaderNavItems.Services}
      className="container scroll-m-20 px-5 pt-10 lg:px-10 lg:pt-20 xl:max-w-screen-xl mx-auto"
    >
      <SectionHeader
        caption="services"
        desc="Empowering Digital Excellence | Cutting-Edge Web Apps & robust solutions Tailored to Your Business Needs"
        element="h2"
      />

      <div className="mt-6 text-center max-w-3xl mx-auto">
        <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
          At FrameworkTeam Softwares, we design, build, and deploy premium software products. 
          Explore our range of professional services below and click on any card to find out details, key features, and use cases.
        </p>
      </div>

      {/* Services Cards Grid */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {serviceItems.map((item) => {
          const IconComponent = iconMap[item.iconName] || Laptop;
          return (
            <Link
              href={`/${item.id}`}
              key={item.id}
              className="group block h-full focus:outline-none"
            >
              <div className="flex h-full flex-col justify-between rounded-2xl border bg-card/40 p-6 md:p-8 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-md hover:border-primary/45 hover:bg-card">
                <div>
                  {/* Icon Wrapper with transition logic */}
                  <div className="inline-flex items-center justify-center p-3.5 rounded-xl bg-primary/10 text-primary mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 ring-4 ring-primary/5">
                    <IconComponent className="size-6" />
                  </div>
                  {/* Service Title */}
                  <h3 className="text-lg font-bold group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>
                  {/* Service Short Description */}
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {item.shortDesc}
                  </p>
                </div>
                
                {/* Learn More Interactive Link */}
                <div className="mt-6 flex items-center text-xs font-semibold text-primary/90 group-hover:text-primary transition-colors">
                  <span>Learn More</span>
                  <ArrowRight className="ml-1 size-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
