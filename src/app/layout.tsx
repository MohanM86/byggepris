import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://byggepris.no"),
  title: {
    default: "Byggepris.no – Sjekk byggepris og oppussingskostnad i Norge",
    template: "%s | Byggepris.no",
  },
  description:
    "Norges mest komplette prisguide for bygging, renovering og oppussing. Gratis kalkulator, oppdaterte m²-priser og realistiske kostnadsestimater for alle byggeprosjekter.",
  keywords: [
    "byggepris", "byggekostnad", "pris per m2", "hva koster det å bygge hus",
    "oppussingspris", "renoveringskostnad", "tilbygg pris", "bad kostnad",
    "kjøkken pris", "totalrenovering", "byggekalkulator", "bygge hus pris",
  ],
  openGraph: {
    type: "website",
    locale: "nb_NO",
    url: "https://byggepris.no",
    siteName: "Byggepris.no",
    title: "Byggepris.no – Sjekk byggepris og oppussingskostnad i Norge",
    description: "Norges mest komplette prisguide for bygging, renovering og oppussing. Gratis kalkulator og oppdaterte priser.",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://byggepris.no",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Byggepris.no",
    url: "https://byggepris.no",
    description: "Norges mest komplette prisguide for bygging, renovering og oppussing.",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://byggepris.no/byggepriser?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang="nb">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body bg-bg-primary text-text-primary antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
