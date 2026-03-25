import Link from "next/link";

export function TotalrenoveringContent() {
  return (
    <>
      <h2>Hva innebærer en totalrenovering?</h2>
      <p>
        Totalrenovering betyr at hele boligen renoveres fra gulv til tak. Alt rives ned til rå konstruksjon, og bygges opp på nytt med nye rør, nye elektriske anlegg, nye overflater, nytt bad, nytt kjøkken og ofte ny planløsning. Det er det mest omfattende renoveringsprosjektet du kan gjennomføre, og det nærmeste du kommer et nybygg uten å rive hele huset.
      </p>
      <p>
        I Norge koster totalrenovering typisk <strong>15 000-40 000 kr per m²</strong>. For en bolig på 100-120 m² betyr det en totalinvestering på 1,5-4,8 millioner kroner. Prisforskjellen mellom laveste og høyeste estimat handler primært om standard, boligens alder og hvor mye av den eksisterende konstruksjonen som må forsterkes eller erstattes.
      </p>

      <h2>Når lønner det seg å totalrenovere?</h2>
      <p>
        Totalrenovering lønner seg typisk i disse situasjonene:
      </p>
      <ul>
        <li><strong>Boligen har god beliggenhet</strong> — tomten og området er verdt mer enn bygget. Du får en &ldquo;ny&rdquo; bolig i et etablert nabolag.</li>
        <li><strong>Grunnstrukturen er solid</strong> — bærekonstruksjon, fundament og tomt er i god stand. Det er overflater og tekniske anlegg som er utdaterte.</li>
        <li><strong>Reguleringsplanen begrenser nybygg</strong> — i noen områder er det vanskelig å få tillatelse til riving og nybygg, men renovering er uproblematisk.</li>
        <li><strong>Kostnaden er under 70% av nybyggpris</strong> — som en tommelfingerregel bør totalrenoveringen koste vesentlig mindre enn å bygge tilsvarende bolig fra scratch.</li>
      </ul>

      <h2>Steg-for-steg prosess</h2>
      <div className="bg-bg-card border border-surface-border rounded-xl p-6 my-6">
        <div className="space-y-4 text-sm">
          <div className="flex gap-4"><span className="font-mono text-accent-yellow w-8 flex-shrink-0 font-bold">1</span><div><p className="font-semibold text-text-primary">Tilstandsrapport og planlegging</p><p className="text-text-secondary mt-1">Få en grundig gjennomgang av boligens tilstand. Identifiser hva som må gjøres vs. hva som er ønskelig. Engasjer arkitekt for ny planløsning. <strong>Kostnad: 30 000-80 000 kr.</strong></p></div></div>
          <div className="flex gap-4 border-t border-surface-border pt-4"><span className="font-mono text-accent-yellow w-8 flex-shrink-0 font-bold">2</span><div><p className="font-semibold text-text-primary">Byggesøknad (hvis planløsningen endres)</p><p className="text-text-secondary mt-1">Endring av bærende vegger, nytt våtrom eller endret bruk krever ofte søknad. <strong>Kostnad: 20 000-60 000 kr. Tid: 4-12 uker.</strong></p></div></div>
          <div className="flex gap-4 border-t border-surface-border pt-4"><span className="font-mono text-accent-yellow w-8 flex-shrink-0 font-bold">3</span><div><p className="font-semibold text-text-primary">Riving og stripning</p><p className="text-text-secondary mt-1">Alt rives ned til bærekonstruksjon. Avfall sorteres og kjøres bort. Her avdekkes ofte skjulte problemer. <strong>Kostnad: 50 000-150 000 kr.</strong></p></div></div>
          <div className="flex gap-4 border-t border-surface-border pt-4"><span className="font-mono text-accent-yellow w-8 flex-shrink-0 font-bold">4</span><div><p className="font-semibold text-text-primary">Konstruksjonsarbeid</p><p className="text-text-secondary mt-1">Forsterkning, nye bærebjelker, isolasjon, dampsperre, gipsing. <strong>Kostnad: 100 000-400 000 kr.</strong></p></div></div>
          <div className="flex gap-4 border-t border-surface-border pt-4"><span className="font-mono text-accent-yellow w-8 flex-shrink-0 font-bold">5</span><div><p className="font-semibold text-text-primary">VVS og elektro</p><p className="text-text-secondary mt-1">Nye rør, nye elektriske kurser, ny sikringstavle, ventilasjon. <strong>Kostnad: 200 000-500 000 kr.</strong></p></div></div>
          <div className="flex gap-4 border-t border-surface-border pt-4"><span className="font-mono text-accent-yellow w-8 flex-shrink-0 font-bold">6</span><div><p className="font-semibold text-text-primary">Innvendig ferdigstillelse</p><p className="text-text-secondary mt-1">Bad, kjøkken, gulv, maling, lister, dører, belysning. Den mest synlige og ofte dyreste fasen. <strong>Kostnad: 500 000-2 000 000 kr.</strong></p></div></div>
        </div>
      </div>

      <h2>Totalrenovering vs. nybygg — en realistisk sammenligning</h2>
      <div className="bg-bg-card border border-surface-border rounded-xl p-6 my-6">
        <div className="grid sm:grid-cols-2 gap-6 text-sm">
          <div>
            <p className="font-semibold text-accent-yellow mb-3">Totalrenovering</p>
            <div className="space-y-2">
              <p>Typisk m²-pris: <strong>15 000-40 000 kr</strong></p>
              <p>Beholder beliggenhet og tomt</p>
              <p>Raskere enn nybygg (3-7 mnd)</p>
              <p>Mulige skjulte problemer</p>
              <p>Begrenset av eksisterende struktur</p>
              <p>Ofte enklere byggesøknad</p>
            </div>
          </div>
          <div>
            <p className="font-semibold text-text-primary mb-3">Nybygg</p>
            <div className="space-y-2">
              <p>Typisk m²-pris: <strong>30 000-55 000 kr</strong></p>
              <p>Full designfrihet</p>
              <p>Lengre prosess (12-18 mnd)</p>
              <p>Forutsigbare kostnader</p>
              <p>Nye energikrav (TEK17)</p>
              <p>Krever riving + full søknadsprosess</p>
            </div>
          </div>
        </div>
      </div>
      <p>
        Les mer i vår detaljerte sammenligning: <Link href="/bygge-nytt-vs-pusse-opp" className="text-accent-yellow hover:underline">Bygge nytt vs pusse opp — hva lønner seg?</Link>
      </p>

      <h2>Skjulte overraskelser ved totalrenovering</h2>
      <p>
        Den største risikoen ved totalrenovering er det du finner når du river. Vanlige overraskelser i norske boliger inkluderer:
      </p>
      <ul>
        <li><strong>Fuktskader i bærende konstruksjon</strong> — spesielt i boliger fra 60- og 70-tallet med dårlig dampsperre. Utbedring: 50 000-200 000 kr.</li>
        <li><strong>Asbest i gulvbelegg, flislim eller rørmansjetter</strong> — krever spesialsanering. Kostnad: 30 000-100 000 kr avhengig av omfang.</li>
        <li><strong>Underdimensjonert elektrisk anlegg</strong> — eldre anlegg med skrusikringer må som regel byttes komplett. Kostnad: 80 000-200 000 kr.</li>
        <li><strong>Setningsskader eller svakt fundament</strong> — kan kreve omfattende forsterkning. Kostnad: 100 000+ kr.</li>
        <li><strong>Bærende vegger der du ville ha åpen løsning</strong> — stålbjelke og forsterkning. Kostnad: 30 000-80 000 kr per vegg.</li>
      </ul>
      <p>
        Derfor anbefaler vi alltid <strong>minimum 15% buffer</strong> i budsjettet for totalrenovering. For eldre boliger (pre-1970) bør bufferen gjerne være 20%.
      </p>

      <p>
        Se også <Link href="/oppussing" className="text-accent-yellow hover:underline">generelle oppussingspriser</Link> og <Link href="/skjulte-kostnader-ved-oppussing" className="text-accent-yellow hover:underline">skjulte kostnader du bør budsjettere for</Link>.
      </p>
    </>
  );
}
