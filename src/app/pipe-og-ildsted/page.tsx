import { Metadata } from "next";
import Link from "next/link";
import { FadeInUp } from "@/components/ui/animations";
import { IconCalculator } from "@/components/icons";
import { FAQSchema, BreadcrumbSchema, ArticleSchema } from "@/components/seo/JsonLd";

const faq = [
  { question: "Hva koster en ny pipe?", answer: "Ny pipe gjennom tak i stål koster 30 000–80 000 kr installert. Elementpipe i lettklinker koster 60 000–120 000 kr. Prisen avhenger av antall etasjer, takhøyde og type pipe." },
  { question: "Hva koster det å installere vedovn?", answer: "Vedovn med installasjon koster typisk 25 000–60 000 kr. Ovnen koster 10 000–40 000 kr og installasjon med tilkobling til pipe 8 000–20 000 kr. Krever godkjent pipe og feierens godkjenning." },
  { question: "Hva koster det å installere peis?", answer: "Peis med pipe koster typisk 50 000–150 000 kr. Innsatspeis koster 30 000–60 000 kr, muret peis 60 000–120 000 kr og gasspeis 40 000–80 000 kr. Ny pipe i tillegg koster 30 000–80 000 kr." },
  { question: "Må man ha pipe for vedovn?", answer: "Ja, vedovn krever godkjent pipe som trekker røyk ut over tak. Alternativet er stålpipe gjennom yttervegg og opp, som er billigste løsning på 25 000–50 000 kr. Pipen må godkjennes av feier før bruk." },
  { question: "Hva koster piperehabilitering?", answer: "Rehabilitering av eksisterende pipe koster 15 000–50 000 kr. Flexirør i stål koster 10 000–25 000 kr. Fullføring med keramisk innsats koster 20 000–50 000 kr. Nødvendig når gammel pipe lekker." },
  { question: "Trenger man byggesøknad for vedovn?", answer: "Installasjon av vedovn i eksisterende pipe krever normalt ikke søknad. Men ny pipe krever byggesøknad. Alle installasjoner skal meldes til kommunen og godkjennes av feier før bruk." },
  { question: "Hva koster feiing?", answer: "Årsavgift for feiing og tilsyn koster 400–800 kr per år avhengig av kommune. Feiertjenesten er lovpålagt. Ekstra feiing eller tilsyn utover det vanlige koster 500–1 500 kr per besøk." },
  { question: "Hva koster gasspeis?", answer: "Gasspeis koster 20 000–50 000 kr for enheten. Installasjon inkl. gassrør og avtrekk koster 15 000–30 000 kr. Totalt 35 000–80 000 kr. Gasspeis krever ikke tradisjonell pipe, bare avtrekk gjennom vegg." },
  { question: "Hvilken vedovn er best?", answer: "Nye rentbrennende ovner etter 2022 kravene fra Jøtul, Contura, Rais og Nordpeis er best. Virkningsgrad på 80 %+ betyr lavere vedforbruk. Priser fra 12 000 kr for enkel til 40 000 kr pluss for design." },
  { question: "Hva koster det å bytte vedovn?", answer: "Bytte av vedovn med bruk av eksisterende pipe koster 15 000–45 000 kr. Ovnen koster 10 000–35 000 kr og montering med tilkobling 5 000–10 000 kr. Sjekk om pipen trenger oppgradering for nye ovner." },
];

export const metadata: Metadata = {
  title: "Hva koster pipe og vedovn? Priser for ildsted 2026",
  description: "Ny pipe koster 30 000–80 000 kr. Vedovn med installasjon fra 25 000 kr. Se priser for peis, gasspeis og piperehabilitering.",
  alternates: { canonical: "https://byggepris.no/pipe-og-ildsted" },
};

export default function Page() {
  return (
    <main className="pt-20">
      <BreadcrumbSchema items={[{name:"Hjem",href:"/"},{name:"Pipe og ildsted",href:"/pipe-og-ildsted"}]} />
      <ArticleSchema title="Hva koster pipe og vedovn?" description="Prisguide for pipe og ildsted." slug="pipe-og-ildsted" />
      <FAQSchema items={faq} />
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14"><FadeInUp>
        <nav className="text-sm text-text-muted mb-6"><Link href="/" className="hover:text-accent-yellow">Hjem</Link> / <span className="text-text-secondary">Pipe og ildsted</span></nav>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent-yellow/20 bg-accent-yellow/5 mb-4"><span className="text-accent-yellow text-xs font-semibold">OPPDATERT 2026</span></div>
        <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-text-primary mb-4">Hva koster pipe og vedovn?</h1>
        <p className="text-lg text-text-secondary mb-8">Ny pipe koster <strong className="text-text-primary">30 000–80 000 kr</strong>. Vedovn med installasjon koster <strong className="text-text-primary">25 000–60 000 kr</strong>. En peis med ny pipe kan koste 50 000–150 000 kr totalt. Vedovn er en populær investering som gir koselig varme og reduserer strømregningen.</p>
        <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">Komplett pristabell</h2>
        <div className="bg-bg-card border border-surface-border rounded-2xl overflow-hidden my-6">
          <table className="w-full text-sm"><thead><tr className="text-left text-xs text-text-muted uppercase tracking-wider border-b border-surface-border"><th className="px-5 py-3">Prosjekt</th><th className="px-5 py-3">Typisk pris</th></tr></thead>
            <tbody className="divide-y divide-surface-border">
              {[["Ny stålpipe gjennom tak","30 000–80 000 kr"],["Ny elementpipe i lettklinker","60 000–120 000 kr"],["Vedovn med installasjon","25 000–60 000 kr"],["Bytte vedovn (eksisterende pipe)","15 000–45 000 kr"],["Innsatspeis","30 000–60 000 kr"],["Muret peis med pipe","80 000–200 000 kr"],["Gasspeis med avtrekk","35 000–80 000 kr"],["Piperehabilitering med flexirør","10 000–25 000 kr"],["Piperehabilitering keramisk","20 000–50 000 kr"],["Feiing årsavgift","400–800 kr"]].map(([j,p])=>(
                <tr key={j} className="hover:bg-bg-tertiary/30"><td className="px-5 py-3 text-text-primary font-medium">{j}</td><td className="px-5 py-3 font-mono text-accent-yellow">{p}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-10"><Link href="/kalkulator" className="inline-flex items-center gap-2 px-6 py-3 bg-accent-yellow text-bg-primary font-display font-bold rounded-xl hover:bg-accent-warm transition-colors shadow-glow-sm"><IconCalculator size={18} /> Beregn ditt prosjekt</Link></div>
      </FadeInUp></article>
    </main>
  );
}
