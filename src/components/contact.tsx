"use client";
//External Imports
import { Copy } from "lucide-react";

//Internal Imports
import { email, HeaderNavItems } from "@/data/website-data";
import SectionHeader from "@/components/section-header";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    toast({
      title: "Email Copied !",
    });
  };
  return (
    <section
      id={HeaderNavItems.Contact}
      className="container scroll-m-20 px-5 pt-10 text-gray-700 dark:text-gray-300 lg:px-10 lg:pt-20 xl:max-w-screen-xl"
    >
      <SectionHeader
        caption="Contact Us"
        element="h2"
        desc="Product Support | Development Inquiries | Purchase Assistance | Report an Issue"
      />
      <div className="mt-10 flex flex-col items-center">
        <div className="m-2 flex flex-col items-center justify-center rounded border p-5 shadow">
          <p className="text-lg font-medium">{email}</p>
          <Button
            className="mt-2"
            onClick={handleCopyEmail}
            variant={"outline"}
            aria-label="Copy Email"
          >
            <Copy className="mr-2 h-5 w-5" />
            Copy Email
          </Button>
        </div>
        <p className={`mt-5 text-lg`}>
          Feel free to contact us if you encounter an issue with our product,
          have questions about our product, purchase inquiries, or are
          interested in development services. For licensed users, please include
          your order details to ensure your issue is prioritized by our support
          team. Please note that responses may take 12-24 hours.
        </p>
      </div>
    </section>
  );
}
