import type { MetadataRoute } from "next";
import { tests } from "@/lib/tests";
import { guidePosts } from "@/lib/guides";
import { compareEntries } from "@/lib/compareData";
import { allAddOns } from "@/lib/addOnsData";

const siteUrl = "https://www.c-bridge.uk";

const staticRoutes = [
  "",
  "about",
  "all-books",
  "business",
  "celban",
  "chinese",
  "compare",
  "consultation",
  "elpac",
  "employment",
  "exams",
  "faa-english",
  "faq",
  "finder",
  "guides",
  "japanese",
  "met",
  "nclex",
  "oet",
  "pricing",
  "privacy",
  "professional",
  "professional-grad",
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

  const compareEntriesSitemap: MetadataRoute.Sitemap = compareEntries.map((c) => ({
    url: `${siteUrl}/compare/${c.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const addOnEntries: MetadataRoute.Sitemap = allAddOns.map((a) => ({
    url: `${siteUrl}/books/${a.testSlug}/addons/${a.id}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  return [...staticEntries, ...testEntries, ...guideEntries, ...compareEntriesSitemap, ...addOnEntries];
}
