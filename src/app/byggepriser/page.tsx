import { Metadata } from "next";
import Link from "next/link";
import PriceIntelligence from "@/components/sections/PriceIntelligence";
import CategoryGrid from "@/components/sections/CategoryGrid";
import FAQAccordion from "@/components/sections/FAQAccordion";
import { FadeInUp } from "@/components/ui/animations";
import { IconCalculator } from "@/components/icons";

export const metadata: Metadata = {
  title: "Byggepriser i Norge – Komplett prisoversikt",
  description: "Oppdatert oversikt over byggepriser i Norge. Se pris per m² for nybygg, oppussing, tilbygg, bad, kjøkken og mer. Gratis kalkulator og prisguider.",
  alternates: { canonical: "https://byggepris.no/byggepriser" },
};

export default function Byggepriser() {
  return (
    <main className="pt-20">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <FadeInUp>
          <nav className="text-sm text-text-muted mb-6">
            <Link href="/" className="hover:text-accent-yellow">Hjem</Link> / <span className="text-text-secondary">Byggepriser</span>
          </nav>
          <h1 className="font-display font-extrabold text-4xl lg:text-display-md text-text-primary mb-4">
            Byggepriser i Norge
          </h1>
          <p className="text-lg text-text-secondary max-w-3xl mb-4">
            Byggepriser i Norge varierer fra 8 000 kr per m² for enkel oppussing til over 55 000 kr per m² for nybygg med høy standard. De viktigste faktorene som påvirker prisen er prosjekttype, standard, beliggenhet og kompleksitet.
          </p>
          <p className="text-text-secondary max-w-3xl mb-8">
            Her finner du en komplett oversikt over hva ulike byggeprosjekter koster i Norge, med oppdaterte prisdata, m²-priser og realistiske budsjetteksempler.
          </p>
          <Link href="/kalkulator" className="inline-flex items-center gap-2 px-5 py-3 bg-accent-yellow text-bg-primary font-display font-bold rounded-xl hover:bg-accent-warm transition-colors shadow-glow-sm">
            <IconCalculator size={18} /> Bruk kalkulatoren
          </Link>
        </FadeInUp>
      </section>
      <PriceIntelligence />
      <CategoryGrid />
      <FAQAccordion items={[
        { question: "Hva er gjennomsnittlig byggepris per m² i Norge?", answer: "Gjennomsnittlig byggepris for nybygg er ca. 35 000-40 000 kr per m² med normal standard. Prisen varierer fra 25 000 kr/m² for enkel standard til over 55 000 kr/m² for luksuriøs standard." },
        { question: "Hvorfor varierer byggeprisene så mye?", answer: "Byggepriser påvirkes av mange faktorer: standard, beliggenhet, kompleksitet, materialvalg, grunnforhold, og tilgjengelighet på håndverkere. Oslo er typisk 10-15% dyrere enn landsgjennomsnittet." },
        { question: "Hvor ofte oppdateres prisene?", answer: "Vi oppdaterer prisdata jevnlig basert på markedsdata, SSB-statistikk og bransjeinformasjon for å gi mest mulig aktuelle estimater." },
      ]} />
    </main>
  );
}
