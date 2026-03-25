import { Metadata } from "next";
import Link from "next/link";
import { FadeInUp } from "@/components/ui/animations";
import { IconCalculator } from "@/components/icons";
import { FAQSchema, BreadcrumbSchema, ArticleSchema } from "@/components/seo/JsonLd";

const faq = [
  { question: "Hva koster etterisolering?", answer: "Etterisolering koster typisk 300-1 500 kr per m2 avhengig av metode. Loft (blaseisolasjon): 300-600 kr/m2. Vegger utvendig: 1 000-2 500 kr/m2 inkl. ny kledning. Gulv: 400-800 kr/m2. Kraperommerisolering: 200-500 kr/m2." },
  { question: "Hva koster det a isolere loft?", answer: "Loftisolering koster 300-600 kr per m2. Blaseisolasjon er billigst og mest effektivt for eksisterende loft. For et loft pa 80 m2: 24 000-48 000 kr. Kan spare 15-30% pa oppvarming." },
  { question: "Hva koster etterisolering av vegger?", answer: "Etterisolering av vegger utvendig koster 1 000-2 500 kr per m2 inkl. ny vindsperre, isolasjon og kledning. For 150 m2 fasade: 150 000-375 000 kr. Innvendig etterisolering: 500-1 200 kr/m2 men stjeler innvendig areal." },
  { question: "Lonner etterisolering seg?", answer: "Ja, for de fleste. Et darlig isolert hus fra 1970-tallet bruker 30 000-50 000 kr mer i strom per ar enn et godt isolert. Loftisolering har typisk 3-5 ars tilbakebetalingstid. Vegg-isolering 8-15 ar." },
  { question: "Kan man isolere selv?", answer: "Loftisolering med matter kan gjores selv — spar 50% av arbeidskostnaden. Blaseisolasjon krever spesialutstyr og fagfolk. Veggisolering utvendig bor gjores av fagfolk. Innvendig isolering med plater kan gjores selv." },
  { question: "Hva er best isolasjon?", answer: "Mineralull (Glava, Rockwool) er mest brukt: god isolasjonsevne, brannbestandig, rimelig. EPS (isopor) brukes i grunn og under gulv. XPS for fuktutsatte omrader. Treisolasjon (Hunton) er miljovennlig alternativ." },
  { question: "Hva koster det a isolere gulv?", answer: "Gulvisolering koster 400-800 kr per m2. For et hus pa 100 m2: 40 000-80 000 kr. Krever ofte at gulvet rives opp. Isolasjon under betongplate (nybygg) er rimeligere: 150-300 kr/m2." },
  { question: "Hva koster blaseisolasjon?", answer: "Blaseisolasjon koster 300-500 kr per m2 for loft, inkl. arbeid og materiale. Minimum bestilling er typisk 50 m2. Raskere og billigere enn a legge matter manuelt. Fyller alle hulrom og spalter." },
  { question: "Hvor mye isolasjon trenger man?", answer: "TEK17 krever minimum: tak/loft 30-35 cm mineralull, vegger 20-25 cm, gulv 20-30 cm. Eldre hus har ofte bare 10-15 cm. A ga fra 10 til 30 cm i loftet kan halvere varmetapet gjennom taket." },
  { question: "Far man stotte til etterisolering?", answer: "Enova tilbyr stotte til energitiltak i bolig, inkludert etterisolering. Stotten varierer, men har vaert opp til 20-30% av kostnaden. Sjekk Enova.no for gjeldende satser og krav." },
];

export const metadata: Metadata = { title: "Hva koster isolasjon? Priser for etterisolering 2026", description: "Etterisolering koster 300-1 500 kr/m2. Se priser for loft, vegger, gulv og blaseisolasjon. Tips for energisparing.", alternates: { canonical: "https://byggepris.no/isolasjon" }, openGraph: { title: "Hva koster isolasjon?", description: "Etterisolering 300-1 500 kr/m2.", url: "https://byggepris.no/isolasjon", type: "article" } };

export default function Page() {
  return (<main className="pt-20"><BreadcrumbSchema items={[{name:"Hjem",href:"/"},{name:"Isolasjon",href:"/isolasjon"}]} /><ArticleSchema title="Hva koster isolasjon?" description="Prisguide for isolasjon og etterisolering." slug="isolasjon" /><FAQSchema items={faq} /><article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14"><FadeInUp>
    <nav className="text-sm text-text-muted mb-6"><Link href="/" className="hover:text-accent-yellow">Hjem</Link> / <span className="text-text-secondary">Isolasjon</span></nav>
    <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-text-primary mb-6">Hva koster etterisolering?</h1>
    <p className="text-lg text-text-secondary mb-6">Etterisolering koster typisk 300-1 500 kr per m2 avhengig av metode og omrade. Loftisolering er rimeligst og gir raskest tilbakebetaling. Et darlig isolert hus kan bruke 30 000-50 000 kr mer i strom per ar enn nodvendig.</p>
    <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">Priseksempler</h2>
    <div className="bg-bg-card border border-surface-border rounded-xl overflow-hidden my-6"><table className="w-full text-sm"><thead><tr className="text-left text-xs text-text-muted uppercase tracking-wider border-b border-surface-border"><th className="px-5 py-3">Type</th><th className="px-5 py-3">Pris per m2</th><th className="px-5 py-3">100 m2</th><th className="px-5 py-3">Tilbakebetaling</th></tr></thead><tbody className="divide-y divide-surface-border">
      {[["Loft (blaseisolasjon)","300-500 kr","30 000-50 000 kr","3-5 ar"],["Loft (matter)","400-600 kr","40 000-60 000 kr","4-6 ar"],["Vegger utvendig","1 000-2 500 kr","100 000-250 000 kr","8-15 ar"],["Vegger innvendig","500-1 200 kr","50 000-120 000 kr","6-10 ar"],["Gulv","400-800 kr","40 000-80 000 kr","5-8 ar"],["Kryperom","200-500 kr","20 000-50 000 kr","3-5 ar"]].map(([j,m,t,r])=>(<tr key={j}><td className="px-5 py-3 text-text-primary font-medium">{j}</td><td className="px-5 py-3 font-mono text-accent-yellow">{m}</td><td className="px-5 py-3 font-mono text-text-secondary">{t}</td><td className="px-5 py-3 text-text-tertiary">{r}</td></tr>))}
    </tbody></table></div>
    <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">Hva gir mest energisparing?</h2>
    <p className="text-text-secondary mb-4">Prioriter slik: <strong className="text-text-primary">1) Loft</strong> (billigst, storst effekt fordi varm luft stiger), <strong className="text-text-primary">2) Vinduer</strong> (stor varmegevinst), <strong className="text-text-primary">3) Vegger</strong> (storst areal, men dyrere), <strong className="text-text-primary">4) Gulv</strong> (minst varmetap, men gir komfort). Kombiner med varmepumpe for best totaleffekt.</p>
    <div className="mt-10"><Link href="/kalkulator" className="inline-flex items-center gap-2 px-6 py-3 bg-accent-yellow text-bg-primary font-display font-bold rounded-xl hover:bg-accent-warm transition-colors shadow-glow-sm"><IconCalculator size={18} /> Beregn ditt prosjekt</Link></div>
  </FadeInUp></article></main>);
}
