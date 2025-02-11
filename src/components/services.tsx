//Internal imports
import SectionHeader from "@/components/section-header";
import { HeaderNavItems } from "@/data/website-data";

export default function Services() {
  return (
    <section
      id={HeaderNavItems.Services}
      className="container scroll-m-20 px-5 pt-10 lg:px-10 lg:pt-20 xl:max-w-screen-xl"
    >
      <SectionHeader
        caption="services"
        desc="Empowering Digital Excellence | Cutting-Edge Web Apps & Windows Apps | Robust Solutions Tailored to Your Needs"
        element="h2"
      />
      <h3 className="mt-10">
        <b>Web Application Development</b>
      </h3>
      <div>
        <p className="mt-3">
          At FrameworkTeam Softwares, we specialize in developing feature-rich,
          high-performance web applications using the latest technologies. Our
          expertise includes Next.js with TypeScript, Tailwind CSS for modern
          styling, Shadcn for sleek UI components, Firebase for scalable backend
          services, and generative AI for innovative user experiences.
        </p>
        <p className="mt-3">
          We build fast, responsive, and SEO-friendly web apps that deliver
          seamless performance across devices. By leveraging Next.js, we
          optimize speed through static site generation (SSG) and server-side
          rendering (SSR), ensuring smooth navigation and enhanced search
          visibility. With Tailwind CSS, we design visually appealing,
          mobile-friendly interfaces that adapt to any screen size.
        </p>
        <p className="mt-3">
          Our development process is backed by Firebase, enabling secure
          authentication, real-time data syncing, and cloud storage for scalable
          and reliable solutions. We also utilize Shadcn for reusable,
          accessible UI components, maintaining a consistent and professional
          design. By integrating TypeScript, we ensure a robust, error-free, and
          maintainable codebase.
        </p>
        <p className="mt-3">
          For deployment, we use platforms like Vercel and Firebase Hosting,
          streamlining updates with CI/CD pipelines for a hassle-free user
          experience.
        </p>
        <p className="mt-3">
          At FrameworkTeam Softwares, our goal is to build fast, secure, and
          engaging web applications that help your business stay ahead in the
          ever-evolving digital world.
        </p>
      </div>
      <h3 className="mt-10">
        <b>Windows Application Development</b>
      </h3>
      <div>
        <p className="mt-3">
          Our expertise in Windows Desktop Application development using .NET
          and C# empowers us to create robust, high-performing, and feature-rich
          solutions tailored to meet diverse business needs. By leveraging the
          .NET framework, we develop applications that are not only efficient
          and scalable but also secure and user-friendly. Our services include
          designing custom applications to address unique business challenges,
          modernizing legacy systems by transforming outdated software into
          advanced .NET-based solutions, and seamlessly integrating applications
          with third-party systems, databases, and APIs.
        </p>
        <p className="mt-3">
          We excel in building intuitive and visually appealing user interfaces
          using technologies like Windows Presentation Foundation (WPF),
          ensuring an enhanced user experience. Our team specializes in
          developing enterprise-grade solutions with multi-tiered architecture,
          offering advanced functionalities such as role-based access control,
          dynamic reporting, and offline capabilities. Additionally, we provide
          comprehensive maintenance and support services to ensure the seamless
          performance of your applications post-deployment, including regular
          updates to align with the latest technological advancements.
        </p>
        <p className="mt-3">
          With in-depth expertise in C# and a thorough understanding of Windows
          APIs and advanced .NET libraries, we are committed to delivering
          secure, reliable, and scalable desktop applications that drive
          efficiency and add value to your business.
        </p>
      </div>
    </section>
  );
}
