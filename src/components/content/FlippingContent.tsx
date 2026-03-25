import Link from "next/link";

export function FlippingContent() {
  return (
    <>
      <h2>Komplett guide til boligflipping i Norge</h2>
      <p>
        Boligflipping handler om å kjøpe en bolig under markedspris, pusse opp strategisk, og selge med fortjeneste. Det er blitt populært i Norge takket være TV-programmer og boligprisoppgang, men det er ikke risikofritt. Forskjellen mellom en lønnsom flip og et tapsprosjekt ligger i planlegging, budsjettkontroll og kunnskap om hva som faktisk øker boligverdien.
      </p>
      <p>
        Typisk oppussingskostnad ved flipping er <strong>5 000-20 000 kr per m²</strong>, men det viktige er ikke bare hva oppussingen koster — det er hva den gir tilbake i økt salgsverdi.
      </p>

      <h2>Grunnregel: Kjøpsprisen avgjør alt</h2>
      <p>
        Den viktigste faktoren for lønnsom flipping er ikke oppussingen — det er <strong>kjøpsprisen</strong>. Du tjener penger på kjøpet, ikke på salget. En tommelfingerregel er at totalinvesteringen (kjøpspris + oppussing + kostnader) bør ligge minimum 15-20% under forventet salgsverdi for å dekke risiko, megler og uforutsette utgifter.
      </p>

      <h2>Komplett kostnadsregnskap for flipping</h2>
      <p>
        Mange nybegynnere glemmer viktige kostnadsposter utover selve oppussingen. Her er et realistisk regnestykke for en flipping av en 70 m² leilighet:
      </p>
      <div className="bg-bg-card border border-surface-border rounded-xl p-6 my-6">
        <div className="space-y-3 text-sm">
          <div className="flex justify-between"><span>Kjøpspris</span><span className="font-mono text-text-primary">3 500 000 kr</span></div>
          <div className="flex justify-between"><span>Dokumentavgift (2,5%)</span><span className="font-mono text-text-primary">87 500 kr</span></div>
          <div className="flex justify-between"><span>Oppussingskostnad</span><span className="font-mono text-text-primary">500 000 kr</span></div>
          <div className="flex justify-between"><span>Holdekostnader (lån, felleskost, forsikring, 4 mnd)</span><span className="font-mono text-text-primary">60 000 kr</span></div>
          <div className="flex justify-between"><span>Megler ved salg (1-2%)</span><span className="font-mono text-text-primary">80 000 kr</span></div>
          <div className="flex justify-between"><span>Styling og foto</span><span className="font-mono text-text-primary">25 000 kr</span></div>
          <div className="flex justify-between border-t border-surface-border pt-3 mt-3"><span className="font-semibold text-text-primary">Total investering</span><span className="font-mono text-text-primary font-semibold">4 252 500 kr</span></div>
          <div className="flex justify-between"><span className="font-semibold text-text-primary">Salgsverdi (mål)</span><span className="font-mono text-accent-yellow font-semibold">4 800 000 kr</span></div>
          <div className="flex justify-between"><span className="font-semibold text-accent-yellow">Brutto fortjeneste</span><span className="font-mono text-accent-yellow font-semibold">547 500 kr</span></div>
          <div className="flex justify-between"><span className="text-text-muted">Skatt på gevinst (22%)*</span><span className="font-mono text-text-muted">120 450 kr</span></div>
          <div className="flex justify-between border-t border-surface-border pt-3 mt-3"><span className="font-semibold text-accent-yellow">Netto fortjeneste etter skatt</span><span className="font-mono text-accent-yellow font-semibold">427 050 kr</span></div>
        </div>
        <p className="text-xs text-text-muted mt-4">*Gevinst ved salg av bolig du ikke har bodd i er skattepliktig. Bor du i boligen i 12+ mnd av de siste 24 mnd, er gevinsten skattefri.</p>
      </div>

      <h2>Tiltak som gir best avkastning</h2>
      <p>
        Ikke alle oppussingstiltak gir lik verdiøkning. Her er en rangering basert på typisk avkastning i det norske markedet:
      </p>
      <div className="bg-bg-card border border-surface-border rounded-xl p-6 my-6">
        <div className="space-y-4 text-sm">
          <div className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-accent-yellow/20 text-accent-yellow flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">1</span>
            <div><p className="font-semibold text-text-primary">Maling og overflater</p><p className="text-text-secondary">Kostnad: 15 000-40 000 kr. Avkastning: svært høy. Gir inntrykk av ny bolig til lav kostnad. Bruk lyse, nøytrale farger.</p></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-accent-yellow/20 text-accent-yellow flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">2</span>
            <div><p className="font-semibold text-text-primary">Nytt gulv</p><p className="text-text-secondary">Kostnad: 30 000-80 000 kr. Avkastning: høy. Parkett eller eikefinér gir mest verdiøkning. Unngå billig laminat.</p></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-accent-yellow/20 text-accent-yellow flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">3</span>
            <div><p className="font-semibold text-text-primary">Kjøkken-oppgradering</p><p className="text-text-secondary">Kostnad: 50 000-200 000 kr. Avkastning: middels til høy. Nye fronter og benkeplate kan være nok — du trenger ikke nødvendigvis helt nytt kjøkken.</p></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-accent-amber/20 text-accent-amber flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">4</span>
            <div><p className="font-semibold text-text-primary">Baderomsrenovering</p><p className="text-text-secondary">Kostnad: 200 000-450 000 kr. Avkastning: middels. Viktig for salg, men dyrt. Vurder om overflateoppdatering (fuging, maling, nytt tilbehør) holder i stedet for full renovering.</p></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-steel-500/20 text-steel-400 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">5</span>
            <div><p className="font-semibold text-text-primary">Planløsningsendring</p><p className="text-text-secondary">Kostnad: 50 000-150 000 kr per vegg. Avkastning: varierer. Åpen kjøkken/stue-løsning er populært og kan gi god effekt, men kostnaden er høy hvis bærende vegger må fjernes.</p></div>
          </div>
        </div>
      </div>

      <h2>Skatteoptimalisering</h2>
      <p>
        I Norge er boliggevinst skattefri hvis du har bodd i boligen i minst <strong>12 av de siste 24 månedene</strong>. For flippeprosjekter betyr dette at du kan spare 22% skatt på gevinsten ved å bo i boligen under oppussingen. Ulempen er at det binder opp tid.
      </p>
      <p>
        Hvis du flipper som næring (flere prosjekter per år), kan skattemyndighetene klassifisere det som næringsvirksomhet. Da betaler du inntektsskatt (opptil 47,4%) i stedet for kapitalskatt (22%). Konsulter en regnskapsfører hvis du planlegger flere flips.
      </p>

      <h2>Vanlige feil ved flipping</h2>
      <ul>
        <li><strong>Overinvestering:</strong> Å pusse opp til en høyere standard enn hva nabolaget tilsier. En luksuriøs oppussing i et budsjettområde gir ikke tilbake investeringen.</li>
        <li><strong>Undervurdering av tid:</strong> Flipping tar lengre tid enn planlagt. Hver ekstra måned koster holdekostnader (lån, forsikring, felleskostnader).</li>
        <li><strong>Manglende budsjett for styling og salg:</strong> Profesjonell styling og foto kan øke salgsprisen med 5-10%. Det koster 15 000-30 000 kr men lønner seg nesten alltid.</li>
        <li><strong>Emosjonelle valg:</strong> Flipping handler om å lage en bolig andre vil kjøpe, ikke din drømmebolig. Hold deg til nøytrale, tidsriktige valg.</li>
      </ul>

      <p>
        Les også <Link href="/oppussing-for-salg" className="text-accent-yellow hover:underline">oppussing før salg — hva lønner seg</Link> og <Link href="/oppussing" className="text-accent-yellow hover:underline">generelle oppussingspriser</Link>.
      </p>
    </>
  );
}
