import Link from "next/link";

export default function NotFound() {
  return (
    <section className="page-hero">
      <div className="page-hero__inner">
        <p className="eyebrow">404</p>
        <h1>That page isn&apos;t in the Oasis archive.</h1>
        <p>Return to the academy homepage and continue exploring.</p>
        <div style={{marginTop:28}}>
          <Link className="button button--light" href="/">Back to home</Link>
        </div>
      </div>
    </section>
  );
}
