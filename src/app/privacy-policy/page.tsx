//External imports
import Link from "next/link";
import { Metadata } from "next";

//Internal imports
import Header from "@/components/Header";
import BreadCrumbs from "@/components/UI/BreadCrumbs";
import SectionHeader from "@/components/UI/SectionHeader";
import { companyName, HeaderNavItems } from "@/data/website-data";

const pageName = "Privacy Policy";

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
    <>
      <Header />
      <main id="main" className="text-lg">
        <BreadCrumbs pageName={pageName} pageLocation={pageLocation} />
        <div className="container mx-auto flex flex-col justify-center px-3 py-10 xl:max-w-screen-xl">
          <SectionHeader caption={pageName} />
          <p className="mt-10">
            {companyName} and its websites are committed to respecting and
            safeguarding the privacy of the personal information very seriously
            and strictly conform to data protection laws. Personal data is being
            collected on this website only to the extent necessary for technical
            reasons. By no means will the collected data be sold or for any
            other reason given to third parties. The following statement gives
            you an overview of how we ensure this protection and what kind of
            data is being collected for what purpose.
          </p>
          <p className="mt-10 text-xl font-bold">Website</p>
          <p className="mt-5">
            You can visit most areas of the {companyName}&#39;s websites without
            disclosing any personal information.
          </p>
          <p className="mt-5">
            {companyName} only logs the domain name, IP address and browser type
            of our website visitors via our web server log files and analytics
            tools at irregular intervals. We use this information to log global
            access to our website.
          </p>
          <p className="mt-5">
            For certain features we will ask that you provide {companyName}{" "}
            certain information so that it works properly. You can decide at any
            time whether you would like to continue with an instruction
            prompting you to provide information. In some cases, you will be
            unable to complete a particular step in the process if you do not
            want to provide the information requested. For example, we will ask
            for personal information in the following instances:
          </p>
          <p className="mt-5">
            If you place an order through our online store, we will ask you to
            provide information required for processing the order. This may
            include your name, address, email address, and credit card number or
            bank details.
          </p>
          <p className="mt-10 text-xl font-bold">Cookies</p>
          <p className="mt-5">
            Cookies are small text files that are stored on your computer or in
            your browser. Cookies are loaded on your browser when you first use
            a product or service.
          </p>
          <p className="mt-5">
            Cookies do not include any personal information. We may use cookies
            to identify the browser you are using so that our website displays
            properly. We also use cookies in various places on our website in
            order to document your visit to the {companyName}&#39;s website and
            allow for a more efficient website design. If you do not want to
            allow {companyName} or someone else to use cookies, you can disable
            cookie installation via your browser setting. While you also have
            the option of deleting cookies from your computer’s hard disk at any
            time, if you choose to do so, you may be unable to use some of the
            features of our website, products and services.
          </p>
          <p className="mt-10 text-xl font-bold">Google Analytics</p>
          <p className="mt-5">
            {companyName} uses the following third-party analytics tools to
            better understand your interaction with our website and use of our
            products/services. Our ultimate goal is to create a more
            user-friendly experience for you:
          </p>
          <p className="mt-5">
            {companyName} uses Google Analytics, a web analysis service from
            Google, Inc. (“Google”). Google Analytics uses Cookies to make it
            possible to analyse your use of our website. Information about your
            use of our website the Cookie generates is usually transferred to a
            Google server in the USA and saved there. However, before this
            happens, Google shortens and anonymizes your IP address (Google’s
            anonymize IP process) if located within a member state of the
            European Union or in other contracting member states to the
            Agreement on the European Economic Area. The entire IP address is
            transferred to a Google server in the USA and saved there only in
            exceptional cases.
          </p>
          <p className="mt-5">
            This anonymization ensures that your IP address cannot be traced
            back to you. Google will use this information to evaluate your use
            of the website in order to compile reports about website activities
            for {companyName} and provide additional services associated with
            website and Internet usage. Google can transfer this information to
            third parties, where appropriate, if legally mandated or if Google
            contracts with third parties to process such data. Google will not
            associate your IP address with other Google data. By using our
            website, you expressly consent to Google’s collection and storage of
            your data in the manner and for the purposes described above. You
            also have the option to prevent Google from acquiring and processing
            data generated by Cookies and data related to your use of our
            website (including your IP address) by downloading and installing a
            Google-provided browser plugin.
          </p>
          <p className="mt-10 text-xl font-bold">Placing an order</p>
          <p className="mt-5">
            When you place an order from our Website, it is processed by one of
            the third party payment processors we use: BlueSnap and FastSpring.
            They collect personally identifiable information such as your full
            name, company, email address, phone number, physical address, IP
            address, payment method and credit card information, to be able to
            process your payment and issue an invoice. You can consult their
            individual privacy policies to see how they store and process your
            data:
          </p>
          <Link
            href={"https://home.bluesnap.com/privacy-policy/"}
            target="_blank"
            className="mt-5 text-blue-ultramarine hover:opacity-90 active:opacity-90"
          >
            BlueSnap&#39;s Privacy Policy
          </Link>
          <Link
            href={"https://fastspring.com/privacy/"}
            target="_blank"
            className="text-blue-ultramarine hover:opacity-90 active:opacity-90"
          >
            Fastspring&#39;s Privacy Policy
          </Link>
          <p className="mt-5">
            {" "}
            None of the payment processors send the payment details to us, we do
            not receive or record any payment details. We receive the following
            information from the payment processors: full name, company, email
            address, phone number, physical address, IP address and payment
            method. We use these details to deliver you the license key and
            provide you customer support.
          </p>
          <p className="mt-10 text-xl font-bold">
            Changes to this Privacy Policy
          </p>
          <p className="mt-5">
            {companyName} may update Privacy Policy from time to time. We will
            notify you of any changes by posting the new Privacy Policy on this
            page. You are advised to review this Privacy Policy periodically for
            any changes. Changes to this Privacy Policy are effective when they
            are posted on this page.
          </p>
        </div>
      </main>
    </>
  );
}
