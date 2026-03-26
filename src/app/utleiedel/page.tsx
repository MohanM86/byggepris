import { Metadata } from "next";
import Link from "next/link";
import { FadeInUp } from "@/components/ui/animations";
import { IconCalculator } from "@/components/icons";
import { FAQSchema, BreadcrumbSchema, ArticleSchema } from "@/components/seo/JsonLd";

const faq = [
  { question: "Hva koster det å lage utleiedel?", answer: "En godkjent utleiedel koster typisk 500 000–1 500 000 kr for 30–50 m². Inkluderer eget bad, kjøkken, soverom, inngang, brannsikring og alle TEK17 krav. I kjeller koster det 600 000–1 200 000 kr og i loft 500 000–1 000 000 kr." },
  { question: "Lønner utleiedel seg?", answer: "Ja, i de fleste pressområder. En utleiedel øker boligverdien med 500 000–1 500 000 kr og gir leieinntekter på 6 000–15 000 kr per måned. Tilbakebetalingstid er 3–8 år avhengig av beliggenhet." },
  { question: "Hva er kravene til utleiedel?", answer: "TEK17 krever minimum 2,2 m takhøyde, dagslys i oppholdsrom, egen inngang, eget bad og kjøkken, rømningsvei, branncelle mellom boenhetene, ventilasjon og lydisolasjon." },
  { question: "Trenger man byggesøknad for utleiedel?", answer: "Ja, alltid. Ny boenhet krever byggesøknad med ansvarlig søker. Du må dokumentere at alle TEK17 krav oppfylles. Kommunen må godkjenne tiltaket før du starter." },
  { question: "Hvor mye øker verdien med utleiedel?", answer: "En godkjent utleiedel øker boligverdien med typisk 500 000–1 500 000 kr avhengig av beliggenhet og leienivå. I Oslo kan økningen være 1–2 millioner. Ikke godkjente utleiedeler gir vesentlig lavere verdiøkning." },
  { question: "Hva koster utleiedel i kjeller?", answer: "Utleiedel i kjeller koster 600 000–1 200 000 kr for 30–50 m². Lysgraver på 15 000–40 000 kr per stk er ofte nødvendig for dagslys krav. Fuktsikring og isolasjon er kritisk." },
  { question: "Kan man leie ut uten godkjenning?", answer: "Du kan leie ut et rom i egen bolig uten godkjenning som hybel. Men en separat boenhet med eget kjøkken og bad krever godkjenning. Ikke godkjent utleie kan gi problemer med forsikring, skatt og kommunen." },
  { question: "Hva koster utleiedel i loft?", answer: "Utleiedel i loft koster 500 000–1 000 000 kr. Fordelen er at takhøyde ofte er tilstrekkelig. Ulempen er at det kan kreve ombygging av trapp, brannsikring og lydisolering." },
  { question: "Hvor mye kan man leie ut for?", answer: "Leiepriser varierer. Oslo sentrum 10 000–18 000 kr per mnd, Oslo ytre 8 000–14 000 kr, Bergen og Trondheim 7 000–12 000 kr og mindre byer 5 000–9 000 kr. Avhenger av størrelse, beliggenhet og standard." },
  { question: "Er leieinntekter skattefrie?", answer: "Leieinntekter fra utleie av del av egen bolig er skattefrie dersom du bruker minst halvparten av boligen selv etter utleieverdi. Leier du ut mer enn halvparten eller en separat boenhet er inntektene skattepliktige." },
];

export const metadata: Metadata = {
  title: "Hva koster utleiedel? Priser og krav 2026",
  description: "Utleiedel koster 500 000–1 500 000 kr. Se krav, priser for kjeller og loft, leieinntekter og verdiøkning.",
  alternates: { canonical: "https://byggepris.no/utleiedel" },
};

export default function Page() {
  return (
    <main className="pt-20"><BreadcrumbSchema items={[{name:"Hjem",href:"/"},{name:"Utleiedel",href:"/utleiedel"}]} /><ArticleSchema title="Hva koster utleiedel?" description="Prisguide for utleiedel." slug="utleiedel" /><FAQSchema items={faq} /><article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14"><FadeInUp>
      <nav className="text-sm text-text-muted mb-6"><Link href="/" className="hover:text-accent-yellow">Hjem</Link> / <span className="text-text-secondary">Utleiedel</span></nav>
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent-yellow/20 bg-accent-yellow/5 mb-4"><span className="text-accent-yellow text-xs font-semibold">OPPDATERT 2026</span></div>
      <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-text-primary mb-4">Hva koster utleiedel?</h1>
      <p className="text-lg text-text-secondary mb-8">En godkjent utleiedel koster typisk <strong className="text-text-primary">500 000–1 500 000 kr</strong>. Til gjengjeld øker den boligverdien med 500 000–1 500 000 kr og gir leieinntekter på 6 000–15 000 kr per måned. For mange boligeiere er utleiedel den smarteste investeringen de kan gjøre.</p>
      <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">Pristabell</h2>
      <div className="bg-bg-card border border-surface-border rounded-2xl overflow-hidden my-6">
        <table className="w-full text-sm"><thead><tr className="text-left text-xs text-text-muted uppercase tracking-wider border-b border-surface-border"><th className="px-5 py-3">Type</th><th className="px-5 py-3">Typisk pris</th><th className="px-5 py-3">Leie per mnd</th></tr></thead>
          <tbody className="divide-y divide-surface-border">
            {[["Utleiedel i kjeller (30–50 m²)","600 000–1 200 000 kr","6 000–12 000 kr"],["Utleiedel i loft (30–50 m²)","500 000–1 000 000 kr","7 000–13 000 kr"],["Utleiedel i tilbygg","800 000–1 500 000 kr","8 000–15 000 kr"],["Hybel (ett rom, delt bad)","50 000–200 000 kr","4 000–8 000 kr"]].map(([j,p,l])=>(
              <tr key={j} className="hover:bg-bg-tertiary/30"><td className="px-5 py-3 text-text-primary font-medium">{j}</td><td className="px-5 py-3 font-mono text-accent-yellow">{p}</td><td className="px-5 py-3 font-mono text-text-secondary">{l}</td></tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-10 flex flex-wrap gap-3">
        {[{href:"/kjeller",label:"Kjeller"},{href:"/tilbygg",label:"Tilbygg"},{href:"/bad",label:"Bad"},{href:"/bygge-hus",label:"Bygge hus"}].map(l=>(<Link key={l.href} href={l.href} className="px-4 py-2 bg-bg-card border border-surface-border rounded-xl text-sm text-text-secondary hover:text-accent-yellow hover:border-accent-yellow/30 transition-all">{l.label}</Link>))}
        <Link href="/kalkulator" className="px-4 py-2 bg-accent-yellow/10 border border-accent-yellow/20 rounded-xl text-sm text-accent-yellow font-semibold hover:bg-accent-yellow/20 transition-all flex items-center gap-1"><IconCalculator size={14} /> Bruk kalkulator</Link>
      </div>
    </FadeInUp></article></main>
  );
}
