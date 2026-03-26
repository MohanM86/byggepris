import { Metadata } from "next";
import Link from "next/link";
import { FadeInUp } from "@/components/ui/animations";
import { IconCalculator, IconCheck } from "@/components/icons";
import { FAQSchema, BreadcrumbSchema, ArticleSchema } from "@/components/seo/JsonLd";

const faq = [
  { question: "Hva koster etterisolering?", answer: "Etterisolering koster 300–1 500 kr per m² avhengig av metode. Loft med blåseisolasjon koster 300–600 kr per m². Vegger utvendig koster 1 000–2 500 kr per m² inkl. ny kledning. Gulv koster 400–800 kr per m²." },
  { question: "Hva koster det å isolere loft?", answer: "Loftisolering koster 300–600 kr per m². Blåseisolasjon er billigst og mest effektivt. For et loft på 80 m² betyr det 24 000–48 000 kr. Kan spare 15–30 % på oppvarming." },
  { question: "Hva koster etterisolering av vegger?", answer: "Vegger utvendig koster 1 000–2 500 kr per m² inkl. ny vindsperre, isolasjon og kledning. For 150 m² fasade betyr det 150 000–375 000 kr. Innvendig etterisolering koster 500–1 200 kr per m²." },
  { question: "Lønner etterisolering seg?", answer: "Ja, for de fleste. Et dårlig isolert hus fra 1970 tallet bruker 30 000–50 000 kr mer i strøm per år. Loftisolering har 3–5 års tilbakebetalingstid. Veggisolering tar 8–15 år." },
  { question: "Kan man isolere selv?", answer: "Loftisolering med matter kan du gjøre selv og spare 50 % av arbeidskostnaden. Blåseisolasjon krever spesialutstyr. Veggisolering utvendig bør gjøres av fagfolk. Innvendig med plater kan du gjøre selv." },
  { question: "Hva er best isolasjon?", answer: "Mineralull fra Glava eller Rockwool er mest brukt, god isolasjonsevne, brannbestandig og rimelig. EPS brukes i grunn og under gulv. XPS i fuktutsatte områder. Treisolasjon fra Hunton er miljøvennlig." },
  { question: "Hva koster det å isolere gulv?", answer: "Gulvisolering koster 400–800 kr per m². For et hus på 100 m² betyr det 40 000–80 000 kr. Krever ofte at gulvet rives opp. Under betongplate ved nybygg er rimeligere med 150–300 kr per m²." },
  { question: "Hva koster blåseisolasjon?", answer: "Blåseisolasjon koster 300–500 kr per m² for loft, inkl. arbeid og materiale. Minimum bestilling er typisk 50 m². Raskere og billigere enn matter. Fyller alle hulrom og spalter." },
  { question: "Hvor mye isolasjon trenger man?", answer: "TEK17 krever minimum 30–35 cm mineralull i tak, 20–25 cm i vegger og 20–30 cm i gulv. Eldre hus har ofte bare 10–15 cm. Å gå fra 10 til 30 cm i loftet kan halvere varmetapet gjennom taket." },
  { question: "Får man støtte til etterisolering?", answer: "Enova tilbyr støtte til energitiltak i bolig. Støtten har vært opp til 20–30 % av kostnaden. Sjekk enova.no for gjeldende satser og krav." },
  { question: "Hva bør man isolere først?", answer: "Prioriter slik: Først loft fordi det er billigst og gir størst effekt. Deretter vinduer for stor varmegevinst. Så vegger med størst areal. Til slutt gulv for bedre komfort." },
  { question: "Hva koster kryperomsisolering?", answer: "Kryperomsisolering koster 200–500 kr per m². For 80 m² betyr det 16 000–40 000 kr. Viktig for å unngå fuktproblemer og kaldt gulv. Ofte oversett men god investering." },
];

export const metadata: Metadata = {
  title: "Hva koster isolasjon? Priser for etterisolering 2026",
  description: "Etterisolering koster 300–1 500 kr/m². Se priser for loft, vegger, gulv og blåseisolasjon. Tips for energisparing og Enova støtte.",
  alternates: { canonical: "https://byggepris.no/isolasjon" },
  openGraph: { title: "Hva koster isolasjon?", description: "300–1 500 kr/m². Komplett prisguide.", url: "https://byggepris.no/isolasjon", type: "article" },
};

export default function Page() {
  return (
    <main className="pt-20">
      <BreadcrumbSchema items={[{ name: "Hjem", href: "/" }, { name: "Isolasjon", href: "/isolasjon" }]} />
      <ArticleSchema title="Hva koster isolasjon?" description="Prisguide for etterisolering." slug="isolasjon" />
      <FAQSchema items={faq} />
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <FadeInUp>
          <nav className="text-sm text-text-muted mb-6"><Link href="/" className="hover:text-accent-yellow">Hjem</Link> / <span className="text-text-secondary">Isolasjon</span></nav>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent-yellow/20 bg-accent-yellow/5 mb-4"><span className="text-accent-yellow text-xs font-semibold">OPPDATERT 2026</span></div>
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-text-primary mb-4">Hva koster etterisolering?</h1>
          <p className="text-lg text-text-secondary mb-8">Etterisolering koster typisk <strong className="text-text-primary">300–1 500 kr per m²</strong> avhengig av metode. Loftisolering er rimeligst og gir raskest tilbakebetaling. Et dårlig isolert hus kan bruke 30 000–50 000 kr mer i strøm per år enn nødvendig.</p>

          {/* PRISBAROMETER */}
          <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">Prisbarometer</h2>
          <div className="bg-bg-card border border-surface-border rounded-2xl p-6 my-6">
            <p className="text-xs text-text-muted mb-3 uppercase tracking-wider font-semibold">Etterisolering per m²</p>
            <div className="flex items-stretch gap-0 rounded-xl overflow-hidden mb-4">
              <div className="flex-1 bg-emerald-500/10 py-3 px-4 text-center border-r border-surface-border"><p className="text-xs text-text-muted mb-1">Billig</p><p className="font-mono font-bold text-sm text-emerald-400">Under 500 kr</p></div>
              <div className="flex-1 bg-accent-yellow/10 py-3 px-4 text-center border-r border-surface-border"><p className="text-xs text-text-muted mb-1">Normal</p><p className="font-mono font-bold text-sm text-accent-yellow">500–1 200 kr</p></div>
              <div className="flex-1 bg-red-500/10 py-3 px-4 text-center"><p className="text-xs text-text-muted mb-1">Dyrt</p><p className="font-mono font-bold text-sm text-red-400">Over 1 200 kr</p></div>
            </div>
            <p className="text-xs text-text-tertiary">Loft og kryperom i nedre sjikt. Gulv i midten. Utvendig veggisolering i øvre.</p>
          </div>

          {/* PRISTABELL */}
          <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">Komplett pristabell</h2>
          <div className="bg-bg-card border border-surface-border rounded-2xl overflow-hidden my-6">
            <table className="w-full text-sm"><thead><tr className="text-left text-xs text-text-muted uppercase tracking-wider border-b border-surface-border"><th className="px-5 py-3">Type</th><th className="px-5 py-3">Pris per m²</th><th className="px-5 py-3">100 m²</th><th className="px-5 py-3">Tilbakebetaling</th></tr></thead>
              <tbody className="divide-y divide-surface-border">
                {[["Loft med blåseisolasjon","300–500 kr","30 000–50 000 kr","3–5 år"],["Loft med matter","400–600 kr","40 000–60 000 kr","4–6 år"],["Kryperom","200–500 kr","16 000–40 000 kr","3–5 år"],["Gulv","400–800 kr","40 000–80 000 kr","5–8 år"],["Vegger innvendig","500–1 200 kr","50 000–120 000 kr","6–10 år"],["Vegger utvendig inkl. kledning","1 000–2 500 kr","100 000–250 000 kr","8–15 år"]].map(([j,m,t,r])=>(
                  <tr key={j} className="hover:bg-bg-tertiary/30"><td className="px-5 py-3 text-text-primary font-medium">{j}</td><td className="px-5 py-3 font-mono text-accent-yellow">{m}</td><td className="px-5 py-3 font-mono text-text-secondary">{t}</td><td className="px-5 py-3 text-text-tertiary">{r}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* REGNEKSEMPEL */}
          <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">Regneksempel: Etterisolere hus fra 1975</h2>
          <div className="bg-bg-card border border-surface-border rounded-2xl p-6 my-6">
            <div className="space-y-3 text-sm">
              {[["Blåseisolasjon loft (80 m²)","36 000 kr"],["Etterisolering vegger utvendig (120 m²)","180 000 kr"],["Ny kledning og vindsperre","inkludert over"],["Nye vinduer (12 stk trelags)","108 000 kr"],["Tetting og etterisolering rundt vinduer","12 000 kr"]].map(([k,v])=>(
                <div key={k} className="flex justify-between"><span className="text-text-secondary">{k}</span><span className="font-mono text-text-primary">{v}</span></div>
              ))}
              <div className="flex justify-between border-t border-surface-border pt-3 mt-3"><span className="text-text-primary font-semibold">Totalt</span><span className="font-mono text-accent-yellow font-semibold">336 000 kr</span></div>
            </div>
            <p className="text-xs text-text-tertiary mt-4">Enebolig på 150 m² fra 1975 med 10 cm isolasjon i vegger og 15 cm i loft. Forventet strømbesparelse: 20 000–30 000 kr per år. Tilbakebetaling: ca. 12–15 år. Med Enova støtte: 9–12 år.</p>
          </div>

          {/* PRIORITERING */}
          <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">Hva gir mest energisparing?</h2>
          <div className="space-y-4 my-6">
            {[
              {t:"1. Loft",d:"Billigst og størst effekt fordi varm luft stiger. Blåseisolasjon er raskest og rimeligst. Tilbakebetaling på 3–5 år."},
              {t:"2. Vinduer",d:"Stor varmegevinst ved bytte fra tolags til trelags. Se vår vindusguide for priser."},
              {t:"3. Vegger",d:"Størst areal og dermed stort potensial. Dyrere å etterisolere, men kombinert med ny kledning får du to jobber i en."},
              {t:"4. Gulv",d:"Minst varmetap, men bedre komfort. Særlig viktig med gulvvarme. Kombiner med varmepumpe for best effekt."},
            ].map((item,i)=>(<div key={i} className="bg-bg-card border border-surface-border rounded-xl p-5"><div className="flex items-center gap-3 mb-2"><span className="w-7 h-7 rounded-lg bg-accent-yellow/10 border border-accent-yellow/20 text-accent-yellow text-xs font-display font-bold flex items-center justify-center">{i+1}</span><h3 className="font-display font-bold text-text-primary">{item.t}</h3></div><p className="text-sm text-text-secondary ml-10">{item.d}</p></div>))}
          </div>

          {/* SELV VS FAGFOLK */}
          <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">Gjøre selv eller bruke fagfolk</h2>
          <div className="grid sm:grid-cols-2 gap-4 my-6">
            <div className="bg-bg-card border border-surface-border rounded-xl p-5">
              <p className="font-display font-bold text-accent-yellow mb-3">Kan gjøre selv</p>
              <div className="space-y-2">{["Legge isolasjonsmatter på loft","Innvendig isolering med plater","Tetting rundt vinduer og dører","Isolering av rør og ventiler","Dampsperre på innsiden"].map(t=>(<div key={t} className="flex gap-2 text-sm text-text-secondary"><IconCheck size={14} className="flex-shrink-0 text-accent-yellow mt-0.5"/><span>{t}</span></div>))}</div>
            </div>
            <div className="bg-bg-card border border-surface-border rounded-xl p-5">
              <p className="font-display font-bold text-text-primary mb-3">Bruk fagfolk for</p>
              <div className="space-y-2">{["Blåseisolasjon i loft og vegger","Utvendig etterisolering av fasade","Gulvisolering med oppgraving","Kryperomsisolering","Beregning av U verdi og behov"].map(t=>(<div key={t} className="flex gap-2 text-sm text-text-secondary"><IconCheck size={14} className="flex-shrink-0 text-text-tertiary mt-0.5"/><span>{t}</span></div>))}</div>
            </div>
          </div>

          {/* VANLIGE FEIL */}
          <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">5 vanlige feil ved etterisolering</h2>
          <div className="space-y-4 my-6">
            {[
              {t:"Glemmer dampsperre",d:"Dampsperre på varm side hindrer fukt i å trenge inn i isolasjonen. Uten dampsperre kan du få mugg og råte i konstruksjonen."},
              {t:"Isolerer uten å tette først",d:"Trekk og luftlekkasjer gjennom sprekker og gjennomføringer bør tettes før du isolerer. Ellers blåser kald luft rett gjennom."},
              {t:"For lite isolasjon i loft",d:"Å legge 10 cm ekstra i et loft som allerede har 15 cm gir begrenset effekt. Gå til minst 30 cm for å merke forskjell."},
              {t:"Isolerer bare noen vegger",d:"Kalde vegger mot nord bør prioriteres, men å isolere bare en vegg kan flytte kuldebroen til hjørnene og skape kondens."},
              {t:"Velger billigste løsning uten rådgivning",d:"En energirådgiver koster 5 000–10 000 kr og finner de tiltakene som gir mest sparing per krone. Ofte spart inn på første strømregning."},
            ].map((item,i)=>(<div key={i} className="bg-bg-card border border-surface-border rounded-xl p-5"><div className="flex items-center gap-3 mb-2"><span className="w-7 h-7 rounded-lg bg-accent-yellow/10 border border-accent-yellow/20 text-accent-yellow text-xs font-display font-bold flex items-center justify-center">{i+1}</span><h3 className="font-display font-bold text-text-primary">{item.t}</h3></div><p className="text-sm text-text-secondary ml-10">{item.d}</p></div>))}
          </div>

          {/* SPARETIPS */}
          <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">Slik sparer du penger på isolasjon</h2>
          <div className="space-y-3 text-text-secondary mb-6">
            <p><strong className="text-text-primary">Start med loft.</strong> Billigst tiltak med raskest tilbakebetaling. Blåseisolasjon på 80 m² loft koster 30 000–40 000 kr og sparer 5 000–10 000 kr per år.</p>
            <p><strong className="text-text-primary">Søk Enova om støtte.</strong> Du kan få tilbake 20–30 % av kostnaden for energitiltak. Sjekk enova.no før du starter.</p>
            <p><strong className="text-text-primary">Kombiner med annet vedlikehold.</strong> Skal du uansett bytte kledning? Legg inn etterisolering samtidig. Marginalkostnaden er mye lavere enn å gjøre det separat.</p>
            <p><strong className="text-text-primary">Isoler loft selv.</strong> Å legge isolasjonsmatter på loft er enkelt og sparer 50 % av arbeidskostnaden. Du trenger bare matter, kniv og maske.</p>
            <p><strong className="text-text-primary">Tett først, isoler etterpå.</strong> Tetting av luftlekkasjer koster nesten ingenting men kan spare 5–10 % på strøm. Gjør det før du bruker penger på isolasjon.</p>
          </div>

          {/* RELATERTE */}
          <div className="mt-10 mb-6">
            <h2 className="font-display font-bold text-xl text-text-primary mb-4">Relaterte prosjekter</h2>
            <div className="flex flex-wrap gap-3">
              {[{href:"/varmepumpe",label:"Varmepumpe"},{href:"/vinduer",label:"Vinduer"},{href:"/fasade",label:"Fasade"},{href:"/tak",label:"Tak"},{href:"/bygge-hus",label:"Bygge hus"}].map(l=>(
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
