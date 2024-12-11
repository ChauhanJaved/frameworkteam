//Internal imports
import SectionHeader from "./UI/SectionHeader";
import { HeaderNavItems, headerNavItems } from "@/data/website-data";

export default function Services() {
  return (
    <section
      id={HeaderNavItems.Services}
      className="container mx-auto scroll-m-[64px] px-3 pt-16 text-lg xl:max-w-screen-xl"
    >
      <SectionHeader caption="services" element="h2" />
      <p className="mt-5">
        Our company <b>FrameworkTeam Softwares</b> specializes in the production
        and distribution of Windows software and technologies. Our solutions
        cover business and personal productivity. Our team develops its own cost
        effective, innovative and practical solutions for home users and
        business professionals. Using our solutions companies find creative ways
        to use information technology to increase productivity and
        competitiveness.
      </p>
      <p className="mt-5">
        All our products are available as trial versions. It means that if
        you&#39;re interested in a software product from our catalog, you can
        freely download and try it. Once you&#39;re sure that the software meets
        your needs, you can buy it directly from our online shop using your
        credit card, PAYPAL or other payment methods. We use
        <strong>
          {" "}
          Bright Market, LLC dba{" "}
          <a
            href="https://fastspring.com/"
            target="_blank"
            className="text-blue-ultramarine hover:opacity-90 active:opacity-90"
          >
            FastSpring
          </a>
          , 801 Garden St., Santa Barbara, CA 93101 (USA){" "}
        </strong>
        to process your payment. You will be registered and will receive a
        personal link to download a fully-working version in a few minutes. This
        direct-selling method permits us selling our products at low prices.
      </p>
      <p className="mt-5">
        However sometimes even the most powerful tools cannot handle the various
        requirements you may have. Why pay for rigid software with so many
        useless functions? We offer a one-site solution which perfectly meets
        the problems you may face. The best solution is customizing our
        software. Through customization, we can accommodate your special
        requests. We can provide the custom version of our application as per
        your need. Tell us your requirements and we will provide you a solution
        which will perfectly address your needs at a very affordable price.
      </p>
    </section>
  );
}
