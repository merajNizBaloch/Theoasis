import type { MetadataRoute } from "next";
import { school } from "@/lib/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? school.website;
  return ["", "/about", "/history", "/academics", "/student-life", "/gallery", "/admissions", "/contact"].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path === "/admissions" || path === "/contact" ? 0.9 : 0.8,
  }));
}
