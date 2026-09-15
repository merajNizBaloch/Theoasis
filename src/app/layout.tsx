import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SiteFooter, SiteHeader } from "@/components/site-shell";
import { school } from "@/lib/site-data";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? school.website;
const socialImage = "/gallery/1000065063.webp";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0a3f34",
  colorScheme: "light",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "The Oasis School",
  title: {
    default: "The Oasis School Panjgur | Education in Balochistan",
    template: "%s | The Oasis School",
  },
  description:
    "The Oasis School in Panjgur, Balochistan — English-medium learning, science, arts, computing, reading, student activities and a long educational legacy.",
  keywords: [
    "The Oasis School Panjgur",
    "The Oasis Panjgur",
    "Oasis Academy Panjgur",
    "school in Panjgur",
    "private school Panjgur",
    "English medium school Panjgur",
    "education in Panjgur",
    "Balochistan school",
    "Sir Zahir Hussain",
  ],
  authors: [{ name: "The Oasis School" }],
  creator: "The Oasis School",
  publisher: "The Oasis School",
  category: "education",
  formatDetection: {
    telephone: true,
    address: true,
    email: false,
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "The Oasis School Panjgur",
    description:
      "Learning, confidence and opportunity at The Oasis School in Panjgur, Balochistan.",
    type: "website",
    url: siteUrl,
    siteName: "The Oasis School",
    locale: "en_PK",
    images: [
      {
        url: socialImage,
        width: 1536,
        height: 1152,
        alt: "Students at The Oasis School, Panjgur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Oasis School Panjgur",
    description:
      "Learning, confidence and opportunity at The Oasis School in Panjgur, Balochistan.",
    images: [socialImage],
  },
  icons: {
    icon: [
      { url: "/oasis-logo-v2.webp", type: "image/webp" },
    ],
    apple: "/oasis-logo-v2.webp",
    shortcut: "/oasis-logo-v2.webp",
  },
  manifest: "/manifest.webmanifest",
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "The Oasis School",
      alternateName: "The Oasis",
      inLanguage: "en-PK",
      publisher: {
        "@id": `${siteUrl}/#school`,
      },
    },
    {
      "@type": "School",
      "@id": `${siteUrl}/#school`,
      name: school.name,
      alternateName: school.shortName,
      url: siteUrl,
      logo: `${siteUrl}/oasis-logo-v2.webp`,
      image: `${siteUrl}${socialImage}`,
      description:
        "The Oasis School is an educational institution in Panjgur, Balochistan, with roots in English-language learning and a wider tradition of school education, computing, reading and student development.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Panjgur",
        addressRegion: "Balochistan",
        addressCountry: "PK",
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Panjgur, Balochistan",
      },
      founder: {
        "@type": "Person",
        name: "Sir Zahir Hussain",
      },
      employee: {
        "@type": "Person",
        name: school.principal.name,
        jobTitle: school.principal.title,
        sameAs: school.principal.linkedin,
      },
      hasMap: school.mapsUrl,
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-PK">
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
