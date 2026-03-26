import { Metadata } from "next";
import Link from "next/link";
import { FadeInUp } from "@/components/ui/animations";
import { IconCalculator } from "@/components/icons";
import { FAQSchema, BreadcrumbSchema, ArticleSchema } from "@/components/seo/JsonLd";

const faq = [
  { question: "Hva koster det å innrede kjeller?", answer: "Innredning av kjeller til boareal koster 15 000–35 000 kr per m². For 40 m² betyr det 600 000–1 400 000 kr. Inkluderer isolasjon, fuktsikring, elektro, rørlegger, overflater og eventuelt bad." },
  { question: "Hva koster utleiedel i kjeller?", answer: "Godkjent utleiedel i kjeller koster 500 000–1 500 000 kr for 30–50 m². Inkluderer eget bad, kjøkken, inngang, brannsikring og alle TEK17 krav. Gir leieinntekter på 6 000–12 000 kr per måned." },
  { question: "Hva er takhøydekravet i kjeller?", answer: "Minimum 2,2 meter takhøyde i oppholdsrom og soverom for å få det godkjent som boareal. Bod og teknisk rom har ikke krav. Senking av gulv for å oppnå nok takhøyde koster 3 000–6 000 kr per m²." },
  { question: "Hva koster fuktsikring av kjeller?", answer: "Utvendig fuktsikring koster 1 500–3 000 kr per m² vegg inkl. graving. Innvendig fuktsikring koster 800–2 000 kr per m². Utvendig er alltid den beste løsningen." },
  { question: "Trenger man byggesøknad for kjeller?", answer: "Ja, hvis du endrer bruken fra bod til boareal eller lager ny boenhet. Innredning av eksisterende godkjent kjeller krever normalt ikke søknad. Ny utleiedel krever alltid søknad." },
  { question: "Hva koster lysgraver i kjeller?", answer: "Lysgraver koster 15 000–40 000 kr per stk inkl. graving og montering. Nødvendig for dagslys i kjeller og for å oppfylle TEK17 krav til oppholdsrom. Regn 2–3 lysgraver for en utleiedel." },
  { question: "Hva koster det å senke kjellergulv?", answer: "Senking av kjellergulv koster 3 000–6 000 kr per m². For 40 m² betyr det 120 000–240 000 kr. Nødvendig for å oppnå 2,2 m takhøyde. Krever vurdering av grunnmurens bæreevne." },
  { question: "Øker kjeller boligverdien?", answer: "Ja. Godkjent kjellerbolig øker boligverdien med 500 000–2 000 000 kr avhengig av beliggenhet og standard. Ikke godkjent innredning øker verdien mye mindre." },
  { question: "Hva koster det å bygge bad i kjeller?", answer: "Bad i kjeller koster 150 000–350 000 kr for 4–6 m². Inkluderer rørlegger, elektriker, membran, fliser og innredning. Krever spesielt fokus på fuktsikring og avløp." },
  { question: "Hva er viktigst å tenke på i kjeller?", answer: "Fukt er den største utfordringen. Sørg for god drenering utvendig, fuktsikring av veggene, god ventilasjon og riktig isolasjon. Dårlig fuktbehandling gir muggsoppskader som er svært kostbare å utbedre." },
];

export const metadata: Metadata = {
  title: "Hva koster det å innrede kjeller? Priser og krav 2026",
  description: "Innredning av kjeller koster 15 000–35 000 kr/m². Se priser for utleiedel, fuktsikring, lysgraver og TEK17 krav.",
  alternates: { canonical: "https://byggepris.no/kjeller" },
};

export default function Page() {
  return (
    <main className="pt-20"><BreadcrumbSchema items={[{name:"Hjem",href:"/"},{name:"Kjeller",href:"/kjeller"}]} /><ArticleSchema title="Hva koster kjeller?" description="Prisguide for kjeller." slug="kjeller" /><FAQSchema items={faq} /><article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14"><FadeInUp>
      <nav className="text-sm text-text-muted mb-6"><Link href="/" className="hover:text-accent-yellow">Hjem</Link> / <span className="text-text-secondary">Kjeller</span></nav>
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent-yellow/20 bg-accent-yellow/5 mb-4"><span className="text-accent-yellow text-xs font-semibold">OPPDATERT 2026</span></div>
      <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-text-primary mb-4">Hva koster det å innrede kjeller?</h1>
      <p className="text-lg text-text-secondary mb-8">Innredning av kjeller til boareal koster typisk <strong className="text-text-primary">15 000–35 000 kr per m²</strong>. For en utleiedel på 30–50 m² betyr det 500 000–1 500 000 kr. Til gjengjeld øker det boligverdien med 500 000–2 000 000 kr og kan gi leieinntekter på 6 000–12 000 kr per måned.</p>
      <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">Pristabell</h2>
      <div className="bg-bg-card border border-surface-border rounded-2xl overflow-hidden my-6">
        <table className="w-full text-sm"><thead><tr className="text-left text-xs text-text-muted uppercase tracking-wider border-b border-surface-border"><th className="px-5 py-3">Jobb</th><th className="px-5 py-3">Typisk pris</th></tr></thead>
          <tbody className="divide-y divide-surface-border">
            {[["Innredning per m² (enkel)","15 000–25 000 kr"],["Innredning per m² (høy)","25 000–35 000 kr"],["Utleiedel komplett (30–50 m²)","500 000–1 500 000 kr"],["Fuktsikring utvendig per m²","1 500–3 000 kr"],["Lysgraver per stk","15 000–40 000 kr"],["Senking av gulv per m²","3 000–6 000 kr"],["Bad i kjeller (4–6 m²)","150 000–350 000 kr"],["Brannsikring mellom enheter","30 000–80 000 kr"]].map(([j,p])=>(
              <tr key={j} className="hover:bg-bg-tertiary/30"><td className="px-5 py-3 text-text-primary font-medium">{j}</td><td className="px-5 py-3 font-mono text-accent-yellow">{p}</td></tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-10 flex flex-wrap gap-3">
        {[{href:"/utleiedel",label:"Utleiedel"},{href:"/drenering",label:"Drenering"},{href:"/grunnarbeid",label:"Grunnarbeid"},{href:"/bad",label:"Bad"}].map(l=>(<Link key={l.href} href={l.href} className="px-4 py-2 bg-bg-card border border-surface-border rounded-xl text-sm text-text-secondary hover:text-accent-yellow hover:border-accent-yellow/30 transition-all">{l.label}</Link>))}
        <Link href="/kalkulator" className="px-4 py-2 bg-accent-yellow/10 border border-accent-yellow/20 rounded-xl text-sm text-accent-yellow font-semibold hover:bg-accent-yellow/20 transition-all flex items-center gap-1"><IconCalculator size={14} /> Bruk kalkulator</Link>
      </div>
    </FadeInUp></article></main>
  );
}
