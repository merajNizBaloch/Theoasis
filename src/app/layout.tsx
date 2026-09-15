import type { Metadata } from "next";
import "./globals.css";
import { SiteFooter, SiteHeader } from "@/components/site-shell";

export const metadata: Metadata = {
  title: {
    default: "The Oasis Academy | Panjgur",
    template: "%s | The Oasis Academy",
  },
  description: "The Oasis Academy Panjgur — a legacy of English education, academic opportunity and learning in Balochistan.",
  keywords: ["The Oasis Academy", "Oasis Academy Panjgur", "Panjgur school", "Balochistan education", "Sir Zahir Hussain"],
  openGraph: {
    title: "The Oasis Academy — Panjgur",
    description: "A legacy of learning in Panjgur, Balochistan.",
    type: "website",
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
