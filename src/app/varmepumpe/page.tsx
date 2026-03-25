import { Metadata } from "next";
import Link from "next/link";
import { FadeInUp } from "@/components/ui/animations";
import { IconCalculator } from "@/components/icons";
import { FAQSchema, BreadcrumbSchema, ArticleSchema } from "@/components/seo/JsonLd";

const faq = [
  { question: "Hva koster varmepumpe?", answer: "Luft-til-luft: 15 000-30 000 kr installert. Luft-til-vann: 80 000-150 000 kr. Bergvarme (jord/fjell): 150 000-300 000 kr inkl. boring. Prisen avhenger av type, storrelse og boligens oppvarmingsbehov." },
  { question: "Hva koster luft-til-luft varmepumpe?", answer: "Luft-til-luft koster 15 000-30 000 kr ferdig installert. Selve pumpen: 8 000-18 000 kr. Installasjon: 5 000-12 000 kr. Toppmerkene (Mitsubishi, Daikin, Fujitsu) koster mer men gir bedre ytelse i kulde." },
  { question: "Hva koster bergvarme?", answer: "Bergvarme koster 150 000-300 000 kr totalt. Boring: 80 000-150 000 kr (150-200 m dyp). Pumpe og installasjon: 70 000-150 000 kr. Mest effektiv type, men dyreste investering. Kan spare 60-75% pa oppvarming." },
  { question: "Hvor mye sparer man med varmepumpe?", answer: "Luft-til-luft sparer typisk 5 000-15 000 kr/ar (30-50% av oppvarming). Luft-til-vann sparer 10 000-25 000 kr/ar (40-60%). Bergvarme sparer 15 000-35 000 kr/ar (60-75%). Besparelsen avhenger av boligstorrelse og stromforbruk." },
  { question: "Hvilken varmepumpe er best?", answer: "For de fleste er luft-til-luft best pga. lav pris og god besparelse. For storre hus med vannbaren varme er luft-til-vann optimal. Bergvarme lønner seg for store hus med hoyt energibehov og langsiktig perspektiv." },
  { question: "Far man stotte til varmepumpe?", answer: "Enova tilbyr stotte til varmepumper. Luft-til-vann og bergvarme kvalifiserer vanligvis. Stotten har vaert 10 000-30 000 kr avhengig av type. Sjekk Enova.no for gjeldende satser." },
  { question: "Hva koster luft-til-vann varmepumpe?", answer: "Luft-til-vann koster 80 000-150 000 kr installert. Pumpen: 50 000-100 000 kr. Installasjon inkl. tilkobling til vannbaret system: 30 000-50 000 kr. Krever vannbaren varme i gulv eller radiatorer." },
  { question: "Hvor lenge varer en varmepumpe?", answer: "En varmepumpe varer typisk 15-20 ar. Kompressoren er den forste komponenten som slites. Service hvert 2-3 ar forlenger levetiden. Bergvarmebrønnen varer 50+ ar — kun pumpen ma skiftes." },
  { question: "Kan man installere varmepumpe selv?", answer: "Nei, installasjon av varmepumpe krever F-gass-sertifisering for kuldemediet. Elektrisk tilkobling krever autorisert elektriker. Uautorisert installasjon bryter loven og ugyldiggjor garantien." },
  { question: "Hva koster det a varme opp et hus?", answer: "Oppvarmingskostnad for et hus pa 150 m2: uten varmepumpe 25 000-50 000 kr/ar. Med luft-til-luft: 15 000-30 000 kr/ar. Med bergvarme: 8 000-15 000 kr/ar. Avhenger av isolasjon, klima og strompris." },
];

export const metadata: Metadata = { title: "Hva koster varmepumpe? Priser og typer 2026", description: "Luft-til-luft fra 15 000 kr. Bergvarme fra 150 000 kr. Se alle typer, priser, besparelse og Enova-stotte.", alternates: { canonical: "https://byggepris.no/varmepumpe" }, openGraph: { title: "Hva koster varmepumpe?", description: "Komplett prisguide for varmepumper.", url: "https://byggepris.no/varmepumpe", type: "article" } };

export default function Page() {
  return (<main className="pt-20"><BreadcrumbSchema items={[{name:"Hjem",href:"/"},{name:"Varmepumpe",href:"/varmepumpe"}]} /><ArticleSchema title="Hva koster varmepumpe?" description="Prisguide for varmepumpe i Norge." slug="varmepumpe" /><FAQSchema items={faq} /><article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14"><FadeInUp>
    <nav className="text-sm text-text-muted mb-6"><Link href="/" className="hover:text-accent-yellow">Hjem</Link> / <span className="text-text-secondary">Varmepumpe</span></nav>
    <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-text-primary mb-6">Hva koster varmepumpe?</h1>
    <p className="text-lg text-text-secondary mb-6">En varmepumpe koster fra 15 000 kr (luft-til-luft) til 300 000 kr (bergvarme). Den sparer typisk 30-75% pa oppvarmingskostnadene, avhengig av type. For de fleste norske boliger er varmepumpe den beste enkeltinvesteringen for a redusere energikostnader.</p>
    <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">Pris etter type</h2>
    <div className="bg-bg-card border border-surface-border rounded-xl overflow-hidden my-6"><table className="w-full text-sm"><thead><tr className="text-left text-xs text-text-muted uppercase tracking-wider border-b border-surface-border"><th className="px-5 py-3">Type</th><th className="px-5 py-3">Totalpris</th><th className="px-5 py-3">Besparelse/ar</th><th className="px-5 py-3">Tilbakebetaling</th></tr></thead><tbody className="divide-y divide-surface-border">
      {[["Luft-til-luft","15 000-30 000 kr","5 000-15 000 kr","2-4 ar"],["Luft-til-vann","80 000-150 000 kr","10 000-25 000 kr","5-8 ar"],["Bergvarme","150 000-300 000 kr","15 000-35 000 kr","6-12 ar"],["Jordvarme","120 000-250 000 kr","12 000-30 000 kr","5-10 ar"]].map(([j,m,s,t])=>(<tr key={j}><td className="px-5 py-3 text-text-primary font-medium">{j}</td><td className="px-5 py-3 font-mono text-accent-yellow">{m}</td><td className="px-5 py-3 font-mono text-text-secondary">{s}</td><td className="px-5 py-3 text-text-tertiary">{t}</td></tr>))}
    </tbody></table></div>
    <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">Hvilken type passer for deg?</h2>
    <div className="space-y-3 text-text-secondary mb-6">
      <p><strong className="text-text-primary">Luft-til-luft:</strong> Best for de fleste. Lav pris, enkel installasjon, god besparelse. Funker som AC om sommeren. Passer alle boliger.</p>
      <p><strong className="text-text-primary">Luft-til-vann:</strong> Best for hus med vannbaren varme (gulvvarme/radiatorer). Varmer hele huset jevnt. Krever vannbaret system.</p>
      <p><strong className="text-text-primary">Bergvarme:</strong> Best for store hus med hoyt energibehov. Dyreste investering, men laveste driftskostnader. Krever boring pa tomten.</p>
    </div>
    <div className="mt-10 flex flex-col sm:flex-row gap-4">
      <Link href="/kalkulator" className="inline-flex items-center gap-2 px-6 py-3 bg-accent-yellow text-bg-primary font-display font-bold rounded-xl hover:bg-accent-warm transition-colors shadow-glow-sm"><IconCalculator size={18} /> Beregn ditt prosjekt</Link>
      <Link href="/isolasjon" className="inline-flex items-center gap-2 px-6 py-3 border border-surface-border text-text-primary font-display font-semibold rounded-xl hover:border-accent-yellow/30 transition-colors">Se isolasjonspriser</Link>
    </div>
  </FadeInUp></article></main>);
}
