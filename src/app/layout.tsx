import type { Metadata } from "next";
import "./globals.css";
import { SiteFooter, SiteHeader } from "@/components/site-shell";

export const metadata: Metadata = {
  title: {
    default: "The Oasis School | Panjgur",
    template: "%s | The Oasis School",
  },
  description: "The Oasis School Panjgur — a school with deep roots in English education, academic opportunity and learning in Balochistan.",
  keywords: ["The Oasis School", "The Oasis School Panjgur", "The Oasis Academy Panjgur", "Panjgur school", "Balochistan education", "Sir Zahir Hussain"],
  openGraph: {
    title: "The Oasis School — Panjgur",
    description: "A legacy of learning, confidence and opportunity in Panjgur, Balochistan.",
    type: "website",
  },
  icons: {
    icon: "/oasis-logo.webp",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
