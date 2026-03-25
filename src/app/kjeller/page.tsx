import { Metadata } from "next";
import Link from "next/link";
import { FadeInUp } from "@/components/ui/animations";
import { IconCalculator } from "@/components/icons";
import { FAQSchema, BreadcrumbSchema, ArticleSchema } from "@/components/seo/JsonLd";
const faq = [
  { question: "Hva koster det a bygge ut kjeller?", answer: "Utbygging av kjeller til boareal koster typisk 15 000-35 000 kr per m2. For 50 m2 kjeller: 750 000-1 750 000 kr. Inkluderer fuktsikring, isolasjon, overflater, elektro og evt. bad." },
  { question: "Kan man gjore kjeller om til leilighet?", answer: "Ja, men det krever byggesoknad, oppfylle TEK17-krav (takhøyde min 2,2m, rommingsvei, dagslys, ventilasjon, brannsikring) og godkjenning som boenhet. Kostnad for ombygging: 20 000-45 000 kr/m2." },
  { question: "Hva koster det a lage utleiedel i kjeller?", answer: "En godkjent utleiedel i kjeller koster typisk 500 000-1 500 000 kr for 30-50 m2. Inkluderer bad, kjokken, soveplass, egen inngang, brannsikring og alle TEK17-krav." },
  { question: "Hva koster fuktsikring av kjeller?", answer: "Innvendig fuktsikring koster 500-1 500 kr per m2 vegg. Utvendig drenering og membran: 2 000-4 000 kr per lopemeter. For en hel kjeller: 50 000-200 000 kr avhengig av metode og omfang." },
  { question: "Hva er minste takhøyde i kjeller?", answer: "For godkjent boareal kreves minimum 2,2 meter takhøyde (TEK17). For a vaere komfortabelt anbefales 2,4 meter. Mange eldre kjellere har 1,9-2,1 m og kan ikke godkjennes uten a senke gulvet." },
  { question: "Hva koster det a senke kjellergulv?", answer: "Senking av kjellergulv koster typisk 3 000-8 000 kr per m2. For 50 m2: 150 000-400 000 kr. Dyrt og komplisert arbeid som krever fagfolk. Alternativt kan du vurdere a grave ut under huset." },
  { question: "Hva koster lysgraver?", answer: "En lysgrav koster typisk 15 000-40 000 kr per stk inkl. graving, stopearbeid og vindu. For a oppfylle dagslys-krav i kjeller trenger du minst en lysgrav per rom som brukes til varig opphold." },
  { question: "Er kjeller verdt investeringen?", answer: "Innredet kjeller oker boligverdien med typisk 30-60% av investeringen (lavere enn boareal over bakken). Godkjent utleiedel kan oke verdien med 500 000-1 500 000 kr og gi leieinntekter pa 6 000-12 000 kr/mnd." },
  { question: "Hva koster det a isolere kjeller?", answer: "Innvendig isolering av kjeller koster 500-1 200 kr per m2 vegg. For en kjeller pa 60 m2 veggflate: 30 000-72 000 kr. Inkluderer isolasjon, dampsperre og innvendig kledning." },
  { question: "Kreves byggesoknad for kjellerutbygging?", answer: "Ja, bruksendring fra kjeller/bod til boareal krever byggesoknad. Du trenger ansvarlig soker og ma dokumentere at alle TEK17-krav oppfylles (takhøyde, dagslys, romming, brann, ventilasjon)." },
];
export const metadata: Metadata = { title: "Hva koster kjellerutbygging? Priser for kjeller 2026", description: "Kjellerutbygging koster 15 000-35 000 kr per m2. Se priser for utleiedel, fuktsikring og innredning.", alternates: { canonical: "https://byggepris.no/kjeller" } };
export default function Page() {
  return (<main className="pt-20"><BreadcrumbSchema items={[{name:"Hjem",href:"/"},{name:"Kjeller",href:"/kjeller"}]} /><ArticleSchema title="Hva koster kjellerutbygging?" description="Prisguide for kjeller." slug="kjeller" /><FAQSchema items={faq} /><article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14"><FadeInUp>
    <nav className="text-sm text-text-muted mb-6"><Link href="/" className="hover:text-accent-yellow">Hjem</Link> / <span className="text-text-secondary">Kjeller</span></nav>
    <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-text-primary mb-6">Hva koster kjellerutbygging?</h1>
    <p className="text-lg text-text-secondary mb-6">Utbygging av kjeller til boareal koster typisk 15 000-35 000 kr per m2. For 50 m2 kjeller betyr det 750 000-1 750 000 kr. En godkjent utleiedel koster 500 000-1 500 000 kr og kan gi leieinntekter pa 6 000-12 000 kr per maned.</p>
    <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">Priseksempler</h2>
    <div className="bg-bg-card border border-surface-border rounded-xl overflow-hidden my-6"><table className="w-full text-sm"><thead><tr className="text-left text-xs text-text-muted uppercase tracking-wider border-b border-surface-border"><th className="px-5 py-3">Prosjekt</th><th className="px-5 py-3">Typisk pris</th></tr></thead><tbody className="divide-y divide-surface-border">
      {[["Innrede kjeller til boareal (per m2)","15 000-35 000 kr"],["Utleiedel i kjeller (30-50 m2)","500 000-1 500 000 kr"],["Fuktsikring kjeller","50 000-200 000 kr"],["Senke kjellergulv (per m2)","3 000-8 000 kr"],["Lysgrav (per stk)","15 000-40 000 kr"],["Isolering kjellervegger (per m2)","500-1 200 kr"],["Bad i kjeller","250 000-500 000 kr"]].map(([j,p])=>(<tr key={j}><td className="px-5 py-3 text-text-primary font-medium">{j}</td><td className="px-5 py-3 font-mono text-accent-yellow">{p}</td></tr>))}
    </tbody></table></div>
    <div className="mt-10"><Link href="/kalkulator" className="inline-flex items-center gap-2 px-6 py-3 bg-accent-yellow text-bg-primary font-display font-bold rounded-xl hover:bg-accent-warm transition-colors shadow-glow-sm"><IconCalculator size={18} /> Beregn ditt prosjekt</Link></div>
  </FadeInUp></article></main>);
}
