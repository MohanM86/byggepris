import { Metadata } from "next";
import Calculator from "@/components/calculator/Calculator";
import { SoftwareAppSchema, BreadcrumbSchema } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Byggekalkulator – Beregn byggekostnad gratis",
  description: "Gratis byggekalkulator for norske byggeprosjekter. Beregn kostnad for nybygg, tilbygg, oppussing, bad, kjøkken og mer. Realistiske prisestimater basert på m².",
  alternates: { canonical: "https://byggepris.no/kalkulator" },
  openGraph: { title: "Gratis byggekalkulator", description: "Beregn byggekostnad for ditt prosjekt.", url: "https://byggepris.no/kalkulator" },
};

export default function KalkulatorPage() {
  return (
    <main className="pt-20">
      <BreadcrumbSchema items={[{ name: "Hjem", href: "/" }, { name: "Kalkulator", href: "/kalkulator" }]} />
      <SoftwareAppSchema />
      <Calculator />
    </main>
  );
}
