import type { MetadataRoute } from "next";

const siteUrl = process.env.SITE_URL ?? "http://localhost:3000";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["/", "/privacy", "/terms"].map((path) => ({
    url: new URL(path, siteUrl).toString(),
  }));
}
