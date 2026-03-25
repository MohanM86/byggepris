import { Metadata } from "next";
import Link from "next/link";
import { FadeInUp } from "@/components/ui/animations";
import { IconCalculator, IconRisk } from "@/components/icons";
import { FAQSchema, BreadcrumbSchema, ArticleSchema } from "@/components/seo/JsonLd";

const faq = [
  { question: "Hvilke skjulte kostnader glemmer folk oftest?", answer: "De vanligste er uforutsette fuktskader (50 000-200 000 kr), prosjekteringskostnader (5-10% av budsjett), byggesøknad og gebyrer, og midlertidig bolig under renovering." },
  { question: "Hvor mye buffer bør jeg ha?", answer: "Vi anbefaler 10-15% for normal oppussing og 15-20% for totalrenovering av eldre boliger. Aldri gå under 10%." },
  { question: "Hva koster det å fjerne asbest?", answer: "Asbestsanering koster typisk 30 000-100 000 kr avhengig av omfang. Det er lovpålagt å bruke sertifisert saneringsfirma." },
  { question: "Kan skjulte kostnader unngås?", answer: "Ikke helt, men god planlegging, tilstandsrapport og realistisk buffer reduserer risikoen betydelig. En grundig befaring før oppstart avdekker de fleste problemene." },
];

export const metadata: Metadata = {
  title: "Skjulte kostnader ved oppussing – Hva mange glemmer",
  description: "De vanligste skjulte kostnadene ved oppussing og bygging. Fuktskader, asbest, gebyr, midlertidig bolig og mer. Unngå budsjettsprekk.",
  alternates: { canonical: "https://byggepris.no/skjulte-kostnader-ved-oppussing" },
  openGraph: { title: "Skjulte kostnader ved oppussing", description: "Hva mange glemmer i budsjettet.", url: "https://byggepris.no/skjulte-kostnader-ved-oppussing", type: "article" },
};

export default function Page() {
  return (
    <main className="pt-20">
      <BreadcrumbSchema items={[{ name: "Hjem", href: "/" }, { name: "Skjulte kostnader ved oppussing", href: "/skjulte-kostnader-ved-oppussing" }]} />
      <ArticleSchema title="Skjulte kostnader ved oppussing" description="De vanligste skjulte kostnadene ved oppussing og bygging i Norge." slug="skjulte-kostnader-ved-oppussing" />
      <FAQSchema items={faq} />
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <FadeInUp>
          <nav className="text-sm text-text-muted mb-6"><Link href="/" className="hover:text-accent-yellow">Hjem</Link> / <span className="text-text-secondary">Skjulte kostnader ved oppussing</span></nav>
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-text-primary mb-6">Skjulte kostnader ved oppussing</h1>

          <p className="text-lg text-text-secondary mb-6">De fleste oppussingsprosjekter i Norge ender opp dyrere enn planlagt. Årsaken er sjelden dårlig håndverk — det er skjulte kostnader som ikke var med i budsjettet fra starten. Denne guiden viser deg de vanligste kostnadene folk glemmer, slik at du kan planlegge realistisk og unngå ubehagelige overraskelser.</p>

          <div className="bg-accent-yellow/5 border border-accent-yellow/10 rounded-2xl p-6 mb-8">
            <div className="flex items-center gap-2 mb-3">
              <IconRisk size={20} className="text-accent-amber" />
              <p className="font-display font-bold text-text-primary">Nøkkeltall: Typisk budsjettoverskridelse i Norge</p>
            </div>
            <p className="text-sm text-text-secondary">Ifølge bransjetall overskrides budsjettet i 60-70% av norske oppussingsprosjekter. Gjennomsnittlig overskridelse er 15-25% av opprinnelig budsjett. De vanligste årsakene er skjulte skader, endringer underveis og utelatte kostnadsposter.</p>
          </div>

          <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">De 10 vanligste skjulte kostnadene</h2>

          <div className="space-y-5">
            <div className="bg-bg-card border border-surface-border rounded-xl p-6">
              <div className="flex justify-between items-start mb-2"><h3 className="font-display font-bold text-text-primary">1. Fuktskader i skjulte konstruksjoner</h3><span className="font-mono text-accent-amber text-sm font-semibold whitespace-nowrap">50 000 – 300 000 kr</span></div>
              <p className="text-sm text-text-secondary">Det vanligste funnet ved oppussing av eldre boliger. Fukt kan ha trengt inn gjennom dårlig membranarbeid, lekkasjer eller kondens over mange år. Skadene vises ikke før vegger eller gulv rives. Utbedring kan kreve utskifting av bærekonstruksjon, ny isolasjon og ny dampsperre. Spesielt vanlig i boliger fra 1960- og 70-tallet med dårlige våtromsløsninger.</p>
            </div>

            <div className="bg-bg-card border border-surface-border rounded-xl p-6">
              <div className="flex justify-between items-start mb-2"><h3 className="font-display font-bold text-text-primary">2. Asbestsanering</h3><span className="font-mono text-accent-amber text-sm font-semibold whitespace-nowrap">30 000 – 100 000 kr</span></div>
              <p className="text-sm text-text-secondary">Asbest ble brukt i norske bygg fram til ca. 1985 — i flislim, gulvbelegg, rørmansjetter, eternittplater og isolasjon. Sanering er lovpålagt og må utføres av sertifisert firma. En asbesttest koster bare 1 000-3 000 kr og bør gjøres før riving i alle boliger bygd før 1990.</p>
            </div>

            <div className="bg-bg-card border border-surface-border rounded-xl p-6">
              <div className="flex justify-between items-start mb-2"><h3 className="font-display font-bold text-text-primary">3. Elektrisk anlegg som må oppgraderes</h3><span className="font-mono text-accent-amber text-sm font-semibold whitespace-nowrap">40 000 – 200 000 kr</span></div>
              <p className="text-sm text-text-secondary">Eldre boliger har ofte underdimensjonert elektrisk anlegg med skrusikringer, aluminiumsledning eller for få kurser. Ved oppussing av kjøkken eller bad må anlegget ofte oppgraderes for å håndtere moderne belastning. Ny sikringstavle koster 15 000-40 000 kr, omlegging av hele anlegget 80 000-200 000 kr.</p>
            </div>

            <div className="bg-bg-card border border-surface-border rounded-xl p-6">
              <div className="flex justify-between items-start mb-2"><h3 className="font-display font-bold text-text-primary">4. Prosjektering og rådgivning</h3><span className="font-mono text-accent-amber text-sm font-semibold whitespace-nowrap">20 000 – 150 000 kr</span></div>
              <p className="text-sm text-text-secondary">Arkitekt, bygningsingeniør og ansvarlig søker er nødvendig for mange prosjekter, men glemmes ofte i budsjettet. Arkitekthonorar for ombygging er typisk 30 000-100 000 kr. Konstruksjonsberegning for fjerning av bærende vegg koster 10 000-25 000 kr. Ansvarlig søker for byggesøknad koster 15 000-40 000 kr.</p>
            </div>

            <div className="bg-bg-card border border-surface-border rounded-xl p-6">
              <div className="flex justify-between items-start mb-2"><h3 className="font-display font-bold text-text-primary">5. Byggesøknad og offentlige gebyrer</h3><span className="font-mono text-accent-amber text-sm font-semibold whitespace-nowrap">15 000 – 80 000 kr</span></div>
              <p className="text-sm text-text-secondary">Endring av planløsning, nytt våtrom, eller endret bruk krever ofte byggesøknad. Kommunale gebyrer for behandling av søknad varierer fra 10 000 til 50 000 kr avhengig av kommune og prosjektets omfang. I tillegg kommer gebyr for oppmåling og ferdigattest.</p>
            </div>

            <div className="bg-bg-card border border-surface-border rounded-xl p-6">
              <div className="flex justify-between items-start mb-2"><h3 className="font-display font-bold text-text-primary">6. Riving og avfallshåndtering</h3><span className="font-mono text-accent-amber text-sm font-semibold whitespace-nowrap">20 000 – 80 000 kr</span></div>
              <p className="text-sm text-text-secondary">Riving av gammelt bad, kjøkken eller vegger genererer store mengder avfall som må sorteres og leveres til deponi. Containerhire koster 3 000-8 000 kr per container, og du trenger ofte 2-5 containere for en full leilighetsoppussing. Sorteringskrav gjør dette dyrere enn mange tror.</p>
            </div>

            <div className="bg-bg-card border border-surface-border rounded-xl p-6">
              <div className="flex justify-between items-start mb-2"><h3 className="font-display font-bold text-text-primary">7. Midlertidig bolig</h3><span className="font-mono text-accent-amber text-sm font-semibold whitespace-nowrap">20 000 – 100 000 kr</span></div>
              <p className="text-sm text-text-secondary">Hvis du renoverer bad og kjøkken samtidig, er det ofte umulig å bo i leiligheten. Leie av midlertidig bolig i 2-4 måneder koster fort 20 000-50 000 kr per måned i Oslo. Alternativt kan du bo hos familie, men dette har også en kostnad i form av ulempe og tid.</p>
            </div>

            <div className="bg-bg-card border border-surface-border rounded-xl p-6">
              <div className="flex justify-between items-start mb-2"><h3 className="font-display font-bold text-text-primary">8. Endringer og tilleggsarbeid underveis</h3><span className="font-mono text-accent-amber text-sm font-semibold whitespace-nowrap">Varierer</span></div>
              <p className="text-sm text-text-secondary">Den dyreste typen endring er den som gjøres etter at arbeidet har startet. Å flytte en vegg etter at gipsen er oppe, bytte fliser etter at de er lagt, eller endre røropplegget midt i prosessen koster 2-5 ganger mer enn om det var planlagt fra start. Fastslå alle valg før oppstart og hold deg til planen.</p>
            </div>

            <div className="bg-bg-card border border-surface-border rounded-xl p-6">
              <div className="flex justify-between items-start mb-2"><h3 className="font-display font-bold text-text-primary">9. Tilkobling og utvendig etterarbeid</h3><span className="font-mono text-accent-amber text-sm font-semibold whitespace-nowrap">20 000 – 150 000 kr</span></div>
              <p className="text-sm text-text-secondary">Ved tilbygg eller graving kan hage, innkjørsel, terrasse og beplantning bli skadet. Gjenoppbygging av utendørs arealer er en kostnad mange glemmer helt. Ny gressplen, ny beplantning, reparasjon av innkjørsel og ny terrasse kan raskt koste 50 000-150 000 kr.</p>
            </div>

            <div className="bg-bg-card border border-surface-border rounded-xl p-6">
              <div className="flex justify-between items-start mb-2"><h3 className="font-display font-bold text-text-primary">10. Nye møbler og interiør</h3><span className="font-mono text-accent-amber text-sm font-semibold whitespace-nowrap">50 000 – 300 000 kr</span></div>
              <p className="text-sm text-text-secondary">Et nyrenovert rom med gamle møbler ser ofte merkelig ut. Mange ender opp med å kjøpe nye møbler, gardiner, lamper og dekorasjon som ikke var med i det opprinnelige budsjettet. For en full leilighetsoppussing kan nye møbler og interiør fort koste 100 000-300 000 kr.</p>
            </div>
          </div>

          <h2 className="font-display font-bold text-2xl text-text-primary mt-10 mb-4">Slik unngår du budsjettsprekk</h2>
          <div className="space-y-3 text-text-secondary mb-6">
            <p><strong className="text-text-primary">Sett av realistisk buffer.</strong> Minimum 10-15% for normal oppussing, 15-20% for eldre boliger og totalrenovering.</p>
            <p><strong className="text-text-primary">Gjør en grundig befaring først.</strong> Bruk en bygningssakkyndig til å vurdere tilstanden før du lager budsjett. Det koster 5 000-15 000 kr, men kan spare deg for overraskelser.</p>
            <p><strong className="text-text-primary">Ta alle valg før oppstart.</strong> Velg fliser, kjøkken, armaturer og overflater FØR arbeidet starter. Endringer underveis er ekstremt dyre.</p>
            <p><strong className="text-text-primary">Inkluder ALLE kostnader i budsjettet.</strong> Bruk listen over for å sikre at du ikke glemmer noen poster.</p>
            <p><strong className="text-text-primary">Bruk fastpris der mulig.</strong> Forhandle fastpris med håndverkere for forutsigbarhet. Timer kan løpe ut av kontroll.</p>
          </div>

          <div className="mt-10"><Link href="/kalkulator" className="inline-flex items-center gap-2 px-6 py-3 bg-accent-yellow text-bg-primary font-display font-bold rounded-xl hover:bg-accent-warm transition-colors shadow-glow-sm"><IconCalculator size={18} /> Beregn ditt prosjekt med buffer</Link></div>
        </FadeInUp>
      </article>
    </main>
  );
}
