import { Metadata } from "next";
import Link from "next/link";
import { FadeInUp } from "@/components/ui/animations";
import { IconCalculator, IconCheck } from "@/components/icons";
import { FAQSchema, BreadcrumbSchema, ArticleSchema } from "@/components/seo/JsonLd";

const faq = [
  { question: "Hva koster varmepumpe?", answer: "Luft til luft koster 15 000–30 000 kr installert. Luft til vann koster 80 000–150 000 kr. Bergvarme koster 150 000–300 000 kr inkl. boring. Prisen avhenger av type, størrelse og boligens behov." },
  { question: "Hva koster luft til luft varmepumpe?", answer: "Luft til luft koster 15 000–30 000 kr ferdig installert. Selve pumpen koster 8 000–18 000 kr. Installasjon 5 000–12 000 kr. Toppmerkene Mitsubishi, Daikin og Fujitsu koster mer men gir bedre ytelse i kulde." },
  { question: "Hva koster bergvarme?", answer: "Bergvarme koster 150 000–300 000 kr totalt. Boring koster 80 000–150 000 kr for 150–200 m dyp. Pumpe og installasjon 70 000–150 000 kr. Mest effektiv type, men dyreste investering." },
  { question: "Hvor mye sparer man med varmepumpe?", answer: "Luft til luft sparer 5 000–15 000 kr per år, altså 30–50 % av oppvarmingen. Luft til vann sparer 10 000–25 000 kr per år. Bergvarme sparer 15 000–35 000 kr per år." },
  { question: "Hvilken varmepumpe er best?", answer: "For de fleste er luft til luft best, lav pris og god besparelse. For større hus med vannbåren varme er luft til vann optimal. Bergvarme lønner seg for store hus med høyt energibehov." },
  { question: "Får man støtte til varmepumpe?", answer: "Enova tilbyr støtte til varmepumper. Luft til vann og bergvarme kvalifiserer vanligvis. Støtten har vært 10 000–30 000 kr avhengig av type. Sjekk enova.no for gjeldende satser." },
  { question: "Hva koster luft til vann varmepumpe?", answer: "Luft til vann koster 80 000–150 000 kr installert. Pumpen 50 000–100 000 kr. Installasjon inkl. tilkobling til vannbårent system 30 000–50 000 kr. Krever vannbåren varme i gulv eller radiatorer." },
  { question: "Hvor lenge varer en varmepumpe?", answer: "En varmepumpe varer typisk 15–20 år. Kompressoren er den første komponenten som slites. Service hvert 2–3 år forlenger levetiden. Bergvarmebrønnen varer 50+ år, bare pumpen må skiftes." },
  { question: "Kan man installere varmepumpe selv?", answer: "Nei. Installasjon krever F gass sertifisering for kuldemediet. Elektrisk tilkobling krever autorisert elektriker. Uautorisert installasjon bryter loven og ugyldiggjør garantien." },
  { question: "Hva koster det å varme opp et hus?", answer: "Oppvarming av hus på 150 m²: uten varmepumpe 25 000–50 000 kr per år. Med luft til luft 15 000–30 000 kr per år. Med bergvarme 8 000–15 000 kr per år." },
  { question: "Luft til luft eller luft til vann?", answer: "Luft til luft er enklest og billigst, men varmer bare luften i rommet. Luft til vann varmer hele huset jevnt gjennom gulvvarme eller radiatorer, men krever vannbårent system og koster tre til fem ganger mer." },
  { question: "Når lønner bergvarme seg?", answer: "Bergvarme lønner seg for hus over 200 m² med høyt strømforbruk over 30 000 kWh per år, og der du planlegger å bo i minst 10–15 år. Tilbakebetalingstiden er 6–12 år." },
];

export const metadata: Metadata = {
  title: "Hva koster varmepumpe? Priser og typer 2026",
  description: "Luft til luft fra 15 000 kr. Bergvarme fra 150 000 kr. Se alle typer, priser, besparelse og Enova støtte. Komplett guide.",
  alternates: { canonical: "https://byggepris.no/varmepumpe" },
  openGraph: { title: "Hva koster varmepumpe?", description: "Komplett prisguide for varmepumper.", url: "https://byggepris.no/varmepumpe", type: "article" },
};

export default function Page() {
  return (
    <main className="pt-20">
      <BreadcrumbSchema items={[{ name: "Hjem", href: "/" }, { name: "Varmepumpe", href: "/varmepumpe" }]} />
      <ArticleSchema title="Hva koster varmepumpe?" description="Prisguide for varmepumpe." slug="varmepumpe" />
      <FAQSchema items={faq} />
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <FadeInUp>
          <nav className="text-sm text-text-muted mb-6"><Link href="/" className="hover:text-accent-yellow">Hjem</Link> / <span className="text-text-secondary">Varmepumpe</span></nav>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent-yellow/20 bg-accent-yellow/5 mb-4"><span className="text-accent-yellow text-xs font-semibold">OPPDATERT 2026</span></div>
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-text-primary mb-4">Hva koster varmepumpe?</h1>
          <p className="text-lg text-text-secondary mb-8">En varmepumpe koster fra <strong className="text-text-primary">15 000 kr for luft til luft</strong> til <strong className="text-text-primary">300 000 kr for bergvarme</strong>. Den sparer typisk 30–75 % på oppvarmingskostnadene. For de fleste norske boliger er varmepumpe den beste enkeltinvesteringen for å redusere energikostnader.</p>

          {/* PRISBAROMETER */}
          <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">Prisbarometer</h2>
          <div className="bg-bg-card border border-surface-border rounded-2xl p-6 my-6">
            <p className="text-xs text-text-muted mb-3 uppercase tracking-wider font-semibold">Totalpris ferdig installert</p>
            <div className="flex items-stretch gap-0 rounded-xl overflow-hidden mb-4">
              <div className="flex-1 bg-emerald-500/10 py-3 px-4 text-center border-r border-surface-border"><p className="text-xs text-text-muted mb-1">Rimelig</p><p className="font-mono font-bold text-sm text-emerald-400">15 000–30 000 kr</p><p className="text-[10px] text-text-muted">Luft til luft</p></div>
              <div className="flex-1 bg-accent-yellow/10 py-3 px-4 text-center border-r border-surface-border"><p className="text-xs text-text-muted mb-1">Middels</p><p className="font-mono font-bold text-sm text-accent-yellow">80 000–150 000 kr</p><p className="text-[10px] text-text-muted">Luft til vann</p></div>
              <div className="flex-1 bg-red-500/10 py-3 px-4 text-center"><p className="text-xs text-text-muted mb-1">Dyrt</p><p className="font-mono font-bold text-sm text-red-400">150 000–300 000 kr</p><p className="text-[10px] text-text-muted">Bergvarme</p></div>
            </div>
          </div>

          {/* PRISTABELL */}
          <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">Pris etter type</h2>
          <div className="bg-bg-card border border-surface-border rounded-2xl overflow-hidden my-6">
            <table className="w-full text-sm"><thead><tr className="text-left text-xs text-text-muted uppercase tracking-wider border-b border-surface-border"><th className="px-5 py-3">Type</th><th className="px-5 py-3">Totalpris</th><th className="px-5 py-3">Besparelse/år</th><th className="px-5 py-3">Tilbakebetaling</th></tr></thead>
              <tbody className="divide-y divide-surface-border">
                {[["Luft til luft","15 000–30 000 kr","5 000–15 000 kr","2–4 år"],["Luft til vann","80 000–150 000 kr","10 000–25 000 kr","5–8 år"],["Bergvarme (fjellbrønn)","150 000–300 000 kr","15 000–35 000 kr","6–12 år"],["Jordvarme (slynge)","120 000–250 000 kr","12 000–30 000 kr","5–10 år"],["Varmepumpebereder","25 000–45 000 kr","3 000–6 000 kr","5–8 år"]].map(([j,m,s,t])=>(
                  <tr key={j} className="hover:bg-bg-tertiary/30"><td className="px-5 py-3 text-text-primary font-medium">{j}</td><td className="px-5 py-3 font-mono text-accent-yellow">{m}</td><td className="px-5 py-3 font-mono text-text-secondary">{s}</td><td className="px-5 py-3 text-text-tertiary">{t}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* REGNEKSEMPEL */}
          <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">Regneksempel: Varmepumpe i enebolig 150 m²</h2>
          <div className="bg-bg-card border border-surface-border rounded-2xl p-6 my-6">
            <div className="grid sm:grid-cols-3 gap-6">
              <div>
                <p className="font-display font-bold text-emerald-400 mb-2">Luft til luft</p>
                <div className="space-y-2 text-sm">
                  {[["Pumpe","14 000 kr"],["Installasjon","8 000 kr"],["Besparelse/år","10 000 kr"]].map(([k,v])=>(<div key={k} className="flex justify-between"><span className="text-text-secondary">{k}</span><span className="font-mono">{v}</span></div>))}
                  <div className="flex justify-between border-t border-surface-border pt-2 mt-2"><span className="font-semibold">Totalt</span><span className="font-mono text-accent-yellow font-semibold">22 000 kr</span></div>
                  <p className="text-xs text-text-tertiary">Tilbake på 2–3 år</p>
                </div>
              </div>
              <div>
                <p className="font-display font-bold text-accent-yellow mb-2">Luft til vann</p>
                <div className="space-y-2 text-sm">
                  {[["Pumpe","75 000 kr"],["Installasjon","40 000 kr"],["Besparelse/år","18 000 kr"]].map(([k,v])=>(<div key={k} className="flex justify-between"><span className="text-text-secondary">{k}</span><span className="font-mono">{v}</span></div>))}
                  <div className="flex justify-between border-t border-surface-border pt-2 mt-2"><span className="font-semibold">Totalt</span><span className="font-mono text-accent-yellow font-semibold">115 000 kr</span></div>
                  <p className="text-xs text-text-tertiary">Tilbake på 6–7 år</p>
                </div>
              </div>
              <div>
                <p className="font-display font-bold text-red-400 mb-2">Bergvarme</p>
                <div className="space-y-2 text-sm">
                  {[["Boring 180 m","110 000 kr"],["Pumpe + inst.","120 000 kr"],["Besparelse/år","28 000 kr"]].map(([k,v])=>(<div key={k} className="flex justify-between"><span className="text-text-secondary">{k}</span><span className="font-mono">{v}</span></div>))}
                  <div className="flex justify-between border-t border-surface-border pt-2 mt-2"><span className="font-semibold">Totalt</span><span className="font-mono text-accent-yellow font-semibold">230 000 kr</span></div>
                  <p className="text-xs text-text-tertiary">Tilbake på 8–9 år</p>
                </div>
              </div>
            </div>
          </div>

          {/* HVILKEN PASSER */}
          <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">Hvilken type passer for deg?</h2>
          <div className="space-y-4 my-6">
            {[
              {t:"Luft til luft",d:"Best for de fleste. Lav pris, enkel installasjon, god besparelse. Fungerer som aircondition om sommeren. Passer alle boliger. Velg dette hvis du er usikker."},
              {t:"Luft til vann",d:"Best for hus med vannbåren varme i gulv eller radiatorer. Varmer hele huset jevnt. Krever at du allerede har vannbårent system."},
              {t:"Bergvarme",d:"Best for store hus over 200 m² med høyt strømforbruk. Dyreste investering, men laveste driftskostnader. Krever boring på tomten. Lønner seg over 10–15 år."},
            ].map((item,i)=>(<div key={i} className="bg-bg-card border border-surface-border rounded-xl p-5"><h3 className="font-display font-bold text-text-primary mb-2">{item.t}</h3><p className="text-sm text-text-secondary">{item.d}</p></div>))}
          </div>

          {/* SJEKKLISTE */}
          <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">Sjekkliste for kjøp av varmepumpe</h2>
          <div className="bg-bg-card border border-surface-border rounded-2xl p-6 my-6">
            <div className="space-y-2 mb-6">{["Få tilbud fra minst 3 leverandører","Sjekk at installatøren har F gass sertifisering","Sammenlign COP verdi (virkningsgrad) mellom modeller","Velg riktig størrelse for boligen, for liten pumpe gir dårlig besparelse","Sjekk støtteordninger hos Enova før du bestiller","Avklar hva garantien dekker og hvor lang den er","Spør om serviceavtale, pumpen trenger vedlikehold hvert 2–3 år"].map(t=>(<div key={t} className="flex gap-2 text-sm text-text-secondary"><IconCheck size={14} className="flex-shrink-0 text-accent-yellow mt-0.5"/><span>{t}</span></div>))}</div>
            <div className="border-t border-surface-border pt-4">
              <p className="font-display font-bold text-red-400 mb-3">Røde flagg:</p>
              <div className="space-y-2">{["Installatør uten F gass sertifikat","Tilbud uten befaring av boligen","Anbefaler underdimensjonert pumpe for å gi lav pris","Ingen garanti på arbeidet","Krever full betaling før installasjon","Vil ikke oppgi COP verdi eller energimerking"].map(t=>(<div key={t} className="flex gap-2 text-sm text-text-secondary"><span className="flex-shrink-0 text-red-400 mt-0.5 text-xs">✕</span><span>{t}</span></div>))}</div>
            </div>
          </div>

          {/* VANLIGE FEIL */}
          <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">5 vanlige feil med varmepumpe</h2>
          <div className="space-y-4 my-6">
            {[
              {t:"Velger for liten pumpe",d:"En underdimensjonert pumpe gir dårlig besparelse og slites raskere. Be om befaring og dimensjonering basert på boligens faktiske behov."},
              {t:"Plasserer innedelen feil",d:"Luft til luft pumpen bør plasseres sentralt i boligen for å varme flest mulig rom. I en gang eller stue med åpen løsning er ideelt."},
              {t:"Glemmer å isolere først",d:"Varmepumpe i et dårlig isolert hus gir begrenset effekt. Etterisoler loft og tett vinduer før du installerer pumpe, du får mye mer igjen."},
              {t:"Hopper over serviceavtale",d:"Varmepumpen trenger service hvert 2–3 år. Uten vedlikehold synker virkningsgraden og levetiden. Serviceavtale koster 1 500–3 000 kr per år."},
              {t:"Velger bergvarme i lite hus",d:"Bergvarme lønner seg først i hus over 200 m² med høyt forbruk. I et hus på 100 m² er luft til luft nesten alltid bedre investering."},
            ].map((item,i)=>(<div key={i} className="bg-bg-card border border-surface-border rounded-xl p-5"><div className="flex items-center gap-3 mb-2"><span className="w-7 h-7 rounded-lg bg-accent-yellow/10 border border-accent-yellow/20 text-accent-yellow text-xs font-display font-bold flex items-center justify-center">{i+1}</span><h3 className="font-display font-bold text-text-primary">{item.t}</h3></div><p className="text-sm text-text-secondary ml-10">{item.d}</p></div>))}
          </div>

          {/* SPARETIPS */}
          <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">Slik sparer du penger</h2>
          <div className="space-y-3 text-text-secondary mb-6">
            <p><strong className="text-text-primary">Søk Enova støtte først.</strong> Du kan få 10 000–30 000 kr tilbake. Søk før du bestiller, ikke etterpå.</p>
            <p><strong className="text-text-primary">Isoler før du installerer.</strong> Etterisolering av loft og tetting av vinduer gjør at varmepumpen jobber mer effektivt.</p>
            <p><strong className="text-text-primary">Velg riktig størrelse.</strong> For stor pumpe koster unødvendig mye. For liten sparer for lite. Be om befaring.</p>
            <p><strong className="text-text-primary">Sammenlign totaløkonomi over 15 år.</strong> Billigste pumpe er sjelden billigst totalt. Høyere COP verdi gir lavere strømkostnad over tid.</p>
            <p><strong className="text-text-primary">Bestill installasjon i vår eller sommer.</strong> Høsten er høysesong med lang ventetid og høyere priser.</p>
          </div>

          {/* RELATERTE */}
          <div className="mt-10 mb-6">
            <h2 className="font-display font-bold text-xl text-text-primary mb-4">Relaterte prosjekter</h2>
            <div className="flex flex-wrap gap-3">
              {[{href:"/isolasjon",label:"Isolasjon"},{href:"/elektriker",label:"Elektriker"},{href:"/vinduer",label:"Vinduer"},{href:"/bygge-hus",label:"Bygge hus"},{href:"/rorlegger",label:"Rørlegger"}].map(l=>(
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
