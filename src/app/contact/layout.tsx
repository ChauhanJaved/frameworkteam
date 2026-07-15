import type { Metadata } from "next";
import { companyName } from "@/data/website-data";

export const metadata: Metadata = {
  title: `Contact Us | ${companyName}`,
  description: `Get in touch with ${companyName} for product support, custom web application development, purchase inquiries, or feature requests.`,
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
