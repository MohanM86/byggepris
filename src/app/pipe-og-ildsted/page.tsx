import { Metadata } from "next";
import Link from "next/link";
import { FadeInUp } from "@/components/ui/animations";
import { IconCalculator } from "@/components/icons";
import { FAQSchema, BreadcrumbSchema, ArticleSchema } from "@/components/seo/JsonLd";

const faq = [
  { question: "Hva koster en ny pipe?", answer: "Ny stålpipe gjennom tak koster 30 000–80 000 kr installert. Elementpipe i lettklinker koster 60 000–120 000 kr. Prisen avhenger av antall etasjer, takhøyde og type pipe." },
  { question: "Hva koster det å installere vedovn?", answer: "Vedovn med installasjon koster 25 000–60 000 kr. Ovnen koster 10 000–40 000 kr og installasjon med tilkobling til pipe 8 000–20 000 kr. Krever godkjent pipe og feierens godkjenning." },
  { question: "Hva koster det å installere peis?", answer: "Peis med pipe koster 50 000–150 000 kr. Innsatspeis 30 000–60 000 kr, muret peis 60 000–120 000 kr og gasspeis 40 000–80 000 kr. Ny pipe i tillegg 30 000–80 000 kr." },
  { question: "Må man ha pipe for vedovn?", answer: "Ja, vedovn krever godkjent pipe som trekker røyk ut over tak. Stålpipe gjennom yttervegg og opp er billigste løsning på 25 000–50 000 kr. Pipen må godkjennes av feier før bruk." },
  { question: "Hva koster piperehabilitering?", answer: "Rehabilitering av eksisterende pipe koster 15 000–50 000 kr. Flexirør i stål 10 000–25 000 kr. Keramisk innsats 20 000–50 000 kr. Nødvendig når gammel pipe lekker." },
  { question: "Trenger man byggesøknad for vedovn?", answer: "Installasjon av vedovn i eksisterende pipe krever normalt ikke søknad. Ny pipe krever byggesøknad. Alle installasjoner skal meldes til kommunen og godkjennes av feier." },
  { question: "Hva koster feiing?", answer: "Årsavgift for feiing og tilsyn koster 400–800 kr per år avhengig av kommune. Feiertjenesten er lovpålagt. Ekstra feiing utover det vanlige koster 500–1 500 kr per besøk." },
  { question: "Hva koster gasspeis?", answer: "Gasspeis koster 20 000–50 000 kr for enheten. Installasjon inkl. gassrør og avtrekk 15 000–30 000 kr. Totalt 35 000–80 000 kr. Krever ikke tradisjonell pipe, bare avtrekk gjennom vegg." },
  { question: "Hvilken vedovn er best?", answer: "Nye rentbrennende ovner fra Jøtul, Contura, Rais og Nordpeis er best. Virkningsgrad på 80 % pluss betyr lavere vedforbruk. Priser fra 12 000 kr for enkel til 40 000 kr pluss for design." },
  { question: "Hva koster det å bytte vedovn?", answer: "Bytte av vedovn med eksisterende pipe koster 15 000–45 000 kr. Ovnen 10 000–35 000 kr og montering med tilkobling 5 000–10 000 kr. Sjekk om pipen trenger oppgradering." },
  { question: "Hvor mye sparer man på vedovn?", answer: "En vedovn kan spare 5 000–15 000 kr per år i strøm avhengig av bruk og strømpris. Med virkningsgrad på 80 % gir et vedlass til 5 000 kr varme tilsvarende 8 000–10 000 kr i strøm." },
  { question: "Kan man installere vedovn selv?", answer: "Du kan sette opp selve ovnen, men tilkobling til pipe og røykrør bør gjøres av fagfolk. Pipen må uansett godkjennes av feier før bruk. Feil installasjon er brannfarlig." },
];

export const metadata: Metadata = {
  title: "Hva koster pipe og vedovn? Priser for ildsted 2026",
  description: "Ny pipe koster 30 000–80 000 kr. Vedovn fra 25 000 kr. Se priser for peis, gasspeis, piperehabilitering og feiing.",
  alternates: { canonical: "https://byggepris.no/pipe-og-ildsted" },
  openGraph: { title: "Hva koster pipe og vedovn?", description: "Komplett prisguide for ildsted.", url: "https://byggepris.no/pipe-og-ildsted", type: "article" },
};

export default function Page() {
  return (
    <main className="pt-20">
      <BreadcrumbSchema items={[{ name: "Hjem", href: "/" }, { name: "Pipe og ildsted", href: "/pipe-og-ildsted" }]} />
      <ArticleSchema title="Hva koster pipe og vedovn?" description="Prisguide for pipe og ildsted." slug="pipe-og-ildsted" />
      <FAQSchema items={faq} />
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <FadeInUp>
          <nav className="text-sm text-text-muted mb-6"><Link href="/" className="hover:text-accent-yellow">Hjem</Link> / <span className="text-text-secondary">Pipe og ildsted</span></nav>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent-yellow/20 bg-accent-yellow/5 mb-4"><span className="text-accent-yellow text-xs font-semibold">OPPDATERT 2026</span></div>
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-text-primary mb-4">Hva koster pipe og vedovn?</h1>
          <p className="text-lg text-text-secondary mb-8">Ny pipe koster <strong className="text-text-primary">30 000–80 000 kr</strong>. Vedovn med installasjon koster <strong className="text-text-primary">25 000–60 000 kr</strong>. En peis med ny pipe kan koste 50 000–150 000 kr totalt. Vedovn er en populær investering som gir koselig varme og sparer 5 000–15 000 kr per år i strøm.</p>

          {/* PRISBAROMETER */}
          <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">Prisbarometer</h2>
          <div className="bg-bg-card border border-surface-border rounded-2xl p-6 my-6">
            <p className="text-xs text-text-muted mb-3 uppercase tracking-wider font-semibold">Vedovn med installasjon</p>
            <div className="flex items-stretch gap-0 rounded-xl overflow-hidden mb-4">
              <div className="flex-1 bg-emerald-500/10 py-3 px-4 text-center border-r border-surface-border"><p className="text-xs text-text-muted mb-1">Rimelig</p><p className="font-mono font-bold text-sm text-emerald-400">Under 30 000 kr</p></div>
              <div className="flex-1 bg-accent-yellow/10 py-3 px-4 text-center border-r border-surface-border"><p className="text-xs text-text-muted mb-1">Normal</p><p className="font-mono font-bold text-sm text-accent-yellow">30 000–50 000 kr</p></div>
              <div className="flex-1 bg-red-500/10 py-3 px-4 text-center"><p className="text-xs text-text-muted mb-1">Dyrt</p><p className="font-mono font-bold text-sm text-red-400">Over 50 000 kr</p></div>
            </div>
            <p className="text-xs text-text-tertiary">Med eksisterende pipe. Ny pipe kommer i tillegg med 30 000–80 000 kr.</p>
          </div>

          {/* PRISTABELL */}
          <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">Komplett pristabell</h2>
          <div className="bg-bg-card border border-surface-border rounded-2xl overflow-hidden my-6">
            <table className="w-full text-sm"><thead><tr className="text-left text-xs text-text-muted uppercase tracking-wider border-b border-surface-border"><th className="px-5 py-3">Prosjekt</th><th className="px-5 py-3">Typisk pris</th></tr></thead>
              <tbody className="divide-y divide-surface-border">
                {[["Vedovn enkel (Jøtul, Contura)","12 000–25 000 kr"],["Vedovn design (Rais, Nordpeis)","25 000–50 000 kr"],["Installasjon og tilkobling","5 000–15 000 kr"],["Ny stålpipe gjennom tak","30 000–80 000 kr"],["Ny elementpipe (lettklinker)","60 000–120 000 kr"],["Innsatspeis","30 000–60 000 kr"],["Muret peis med pipe","80 000–200 000 kr"],["Gasspeis med avtrekk","35 000–80 000 kr"],["Piperehabilitering (flexirør)","10 000–25 000 kr"],["Piperehabilitering (keramisk)","20 000–50 000 kr"],["Bytte vedovn (eksisterende pipe)","15 000–45 000 kr"],["Feiing årsavgift","400–800 kr"]].map(([j,p])=>(
                  <tr key={j} className="hover:bg-bg-tertiary/30"><td className="px-5 py-3 text-text-primary font-medium">{j}</td><td className="px-5 py-3 font-mono text-accent-yellow">{p}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* REGNEKSEMPEL */}
          <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">Regneksempel: Ny vedovn med pipe</h2>
          <div className="bg-bg-card border border-surface-border rounded-2xl p-6 my-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <p className="font-display font-bold text-accent-yellow mb-3">Med eksisterende pipe</p>
                <div className="space-y-2 text-sm">
                  {[["Vedovn (Jøtul F 520)","22 000 kr"],["Røykrør og tilkobling","3 500 kr"],["Installasjon","5 000 kr"],["Gulvplate (brannvern)","2 500 kr"],["Feiergodkjenning","1 000 kr"]].map(([k,v])=>(<div key={k} className="flex justify-between"><span className="text-text-secondary">{k}</span><span className="font-mono text-text-primary">{v}</span></div>))}
                  <div className="flex justify-between border-t border-surface-border pt-2 mt-2"><span className="font-semibold">Totalt</span><span className="font-mono text-accent-yellow font-semibold">34 000 kr</span></div>
                </div>
              </div>
              <div>
                <p className="font-display font-bold text-text-primary mb-3">Med ny stålpipe</p>
                <div className="space-y-2 text-sm">
                  {[["Vedovn (Jøtul F 520)","22 000 kr"],["Stålpipe gjennom tak","55 000 kr"],["Røykrør og tilkobling","3 500 kr"],["Installasjon","8 000 kr"],["Gulvplate og pipekrage","4 000 kr"],["Feiergodkjenning","1 000 kr"]].map(([k,v])=>(<div key={k} className="flex justify-between"><span className="text-text-secondary">{k}</span><span className="font-mono text-text-primary">{v}</span></div>))}
                  <div className="flex justify-between border-t border-surface-border pt-2 mt-2"><span className="font-semibold">Totalt</span><span className="font-mono text-accent-yellow font-semibold">93 500 kr</span></div>
                </div>
              </div>
            </div>
          </div>

          {/* VANLIGE FEIL */}
          <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">5 vanlige feil med vedovn</h2>
          <div className="space-y-4 my-6">
            {[
              {t:"Kjøper ovn uten å sjekke pipen",d:"Gammel pipe kan trenge rehabilitering for 10 000–50 000 kr. Sjekk med feier før du kjøper ovn, så unngår du dyre overraskelser."},
              {t:"Velger feil størrelse",d:"For stor ovn gir for mye varme i et rom og for lite i resten av huset. Be om rådgivning basert på rommets størrelse og isolasjon."},
              {t:"Glemmer gulvplate",d:"Brennbart gulv foran ovnen krever gulvplate av glass eller stål. Koster 1 500–4 000 kr og er lovpålagt. Unngå brann."},
              {t:"Installerer uten feier",d:"Alle nye installasjoner skal godkjennes av feier før bruk. Uten godkjenning kan forsikringen nekte å dekke brann."},
              {t:"Bruker feil ved",d:"Våt ved gir mye sot, dårlig varme og forurensning. Bruk tørr ved med under 20 % fuktighet. Invester i vedmåler til 200 kr."},
            ].map((item,i)=>(<div key={i} className="bg-bg-card border border-surface-border rounded-xl p-5"><div className="flex items-center gap-3 mb-2"><span className="w-7 h-7 rounded-lg bg-accent-yellow/10 border border-accent-yellow/20 text-accent-yellow text-xs font-display font-bold flex items-center justify-center">{i+1}</span><h3 className="font-display font-bold text-text-primary">{item.t}</h3></div><p className="text-sm text-text-secondary ml-10">{item.d}</p></div>))}
          </div>

          {/* SPARETIPS */}
          <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">Slik sparer du penger</h2>
          <div className="space-y-3 text-text-secondary mb-6">
            <p><strong className="text-text-primary">Bruk eksisterende pipe.</strong> Rehabilitering koster 10 000–25 000 kr, ny pipe koster 30 000–80 000 kr. Stor besparelse hvis pipen kan reddes.</p>
            <p><strong className="text-text-primary">Velg norsk merke.</strong> Jøtul og Nordpeis lager ovner tilpasset norsk klima. God virkningsgrad betyr lavere vedforbruk.</p>
            <p><strong className="text-text-primary">Installer om sommeren.</strong> Pipeinstallatører har kortere ventetid og ofte bedre priser utenfor fyringssesong.</p>
            <p><strong className="text-text-primary">Hogg og tørk ved selv.</strong> Kjøpt ved koster 3 000–5 000 kr per kubikkmeter. Selvhogst med tørkeplass sparer flere tusen per år.</p>
            <p><strong className="text-text-primary">Søk kommunen om eldstadtilskudd.</strong> Noen kommuner tilbyr tilskudd for bytte fra gammel til rentbrennende ovn for å bedre luftkvaliteten.</p>
          </div>

          {/* RELATERTE */}
          <div className="mt-10 mb-6">
            <h2 className="font-display font-bold text-xl text-text-primary mb-4">Relaterte prosjekter</h2>
            <div className="flex flex-wrap gap-3">
              {[{href:"/isolasjon",label:"Isolasjon"},{href:"/varmepumpe",label:"Varmepumpe"},{href:"/bygge-hus",label:"Bygge hus"},{href:"/hytte",label:"Hytte"},{href:"/tak",label:"Tak"}].map(l=>(
                <Link key={l.href} href={l.href} className="px-4 py-2 bg-bg-card border border-surface-border rounded-xl text-sm text-text-secondary hover:text-accent-yellow hover:border-accent-yellow/30 transition-all">{l.label}</Link>
              ))}
              <Link href="/kalkulator" className="px-4 py-2 bg-accent-yellow/10 border border-accent-yellow/20 rounded-xl text-sm text-accent-yellow font-semibold hover:bg-accent-yellow/20 transition-all flex items-center gap-1"><IconCalculator size={14} /> Bruk kalkulator</Link>
            </div>
          </div>
        </FadeInUp>
      </article>
    </main>
  );
}
