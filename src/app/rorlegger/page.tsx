import { Metadata } from "next";
import Link from "next/link";
import { FadeInUp } from "@/components/ui/animations";
import { IconCalculator, IconCheck } from "@/components/icons";
import { FAQSchema, BreadcrumbSchema, ArticleSchema } from "@/components/seo/JsonLd";

const faq = [
  { question: "Hva koster en rørlegger per time?", answer: "Timepris for rørlegger er typisk 700–1 100 kr inkl. mva. Oslo: 850–1 100 kr. Distriktene: 650–900 kr. Rørlegger er den dyreste håndverkeren fordi arbeidet krever sertifisering og har høy risiko (vannskader)." },
  { question: "Hva koster rørlegger på nytt bad?", answer: "Komplett rørleggerarbeid på bad koster 40 000–80 000 kr. Inkluderer nye rør, sluk, tilkobling av toalett, servant og dusj. Hvis rør må omlegges (flyttes) koster det 20 000–40 000 kr ekstra." },
  { question: "Hva koster det å bytte rør i huset?", answer: "Nye vannrør hele huset: 60 000–150 000 kr. Nye avløpsrør: 80 000–200 000 kr. Totalt for all rørlegging: 150 000–350 000 kr. Anbefales for boliger med gamle galvaniserte rør eller kobberrør fra før 1970." },
  { question: "Hva koster det å flytte vasken?", answer: "Flytte kjøkkenvask: 8 000–20 000 kr. Kort flytt (under 1 m): 8 000–12 000 kr. Lengre flytt: 12 000–25 000 kr pga. ny rørføring og avløpstilkobling. Flytte baderomsservant: 5 000–15 000 kr." },
  { question: "Hva koster varmtvannsbereder?", answer: "Ny bereder inkl. installasjon: 13 000–30 000 kr. Beholderen: 8 000–20 000 kr. Installasjon: 5 000–10 000 kr. 120–200 liter er vanligst. Varmepumpebereder koster mer (25 000–45 000 kr) men bruker 60–70 % mindre strøm." },
  { question: "Hva koster det å installere varmepumpe?", answer: "Luft-til-luft: 15 000–30 000 kr. Luft-til-vann (krever rørlegger): 80 000–150 000 kr. Bergvarme: 150 000–300 000 kr. Rørlegger er nødvendig for vannbaserte systemer." },
  { question: "Kan man gjøre rørleggerarbeid selv?", answer: "Nei. Alt arbeid med vannrør, avløp og sluk krever autorisert rørleggerfirma. Du kan ikke koble til eller endre røropplegget selv. Uautorisert arbeid kan føre til vannskader og problemer med forsikring." },
  { question: "Hva koster vannbåren varme?", answer: "Vannbåren gulvvarme: 800–1 500 kr per m² installert. For hus på 120 m²: 96 000–180 000 kr. Krever varmekilde i tillegg (varmepumpe). Gir jevn og behagelig varme med lave driftskostnader." },
  { question: "Hva koster det å skifte sluk?", answer: "Skifte sluk: 5 000–15 000 kr. Enkel utskifting av slukrist: 1 000–3 000 kr. Nytt sluk med omlegging av avløp: 10 000–20 000 kr. Sluk bør alltid skiftes ved baderomsrenovering." },
  { question: "Hva koster akutt rørlegger?", answer: "Akutt/nødutrykning koster 2 000–5 000 kr i oppstartsgebyr, pluss timepris med 30–50 % påslag. Kveld/helg: 50–100 % tillegg. En vannlekkasje kan koste 200 000+ kr i skade — så akutt-prisen er billig i sammenligning." },
  { question: "Hva koster det å installere oppvaskmaskin?", answer: "Tilkobling til eksisterende opplegg: 3 000–6 000 kr. Ny tilkobling med rørføring: 5 000–12 000 kr. Inkluderer vanntilkobling, avløp og stoppekran." },
  { question: "Når bør man bytte vannrør?", answer: "Når du har: galvaniserte rør (grå, magnetiske), synlig korrosjon eller rust, lavt vanntrykk, misfarget vann, lekkasjer, eller rør eldre enn 40–50 år. Kobberrør varer lenger men bør sjekkes etter 50+ år." },
];

export const metadata: Metadata = {
  title: "Hva koster rørlegger? Timepriser og komplett prisguide 2026",
  description: "Rørlegger koster 700–1 100 kr/time. Se priser for bad, kjøkken, varmtvannsbereder, vannrør og akutt rørlegger. Komplett guide med regneksempel.",
  alternates: { canonical: "https://byggepris.no/rorlegger" },
  openGraph: { title: "Hva koster rørlegger?", description: "Timepris 700–1 100 kr. Komplett prisguide.", url: "https://byggepris.no/rorlegger", type: "article" },
};

export default function Page() {
  return (
    <main className="pt-20">
      <BreadcrumbSchema items={[{ name: "Hjem", href: "/" }, { name: "Rørlegger", href: "/rorlegger" }]} />
      <ArticleSchema title="Hva koster rørlegger?" description="Komplett prisguide for rørleggerarbeid i Norge." slug="rorlegger" />
      <FAQSchema items={faq} />
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <FadeInUp>
          <nav className="text-sm text-text-muted mb-6"><Link href="/" className="hover:text-accent-yellow">Hjem</Link> / <span className="text-text-secondary">Rørlegger</span></nav>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent-yellow/20 bg-accent-yellow/5 mb-4"><span className="text-accent-yellow text-xs font-semibold">OPPDATERT 2026</span></div>
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-text-primary mb-4">Hva koster rørlegger?</h1>
          <p className="text-lg text-text-secondary mb-8">En rørlegger koster typisk <strong className="text-text-primary">700–1 100 kr per time</strong> inkl. mva. Rørlegger er den dyreste håndverkeren fordi arbeidet krever sertifisering og har høy risiko. På et bad koster rørleggerarbeidet alene 40 000–80 000 kr.</p>

          <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">Prisbarometer — er tilbudet ditt rimelig?</h2>
          <div className="bg-bg-card border border-surface-border rounded-2xl p-6 my-6">
            <div className="flex items-stretch gap-0 rounded-xl overflow-hidden mb-4">
              <div className="flex-1 bg-emerald-500/10 py-3 px-4 text-center border-r border-surface-border"><p className="text-xs text-text-muted mb-1">Billig</p><p className="font-mono font-bold text-sm text-emerald-400">Under 700 kr</p></div>
              <div className="flex-1 bg-accent-yellow/10 py-3 px-4 text-center border-r border-surface-border"><p className="text-xs text-text-muted mb-1">Normal</p><p className="font-mono font-bold text-sm text-accent-yellow">700–950 kr</p></div>
              <div className="flex-1 bg-red-500/10 py-3 px-4 text-center"><p className="text-xs text-text-muted mb-1">Dyrt</p><p className="font-mono font-bold text-sm text-red-400">Over 950 kr</p></div>
            </div>
            <p className="text-xs text-text-tertiary">Timepriser inkl. mva. Akutt/nød: +30–50 %. Kveld/helg: +50–100 %. Oslo i øvre sjikt.</p>
          </div>

          <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">Komplett pristabell for rørleggerarbeid</h2>
          <div className="bg-bg-card border border-surface-border rounded-2xl overflow-hidden my-6">
            <table className="w-full text-sm"><thead><tr className="text-left text-xs text-text-muted uppercase tracking-wider border-b border-surface-border"><th className="px-5 py-3">Jobb</th><th className="px-5 py-3">Typisk pris</th></tr></thead>
              <tbody className="divide-y divide-surface-border">
                {[
                  ["Oppstartsgebyr / utkjøring", "500–1 500 kr"],
                  ["Akutt/nødutrykning (tillegg)", "2 000–5 000 kr"],
                  ["Skifte blandebatteri", "2 000–5 000 kr"],
                  ["Tilkoble oppvaskmaskin", "3 000–6 000 kr"],
                  ["Tilkoble vaskemaskin", "2 000–5 000 kr"],
                  ["Skifte sluk", "5 000–15 000 kr"],
                  ["Flytte vask (kjøkken)", "8 000–20 000 kr"],
                  ["Rørlegger på bad (komplett)", "40 000–80 000 kr"],
                  ["Ny varmtvannsbereder installert", "13 000–30 000 kr"],
                  ["Varmepumpebereder installert", "25 000–45 000 kr"],
                  ["Nye vannrør hele huset", "60 000–150 000 kr"],
                  ["Nye avløpsrør hele huset", "80 000–200 000 kr"],
                  ["Vannbåren gulvvarme (per m²)", "800–1 500 kr"],
                  ["Luft-til-vann varmepumpe", "80 000–150 000 kr"],
                ].map(([j,p])=>(<tr key={j} className="hover:bg-bg-tertiary/30 transition-colors"><td className="px-5 py-3 text-text-primary font-medium">{j}</td><td className="px-5 py-3 font-mono text-accent-yellow">{p}</td></tr>))}
              </tbody>
            </table>
          </div>

          <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">Regneksempel: Rørlegger på bad 6 m² i Oslo</h2>
          <div className="bg-bg-card border border-surface-border rounded-2xl p-6 my-6">
            <div className="space-y-3 text-sm">
              {[["Oppstartsgebyr","1 500 kr"],["Riving av gamle rør","4 000 kr"],["Nye vannrør (varm + kald)","12 000 kr"],["Nytt avløp + sluk","8 000 kr"],["Tilkobling toalett","4 500 kr"],["Tilkobling servant + blandebatteri","5 000 kr"],["Tilkobling dusjbatteri + håndtak","4 500 kr"],["Trykktesting og kontroll","2 500 kr"]].map(([k,v])=>(
                <div key={k} className="flex justify-between"><span className="text-text-secondary">{k}</span><span className="font-mono text-text-primary">{v}</span></div>
              ))}
              <div className="flex justify-between border-t border-surface-border pt-3 mt-3"><span className="text-text-primary font-semibold">Totalt rørleggerarbeid</span><span className="font-mono text-accent-yellow font-semibold">42 000 kr</span></div>
            </div>
            <p className="text-xs text-text-tertiary mt-4">Realistisk eksempel for Oslo. Rør beholdes på samme plass. Omlegging av rør (ny plassering) kan legge til 15 000–30 000 kr.</p>
          </div>

          <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">Når trenger du rørlegger?</h2>
          <div className="grid sm:grid-cols-2 gap-4 my-6">
            <div className="bg-bg-card border border-surface-border rounded-xl p-5">
              <p className="font-display font-bold text-accent-yellow mb-3">Må ha fagfolk (lovpålagt)</p>
              <div className="space-y-2">{["Ny eller flyttet vask/servant","Nytt bad eller kjøkken","Bytte/flytte toalett","Nytt sluk eller avløp","Tilkoble vaskemaskin/oppvaskmaskin","Ny varmtvannsbereder","Vannbåren varme","Alle lekkasjer i rør/avløp"].map(t=>(<div key={t} className="flex gap-2 text-sm text-text-secondary"><IconCheck size={14} className="flex-shrink-0 text-accent-yellow mt-0.5"/><span>{t}</span></div>))}</div>
            </div>
            <div className="bg-bg-card border border-surface-border rounded-xl p-5">
              <p className="font-display font-bold text-text-primary mb-3">Kan gjøre selv</p>
              <div className="space-y-2">{["Bytte pakninger i kran","Åpne stoppekran/avstengningsventil","Bytte dusj­hode/dusj­slange","Rense sluk (hår på overflaten)","Bruke stoppekran ved akutt lekkasje","Bytte sete på toalett"].map(t=>(<div key={t} className="flex gap-2 text-sm text-text-secondary"><IconCheck size={14} className="flex-shrink-0 text-text-tertiary mt-0.5"/><span>{t}</span></div>))}</div>
            </div>
          </div>

          <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">Slik velger du riktig rørlegger</h2>
          <div className="bg-bg-card border border-surface-border rounded-2xl p-6 my-6">
            <p className="font-display font-bold text-text-primary mb-3">Sjekkliste før du bestiller:</p>
            <div className="space-y-2 mb-6">{["Sjekk at firmaet har sentral godkjenning for rørleggerarbeid","Be om skriftlig tilbud med detaljert spesifikasjon","Avklar om materialer (rør, koblinger, sanitær) er inkludert","Sjekk forsikring og garantivilkår","Be om referanser fra lignende prosjekter","Avtal hva som skjer ved uforutsette funn (f.eks. råtten rør bak vegg)"].map(t=>(<div key={t} className="flex gap-2 text-sm text-text-secondary"><IconCheck size={14} className="flex-shrink-0 text-accent-yellow mt-0.5"/><span>{t}</span></div>))}</div>
            <div className="border-t border-surface-border pt-4">
              <p className="font-display font-bold text-red-400 mb-3">Røde flagg:</p>
              <div className="space-y-2">{["Ingen skriftlig tilbud eller kontrakt","Krever stor forskuddsbetaling","Kan ikke dokumentere godkjenning/sertifisering","Vil gjøre arbeid uten å stenge av vannet først","Pris som er 40 %+ under alle andre","Vil ikke komme tilbake for å fikse mangler"].map(t=>(<div key={t} className="flex gap-2 text-sm text-text-secondary"><span className="flex-shrink-0 text-red-400 mt-0.5 text-xs">✕</span><span>{t}</span></div>))}</div>
            </div>
          </div>

          <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">5 vanlige feil folk gjør med rørleggeren</h2>
          <div className="space-y-4 my-6">
            {[
              {t:"Flytter rør uten grunn",d:"Å flytte rør koster 20 000–50 000 kr ekstra. Behold toalett, servant og dusj på samme plass hvis mulig — det sparer enormt."},
              {t:"Kjøper sanitær uten å måle opp",d:"Feil størrelse på tilkoblinger koster ekstra besøk. La rørleggeren spesifisere hva som trengs, eller mål nøyaktig før du handler."},
              {t:"Glemmer stoppekraner",d:"Individuelle stoppekraner på hvert tappepunkt koster lite ekstra, men gjør fremtidige reparasjoner mye enklere og billigere."},
              {t:"Venter med å fikse små lekkasjer",d:"En liten lekkasje kan føre til fuktskade på 100 000–500 000 kr. Rørlegger på 5 000 kr er alltid billigere enn fuktskade."},
              {t:"Velger billigste blandebatteri",d:"Billige blandebatterier lekker etter 2–3 år. Et kvalitetsbatteri (Oras, Grohe, Hansgrohe) varer 15–20 år og sparer deg for gjentatte rørleggerbesøk."},
            ].map((item,i)=>(<div key={i} className="bg-bg-card border border-surface-border rounded-xl p-5"><div className="flex items-center gap-3 mb-2"><span className="w-7 h-7 rounded-lg bg-accent-yellow/10 border border-accent-yellow/20 text-accent-yellow text-xs font-display font-bold flex items-center justify-center">{i+1}</span><h3 className="font-display font-bold text-text-primary">{item.t}</h3></div><p className="text-sm text-text-secondary ml-10">{item.d}</p></div>))}
          </div>

          <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">Sesong og ventetid</h2>
          <div className="bg-bg-card border border-surface-border rounded-xl p-6 my-6">
            <div className="space-y-3 text-sm">
              {[["Januar–mars","Rolig, god tilgjengelighet, laveste priser","text-text-primary"],["April–juni","Økt etterspørsel, 1–2 ukers ventetid","text-accent-amber"],["Juli","Mange har ferie, begrenset kapasitet","text-text-primary"],["August–november","Høyest etterspørsel, 2–4 ukers ventetid","text-red-400"],["Desember","Roligere, mange tar juleferie","text-text-primary"]].map(([m,d,c])=>(<div key={m} className="flex justify-between"><span className="text-text-secondary">{m}</span><span className={c}>{d}</span></div>))}
            </div>
            <p className="text-xs text-text-tertiary mt-4">Akutt rørlegger er tilgjengelig hele året med nødtillegg. Planlagte jobber bør bestilles 2–4 uker i forveien i høysesong.</p>
          </div>

          <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">Regionale prisforskjeller</h2>
          <div className="bg-bg-card border border-surface-border rounded-xl overflow-hidden my-6">
            <table className="w-full text-sm"><thead><tr className="text-left text-xs text-text-muted uppercase tracking-wider border-b border-surface-border"><th className="px-5 py-3">Region</th><th className="px-5 py-3">Timepris</th><th className="px-5 py-3">vs snitt</th></tr></thead>
              <tbody className="divide-y divide-surface-border">
                {[["Oslo og Akershus","850–1 100 kr","+15 %","text-accent-yellow"],["Stavanger","800–1 050 kr","+10 %","text-accent-amber"],["Bergen","800–1 000 kr","+8 %","text-accent-amber"],["Trondheim","750–950 kr","+5 %","text-text-secondary"],["Tromsø","750–1 000 kr","+5 %","text-text-secondary"],["Kristiansand","700–900 kr","Snitt","text-text-tertiary"],["Distriktene","650–850 kr","−10 %","text-text-tertiary"]].map(([r,p,v,c])=>(
                  <tr key={r}><td className="px-5 py-3 text-text-primary font-medium">{r}</td><td className="px-5 py-3 font-mono text-text-secondary">{p}</td><td className={`px-5 py-3 font-mono font-semibold ${c}`}>{v}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">Slik sparer du penger på rørlegger</h2>
          <div className="space-y-3 text-text-secondary mb-6">
            <p><strong className="text-text-primary">Behold rørplassering.</strong> Å flytte rør koster 20 000–50 000 kr ekstra. Behold toalett, servant og dusj på eksisterende plass så langt det går.</p>
            <p><strong className="text-text-primary">Riv badet selv.</strong> Spar 15 000–30 000 kr ved å rive gammelt bad, fjerne fliser og kjøre avfall. Steng av vann og strøm først.</p>
            <p><strong className="text-text-primary">Kjøp sanitær selv.</strong> Du kan spare 20–40 % på toalett, servant og blandebatteri ved å handle direkte. Avklar tilkoblingsmålene med rørlegger først.</p>
            <p><strong className="text-text-primary">Samle alt i én bestilling.</strong> Oppstart på 500–1 500 kr betaler du bare én gang. Gjør bad, kjøkken og vaskerom samtidig.</p>
            <p><strong className="text-text-primary">Planlegg rørlegging ved oppussing.</strong> Når veggene allerede er åpne er rørarbeid mye billigere. Ettermontering i ferdig vegg kan koste dobbelt.</p>
            <p><strong className="text-text-primary">Bestill i rolig sesong.</strong> Januar–mars gir kortere ventetid og ofte bedre priser enn høsten.</p>
          </div>

          <div className="mt-10 mb-6">
            <h2 className="font-display font-bold text-xl text-text-primary mb-4">Relaterte prosjekter</h2>
            <div className="flex flex-wrap gap-3">
              {[{href:"/bad",label:"Bad"},{href:"/kjokken",label:"Kjøkken"},{href:"/elektriker",label:"Elektriker"},{href:"/varmepumpe",label:"Varmepumpe"},{href:"/drenering",label:"Drenering"},{href:"/oppussing",label:"Oppussing"}].map(l=>(
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
