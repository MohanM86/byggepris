import { Metadata } from "next";
import Link from "next/link";
import { FadeInUp } from "@/components/ui/animations";
import { IconCalculator } from "@/components/icons";
import { FAQSchema, BreadcrumbSchema, ArticleSchema } from "@/components/seo/JsonLd";

const faq = [
  { question: "Hva koster grunnarbeid?", answer: "Grunnarbeid for en enebolig koster typisk 300 000-800 000 kr. Inkluderer graving, fundamentering, drenering og tilkobling. Grunnforholdene er avgjørende — fjell eller leire kan oke kostnadene med 100 000-500 000 kr." },
  { question: "Hva koster grunnmur?", answer: "Grunnmur koster typisk 200 000-400 000 kr for 100 m2 grunnflate. Plate-pa-mark (uten kjeller) er billigst: 150 000-250 000 kr. Full kjeller aker kostnaden til 400 000-700 000 kr." },
  { question: "Hva koster graving?", answer: "Graving koster typisk 800-2 000 kr per time for maskin med forer. For en enebolig tar graving 3-7 dager, altsa 20 000-80 000 kr. Fjellsprengning kan koste 100 000-400 000 kr ekstra." },
  { question: "Hva koster det a sprenge fjell?", answer: "Fjellsprengning koster typisk 300-800 kr per m3 fjell. For en vanlig hustomt kan det bety 100 000-400 000 kr. Krever godkjent sprengningsmester og nabovarsel. Geoteknisk undersokelse anbefales forst." },
  { question: "Hva koster peling?", answer: "Peling (for bygging pa darlig grunn/kvikkleire) koster typisk 200 000-800 000 kr. Stalpeler: 3 000-8 000 kr per pel. For et hus trenger du 15-40 peler. Peling er nodvendig nar grunnen ikke berer." },
  { question: "Hva koster geoteknisk undersokelse?", answer: "Geoteknisk undersokelse koster 10 000-30 000 kr. En av de beste investeringene du kan gjore — den avdekker grunnforhold for du starter, og kan spare deg for hundretusener i overraskelser." },
  { question: "Hva koster plate pa mark?", answer: "Plate-pa-mark (isolert betongplate uten kjeller) koster 1 500-3 000 kr per m2. For 100 m2: 150 000-300 000 kr. Inkluderer isolasjon under, armering, betong, varmeror i gulv og avretting." },
  { question: "Hva koster det a stope?", answer: "Stopearbeid koster typisk 800-1 800 kr per m2. Betong: 1 500-2 500 kr per m3 levert. For en grunnmur pa 100 m2 trengs ca. 15-25 m3 betong. Armering, forskaling og arbeid kommer i tillegg." },
  { question: "Hva koster tilkobling til kommunalt nett?", answer: "Tilkobling vann og avlop koster 30 000-150 000 kr avhengig av avstand til kommunalt nett. Tilkoblingsavgift: 20 000-80 000 kr. Graving og rorlegging: 10 000-70 000 kr." },
  { question: "Nar bor man ta geoteknisk undersokelse?", answer: "Alltid for du bygger. Spesielt viktig ved: marin leire, bratt tomt, naboproblemer med setninger, bygging naer vann, eller ukjent grunnforhold. Koster 10 000-30 000 kr og kan spare deg for katastrofale overraskelser." },
];

export const metadata: Metadata = { title: "Hva koster grunnarbeid? Priser for graving og fundamentering 2026", description: "Grunnarbeid koster 300 000-800 000 kr. Se priser for grunnmur, graving, sprengning, peling og geoteknisk undersokelse.", alternates: { canonical: "https://byggepris.no/grunnarbeid" } };

export default function Page() {
  return (<main className="pt-20"><BreadcrumbSchema items={[{name:"Hjem",href:"/"},{name:"Grunnarbeid",href:"/grunnarbeid"}]} /><ArticleSchema title="Hva koster grunnarbeid?" description="Prisguide for grunnarbeid og fundamentering." slug="grunnarbeid" /><FAQSchema items={faq} /><article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14"><FadeInUp>
    <nav className="text-sm text-text-muted mb-6"><Link href="/" className="hover:text-accent-yellow">Hjem</Link> / <span className="text-text-secondary">Grunnarbeid</span></nav>
    <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-text-primary mb-6">Hva koster grunnarbeid?</h1>
    <p className="text-lg text-text-secondary mb-6">Grunnarbeid for en enebolig koster typisk 300 000-800 000 kr. Det er en av de mest uforutsigbare kostnadspostene i et byggeprosjekt fordi det du finner i bakken bestemmer prisen. En geoteknisk undersokelse (10 000-30 000 kr) er den beste investeringen du kan gjore for a unnga overraskelser.</p>
    <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">Priseksempler</h2>
    <div className="bg-bg-card border border-surface-border rounded-xl overflow-hidden my-6"><table className="w-full text-sm"><thead><tr className="text-left text-xs text-text-muted uppercase tracking-wider border-b border-surface-border"><th className="px-5 py-3">Arbeid</th><th className="px-5 py-3">Typisk pris</th></tr></thead><tbody className="divide-y divide-surface-border">
      {[["Geoteknisk undersokelse","10 000-30 000 kr"],["Graving og planering","20 000-80 000 kr"],["Plate-pa-mark (100 m2)","150 000-300 000 kr"],["Grunnmur (100 m2)","200 000-400 000 kr"],["Full kjeller (100 m2)","400 000-700 000 kr"],["Drenering","50 000-100 000 kr"],["Tilkobling vann/avlop","30 000-150 000 kr"],["Fjellsprengning","100 000-400 000 kr"],["Peling (darlig grunn)","200 000-800 000 kr"],["Komplett grunnarbeid enebolig","300 000-800 000 kr"]].map(([j,p])=>(<tr key={j}><td className="px-5 py-3 text-text-primary font-medium">{j}</td><td className="px-5 py-3 font-mono text-accent-yellow">{p}</td></tr>))}
    </tbody></table></div>
    <div className="mt-10 flex flex-col sm:flex-row gap-4">
      <Link href="/kalkulator" className="inline-flex items-center gap-2 px-6 py-3 bg-accent-yellow text-bg-primary font-display font-bold rounded-xl hover:bg-accent-warm transition-colors shadow-glow-sm"><IconCalculator size={18} /> Beregn ditt prosjekt</Link>
      <Link href="/bygge-hus" className="inline-flex items-center gap-2 px-6 py-3 border border-surface-border text-text-primary font-display font-semibold rounded-xl hover:border-accent-yellow/30 transition-colors">Se husbyggpriser</Link>
    </div>
  </FadeInUp></article></main>);
}
