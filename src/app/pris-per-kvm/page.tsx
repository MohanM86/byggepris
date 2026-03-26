import { Metadata } from "next";
import Link from "next/link";
import { FadeInUp } from "@/components/ui/animations";
import { IconCalculator } from "@/components/icons";
import { FAQSchema, BreadcrumbSchema, ArticleSchema } from "@/components/seo/JsonLd";

const faq = [
  { question: "Hva er pris per m² for nybygg?", answer: "Gjennomsnittlig m² pris for nybygg i Norge er 35 000–40 000 kr med normal standard. Enkel koster 25 000–30 000 kr per m² og høy koster 45 000–55 000 kr per m². Oslo er 10–15 % over snittet." },
  { question: "Hva er pris per m² for oppussing?", answer: "Oppussing koster 8 000–25 000 kr per m². Overflateoppussing med maling og gulv koster 5 000–10 000 kr per m². Med nytt bad eller kjøkken koster det 15 000–25 000 kr per m²." },
  { question: "Hva er pris per m² for bad?", answer: "Bad er det dyreste rommet med 40 000–80 000 kr per m². Et bad på 6 m² koster 240 000–480 000 kr. Høy pris skyldes mange fagfolk, strenge krav til våtromssikring og dyre materialer." },
  { question: "Hva er pris per m² for tilbygg?", answer: "Tilbygg koster 35 000–65 000 kr per m², noe dyrere enn nybygg fordi du må tilpasse deg eksisterende konstruksjon. Tilbygg med bad er dyrest med 45 000–65 000 kr per m²." },
  { question: "Hva er pris per m² for kjøkken?", answer: "Kjøkkenrenovering koster 25 000–70 000 kr per m². IKEA kjøkken koster 20 000–35 000 kr per m², norsk merke 35 000–55 000 kr per m² og skreddersydd 50 000–70 000 kr pluss." },
  { question: "Hva er pris per m² for garasje?", answer: "Garasje koster 15 000–35 000 kr per m². Ferdiggarasje er rimeligst med 12 000–20 000 kr per m². Isolert stedsbygd koster 20 000–30 000 kr per m² og murgarasje 25 000–35 000 kr per m²." },
  { question: "Hvorfor varierer m² prisen så mye?", answer: "De største faktorene er standard som kan doble prisen, beliggenhet der Oslo er 15 % dyrere, kompleksitet der enkle former er billigst, og om prosjektet inkluderer våtrom som er dyrest per m²." },
  { question: "Hva er pris per m² for terrasse?", answer: "Terrasse koster 2 000–7 000 kr per m². Trykkimpregnert koster 1 500–3 000 kr, kompositt 3 000–5 000 kr og Kebony 4 000–6 000 kr per m². Inkl. bærekonstruksjon og montering." },
  { question: "Hva er pris per m² for maling?", answer: "Innvendig maling koster 80–200 kr per m² veggflate. Utvendig koster 300–600 kr per m² fasadeflate. Maling er det billigste oppussingstiltaket per m² men gir mest visuell effekt." },
  { question: "Hvor mye koster det å bygge per m² i Oslo vs resten?", answer: "Oslo er 10–15 % dyrere enn landssnittet. En enebolig som koster 37 000 kr per m² nasjonalt koster ca. 41 000–43 000 kr per m² i Oslo. Bergen og Trondheim er 3–5 % over snittet." },
];

export const metadata: Metadata = {
  title: "Pris per m² for alle byggeprosjekter i Norge 2026",
  description: "Komplett oversikt over pris per m² for nybygg, bad, kjøkken, oppussing, tilbygg og mer. Se hva det koster per kvadratmeter.",
  alternates: { canonical: "https://byggepris.no/pris-per-kvm" },
};

export default function Page() {
  return (
    <main className="pt-20"><BreadcrumbSchema items={[{name:"Hjem",href:"/"},{name:"Pris per m²",href:"/pris-per-kvm"}]} /><ArticleSchema title="Pris per m²" description="Komplett m² prisoversikt." slug="pris-per-kvm" /><FAQSchema items={faq} /><article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14"><FadeInUp>
      <nav className="text-sm text-text-muted mb-6"><Link href="/" className="hover:text-accent-yellow">Hjem</Link> / <span className="text-text-secondary">Pris per m²</span></nav>
      <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-text-primary mb-4">Pris per m² for alle byggeprosjekter</h1>
      <p className="text-lg text-text-secondary mb-8">M² prisen varierer enormt basert på prosjekttype, fra 80 kr per m² for innvendig maling til 80 000 kr per m² for luksuriøst bad. Her er en komplett oversikt som hjelper deg å budsjettere riktig.</p>
      <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">Komplett m² prisoversikt</h2>
      <div className="bg-bg-card border border-surface-border rounded-2xl overflow-hidden my-6">
        <table className="w-full text-sm"><thead><tr className="text-left text-xs text-text-muted uppercase tracking-wider border-b border-surface-border"><th className="px-5 py-3">Prosjekttype</th><th className="px-5 py-3">Lav</th><th className="px-5 py-3">Normal</th><th className="px-5 py-3">Høy</th></tr></thead>
          <tbody className="divide-y divide-surface-border">
            {[["Bad","35 000","55 000","80 000"],["Kjøkken","20 000","40 000","70 000"],["Tilbygg","28 000","45 000","65 000"],["Nybygg enebolig","25 000","37 000","55 000"],["Totalrenovering","12 000","25 000","40 000"],["Hytte","20 000","35 000","50 000"],["Kjeller (innredning)","15 000","25 000","35 000"],["Garasje","12 000","22 000","35 000"],["Oppussing","6 000","15 000","25 000"],["Terrasse","1 500","4 000","7 000"],["Tak (omlegging)","800","1 500","4 000"],["Fasade (maling)","300","450","600"],["Gulv","400","800","1 500"],["Maling innvendig","80","140","200"]].map(([n,l,m,h])=>(
              <tr key={n}><td className="px-5 py-3 text-text-primary font-medium">{n}</td><td className="px-5 py-3 font-mono text-text-secondary">{l} kr</td><td className="px-5 py-3 font-mono text-accent-yellow">{m} kr</td><td className="px-5 py-3 font-mono text-text-secondary">{h} kr</td></tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-10"><Link href="/kalkulator" className="inline-flex items-center gap-2 px-6 py-3 bg-accent-yellow text-bg-primary font-display font-bold rounded-xl hover:bg-accent-warm transition-colors shadow-glow-sm"><IconCalculator size={18} /> Beregn ditt prosjekt</Link></div>
    </FadeInUp></article></main>
  );
}
