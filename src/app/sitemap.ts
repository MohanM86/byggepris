import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://byggepris.no";
  const now = new Date().toISOString();

  const mainPages = [
    { url: baseUrl, lastModified: now, changeFrequency: "weekly" as const, priority: 1.0 },
    { url: `${baseUrl}/byggepriser`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${baseUrl}/byggekostnader`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${baseUrl}/kalkulator`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.95 },
    { url: `${baseUrl}/om-byggepris`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.5 },
  ];

  const categoryPages = [
    "bygge-hus", "tilbygg", "oppussing", "bad", "kjokken",
    "totalrenovering", "garasje", "hytte", "flipping",
    "terrasse", "tak", "vinduer", "gulv", "fasade", "kjeller", "drenering",
  ].map((slug) => ({
    url: `${baseUrl}/${slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  const infoPages = [
    "hva-koster-det-a-bygge-hus", "pris-per-kvm", "hva-pavirker-byggekostnad",
    "skjulte-kostnader-ved-oppussing", "bygge-nytt-vs-pusse-opp", "oppussing-for-salg",
    "elektriker", "rorlegger", "byggesaknad",
  ].map((slug) => ({
    url: `${baseUrl}/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const utilityPages = [
    { url: `${baseUrl}/personvern`, lastModified: now, changeFrequency: "yearly" as const, priority: 0.3 },
    { url: `${baseUrl}/vilkar`, lastModified: now, changeFrequency: "yearly" as const, priority: 0.3 },
  ];

  return [...mainPages, ...categoryPages, ...infoPages, ...utilityPages];
}
