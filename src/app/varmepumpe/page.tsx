import { Metadata } from "next";
import Link from "next/link";
import { FadeInUp } from "@/components/ui/animations";
import { IconCalculator } from "@/components/icons";
import { FAQSchema, BreadcrumbSchema, ArticleSchema } from "@/components/seo/JsonLd";

const faq = [
  { question: "Hva koster varmepumpe?", answer: "Luft til luft koster 15 000–30 000 kr installert. Luft til vann koster 80 000–150 000 kr. Bergvarme koster 150 000–300 000 kr inkl. boring. Prisen avhenger av type, størrelse og boligens oppvarmingsbehov." },
  { question: "Hva koster luft til luft varmepumpe?", answer: "Luft til luft koster 15 000–30 000 kr ferdig installert. Selve pumpen koster 8 000–18 000 kr og installasjon 5 000–12 000 kr. Toppmerkene Mitsubishi, Daikin og Fujitsu koster mer men gir bedre ytelse i kulde." },
  { question: "Hva koster bergvarme?", answer: "Bergvarme koster 150 000–300 000 kr totalt. Boring koster 80 000–150 000 kr for 150–200 m dyp. Pumpe og installasjon koster 70 000–150 000 kr. Mest effektiv type, men dyreste investering." },
  { question: "Hvor mye sparer man med varmepumpe?", answer: "Luft til luft sparer typisk 5 000–15 000 kr per år, altså 30–50 % av oppvarmingen. Luft til vann sparer 10 000–25 000 kr per år. Bergvarme sparer 15 000–35 000 kr per år." },
  { question: "Hvilken varmepumpe er best?", answer: "For de fleste er luft til luft best på grunn av lav pris og god besparelse. For større hus med vannbåren varme er luft til vann optimal. Bergvarme lønner seg for store hus med høyt energibehov." },
  { question: "Får man støtte til varmepumpe?", answer: "Enova tilbyr støtte til varmepumper. Luft til vann og bergvarme kvalifiserer vanligvis. Støtten har vært 10 000–30 000 kr avhengig av type. Sjekk enova.no for gjeldende satser." },
  { question: "Hva koster luft til vann varmepumpe?", answer: "Luft til vann koster 80 000–150 000 kr installert. Pumpen koster 50 000–100 000 kr og installasjon inkl. tilkobling til vannbårent system 30 000–50 000 kr. Krever vannbåren varme i gulv eller radiatorer." },
  { question: "Hvor lenge varer en varmepumpe?", answer: "En varmepumpe varer typisk 15–20 år. Kompressoren er den første komponenten som slites. Service hvert 2–3 år forlenger levetiden. Bergvarmebrønnen varer 50+ år, bare pumpen må skiftes." },
  { question: "Kan man installere varmepumpe selv?", answer: "Nei. Installasjon av varmepumpe krever F gass sertifisering for kuldemediet. Elektrisk tilkobling krever autorisert elektriker. Uautorisert installasjon bryter loven og ugyldiggjør garantien." },
  { question: "Hva koster det å varme opp et hus?", answer: "Oppvarmingskostnad for et hus på 150 m²: uten varmepumpe 25 000–50 000 kr per år. Med luft til luft 15 000–30 000 kr per år. Med bergvarme 8 000–15 000 kr per år. Avhenger av isolasjon og strømpris." },
  { question: "Luft til luft eller luft til vann?", answer: "Luft til luft er enklest og billigst, men varmer bare luften i rommet. Luft til vann varmer hele huset jevnt gjennom gulvvarme eller radiatorer, men krever vannbårent system og koster tre til fem ganger mer." },
  { question: "Når lønner seg bergvarme?", answer: "Bergvarme lønner seg for hus over 200 m² med høyt strømforbruk over 30 000 kWh per år, og der du planlegger å bo i minst 10–15 år. Tilbakebetalingstiden er 6–12 år." },
];

export const metadata: Metadata = {
  title: "Hva koster varmepumpe? Priser og typer 2026",
  description: "Luft til luft fra 15 000 kr. Bergvarme fra 150 000 kr. Se alle typer, priser, besparelse og Enova støtte.",
  alternates: { canonical: "https://byggepris.no/varmepumpe" },
  openGraph: { title: "Hva koster varmepumpe?", description: "Komplett prisguide for varmepumper.", url: "https://byggepris.no/varmepumpe", type: "article" },
};

export default function Page() {
  return (
    <main className="pt-20">
      <BreadcrumbSchema items={[{ name: "Hjem", href: "/" }, { name: "Varmepumpe", href: "/varmepumpe" }]} />
      <ArticleSchema title="Hva koster varmepumpe?" description="Prisguide for varmepumpe i Norge." slug="varmepumpe" />
      <FAQSchema items={faq} />
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <FadeInUp>
          <nav className="text-sm text-text-muted mb-6"><Link href="/" className="hover:text-accent-yellow">Hjem</Link> / <span className="text-text-secondary">Varmepumpe</span></nav>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent-yellow/20 bg-accent-yellow/5 mb-4"><span className="text-accent-yellow text-xs font-semibold">OPPDATERT 2026</span></div>
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-text-primary mb-4">Hva koster varmepumpe?</h1>
          <p className="text-lg text-text-secondary mb-8">En varmepumpe koster fra <strong className="text-text-primary">15 000 kr for luft til luft</strong> til <strong className="text-text-primary">300 000 kr for bergvarme</strong>. Den sparer typisk 30–75 % på oppvarmingskostnadene. For de fleste norske boliger er varmepumpe den beste enkeltinvesteringen for å redusere energikostnader.</p>

          <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">Pris etter type</h2>
          <div className="bg-bg-card border border-surface-border rounded-2xl overflow-hidden my-6">
            <table className="w-full text-sm"><thead><tr className="text-left text-xs text-text-muted uppercase tracking-wider border-b border-surface-border"><th className="px-5 py-3">Type</th><th className="px-5 py-3">Totalpris</th><th className="px-5 py-3">Besparelse per år</th><th className="px-5 py-3">Tilbakebetaling</th></tr></thead>
              <tbody className="divide-y divide-surface-border">
                {[["Luft til luft","15 000–30 000 kr","5 000–15 000 kr","2–4 år"],["Luft til vann","80 000–150 000 kr","10 000–25 000 kr","5–8 år"],["Bergvarme","150 000–300 000 kr","15 000–35 000 kr","6–12 år"],["Jordvarme","120 000–250 000 kr","12 000–30 000 kr","5–10 år"]].map(([j,m,s,t])=>(
                  <tr key={j} className="hover:bg-bg-tertiary/30"><td className="px-5 py-3 text-text-primary font-medium">{j}</td><td className="px-5 py-3 font-mono text-accent-yellow">{m}</td><td className="px-5 py-3 font-mono text-text-secondary">{s}</td><td className="px-5 py-3 text-text-tertiary">{t}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">Hvilken type passer for deg?</h2>
          <div className="space-y-3 text-text-secondary mb-6">
            <p><strong className="text-text-primary">Luft til luft</strong> passer best for de fleste. Lav pris, enkel installasjon og god besparelse. Fungerer som aircondition om sommeren. Passer alle boliger.</p>
            <p><strong className="text-text-primary">Luft til vann</strong> passer best for hus med vannbåren varme som gulvvarme eller radiatorer. Varmer hele huset jevnt. Krever at du allerede har vannbårent system.</p>
            <p><strong className="text-text-primary">Bergvarme</strong> passer best for store hus med høyt energibehov. Dyreste investering, men laveste driftskostnader. Krever boring på tomten.</p>
          </div>

          <div className="mt-10 mb-6">
            <div className="flex flex-wrap gap-3">
              {[{href:"/isolasjon",label:"Isolasjon"},{href:"/elektriker",label:"Elektriker"},{href:"/bygge-hus",label:"Bygge hus"},{href:"/vinduer",label:"Vinduer"}].map(l=>(
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
