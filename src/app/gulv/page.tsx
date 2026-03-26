import { Metadata } from "next";
import Link from "next/link";
import { FadeInUp } from "@/components/ui/animations";
import { IconCalculator, IconCheck } from "@/components/icons";
import { FAQSchema, BreadcrumbSchema, ArticleSchema } from "@/components/seo/JsonLd";

const faq = [
  { question: "Hva koster nytt gulv per m²?", answer: "Nytt gulv koster 400–1 500 kr per m² inkl. legging. Vinyl koster 400–700 kr, laminat 500–800 kr, parkett 700–1 500 kr og fliser 800–2 000 kr. For en hel bolig på 100 m² betyr det 40 000–150 000 kr." },
  { question: "Hva koster parkett?", answer: "Parkett koster 700–1 500 kr per m² inkl. legging. Trestav koster 700–1 000 kr, plank 900–1 500 kr og massivtre 1 200–2 000 kr. For en stue på 30 m² betyr det 21 000–45 000 kr komplett." },
  { question: "Er parkett bedre enn laminat?", answer: "Parkett varer 30–50 år og kan slipes 3–5 ganger. Laminat varer 10–20 år og kan ikke slipes. Parkett øker boligverdien mer. Laminat er 40–50 % billigere og enklere å legge selv." },
  { question: "Hva koster vinylgulv?", answer: "Vinyl med klikkplanker koster 400–700 kr per m² inkl. legging. Det er vannfast, slitesterkt og lett å legge. Godt alternativ for bad, kjøkken og entré. Topper listen for prisbevisste." },
  { question: "Kan man legge gulv selv?", answer: "Ja. Laminat og vinyl med klikkfeste er enkle prosjekter å gjøre selv. Du sparer 200–500 kr per m² i arbeidskostnad. Parkett kan legges flytende. Fliser bør legges av fagfolk, særlig i våtrom." },
  { question: "Hva koster gulvsliping?", answer: "Sliping av parkett koster 200–400 kr per m² inkl. lakk eller olje. For en stue på 30 m² betyr det 6 000–12 000 kr. Det er mye billigere enn nytt gulv og gir like godt resultat." },
  { question: "Hva koster flislegging?", answer: "Fliser inkl. legging koster 800–2 000 kr per m². Materialet koster 300–1 500 kr per m² og legging 500–1 000 kr per m². For badegulv på 6 m² betyr det 5 000–12 000 kr." },
  { question: "Hva koster gulvvarme?", answer: "Elektrisk gulvvarme koster 500–1 200 kr per m². Vannbåren gulvvarme koster 800–1 500 kr per m². Bad på 6 m² med elektrisk varme koster 3 000–7 200 kr. Stue på 25 m² koster 12 500–30 000 kr." },
  { question: "Kan man legge nytt gulv oppå gammelt?", answer: "Ja, ofte. Vinyl og laminat kan legges over eksisterende gulv hvis det er jevnt. Parkett kan legges flytende med dampsperre over. Ujevnt gulv må avrettes først, noe som koster 50–150 kr per m²." },
  { question: "Hvilket gulv er best for bad?", answer: "Fliser er best for bad fordi de er vannfaste og slitesterke. Vinyl er et godt alternativ som er billigere og varmere under føttene. Parkett og laminat bør ikke brukes på bad." },
  { question: "Hva koster det å fjerne gammelt gulv?", answer: "Fjerning av gammelt gulv koster 50–200 kr per m² avhengig av type. Teppe koster 50 kr, vinyl 80 kr, parkett 100 kr og fliser 150–200 kr. For 80 m² betyr det 4 000–16 000 kr." },
  { question: "Hvilket gulv øker boligverdien mest?", answer: "Parkett i eik plank gir høyest verdiøkning. Deretter god vinyl. Laminat gir begrenset verdiøkning. Fliser øker verdien i våtrom. Teppe reduserer verdien i Norge." },
];

export const metadata: Metadata = {
  title: "Hva koster nytt gulv? Priser for parkett, vinyl og fliser 2026",
  description: "Gulv koster 400–1 500 kr/m². Se priser for parkett, vinyl, laminat, fliser og gulvvarme. Sammenligning og regneksempel.",
  alternates: { canonical: "https://byggepris.no/gulv" },
  openGraph: { title: "Hva koster nytt gulv?", description: "400–1 500 kr/m². Komplett prisguide.", url: "https://byggepris.no/gulv", type: "article" },
};

export default function Page() {
  return (
    <main className="pt-20">
      <BreadcrumbSchema items={[{ name: "Hjem", href: "/" }, { name: "Gulv", href: "/gulv" }]} />
      <ArticleSchema title="Hva koster nytt gulv?" description="Komplett prisguide for gulv i Norge." slug="gulv" />
      <FAQSchema items={faq} />
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <FadeInUp>
          <nav className="text-sm text-text-muted mb-6"><Link href="/" className="hover:text-accent-yellow">Hjem</Link> / <span className="text-text-secondary">Gulv</span></nav>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent-yellow/20 bg-accent-yellow/5 mb-4"><span className="text-accent-yellow text-xs font-semibold">OPPDATERT 2026</span></div>
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-text-primary mb-4">Hva koster nytt gulv?</h1>
          <p className="text-lg text-text-secondary mb-8">Nytt gulv koster typisk <strong className="text-text-primary">400–1 500 kr per m²</strong> inkl. legging. For en hel bolig på 100 m² betyr det 40 000–150 000 kr. Vinyl er rimeligst, parkett gir mest verdi og fliser er best for våtrom.</p>

          <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">Materialsammenligning</h2>
          <div className="bg-bg-card border border-surface-border rounded-2xl overflow-hidden my-6">
            <table className="w-full text-sm"><thead><tr className="text-left text-xs text-text-muted uppercase tracking-wider border-b border-surface-border"><th className="px-4 py-3">Type</th><th className="px-4 py-3">Pris per m²</th><th className="px-4 py-3">Levetid</th><th className="px-4 py-3">Gjør selv</th><th className="px-4 py-3">Verdiøkning</th></tr></thead>
              <tbody className="divide-y divide-surface-border">
                {[["Vinyl/LVT","400–700 kr","10–20 år","Enkel","Middels"],["Laminat","500–800 kr","10–20 år","Enkel","Lav"],["Parkett trestav","700–1 000 kr","30–50 år","Middels","Høy"],["Parkett plank","900–1 500 kr","30–50 år","Middels","Svært høy"],["Fliser","800–2 000 kr","30+ år","Vanskelig","Høy i våtrom"],["Massivtre","1 200–2 000 kr","50+ år","Vanskelig","Svært høy"]].map(([t,p,l,d,v])=>(
                  <tr key={t} className="hover:bg-bg-tertiary/30"><td className="px-4 py-3 text-text-primary font-medium">{t}</td><td className="px-4 py-3 font-mono text-accent-yellow">{p}</td><td className="px-4 py-3 text-text-tertiary">{l}</td><td className="px-4 py-3 text-text-tertiary">{d}</td><td className="px-4 py-3 text-text-tertiary">{v}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">Regneksempel: Nytt gulv i hele boligen (100 m²)</h2>
          <div className="bg-bg-card border border-surface-border rounded-2xl p-6 my-6">
            <div className="grid sm:grid-cols-3 gap-6">
              <div>
                <p className="font-display font-bold text-text-primary mb-2">Vinyl</p>
                <div className="space-y-2 text-sm">
                  {[["Materiale","30 000 kr"],["Legging","20 000 kr"],["Avretting","5 000 kr"]].map(([k,v])=>(<div key={k} className="flex justify-between"><span className="text-text-secondary">{k}</span><span className="font-mono">{v}</span></div>))}
                  <div className="flex justify-between border-t border-surface-border pt-2 mt-2"><span className="font-semibold">Totalt</span><span className="font-mono text-accent-yellow font-semibold">55 000 kr</span></div>
                </div>
              </div>
              <div>
                <p className="font-display font-bold text-accent-yellow mb-2">Parkett</p>
                <div className="space-y-2 text-sm">
                  {[["Materiale","60 000 kr"],["Legging","30 000 kr"],["Avretting","5 000 kr"]].map(([k,v])=>(<div key={k} className="flex justify-between"><span className="text-text-secondary">{k}</span><span className="font-mono">{v}</span></div>))}
                  <div className="flex justify-between border-t border-surface-border pt-2 mt-2"><span className="font-semibold">Totalt</span><span className="font-mono text-accent-yellow font-semibold">95 000 kr</span></div>
                </div>
              </div>
              <div>
                <p className="font-display font-bold text-text-primary mb-2">Vinyl selv</p>
                <div className="space-y-2 text-sm">
                  {[["Materiale","30 000 kr"],["Avretting","5 000 kr"],["Verktøy","500 kr"]].map(([k,v])=>(<div key={k} className="flex justify-between"><span className="text-text-secondary">{k}</span><span className="font-mono">{v}</span></div>))}
                  <div className="flex justify-between border-t border-surface-border pt-2 mt-2"><span className="font-semibold">Totalt</span><span className="font-mono text-accent-yellow font-semibold">35 500 kr</span></div>
                </div>
              </div>
            </div>
          </div>

          <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">Legge gulv selv eller bruke fagfolk</h2>
          <div className="grid sm:grid-cols-2 gap-4 my-6">
            <div className="bg-bg-card border border-surface-border rounded-xl p-5">
              <p className="font-display font-bold text-accent-yellow mb-3">Gjør det selv og spar 200–500 kr/m²</p>
              <div className="space-y-2">{["Vinyl med klikkplanker","Laminat med klikkfeste","Parkett flytende legging","Teppe med teip eller lim","Avretting med flytspackel"].map(t=>(<div key={t} className="flex gap-2 text-sm text-text-secondary"><IconCheck size={14} className="flex-shrink-0 text-accent-yellow mt-0.5"/><span>{t}</span></div>))}</div>
            </div>
            <div className="bg-bg-card border border-surface-border rounded-xl p-5">
              <p className="font-display font-bold text-text-primary mb-3">Bruk fagfolk for</p>
              <div className="space-y-2">{["Flislegging, særlig i våtrom","Massivtre med limt legging","Sliping av eksisterende parkett","Store arealer med mønsterlegging","Installasjon av gulvvarme"].map(t=>(<div key={t} className="flex gap-2 text-sm text-text-secondary"><IconCheck size={14} className="flex-shrink-0 text-text-tertiary mt-0.5"/><span>{t}</span></div>))}</div>
            </div>
          </div>

          <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">5 vanlige feil</h2>
          <div className="space-y-4 my-6">
            {[
              {t:"Hopper over avretting",d:"Ujevnt underlag gir knirk, gap og kortere levetid. Avretting koster 50–150 kr per m² og er alltid verdt det."},
              {t:"Velger kun etter pris",d:"Billigste vinyl varer 5–8 år. Middels kvalitet varer 15–20 år. Regn pris per år, da er ofte parkett billigst i lengden."},
              {t:"Glemmer å aklimatisere",d:"Parkett og laminat må aklimatiseres 48 timer i rommet før legging. Ellers kan det bule seg eller få gap."},
              {t:"Feil gulv på bad",d:"Laminat og parkett tåler ikke fukt. Bruk fliser eller vinyl på bad, kjøkken og entré."},
              {t:"Legger ikke dampsperre",d:"Dampsperre er nødvendig under alle flytende gulv på betong. Uten får du fuktskader. Koster bare 20–40 kr per m²."},
            ].map((item,i)=>(<div key={i} className="bg-bg-card border border-surface-border rounded-xl p-5"><div className="flex items-center gap-3 mb-2"><span className="w-7 h-7 rounded-lg bg-accent-yellow/10 border border-accent-yellow/20 text-accent-yellow text-xs font-display font-bold flex items-center justify-center">{i+1}</span><h3 className="font-display font-bold text-text-primary">{item.t}</h3></div><p className="text-sm text-text-secondary ml-10">{item.d}</p></div>))}
          </div>

          <div className="mt-10 mb-6">
            <h2 className="font-display font-bold text-xl text-text-primary mb-4">Relaterte prosjekter</h2>
            <div className="flex flex-wrap gap-3">
              {[{href:"/oppussing",label:"Oppussing"},{href:"/bad",label:"Bad"},{href:"/maling",label:"Maling"},{href:"/kjokken",label:"Kjøkken"},{href:"/oppussing-for-salg",label:"Oppussing før salg"}].map(l=>(
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
