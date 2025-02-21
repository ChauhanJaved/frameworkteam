// External imports
import Link from "next/link";

interface PropsFooter {
  companyName: string;
  copyrightYear: string;
}

export default function Footer(props: PropsFooter) {
  return (
    <footer className="mt-10 border-t">
      <div className="mx-5 mb-16 mt-5 flex flex-col items-center gap-1 text-center text-base sm:mx-7 md:mx-9 lg:mx-11">
        <p>
          © {props.copyrightYear}
          {", "}
          {props.companyName}
        </p>
        <div className="flex flex-row gap-1">
          <Link href="/terms-of-use">Terms of Use</Link>
          <span className="mx-2">|</span>
          <Link href="/privacy-policy">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}
