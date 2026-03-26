import { Metadata } from "next";
import Link from "next/link";
import { FadeInUp } from "@/components/ui/animations";
import { IconCalculator, IconCheck } from "@/components/icons";
import { FAQSchema, BreadcrumbSchema, ArticleSchema } from "@/components/seo/JsonLd";

const faq = [
  { question: "Hva koster nye vinduer?", answer: "Nye vinduer koster 5 000–15 000 kr per stk inkl. montering. Tolags koster 5 000–8 000 kr. Trelags energivinduer koster 7 000–12 000 kr. For et helt hus med 15–20 vinduer betyr det 100 000–250 000 kr." },
  { question: "Hva koster det å bytte 10 vinduer?", answer: "Ti vinduer koster 70 000–150 000 kr inkl. montering og ettetting. Standard trelags koster ca. 90 000–120 000 kr. Bestillingstid er 4–8 uker og montering tar 2–3 dager." },
  { question: "Lønner det seg å bytte vinduer?", answer: "Ja, hvis vinduene er over 25–30 år. Trelags vinduer reduserer varmetapet med 50–70 %, noe som sparer 5 000–15 000 kr per år i strøm. Tilbakebetalingstiden er 8–15 år." },
  { question: "Hva er forskjellen på tolags og trelags?", answer: "Trelags vinduer isolerer ca. 40 % bedre enn tolags og gir bedre lydisolering. Trelags koster 30–50 % mer men sparer mer strøm. I nye boliger er trelags standard etter TEK17." },
  { question: "Hva koster balkongdør?", answer: "Ny balkongdør koster 10 000–25 000 kr inkl. montering. Enkel skyvedør koster 15 000–30 000 kr. Stor heve/skyvedør koster 25 000–50 000 kr." },
  { question: "Hva koster ny ytterdør?", answer: "Ny ytterdør koster 10 000–40 000 kr inkl. montering. Standarddør 10 000–18 000 kr. Isolert sikkerhetsdør 15 000–30 000 kr. Designdør 25 000–40 000 kr." },
  { question: "Kan man bytte vinduer selv?", answer: "Det er mulig men anbefales ikke. Feil montering gir trekk, fukt og kondens. Du mister også garantien. Besparelsen er ca. 3 000–5 000 kr per vindu, men risikoen for feil er høy." },
  { question: "Hva koster takvindu?", answer: "Takvindu fra Velux eller Fakro koster 8 000–20 000 kr inkl. montering. Standard størrelse 8 000–12 000 kr. Stort takvindu med åpnefunksjon 12 000–20 000 kr." },
  { question: "Når bør man bytte vinduer?", answer: "Når du opplever trekk rundt karmene, kondens mellom glassene, råteskader i trekarmer, vanskelig å åpne eller lukke, eller du har enkeltglass. Vinduer eldre enn 30 år bør vurderes uansett." },
  { question: "Hva koster det å tette vinduer?", answer: "Tetting og etterisolering koster 500–2 000 kr per vindu. Bytte av tetningslister er enkelt å gjøre selv. Kan redusere trekk vesentlig uten å bytte hele vinduet." },
  { question: "Får man støtte til å bytte vinduer?", answer: "Enova tilbyr støtte til energioppgradering. Vindusbytte kan kvalifisere hvis du oppgraderer til energiklasse A eller bedre. Sjekk enova.no for gjeldende satser." },
  { question: "Tre eller aluminium?", answer: "Trevinduer er varmest og mest tradisjonelle. Alukledd tre kombinerer treinnside med vedlikeholdsfri utside. Ren aluminium brukes mest i næringsbygg. For bolig er alukledd tre best valg." },
];

export const metadata: Metadata = {
  title: "Hva koster nye vinduer? Priser for vindusbytte 2026",
  description: "Nye vinduer koster 5 000–15 000 kr per stk. Se priser for tolags, trelags, balkongdør og ytterdør. Komplett guide med sparetips.",
  alternates: { canonical: "https://byggepris.no/vinduer" },
  openGraph: { title: "Hva koster nye vinduer?", description: "5 000–15 000 kr per stk.", url: "https://byggepris.no/vinduer", type: "article" },
};

export default function Page() {
  return (
    <main className="pt-20">
      <BreadcrumbSchema items={[{ name: "Hjem", href: "/" }, { name: "Vinduer", href: "/vinduer" }]} />
      <ArticleSchema title="Hva koster nye vinduer?" description="Komplett prisguide for vinduer." slug="vinduer" />
      <FAQSchema items={faq} />
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <FadeInUp>
          <nav className="text-sm text-text-muted mb-6"><Link href="/" className="hover:text-accent-yellow">Hjem</Link> / <span className="text-text-secondary">Vinduer</span></nav>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent-yellow/20 bg-accent-yellow/5 mb-4"><span className="text-accent-yellow text-xs font-semibold">OPPDATERT 2026</span></div>
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-text-primary mb-4">Hva koster nye vinduer?</h1>
          <p className="text-lg text-text-secondary mb-8">Nye vinduer koster typisk <strong className="text-text-primary">5 000–15 000 kr per vindu</strong> inkl. montering. For et helt hus med 15–20 vinduer betyr det 100 000–250 000 kr. Trelags energivinduer er standard i dag og sparer 5 000–15 000 kr per år i strøm.</p>

          {/* PRISBAROMETER */}
          <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">Prisbarometer</h2>
          <div className="bg-bg-card border border-surface-border rounded-2xl p-6 my-6">
            <p className="text-xs text-text-muted mb-3 uppercase tracking-wider font-semibold">Per vindu inkl. montering (standard 120×120 cm)</p>
            <div className="flex items-stretch gap-0 rounded-xl overflow-hidden mb-4">
              <div className="flex-1 bg-emerald-500/10 py-3 px-4 text-center border-r border-surface-border"><p className="text-xs text-text-muted mb-1">Billig</p><p className="font-mono font-bold text-sm text-emerald-400">Under 6 000 kr</p></div>
              <div className="flex-1 bg-accent-yellow/10 py-3 px-4 text-center border-r border-surface-border"><p className="text-xs text-text-muted mb-1">Normal</p><p className="font-mono font-bold text-sm text-accent-yellow">6 000–10 000 kr</p></div>
              <div className="flex-1 bg-red-500/10 py-3 px-4 text-center"><p className="text-xs text-text-muted mb-1">Dyrt</p><p className="font-mono font-bold text-sm text-red-400">Over 10 000 kr</p></div>
            </div>
            <p className="text-xs text-text-tertiary">Tolags i nedre sjikt. Trelags i midten. Alukledd og spesialstørrelser i øvre.</p>
          </div>

          {/* PRISTABELL */}
          <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">Komplett pristabell</h2>
          <div className="bg-bg-card border border-surface-border rounded-2xl overflow-hidden my-6">
            <table className="w-full text-sm"><thead><tr className="text-left text-xs text-text-muted uppercase tracking-wider border-b border-surface-border"><th className="px-5 py-3">Type</th><th className="px-5 py-3">Pris per stk inkl. montering</th></tr></thead>
              <tbody className="divide-y divide-surface-border">
                {[["Tolags vindu standard","5 000–8 000 kr"],["Trelags energivindu","7 000–12 000 kr"],["Trelags alukledd","9 000–15 000 kr"],["Takvindu (Velux/Fakro)","8 000–20 000 kr"],["Balkongdør enkel","10 000–25 000 kr"],["Skyvedør stor","25 000–50 000 kr"],["Ytterdør standard","10 000–18 000 kr"],["Ytterdør sikkerhet/design","15 000–40 000 kr"],["Tetting per vindu","500–2 000 kr"],["Montering per vindu","2 000–4 000 kr"]].map(([j,p])=>(
                  <tr key={j} className="hover:bg-bg-tertiary/30 transition-colors"><td className="px-5 py-3 text-text-primary font-medium">{j}</td><td className="px-5 py-3 font-mono text-accent-yellow">{p}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* REGNEKSEMPEL */}
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

          {/* NÅR BYTTE */}
          <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">Når bør du bytte vinduer?</h2>
          <div className="grid sm:grid-cols-2 gap-4 my-6">
            <div className="bg-bg-card border border-surface-border rounded-xl p-5">
              <p className="font-display font-bold text-accent-yellow mb-3">Tegn på at det er på tide</p>
              <div className="space-y-2">{["Trekk rundt karmene","Kondens mellom glassene","Råteskader i trekarmer","Vanskelig å åpne eller lukke","Enkeltglass eller gamle tolags","Vinduer eldre enn 30 år","Unødvendig høy strømregning"].map(t=>(<div key={t} className="flex gap-2 text-sm text-text-secondary"><IconCheck size={14} className="flex-shrink-0 text-accent-yellow mt-0.5"/><span>{t}</span></div>))}</div>
            </div>
            <div className="bg-bg-card border border-surface-border rounded-xl p-5">
              <p className="font-display font-bold text-text-primary mb-3">Kan vente med å bytte</p>
              <div className="space-y-2">{["Vinduer under 20 år i god stand","Kun noe trekk (tett med lister først)","Karmer uten råteskader","Tolags glass uten kondens","Fungerer greit å åpne og lukke"].map(t=>(<div key={t} className="flex gap-2 text-sm text-text-secondary"><IconCheck size={14} className="flex-shrink-0 text-text-tertiary mt-0.5"/><span>{t}</span></div>))}</div>
            </div>
          </div>

          {/* SJEKKLISTE + RØDE FLAGG */}
          <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">Slik velger du riktig vinduleverandør</h2>
          <div className="bg-bg-card border border-surface-border rounded-2xl p-6 my-6">
            <p className="font-display font-bold text-text-primary mb-3">Sjekkliste før du bestiller:</p>
            <div className="space-y-2 mb-6">{["Sammenlign minst 3 tilbud fra ulike leverandører","Sjekk at U verdi er oppgitt (lavere er bedre)","Avklar om montering, ettetting og listverk er inkludert","Spør om leveringstid (vanligvis 4–8 uker)","Sjekk garanti på glass, karm og beslag","Avklar hva som skjer med de gamle vinduene"].map(t=>(<div key={t} className="flex gap-2 text-sm text-text-secondary"><IconCheck size={14} className="flex-shrink-0 text-accent-yellow mt-0.5"/><span>{t}</span></div>))}</div>
            <div className="border-t border-surface-border pt-4">
              <p className="font-display font-bold text-red-400 mb-3">Røde flagg:</p>
              <div className="space-y-2">{["Presser på for rask bestilling uten betenkningstid","Pris langt under konkurrentene (sjekk hva som mangler)","Ingen synlig garanti eller reklamasjonsrett","Vil ikke oppgi U verdi eller energiklasse","Ettetting og listverk er ikke med i prisen","Krever full betaling før levering"].map(t=>(<div key={t} className="flex gap-2 text-sm text-text-secondary"><span className="flex-shrink-0 text-red-400 mt-0.5 text-xs">✕</span><span>{t}</span></div>))}</div>
            </div>
          </div>

          {/* VANLIGE FEIL */}
          <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">5 vanlige feil ved vindusbytte</h2>
          <div className="space-y-4 my-6">
            {[
              {t:"Bytter noen vinduer om gangen",d:"Du får bedre stordriftsrabatt og betaler bare en gang for montering ved å bytte alle samtidig. 15 vinduer samlet er 10–15 % billigere enn å ta tre om gangen."},
              {t:"Velger tolags i stedet for trelags",d:"Trelags koster 30–50 % mer men sparer mye mer i strøm. Over 15–20 år er trelags nesten alltid billigst totalt sett."},
              {t:"Glemmer etterisolering rundt karm",d:"Nye vinduer i gammel, dårlig isolert karm gir fortsatt trekk. Sørg for at det etterisoleres rundt karmen under montering."},
              {t:"Bestiller spesialmål uten grunn",d:"Spesialmål koster 30–50 % mer. Hvis mulig, tilpass hullet til et standardvindu i stedet for å bestille skreddersydd."},
              {t:"Sjekker ikke Enova støtte",d:"Du kan få tilbake deler av kostnaden hvis du oppgraderer til energiklasse A. Mange glemmer å søke. Det tar 10 minutter."},
            ].map((item,i)=>(<div key={i} className="bg-bg-card border border-surface-border rounded-xl p-5"><div className="flex items-center gap-3 mb-2"><span className="w-7 h-7 rounded-lg bg-accent-yellow/10 border border-accent-yellow/20 text-accent-yellow text-xs font-display font-bold flex items-center justify-center">{i+1}</span><h3 className="font-display font-bold text-text-primary">{item.t}</h3></div><p className="text-sm text-text-secondary ml-10">{item.d}</p></div>))}
          </div>

          {/* SPARETIPS */}
          <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">Slik sparer du penger på vinduer</h2>
          <div className="space-y-3 text-text-secondary mb-6">
            <p><strong className="text-text-primary">Bytt alle samtidig.</strong> Stordriftsrabatt og en gangs montering. 10–15 % billigere enn å bytte noen om gangen.</p>
            <p><strong className="text-text-primary">Velg standardstørrelser.</strong> Spesialmål koster 30–50 % mer. Tilpass hullet til standardvindu hvis mulig.</p>
            <p><strong className="text-text-primary">Søk Enova om støtte.</strong> Du kan få tilbake tusenvis av kroner hvis du oppgraderer til energiklasse A.</p>
            <p><strong className="text-text-primary">Sammenlign tre tilbud.</strong> Prisforskjellen mellom leverandører kan være 20–30 % for tilsvarende kvalitet.</p>
            <p><strong className="text-text-primary">Vurder tetting først.</strong> Hvis karmene er i god stand kan nye tetningslister koste 500–2 000 kr per vindu i stedet for 8 000–12 000 kr for nytt.</p>
            <p><strong className="text-text-primary">Bestill om høsten for vårmontering.</strong> Mange leverandører gir bedre pris ved forhåndsbestilling i rolig sesong.</p>
          </div>

          {/* RELATERTE */}
          <div className="mt-10 mb-6">
            <h2 className="font-display font-bold text-xl text-text-primary mb-4">Relaterte prosjekter</h2>
            <div className="flex flex-wrap gap-3">
              {[{href:"/isolasjon",label:"Isolasjon"},{href:"/fasade",label:"Fasade"},{href:"/tak",label:"Tak"},{href:"/bygge-hus",label:"Bygge hus"},{href:"/varmepumpe",label:"Varmepumpe"},{href:"/drenering",label:"Drenering"}].map(l=>(
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
