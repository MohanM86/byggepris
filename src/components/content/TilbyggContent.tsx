import Link from "next/link";

export function TilbyggContent() {
  return (
    <>
      <h2>Alt du trenger å vite om tilbygg i Norge</h2>
      <p>
        Et tilbygg er den vanligste måten å utvide boligen uten å flytte. I stedet for å selge og kjøpe nytt, bygger du ut — enten i bredden, i lengden eller oppover med påbygg. Tilbygg er populært fordi du beholder tomten, beliggenheten og nabolaget, samtidig som du får den plassen familien trenger.
      </p>
      <p>
        Prisen for tilbygg er typisk <strong>høyere per m² enn nybygg</strong> fordi arbeidet er mer komplekst. Du må tilpasse deg eksisterende konstruksjon, koble til eksisterende tak, fundament og tekniske anlegg. Til gjengjeld slipper du tomtekjøp og får mer boligareal på kort tid.
      </p>

      <h2>Typiske tilbyggprosjekter og hva de koster</h2>
      <div className="bg-bg-card border border-surface-border rounded-xl p-6 my-6">
        <div className="space-y-5 text-sm">
          <div>
            <p className="font-semibold text-text-primary mb-1">Stue-utvidelse (15-25 m²)</p>
            <p>Det enkleste tilbygget. Utvider stuen eller oppholddsarealet. Typisk kostnad: <strong>550 000-1 200 000 kr</strong>. Relativt enkelt grunnarbeid, standard tak og vegger. Ingen våtrom.</p>
          </div>
          <div className="border-t border-surface-border pt-5">
            <p className="font-semibold text-text-primary mb-1">Tilbygg med soverom og bad (25-40 m²)</p>
            <p>Inkluderer nytt soverom og bad. Typisk kostnad: <strong>1 000 000-2 500 000 kr</strong>. Dyrere fordi våtrom krever rørlegger, membranarbeid og mer kompleks VVS-tilkobling.</p>
          </div>
          <div className="border-t border-surface-border pt-5">
            <p className="font-semibold text-text-primary mb-1">Påbygg (ny etasje)</p>
            <p>Bygge ny etasje oppå eksisterende bolig. Typisk kostnad: <strong>35 000-70 000 kr per m²</strong>. Krever ofte forsterkning av bærende konstruksjon og nytt tak. Mest komplekst og dyrest per m².</p>
          </div>
          <div className="border-t border-surface-border pt-5">
            <p className="font-semibold text-text-primary mb-1">Utbygging av kjeller</p>
            <p>Gjøre kjeller om til boareal. Typisk kostnad: <strong>15 000-35 000 kr per m²</strong>. Krever drenering, fuktsikring, lysgraver og brannkrav. Ofte rimeligere enn tilbygg i bredden.</p>
          </div>
        </div>
      </div>

      <h2>Kostnadsfordeling for et typisk tilbygg</h2>
      <p>
        For et standard tilbygg på 30 m² uten våtrom (ca. 1,2 mill. kr totalt) fordeler kostnadene seg omtrent slik:
      </p>
      <div className="bg-bg-card border border-surface-border rounded-xl p-6 my-6">
        <div className="space-y-3 text-sm">
          <div className="flex justify-between"><span>Grunnarbeid og fundamentering</span><span className="font-mono text-text-primary">150 000 – 250 000 kr</span></div>
          <div className="flex justify-between"><span>Råbygg (vegger, bjelkelag)</span><span className="font-mono text-text-primary">200 000 – 350 000 kr</span></div>
          <div className="flex justify-between"><span>Tak og tilkobling til eksisterende</span><span className="font-mono text-text-primary">100 000 – 200 000 kr</span></div>
          <div className="flex justify-between"><span>Vinduer og dør</span><span className="font-mono text-text-primary">50 000 – 120 000 kr</span></div>
          <div className="flex justify-between"><span>Innvendig (gulv, vegger, tak, lister)</span><span className="font-mono text-text-primary">80 000 – 180 000 kr</span></div>
          <div className="flex justify-between"><span>Elektro</span><span className="font-mono text-text-primary">30 000 – 60 000 kr</span></div>
          <div className="flex justify-between"><span>Prosjektering og byggesøknad</span><span className="font-mono text-text-primary">50 000 – 100 000 kr</span></div>
          <div className="flex justify-between border-t border-surface-border pt-3 mt-3"><span className="font-semibold text-text-primary">Buffer (10-15%)</span><span className="font-mono text-accent-yellow font-semibold">100 000 – 180 000 kr</span></div>
        </div>
      </div>

      <h2>Byggesøknad og regulering</h2>
      <p>
        De aller fleste tilbygg krever byggesøknad. Regelverket er slik:
      </p>
      <ul>
        <li><strong>Under 15 m²:</strong> Kan i noen tilfeller meldes som tiltak uten ansvarsrett, men det er strenge krav til avstand fra nabogrense (min. 4 meter) og utnyttelsesgrad.</li>
        <li><strong>15-50 m²:</strong> Krever normalt søknad med ansvarsrett. Du trenger ansvarlig søker (arkitekt eller bygningskonsulent).</li>
        <li><strong>Over 50 m²:</strong> Full byggesøknad med komplett prosjektering.</li>
      </ul>
      <p>
        Behandlingstid for byggesøknad er typisk <strong>3-12 uker</strong> hos kommunen. Sjekk reguleringsplanen for din eiendom — den bestemmer maks utnyttelsesgrad, byggehøyde og avstand til nabogrense.
      </p>

      <h2>Tilbygg og boligverdi</h2>
      <p>
        Et tilbygg øker som regel boligverdien, men ikke alltid krone for krone. Tommelfingerregelen er at du får tilbake <strong>60-80% av investeringen</strong> i økt boligverdi, avhengig av beliggenhet og kvalitet. I attraktive områder med høye m²-priser kan avkastningen være bedre.
      </p>
      <p>
        De tilbyggene som gir best verdiøkning er de som løser et reelt plassbehov — for eksempel ekstra soverom i en familiebolig eller nytt bad i en bolig med bare ett.
      </p>

      <h2>Takløsning er en stor kostnadsdriver</h2>
      <p>
        Hvordan tilbyggets tak kobles til eksisterende tak er ofte den mest kompliserte og dyreste delen av prosjektet. Et <strong>pulttak</strong> (ensidig fall) er enklest og billigst. Saltak som skal møte eksisterende tak krever mer arbeid. Flattak kan fungere estetisk, men krever god membranløsning for å unngå lekkasjer.
      </p>
      <p>
        Velg en takløsning som harmonerer med eksisterende hus uten å bli for kompleks. Enkle takformer kan spare 50 000-150 000 kr sammenlignet med avanserte løsninger.
      </p>

      <p>
        Se også <Link href="/bygge-hus" className="text-accent-yellow hover:underline">hva det koster å bygge nytt hus</Link> og <Link href="/garasje" className="text-accent-yellow hover:underline">priser for garasjebygging</Link>.
      </p>
    </>
  );
}
