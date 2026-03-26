import { Metadata } from "next";
import Link from "next/link";
import { FadeInUp } from "@/components/ui/animations";
import { IconCalculator } from "@/components/icons";
import { FAQSchema, BreadcrumbSchema, ArticleSchema } from "@/components/seo/JsonLd";

const faq = [
  { question: "Hvilke skjulte kostnader finnes ved bygging?", answer: "De vanligste skjulte kostnadene er: tilkoblingsavgifter vann/avlop (30 000-150 000 kr), oppvarming under bygging (20 000-50 000 kr), dokumentavgift pa tomt (2,5%), utvendig arbeid (200 000-800 000 kr), og uforutsette grunnforhold." },
  { question: "Hvor mye buffer bor man ha?", answer: "Minimum 10-15% for nybygg. 15-20% for renovering av eldre boliger. 20-25% for totalrenovering av boliger eldre enn 1970. Aldri ga under 10% — det er den vanligste arsaken til budsjettsprekk." },
  { question: "Hva koster tilkoblingsavgifter?", answer: "Tilkobling til kommunalt vann og avlop koster 30 000-150 000 kr. Tilkoblingsavgift: 20 000-80 000 kr. Graving og rorlegging til kommunalt nett: 10 000-70 000 kr avhengig av avstand." },
  { question: "Hva koster det a varme opp under bygging?", answer: "Oppvarming i byggeperioden koster 20 000-50 000 kr for en enebolig. Nodvendig for at betong herder riktig og for a unnga fuktskader. Storst kostnad om vinteren." },
  { question: "Koster byggesoknad mye?", answer: "Ja, mange undervurderer dette. Kommunale gebyrer: 10 000-60 000 kr. Ansvarlig soker: 15 000-40 000 kr. Tegninger: 15 000-100 000 kr. Totalt: 40 000-200 000 kr." },
  { question: "Hva koster utvendig arbeid?", answer: "Utvendig ferdigstillelse glemmes ofte: innkjorsel (50 000-200 000 kr), terrasse (60 000-200 000 kr), hage og beplantning (30 000-100 000 kr), gjerder (20 000-80 000 kr), belysning (10 000-30 000 kr). Totalt: 200 000-800 000 kr." },
  { question: "Er det skjulte kostnader ved oppussing?", answer: "Ja: asbest som krever sanering (30 000-100 000 kr), fuktskader bak vegger (50 000-300 000 kr), darlig elektro som ma byttes (80 000-200 000 kr), og baerevegger man ikke visste om (30 000-80 000 kr per vegg)." },
  { question: "Koster endringer underveis mye?", answer: "Enormt. Endringer etter byggestart koster 2-5 ganger mer enn om de var planlagt fra start. En vegg som flyttes etter stoping kan koste 30 000-80 000 kr. Planlegg ferdig for du begynner." },
  { question: "Hva koster det a bo et annet sted under bygging?", answer: "Midlertidig bolig koster 15 000-50 000 kr per maned. For en totalrenovering pa 4-6 maneder: 60 000-300 000 kr. For nybygg (12-18 mnd) kan det bli 180 000-900 000 kr. Ofte undervurdert i budsjettet." },
  { question: "Hva koster forsikring under bygging?", answer: "Byggeforsikring koster typisk 5 000-15 000 kr for hele byggeperioden. Dekker brann, vann, tyveri og haerverk. Nodvendig fra byggestart til ferdigattest. Mange glemmer dette i budsjettet." },
];

export const metadata: Metadata = { title: "Skjulte kostnader ved oppussing og bygging 2026", description: "Unnga budsjettsprekk. Se de vanligste skjulte kostnadene ved bygging og oppussing, og hvor mye buffer du trenger.", alternates: { canonical: "https://byggepris.no/skjulte-kostnader-ved-oppussing" }, openGraph: { title: "Skjulte kostnader ved bygging", description: "Unnga budsjettsprekk.", url: "https://byggepris.no/skjulte-kostnader-ved-oppussing", type: "article" } };

export default function Page() {
  return (<main className="pt-20"><BreadcrumbSchema items={[{name:"Hjem",href:"/"},{name:"Skjulte kostnader",href:"/skjulte-kostnader-ved-oppussing"}]} /><ArticleSchema title="Skjulte kostnader ved bygging og oppussing" description="Unnga budsjettsprekk." slug="skjulte-kostnader-ved-oppussing" /><FAQSchema items={faq} /><article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14"><FadeInUp>
    <nav className="text-sm text-text-muted mb-6"><Link href="/" className="hover:text-accent-yellow">Hjem</Link> / <span className="text-text-secondary">Skjulte kostnader</span></nav>
    <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-text-primary mb-6">Skjulte kostnader ved bygging og oppussing</h1>
    <p className="text-lg text-text-secondary mb-6">De fleste byggeprosjekter gar over budsjett. Arsaken er nesten alltid kostnader som ikke var med i det opprinnelige overslaget. Her er en komplett oversikt over skjulte kostnader slik at du kan budsjettere riktig fra start.</p>

    <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">De storste skjulte kostnadene</h2>
    <div className="bg-bg-card border border-surface-border rounded-xl overflow-hidden my-6"><table className="w-full text-sm"><thead><tr className="text-left text-xs text-text-muted uppercase tracking-wider border-b border-surface-border"><th className="px-5 py-3">Skjult kostnad</th><th className="px-5 py-3">Typisk belop</th><th className="px-5 py-3">Gjelder</th></tr></thead><tbody className="divide-y divide-surface-border">
      {[["Tilkoblingsavgifter (vann/avlop)","30 000-150 000 kr","Nybygg"],["Utvendig arbeid (innkjorsel, hage)","200 000-800 000 kr","Nybygg"],["Uforutsette grunnforhold","100 000-800 000 kr","Nybygg"],["Oppvarming under bygging","20 000-50 000 kr","Nybygg"],["Midlertidig bolig","60 000-300 000 kr","Renovering"],["Asbest-sanering","30 000-100 000 kr","Renovering"],["Skjulte fuktskader","50 000-300 000 kr","Renovering"],["Utskifting av elektro","80 000-200 000 kr","Renovering"],["Byggesoknad og prosjektering","40 000-200 000 kr","Alle"],["Endringer underveis","Uforutsigbart","Alle"],["Byggeforsikring","5 000-15 000 kr","Alle"]].map(([k,v,g])=>(<tr key={k}><td className="px-5 py-3 text-text-primary font-medium">{k}</td><td className="px-5 py-3 font-mono text-accent-yellow">{v}</td><td className="px-5 py-3 text-text-tertiary">{g}</td></tr>))}
    </tbody></table></div>

    <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">Anbefalt buffer etter prosjekttype</h2>
    <div className="bg-accent-yellow/5 border border-accent-yellow/10 rounded-xl p-6 my-6"><div className="space-y-3 text-sm">
      {[["Nybygg pa enkel grunn","10%"],["Nybygg pa ukjent grunn","15%"],["Oppussing (overflater)","10%"],["Renovering med bad/kjokken","15%"],["Totalrenovering (bolig under 30 ar)","15-20%"],["Totalrenovering (bolig over 50 ar)","20-25%"]].map(([k,v])=>(<div key={k} className="flex justify-between"><span className="text-text-secondary">{k}</span><span className="font-mono text-accent-yellow font-semibold">{v}</span></div>))}
    </div></div>

    <p className="text-text-secondary mb-6">Les mer om <Link href="/byggekostnader" className="text-accent-yellow hover:underline">byggekostnader</Link>, <Link href="/hva-pavirker-byggekostnad" className="text-accent-yellow hover:underline">hva som pavirker prisen</Link> og <Link href="/byggesaknad" className="text-accent-yellow hover:underline">hva byggesoknad koster</Link>.</p>

    <div className="mt-10"><Link href="/kalkulator" className="inline-flex items-center gap-2 px-6 py-3 bg-accent-yellow text-bg-primary font-display font-bold rounded-xl hover:bg-accent-warm transition-colors shadow-glow-sm"><IconCalculator size={18} /> Beregn ditt prosjekt</Link></div>
  </FadeInUp></article></main>);
}
