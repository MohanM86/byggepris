import { Metadata } from "next";
import Link from "next/link";
import { FadeInUp } from "@/components/ui/animations";
import { IconCalculator } from "@/components/icons";
import { FAQSchema, BreadcrumbSchema, ArticleSchema } from "@/components/seo/JsonLd";

const faq = [
  { question: "Hva koster nye vinduer?", answer: "Nye vinduer koster typisk 5 000-15 000 kr per vindu inkl. montering. Et helt hus (15-20 vinduer) koster 100 000-250 000 kr. Prisen avhenger av størrelse, type glass, karmmateriale og om karmen må byttes." },
  { question: "Hva koster det å bytte 10 vinduer?", answer: "Å bytte 10 vinduer koster typisk 70 000-150 000 kr inkl. montering og ettetting. Standard vinduer (2-lags) er rimeligst, 3-lags energiglass koster 20-30% mer men sparer energi." },
  { question: "Lønner det seg å bytte vinduer?", answer: "Ja, hvis vinduene er over 25-30 år gamle. Moderne 3-lags vinduer kan redusere varmetapet gjennom vindu med 50-70%, noe som sparer 5 000-15 000 kr i strøm per år. Tilbakebetalingstiden er typisk 10-15 år." },
  { question: "Hva koster en balkongdør?", answer: "En ny balkongdør koster typisk 10 000-25 000 kr inkl. montering. Skyvedør i glass (stor åpning) koster 20 000-50 000 kr. Prisen avhenger av størrelse, glass-type og materiale." },
  { question: "Hva koster ytterdør?", answer: "En ny ytterdør koster typisk 10 000-40 000 kr inkl. montering. Standarddør i tre: 10 000-20 000 kr. Sikkerhetsdør: 15 000-30 000 kr. Designdør med glass: 20 000-40 000 kr." },
  { question: "Trenger man byggesøknad for å bytte vinduer?", answer: "Vanlig vindusbytte (samme størrelse og plassering) er normalt ikke søknadspliktig. Men å endre vindusstørrelse, plassering, eller legge til nye vinduer kan kreve søknad, spesielt i verneverdige områder." },
  { question: "Hva er best – tre eller aluminium?", answer: "Tre gir best isolasjon og tradisjonelt utseende, men krever vedlikehold. Alu/tre-kombi gir vedlikeholdsfri utside med tre innvendig. Ren aluminium brukes mest i næringsbygg. For bolig er tre eller alu/tre-kombi vanligst." },
  { question: "Hva koster takvindu?", answer: "Et takvindu (Velux-type) koster typisk 8 000-25 000 kr inkl. montering. Størrelse og type (fast, vipp, elektrisk) påvirker prisen. Etterisolering og innvendig foring kommer i tillegg: 3 000-8 000 kr." },
  { question: "Hvor lang tid tar vindusbytte?", answer: "Et enkelt vindusbytte tar 2-4 timer per vindu. Et helt hus (15-20 vinduer) tar 3-5 dager. Bestillingstid for vinduer er typisk 4-8 uker, så bestill i god tid." },
  { question: "Hva koster energiglass?", answer: "3-lags energiglass (lav-E) koster 20-30% mer enn standard 2-lags, men gir U-verdi ned mot 0,6-0,8 W/m²K (vs 1,1-1,3 for 2-lags). For et normalt hus gir dette 3 000-10 000 kr i årlig strømbesparelse." },
];

export const metadata: Metadata = { title: "Hva koster nye vinduer? Priser for vindusbytte 2026", description: "Nye vinduer koster 5 000-15 000 kr per stk. Se priser for vindusbytte, energiglass, balkongdør og ytterdør.", alternates: { canonical: "https://byggepris.no/vinduer" }, openGraph: { title: "Hva koster nye vinduer?", description: "Typisk 5 000-15 000 kr per vindu.", url: "https://byggepris.no/vinduer", type: "article" } };

export default function Page() {
  return (<main className="pt-20"><BreadcrumbSchema items={[{name:"Hjem",href:"/"},{name:"Vinduer",href:"/vinduer"}]} /><ArticleSchema title="Hva koster nye vinduer?" description="Prisguide for vinduer og dører." slug="vinduer" /><FAQSchema items={faq} /><article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14"><FadeInUp>
    <nav className="text-sm text-text-muted mb-6"><Link href="/" className="hover:text-accent-yellow">Hjem</Link> / <span className="text-text-secondary">Vinduer</span></nav>
    <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-text-primary mb-6">Hva koster nye vinduer?</h1>
    <p className="text-lg text-text-secondary mb-6">Nye vinduer koster typisk 5 000-15 000 kr per vindu inkl. montering. For et helt hus med 15-20 vinduer betyr det 100 000-250 000 kr. Vindusbytte er en av de beste energiinvesteringene du kan gjøre — moderne 3-lags glass kan halvere varmetapet.</p>
    <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">Priseksempler</h2>
    <div className="bg-bg-card border border-surface-border rounded-xl overflow-hidden my-6"><table className="w-full text-sm"><thead><tr className="text-left text-xs text-text-muted uppercase tracking-wider border-b border-surface-border"><th className="px-5 py-3">Type</th><th className="px-5 py-3">Pris inkl. montering</th></tr></thead><tbody className="divide-y divide-surface-border">
      {[["Standard vindu (100x120cm), 2-lags","5 000–8 000 kr"],["Standard vindu (100x120cm), 3-lags","7 000–12 000 kr"],["Stort vindu (150x150cm), 3-lags","10 000–18 000 kr"],["Balkongdør","10 000–25 000 kr"],["Skyvedør i glass","20 000–50 000 kr"],["Ytterdør (standard)","10 000–25 000 kr"],["Ytterdør (sikkerhet/design)","20 000–40 000 kr"],["Takvindu (Velux-type)","8 000–25 000 kr"],["Bytte 10 vinduer (komplett)","70 000–150 000 kr"],["Bytte alle vinduer i hus (15-20 stk)","100 000–250 000 kr"]].map(([j,p])=>(<tr key={j}><td className="px-5 py-3 text-text-primary font-medium">{j}</td><td className="px-5 py-3 font-mono text-accent-yellow">{p}</td></tr>))}
    </tbody></table></div>
    <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">Energibesparelse med nye vinduer</h2>
    <p className="text-text-secondary mb-4">Vinduer står for 15-25% av varmetapet i en bolig. Å bytte fra gamle 2-lags vinduer til moderne 3-lags energiglass kan redusere varmetapet gjennom vinduene med 50-70%. For et normalt hus betyr dette 5 000-15 000 kr spart i strøm per år. Tilbakebetalingstiden er typisk 10-15 år — deretter er det ren besparelse.</p>
    <div className="mt-10"><Link href="/kalkulator" className="inline-flex items-center gap-2 px-6 py-3 bg-accent-yellow text-bg-primary font-display font-bold rounded-xl hover:bg-accent-warm transition-colors shadow-glow-sm"><IconCalculator size={18} /> Beregn ditt prosjekt</Link></div>
  </FadeInUp></article></main>);
}
