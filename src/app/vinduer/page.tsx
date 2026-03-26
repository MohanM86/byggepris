import { Metadata } from "next";
import Link from "next/link";
import { FadeInUp } from "@/components/ui/animations";
import { IconCalculator, IconCheck } from "@/components/icons";
import { FAQSchema, BreadcrumbSchema, ArticleSchema } from "@/components/seo/JsonLd";

const faq = [
  { question: "Hva koster nye vinduer?", answer: "Nye vinduer koster 5 000–15 000 kr per stk inkl. montering. Tolags koster 5 000–8 000 kr. Trelags energivinduer koster 7 000–12 000 kr. For et helt hus med 15–20 vinduer betyr det 100 000–250 000 kr." },
  { question: "Hva koster det å bytte 10 vinduer?", answer: "Ti vinduer koster 70 000–150 000 kr inkl. montering og ettetting. Standard trelags vinduer koster ca. 90 000–120 000 kr. Bestillingstid er 4–8 uker og montering tar 2–3 dager." },
  { question: "Lønner det seg å bytte vinduer?", answer: "Ja, hvis vinduene er over 25–30 år. Trelags vinduer reduserer varmetapet med 50–70 %, noe som sparer 5 000–15 000 kr per år i strøm. Tilbakebetalingstiden er 8–15 år." },
  { question: "Hva er forskjellen på tolags og trelags vinduer?", answer: "Trelags vinduer isolerer ca. 40 % bedre enn tolags og gir bedre lydisolering. Trelags koster 30–50 % mer men sparer mer strøm. I nye boliger er trelags standard etter TEK17." },
  { question: "Hva koster balkongdør?", answer: "Ny balkongdør koster 10 000–25 000 kr inkl. montering. Enkel skyvedør koster 15 000–30 000 kr. Stor heve/skyvedør koster 25 000–50 000 kr. Prisen avhenger av størrelse og glasstype." },
  { question: "Hva koster ny ytterdør?", answer: "Ny ytterdør koster 10 000–40 000 kr inkl. montering. Standarddør koster 10 000–18 000 kr. Isolert sikkerhetsdør koster 15 000–30 000 kr. Designdør koster 25 000–40 000 kr." },
  { question: "Kan man bytte vinduer selv?", answer: "Det er mulig, men anbefales ikke. Feil montering gir trekk, fukt og kondens. Du mister også garantien. Besparelsen er ca. 3 000–5 000 kr per vindu, men risikoen for feil er høy." },
  { question: "Hva koster takvindu?", answer: "Takvindu fra Velux eller Fakro koster 8 000–20 000 kr inkl. montering. Standard størrelse koster 8 000–12 000 kr. Stort takvindu med åpnefunksjon koster 12 000–20 000 kr." },
  { question: "Når bør man bytte vinduer?", answer: "Når du opplever: trekk rundt karmene, kondens mellom glassene, råteskader i trekarmer, vanskelig å åpne eller lukke, eller enkeltglass. Vinduer eldre enn 30 år bør vurderes uansett." },
  { question: "Hva koster det å tette vinduer?", answer: "Tetting og etterisolering av vinduer koster 500–2 000 kr per vindu. Bytte av tetningslister er enkelt å gjøre selv. Kan redusere trekk vesentlig uten å bytte hele vinduet." },
  { question: "Får man støtte til å bytte vinduer?", answer: "Enova tilbyr støtte til energioppgradering av bolig. Vindusbytte kan kvalifisere hvis du oppgraderer til energiklasse A eller bedre. Sjekk enova.no for gjeldende satser og vilkår." },
  { question: "Tre eller aluminium?", answer: "Trevinduer er varmest og mest tradisjonelle. Alukledd tre kombinerer treinnside med vedlikeholdsfri utside. Ren aluminium brukes mest i næringsbygg. For bolig er alukledd tre best valg." },
];

export const metadata: Metadata = {
  title: "Hva koster nye vinduer? Priser for vindusbytte 2026",
  description: "Nye vinduer koster 5 000–15 000 kr per stk. Se priser for tolags, trelags, balkongdør og ytterdør. Komplett guide med sparetips.",
  alternates: { canonical: "https://byggepris.no/vinduer" },
  openGraph: { title: "Hva koster nye vinduer?", description: "5 000–15 000 kr per stk. Komplett prisguide.", url: "https://byggepris.no/vinduer", type: "article" },
};

export default function Page() {
  return (
    <main className="pt-20">
      <BreadcrumbSchema items={[{ name: "Hjem", href: "/" }, { name: "Vinduer", href: "/vinduer" }]} />
      <ArticleSchema title="Hva koster nye vinduer?" description="Komplett prisguide for vinduer i Norge." slug="vinduer" />
      <FAQSchema items={faq} />
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <FadeInUp>
          <nav className="text-sm text-text-muted mb-6"><Link href="/" className="hover:text-accent-yellow">Hjem</Link> / <span className="text-text-secondary">Vinduer</span></nav>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent-yellow/20 bg-accent-yellow/5 mb-4"><span className="text-accent-yellow text-xs font-semibold">OPPDATERT 2026</span></div>
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-text-primary mb-4">Hva koster nye vinduer?</h1>
          <p className="text-lg text-text-secondary mb-8">Nye vinduer koster typisk <strong className="text-text-primary">5 000–15 000 kr per vindu</strong> inkl. montering. For et helt hus med 15–20 vinduer betyr det 100 000–250 000 kr. Trelags energivinduer er standard i dag og sparer 5 000–15 000 kr per år i strøm.</p>

          <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">Prisbarometer</h2>
          <div className="bg-bg-card border border-surface-border rounded-2xl p-6 my-6">
            <div className="flex items-stretch gap-0 rounded-xl overflow-hidden mb-4">
              <div className="flex-1 bg-emerald-500/10 py-3 px-4 text-center border-r border-surface-border"><p className="text-xs text-text-muted mb-1">Billig</p><p className="font-mono font-bold text-sm text-emerald-400">Under 6 000 kr</p></div>
              <div className="flex-1 bg-accent-yellow/10 py-3 px-4 text-center border-r border-surface-border"><p className="text-xs text-text-muted mb-1">Normal</p><p className="font-mono font-bold text-sm text-accent-yellow">6 000–10 000 kr</p></div>
              <div className="flex-1 bg-red-500/10 py-3 px-4 text-center"><p className="text-xs text-text-muted mb-1">Dyrt</p><p className="font-mono font-bold text-sm text-red-400">Over 10 000 kr</p></div>
            </div>
            <p className="text-xs text-text-tertiary">Per vindu inkl. montering. Standardstørrelse 120 × 120 cm. Større vinduer og spesialstørrelser koster mer.</p>
          </div>

          <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">Komplett pristabell</h2>
          <div className="bg-bg-card border border-surface-border rounded-2xl overflow-hidden my-6">
            <table className="w-full text-sm"><thead><tr className="text-left text-xs text-text-muted uppercase tracking-wider border-b border-surface-border"><th className="px-5 py-3">Type</th><th className="px-5 py-3">Pris per stk inkl. montering</th></tr></thead>
              <tbody className="divide-y divide-surface-border">
                {[["Tolags vindu standard","5 000–8 000 kr"],["Trelags energivindu","7 000–12 000 kr"],["Trelags alukledd","9 000–15 000 kr"],["Takvindu (Velux/Fakro)","8 000–20 000 kr"],["Balkongdør enkel","10 000–25 000 kr"],["Skyvedør stor","25 000–50 000 kr"],["Ytterdør standard","10 000–18 000 kr"],["Ytterdør sikkerhet/design","15 000–40 000 kr"],["Tetting/etterisolering per vindu","500–2 000 kr"],["Montering per vindu","2 000–4 000 kr"]].map(([j,p])=>(
                  <tr key={j} className="hover:bg-bg-tertiary/30 transition-colors"><td className="px-5 py-3 text-text-primary font-medium">{j}</td><td className="px-5 py-3 font-mono text-accent-yellow">{p}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">Regneksempel: Bytte alle vinduer i enebolig</h2>
          <div className="bg-bg-card border border-surface-border rounded-2xl p-6 my-6">
            <div className="space-y-3 text-sm">
              {[["15 stk trelags vinduer","120 000 kr"],["2 stk balkongdører","36 000 kr"],["1 stk ytterdør","18 000 kr"],["Montering og ettetting","15 000 kr"],["Innvendig listverk","8 000 kr"],["Bortkjøring av gamle vinduer","3 000 kr"]].map(([k,v])=>(
                <div key={k} className="flex justify-between"><span className="text-text-secondary">{k}</span><span className="font-mono text-text-primary">{v}</span></div>
              ))}
              <div className="flex justify-between border-t border-surface-border pt-3 mt-3"><span className="text-text-primary font-semibold">Totalt</span><span className="font-mono text-accent-yellow font-semibold">200 000 kr</span></div>
            </div>
            <p className="text-xs text-text-tertiary mt-4">Enebolig med 15 vinduer, 2 balkongdører og 1 ytterdør. Trelags energiglass, alukledd utside. Årlig strømbesparelse ca. 8 000–12 000 kr.</p>
          </div>

          <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">Når bør du bytte vinduer?</h2>
          <div className="bg-bg-card border border-surface-border rounded-xl p-5 my-6">
            <div className="space-y-2">{["Du kjenner trekk rundt karmene","Det er kondens mellom glassene","Trekarmer har råteskader","Vinduene er vanskelige å åpne eller lukke","Du har enkeltglass eller gamle tolags","Vinduene er eldre enn 30 år","Strømregningen er unødvendig høy"].map(t=>(<div key={t} className="flex gap-2 text-sm text-text-secondary"><IconCheck size={14} className="flex-shrink-0 text-accent-yellow mt-0.5"/><span>{t}</span></div>))}</div>
          </div>

          <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">Slik sparer du penger</h2>
          <div className="space-y-3 text-text-secondary mb-6">
            <p><strong className="text-text-primary">Bytt alle samtidig.</strong> Du får bedre stordriftsrabatt og betaler bare en gang for montering. 15 vinduer samlet er 10–15 % billigere enn å bytte tre om gangen.</p>
            <p><strong className="text-text-primary">Velg standardstørrelser.</strong> Spesialmål koster 30–50 % mer. Hvis mulig, tilpass hullet til standardvindu i stedet for omvendt.</p>
            <p><strong className="text-text-primary">Søk Enova om støtte.</strong> Du kan få tilbake deler av kostnaden hvis du oppgraderer til energiklasse A eller bedre.</p>
            <p><strong className="text-text-primary">Sammenlign tre tilbud.</strong> Prisforskjellen mellom vindusprodusenter kan være 20–30 % for tilsvarende kvalitet. Be om tilbud fra minst tre leverandører.</p>
            <p><strong className="text-text-primary">Vurder tetting først.</strong> Hvis karmene er i god stand kan tetting og nye lister koste 500–2 000 kr per vindu i stedet for 8 000–12 000 kr for nytt.</p>
          </div>

          <div className="mt-10 mb-6">
            <h2 className="font-display font-bold text-xl text-text-primary mb-4">Relaterte prosjekter</h2>
            <div className="flex flex-wrap gap-3">
              {[{href:"/isolasjon",label:"Isolasjon"},{href:"/fasade",label:"Fasade"},{href:"/tak",label:"Tak"},{href:"/bygge-hus",label:"Bygge hus"},{href:"/varmepumpe",label:"Varmepumpe"}].map(l=>(
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
