import { Metadata } from "next";
import Link from "next/link";
import { FadeInUp } from "@/components/ui/animations";
import { IconCalculator } from "@/components/icons";
import { FAQSchema, BreadcrumbSchema, ArticleSchema } from "@/components/seo/JsonLd";
const faq = [
  { question: "Hva koster drenering rundt hus?", answer: "Drenering koster typisk 2 000-4 000 kr per lopemeter. For et hus med 40 meter grunnmur: 80 000-160 000 kr." },
  { question: "Hvor ofte bor drenering skiftes?", answer: "Hvert 20-40 ar. Tegn: fukt i kjeller, mugglukt, synlig vann langs grunnmur." },
  { question: "Kan man drenere huset selv?", answer: "Ja, med minigraver kan du spare 30-50%. Viktig med riktig fall, filterduk og pukk." },
  { question: "Hva koster innvendig kjellerdrenering?", answer: "40 000-100 000 kr. Utvendig drenering av kjeller koster 80 000-200 000 kr." },
  { question: "Dekker forsikring drenering?", answer: "Normal forsikring dekker ikke forebyggende drenering, men kan dekke plutselige vannskader." },
  { question: "Hva koster graving per meter?", answer: "500-1 500 kr per lopemeter for dreneringsgraving. 30-40% av total dreneringskostnad." },
  { question: "Hva er forskjell pa drenering og membran?", answer: "Drenering leder vann bort (ror og pukk). Membran hindrer vann a trenge gjennom mur. Begge bor gjores samtidig." },
  { question: "Hva koster grunnmursplate?", answer: "80-200 kr per m2 for materiale. Montering 150-300 kr/m2. For 60 m2 grunnmur: 15 000-30 000 kr." },
  { question: "Hva koster det a fikse fukt i kjeller?", answer: "50 000-200 000 kr avhengig av arsak. Ny drenering, membran eller innvendig fuktsikring." },
  { question: "Nar bor man drenere?", answer: "Om sommeren/tidlig host nar bakken er torr. Planlegg i god tid for a fa handverker." },
];
export const metadata: Metadata = { title: "Hva koster drenering? Priser for drenering 2026", description: "Drenering koster 2 000-4 000 kr per lopemeter. Komplett prisguide.", alternates: { canonical: "https://byggepris.no/drenering" } };
export default function Page() {
  return (<main className="pt-20"><BreadcrumbSchema items={[{name:"Hjem",href:"/"},{name:"Drenering",href:"/drenering"}]} /><ArticleSchema title="Hva koster drenering?" description="Prisguide for drenering." slug="drenering" /><FAQSchema items={faq} /><article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14"><FadeInUp>
    <nav className="text-sm text-text-muted mb-6"><Link href="/" className="hover:text-accent-yellow">Hjem</Link> / <span className="text-text-secondary">Drenering</span></nav>
    <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-text-primary mb-6">Hva koster drenering?</h1>
    <p className="text-lg text-text-secondary mb-6">Drenering rundt hus koster typisk 2 000-4 000 kr per lopemeter. For et normalt hus med 40 meter grunnmur betyr det 80 000-160 000 kr. God drenering beskytter grunnmur og kjeller mot fuktskader som kan koste hundretusener.</p>
    <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">Priseksempler</h2>
    <div className="bg-bg-card border border-surface-border rounded-xl overflow-hidden my-6"><table className="w-full text-sm"><thead><tr className="text-left text-xs text-text-muted uppercase tracking-wider border-b border-surface-border"><th className="px-5 py-3">Arbeid</th><th className="px-5 py-3">Typisk pris</th></tr></thead><tbody className="divide-y divide-surface-border">
      {[["Drenering per lopemeter","2 000-4 000 kr"],["Drenering rundt hus (40 m)","80 000-160 000 kr"],["Innvendig kjellerdrenering","40 000-100 000 kr"],["Ny grunnmursmembran","30 000-80 000 kr"],["Utbedring fuktproblem","50 000-200 000 kr"]].map(([j,p])=>(<tr key={j}><td className="px-5 py-3 text-text-primary font-medium">{j}</td><td className="px-5 py-3 font-mono text-accent-yellow">{p}</td></tr>))}
    </tbody></table></div>
    <div className="mt-10"><Link href="/kalkulator" className="inline-flex items-center gap-2 px-6 py-3 bg-accent-yellow text-bg-primary font-display font-bold rounded-xl hover:bg-accent-warm transition-colors shadow-glow-sm"><IconCalculator size={18} /> Beregn ditt prosjekt</Link></div>
  </FadeInUp></article></main>);
}
