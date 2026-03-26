import { Metadata } from "next";
import Link from "next/link";
import { FadeInUp } from "@/components/ui/animations";
import { IconCalculator } from "@/components/icons";
import { FAQSchema, BreadcrumbSchema, ArticleSchema } from "@/components/seo/JsonLd";

const faq = [
  { question: "Hva koster fasademaling?", answer: "Utvendig maling koster 300–600 kr per m² fasadeflate inkl. arbeid. For et normalt hus med 150–200 m² fasade betyr det 45 000–120 000 kr. Inkluderer høytrykksvask, skraping, grunning og to strøk." },
  { question: "Hva koster ny kledning?", answer: "Ny trekledning koster 1 500–3 000 kr per m² inkl. montering. For 150 m² fasade betyr det 225 000–450 000 kr. Inkluderer riving av gammel kledning, vindsperre, lekter og ny kledning med maling." },
  { question: "Hva koster etterisolering av fasade?", answer: "Etterisolering med ny kledning koster 2 000–4 000 kr per m². For 150 m² fasade betyr det 300 000–600 000 kr. Inkluderer isolasjon, vindsperre og ny kledning. Sparer 15–30 % på strøm." },
  { question: "Hva koster muring av fasade?", answer: "Murfasade koster 2 500–5 000 kr per m². Teglstein er dyrest men vedlikeholdsfritt. Puss på mur koster 800–1 500 kr per m². Reparasjon av mursprekker koster 500–2 000 kr per stk." },
  { question: "Hvor ofte må man male huset?", answer: "Trehus bør males hvert 8–12 år. Nordsiden slites raskest. Kvalitetsmaling varer lenger. Tegn på at det er på tide: flassing, kritt på overflaten når du stryker over, misfarging eller synlig tre." },
  { question: "Hva koster stillas?", answer: "Stillasleie koster 3 000–15 000 kr for et normalt hus. Pris avhenger av lengde, høyde og leieperiode. Stillas er nødvendig for fasadearbeid over 3–4 meters høyde. Alternativt kan lift brukes." },
  { question: "Hva koster panelbytte?", answer: "Bytte av enkeltstående panelbord koster 500–1 500 kr per m. For å bytte råttent panel under vindu koster det typisk 3 000–8 000 kr per vindu inkl. maling." },
  { question: "Kan man male fasade selv?", answer: "Ja, men kun i 1. etasje uten stillas. Du sparer 50 % av kostnaden. Utvendig maling krever grundig forberedelse med vask, skraping og grunning. Mal i tørt vær over 10 grader." },
  { question: "Hvilken fasadekledning er best?", answer: "Trekledning er vanligst og rimeligst men krever vedlikehold. Fibersement er vedlikeholdsfritt men dyrere. Teglstein varer lengst men er dyrest. Kebony er miljøvennlig og holdbart." },
  { question: "Hva koster det å pusse opp fasaden?", answer: "Enkel oppfrisking med maling koster 45 000–120 000 kr. Med etterisolering og ny kledning koster det 300 000–600 000 kr. Partielt reparasjonsarbeid koster 20 000–80 000 kr." },
];

export const metadata: Metadata = {
  title: "Hva koster fasadepuss? Priser for fasade og kledning 2026",
  description: "Fasademaling koster 300–600 kr/m². Ny kledning 1 500–3 000 kr/m². Se priser og tips for utvendig oppussing av hus.",
  alternates: { canonical: "https://byggepris.no/fasade" },
};

export default function Page() {
  return (
    <main className="pt-20"><BreadcrumbSchema items={[{name:"Hjem",href:"/"},{name:"Fasade",href:"/fasade"}]} /><ArticleSchema title="Hva koster fasadepuss?" description="Prisguide for fasade." slug="fasade" /><FAQSchema items={faq} /><article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14"><FadeInUp>
      <nav className="text-sm text-text-muted mb-6"><Link href="/" className="hover:text-accent-yellow">Hjem</Link> / <span className="text-text-secondary">Fasade</span></nav>
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent-yellow/20 bg-accent-yellow/5 mb-4"><span className="text-accent-yellow text-xs font-semibold">OPPDATERT 2026</span></div>
      <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-text-primary mb-4">Hva koster fasadepuss?</h1>
      <p className="text-lg text-text-secondary mb-8">Fasademaling koster <strong className="text-text-primary">300–600 kr per m²</strong>. Ny kledning koster 1 500–3 000 kr per m². Med etterisolering koster det 2 000–4 000 kr per m². For et vanlig hus betyr det 45 000 kr for maling opp til 600 000 kr for komplett etterisolering med ny kledning.</p>
      <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">Pristabell</h2>
      <div className="bg-bg-card border border-surface-border rounded-2xl overflow-hidden my-6">
        <table className="w-full text-sm"><thead><tr className="text-left text-xs text-text-muted uppercase tracking-wider border-b border-surface-border"><th className="px-5 py-3">Jobb</th><th className="px-5 py-3">Pris per m²</th><th className="px-5 py-3">Hus 150 m² fasade</th></tr></thead>
          <tbody className="divide-y divide-surface-border">
            {[["Fasademaling","300–600 kr","45 000–90 000 kr"],["Ny trekledning","1 500–3 000 kr","225 000–450 000 kr"],["Etterisolering pluss ny kledning","2 000–4 000 kr","300 000–600 000 kr"],["Puss på mur","800–1 500 kr","120 000–225 000 kr"],["Teglstein","2 500–5 000 kr","375 000–750 000 kr"],["Fibersement","1 800–3 500 kr","270 000–525 000 kr"]].map(([j,m,t])=>(
              <tr key={j} className="hover:bg-bg-tertiary/30"><td className="px-5 py-3 text-text-primary font-medium">{j}</td><td className="px-5 py-3 font-mono text-accent-yellow">{m}</td><td className="px-5 py-3 font-mono text-text-secondary">{t}</td></tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-10 flex flex-wrap gap-3">
        {[{href:"/maling",label:"Maling"},{href:"/isolasjon",label:"Isolasjon"},{href:"/tak",label:"Tak"},{href:"/vinduer",label:"Vinduer"}].map(l=>(<Link key={l.href} href={l.href} className="px-4 py-2 bg-bg-card border border-surface-border rounded-xl text-sm text-text-secondary hover:text-accent-yellow hover:border-accent-yellow/30 transition-all">{l.label}</Link>))}
        <Link href="/kalkulator" className="px-4 py-2 bg-accent-yellow/10 border border-accent-yellow/20 rounded-xl text-sm text-accent-yellow font-semibold hover:bg-accent-yellow/20 transition-all flex items-center gap-1"><IconCalculator size={14} /> Bruk kalkulator</Link>
      </div>
    </FadeInUp></article></main>
  );
}
