import Link from "next/link";

export function ByggeHusContent() {
  return (
    <>
      <h2>Hva koster det egentlig å bygge hus i Norge?</h2>
      <p>
        Å bygge hus er den største investeringen de fleste nordmenn gjør i løpet av livet. I 2025 ligger gjennomsnittlig byggekostnad for en enebolig i Norge på mellom <strong>30 000 og 55 000 kr per kvadratmeter</strong>, men dette tallet alene forteller ikke hele historien. Totalprisen avhenger av en rekke faktorer som standard, beliggenhet, tomteforhold og kompleksitet.
      </p>
      <p>
        For en typisk enebolig på 150 m² med normal standard bør du regne med en totalkostnad på <strong>5 til 6,5 millioner kroner</strong> inkludert grunnarbeid, prosjektering og en fornuftig buffer. Med høy standard kan prisen raskt overstige 8 millioner.
      </p>

      <h2>Kostnadsfordeling ved husbygging</h2>
      <p>
        For å forstå hvor pengene går, er det nyttig å se på de ulike kostnadspostene i et typisk husbyggprosjekt. Her er en realistisk fordeling for en enebolig på 150 m² med normal standard:
      </p>
      <div className="bg-bg-card border border-surface-border rounded-xl p-6 my-6">
        <div className="space-y-3 text-sm">
          <div className="flex justify-between"><span>Grunnarbeid og fundamentering</span><span className="font-mono text-text-primary">350 000 – 600 000 kr</span></div>
          <div className="flex justify-between"><span>Råbygg (vegger, tak, bjelkelag)</span><span className="font-mono text-text-primary">1 200 000 – 2 000 000 kr</span></div>
          <div className="flex justify-between"><span>VVS og rørlegger</span><span className="font-mono text-text-primary">300 000 – 500 000 kr</span></div>
          <div className="flex justify-between"><span>Elektrisk installasjon</span><span className="font-mono text-text-primary">250 000 – 450 000 kr</span></div>
          <div className="flex justify-between"><span>Innvendig (kjøkken, bad, overflater)</span><span className="font-mono text-text-primary">800 000 – 1 800 000 kr</span></div>
          <div className="flex justify-between"><span>Vinduer og dører</span><span className="font-mono text-text-primary">200 000 – 500 000 kr</span></div>
          <div className="flex justify-between"><span>Prosjektering og arkitekt</span><span className="font-mono text-text-primary">250 000 – 500 000 kr</span></div>
          <div className="flex justify-between"><span>Byggesøknad og gebyrer</span><span className="font-mono text-text-primary">50 000 – 150 000 kr</span></div>
          <div className="flex justify-between"><span>Utendørs (innkjørsel, terrasse, hage)</span><span className="font-mono text-text-primary">200 000 – 600 000 kr</span></div>
          <div className="flex justify-between border-t border-surface-border pt-3 mt-3"><span className="font-semibold text-text-primary">Buffer for uforutsette kostnader (10-15%)</span><span className="font-mono text-accent-yellow font-semibold">400 000 – 700 000 kr</span></div>
        </div>
      </div>

      <h2>Ferdighus vs arkitekttegnet hus</h2>
      <p>
        Et av de viktigste valgene du tar er mellom ferdighus og arkitekttegnet hus. Forskjellen i pris er betydelig, men det handler også om fleksibilitet og personlig tilpasning.
      </p>
      <h3>Ferdighus</h3>
      <p>
        Ferdighus er forhåndsdesignet og produsert i fabrikk. Prisen er typisk <strong>15-25% lavere</strong> enn for et arkitekttegnet hus fordi produksjonen er standardisert og effektiv. Et ferdighus på 150 m² koster vanligvis 3,5-5,5 millioner kroner for selve huset, ekskludert tomt og grunnarbeid. De store ferdighusprodusentene i Norge (Block Watne, Mesterhus, Nordbohus mfl.) tilbyr ofte nøkkelferdig pakker som gir god prisforutsigbarhet.
      </p>
      <h3>Arkitekttegnet hus</h3>
      <p>
        Med arkitekttegnet hus får du full frihet til å designe etter dine ønsker og tomtens forutsetninger. Prisen er høyere, typisk <strong>35 000-55 000 kr per m²</strong> for selve bygget, pluss 5-10% for arkitekt og prosjektering. Fordelen er at du kan optimalisere for utsikt, lysforhold, energi og personlig stil. Ulempen er høyere kostnad og lengre planleggingstid.
      </p>

      <h2>Regionale prisforskjeller</h2>
      <p>
        Byggepriser varierer betydelig mellom ulike deler av Norge. De viktigste driverne er lønnskostnader for håndverkere, tilgang på arbeidskraft og lokale tomtepriser.
      </p>
      <div className="bg-bg-card border border-surface-border rounded-xl p-6 my-6">
        <div className="space-y-2 text-sm">
          <div className="flex justify-between"><span><strong>Oslo og Akershus</strong></span><span className="font-mono text-accent-yellow">+10-15% over snittet</span></div>
          <div className="flex justify-between"><span><strong>Stavanger</strong></span><span className="font-mono text-accent-amber">+5-10% over snittet</span></div>
          <div className="flex justify-between"><span><strong>Bergen og Trondheim</strong></span><span className="font-mono text-text-secondary">+3-5% over snittet</span></div>
          <div className="flex justify-between"><span><strong>Tromsø og Nord-Norge</strong></span><span className="font-mono text-accent-amber">+5-10% (transport)</span></div>
          <div className="flex justify-between"><span><strong>Sørlandet og Midt-Norge</strong></span><span className="font-mono text-steel-400">Under landssnittet</span></div>
        </div>
      </div>
      <p>
        I Oslo-regionen er det ikke uvanlig at totalkostnaden for en enebolig på 150 m² havner på 6-8 millioner kr, mens tilsvarende prosjekt i Midt-Norge kan gjennomføres for 4,5-6 millioner kr.
      </p>

      <h2>Byggetid og prosess</h2>
      <p>
        Hele prosessen fra første idé til innflytting tar typisk <strong>12-18 måneder</strong>. Selve byggefasen tar normalt 8-12 måneder, men planlegging, arkitekt og byggesøknad kan legge til 3-6 måneder i forkant. Her er en typisk tidslinje:
      </p>
      <div className="bg-bg-card border border-surface-border rounded-xl p-6 my-6">
        <div className="space-y-3 text-sm">
          <div className="flex gap-4"><span className="font-mono text-accent-yellow w-24 flex-shrink-0">Mnd 1-3</span><span>Planlegging, arkitekt og prosjektering</span></div>
          <div className="flex gap-4"><span className="font-mono text-accent-yellow w-24 flex-shrink-0">Mnd 3-5</span><span>Byggesøknad og godkjenning</span></div>
          <div className="flex gap-4"><span className="font-mono text-accent-yellow w-24 flex-shrink-0">Mnd 5-6</span><span>Grunnarbeid og fundamentering</span></div>
          <div className="flex gap-4"><span className="font-mono text-accent-yellow w-24 flex-shrink-0">Mnd 6-10</span><span>Råbygg, tak og tetting</span></div>
          <div className="flex gap-4"><span className="font-mono text-accent-yellow w-24 flex-shrink-0">Mnd 10-14</span><span>Innvendig arbeid, VVS, elektro</span></div>
          <div className="flex gap-4"><span className="font-mono text-accent-yellow w-24 flex-shrink-0">Mnd 14-16</span><span>Overflater, kjøkken, bad, maling</span></div>
          <div className="flex gap-4"><span className="font-mono text-accent-yellow w-24 flex-shrink-0">Mnd 16-18</span><span>Utendørs, sluttkontroll og innflytting</span></div>
        </div>
      </div>

      <h2>Entrepriseformer: totalentreprise vs delt entreprise</h2>
      <p>
        Valg av entrepriseform påvirker både pris, risiko og hvor mye jobb du selv må gjøre som byggherre.
      </p>
      <p>
        <strong>Totalentreprise</strong> betyr at du har én hovedentreprenør som er ansvarlig for hele prosjektet. Du får én kontaktperson, én kontrakt og mer forutsigbar pris. Ulempen er at totalentreprise typisk er 5-10% dyrere enn delt entreprise.
      </p>
      <p>
        <strong>Delt entreprise</strong> betyr at du som byggherre selv koordinerer de ulike håndverkerne (tømrer, rørlegger, elektriker osv.). Det kan gi lavere pris, men krever mer egen innsats, kompetanse og risiko. Mange som velger delt entreprise engasjerer en byggeleder for å hjelpe med koordinering.
      </p>

      <h2>Energikrav og TEK17</h2>
      <p>
        Alle nye boliger i Norge må bygges etter teknisk forskrift TEK17, som stiller strenge krav til energieffektivitet. Dette betyr tykkere isolasjon, bedre vinduer og tettere bygningskropp. Energikravene øker byggekostnaden med anslagsvis <strong>5-10% sammenlignet med eldre standarder</strong>, men gir betydelig lavere energikostnader i boligens levetid.
      </p>
      <p>
        Mange velger å bygge etter passivhus-standard eller nesten-nullenergihus, som gir enda lavere energibruk. Merkostnaden for passivhus er typisk 5-8% over TEK17-nivå.
      </p>

      <h2>Vanlige feil som øker kostnaden</h2>
      <p>
        Basert på erfaring fra norske byggeprosjekter er disse de vanligste feilene som fører til budsjettoverskridelser:
      </p>
      <ul>
        <li><strong>For liten buffer:</strong> Mange budsjetterer med bare 5% buffer. Vi anbefaler minimum 10-15% for å håndtere uforutsette forhold.</li>
        <li><strong>Endringer underveis:</strong> Hver endring etter at byggingen har startet koster typisk 2-5 ganger mer enn om den var planlagt fra start.</li>
        <li><strong>Manglende grunnundersøkelse:</strong> Dårlige grunnforhold kan legge hundretusener på fundamenteringskostnaden.</li>
        <li><strong>Undervurdering av utendørsarbeid:</strong> Innkjørsel, terrasse, hage og gjerder kan fort koste 300 000-800 000 kr.</li>
        <li><strong>Feil valg av entreprenør:</strong> Den billigste tilbudet er ikke alltid det beste. Sjekk referanser, soliditet og tidligere prosjekter grundig.</li>
      </ul>

      <p>
        Les mer om <Link href="/hva-pavirker-byggekostnad" className="text-accent-yellow hover:underline">hva som påvirker byggekostnad</Link> og <Link href="/skjulte-kostnader-ved-oppussing" className="text-accent-yellow hover:underline">skjulte kostnader</Link> du bør kjenne til.
      </p>
    </>
  );
}
