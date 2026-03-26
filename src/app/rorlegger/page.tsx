import { Metadata } from "next";
import Link from "next/link";
import { FadeInUp } from "@/components/ui/animations";
import { IconCalculator, IconCheck } from "@/components/icons";
import { FAQSchema, BreadcrumbSchema, ArticleSchema } from "@/components/seo/JsonLd";

const faq = [
  { question: "Hva koster en rorlegger per time?", answer: "Timepris for rorlegger er typisk 700-1 100 kr inkl. mva. Oslo: 850-1 100 kr. Distriktene: 650-900 kr. Rorlegger er den dyreste handverkeren fordi arbeidet krever sertifisering og har hoy risiko (vannskader)." },
  { question: "Hva koster rorlegger pa nytt bad?", answer: "Komplett rorleggerarbeid pa bad koster 40 000-80 000 kr. Inkluderer nye ror, sluk, tilkobling av toalett, servant og dusj. Hvis ror ma omlegges (flyttes) koster det 20 000-40 000 kr ekstra." },
  { question: "Hva koster det a bytte ror i huset?", answer: "Nye vannror hele huset: 60 000-150 000 kr. Nye avlopsror: 80 000-200 000 kr. Totalt for all rorlegging: 150 000-350 000 kr. Anbefales for boliger med gamle galvaniserte ror eller kobberror fra for 1970." },
  { question: "Hva koster det a flytte vasken?", answer: "Flytte kjokkenvasken: 8 000-20 000 kr. Kort flytt (under 1 m): 8 000-12 000 kr. Lengre flytt: 12 000-25 000 kr pga. ny rorforing og avlopstilkobling. Flytte baderomsservant: 5 000-15 000 kr." },
  { question: "Hva koster varmtvannsbereder?", answer: "Ny bereder inkl. installasjon: 13 000-30 000 kr. Beholderen: 8 000-20 000 kr. Installasjon: 5 000-10 000 kr. 120-200 liter er vanligst. Varmepumpebereder koster mer (25 000-45 000 kr) men bruker 60-70% mindre strom." },
  { question: "Hva koster det a installere varmepumpe?", answer: "Luft-til-luft: 15 000-30 000 kr. Luft-til-vann (krever rorlegger): 80 000-150 000 kr. Bergvarme: 150 000-300 000 kr. Rorlegger er nodvendig for vann-baserte systemer." },
  { question: "Kan man gjore rorleggerarbeid selv?", answer: "Nei. Alt arbeid med vannror, avlop og sluk krever autorisert rorleggerfirma. Du kan ikke koble til eller endre roropplegget selv. Uautorisert arbeid kan fore til vannskader og problemer med forsikring." },
  { question: "Hva koster vannbaren varme?", answer: "Vannbaren gulvvarme: 800-1 500 kr per m2 installert. For hus pa 120 m2: 96 000-180 000 kr. Krever varmekilden i tillegg (varmepumpe). Gir jevn og behagelig varme med lave driftskostnader." },
  { question: "Hva koster det a skifte sluk?", answer: "Skifte sluk: 5 000-15 000 kr. Enkel utskifting av slukrist: 1 000-3 000 kr. Nytt sluk med omlegging av avlop: 10 000-20 000 kr. Sluk bor alltid skiftes ved baderomsrenovering." },
  { question: "Hva koster akutt rorlegger?", answer: "Akutt/nodutrykning koster 2 000-5 000 kr i oppstartsgebyr, pluss timepris med 30-50% paslag. Kveld/helg: 50-100% tillegg. En vannlekkasje kan koste 200 000+ kr i skade — sa akutt-prisen er billig i sammenligning." },
  { question: "Hva koster det a installere oppvaskmaskin?", answer: "Tilkobling til eksisterende opplegg: 3 000-6 000 kr. Ny tilkobling med rorforing: 5 000-12 000 kr. Inkluderer vanntilkobling, avlop og stoppekran." },
  { question: "Nar bor man bytte vannror?", answer: "Nar du har: galvaniserte ror (gra, magnetiske), synlig korrosjon eller rust, lavt vanntrykk, misfarget vann, lekkasjer, eller ror eldre enn 40-50 ar. Kobberror varer lenger men bor sjekkes etter 50+ ar." },
];

export const metadata: Metadata = {
  title: "Hva koster rorlegger? Timepriser og komplett prisguide 2026",
  description: "Rorlegger koster 700-1 100 kr/time. Se priser for bad, kjokken, varmtvannsbereder, vannror og akutt rorlegger. Komplett guide med regneksempel.",
  alternates: { canonical: "https://byggepris.no/rorlegger" },
  openGraph: { title: "Hva koster rorlegger?", description: "Timepris 700-1 100 kr. Komplett prisguide.", url: "https://byggepris.no/rorlegger", type: "article" },
};

export default function Page() {
  return (
    <main className="pt-20">
      <BreadcrumbSchema items={[{ name: "Hjem", href: "/" }, { name: "Rorlegger", href: "/rorlegger" }]} />
      <ArticleSchema title="Hva koster rorlegger?" description="Komplett prisguide for rorleggerarbeid i Norge." slug="rorlegger" />
      <FAQSchema items={faq} />
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <FadeInUp>
          <nav className="text-sm text-text-muted mb-6"><Link href="/" className="hover:text-accent-yellow">Hjem</Link> / <span className="text-text-secondary">Rorlegger</span></nav>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent-yellow/20 bg-accent-yellow/5 mb-4">
            <span className="text-accent-yellow text-xs font-semibold">OPPDATERT 2026</span>
          </div>
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-text-primary mb-4">Hva koster rorlegger?</h1>
          <p className="text-lg text-text-secondary mb-8">En rorlegger koster typisk <strong className="text-text-primary">700-1 100 kr per time</strong> inkl. mva. Rorlegger er den dyreste handverkeren fordi arbeidet krever sertifisering og har hoy risiko. Pa et bad koster rorleggerarbeidet alene 40 000-80 000 kr.</p>

          {/* ── PRISBAROMETER ── */}
          <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">Prisbarometer — er tilbudet ditt rimelig?</h2>
          <div className="bg-bg-card border border-surface-border rounded-2xl p-6 my-6">
            <div className="flex items-stretch gap-0 rounded-xl overflow-hidden mb-4">
              <div className="flex-1 bg-emerald-500/10 py-3 px-4 text-center border-r border-surface-border">
                <p className="text-xs text-text-muted mb-1">Billig</p>
                <p className="font-mono font-bold text-sm text-emerald-400">Under 700 kr</p>
              </div>
              <div className="flex-1 bg-accent-yellow/10 py-3 px-4 text-center border-r border-surface-border">
                <p className="text-xs text-text-muted mb-1">Normal</p>
                <p className="font-mono font-bold text-sm text-accent-yellow">700–950 kr</p>
              </div>
              <div className="flex-1 bg-red-500/10 py-3 px-4 text-center">
                <p className="text-xs text-text-muted mb-1">Dyrt</p>
                <p className="font-mono font-bold text-sm text-red-400">Over 950 kr</p>
              </div>
            </div>
            <p className="text-xs text-text-tertiary">Timepriser inkl. mva. Akutt/nod: +30-50%. Kveld/helg: +50-100%. Oslo i ovre sjikt.</p>
          </div>

          {/* ── KOMPLETT PRISTABELL ── */}
          <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">Komplett pristabell for rorleggerarbeid</h2>
          <div className="bg-bg-card border border-surface-border rounded-2xl overflow-hidden my-6">
            <table className="w-full text-sm">
              <thead><tr className="text-left text-xs text-text-muted uppercase tracking-wider border-b border-surface-border"><th className="px-5 py-3">Jobb</th><th className="px-5 py-3">Typisk pris</th></tr></thead>
              <tbody className="divide-y divide-surface-border">
                {[
                  ["Oppstartsgebyr / utkjoring", "500–1 500 kr"],
                  ["Akutt/nod-utrykning (tillegg)", "2 000–5 000 kr"],
                  ["Skifte blandebatteri", "2 000–5 000 kr"],
                  ["Tilkoble oppvaskmaskin", "3 000–6 000 kr"],
                  ["Tilkoble vaskemaskin", "2 000–5 000 kr"],
                  ["Skifte sluk", "5 000–15 000 kr"],
                  ["Flytte vask (kjokken)", "8 000–20 000 kr"],
                  ["Rorlegger pa bad (komplett)", "40 000–80 000 kr"],
                  ["Ny varmtvannsbereder installert", "13 000–30 000 kr"],
                  ["Varmepumpebereder installert", "25 000–45 000 kr"],
                  ["Nye vannror hele huset", "60 000–150 000 kr"],
                  ["Nye avlopsror hele huset", "80 000–200 000 kr"],
                  ["Vannbaren gulvvarme (per m2)", "800–1 500 kr"],
                  ["Luft-til-vann varmepumpe", "80 000–150 000 kr"],
                ].map(([j, p]) => (
                  <tr key={j} className="hover:bg-bg-tertiary/30 transition-colors"><td className="px-5 py-3 text-text-primary font-medium">{j}</td><td className="px-5 py-3 font-mono text-accent-yellow">{p}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* ── REGNEKSEMPEL ── */}
          <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">Regneksempel: Rorlegger pa bad 6 m2 i Oslo</h2>
          <div className="bg-bg-card border border-surface-border rounded-2xl p-6 my-6">
            <div className="space-y-3 text-sm">
              <div className="flex justify-between"><span className="text-text-secondary">Oppstartsgebyr</span><span className="font-mono text-text-primary">1 500 kr</span></div>
              <div className="flex justify-between"><span className="text-text-secondary">Riving av gamle ror</span><span className="font-mono text-text-primary">4 000 kr</span></div>
              <div className="flex justify-between"><span className="text-text-secondary">Nye vannror (varm + kald)</span><span className="font-mono text-text-primary">12 000 kr</span></div>
              <div className="flex justify-between"><span className="text-text-secondary">Nytt avlop + sluk</span><span className="font-mono text-text-primary">8 000 kr</span></div>
              <div className="flex justify-between"><span className="text-text-secondary">Tilkobling toalett</span><span className="font-mono text-text-primary">4 500 kr</span></div>
              <div className="flex justify-between"><span className="text-text-secondary">Tilkobling servant + blandebatteri</span><span className="font-mono text-text-primary">5 000 kr</span></div>
              <div className="flex justify-between"><span className="text-text-secondary">Tilkobling dusjbatteri + haldtak</span><span className="font-mono text-text-primary">4 500 kr</span></div>
              <div className="flex justify-between"><span className="text-text-secondary">Trykktesting og kontroll</span><span className="font-mono text-text-primary">2 500 kr</span></div>
              <div className="flex justify-between border-t border-surface-border pt-3 mt-3"><span className="text-text-primary font-semibold">Totalt rorleggerarbeid</span><span className="font-mono text-accent-yellow font-semibold">42 000 kr</span></div>
            </div>
            <p className="text-xs text-text-tertiary mt-4">Realistisk eksempel for Oslo. Ror beholdes pa samme plass. Omlegging av ror (ny plassering) kan legge til 15 000-30 000 kr.</p>
          </div>

          {/* ── NÅR TRENGER DU RØRLEGGER ── */}
          <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">Nar trenger du rorlegger?</h2>
          <div className="grid sm:grid-cols-2 gap-4 my-6">
            <div className="bg-bg-card border border-surface-border rounded-xl p-5">
              <p className="font-display font-bold text-accent-yellow mb-3">Ma ha fagfolk (lovpalagt)</p>
              <div className="space-y-2">
                {["Ny eller flyttet vask/servant","Nytt bad eller kjokken","Bytte/flytte toalett","Nytt sluk eller avlop","Tilkoble vaskmaskin/oppvaskmaskin","Ny varmtvannsbereder","Vannbaren varme","Alle lekkasjer i ror/avlop"].map(t => (
                  <div key={t} className="flex gap-2 text-sm text-text-secondary"><IconCheck size={14} className="flex-shrink-0 text-accent-yellow mt-0.5" /><span>{t}</span></div>
                ))}
              </div>
            </div>
            <div className="bg-bg-card border border-surface-border rounded-xl p-5">
              <p className="font-display font-bold text-text-primary mb-3">Kan gjore selv</p>
              <div className="space-y-2">
                {["Bytte pakninger i kran","Apen stoppekran/avstengningsventil","Bytte dusjhode/dusslange","Rense sluk (har pa overflaten)","Bruke stoppekran ved akutt lekkasje","Bytte sete pa toalett"].map(t => (
                  <div key={t} className="flex gap-2 text-sm text-text-secondary"><IconCheck size={14} className="flex-shrink-0 text-text-tertiary mt-0.5" /><span>{t}</span></div>
                ))}
              </div>
            </div>
          </div>

          {/* ── SJEKKLISTE + RØDE FLAGG ── */}
          <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">Slik velger du riktig rorlegger</h2>
          <div className="bg-bg-card border border-surface-border rounded-2xl p-6 my-6">
            <p className="font-display font-bold text-text-primary mb-3">Sjekkliste for du bestiller:</p>
            <div className="space-y-2 mb-6">
              {[
                "Sjekk at firmaet har sentral godkjenning for rorleggerarbeid",
                "Be om skriftlig tilbud med detaljert spesifikasjon",
                "Avklar om materialer (ror, koblinger, sanitaer) er inkludert",
                "Sjekk forsikring og garantivilkar",
                "Be om referanser fra lignende prosjekter",
                "Avtal hva som skjer ved uforutsette funn (f.eks. ratten ror bak vegg)",
              ].map(t => (
                <div key={t} className="flex gap-2 text-sm text-text-secondary"><IconCheck size={14} className="flex-shrink-0 text-accent-yellow mt-0.5" /><span>{t}</span></div>
              ))}
            </div>
            <div className="border-t border-surface-border pt-4">
              <p className="font-display font-bold text-red-400 mb-3">Rode flagg:</p>
              <div className="space-y-2">
                {[
                  "Ingen skriftlig tilbud eller kontrakt",
                  "Krever stor forskuddsbetaling",
                  "Kan ikke dokumentere godkjenning/sertifisering",
                  "Vil gjore arbeid uten a stenge av vannet forst",
                  "Pris som er 40%+ under alle andre",
                  "Vil ikke komme tilbake for a fikse mangler",
                ].map(t => (
                  <div key={t} className="flex gap-2 text-sm text-text-secondary"><span className="flex-shrink-0 text-red-400 mt-0.5 text-xs">✕</span><span>{t}</span></div>
                ))}
              </div>
            </div>
          </div>

          {/* ── VANLIGE FEIL ── */}
          <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">5 vanlige feil folk gjor med rorleggeren</h2>
          <div className="space-y-4 my-6">
            {[
              { t: "Flytter ror uten grunn", d: "A flytte ror koster 20 000-50 000 kr ekstra. Behold toalett, servant og dusj pa samme plass hvis mulig — det sparer enormt." },
              { t: "Kjoper sanitaer uten a malepp", d: "Feil storrelse pa tilkoblinger koster ekstra besok. La rorleggeren spesifisere hva som trengs, eller mal noyaktig for du handler." },
              { t: "Glemmer stoppekraner", d: "Individuelle stoppekraner pa hvert tappepunkt koster lite ekstra, men gjor fremtidige reparasjoner mye enklere og billigere." },
              { t: "Venter med a fikse smalekkasjer", d: "En liten lekkasje kan fore til fuktskade pa 100 000-500 000 kr. Rorlegger pa 5 000 kr er alltid billigere enn fuktskade." },
              { t: "Velger billigste blandebatteri", d: "Billige blandebatterier lekker etter 2-3 ar. Et kvalitetsbatteri (Oras, Grohe, Hansgrohe) varer 15-20 ar og sparer deg for gjentatte rorleggerbesok." },
            ].map((item, i) => (
              <div key={i} className="bg-bg-card border border-surface-border rounded-xl p-5">
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-7 h-7 rounded-lg bg-accent-yellow/10 border border-accent-yellow/20 text-accent-yellow text-xs font-display font-bold flex items-center justify-center">{i+1}</span>
                  <h3 className="font-display font-bold text-text-primary">{item.t}</h3>
                </div>
                <p className="text-sm text-text-secondary ml-10">{item.d}</p>
              </div>
            ))}
          </div>

          {/* ── SESONG ── */}
          <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">Sesong og ventetid</h2>
          <div className="bg-bg-card border border-surface-border rounded-xl p-6 my-6">
            <div className="space-y-3 text-sm">
              <div className="flex justify-between"><span className="text-text-secondary">Januar–mars</span><span className="text-text-primary">Rolig, god tilgjengelighet, laveste priser</span></div>
              <div className="flex justify-between"><span className="text-text-secondary">April–juni</span><span className="text-accent-amber">Okt ettersporsel, 1-2 ukers ventetid</span></div>
              <div className="flex justify-between"><span className="text-text-secondary">Juli</span><span className="text-text-primary">Mange har ferie, begrenset kapasitet</span></div>
              <div className="flex justify-between"><span className="text-text-secondary">August–november</span><span className="text-red-400">Hoyest ettersporsel, 2-4 ukers ventetid</span></div>
              <div className="flex justify-between"><span className="text-text-secondary">Desember</span><span className="text-text-primary">Roligere, mange tar juleferie</span></div>
            </div>
            <p className="text-xs text-text-tertiary mt-4">Akutt rorlegger er tilgjengelig hele aret med nodtillegg. Planlagte jobber bor bestilles 2-4 uker i forveien i hoysesong.</p>
          </div>

          {/* ── REGIONALE PRISER ── */}
          <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">Regionale prisforskjeller</h2>
          <div className="bg-bg-card border border-surface-border rounded-xl overflow-hidden my-6">
            <table className="w-full text-sm">
              <thead><tr className="text-left text-xs text-text-muted uppercase tracking-wider border-b border-surface-border"><th className="px-5 py-3">Region</th><th className="px-5 py-3">Timepris</th><th className="px-5 py-3">vs snitt</th></tr></thead>
              <tbody className="divide-y divide-surface-border">
                {[
                  ["Oslo og Akershus", "850–1 100 kr", "+15%", "text-accent-yellow"],
                  ["Stavanger", "800–1 050 kr", "+10%", "text-accent-amber"],
                  ["Bergen", "800–1 000 kr", "+8%", "text-accent-amber"],
                  ["Trondheim", "750–950 kr", "+5%", "text-text-secondary"],
                  ["Tromso", "750–1 000 kr", "+5%", "text-text-secondary"],
                  ["Kristiansand", "700–900 kr", "Snitt", "text-text-tertiary"],
                  ["Distriktene", "650–850 kr", "-10%", "text-text-tertiary"],
                ].map(([r, p, v, c]) => (
                  <tr key={r}><td className="px-5 py-3 text-text-primary font-medium">{r}</td><td className="px-5 py-3 font-mono text-text-secondary">{p}</td><td className={`px-5 py-3 font-mono font-semibold ${c}`}>{v}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* ── SPARETIPS ── */}
          <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">Slik sparer du penger pa rorlegger</h2>
          <div className="space-y-3 text-text-secondary mb-6">
            <p><strong className="text-text-primary">Behold rorplassering.</strong> A flytte ror koster 20 000-50 000 kr ekstra. Behold toalett, servant og dusj pa eksisterende plass sa langt det gar.</p>
            <p><strong className="text-text-primary">Riv badet selv.</strong> Spar 15 000-30 000 kr ved a rive gammelt bad, fjerne fliser og kjore avfall. Steng av vann og strom forst.</p>
            <p><strong className="text-text-primary">Kjop sanitaer selv.</strong> Du kan spare 20-40% pa toalett, servant og blandebatteri ved a handle direkte. Avklar tilkoblingsmilene med rorlegger forst.</p>
            <p><strong className="text-text-primary">Samle alt i en bestilling.</strong> Oppstart pa 500-1 500 kr betaler du bare en gang. Gjor bad, kjokken og vaskrom samtidig.</p>
            <p><strong className="text-text-primary">Planlegg rorlegging ved oppussing.</strong> Nar veggene allerede er apne er rorarbeid mye billigere. Ettermontering i ferdig vegg kan koste dobbelt.</p>
            <p><strong className="text-text-primary">Bestill i rolig sesong.</strong> Januar-mars gir kortere ventetid og ofte bedre priser enn hosten.</p>
          </div>

          {/* ── RELATERTE SIDER ── */}
          <div className="mt-10 mb-6">
            <h2 className="font-display font-bold text-xl text-text-primary mb-4">Relaterte prosjekter</h2>
            <div className="flex flex-wrap gap-3">
              {[
                { href: "/bad", label: "Bad" },
                { href: "/kjokken", label: "Kjokken" },
                { href: "/elektriker", label: "Elektriker" },
                { href: "/varmepumpe", label: "Varmepumpe" },
                { href: "/drenering", label: "Drenering" },
                { href: "/oppussing", label: "Oppussing" },
              ].map(l => (
                <Link key={l.href} href={l.href} className="px-4 py-2 bg-bg-card border border-surface-border rounded-xl text-sm text-text-secondary hover:text-accent-yellow hover:border-accent-yellow/30 transition-all">{l.label}</Link>
              ))}
              <Link href="/kalkulator" className="px-4 py-2 bg-accent-yellow/10 border border-accent-yellow/20 rounded-xl text-sm text-accent-yellow font-semibold hover:bg-accent-yellow/20 transition-all flex items-center gap-1">
                <IconCalculator size={14} /> Bruk kalkulator
              </Link>
            </div>
          </div>
        </FadeInUp>
      </article>
    </main>
  );
}
