import { Metadata } from "next";
import Link from "next/link";
import PriceIntelligence from "@/components/sections/PriceIntelligence";
import CategoryGrid from "@/components/sections/CategoryGrid";
import FAQAccordion from "@/components/sections/FAQAccordion";
import { FadeInUp } from "@/components/ui/animations";
import { IconCalculator } from "@/components/icons";
import { FAQSchema, BreadcrumbSchema } from "@/components/seo/JsonLd";

const faq = [
  { question: "Hva er gjennomsnittlig byggepris per m² i Norge?", answer: "Gjennomsnittlig byggepris for nybygg er ca. 35 000-40 000 kr per m² med normal standard. Enkel standard starter fra 25 000 kr/m², høy standard 45 000-55 000 kr/m². Prisen varierer med beliggenhet, standard og prosjekttype." },
  { question: "Hva er kvadratmeterprisen på nybygg?", answer: "Kvadratmeterprisen for nybygg i Norge er 30 000-55 000 kr avhengig av standard. Ferdighus ligger i nedre sjikt (25 000-40 000 kr/m²), arkitekttegnet i øvre (35 000-55 000 kr/m²). Oslo er 10-15% dyrere enn landssnittet." },
  { question: "Hvorfor varierer byggeprisene så mye?", answer: "Byggepriser påvirkes av standard (kan doble prisen), beliggenhet (Oslo 10-15% dyrere), kompleksitet (enkle former er billigst), grunnforhold (fjell/leire koster ekstra), og markedsforhold (tilgang på håndverkere)." },
  { question: "Hvor mye koster det å bygge hus i 2026?", answer: "I 2026 koster det typisk 4,5-8,5 millioner kr å bygge en enebolig på 150 m² i Norge, avhengig av standard og beliggenhet. M²-pris: 30 000-55 000 kr. Ferdighus fra ca. 3,5 millioner." },
  { question: "Hva koster det å bygge 100 m²?", answer: "Et hus på 100 m² koster 3-5,5 mill. kr. Totalrenovering av 100 m² koster 1,5-4 mill. kr. Tilbygg på 100 m² er sjelden, men 50 m² tilbygg koster 1,75-3,25 mill. kr." },
  { question: "Stiger byggeprisene?", answer: "Ja, byggekostnadene i Norge stiger typisk 3-5% per år. SSBs byggekostnadsindeks viser jevn økning. Materialpriser stabiliserte seg etter toppen i 2021-2022, men lønnskostnader for håndverkere fortsetter å stige." },
  { question: "Hva er timepris for arkitekt?", answer: "Timepris for arkitekt i Norge er typisk 1 200-2 000 kr inkl. mva. Et komplett prosjekteringsoppdrag for enebolig koster 250 000-500 000 kr (5-10% av byggekostnad). Enklere oppdrag som tegning av tilbygg koster fra 30 000 kr." },
  { question: "Hva koster en byggetillatelse?", answer: "Kommunale gebyrer for byggetillatelse varierer fra 10 000 til 60 000 kr avhengig av kommune og prosjektets størrelse. I tillegg trenger du ansvarlig søker (15 000-40 000 kr). Totalt for byggesøknad: 25 000-100 000 kr." },
  { question: "Hva koster det å bygge på 20 m²?", answer: "Et tilbygg på 20 m² koster typisk 700 000-1 300 000 kr. En garasje på 20 m² koster 300 000-700 000 kr. Pris per m² er høyere for små prosjekter fordi faste kostnader fordeles på færre kvadratmeter." },
  { question: "Hvor ofte oppdateres prisene på Byggepris.no?", answer: "Vi oppdaterer prisdata jevnlig basert på markedsdata, SSB-statistikk og bransjeinformasjon. Alle priser er veiledende og bør suppleres med konkrete tilbud for ditt spesifikke prosjekt." },
];

export const metadata: Metadata = {
  title: "Byggepriser i Norge – Komplett prisoversikt 2026",
  description: "Oppdatert oversikt over byggepriser i Norge. Se pris per m² for nybygg, oppussing, tilbygg, bad, kjøkken og mer. Gratis kalkulator.",
  alternates: { canonical: "https://byggepris.no/byggepriser" },
  openGraph: { title: "Byggepriser i Norge 2026", description: "Komplett prisoversikt for alle byggeprosjekter.", url: "https://byggepris.no/byggepriser", type: "website" },
};

export default function Byggepriser() {
  return (
    <main className="pt-20">
      <BreadcrumbSchema items={[{ name: "Hjem", href: "/" }, { name: "Byggepriser", href: "/byggepriser" }]} />
      <FAQSchema items={faq} />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <FadeInUp>
          <nav className="text-sm text-text-muted mb-6"><Link href="/" className="hover:text-accent-yellow">Hjem</Link> / <span className="text-text-secondary">Byggepriser</span></nav>
          <h1 className="font-display font-extrabold text-4xl lg:text-display-md text-text-primary mb-4">Byggepriser i Norge</h1>
          <p className="text-lg text-text-secondary max-w-3xl mb-4">
            Byggepriser i Norge varierer fra 8 000 kr per m² for enkel oppussing til over 80 000 kr per m² for luksuriøst bad. Gjennomsnittlig m²-pris for nybygg er 35 000-40 000 kr med normal standard. Her finner du en komplett oversikt over hva ulike byggeprosjekter koster.
          </p>
          <p className="text-text-secondary max-w-3xl mb-4">
            De viktigste faktorene som påvirker prisen er prosjekttype, standard, beliggenhet og kompleksitet. Oslo er typisk 10-15% dyrere enn landsgjennomsnittet. Ferdighus er 15-25% rimeligere enn arkitekttegnet.
          </p>

          <div className="bg-bg-card border border-surface-border rounded-2xl overflow-hidden my-8">
            <div className="p-6 border-b border-surface-border"><h2 className="font-display font-bold text-lg text-text-primary">Hurtigoversikt: m²-priser for alle prosjekttyper</h2></div>
            <table className="w-full text-sm">
              <thead><tr className="text-left text-xs text-text-muted uppercase tracking-wider border-b border-surface-border"><th className="px-5 py-3">Prosjekttype</th><th className="px-5 py-3">Lav</th><th className="px-5 py-3">Normal</th><th className="px-5 py-3">Høy</th><th className="px-5 py-3">Typisk totalpris</th></tr></thead>
              <tbody className="divide-y divide-surface-border">
                {[
                  { name: "Nybygg enebolig", low: "25 000", mid: "35 000", high: "55 000", total: "3,6–11 mill." },
                  { name: "Tilbygg", low: "28 000", mid: "45 000", high: "65 000", total: "525k–3,25 mill." },
                  { name: "Bad", low: "35 000", mid: "55 000", high: "80 000", total: "160k–960k" },
                  { name: "Kjøkken", low: "20 000", mid: "40 000", high: "70 000", total: "200k–1,4 mill." },
                  { name: "Totalrenovering", low: "12 000", mid: "25 000", high: "40 000", total: "1,2–7,2 mill." },
                  { name: "Oppussing", low: "6 000", mid: "15 000", high: "25 000", total: "400k–3,75 mill." },
                  { name: "Garasje", low: "12 000", mid: "22 000", high: "35 000", total: "375k–1,75 mill." },
                  { name: "Hytte", low: "20 000", mid: "35 000", high: "50 000", total: "1,5–6 mill." },
                  { name: "Flipping", low: "5 000", mid: "12 000", high: "20 000", total: "300k–2,4 mill." },
                ].map((r) => (
                  <tr key={r.name} className="hover:bg-bg-tertiary/30">
                    <td className="px-5 py-3 text-text-primary font-medium">{r.name}</td>
                    <td className="px-5 py-3 font-mono text-text-secondary">{r.low} kr</td>
                    <td className="px-5 py-3 font-mono text-accent-yellow">{r.mid} kr</td>
                    <td className="px-5 py-3 font-mono text-text-secondary">{r.high} kr</td>
                    <td className="px-5 py-3 font-mono text-text-tertiary text-xs">{r.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <Link href="/kalkulator" className="inline-flex items-center gap-2 px-5 py-3 bg-accent-yellow text-bg-primary font-display font-bold rounded-xl hover:bg-accent-warm transition-colors shadow-glow-sm">
            <IconCalculator size={18} /> Bruk kalkulatoren
          </Link>
        </FadeInUp>
      </section>
      <PriceIntelligence />
      <CategoryGrid />
      <FAQAccordion items={faq} title="Ofte stilte spørsmål om byggepriser" />
    </main>
  );
}
