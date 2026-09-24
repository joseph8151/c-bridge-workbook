import type { MetadataRoute } from "next";
import { tests } from "@/lib/tests";
import { guidePosts } from "@/lib/guides";

const siteUrl = "https://www.c-bridge.uk";

const staticRoutes = [
  "",
  "about",
  "all-books",
  "chinese",
  "consultation",
  "elpac",
  "employment",
  "exams",
  "faa-english",
  "faq",
  "guides",
  "japanese",
  "nclex",
  "oet",
  "pricing",
  "privacy",
  "professional",
  "recommend",
  "resources",
  "spa",
  "study-abroad",
  "terms",
  "toles",
  "topec",
  "versant",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((path) => ({
    url: path ? `${siteUrl}/${path}` : siteUrl,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));

  const testEntries: MetadataRoute.Sitemap = tests.map((t) => ({
    url: `${siteUrl}/books/${t.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const guideEntries: MetadataRoute.Sitemap = guidePosts.map((g) => ({
    url: `${siteUrl}/guides/${g.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticEntries, ...testEntries, ...guideEntries];
}
