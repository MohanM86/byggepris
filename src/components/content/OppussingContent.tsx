import Link from "next/link";

export function OppussingContent() {
  return (
    <>
      <h2>Komplett guide til oppussingskostnader i Norge</h2>
      <p>
        Oppussing er et vidt begrep som dekker alt fra en enkel malejobb til full ombygging av planløsning. Prisen varierer derfor enormt — fra noen titusen kroner for overflateoppussing til flere millioner for gjennomgripende renovering. Nøkkelen til et vellykket oppussingsprosjekt er å definere tydelig hva du faktisk skal gjøre, og budsjettere realistisk ut fra det.
      </p>
      <p>
        I Norge ligger gjennomsnittlig oppussingskostnad på <strong>15 000 kr per m²</strong> for et typisk prosjekt med normal standard. Men dette er et gjennomsnitt — enkle overflateprosjekter kan ligge på 5 000-8 000 kr/m², mens oppussing som inkluderer bad, kjøkken og planløsningsendring raskt koster 20 000-30 000 kr/m².
      </p>

      <h2>De ulike nivåene av oppussing</h2>
      <p>
        Det er nyttig å dele oppussing inn i tre nivåer, fordi kostnad og kompleksitet varierer dramatisk mellom dem:
      </p>
      <div className="bg-bg-card border border-surface-border rounded-xl p-6 my-6">
        <div className="space-y-5 text-sm">
          <div>
            <p className="font-semibold text-accent-yellow mb-1">Nivå 1: Overflateoppussing (5 000-10 000 kr/m²)</p>
            <p>Maling av vegger og tak, nytt gulv, nye lister, oppdatert belysning. Ingen endring av rør, elektro eller planløsning. Et prosjekt du delvis kan gjøre selv. For en leilighet på 70 m² betyr det <strong>350 000-700 000 kr</strong>.</p>
          </div>
          <div className="border-t border-surface-border pt-5">
            <p className="font-semibold text-accent-yellow mb-1">Nivå 2: Delvis renovering (10 000-20 000 kr/m²)</p>
            <p>Nytt bad eller kjøkken, nye overflater i resten av boligen, noe elektrisk oppgradering. Krever fagfolk for våtrom og elektro. For en leilighet på 70 m² betyr det <strong>700 000-1 400 000 kr</strong>.</p>
          </div>
          <div className="border-t border-surface-border pt-5">
            <p className="font-semibold text-accent-yellow mb-1">Nivå 3: Gjennomgripende renovering (18 000-30 000 kr/m²)</p>
            <p>Nytt bad, nytt kjøkken, ny planløsning, nye rør og elektro, nye overflater overalt. Nærmer seg <Link href="/totalrenovering" className="text-accent-yellow hover:underline">totalrenovering</Link>. For en leilighet på 70 m² betyr det <strong>1 260 000-2 100 000 kr</strong>.</p>
          </div>
        </div>
      </div>

      <h2>Typisk kostnadsfordeling</h2>
      <p>
        For et gjennomsnittlig oppussingsprosjekt (nivå 2) fordeler kostnadene seg omtrent slik:
      </p>
      <div className="bg-bg-card border border-surface-border rounded-xl p-6 my-6">
        <div className="space-y-3 text-sm">
          <div className="flex justify-between"><span>Materialer (gulv, maling, fliser, innredning)</span><span className="font-mono text-text-primary">35-45%</span></div>
          <div className="flex justify-between"><span>Arbeidskraft (håndverkere)</span><span className="font-mono text-text-primary">40-50%</span></div>
          <div className="flex justify-between"><span>Riving og avfallshåndtering</span><span className="font-mono text-text-primary">5-8%</span></div>
          <div className="flex justify-between"><span>Uforutsette kostnader</span><span className="font-mono text-text-primary">10-15%</span></div>
        </div>
      </div>
      <p>
        Arbeidskraft er den største enkeltkostnaden. Timeprisen for håndverkere i Norge ligger typisk på <strong>500-900 kr per time</strong> inkludert arbeidsgiveravgift og administrasjon. I Oslo og storbyene er timeprisene i øvre sjikt, mens distriktene ofte er rimeligere.
      </p>

      <h2>Hva kan du gjøre selv?</h2>
      <p>
        Egeninnsats er den mest effektive måten å redusere kostnadene på. Men det gjelder å vite hva du faktisk kan gjøre og hva som krever fagfolk.
      </p>
      <div className="bg-bg-card border border-surface-border rounded-xl p-6 my-6">
        <div className="space-y-4 text-sm">
          <div>
            <p className="font-semibold text-text-primary mb-1">Kan gjøre selv (spare 30-50% på disse postene)</p>
            <p>Maling av vegger og tak, legging av laminat og vinylgulv, tapetsering, riving og bortkjøring av avfall, montering av lister og listverk, enkel demontering, maling av skap og møbler, montering av hyller og tilbehør.</p>
          </div>
          <div className="border-t border-surface-border pt-4">
            <p className="font-semibold text-text-primary mb-1">Bør ha fagfolk</p>
            <p>Flislegging, parkettlegging, snekkerarbeid på dører og vinduer, gipsing av vegger.</p>
          </div>
          <div className="border-t border-surface-border pt-4">
            <p className="font-semibold text-text-primary mb-1">Må ha fagfolk (lovpålagt)</p>
            <p>Alt rørleggerarbeid, membranarbeid i våtrom, elektrisk installasjon, bærende konstruksjoner, ventilasjonsarbeid.</p>
          </div>
        </div>
      </div>

      <h2>De vanligste oppussingsprosjektene og hva de koster</h2>
      <div className="bg-bg-card border border-surface-border rounded-xl p-6 my-6">
        <div className="space-y-3 text-sm">
          <div className="flex justify-between"><span>Male hele leiligheten (70 m²)</span><span className="font-mono text-text-primary">15 000 – 40 000 kr</span></div>
          <div className="flex justify-between"><span>Nytt gulv i hele boligen (70 m²)</span><span className="font-mono text-text-primary">50 000 – 150 000 kr</span></div>
          <div className="flex justify-between"><span>Nytt bad (6 m²)</span><span className="font-mono text-text-primary">240 000 – 480 000 kr</span></div>
          <div className="flex justify-between"><span>Nytt kjøkken</span><span className="font-mono text-text-primary">150 000 – 500 000 kr</span></div>
          <div className="flex justify-between"><span>Fjerne en ikke-bærende vegg</span><span className="font-mono text-text-primary">10 000 – 30 000 kr</span></div>
          <div className="flex justify-between"><span>Fjerne bærende vegg (med bjelke)</span><span className="font-mono text-text-primary">30 000 – 80 000 kr</span></div>
          <div className="flex justify-between"><span>Nytt elektrisk anlegg (leilighet)</span><span className="font-mono text-text-primary">80 000 – 200 000 kr</span></div>
          <div className="flex justify-between"><span>Nye vinduer (10 stk)</span><span className="font-mono text-text-primary">80 000 – 200 000 kr</span></div>
        </div>
      </div>

      <h2>Oppussing i borettslag vs selveier</h2>
      <p>
        Bor du i borettslag er det viktig å kjenne reglene. De fleste borettslag krever at du søker styret om godkjenning for vesentlige arbeider, spesielt hvis det berører bærende konstruksjoner, våtrom, rør, ventilasjon eller fasade. Brudd på regelverket kan gi erstatningsansvar.
      </p>
      <p>
        I borettslag er det også viktig å varsle naboer om støyende arbeid og holde seg innenfor fastsatte arbeidstider. Sjekk husordensreglene før du starter.
      </p>

      <h2>Når bør du pusse opp?</h2>
      <p>
        Tidspunkt kan påvirke prisen. Høst og vinter er ofte roligere perioder for håndverkere, og du kan forhandle bedre priser. Våren er høysesong, spesielt for utvendige arbeider. Bestill alltid materialer i god tid — leveringstider på kjøkken, fliser og spesialbestilte produkter kan være 4-12 uker.
      </p>

      <p>
        Les mer om <Link href="/skjulte-kostnader-ved-oppussing" className="text-accent-yellow hover:underline">skjulte kostnader ved oppussing</Link> og <Link href="/flipping" className="text-accent-yellow hover:underline">oppussing for flipping</Link>.
      </p>
    </>
  );
}
