import { Metadata } from "next";
import Link from "next/link";
import { FadeInUp } from "@/components/ui/animations";
import { IconCalculator } from "@/components/icons";
import { FAQSchema, BreadcrumbSchema, ArticleSchema } from "@/components/seo/JsonLd";
const faq = [
  { question: "Hva koster det a male hus utvendig?", answer: "Maling av utvendig fasade koster 300-600 kr per m2 inkl. arbeid. For et normalt hus (150-200 m2 fasade): 45 000-120 000 kr. Prisen avhenger av tilstand, etasjer og tilgjengelighet." },
  { question: "Hva koster ny kledning?", answer: "Ny utvendig kledning koster 1 500-4 000 kr per m2 inkl. materialer og montering. For et hus med 150 m2 fasade: 225 000-600 000 kr. Trekledning er rimeligst, fibersement og Kebony dyrere." },
  { question: "Hva koster etterisolering av fasade?", answer: "Etterisolering utvendig koster 1 000-2 500 kr per m2. For 150 m2 fasade: 150 000-375 000 kr. Inkluderer ny isolasjon, vindsperre og ny kledning. Kan spare 20-30% pa oppvarming." },
  { question: "Hvor ofte bor man male huset?", answer: "Trehus bor males hvert 6-10 ar avhengig av vaerforhold og malingstype. Solsiden slites raskere. God grunnbehandling og kvalitetsmaling forlenger intervallet." },
  { question: "Hva koster maling av hus selv?", answer: "Maling selv koster 10 000-30 000 kr i materialer for et normalt hus. Du sparer 30 000-80 000 kr i arbeidskostnad. Trenger stiger/stillas (leie 3 000-8 000 kr), skrape, grunning og maling." },
  { question: "Hva koster stillas til husmaling?", answer: "Stillasleie koster 3 000-10 000 kr per uke avhengig av husets storrelse. For et normalt malejobb pa 1-2 uker: 5 000-15 000 kr. Alternativt kan du bruke stige for enklere fasader." },
  { question: "Hva koster fasadeplater?", answer: "Fasadeplater (fibersement/Cedral) koster 800-1 500 kr per m2 for materiale. Inkl. montering: 1 800-3 500 kr/m2. Vedlikeholdsfritt alternativ til trekledning." },
  { question: "Trekledning vs fibersement?", answer: "Trekledning: 600-1 200 kr/m2, naturlig utseende, krever maling. Fibersement: 800-1 500 kr/m2, vedlikeholdsfritt, lang levetid. Fibersement er dyrere men sparer pa vedlikehold over tid." },
  { question: "Hva koster pussing av fasade?", answer: "Pussing av murfasade koster 800-2 000 kr per m2. For en fasade pa 150 m2: 120 000-300 000 kr. Inkluderer reparasjon, grunning og ny puss. Krever fagfolk for godt resultat." },
  { question: "Trenger man soknad for ny fasade?", answer: "Vanlig vedlikehold (maling i samme farge) er ikke soknadspliktig. Men endring av farge, materiale, eller vesentlig endring av fasadens utseende kan kreve soknad i noen kommuner, spesielt i verneomrader." },
];
export const metadata: Metadata = { title: "Hva koster fasade? Priser for maling og kledning 2026", description: "Utvendig maling koster 300-600 kr/m2. Ny kledning 1 500-4 000 kr/m2. Se priser for fasadearbeid.", alternates: { canonical: "https://byggepris.no/fasade" } };
export default function Page() {
  return (<main className="pt-20"><BreadcrumbSchema items={[{name:"Hjem",href:"/"},{name:"Fasade",href:"/fasade"}]} /><ArticleSchema title="Hva koster fasade?" description="Prisguide for fasadearbeid." slug="fasade" /><FAQSchema items={faq} /><article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14"><FadeInUp>
    <nav className="text-sm text-text-muted mb-6"><Link href="/" className="hover:text-accent-yellow">Hjem</Link> / <span className="text-text-secondary">Fasade</span></nav>
    <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-text-primary mb-6">Hva koster fasadearbeid?</h1>
    <p className="text-lg text-text-secondary mb-6">Utvendig maling av hus koster 300-600 kr per m2. Ny kledning koster 1 500-4 000 kr per m2. Etterisolering av fasade koster 1 000-2 500 kr per m2. Fasaden er det forste folk ser, og vedlikehold beskytter konstruksjonen mot vaer og vind.</p>
    <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">Priseksempler</h2>
    <div className="bg-bg-card border border-surface-border rounded-xl overflow-hidden my-6"><table className="w-full text-sm"><thead><tr className="text-left text-xs text-text-muted uppercase tracking-wider border-b border-surface-border"><th className="px-5 py-3">Arbeid</th><th className="px-5 py-3">Pris per m2</th><th className="px-5 py-3">Helt hus (150 m2)</th></tr></thead><tbody className="divide-y divide-surface-border">
      {[["Utvendig maling","300-600 kr","45 000-90 000 kr"],["Ny trekledning","1 500-3 000 kr","225 000-450 000 kr"],["Fibersementkledning","1 800-3 500 kr","270 000-525 000 kr"],["Etterisolering + kledning","2 000-4 000 kr","300 000-600 000 kr"],["Pussing av murfasade","800-2 000 kr","120 000-300 000 kr"]].map(([j,m,t])=>(<tr key={j}><td className="px-5 py-3 text-text-primary font-medium">{j}</td><td className="px-5 py-3 font-mono text-accent-yellow">{m}</td><td className="px-5 py-3 font-mono text-text-secondary">{t}</td></tr>))}
    </tbody></table></div>
    <div className="mt-10"><Link href="/kalkulator" className="inline-flex items-center gap-2 px-6 py-3 bg-accent-yellow text-bg-primary font-display font-bold rounded-xl hover:bg-accent-warm transition-colors shadow-glow-sm"><IconCalculator size={18} /> Beregn ditt prosjekt</Link></div>
  </FadeInUp></article></main>);
}
