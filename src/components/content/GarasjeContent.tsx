import Link from "next/link";

export function GarasjeContent() {
  return (
    <>
      <h2>Komplett guide til garasjebygging i Norge</h2>
      <p>
        En garasje er et av de enklere byggeprosjektene for boligeiere, men prisen varierer overraskende mye basert på type, størrelse og standard. Fra en enkel carport til en isolert dobbeltgarasje med verksted — forskjellen kan være hundretusener av kroner.
      </p>
      <p>
        I Norge koster en ny garasje typisk <strong>15 000-35 000 kr per m²</strong>. En standard enkeltgarasje på 25 m² koster 375 000-875 000 kr, mens en dobbeltgarasje på 40-50 m² havner på 600 000-1 750 000 kr.
      </p>

      <h2>Garasjetyper og prisforskjeller</h2>
      <div className="bg-bg-card border border-surface-border rounded-xl p-6 my-6">
        <div className="space-y-5 text-sm">
          <div>
            <p className="font-semibold text-text-primary mb-1">Carport (åpen)</p>
            <p>Enkleste løsningen — tak og stolper, ingen vegger. Typisk pris: <strong>80 000-200 000 kr</strong>. Beskytter mot nedbør men ikke mot kulde eller tyveri. Krever sjelden byggesøknad under 50 m².</p>
          </div>
          <div className="border-t border-surface-border pt-5">
            <p className="font-semibold text-text-primary mb-1">Uisolert garasje (tre eller stål)</p>
            <p>Enkel konstruksjon med vegger og port. Typisk pris: <strong>200 000-500 000 kr</strong> for enkeltgarasje. Billigste alternativ for innelåst biloppbevaring. Ikke egnet for opphold i kulde.</p>
          </div>
          <div className="border-t border-surface-border pt-5">
            <p className="font-semibold text-text-primary mb-1">Isolert garasje</p>
            <p>Isolerte vegger, tak og port. Typisk pris: <strong>400 000-900 000 kr</strong> for enkeltgarasje. Kan brukes som verksted hele året. Eventuelt med varmekabler i gulv.</p>
          </div>
          <div className="border-t border-surface-border pt-5">
            <p className="font-semibold text-text-primary mb-1">Murgarasje</p>
            <p>Lecablock eller teglstein. Typisk pris: <strong>500 000-1 200 000 kr</strong> for enkeltgarasje. Brannmotstand, holdbarhet og støydemping. Dyrere men varer lengre.</p>
          </div>
          <div className="border-t border-surface-border pt-5">
            <p className="font-semibold text-text-primary mb-1">Dobbeltgarasje med ekstra rom</p>
            <p>To bilplasser pluss verksted, bod eller hobbyrom. Typisk pris: <strong>800 000-1 800 000 kr</strong>. Mest verdi for pengene fordi kostnad per m² faller med størrelse.</p>
          </div>
        </div>
      </div>

      <h2>Ferdiggarasje vs stedsbygd</h2>
      <p>
        En <strong>ferdiggarasje</strong> er fabrikprodusert og leveres som elementer eller komplett modul. Prisen er typisk 20-30% lavere enn stedsbygd, og monteringen tar bare 1-3 dager. De største leverandørene i Norge (Hellvik Hus, Garasjen.no, Norske Hus mfl.) har et bredt utvalg med tilpasningsmuligheter.
      </p>
      <p>
        En <strong>stedsbygd garasje</strong> gir full designfrihet og kan tilpasses tomtens form, eksisterende bebyggelse og lokale regler. Prosessen tar 3-8 uker og koster mer, men resultatet kan bli mer helhetlig med resten av eiendommen.
      </p>

      <h2>Byggesøknad og regelverk</h2>
      <p>
        For frittliggende garasjer gjelder følgende hovedregler:
      </p>
      <ul>
        <li><strong>Under 50 m², mønehøyde under 4 m:</strong> Kan bygges uten søknad, men må meldes til kommunen. Krav til avstand fra nabogrense (min. 1 meter for ikke-søknadspliktige, min. 4 meter ellers).</li>
        <li><strong>Nærmere enn 1 meter fra nabogrense:</strong> Krever alltid søknad og nabosamtykke.</li>
        <li><strong>Over 50 m²:</strong> Full byggesøknad med ansvarsrett.</li>
        <li><strong>Integrert garasje:</strong> Behandles som del av boligen og krever byggesøknad.</li>
      </ul>
      <p>
        Sjekk alltid reguleringsplanen og kontakt kommunen ved tvil. Å bygge uten tillatelse kan føre til rivingspålegg.
      </p>

      <h2>Garasjeport — en viktig prispost</h2>
      <p>
        Garasjeporten utgjør ofte 10-20% av totalbudsjettet og påvirker daglig bruk. De vanligste typene:
      </p>
      <ul>
        <li><strong>Vippeport:</strong> Enklest og rimeligst, 8 000-15 000 kr. Ulempen er at den stikker ut når den åpnes.</li>
        <li><strong>Seksjonalport:</strong> Kjører opp under taket, 15 000-35 000 kr. Mest populært valg. Tar ikke plass foran garasjen.</li>
        <li><strong>Sidehengslet:</strong> Tradisjonelt utseende, 10 000-25 000 kr. Krever plass til å svinge ut.</li>
        <li><strong>Portmotor:</strong> Tillegg 5 000-10 000 kr. Anbefales for daglig bruk — du slipper å gå ut av bilen.</li>
      </ul>

      <p>
        Se også <Link href="/bygge-hus" className="text-accent-yellow hover:underline">hva det koster å bygge hus</Link> og <Link href="/tilbygg" className="text-accent-yellow hover:underline">priser for tilbygg</Link>.
      </p>
    </>
  );
}
