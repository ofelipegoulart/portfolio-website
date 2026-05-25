import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://felipegoulart.dev",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    // Se tiver mais páginas no futuro, adicione aqui:
    // {
    //   url: "https://felipegoulart.dev/blog",
    //   lastModified: new Date(),
    //   changeFrequency: "weekly",
    //   priority: 0.8,
    // },
  ];
}