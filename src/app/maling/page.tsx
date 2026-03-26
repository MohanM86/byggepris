import { Metadata } from "next";
import Link from "next/link";
import { FadeInUp } from "@/components/ui/animations";
import { IconCalculator, IconCheck } from "@/components/icons";
import { FAQSchema, BreadcrumbSchema, ArticleSchema } from "@/components/seo/JsonLd";

const faq = [
  { question: "Hva koster det å male innvendig?", answer: "Innvendig maling koster 80–200 kr per m² veggflate inkl. arbeid. For en leilighet på 80 m² med ca. 220 m² veggflate betyr det 18 000–44 000 kr. Prisen avhenger av antall strøk, forberedelse og tilstand." },
  { question: "Hva koster maler per time?", answer: "Timepris for maler er 500–700 kr inkl. mva. Oslo: 600–750 kr. Distriktene: 450–600 kr. De fleste malere gir heller pris per m² enn timepris, noe som er mer forutsigbart." },
  { question: "Hva koster det å male hus utvendig?", answer: "Utvendig maling koster 300–600 kr per m² fasadeflate. For et normalt hus med 150–200 m² fasade betyr det 45 000–120 000 kr. Inkluderer høytrykksvask, skraping, grunning og to strøk. Stillas kommer i tillegg." },
  { question: "Kan man male selv?", answer: "Ja, maling er det beste gjør det selv prosjektet. Du sparer 50–70 % av kostnaden. Innvendig maling krever lite erfaring. Utvendig krever stiger eller stillas og mer forberedelse." },
  { question: "Hva koster sparkling?", answer: "Sparkling koster 50–150 kr per m² for arbeid. For en leilighet med 220 m² veggflate blir det 11 000–33 000 kr. Nødvendig for jevnt resultat på eldre vegger med sprekker." },
  { question: "Hva koster tapetsering?", answer: "Tapetsering koster 150–400 kr per m² inkl. materiale og arbeid. Tapet koster 200–800 kr per rull som dekker ca. 5 m². For en stue på 40 m² veggflate betyr det 6 000–16 000 kr." },
  { question: "Hva koster det å male tak?", answer: "Takmaling koster 100–250 kr per m², altså 30–50 % dyrere enn vegger fordi det er vanskeligere å jobbe over hodet. For 80 m² tak betyr det 8 000–20 000 kr." },
  { question: "Hvilken maling er best?", answer: "Premium maling som Jotun Lady, Flügger og Beckers koster mer per liter men dekker bedre og varer lenger. Du sparer på færre strøk. For bad og kjøkken bør du bruke våtromsmaling." },
  { question: "Hvor mange strøk trengs?", answer: "Vanligvis 2 strøk. Ved fargeendring fra mørk til lys trengs 3 strøk eller grunning pluss 2 strøk. På nye gipsplater trengs grunning pluss 2 strøk." },
  { question: "Når bør man male huset utvendig?", answer: "Mal mellom mai og september når det er tørt, over 10 grader og ikke direkte sol. Unngå regnvarsel de neste 24 timene. Nordsiden er best å male når solen står på sørsiden." },
  { question: "Hva koster det å male en leilighet?", answer: "Komplett maling av leilighet på 80 m² med vegger og tak koster 25 000–60 000 kr med maler. Gjør du det selv koster det 5 000–10 000 kr i materialer." },
  { question: "Bør man bruke grunning?", answer: "Ja, alltid på nye flater som gips og tre, flater som aldri er malt, ved fargeendring fra mørk til lys, og på flekker. Grunning koster 30–60 kr per m² og gir vesentlig bedre resultat." },
];

export const metadata: Metadata = {
  title: "Hva koster maling? Priser for maler og maling 2026",
  description: "Innvendig maling koster 80–200 kr/m². Maler 500–700 kr/time. Se priser for sparkling, takmaling, utvendig maling og tapetsering.",
  alternates: { canonical: "https://byggepris.no/maling" },
  openGraph: { title: "Hva koster maling?", description: "Innvendig 80–200 kr/m². Komplett prisguide.", url: "https://byggepris.no/maling", type: "article" },
};

export default function Page() {
  return (
    <main className="pt-20">
      <BreadcrumbSchema items={[{ name: "Hjem", href: "/" }, { name: "Maling", href: "/maling" }]} />
      <ArticleSchema title="Hva koster maling?" description="Komplett prisguide for maling i Norge." slug="maling" />
      <FAQSchema items={faq} />
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <FadeInUp>
          <nav className="text-sm text-text-muted mb-6"><Link href="/" className="hover:text-accent-yellow">Hjem</Link> / <span className="text-text-secondary">Maling</span></nav>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent-yellow/20 bg-accent-yellow/5 mb-4"><span className="text-accent-yellow text-xs font-semibold">OPPDATERT 2026</span></div>
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-text-primary mb-4">Hva koster maling?</h1>
          <p className="text-lg text-text-secondary mb-8">Innvendig maling koster typisk <strong className="text-text-primary">80–200 kr per m² veggflate</strong> inkl. arbeid. Maler tar 500–700 kr per time. Maling er oppussingstiltaket som gir mest visuell effekt for minst penger, og er det enkleste å gjøre selv.</p>

          {/* PRISBAROMETER */}
          <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">Prisbarometer</h2>
          <div className="bg-bg-card border border-surface-border rounded-2xl p-6 my-6">
            <p className="text-xs text-text-muted mb-3 uppercase tracking-wider font-semibold">Innvendig maling per m² veggflate</p>
            <div className="flex items-stretch gap-0 rounded-xl overflow-hidden mb-4">
              <div className="flex-1 bg-emerald-500/10 py-3 px-4 text-center border-r border-surface-border"><p className="text-xs text-text-muted mb-1">Billig</p><p className="font-mono font-bold text-sm text-emerald-400">Under 100 kr</p></div>
              <div className="flex-1 bg-accent-yellow/10 py-3 px-4 text-center border-r border-surface-border"><p className="text-xs text-text-muted mb-1">Normal</p><p className="font-mono font-bold text-sm text-accent-yellow">100–160 kr</p></div>
              <div className="flex-1 bg-red-500/10 py-3 px-4 text-center"><p className="text-xs text-text-muted mb-1">Dyrt</p><p className="font-mono font-bold text-sm text-red-400">Over 160 kr</p></div>
            </div>
            <p className="text-xs text-text-tertiary">Inkl. mva og materialer. Oslo og storbyene ligger i øvre sjikt. Prisen øker med dårlig tilstand på veggene og høy standard.</p>
          </div>

          {/* PRISTABELL */}
          <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">Komplett pristabell</h2>
          <div className="bg-bg-card border border-surface-border rounded-2xl overflow-hidden my-6">
            <table className="w-full text-sm"><thead><tr className="text-left text-xs text-text-muted uppercase tracking-wider border-b border-surface-border"><th className="px-5 py-3">Jobb</th><th className="px-5 py-3">Pris per m²</th><th className="px-5 py-3">Leilighet 80 m²</th></tr></thead>
              <tbody className="divide-y divide-surface-border">
                {[["Veggmaling (2 strøk)","80–160 kr","18 000–35 000 kr"],["Veggmaling inkl. sparkling","120–200 kr","26 000–44 000 kr"],["Takmaling","100–250 kr","8 000–20 000 kr"],["Sparkling (hull og sprekker)","50–100 kr","11 000–22 000 kr"],["Full sparkling med glassfibervev","100–200 kr","22 000–44 000 kr"],["Grunning","30–60 kr","6 500–13 000 kr"],["Listverk og karmer","50–100 kr/lm","5 000–12 000 kr"],["Tapetsering","150–400 kr","—"],["Fasademaling utvendig","300–600 kr","—"],["Stillas (leie for fasade)","—","3 000–15 000 kr"]].map(([j,m,t])=>(
                  <tr key={j} className="hover:bg-bg-tertiary/30 transition-colors"><td className="px-5 py-3 text-text-primary font-medium">{j}</td><td className="px-5 py-3 font-mono text-accent-yellow">{m}</td><td className="px-5 py-3 font-mono text-text-secondary">{t}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* REGNEKSEMPEL */}
          <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">Regneksempel: Male leilighet 80 m²</h2>
          <div className="bg-bg-card border border-surface-border rounded-2xl p-6 my-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <p className="font-display font-bold text-accent-yellow mb-3">Med maler</p>
                <div className="space-y-2 text-sm">
                  {[["Sparkling vegger","12 000 kr"],["Maling vegger (220 m²)","28 000 kr"],["Takmaling (80 m²)","12 000 kr"],["Listverk og karmer","6 000 kr"]].map(([k,v])=>(<div key={k} className="flex justify-between"><span className="text-text-secondary">{k}</span><span className="font-mono text-text-primary">{v}</span></div>))}
                  <div className="flex justify-between border-t border-surface-border pt-2 mt-2"><span className="font-semibold text-text-primary">Totalt</span><span className="font-mono text-accent-yellow font-semibold">58 000 kr</span></div>
                </div>
              </div>
              <div>
                <p className="font-display font-bold text-text-primary mb-3">Gjør det selv</p>
                <div className="space-y-2 text-sm">
                  {[["Maling (25 liter premium)","4 500 kr"],["Takmaling (10 liter)","1 800 kr"],["Sparkelmasse og verktøy","800 kr"],["Ruller, pensler, tape, plast","1 200 kr"]].map(([k,v])=>(<div key={k} className="flex justify-between"><span className="text-text-secondary">{k}</span><span className="font-mono text-text-primary">{v}</span></div>))}
                  <div className="flex justify-between border-t border-surface-border pt-2 mt-2"><span className="font-semibold text-text-primary">Totalt</span><span className="font-mono text-accent-yellow font-semibold">8 300 kr</span></div>
                </div>
              </div>
            </div>
            <p className="text-xs text-text-tertiary mt-4">Du sparer ca. 50 000 kr ved å male selv. Tidsbruk: 3–5 dager for en leilighet på 80 m².</p>
          </div>

          {/* SELV VS FAGFOLK */}
          <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">Male selv eller leie maler</h2>
          <div className="grid sm:grid-cols-2 gap-4 my-6">
            <div className="bg-bg-card border border-surface-border rounded-xl p-5">
              <p className="font-display font-bold text-accent-yellow mb-3">Male selv og spar 50–70 %</p>
              <div className="space-y-2">{["Innvendige vegger og tak","Listverk og karmer med pensel","Sparkling av små hull og sprekker","Grunning av flekker","Tapetsering med litt øvelse"].map(t=>(<div key={t} className="flex gap-2 text-sm text-text-secondary"><IconCheck size={14} className="flex-shrink-0 text-accent-yellow mt-0.5"/><span>{t}</span></div>))}</div>
            </div>
            <div className="bg-bg-card border border-surface-border rounded-xl p-5">
              <p className="font-display font-bold text-text-primary mb-3">Bruk maler for</p>
              <div className="space-y-2">{["Utvendig fasade med høydearbeid","Full sparkling med glassfibervev","Store flater med høy synlighet","Spesialbehandling som lakk og beis","Når du ikke har tid"].map(t=>(<div key={t} className="flex gap-2 text-sm text-text-secondary"><IconCheck size={14} className="flex-shrink-0 text-text-tertiary mt-0.5"/><span>{t}</span></div>))}</div>
            </div>
          </div>

          {/* SJEKKLISTE + RØDE FLAGG */}
          <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">Slik velger du riktig maler</h2>
          <div className="bg-bg-card border border-surface-border rounded-2xl p-6 my-6">
            <p className="font-display font-bold text-text-primary mb-3">Sjekkliste før du bestiller:</p>
            <div className="space-y-2 mb-6">{["Be om skriftlig tilbud med pris per m² og hva som er inkludert","Sjekk at firmaet er registrert i Brønnøysund","Avklar om sparkling, grunning og materialer er med i prisen","Spør etter referanser og bilder fra lignende jobber","Avtal hvem som dekker til møbler og gulv","Sjekk om de rydder og vasker etter seg"].map(t=>(<div key={t} className="flex gap-2 text-sm text-text-secondary"><IconCheck size={14} className="flex-shrink-0 text-accent-yellow mt-0.5"/><span>{t}</span></div>))}</div>
            <div className="border-t border-surface-border pt-4">
              <p className="font-display font-bold text-red-400 mb-3">Røde flagg:</p>
              <div className="space-y-2">{["Vil ikke gi skriftlig tilbud","Krever forskuddsbetaling for materialer","Pris som er 40 % under alle andre tilbud","Kan ikke vise referanser","Vil bruke billigmaling i stedet for det avtalte merket","Har ikke forsikring"].map(t=>(<div key={t} className="flex gap-2 text-sm text-text-secondary"><span className="flex-shrink-0 text-red-400 mt-0.5 text-xs">✕</span><span>{t}</span></div>))}</div>
            </div>
          </div>

          {/* VANLIGE FEIL */}
          <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">5 vanlige feil</h2>
          <div className="space-y-4 my-6">
            {[
              {t:"Hopper over forberedelse",d:"Forberedelse er 80 % av jobben. Vask, sparkle, slip og grunn før du starter. Dårlig forberedelse gir dårlig resultat uansett malingstype."},
              {t:"Kjøper billig maling",d:"Billig maling krever 3–4 strøk og dekker dårlig. Premium maling som Jotun Lady dekker på 2 strøk. Du sparer tid og får bedre resultat."},
              {t:"Glemmer å male tak først",d:"Mal alltid tak før vegger. Drypp fra takrullen lander på umalt vegg. Bruk matt hvit på tak, aldri blank."},
              {t:"Bruker feil verktøy",d:"God rull gjør enorm forskjell. Kortnappet rull for glatte vegger, langnappet for grove. Pensel for karmer og hjørner. Aldri spar på malertape."},
              {t:"Maler i feil temperatur",d:"Utvendig trenger du minst 10 grader og tørt vær. Innvendig er 15–22 grader med god ventilasjon ideelt. For kaldt gir dårlig heft, for varmt gir synlige merker."},
            ].map((item,i)=>(<div key={i} className="bg-bg-card border border-surface-border rounded-xl p-5"><div className="flex items-center gap-3 mb-2"><span className="w-7 h-7 rounded-lg bg-accent-yellow/10 border border-accent-yellow/20 text-accent-yellow text-xs font-display font-bold flex items-center justify-center">{i+1}</span><h3 className="font-display font-bold text-text-primary">{item.t}</h3></div><p className="text-sm text-text-secondary ml-10">{item.d}</p></div>))}
          </div>

          {/* SESONG */}
          <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">Sesong og ventetid</h2>
          <div className="bg-bg-card border border-surface-border rounded-xl p-6 my-6">
            <div className="space-y-3 text-sm">
              {[["Januar–mars","Rolig, gode priser for innvendig","text-text-primary"],["April–juni","Høy sesong utvendig, 1–3 ukers ventetid","text-accent-amber"],["Juli–august","Høyeste etterspørsel for fasademaling","text-red-400"],["September–oktober","Siste sjanse utvendig før vinteren","text-accent-amber"],["November–desember","Kun innvendig, gode priser","text-text-primary"]].map(([m,d,c])=>(<div key={m} className="flex justify-between"><span className="text-text-secondary">{m}</span><span className={c}>{d}</span></div>))}
            </div>
            <p className="text-xs text-text-tertiary mt-4">Tips: Bestill innvendig maling i vinterhalvåret for best pris. Fasademaling bør bestilles tidlig vår for sommerjobb.</p>
          </div>

          {/* REGIONALE PRISER */}
          <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">Regionale prisforskjeller</h2>
          <div className="bg-bg-card border border-surface-border rounded-xl overflow-hidden my-6">
            <table className="w-full text-sm"><thead><tr className="text-left text-xs text-text-muted uppercase tracking-wider border-b border-surface-border"><th className="px-5 py-3">Region</th><th className="px-5 py-3">Timepris maler</th><th className="px-5 py-3">vs snitt</th></tr></thead>
              <tbody className="divide-y divide-surface-border">
                {[["Oslo og Akershus","600–750 kr","+15 %","text-accent-yellow"],["Bergen","550–700 kr","+8 %","text-accent-amber"],["Stavanger","550–700 kr","+8 %","text-accent-amber"],["Trondheim","500–650 kr","+3 %","text-text-secondary"],["Tromsø","500–650 kr","+3 %","text-text-secondary"],["Kristiansand","500–600 kr","Snitt","text-text-tertiary"],["Distriktene","450–550 kr","−10 %","text-text-tertiary"]].map(([r,p,v,c])=>(
                  <tr key={r}><td className="px-5 py-3 text-text-primary font-medium">{r}</td><td className="px-5 py-3 font-mono text-text-secondary">{p}</td><td className={`px-5 py-3 font-mono font-semibold ${c}`}>{v}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* SPARETIPS */}
          <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">Slik sparer du penger på maling</h2>
          <div className="space-y-3 text-text-secondary mb-6">
            <p><strong className="text-text-primary">Male selv innvendig.</strong> Du sparer 50–70 % og trenger bare ruller, pensler, tape og maling. En leilighet på 80 m² tar 3–5 dager.</p>
            <p><strong className="text-text-primary">Bruk kvalitetsmaling.</strong> Jotun Lady dekker på 2 strøk, billigmaling trenger 3–4. Du sparer tid og maling, selv om literen koster mer.</p>
            <p><strong className="text-text-primary">Samle alt i en bestilling.</strong> Hvis du leier maler, få vegger, tak, listverk og sparkling gjort samtidig. Oppstart og rigg koster det samme uansett.</p>
            <p><strong className="text-text-primary">Velg nøytrale farger.</strong> Hvis du skal selge snart, velg hvitt eller lyst grått. Det appellerer til flest kjøpere og gir best avkastning per krone.</p>
            <p><strong className="text-text-primary">Forbered skikkelig.</strong> Flytt møbler, dekk til gulv, tape karmer og vinduer. Malerens tid er dyr, ikke betal for forberedelse du kan gjøre selv.</p>
            <p><strong className="text-text-primary">Bestill i rolig sesong.</strong> Vinter og tidlig vår gir lavere priser og raskere oppstart for innvendig maling.</p>
          </div>

          {/* RELATERTE */}
          <div className="mt-10 mb-6">
            <h2 className="font-display font-bold text-xl text-text-primary mb-4">Relaterte prosjekter</h2>
            <div className="flex flex-wrap gap-3">
              {[{href:"/oppussing",label:"Oppussing"},{href:"/fasade",label:"Fasade"},{href:"/gulv",label:"Gulv"},{href:"/bad",label:"Bad"},{href:"/oppussing-for-salg",label:"Oppussing før salg"},{href:"/flipping",label:"Flipping"}].map(l=>(
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
