import type { Metadata } from "next";
import "./globals.css";
import { SiteFooter, SiteHeader } from "@/components/site-shell";
import { school } from "@/lib/site-data";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? school.website;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "The Oasis School | Panjgur",
    template: "%s | The Oasis School",
  },
  description: "The Oasis School Panjgur — English-medium education, communication, computing, reading and a long educational legacy in Balochistan.",
  keywords: [
    "The Oasis School",
    "The Oasis School Panjgur",
    "The Oasis Academy Panjgur",
    "Panjgur school",
    "Balochistan education",
    "Sir Zahir Hussain",
  ],
  openGraph: {
    title: "The Oasis School — Panjgur",
    description: "A legacy of learning, confidence and opportunity in Panjgur, Balochistan.",
    type: "website",
    url: siteUrl,
    siteName: "The Oasis School",
    locale: "en_PK",
    images: [
      {
        url: "/gallery/1000065063.webp",
        width: 1536,
        height: 1152,
        alt: "Students at The Oasis School, Panjgur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Oasis School — Panjgur",
    description: "Learning, confidence and opportunity in Panjgur, Balochistan.",
    images: ["/gallery/1000065063.webp"],
  },
  icons: {
    icon: "/oasis-logo.webp",
    apple: "/oasis-logo.webp",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "School",
  name: school.name,
  alternateName: school.shortName,
  url: siteUrl,
  logo: `${siteUrl}/oasis-logo.webp`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Panjgur",
    addressRegion: "Balochistan",
    addressCountry: "PK",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
