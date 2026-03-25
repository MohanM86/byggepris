import Link from "next/link";

export function BadContent() {
  return (
    <>
      <h2>Komplett guide til baderomsrenovering i Norge</h2>
      <p>
        Badet er det dyreste rommet å renovere per kvadratmeter, og det rommet der kvaliteten på arbeidet er mest kritisk. Et dårlig utført bad kan føre til fuktskader som koster hundretusener å reparere. Derfor er det viktig å forstå hva pengene går til og hvorfor bad koster det det gjør.
      </p>

      <h2>Hva koster bad etter størrelse?</h2>
      <p>Her er realistiske prisintervaller for ulike badstørrelser med normal standard:</p>
      <div className="bg-bg-card border border-surface-border rounded-xl overflow-hidden my-6">
        <table className="w-full text-sm">
          <thead><tr className="text-left text-xs text-text-muted uppercase tracking-wider border-b border-surface-border"><th className="px-5 py-3">Størrelse</th><th className="px-5 py-3">Enkel</th><th className="px-5 py-3">Normal</th><th className="px-5 py-3">Høy</th></tr></thead>
          <tbody className="divide-y divide-surface-border">
            <tr><td className="px-5 py-3 text-text-primary font-medium">3 m² (toalettrom)</td><td className="px-5 py-3 font-mono text-text-secondary">120 000 kr</td><td className="px-5 py-3 font-mono text-accent-yellow">180 000 kr</td><td className="px-5 py-3 font-mono text-text-secondary">280 000 kr</td></tr>
            <tr><td className="px-5 py-3 text-text-primary font-medium">5 m² (lite bad)</td><td className="px-5 py-3 font-mono text-text-secondary">180 000 kr</td><td className="px-5 py-3 font-mono text-accent-yellow">300 000 kr</td><td className="px-5 py-3 font-mono text-text-secondary">450 000 kr</td></tr>
            <tr><td className="px-5 py-3 text-text-primary font-medium">6 m² (standard)</td><td className="px-5 py-3 font-mono text-text-secondary">220 000 kr</td><td className="px-5 py-3 font-mono text-accent-yellow">360 000 kr</td><td className="px-5 py-3 font-mono text-text-secondary">530 000 kr</td></tr>
            <tr><td className="px-5 py-3 text-text-primary font-medium">8 m² (romslig)</td><td className="px-5 py-3 font-mono text-text-secondary">280 000 kr</td><td className="px-5 py-3 font-mono text-accent-yellow">460 000 kr</td><td className="px-5 py-3 font-mono text-text-secondary">680 000 kr</td></tr>
            <tr><td className="px-5 py-3 text-text-primary font-medium">10 m² (stort)</td><td className="px-5 py-3 font-mono text-text-secondary">350 000 kr</td><td className="px-5 py-3 font-mono text-accent-yellow">550 000 kr</td><td className="px-5 py-3 font-mono text-text-secondary">800 000 kr</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Detaljert kostnadsfordeling</h2>
      <p>For et standard bad på 6 m² med normal standard fordeler kostnadene seg slik:</p>
      <div className="bg-bg-card border border-surface-border rounded-xl p-6 my-6">
        <div className="space-y-3 text-sm">
          <div className="flex justify-between"><span>Riving og bortkjøring</span><span className="font-mono text-text-primary">15 000 – 30 000 kr</span></div>
          <div className="flex justify-between"><span>Rørleggerarbeid</span><span className="font-mono text-text-primary">40 000 – 80 000 kr</span></div>
          <div className="flex justify-between"><span>Membran og våtromssikring</span><span className="font-mono text-text-primary">25 000 – 50 000 kr</span></div>
          <div className="flex justify-between"><span>Fliser (materialer + legging)</span><span className="font-mono text-text-primary">40 000 – 100 000 kr</span></div>
          <div className="flex justify-between"><span>Sanitærprodukter (toalett, servant, dusj)</span><span className="font-mono text-text-primary">20 000 – 80 000 kr</span></div>
          <div className="flex justify-between"><span>Elektriker og gulvvarme</span><span className="font-mono text-text-primary">15 000 – 35 000 kr</span></div>
          <div className="flex justify-between"><span>Ventilasjon</span><span className="font-mono text-text-primary">5 000 – 15 000 kr</span></div>
          <div className="flex justify-between"><span>Snekkerarbeid (dør, lister, innkassing)</span><span className="font-mono text-text-primary">10 000 – 25 000 kr</span></div>
          <div className="flex justify-between border-t border-surface-border pt-3 mt-3"><span className="text-text-primary font-semibold">Totalt 6 m² normal standard</span><span className="font-mono text-accent-yellow font-semibold">250 000 – 420 000 kr</span></div>
        </div>
      </div>

      <h2>Membran og våtromsnorm — hvorfor det koster det det gjør</h2>
      <p>
        I Norge er det strenge krav til hvordan våtrom skal bygges. Våtromsnormen stiller krav til membranarbeid, fall mot sluk og materialvalg. <strong>Membranarbeid er den viktigste delen av et nytt bad</strong> — det er dette som hindrer fukt fra å trenge inn i konstruksjonen og forårsake råteskader.
      </p>
      <p>
        Membrankostnaden utgjør typisk 25 000-50 000 kr (8-15% av total badkostnad), men det er den absolutt siste posten du bør spare på. En fuktskade forårsaket av dårlig membranarbeid kan koste <strong>100 000-500 000 kr</strong> å utbedre, og forsikringsselskapet dekker normalt ikke skader som skyldes feil utførelse.
      </p>

      <h2>Fliser vs mikrosement vs baderomsplater</h2>
      <p>Materialvalget for vegger og gulv påvirker prisen betydelig:</p>
      <div className="bg-bg-card border border-surface-border rounded-xl p-6 my-6">
        <div className="space-y-4 text-sm">
          <div>
            <p className="font-semibold text-text-primary mb-1">Fliser (mest vanlig)</p>
            <p className="text-text-secondary">Materialer: 300-3 000 kr/m². Legging: 500-1 500 kr/m². Holdbart, vannfast, enormt utvalg. Ulempen er fuger som kan misfarges og lang monteringstid.</p>
          </div>
          <div className="border-t border-surface-border pt-4">
            <p className="font-semibold text-text-primary mb-1">Mikrosement</p>
            <p className="text-text-secondary">Totalpris inkl. arbeid: 2 000-4 000 kr/m². Moderne, fugeløst utseende. Raskere montering, men krever spesialister. Kan sprekke hvis underlaget beveger seg. Passer best i kombinasjon med fliser i de mest utsatte sonene.</p>
          </div>
          <div className="border-t border-surface-border pt-4">
            <p className="font-semibold text-text-primary mb-1">Baderomsplater (våtromsplater)</p>
            <p className="text-text-secondary">Materialer: 400-1 200 kr/m². Montering: 300-600 kr/m². Rimeligere og raskere enn fliser, men begrenset design. Kan brukes utenfor våtsonen for å spare penger. Ikke godkjent i direkte dusjsone hos alle produsenter.</p>
          </div>
        </div>
      </div>

      <h2>Hva kan du gjøre selv på badet?</h2>
      <div className="bg-bg-card border border-surface-border rounded-xl p-6 my-6">
        <div className="space-y-4 text-sm">
          <div>
            <p className="font-semibold text-accent-yellow mb-1">Kan spare 15 000-30 000 kr</p>
            <p className="text-text-secondary">Riving av gammelt bad, bortkjøring av avfall, maling av tak, montering av tilbehør (speil, hyller, kroker, toalettpapirholder), montering av baderomsplater utenfor våtsone.</p>
          </div>
          <div className="border-t border-surface-border pt-4">
            <p className="font-semibold text-accent-amber mb-1">Må ha fagfolk (lovpålagt/anbefalt)</p>
            <p className="text-text-secondary">Alt rørleggerarbeid, membranarbeid, flislegging i våtsone, elektrisk installasjon inkl. gulvvarme, ventilasjon. Dokumentasjon fra sertifiserte fagfolk er viktig for forsikring og videresalg.</p>
          </div>
        </div>
      </div>

      <h2>Tidsplan for baderomsrenovering</h2>
      <div className="bg-bg-card border border-surface-border rounded-xl p-6 my-6">
        <div className="space-y-2 text-sm">
          <div className="flex gap-4"><span className="font-mono text-accent-yellow w-20 flex-shrink-0">Dag 1-3</span><span>Riving av gammelt bad, bortkjøring av avfall, inspeksjon</span></div>
          <div className="flex gap-4"><span className="font-mono text-accent-yellow w-20 flex-shrink-0">Dag 4-8</span><span>Rørlegger: nye rør, sluk, tilkoblinger</span></div>
          <div className="flex gap-4"><span className="font-mono text-accent-yellow w-20 flex-shrink-0">Dag 9-11</span><span>Sparkling, klargjøring for membran</span></div>
          <div className="flex gap-4"><span className="font-mono text-accent-yellow w-20 flex-shrink-0">Dag 12-15</span><span>Membranarbeid og tørketid (minimum 2 døgn)</span></div>
          <div className="flex gap-4"><span className="font-mono text-accent-yellow w-20 flex-shrink-0">Dag 16-23</span><span>Flislegging gulv og vegger</span></div>
          <div className="flex gap-4"><span className="font-mono text-accent-yellow w-20 flex-shrink-0">Dag 24-26</span><span>Fuging og herdetid</span></div>
          <div className="flex gap-4"><span className="font-mono text-accent-yellow w-20 flex-shrink-0">Dag 27-30</span><span>Montering av sanitær, elektro, snekker, maling, ferdigstillelse</span></div>
        </div>
      </div>

      <h2>Er det verdt å pusse opp badet?</h2>
      <p>
        Et nytt bad øker typisk boligverdien med <strong>50-80% av investeringen</strong>. Avkastningen er best hvis det gamle badet var utdatert (over 20 år), hadde synlige slitasjeskader, eller manglet moderne funksjoner som gulvvarme og god ventilasjon. Kjøpere legger stor vekt på badets tilstand — et gammelt bad er en av de vanligste grunnene til prisavslag.
      </p>
      <p>
        For <Link href="/flipping" className="text-accent-yellow hover:underline">boligflipping</Link> kan det lønne seg mer å gjøre en overflateoppdatering (ny fuging, maling, nytt tilbehør, ny dusjvegg) til 20 000-50 000 kr i stedet for full renovering til 300 000+ kr — med mindre badet har reelle fuktproblemer.
      </p>

      <h2>Hvor ofte bør bad renoveres?</h2>
      <p>
        Et godt utført bad med kvalitetsmaterialer varer typisk <strong>20-30 år</strong> før det trenger renovering. Tegn på at badet bør renoveres inkluderer: løse fliser, misfarging i fuger som ikke lar seg rense, dårlig lukt (kan tyde på fukt bak vegg), synlige lekkasjer, eller at badet rett og slett føles utdatert og lite funksjonelt.
      </p>

      <p>
        Les også om <Link href="/kjokken" className="text-accent-yellow hover:underline">hva kjøkkenrenovering koster</Link>, <Link href="/totalrenovering" className="text-accent-yellow hover:underline">totalrenovering</Link> og <Link href="/skjulte-kostnader-ved-oppussing" className="text-accent-yellow hover:underline">skjulte kostnader ved oppussing</Link>. Bruk vår <Link href="/kalkulator" className="text-accent-yellow hover:underline">gratis kalkulator</Link> for å beregne ditt prosjekt.
      </p>
    </>
  );
}
