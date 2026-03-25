import Link from "next/link";

export function HytteContent() {
  return (
    <>
      <h2>Komplett guide til hyttebygging i Norge</h2>
      <p>
        Norge er et hytteland. Over 450 000 fritidsboliger er registrert i landet, og hvert år bygges det tusenvis av nye. Drømmen om egen hytte på fjellet eller ved sjøen er sterk, men prisen kan variere enormt. Fra en enkel anneks-hytte til 500 000 kr til en arkitekttegnet fjellhytte til mange millioner — prisspekteret er bredt.
      </p>
      <p>
        Gjennomsnittsprisen for hyttebygging i Norge ligger på <strong>35 000 kr per m²</strong> med normal standard. For en hytte på 80 m² betyr det ca. 2,8 millioner kroner for selve hytten, pluss tomt, grunnarbeid og infrastruktur.
      </p>

      <h2>Hva bestemmer prisen på en hytte?</h2>
      <p>
        Hyttebygging har noen unike kostnadsdrivere sammenlignet med å bygge bolig:
      </p>
      <ul>
        <li><strong>Beliggenhet og tilgjengelighet:</strong> Transport av materialer til utilgjengelige tomter kan koste 100 000-300 000 kr ekstra. Helikoptertransport er ikke uvanlig i fjellet.</li>
        <li><strong>Infrastruktur:</strong> Strøm, vann og avløp er ikke alltid tilgjengelig. Boring av brønn koster 80 000-200 000 kr. Biotoalett og solceller er rimeligere alternativer.</li>
        <li><strong>Sesong:</strong> Kort byggeseson i fjellet (mai-oktober) kan presse opp prisene. Lange vintre betyr byggestopp.</li>
        <li><strong>Reguleringsplan:</strong> Mange hytteområder har strenge regler for maks størrelse, utforming, takvinkel og materialbruk.</li>
      </ul>

      <h2>Ferdighytte vs arkitekttegnet</h2>
      <div className="bg-bg-card border border-surface-border rounded-xl p-6 my-6">
        <div className="grid sm:grid-cols-2 gap-6 text-sm">
          <div>
            <p className="font-semibold text-accent-yellow mb-3">Ferdighytte (katalog)</p>
            <p>Typisk pris: <strong>20 000-35 000 kr/m²</strong></p>
            <p className="mt-2">Forhåndsdesignet og fabrikprodusert. Kortere leveringstid (3-6 mnd), lavere pris, forutsigbar kostnad. De store produsentene (Nordbohus, Saltdalshytta, Mesterhus, BoligPartner) har hundrevis av modeller. Kan tilpasses innenfor rammer.</p>
          </div>
          <div>
            <p className="font-semibold text-text-primary mb-3">Arkitekttegnet</p>
            <p>Typisk pris: <strong>35 000-55 000 kr/m²</strong></p>
            <p className="mt-2">Unik design tilpasset tomten og dine ønsker. Lengre prosess (6-12 mnd), høyere pris, men resultat som kan bli spektakulært. Arkitekthonoraret utgjør typisk 8-12% av byggekostnaden. Best for unike tomter med utsikt.</p>
          </div>
        </div>
      </div>

      <h2>Typisk kostnadsfordeling for hytte på 80 m²</h2>
      <div className="bg-bg-card border border-surface-border rounded-xl p-6 my-6">
        <div className="space-y-3 text-sm">
          <div className="flex justify-between"><span>Hyttepakke/råbygg</span><span className="font-mono text-text-primary">1 200 000 – 2 500 000 kr</span></div>
          <div className="flex justify-between"><span>Grunnarbeid og fundament</span><span className="font-mono text-text-primary">150 000 – 400 000 kr</span></div>
          <div className="flex justify-between"><span>VVS og rørlegger</span><span className="font-mono text-text-primary">100 000 – 250 000 kr</span></div>
          <div className="flex justify-between"><span>Elektro</span><span className="font-mono text-text-primary">80 000 – 180 000 kr</span></div>
          <div className="flex justify-between"><span>Innredning (kjøkken, bad)</span><span className="font-mono text-text-primary">150 000 – 400 000 kr</span></div>
          <div className="flex justify-between"><span>Infrastruktur (vei, vann, strøm)</span><span className="font-mono text-text-primary">100 000 – 500 000 kr</span></div>
          <div className="flex justify-between"><span>Utendørs (terrasse, sti)</span><span className="font-mono text-text-primary">50 000 – 200 000 kr</span></div>
          <div className="flex justify-between border-t border-surface-border pt-3 mt-3"><span className="font-semibold text-text-primary">Buffer (10-15%)</span><span className="font-mono text-accent-yellow font-semibold">200 000 – 400 000 kr</span></div>
        </div>
      </div>

      <h2>Off-grid hytte — et rimeligere alternativ</h2>
      <p>
        En off-grid hytte uten tilkobling til strømnett og kommunalt vann/avløp kan spare deg for <strong>200 000-500 000 kr</strong> i infrastrukturkostnader. Moderne solcellepaneler (40 000-100 000 kr), batteripakker og biotoalett gjør dette til et realistisk alternativ. Mange hytteeiendommer i fjellet har ikke tilgang til offentlig infrastruktur uansett.
      </p>

      <h2>Helårsbruk vs sesongbruk</h2>
      <p>
        Isolasjonsgraden er den største prisforskjellen mellom en sesong- og helårshytte. En helårshytte bygges etter TEK17-krav med full isolasjon, noe som øker kostnaden med 10-20% sammenlignet med en enklere sesonghytte. Til gjengjeld får du en hytte du kan bruke hele året og som holder på varmen.
      </p>
      <p>
        Vurder om du realistisk vil bruke hytten om vinteren. Hvis ja, er merkostnaden for helårsisolasjon en god investering. Hvis du primært bruker hytten om sommeren, kan du spare penger med enklere isolasjon.
      </p>

      <p>
        Se også <Link href="/bygge-hus" className="text-accent-yellow hover:underline">hva det koster å bygge hus</Link> og <Link href="/garasje" className="text-accent-yellow hover:underline">garasjepriser</Link>.
      </p>
    </>
  );
}
