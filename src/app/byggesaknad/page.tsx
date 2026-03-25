import { Metadata } from "next";
import Link from "next/link";
import { FadeInUp } from "@/components/ui/animations";
import { IconCalculator } from "@/components/icons";
import { FAQSchema, BreadcrumbSchema, ArticleSchema } from "@/components/seo/JsonLd";

const faq = [
  { question: "Hva koster en byggesøknad?", answer: "Kommunale gebyrer for byggesøknad varierer fra 10 000 til 60 000 kr avhengig av kommune og prosjekt. I tillegg trengs ansvarlig søker: 15 000-40 000 kr. Totalt: 25 000-100 000 kr for komplett byggesøknad." },
  { question: "Kan man bygge 50 m² uten å søke?", answer: "Frittliggende garasje, bod eller uthus inntil 50 m² kan bygges uten søknad (men MÅ meldes), forutsatt mønehøyde under 4m og min. 1m fra nabogrense. Boliger og tilbygg krever ALLTID søknad uavhengig av størrelse." },
  { question: "Kan man bygge 15 m² uten å søke?", answer: "Frittliggende småbygg (bod, uthus) under 15 m² kan bygges uten søknad og uten å melde til kommunen, forutsatt at avstand til nabogrense er min. 1m. Gjelder IKKE tilbygg, bolig eller bruksendring." },
  { question: "Hvor lang tid tar en byggesøknad?", answer: "Kommunen har 3 ukers frist for enkle tiltak og 12 ukers frist for søknader med dispensasjon eller reguleringsendring. I praksis tar det ofte 4-8 uker. Mangelfull søknad kan forsinke prosessen med uker." },
  { question: "Hva koster ansvarlig søker?", answer: "Ansvarlig søker (arkitekt eller bygningskonsulent) koster typisk 15 000-40 000 kr for tilbygg/enklere prosjekter og 30 000-80 000 kr for nybygg. Ansvarlig søker er påkrevd for alle søknadspliktige tiltak." },
  { question: "Trenger jeg byggesøknad for bad?", answer: "Vanlig oppussing av eksisterende bad krever normalt IKKE søknad. Men nytt bad der det ikke var bad før, eller vesentlig endring av bærende konstruksjon eller rørførsel, kan kreve søknad." },
  { question: "Trenger jeg byggesøknad for terrasse?", answer: "Terrasse under 1 meter over bakken er normalt unntatt søknad. Over 1 meter krever søknad. Overbygd terrasse (med tak) regnes som tilbygg og krever alltid søknad." },
  { question: "Hva skjer hvis jeg bygger uten søknad?", answer: "Å bygge uten påkrevd søknad er ulovlig og kan føre til: tvangsmulkt, krav om riving, dagbøter, problemer med forsikring, og vanskeligheter ved boligsalg. Kommunen kan kreve at ulovlige tiltak fjernes." },
  { question: "Hva er forskjellen på melding og søknad?", answer: "Melding betyr at du informerer kommunen om tiltaket (f.eks. garasje under 50 m²). Kommunen kan ikke nekte, men kan gi merknader. Søknad betyr at kommunen må godkjenne tiltaket før du starter. Søknad krever ansvarlig søker." },
  { question: "Kan man bygge helt inntil nabogrense?", answer: "Hovedregelen er 4 meter avstand fra nabogrense for søknadspliktige tiltak. Frittliggende småbygg under 50 m² kan bygges ned til 1 meter. Bygge på nabogrensen (0m) krever alltid nabosamtykke og dispensasjon fra kommunen." },
];

export const metadata: Metadata = { title: "Byggesøknad – Trenger du søknad? Guide og priser 2026", description: "Komplett guide til byggesøknad i Norge. Hva koster det, når trengs det, hvor lang tid tar det. Se regler for garasje, tilbygg, bad og terrasse.", alternates: { canonical: "https://byggepris.no/byggesaknad" }, openGraph: { title: "Byggesøknad – trenger du søknad?", description: "Komplett guide til byggesøknad.", url: "https://byggepris.no/byggesaknad", type: "article" } };

export default function Page() {
  return (<main className="pt-20"><BreadcrumbSchema items={[{name:"Hjem",href:"/"},{name:"Byggesøknad",href:"/byggesaknad"}]} /><ArticleSchema title="Byggesøknad guide" description="Komplett guide til byggesøknad i Norge." slug="byggesaknad" /><FAQSchema items={faq} /><article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14"><FadeInUp>
    <nav className="text-sm text-text-muted mb-6"><Link href="/" className="hover:text-accent-yellow">Hjem</Link> / <span className="text-text-secondary">Byggesøknad</span></nav>
    <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-text-primary mb-6">Byggesøknad – trenger du søknad?</h1>
    <p className="text-lg text-text-secondary mb-6">En byggesøknad koster typisk 25 000-100 000 kr totalt (kommunale gebyrer + ansvarlig søker) og tar 4-12 uker. Mange prosjekter krever søknad, men noen mindre tiltak er unntatt. Her er en komplett oversikt over reglene.</p>

    <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">Når trengs byggesøknad?</h2>
    <div className="space-y-3 my-6">
      {[
        { t: "Alltid søknadsplikt", items: "Nybygg (bolig, hytte), tilbygg til bolig, påbygg (ny etasje), bruksendring, endring av bærende konstruksjon, nye våtrom, fasadeendring", color: "text-accent-yellow" },
        { t: "Søknadsfritt med melding", items: "Frittliggende garasje/uthus 15-50 m² (mønehøyde under 4m, min 1m fra nabogrense), terrasse under 1m over bakken", color: "text-accent-amber" },
        { t: "Søknadsfritt uten melding", items: "Frittliggende småbygg under 15 m² (min 1m fra nabogrense), mindre fasadeendringer, vanlig vedlikehold og oppussing", color: "text-steel-400" },
      ].map((item) => (
        <div key={item.t} className="bg-bg-card border border-surface-border rounded-xl p-5">
          <p className={`font-display font-bold mb-2 ${item.color}`}>{item.t}</p>
          <p className="text-sm text-text-secondary">{item.items}</p>
        </div>
      ))}
    </div>

    <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">Kostnader for byggesøknad</h2>
    <div className="bg-bg-card border border-surface-border rounded-xl overflow-hidden my-6"><table className="w-full text-sm"><thead><tr className="text-left text-xs text-text-muted uppercase tracking-wider border-b border-surface-border"><th className="px-5 py-3">Kostnad</th><th className="px-5 py-3">Typisk pris</th></tr></thead><tbody className="divide-y divide-surface-border">
      {[["Kommunalt gebyr (enkel søknad)","10 000–25 000 kr"],["Kommunalt gebyr (nybygg)","25 000–60 000 kr"],["Ansvarlig søker (tilbygg)","15 000–40 000 kr"],["Ansvarlig søker (nybygg)","30 000–80 000 kr"],["Tegninger/arkitekt","15 000–100 000 kr"],["Nabovarsel og dokumenter","2 000–5 000 kr"],["Totalt enkel søknad (tilbygg)","25 000–70 000 kr"],["Totalt komplett (nybygg)","60 000–200 000 kr"]].map(([j,p])=>(<tr key={j}><td className="px-5 py-3 text-text-primary font-medium">{j}</td><td className="px-5 py-3 font-mono text-accent-yellow">{p}</td></tr>))}
    </tbody></table></div>

    <div className="mt-10"><Link href="/kalkulator" className="inline-flex items-center gap-2 px-6 py-3 bg-accent-yellow text-bg-primary font-display font-bold rounded-xl hover:bg-accent-warm transition-colors shadow-glow-sm"><IconCalculator size={18} /> Beregn ditt prosjekt</Link></div>
  </FadeInUp></article></main>);
}
