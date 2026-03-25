// Server component - outputs JSON-LD script tags

interface FAQItem {
  question: string;
  answer: string;
}

export function FAQSchema({ items }: { items: FAQItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbSchema({ items }: { items: { name: string; href: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `https://byggepris.no${item.href}`,
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ArticleSchema({
  title,
  description,
  slug,
  datePublished = "2025-01-15",
  dateModified = "2025-03-25",
}: {
  title: string;
  description: string;
  slug: string;
  datePublished?: string;
  dateModified?: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: description,
    url: `https://byggepris.no/${slug}`,
    datePublished,
    dateModified,
    author: {
      "@type": "Organization",
      name: "Byggepris.no",
      url: "https://byggepris.no",
    },
    publisher: {
      "@type": "Organization",
      name: "Byggepris.no",
      url: "https://byggepris.no",
      logo: {
        "@type": "ImageObject",
        url: "https://byggepris.no/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://byggepris.no/${slug}`,
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebPageSchema({
  title,
  description,
  slug,
}: {
  title: string;
  description: string;
  slug: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url: `https://byggepris.no/${slug}`,
    isPartOf: {
      "@type": "WebSite",
      name: "Byggepris.no",
      url: "https://byggepris.no",
    },
    provider: {
      "@type": "Organization",
      name: "Byggepris.no",
      url: "https://byggepris.no",
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function SoftwareAppSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Byggepris Kalkulator",
    description: "Gratis byggekalkulator for norske byggeprosjekter. Beregn kostnad for nybygg, tilbygg, oppussing, bad, kjøkken og mer.",
    url: "https://byggepris.no/kalkulator",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "NOK",
    },
    provider: {
      "@type": "Organization",
      name: "Byggepris.no",
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
