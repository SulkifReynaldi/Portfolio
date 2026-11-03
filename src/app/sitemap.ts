import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://portfolio-developer.vercel.app";

  return [
    {
      url: `${baseUrl}/`,
      lastModified: "2026-11-03",
      changeFrequency: "monthly",
      priority: 1.0,
    },
  ];
}
