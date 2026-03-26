import { Metadata } from "next";
import Link from "next/link";
import { FadeInUp } from "@/components/ui/animations";
import { IconCalculator } from "@/components/icons";
import { FAQSchema, BreadcrumbSchema, ArticleSchema } from "@/components/seo/JsonLd";

const faq = [
  { question: "Hva koster det a bygge hus i 2026?", answer: "I 2026 koster det typisk 30 000-55 000 kr per m2 a bygge hus i Norge. For en enebolig pa 150 m2 betyr det 4,5-8,5 millioner kroner avhengig av standard, beliggenhet og kompleksitet." },
  { question: "Kan man bygge hus for 4 millioner?", answer: "Ja, med enkel standard, kompakt form (100-120 m2), ferdighus og rimelig beliggenhet. Tomt kommer i tillegg. Velg rektangulaer form og standardmaterialer for a holde budsjettet." },
  { question: "Hvor stort hus kan man bygge for 5 millioner?", answer: "For 5 millioner kan du bygge 120-150 m2 med normal standard, eller 100 m2 med hoy standard. Ferdighus gir mest areal for pengene. Tomt og grunnarbeid pavirker hvor mye som er igjen til selve huset." },
  { question: "Hva koster grunnarbeid til hus?", answer: "Grunnarbeid koster typisk 300 000-600 000 kr. Grunnmur pa 100 m2: 200 000-400 000 kr. Graving: 20 000-80 000 kr. Drenering: 50 000-100 000 kr. Fjellsprengning kan legge til 100 000-400 000 kr." },
  { question: "Er ferdighus billigere enn arkitekttegnet?", answer: "Ja, ferdighus er typisk 15-25% billigere. Ferdighus: 25 000-40 000 kr/m2. Arkitekttegnet: 35 000-55 000 kr/m2. Ferdighus har ogsa kortere byggetid og mer forutsigbar pris." },
  { question: "Hvor lang tid tar det a bygge hus?", answer: "Selve byggingen tar 8-12 maneder. Med planlegging, arkitekt og byggesoknad tar det 12-18 maneder totalt. Ferdighus er raskere: 4-8 maneder for selve byggingen." },
  { question: "Hva koster det a bygge hus pa 100 m2?", answer: "Et hus pa 100 m2 koster 3-5,5 millioner kr avhengig av standard. Enkel: ca. 3 mill. Normal: ca. 4 mill. Hoy: ca. 5,5 mill. Inkludert grunnarbeid og prosjektering." },
  { question: "Hva koster det a bygge hus pa 200 m2?", answer: "Et hus pa 200 m2 koster 6-11 millioner kr. Normal standard: ca. 7-9 mill. Hoy standard: 9-11 mill. M2-prisen er noe lavere for store hus fordi faste kostnader fordeles pa flere kvadratmeter." },
  { question: "Hvor mye egenkapital trenger man?", answer: "Minimum 15% av total prosjektkostnad. For et prosjekt pa 5 mill. trenger du 750 000 kr. Tomt du eier teller som egenkapital. Noen banker krever 20% for byggelan." },
  { question: "Er det billigere a bygge eller kjope?", answer: "I pressomrader som Oslo er nybygg ofte billigere enn tilsvarende bruktbolig. I mindre pressede omrader kan bruktbolig vaere rimeligere. Nybygg gir moderne standard og lave vedlikeholdskostnader." },
  { question: "Hva er dyrest nar man bygger hus?", answer: "Arbeidskraft er storste enkeltkostnad (35-45%). Deretter materialer (30-40%), grunnarbeid (5-15%), prosjektering (5-10%). Bad og kjokken er dyrest per m2 av enkeltrom." },
  { question: "Hvilke skjulte kostnader finnes?", answer: "Typiske skjulte kostnader: tilkoblingsavgifter vann/avlop (30 000-150 000 kr), oppvarming under bygging, dokumentavgift pa tomt (2,5%), utvendig arbeid (200 000-800 000 kr), og buffer for uforutsette utgifter (10-15%)." },
];

export const metadata: Metadata = { title: "Hva koster det a bygge hus? Komplett prisguide 2026", description: "Se hva det koster a bygge hus i Norge i 2026. Typisk 30 000-55 000 kr/m2. Priseksempler for 100, 150 og 200 m2.", alternates: { canonical: "https://byggepris.no/hva-koster-det-a-bygge-hus" }, openGraph: { title: "Hva koster det a bygge hus?", description: "Typisk 30 000-55 000 kr/m2 i 2026.", url: "https://byggepris.no/hva-koster-det-a-bygge-hus", type: "article" } };

export default function Page() {
  return (<main className="pt-20"><BreadcrumbSchema items={[{name:"Hjem",href:"/"},{name:"Hva koster det a bygge hus?",href:"/hva-koster-det-a-bygge-hus"}]} /><ArticleSchema title="Hva koster det a bygge hus?" description="Komplett prisguide for husbygging." slug="hva-koster-det-a-bygge-hus" /><FAQSchema items={faq} /><article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14"><FadeInUp>
    <nav className="text-sm text-text-muted mb-6"><Link href="/" className="hover:text-accent-yellow">Hjem</Link> / <span className="text-text-secondary">Hva koster det a bygge hus?</span></nav>
    <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-text-primary mb-6">Hva koster det a bygge hus i Norge?</h1>
    <p className="text-lg text-text-secondary mb-6">A bygge hus i Norge koster typisk 30 000-55 000 kr per m2. For en enebolig pa 150 m2 betyr det 4,5-8,5 millioner kroner inkludert grunnarbeid, prosjektering og buffer. Prisen avhenger av standard, beliggenhet, grunnforhold og kompleksitet.</p>

    <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">Hva koster hus etter storrelse?</h2>
    <div className="bg-bg-card border border-surface-border rounded-xl overflow-hidden my-6"><table className="w-full text-sm"><thead><tr className="text-left text-xs text-text-muted uppercase tracking-wider border-b border-surface-border"><th className="px-5 py-3">Storrelse</th><th className="px-5 py-3">Enkel</th><th className="px-5 py-3">Normal</th><th className="px-5 py-3">Hoy</th></tr></thead><tbody className="divide-y divide-surface-border">
      {[["80 m2","2,2-2,8 mill.","2,8-3,5 mill.","3,8-4,8 mill."],["100 m2","2,8-3,5 mill.","3,5-4,5 mill.","4,8-6,0 mill."],["120 m2","3,3-4,2 mill.","4,2-5,4 mill.","5,7-7,2 mill."],["150 m2","4,1-5,3 mill.","5,3-6,8 mill.","7,2-9,0 mill."],["200 m2","5,5-7,0 mill.","7,0-9,0 mill.","9,5-12 mill."]].map(([s,e,n,h])=>(<tr key={s}><td className="px-5 py-3 text-text-primary font-medium">{s}</td><td className="px-5 py-3 font-mono text-text-secondary">{e}</td><td className="px-5 py-3 font-mono text-accent-yellow">{n}</td><td className="px-5 py-3 font-mono text-text-secondary">{h}</td></tr>))}
    </tbody></table></div>

    <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">Kostnadsfordeling</h2>
    <div className="bg-bg-card border border-surface-border rounded-xl p-6 my-6"><div className="space-y-3 text-sm">
      {[["Grunnarbeid og fundamentering","300 000-600 000 kr"],["Rabygg (vegger, tak, bjelkelag)","1 200 000-2 000 000 kr"],["VVS og rorlegger","300 000-500 000 kr"],["Elektrisk installasjon","250 000-450 000 kr"],["Innvendig (kjokken, bad, overflater)","800 000-1 800 000 kr"],["Vinduer og dorer","200 000-500 000 kr"],["Prosjektering og arkitekt","250 000-500 000 kr"],["Utendors og buffer","400 000-1 000 000 kr"]].map(([k,v])=>(<div key={k} className="flex justify-between"><span className="text-text-secondary">{k}</span><span className="font-mono text-text-primary">{v}</span></div>))}
    </div></div>

    <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">Slik sparer du penger</h2>
    <div className="space-y-3 text-text-secondary mb-6">
      <p><strong className="text-text-primary">Velg ferdighus</strong> — 15-25% rimeligere enn arkitekttegnet med god kvalitet.</p>
      <p><strong className="text-text-primary">Enkel bygningsform</strong> — rektangulaert grunnriss sparer 15-25% vs komplekse former.</p>
      <p><strong className="text-text-primary">Minst 3 tilbud</strong> — prisforskjellen mellom entreprenorer kan vaere 20-30%.</p>
      <p><strong className="text-text-primary">Gjor egeninnsats</strong> — maling, gulv og enkel montering kan spare 50 000-150 000 kr.</p>
      <p><strong className="text-text-primary">Bygg om vinteren</strong> — 5-10% lavere handverkerpriser pga. roligere periode.</p>
    </div>

    <p className="text-text-secondary mb-6">Se var detaljerte <Link href="/bygge-hus" className="text-accent-yellow hover:underline">prisguide for husbygging</Link> med kostnadsfordeling, ferdighus vs arkitekt, egenkapitalkrav og steg-for-steg-prosess.</p>

    <div className="mt-10 flex flex-col sm:flex-row gap-4">
      <Link href="/kalkulator" className="inline-flex items-center gap-2 px-6 py-3 bg-accent-yellow text-bg-primary font-display font-bold rounded-xl hover:bg-accent-warm transition-colors shadow-glow-sm"><IconCalculator size={18} /> Beregn ditt prosjekt</Link>
      <Link href="/bygge-hus" className="inline-flex items-center gap-2 px-6 py-3 border border-surface-border text-text-primary font-display font-semibold rounded-xl hover:border-accent-yellow/30 transition-colors">Komplett husbyggguide</Link>
    </div>
  </FadeInUp></article></main>);
}
