//Internal imports
import SectionHeader from "./UI/SectionHeader";
import { HeaderNavItems, headerNavItems } from "@/data/website-data";

export default function Services() {
  return (
    <section
      id={HeaderNavItems.Services}
      className="container mx-auto scroll-m-[64px] px-3 pt-16 xl:max-w-screen-xl"
    >
      <SectionHeader caption="services" element="h2" />
      <h2 className="mt-5 text-lg md:text-xl">
        <b>Progressive Web Application (PWA) Development</b>
      </h2>
      <div className="text-base md:text-lg">
        <p className="mt-5">
          Our company FrameworkTeam Softwares excels in delivering feature-rich
          and high-performance Progressive Web Applications (PWAs) by leveraging
          modern technologies like Next.js (TypeScript), Tailwind CSS, Shadcn
          component library, Firebase Firebase and generative AI. PWAs bridge
          the gap between web and native applications, offering a seamless user
          experience across various devices. Using Next.js, we ensure superior
          performance through server-side rendering (SSR) and static site
          generation (SSG), optimizing loading times and enhancing SEO
          capabilities. With Tailwind CSS, we craft visually appealing,
          responsive designs that adapt to screens of all sizes.{" "}
        </p>
        <p className="mt-5">
          Our expertise extends to Firebase, which enables secure user
          authentication, real-time database integration, and cloud storage for
          scalable backend solutions. We also utilize Shadcn for building
          reusable and accessible components, ensuring a consistent and
          professional user interface. By integrating TypeScript into our
          development process, we deliver robust, error-free, and maintainable
          codebases. Additionally, we streamline deployment through platforms
          like Vercel and Firebase Hosting, ensuring efficient hosting and
          seamless updates with CI/CD pipelines.
        </p>
        <p className="mt-5">
          At FrameworkTeam Softwares, we aim to create PWAs that provide
          native-like performance, offline support, and engaging user
          experiences, helping your business stay ahead in a rapidly evolving
          digital landscape.
        </p>
      </div>
    </section>
  );
}
