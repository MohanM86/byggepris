import { Metadata } from "next";
import Link from "next/link";
import { FadeInUp } from "@/components/ui/animations";
import { IconCalculator } from "@/components/icons";
import { FAQSchema, BreadcrumbSchema, ArticleSchema } from "@/components/seo/JsonLd";

const faq = [
  { question: "Hva koster nytt gulv per m²?", answer: "Nytt gulv koster typisk 400-1 500 kr per m² inkl. legging. Vinyl: 400-700 kr/m². Laminat: 500-800 kr/m². Parkett: 700-1 500 kr/m². Fliser: 800-2 000 kr/m². Prisen inkluderer materialer og arbeid." },
  { question: "Hva koster det å legge gulv i hele huset?", answer: "For et hus på 120 m²: vinyl 48 000-84 000 kr, laminat 60 000-96 000 kr, parkett 84 000-180 000 kr. Prisen avhenger av materiale, underlag og om gammelt gulv må fjernes." },
  { question: "Er parkett bedre enn laminat?", answer: "Parkett er dyrere (700-1 500 kr/m² vs 300-600 kr/m² for materiale), men varer lenger (30-50 år vs 10-20 år) og kan slipes og lakkes om. Parkett øker også boligverdien mer. Laminat er rimelig og lett å legge selv." },
  { question: "Hva koster det å legge parkett?", answer: "Parkett koster 700-1 500 kr per m² inkl. legging. Materiale alene: 400-1 000 kr/m². Legging: 200-500 kr/m². For en stue på 30 m²: 21 000-45 000 kr komplett." },
  { question: "Kan man legge nytt gulv oppå gammelt?", answer: "Ja, i mange tilfeller. Vinyl og laminat kan legges oppå eksisterende gulv hvis det er jevnt og fast. Parkett kan legges flytende over gammelt gulv med dampsperre. Men hvis gulvet er ujevnt eller skadet, bør det fjernes eller avrettes først." },
  { question: "Hva koster gulvsliping?", answer: "Sliping av parkett koster typisk 200-400 kr per m² inkl. lakk. For en stue på 30 m²: 6 000-12 000 kr. Sliping kan gjøres 3-5 ganger i parkettens levetid. Et godt alternativ til nytt gulv." },
  { question: "Hva koster vinylgulv?", answer: "Vinylgulv (LVT/vinylplanker) koster 400-700 kr per m² inkl. legging. Materiale: 200-500 kr/m². Vannfast, slitesterkt og lett å legge. Godt alternativ for bad, kjøkken og entre." },
  { question: "Kan man legge gulv selv?", answer: "Ja, laminat og vinyl er de enkleste gulvene å legge selv. Click-system gjør det til et godt helgeprosjekt. Parkett kan også legges flytende. Flislegging krever mer erfaring. Du sparer 200-500 kr/m² i arbeidskostnad." },
  { question: "Hva koster flislegging?", answer: "Fliser koster 800-2 000 kr per m² inkl. legging. Materiale: 300-1 500 kr/m². Legging: 500-1 000 kr/m². Fliser er vanligst på bad, kjøkken og entre. Gulvvarme under fliser anbefales." },
  { question: "Hva koster gulvvarme?", answer: "Elektrisk gulvvarme: 500-1 200 kr per m² inkl. installasjon. Vannbåren gulvvarme: 800-1 500 kr/m². For et bad på 6 m²: 3 000-7 200 kr (elektrisk). For et hus på 120 m²: 96 000-180 000 kr (vannbåren)." },
];

export const metadata: Metadata = { title: "Hva koster nytt gulv? Priser for parkett, vinyl og fliser 2026", description: "Nytt gulv koster 400-1 500 kr per m². Se priser for parkett, vinyl, laminat, fliser og gulvvarme.", alternates: { canonical: "https://byggepris.no/gulv" }, openGraph: { title: "Hva koster nytt gulv?", description: "Typisk 400-1 500 kr per m².", url: "https://byggepris.no/gulv", type: "article" } };

export default function Page() {
  return (<main className="pt-20"><BreadcrumbSchema items={[{name:"Hjem",href:"/"},{name:"Gulv",href:"/gulv"}]} /><ArticleSchema title="Hva koster nytt gulv?" description="Prisguide for gulv i Norge." slug="gulv" /><FAQSchema items={faq} /><article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14"><FadeInUp>
    <nav className="text-sm text-text-muted mb-6"><Link href="/" className="hover:text-accent-yellow">Hjem</Link> / <span className="text-text-secondary">Gulv</span></nav>
    <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-text-primary mb-6">Hva koster nytt gulv?</h1>
    <p className="text-lg text-text-secondary mb-6">Nytt gulv koster typisk 400-1 500 kr per m² inkl. legging. For en hel bolig på 100 m² betyr det 40 000-150 000 kr. Materialvalg er den største prisvariabelen: vinyl er rimeligst, parkett gir mest verdi, og fliser er best for våtrom.</p>
    <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">Pris etter materialtype</h2>
    <div className="bg-bg-card border border-surface-border rounded-xl overflow-hidden my-6"><table className="w-full text-sm"><thead><tr className="text-left text-xs text-text-muted uppercase tracking-wider border-b border-surface-border"><th className="px-5 py-3">Materiale</th><th className="px-5 py-3">Material/m²</th><th className="px-5 py-3">Inkl. legging/m²</th><th className="px-5 py-3">Levetid</th><th className="px-5 py-3">DIY-vennlig</th></tr></thead><tbody className="divide-y divide-surface-border">
      <tr><td className="px-5 py-3 text-text-primary font-medium">Vinyl / LVT</td><td className="px-5 py-3 font-mono text-text-secondary">200–500 kr</td><td className="px-5 py-3 font-mono text-accent-yellow">400–700 kr</td><td className="px-5 py-3 text-text-tertiary">10-20 år</td><td className="px-5 py-3 text-accent-yellow">Ja</td></tr>
      <tr><td className="px-5 py-3 text-text-primary font-medium">Laminat</td><td className="px-5 py-3 font-mono text-text-secondary">200–500 kr</td><td className="px-5 py-3 font-mono text-accent-yellow">500–800 kr</td><td className="px-5 py-3 text-text-tertiary">10-20 år</td><td className="px-5 py-3 text-accent-yellow">Ja</td></tr>
      <tr><td className="px-5 py-3 text-text-primary font-medium">Parkett (3-stav)</td><td className="px-5 py-3 font-mono text-text-secondary">400–800 kr</td><td className="px-5 py-3 font-mono text-text-secondary">700–1 200 kr</td><td className="px-5 py-3 text-text-tertiary">30-50 år</td><td className="px-5 py-3 text-accent-yellow">Ja (flytende)</td></tr>
      <tr><td className="px-5 py-3 text-text-primary font-medium">Parkett (plank)</td><td className="px-5 py-3 font-mono text-text-secondary">600–1 200 kr</td><td className="px-5 py-3 font-mono text-text-secondary">900–1 500 kr</td><td className="px-5 py-3 text-text-tertiary">30-50 år</td><td className="px-5 py-3 text-accent-yellow">Ja (flytende)</td></tr>
      <tr><td className="px-5 py-3 text-text-primary font-medium">Fliser</td><td className="px-5 py-3 font-mono text-text-secondary">300–1 500 kr</td><td className="px-5 py-3 font-mono text-text-secondary">800–2 000 kr</td><td className="px-5 py-3 text-text-tertiary">30+ år</td><td className="px-5 py-3 text-text-tertiary">Nei (anbefales fagfolk)</td></tr>
    </tbody></table></div>
    <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">Legge gulv selv vs leie inn</h2>
    <p className="text-text-secondary mb-4">Vinyl og laminat med click-system er enkle å legge selv — du sparer 200-500 kr/m² i arbeidskostnad. For en stue på 30 m² betyr det 6 000-15 000 kr spart. Parkett kan også legges flytende. Flislegging bør gjøres av fagfolk, spesielt i våtrom der det kreves riktig membranarbeid under.</p>
    <div className="mt-10 flex flex-col sm:flex-row gap-4">
      <Link href="/kalkulator" className="inline-flex items-center gap-2 px-6 py-3 bg-accent-yellow text-bg-primary font-display font-bold rounded-xl hover:bg-accent-warm transition-colors shadow-glow-sm"><IconCalculator size={18} /> Beregn ditt prosjekt</Link>
      <Link href="/oppussing" className="inline-flex items-center gap-2 px-6 py-3 border border-surface-border text-text-primary font-display font-semibold rounded-xl hover:border-accent-yellow/30 transition-colors">Se oppussingspriser</Link>
    </div>
  </FadeInUp></article></main>);
}
