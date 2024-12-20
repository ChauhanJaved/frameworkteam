//External imports
import { Metadata } from "next";

//Internal imports
import Header from "@/components/header";
import BreadCrumbs from "@/components/bread-crumbs";
import SectionHeader from "@/components/section-header";
import { companyName, HeaderNavItems } from "@/data/website-data";

const pageName = "Terms of Use";

export const metadata: Metadata = {
  title: `${pageName} - ${companyName}`,
  description: `${pageName} - ${companyName}`,
};

export default function page() {
  const pageLocation = [
    {
      name: `${HeaderNavItems.Home[0].toUpperCase()}${HeaderNavItems.Home.slice(1)}`,
      link: `/#${HeaderNavItems.Home}`,
    },
  ];
  return (
    <main id="main" className="text-lg">
      <BreadCrumbs pageName={pageName} pageLocation={pageLocation} />
      <div className="container mx-auto flex flex-col justify-center px-3 py-10 xl:max-w-screen-xl">
        <SectionHeader caption={pageName} />
        <p className="mt-10">
          By using the {companyName}&#39;s websites, you agree to these terms of
          use. if you do not agree to these terms of use, please do not use the{" "}
          {companyName}&#39;s websites.
        </p>
        <p className="mt-10 text-xl font-bold">Use of Software Products</p>
        <p className="mt-5">
          The software products on our websites are distributed as TRY BEFORE
          YOU BUY. This means:
        </p>
        <p className="mt-5">
          1. All copyrights to the software are exclusively owned by{" "}
          {companyName}.
        </p>
        <p className="mt-5">
          2. Anyone may use this software during a test period. Following this
          test period, if you wish to continue to use software, you must buy
          license.
        </p>
        <p className="mt-5">
          3. The software trial version may be freely distributed, with
          exceptions noted below, provided the distribution package is not
          modified in any way.
        </p>
        <p className="mt-5">
          a. No person or company may distribute separate parts of the package
          without written permission of the copyright owner.
        </p>
        <p className="mt-5">
          b. The software trial version may not be distributed inside of any
          other software package without written permission of the copyright
          owner.
        </p>
        <p className="mt-5">
          c. Hacks/cracks, keys or key generators may not be included on the
          same distribution.
        </p>
        <p className="mt-5">
          4. THE SOFTWARE IS DISTRIBUTED “AS IS”. NO WARRANTY OF ANY KIND IS
          EXPRESSED OR IMPLIED. YOU USE AT YOUR OWN RISK. NEITHER THE AUTHOR NOR
          THE AGENTS OF THE AUTHOR WILL BE LIABLE FOR DATA LOSS, DAMAGES AND
          LOSS OF PROFITS OR ANY OTHER KIND OF LOSS WHILE USING OR MISUSING THIS
          SOFTWARE.
        </p>
        <p className="mt-5">
          5. You may not use, copy, emulate, clone, rent, lease, sell, modify,
          decompile, disassemble, otherwise reverse engineer, or transfer the
          licensed program, or any subset of the licensed program, except as
          provided for in this agreement. Any such unauthorized use shall result
          in immediate and automatic termination of this license and may result
          in criminal and/or civil prosecution. All rights not expressly granted
          here are reserved by {companyName}.
        </p>
        <p className="mt-5">
          6. Installing and using software signifies acceptance of these terms
          and conditions of the license.
        </p>
        <p className="mt-5">
          7. If you do not agree with the terms of this license you must remove
          software files from your storage devices and cease to use the product.
        </p>
        <p className="mt-10 text-xl font-bold">Refund Policy</p>
        <p className="mt-5">
          Get a refund with our 15-day money-back guarantee policy, no questions
          asked. If you request a refund, we will reimburse you for the full
          purchase price, in the currency in which you made the purchase. We do
          not charge any kind of fee for this service. Refund requests are
          handled through our support team, which can be reached by emailing
          support. We do our best to keep response times below 24 hours in order
          to resolve your issue quickly and without complication.
        </p>
        <p className="mt-10 text-xl font-bold">
          Third Party Web Sites, Content, products and Services
        </p>
        <p className="mt-5">
          Our websites provide links to websites and access to content, products
          and services of third parties. {companyName} is not responsible for
          third party content provided on or through the site and you bear all
          risks associated with the access and use of such websites and third
          party content, products and services.
        </p>
      </div>
    </main>
  );
}
