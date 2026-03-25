import { Metadata } from "next";
import Link from "next/link";
import { FadeInUp } from "@/components/ui/animations";
import { IconCalculator } from "@/components/icons";
import { FAQSchema, BreadcrumbSchema, ArticleSchema } from "@/components/seo/JsonLd";

const faq = [
  { question: "Hva koster det a lage utleiedel?", answer: "En godkjent utleiedel koster typisk 500 000-1 500 000 kr for 30-50 m2. Inkluderer eget bad, kjokken, soverom, inngang, brannsikring og alle TEK17-krav. I kjeller: 600 000-1 200 000 kr. I loft: 500 000-1 000 000 kr." },
  { question: "Lonner utleiedel seg?", answer: "Ja, i de fleste pressomrader. En utleiedel oker boligverdien med 500 000-1 500 000 kr og gir leieinntekter pa 6 000-15 000 kr/mnd. Tilbakebetalingstid: 3-8 ar avhengig av beliggenhet og leieniva." },
  { question: "Hva er kravene til utleiedel?", answer: "TEK17-krav: min 2,2 m takhøyde, dagslys i oppholdsrom, egen inngang, eget bad og kjokken, rommingsvei, branncelle mellom boenhetene, ventilasjon og lyd-isolasjon mellom enhetene." },
  { question: "Trenger man byggesoknad for utleiedel?", answer: "Ja, alltid. Ny boenhet krever byggesoknad med ansvarlig soker. Du ma dokumentere at alle TEK17-krav oppfylles. Kommunen ma godkjenne tiltaket for du starter." },
  { question: "Hvor mye oker verdien med utleiedel?", answer: "En godkjent utleiedel oker boligverdien med typisk 500 000-1 500 000 kr, avhengig av beliggenhet og leieniva. I Oslo kan okingen vaere 1-2 millioner. Ikke-godkjente utleiedeler gir vesentlig lavere verdioking." },
  { question: "Hva koster utleiedel i kjeller?", answer: "Utleiedel i kjeller koster 600 000-1 200 000 kr for 30-50 m2. Lysgraver (15 000-40 000 kr/stk) er ofte nodvendig for dagslys-krav. Fuktsikring og isolasjon er kritisk." },
  { question: "Kan man leie ut uten godkjenning?", answer: "Du kan leie ut et rom i egen bolig uten godkjenning (hybel). Men en separat boenhet med eget kjokken og bad krever godkjenning. Ikke-godkjent utleie kan gi problemer med forsikring, skatt og kommunen." },
  { question: "Hva koster det a lage utleiedel i loft?", answer: "Utleiedel i loft koster 500 000-1 000 000 kr. Fordelen er at takhøyde ofte er ok (sjekk minst 2,2 m). Ulempen er at det kan kreve ombygging av trapp, brannsikring og lydisolering." },
  { question: "Hvor mye kan man leie ut for?", answer: "Leiepriser varierer: Oslo sentrum 10 000-18 000 kr/mnd, Oslo ytre 8 000-14 000 kr/mnd, Bergen/Trondheim 7 000-12 000 kr/mnd, mindre byer 5 000-9 000 kr/mnd. Avhenger av storrelse, beliggenhet og standard." },
  { question: "Er leieinntekter skattefrie?", answer: "Leieinntekter fra utleie av del av egen bolig er skattefrie dersom du bruker minst halvparten av boligen selv (etter utleieverdi). Leier du ut mer enn halvparten, eller en separat boenhet, er inntektene skattepliktige." },
];

export const metadata: Metadata = { title: "Hva koster utleiedel? Priser og krav 2026", description: "Utleiedel koster 500 000-1 500 000 kr. Se krav, priser for kjeller/loft, leieinntekter og verdiøkning.", alternates: { canonical: "https://byggepris.no/utleiedel" } };

export default function Page() {
  return (<main className="pt-20"><BreadcrumbSchema items={[{name:"Hjem",href:"/"},{name:"Utleiedel",href:"/utleiedel"}]} /><ArticleSchema title="Hva koster utleiedel?" description="Prisguide for utleiedel i bolig." slug="utleiedel" /><FAQSchema items={faq} /><article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14"><FadeInUp>
    <nav className="text-sm text-text-muted mb-6"><Link href="/" className="hover:text-accent-yellow">Hjem</Link> / <span className="text-text-secondary">Utleiedel</span></nav>
    <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-text-primary mb-6">Hva koster utleiedel?</h1>
    <p className="text-lg text-text-secondary mb-6">En godkjent utleiedel koster typisk 500 000-1 500 000 kr. Til gjengjeld oker den boligverdien med 500 000-1 500 000 kr og gir leieinntekter pa 6 000-15 000 kr per maned. For mange boligeiere er utleiedel den smarteste investeringen de kan gjore.</p>
    <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">Priseksempler</h2>
    <div className="bg-bg-card border border-surface-border rounded-xl overflow-hidden my-6"><table className="w-full text-sm"><thead><tr className="text-left text-xs text-text-muted uppercase tracking-wider border-b border-surface-border"><th className="px-5 py-3">Type</th><th className="px-5 py-3">Typisk pris</th><th className="px-5 py-3">Leie/mnd</th></tr></thead><tbody className="divide-y divide-surface-border">
      {[["Utleiedel i kjeller (30-50 m2)","600 000-1 200 000 kr","6 000-12 000 kr"],["Utleiedel i loft (30-50 m2)","500 000-1 000 000 kr","7 000-13 000 kr"],["Utleiedel i tilbygg","800 000-1 500 000 kr","8 000-15 000 kr"],["Hybel (ett rom, delt bad)","50 000-200 000 kr","4 000-8 000 kr"]].map(([j,p,l])=>(<tr key={j}><td className="px-5 py-3 text-text-primary font-medium">{j}</td><td className="px-5 py-3 font-mono text-accent-yellow">{p}</td><td className="px-5 py-3 font-mono text-text-secondary">{l}</td></tr>))}
    </tbody></table></div>
    <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">TEK17-krav for utleiedel</h2>
    <div className="space-y-2 text-text-secondary mb-6">
      <p><strong className="text-text-primary">Takhøyde:</strong> Minimum 2,2 meter i oppholdsrom og soverom.</p>
      <p><strong className="text-text-primary">Dagslys:</strong> Alle oppholdsrom ma ha vindu med dagslys. I kjeller kreves lysgraver.</p>
      <p><strong className="text-text-primary">Egen inngang:</strong> Separat inngang eller felles trapperom med brannsikring.</p>
      <p><strong className="text-text-primary">Eget bad og kjokken:</strong> Fullverdig bad med toalett, dusj og servant. Kjokken med vask og mulighet for matlaging.</p>
      <p><strong className="text-text-primary">Branncelle:</strong> Branncellebegrensende konstruksjon mellom boenhetene (EI 30 eller EI 60). Røykvarsler og slokkeutstyr.</p>
      <p><strong className="text-text-primary">Rommingsvei:</strong> To uavhengige rommingsveier fra hver boenhet.</p>
    </div>
    <div className="mt-10 flex flex-col sm:flex-row gap-4">
      <Link href="/kalkulator" className="inline-flex items-center gap-2 px-6 py-3 bg-accent-yellow text-bg-primary font-display font-bold rounded-xl hover:bg-accent-warm transition-colors shadow-glow-sm"><IconCalculator size={18} /> Beregn ditt prosjekt</Link>
      <Link href="/kjeller" className="inline-flex items-center gap-2 px-6 py-3 border border-surface-border text-text-primary font-display font-semibold rounded-xl hover:border-accent-yellow/30 transition-colors">Se kjellerpriser</Link>
    </div>
  </FadeInUp></article></main>);
}
