import { Metadata } from "next";
import Link from "next/link";
import { FadeInUp } from "@/components/ui/animations";
import { IconCalculator } from "@/components/icons";
import { FAQSchema, BreadcrumbSchema, ArticleSchema } from "@/components/seo/JsonLd";

const faq = [
  { question: "Hva koster en ny pipe?", answer: "Ny pipe (stalpipe gjennom tak) koster typisk 30 000-80 000 kr installert. Elementpipe i lettklinker: 60 000-120 000 kr. Prisen avhenger av etasjer, takhøyde og type pipe." },
  { question: "Hva koster det a installere vedovn?", answer: "Vedovn med installasjon koster typisk 25 000-60 000 kr. Ovnen: 10 000-40 000 kr. Installasjon og tilkobling til pipe: 8 000-20 000 kr. Krever godkjent pipe og feierens godkjenning." },
  { question: "Hva koster det a installere peis?", answer: "Peis med pipe koster typisk 50 000-150 000 kr. Innsatspeis: 30 000-60 000 kr. Muret peis: 60 000-120 000 kr. Gasspeis: 40 000-80 000 kr. Ny pipe i tillegg: 30 000-80 000 kr." },
  { question: "Ma man ha pipe for vedovn?", answer: "Ja, vedovn krever godkjent pipe som trekker royk ut over tak. Alternativet er stalpipe gjennom yttervegg og opp (billigste losning: 25 000-50 000 kr). Pipen ma godkjennes av feier for bruk." },
  { question: "Hva koster piperehabilitering?", answer: "Rehabilitering av eksisterende pipe koster 15 000-50 000 kr. Flexiror (staltrekkror): 10 000-25 000 kr. Fullforing med keramisk innsats: 20 000-50 000 kr. Nødvendig nar gammel pipe lekker." },
  { question: "Trenger man byggesoknad for vedovn?", answer: "Installasjon av vedovn i eksisterende pipe krever normalt ikke soknad. Men ny pipe krever byggesoknad. Alle installasjoner skal meldes til kommunen og godkjennes av feier for bruk." },
  { question: "Hva koster feier?", answer: "Arsavgift for feiing og tilsyn koster 400-800 kr per ar, avhengig av kommune. Feiertjenesten er lovpalagt. Ekstra feiing eller tilsyn utover det vanlige koster 500-1 500 kr per besok." },
  { question: "Hva koster gasspeis?", answer: "Gasspeis koster 20 000-50 000 kr for enheten. Installasjon inkl. gassror og avtrekk: 15 000-30 000 kr. Totalt: 35 000-80 000 kr. Gasspeis krever ikke tradisjonell pipe, men avtrekk gjennom vegg." },
  { question: "Hvilken vedovn er best?", answer: "Nye rentbrennende ovner (etter 2022-kravene) fra Jøtul, Contura, Rais og Nordpeis er best. Virkningsgrad pa 80%+ betyr lavere vedforbruk. Priser fra 12 000 kr (enkel) til 40 000+ kr (design)." },
  { question: "Hva koster det a bytte vedovn?", answer: "Bytte av vedovn (bruk eksisterende pipe) koster 15 000-45 000 kr. Ovnen: 10 000-35 000 kr. Montering og tilkobling: 5 000-10 000 kr. Sjekk om pipen trenger oppgradering for nye ovner." },
];

export const metadata: Metadata = { title: "Hva koster pipe og vedovn? Priser for ildsted 2026", description: "Ny pipe koster 30 000-80 000 kr. Vedovn med installasjon fra 25 000 kr. Se priser for peis, gasspeis og piperehabilitering.", alternates: { canonical: "https://byggepris.no/pipe-og-ildsted" } };

export default function Page() {
  return (<main className="pt-20"><BreadcrumbSchema items={[{name:"Hjem",href:"/"},{name:"Pipe og ildsted",href:"/pipe-og-ildsted"}]} /><ArticleSchema title="Hva koster pipe og vedovn?" description="Prisguide for pipe og ildsted." slug="pipe-og-ildsted" /><FAQSchema items={faq} /><article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14"><FadeInUp>
    <nav className="text-sm text-text-muted mb-6"><Link href="/" className="hover:text-accent-yellow">Hjem</Link> / <span className="text-text-secondary">Pipe og ildsted</span></nav>
    <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-text-primary mb-6">Hva koster pipe og vedovn?</h1>
    <p className="text-lg text-text-secondary mb-6">Ny pipe koster 30 000-80 000 kr. Vedovn med installasjon koster 25 000-60 000 kr. En peis med ny pipe kan koste 50 000-150 000 kr totalt. Vedovn er en populær investering som gir koselig varme og reduserer stromregningen.</p>
    <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">Priseksempler</h2>
    <div className="bg-bg-card border border-surface-border rounded-xl overflow-hidden my-6"><table className="w-full text-sm"><thead><tr className="text-left text-xs text-text-muted uppercase tracking-wider border-b border-surface-border"><th className="px-5 py-3">Prosjekt</th><th className="px-5 py-3">Typisk pris</th></tr></thead><tbody className="divide-y divide-surface-border">
      {[["Ny stalpipe gjennom tak","30 000-80 000 kr"],["Ny elementpipe (lettklinker)","60 000-120 000 kr"],["Vedovn + installasjon","25 000-60 000 kr"],["Bytte vedovn (eksisterende pipe)","15 000-45 000 kr"],["Innsatspeis","30 000-60 000 kr"],["Muret peis med pipe","80 000-200 000 kr"],["Gasspeis med avtrekk","35 000-80 000 kr"],["Piperehabilitering (flexiror)","10 000-25 000 kr"],["Piperehabilitering (keramisk)","20 000-50 000 kr"]].map(([j,p])=>(<tr key={j}><td className="px-5 py-3 text-text-primary font-medium">{j}</td><td className="px-5 py-3 font-mono text-accent-yellow">{p}</td></tr>))}
    </tbody></table></div>
    <div className="mt-10"><Link href="/kalkulator" className="inline-flex items-center gap-2 px-6 py-3 bg-accent-yellow text-bg-primary font-display font-bold rounded-xl hover:bg-accent-warm transition-colors shadow-glow-sm"><IconCalculator size={18} /> Beregn ditt prosjekt</Link></div>
  </FadeInUp></article></main>);
}
