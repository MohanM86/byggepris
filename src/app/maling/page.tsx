import { Metadata } from "next";
import Link from "next/link";
import { FadeInUp } from "@/components/ui/animations";
import { IconCalculator } from "@/components/icons";
import { FAQSchema, BreadcrumbSchema, ArticleSchema } from "@/components/seo/JsonLd";

const faq = [
  { question: "Hva koster det a male et hus innvendig?", answer: "Innvendig maling koster typisk 80-200 kr per m2 veggflate inkl. arbeid. For en leilighet pa 80 m2 (ca. 200-250 m2 veggflate): 20 000-50 000 kr. For et hus pa 150 m2: 40 000-90 000 kr. Prisen avhenger av antall strøk, forberedelse og tilstand." },
  { question: "Hva koster maler per time?", answer: "Timepris for maler er typisk 500-700 kr inkl. mva. Oslo: 600-750 kr. Distriktene: 450-600 kr. Mange malere gir heller pris per m2 veggflate enn timepris." },
  { question: "Hva koster det a male et hus utvendig?", answer: "Utvendig maling koster 300-600 kr per m2 fasadeflate inkl. arbeid. For et normalt hus (150-200 m2 fasade): 45 000-120 000 kr. Inkluderer vask, skraping, grunning og to strok. Stillas kommer i tillegg." },
  { question: "Kan man male huset selv?", answer: "Ja, maling er et av de beste gjor-det-selv-prosjektene. Du sparer 50-70% av kostnaden. Innvendig maling krever lite erfaring. Utvendig krever stiger/stillas og mer forberedelse (vask, skraping, grunning)." },
  { question: "Hva koster maling per m2 vegg?", answer: "Maling per m2 veggflate: kun materiale 15-40 kr/m2 (avhengig av kvalitet). Inkl. arbeid: 80-200 kr/m2 innvendig, 300-600 kr/m2 utvendig. Tak er typisk 30-50% dyrere enn vegger pga. vanskeligere tilgang." },
  { question: "Hvor mye maling trenger man?", answer: "En liter maling dekker typisk 8-12 m2 per strok. For to strok pa 100 m2 vegg trenger du ca. 18-25 liter. En 10-liters boks koster 500-1 500 kr avhengig av kvalitet. Premium maling (Jotun, Flugger) dekker bedre og varer lenger." },
  { question: "Hva koster det a tapetsere?", answer: "Tapetsering koster 150-400 kr per m2 inkl. materiale og arbeid. Tapet koster 200-800 kr per rull (ca. 5 m2). For en stue pa 40 m2 veggflate: 6 000-16 000 kr. Tapetsering krever mer forberedelse enn maling." },
  { question: "Hva koster sparkling for maling?", answer: "Sparkling koster 50-150 kr per m2 for arbeid. For en hel leilighet (200 m2 veggflate): 10 000-30 000 kr. Sparkling er nodvendig for jevnt resultat, spesielt pa eldre vegger med sprekker og ujevnheter." },
  { question: "Bor man bruke grunning for maling?", answer: "Ja, grunning anbefales alltid pa nye flater, pa flater som aldri har vart malt, og ved fargeendring fra mork til lys. Grunning koster 30-60 kr/m2 for materiale og gir bedre dekning og holdbarhet." },
  { question: "Hva koster det a male tak?", answer: "Takmaling koster 100-250 kr per m2 inkl. arbeid — 30-50% dyrere enn vegger pga. vanskeligere tilgang. For en leilighet pa 80 m2: 8 000-20 000 kr. Bruk matt hvit takmaling for best resultat." },
];

export const metadata: Metadata = { title: "Hva koster maling? Priser for maler og maling 2026", description: "Innvendig maling koster 80-200 kr/m2. Utvendig 300-600 kr/m2. Se priser for maler, sparkling, tapetsering og tips.", alternates: { canonical: "https://byggepris.no/maling" }, openGraph: { title: "Hva koster maling?", description: "Innvendig 80-200 kr/m2. Utvendig 300-600 kr/m2.", url: "https://byggepris.no/maling", type: "article" } };

export default function Page() {
  return (<main className="pt-20"><BreadcrumbSchema items={[{name:"Hjem",href:"/"},{name:"Maling",href:"/maling"}]} /><ArticleSchema title="Hva koster maling?" description="Prisguide for maling i Norge." slug="maling" /><FAQSchema items={faq} /><article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14"><FadeInUp>
    <nav className="text-sm text-text-muted mb-6"><Link href="/" className="hover:text-accent-yellow">Hjem</Link> / <span className="text-text-secondary">Maling</span></nav>
    <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-text-primary mb-6">Hva koster maling?</h1>
    <p className="text-lg text-text-secondary mb-6">Innvendig maling koster typisk 80-200 kr per m2 veggflate inkl. arbeid. For en leilighet pa 80 m2 betyr det 20 000-50 000 kr. Maling er det oppussingstiltaket med absolutt best avkastning — det gir mest visuell effekt for pengene.</p>

    <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">Priseksempler</h2>
    <div className="bg-bg-card border border-surface-border rounded-xl overflow-hidden my-6"><table className="w-full text-sm"><thead><tr className="text-left text-xs text-text-muted uppercase tracking-wider border-b border-surface-border"><th className="px-5 py-3">Jobb</th><th className="px-5 py-3">Pris per m2</th><th className="px-5 py-3">Leilighet 80 m2</th></tr></thead><tbody className="divide-y divide-surface-border">
      {[["Innvendig maling (vegger)","80-200 kr","20 000-50 000 kr"],["Takmaling","100-250 kr","8 000-20 000 kr"],["Sparkling","50-150 kr","10 000-30 000 kr"],["Utvendig maling","300-600 kr","—"],["Tapetsering","150-400 kr","—"],["Grunning","30-60 kr","6 000-15 000 kr"]].map(([j,m,t])=>(<tr key={j}><td className="px-5 py-3 text-text-primary font-medium">{j}</td><td className="px-5 py-3 font-mono text-accent-yellow">{m}</td><td className="px-5 py-3 font-mono text-text-secondary">{t}</td></tr>))}
    </tbody></table></div>

    <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">Male selv vs leie maler</h2>
    <p className="text-text-secondary mb-4">Maling er det enkleste gjor-det-selv-prosjektet. Du sparer 50-70% ved a male selv. For en leilighet pa 80 m2 betyr det 15 000-35 000 kr spart. Du trenger ruller, pensler, malertape, dekkplast og maling — totalt 3 000-8 000 kr i utstyr og materialer.</p>
    <p className="text-text-secondary mb-4">Innvendig maling krever lite erfaring. Forberedelse (taping, dekking, sparkling) tar lengst tid. Selve malingen gar raskt med gode ruller. Utvendig maling er mer krevende pga. stiger/stillas, vaerforhold og behov for grundig forberedelse.</p>

    <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">Tips for best resultat</h2>
    <div className="space-y-3 text-text-secondary mb-6">
      <p><strong className="text-text-primary">Forberedelse er 80% av jobben.</strong> Vask vegger, sparkle sprekker, slip og grunn for du starter. Dårlig forberedelse gir dårlig resultat uansett hvor dyr malingen er.</p>
      <p><strong className="text-text-primary">Bruk kvalitetsmaling.</strong> Premium maling (Jotun Lady, Flugger) koster mer per liter men dekker bedre, slik at du trenger ferre strok og far et varigere resultat.</p>
      <p><strong className="text-text-primary">Velg riktig glans.</strong> Matt for tak og soverom. Halvblank for stue og kjokken. Blank for listverk og dorer. Bad og fuktige rom bor ha vattromsmmaling.</p>
      <p><strong className="text-text-primary">Nøytrale farger for salg.</strong> Skal du selge boligen, velg hvitt eller lyst gra. Det appellerer til flest kjopere og gir best avkastning.</p>
    </div>

    <div className="mt-10 flex flex-col sm:flex-row gap-4">
      <Link href="/kalkulator" className="inline-flex items-center gap-2 px-6 py-3 bg-accent-yellow text-bg-primary font-display font-bold rounded-xl hover:bg-accent-warm transition-colors shadow-glow-sm"><IconCalculator size={18} /> Beregn ditt prosjekt</Link>
      <Link href="/oppussing" className="inline-flex items-center gap-2 px-6 py-3 border border-surface-border text-text-primary font-display font-semibold rounded-xl hover:border-accent-yellow/30 transition-colors">Se oppussingspriser</Link>
    </div>
  </FadeInUp></article></main>);
}
