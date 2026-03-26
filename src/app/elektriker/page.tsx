import { Metadata } from "next";
import Link from "next/link";
import { FadeInUp } from "@/components/ui/animations";
import { IconCalculator, IconCheck } from "@/components/icons";
import { FAQSchema, BreadcrumbSchema, ArticleSchema } from "@/components/seo/JsonLd";

const faq = [
  { question: "Hva koster en elektriker per time?", answer: "Timepris for elektriker er typisk 600–900 kr inkl. mva. I Oslo: 750–950 kr. I distriktene: 500–700 kr. Oppstartsgebyr på 500–1 500 kr kommer i tillegg. Timeprisen varierer med kompleksitet og hasteoppdrag." },
  { question: "Hva koster elektriker på bad?", answer: "Komplett elektrikerarbeid på bad koster typisk 15 000–35 000 kr. Inkluderer nye kurser, gulvvarme (5 000–10 000 kr), spots, ventilasjon og jordfeilvern. Om det elektriske anlegget må oppgraderes, kan det koste mer." },
  { question: "Hva koster ny sikringstavle?", answer: "Ny sikringstavle koster 15 000–40 000 kr installert. Prisen avhenger av antall kurser og om hovedinntak må oppgraderes. Anbefales sterkt i boliger med gamle skrusikringer — disse er brannfarlige." },
  { question: "Hva koster det å trekke nytt elektrisk anlegg?", answer: "Komplett nytt anlegg: leilighet 60 m²: 50 000–120 000 kr. Hus 150 m²: 100 000–250 000 kr. Inkluderer ny tavle, kurser, uttak, belysning og jordfeilvern. Ofte nødvendig i boliger bygget før 1980." },
  { question: "Hva koster det å sette inn stikkontakt?", answer: "Ny stikkontakt koster 2 000–5 000 kr inkl. arbeid. Pris avhenger av om det trengs ny kurs eller bare forlengelse. Oppstartsgebyr gjør at det lønner seg å samle flere småjobber i én bestilling." },
  { question: "Hva koster elbil-lader installasjon?", answer: "Elbil-lader hjemme koster 10 000–25 000 kr ferdig installert. Enkel lading fra dedikert kurs: 3 000–5 000 kr. I borettslag med felles løsning kan prisen per enhet være lavere. Krever alltid autorisert elektriker." },
  { question: "Kan man gjøre elektrisk arbeid selv?", answer: "Nei. I Norge er alt elektrisk installasjonsarbeid lovpålagt utført av autorisert installasjonsvirksomhet. Du kan bytte pærer, sikringer og dekklokk. Alt med ledninger, uttak eller kurser krever fagfolk. Ulovlig arbeid gir brannfare og forsikringsproblemer." },
  { question: "Hva er dyrest av elektriker og rørlegger?", answer: "Rørlegger er normalt dyrere: 700–1 100 kr/time vs 600–900 kr/time. På et bad koster rørlegger 40 000–80 000 kr mens elektriker koster 15 000–35 000 kr. Rørleggerarbeid er mer omfattende og har høyere risiko (vannskader)." },
  { question: "Hva koster gulvvarme?", answer: "Elektrisk gulvvarme: 500–1 200 kr per m² inkl. materialer og installasjon. Bad 6 m²: 5 000–10 000 kr. Stue 20 m²: 12 000–25 000 kr. Elektriker kobler til termostaten, gulvlegger kan legge selve kablene." },
  { question: "Hva skal ha egen kurs?", answer: "Disse må ha egen kurs: komfyr/stekeovn (32A), oppvaskmaskin, vaskemaskin, tørketrommel, varmtvannsbereder, elbil-lader og varmepumpe. Bad og utendørs bør ha egne kurser med jordfeilvern." },
  { question: "Når bør man oppgradere det elektriske anlegget?", answer: "Når du har: skrusikringer (brannfare), for få kurser (sikringer som stadig ryker), synlige skader på ledninger, bolig bygget før 1970 uten oppgradering, eller planlegger oppussing av bad/kjøkken." },
  { question: "Hva koster det å installere spot/downlights?", answer: "Spotlights koster 1 500–3 000 kr per punkt installert. For en stue med 8 spots: 12 000–24 000 kr. Inkluderer hull i himling, ledninger, spots og bryter. Dimbare spots koster noe mer." },
];

export const metadata: Metadata = {
  title: "Hva koster elektriker? Timepriser og komplett prisguide 2026",
  description: "Elektriker koster 600–900 kr/time. Se priser for nytt anlegg, bad, sikringstavle, elbil-lader, gulvvarme og stikkontakter. Komplett guide med regneksempel.",
  alternates: { canonical: "https://byggepris.no/elektriker" },
  openGraph: { title: "Hva koster elektriker?", description: "Timepris 600–900 kr. Komplett prisguide.", url: "https://byggepris.no/elektriker", type: "article" },
};

export default function Page() {
  return (
    <main className="pt-20">
      <BreadcrumbSchema items={[{ name: "Hjem", href: "/" }, { name: "Elektriker", href: "/elektriker" }]} />
      <ArticleSchema title="Hva koster elektriker?" description="Komplett prisguide for elektrikerarbeid i Norge." slug="elektriker" />
      <FAQSchema items={faq} />
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <FadeInUp>
          <nav className="text-sm text-text-muted mb-6"><Link href="/" className="hover:text-accent-yellow">Hjem</Link> / <span className="text-text-secondary">Elektriker</span></nav>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent-yellow/20 bg-accent-yellow/5 mb-4">
            <span className="text-accent-yellow text-xs font-semibold">OPPDATERT 2026</span>
          </div>
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-text-primary mb-4">Hva koster elektriker?</h1>
          <p className="text-lg text-text-secondary mb-8">En elektriker koster typisk <strong className="text-text-primary">600–900 kr per time</strong> inkl. mva i Norge. For vanlige jobber som nytt bad betaler du 15 000–35 000 kr, ny sikringstavle 15 000–40 000 kr, og komplett nytt anlegg 80 000–250 000 kr.</p>

          {/* Prisbarometer */}
          <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">Prisbarometer — er tilbudet ditt rimelig?</h2>
          <div className="bg-bg-card border border-surface-border rounded-2xl p-6 my-6">
            <div className="flex items-stretch gap-0 rounded-xl overflow-hidden mb-4">
              <div className="flex-1 bg-emerald-500/10 py-3 px-4 text-center border-r border-surface-border"><p className="text-xs text-text-muted mb-1">Billig</p><p className="font-mono font-bold text-sm text-emerald-400">Under 600 kr</p></div>
              <div className="flex-1 bg-accent-yellow/10 py-3 px-4 text-center border-r border-surface-border"><p className="text-xs text-text-muted mb-1">Normal</p><p className="font-mono font-bold text-sm text-accent-yellow">600–800 kr</p></div>
              <div className="flex-1 bg-red-500/10 py-3 px-4 text-center"><p className="text-xs text-text-muted mb-1">Dyrt</p><p className="font-mono font-bold text-sm text-red-400">Over 800 kr</p></div>
            </div>
            <p className="text-xs text-text-tertiary">Timepriser inkl. mva. Oslo og storbyene ligger i øvre sjikt. Distriktene i nedre. Hasteoppdrag og helg/kveld koster 30–50 % mer.</p>
          </div>

          {/* Pristabell */}
          <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">Komplett pristabell for elektrikerarbeid</h2>
          <div className="bg-bg-card border border-surface-border rounded-2xl overflow-hidden my-6">
            <table className="w-full text-sm"><thead><tr className="text-left text-xs text-text-muted uppercase tracking-wider border-b border-surface-border"><th className="px-5 py-3">Jobb</th><th className="px-5 py-3">Typisk pris</th></tr></thead>
              <tbody className="divide-y divide-surface-border">
                {[
                  ["Oppstartsgebyr / utkjøring", "500–1 500 kr"],
                  ["Ny stikkontakt", "2 000–5 000 kr"],
                  ["Ny lysbryter", "1 500–3 500 kr"],
                  ["Installere spot/downlight (per stk)", "1 500–3 000 kr"],
                  ["Ny kurs fra tavle", "3 000–6 000 kr"],
                  ["Elektriker på bad (komplett)", "15 000–35 000 kr"],
                  ["Varmekabler bad (6 m²)", "5 000–10 000 kr"],
                  ["Varmekabler stue (20 m²)", "12 000–25 000 kr"],
                  ["Ny sikringstavle", "15 000–40 000 kr"],
                  ["Elbil-lader installasjon", "10 000–25 000 kr"],
                  ["Nytt anlegg leilighet (60 m²)", "50 000–120 000 kr"],
                  ["Nytt anlegg hus (150 m²)", "100 000–250 000 kr"],
                  ["Smarthus-oppsett (basis)", "15 000–40 000 kr"],
                  ["El-sjekk / tilstandsrapport", "3 000–6 000 kr"],
                ].map(([j, p]) => (
                  <tr key={j} className="hover:bg-bg-tertiary/30 transition-colors"><td className="px-5 py-3 text-text-primary font-medium">{j}</td><td className="px-5 py-3 font-mono text-accent-yellow">{p}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Regneksempel */}
          <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">Regneksempel: Elektriker på bad 6 m² i Oslo</h2>
          <div className="bg-bg-card border border-surface-border rounded-2xl p-6 my-6">
            <div className="space-y-3 text-sm">
              {[["Oppstartsgebyr","1 200 kr"],["Ny kurs til bad fra tavle","4 500 kr"],["Jordfeilvern (1 stk)","2 200 kr"],["Varmekabler i gulv (6 m²)","7 500 kr"],["Termostat gulvvarme","2 500 kr"],["4 stk downlights + dimmer","8 000 kr"],["Ventilator/avtrekk","3 500 kr"],["Stikkontakt (1 stk)","2 000 kr"]].map(([k,v])=>(
                <div key={k} className="flex justify-between"><span className="text-text-secondary">{k}</span><span className="font-mono text-text-primary">{v}</span></div>
              ))}
              <div className="flex justify-between border-t border-surface-border pt-3 mt-3"><span className="text-text-primary font-semibold">Totalt elektrikerarbeid</span><span className="font-mono text-accent-yellow font-semibold">31 400 kr</span></div>
            </div>
            <p className="text-xs text-text-tertiary mt-4">Realistisk eksempel for Oslo-området med normal standard. Inkluderer materialer og arbeid. Din pris kan avvike basert på eksisterende anlegg og spesifikke ønsker.</p>
          </div>

          {/* Når trenger du */}
          <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">Når trenger du elektriker?</h2>
          <div className="grid sm:grid-cols-2 gap-4 my-6">
            <div className="bg-bg-card border border-surface-border rounded-xl p-5">
              <p className="font-display font-bold text-accent-yellow mb-3">Må ha fagfolk (lovpålagt)</p>
              <div className="space-y-2">{["Ny stikkontakt eller lysbryter","Ny kurs eller sikringstavle","Gulvvarme (tilkobling)","Elbil-lader","Alt arbeid med ledninger","Bad/våtrom (alle installasjoner)","Nytt anlegg eller oppgradering"].map(t=>(<div key={t} className="flex gap-2 text-sm text-text-secondary"><IconCheck size={14} className="flex-shrink-0 text-accent-yellow mt-0.5"/><span>{t}</span></div>))}</div>
            </div>
            <div className="bg-bg-card border border-surface-border rounded-xl p-5">
              <p className="font-display font-bold text-text-primary mb-3">Kan gjøre selv</p>
              <div className="space-y-2">{["Bytte pærer og lysrør","Bytte sikring (automatsikring)","Bytte dekklokk på bryter/uttak","Koble til lamper i eksisterende uttak","Bytte batterier i røykvarslere","Resette jordfeilvern"].map(t=>(<div key={t} className="flex gap-2 text-sm text-text-secondary"><IconCheck size={14} className="flex-shrink-0 text-text-tertiary mt-0.5"/><span>{t}</span></div>))}</div>
            </div>
          </div>

          {/* Sjekkliste + røde flagg */}
          <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">Slik velger du riktig elektriker</h2>
          <div className="bg-bg-card border border-surface-border rounded-2xl p-6 my-6">
            <p className="font-display font-bold text-text-primary mb-3">Sjekkliste før du bestiller:</p>
            <div className="space-y-2 mb-6">{["Sjekk at firmaet er registrert i Elvirksomhetsregisteret (DSB)","Be om skriftlig tilbud med spesifisert jobb og totalpris","Sjekk at de har gyldig forsikring (ansvarsforsikring)","Spør etter referanser fra lignende jobber","Avklar hva som er inkludert: materialer, opprydding, samsvarserklæring","Be om samsvarserklæring etter utført arbeid (lovpålagt)"].map(t=>(<div key={t} className="flex gap-2 text-sm text-text-secondary"><IconCheck size={14} className="flex-shrink-0 text-accent-yellow mt-0.5"/><span>{t}</span></div>))}</div>
            <div className="border-t border-surface-border pt-4">
              <p className="font-display font-bold text-red-400 mb-3">Røde flagg — ikke bruk denne elektrikeren:</p>
              <div className="space-y-2">{["Vil ikke gi skriftlig tilbud eller kontrakt","Krever kontant betaling uten kvittering","Kan ikke vise registrering i Elvirksomhetsregisteret","Vil ikke utstede samsvarserklæring","Gir pris som er 40 %+ under alle andre tilbud","Har ikke synlig firmabil eller uniform"].map(t=>(<div key={t} className="flex gap-2 text-sm text-text-secondary"><span className="flex-shrink-0 text-red-400 mt-0.5 text-xs">✕</span><span>{t}</span></div>))}</div>
            </div>
          </div>

          {/* Vanlige feil */}
          <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">5 vanlige feil folk gjør med elektrikeren</h2>
          <div className="space-y-4 my-6">
            {[
              {t:"Bestiller én og én jobb",d:"Oppstartsgebyr på 500–1 500 kr hver gang. Samle alt i én bestilling og spar 2 000–5 000 kr."},
              {t:"Velger billigste tilbud blindt",d:"Billigst er sjelden best. Sjekk hva som er inkludert, og om materialkvaliteten er god nok."},
              {t:"Glemmer å be om samsvarserklæring",d:"Uten samsvarserklæring får du problemer ved salg av bolig og med forsikring. Krev den alltid."},
              {t:"Utsetter sikringstavle-oppgradering",d:"Gamle skrusikringer er brannfarlige. 25 % av boligbranner skyldes elektriske feil."},
              {t:"Lar ufaglært gjøre jobben",d:"Ulovlig arbeid gir ingen garanti, ingen forsikring og kan være livsfarlig. Aldri verdt risikoen."},
            ].map((item,i)=>(<div key={i} className="bg-bg-card border border-surface-border rounded-xl p-5"><div className="flex items-center gap-3 mb-2"><span className="w-7 h-7 rounded-lg bg-accent-yellow/10 border border-accent-yellow/20 text-accent-yellow text-xs font-display font-bold flex items-center justify-center">{i+1}</span><h3 className="font-display font-bold text-text-primary">{item.t}</h3></div><p className="text-sm text-text-secondary ml-10">{item.d}</p></div>))}
          </div>

          {/* Sesong */}
          <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">Sesong og ventetid</h2>
          <div className="bg-bg-card border border-surface-border rounded-xl p-6 my-6">
            <div className="space-y-3 text-sm">
              {[["Januar–mars","Rolig periode, kort ventetid, gode priser","text-text-primary"],["April–juni","Økt etterspørsel, 1–3 ukers ventetid","text-accent-amber"],["Juli–august","Ferie, varierende tilgjengelighet","text-text-primary"],["September–november","Høyest etterspørsel, 2–4 ukers ventetid","text-red-400"],["Desember","Rolig, men mange tar juleferie","text-text-primary"]].map(([m,d,c])=>(<div key={m} className="flex justify-between"><span className="text-text-secondary">{m}</span><span className={c}>{d}</span></div>))}
            </div>
            <p className="text-xs text-text-tertiary mt-4">Tips: Bestill i januar–mars for best pris og raskest respons. Unngå høst-rushet (sept–nov).</p>
          </div>

          {/* Regionale priser */}
          <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">Regionale prisforskjeller</h2>
          <div className="bg-bg-card border border-surface-border rounded-xl overflow-hidden my-6">
            <table className="w-full text-sm"><thead><tr className="text-left text-xs text-text-muted uppercase tracking-wider border-b border-surface-border"><th className="px-5 py-3">Region</th><th className="px-5 py-3">Timepris</th><th className="px-5 py-3">vs snitt</th></tr></thead>
              <tbody className="divide-y divide-surface-border">
                {[["Oslo og Akershus","750–950 kr","+15 %","text-accent-yellow"],["Bergen","700–850 kr","+8 %","text-accent-amber"],["Stavanger","700–900 kr","+10 %","text-accent-amber"],["Trondheim","650–800 kr","+5 %","text-text-secondary"],["Tromsø","650–850 kr","+5 %","text-text-secondary"],["Kristiansand","600–750 kr","Snitt","text-text-tertiary"],["Distriktene","500–700 kr","−10 %","text-text-tertiary"]].map(([r,p,v,c])=>(
                  <tr key={r}><td className="px-5 py-3 text-text-primary font-medium">{r}</td><td className="px-5 py-3 font-mono text-text-secondary">{p}</td><td className={`px-5 py-3 font-mono font-semibold ${c}`}>{v}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Sparetips */}
          <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">Slik sparer du penger på elektriker</h2>
          <div className="space-y-3 text-text-secondary mb-6">
            <p><strong className="text-text-primary">Samle jobber i én bestilling.</strong> Oppstartsgebyr på 500–1 500 kr betaler du kun én gang. Tre småjobber hver for seg: 4 500 kr i oppstart. Samlet: 1 500 kr.</p>
            <p><strong className="text-text-primary">Bestill i rolig sesong.</strong> Januar–mars har kortest ventetid og lavest priser. Unngå høst-rushet (sept–nov).</p>
            <p><strong className="text-text-primary">Forbered før elektrikeren kommer.</strong> Flytt møbler fra vegger, gi fri tilgang til sikringstavle, rydd der det skal jobbes. Elektrikerens tid er dyr — ikke betal for rydding.</p>
            <p><strong className="text-text-primary">Innhent 3 tilbud.</strong> Prisforskjellen kan være 20–30 % for samme jobb. Sammenlign hva som er inkludert, ikke bare totalsummen.</p>
            <p><strong className="text-text-primary">Kjøp belysning selv.</strong> Du kan spare 20–40 % ved å kjøpe spots, lamper og brytere direkte. Avklar med elektrikeren først.</p>
            <p><strong className="text-text-primary">Planlegg elektro ved oppussing.</strong> Hvis du allerede pusser opp, er det billigst å legge inn ny elektro når veggene er åpne. Ettermontert koster 2–3× mer.</p>
          </div>

          {/* Relaterte */}
          <div className="mt-10 mb-6">
            <h2 className="font-display font-bold text-xl text-text-primary mb-4">Relaterte prosjekter</h2>
            <div className="flex flex-wrap gap-3">
              {[{href:"/bad",label:"Bad"},{href:"/kjokken",label:"Kjøkken"},{href:"/rorlegger",label:"Rørlegger"},{href:"/varmepumpe",label:"Varmepumpe"},{href:"/oppussing",label:"Oppussing"},{href:"/bygge-hus",label:"Bygge hus"}].map(l=>(
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
