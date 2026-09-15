import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "The Oasis School Panjgur",
    short_name: "The Oasis",
    description:
      "The Oasis School in Panjgur, Balochistan — academics, student life, history, admissions and school information.",
    start_url: "/",
    display: "standalone",
    background_color: "#f7f3e8",
    theme_color: "#0a3f34",
    lang: "en-PK",
    orientation: "portrait-primary",
    icons: [
      {
        src: "/oasis-logo-v2.webp",
        sizes: "any",
        type: "image/webp",
        purpose: "any",
      },
    ],
  };
}
