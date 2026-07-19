import type { Metadata } from "next";
import { companyName } from "@/data/website-data";

export const metadata: Metadata = {
  title: `About Us | ${companyName}`,
  description: `Learn about the journey of ${companyName} since 2001, meet our founder & technical director Javed Chauhan, and discover our agile, cost-effective delivery model.`,
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
