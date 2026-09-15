import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <section className="page-hero">
      <div className="page-hero__inner">
        <p className="eyebrow">404</p>
        <h1>That page could not be found.</h1>
        <p>Return to The Oasis School homepage and continue exploring.</p>
        <div style={{marginTop:28}}>
          <Link className="button button--light" href="/">Back to home</Link>
        </div>
      </div>
    </section>
  );
}
