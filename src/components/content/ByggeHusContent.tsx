import Link from "next/link";

export function ByggeHusContent() {
  return (
    <>
      <h2>Hva koster det egentlig å bygge hus i Norge i 2026?</h2>
      <p>
        Å bygge hus er den største investeringen de fleste nordmenn gjør i løpet av livet. I 2026 ligger gjennomsnittlig byggekostnad for en enebolig i Norge på mellom <strong>30 000 og 55 000 kr per kvadratmeter</strong>, men dette tallet alene forteller ikke hele historien. Totalprisen avhenger av en rekke faktorer som standard, beliggenhet, tomteforhold og kompleksitet.
      </p>
      <p>
        For å gi et klarere bilde: et hus på 100 m² med normal standard koster ca. 3,5-4,5 millioner kr. Et hus på 150 m² havner på 5-6,5 millioner kr. Og et romslig hus på 200 m² kan koste 7-11 millioner kr. Alle priser inkluderer grunnarbeid, prosjektering og en fornuftig buffer.
      </p>

      <h2>Priseksempler etter størrelse</h2>
      <p>
        Her er realistiske totalbudsjett for ulike husstørrelser med normal standard, inkludert grunnarbeid, prosjektering og 10% buffer:
      </p>
      <div className="bg-bg-card border border-surface-border rounded-xl overflow-hidden my-6">
        <table className="w-full text-sm">
          <thead><tr className="text-left text-xs text-text-muted uppercase tracking-wider border-b border-surface-border"><th className="px-5 py-3">Størrelse</th><th className="px-5 py-3">Enkel standard</th><th className="px-5 py-3">Normal standard</th><th className="px-5 py-3">Høy standard</th></tr></thead>
          <tbody className="divide-y divide-surface-border">
            <tr><td className="px-5 py-3 text-text-primary font-medium">80 m²</td><td className="px-5 py-3 font-mono text-text-secondary">2,2 – 2,8 mill.</td><td className="px-5 py-3 font-mono text-accent-yellow">2,8 – 3,5 mill.</td><td className="px-5 py-3 font-mono text-text-secondary">3,8 – 4,8 mill.</td></tr>
            <tr><td className="px-5 py-3 text-text-primary font-medium">100 m²</td><td className="px-5 py-3 font-mono text-text-secondary">2,8 – 3,5 mill.</td><td className="px-5 py-3 font-mono text-accent-yellow">3,5 – 4,5 mill.</td><td className="px-5 py-3 font-mono text-text-secondary">4,8 – 6,0 mill.</td></tr>
            <tr><td className="px-5 py-3 text-text-primary font-medium">120 m²</td><td className="px-5 py-3 font-mono text-text-secondary">3,3 – 4,2 mill.</td><td className="px-5 py-3 font-mono text-accent-yellow">4,2 – 5,4 mill.</td><td className="px-5 py-3 font-mono text-text-secondary">5,7 – 7,2 mill.</td></tr>
            <tr><td className="px-5 py-3 text-text-primary font-medium">150 m²</td><td className="px-5 py-3 font-mono text-text-secondary">4,1 – 5,3 mill.</td><td className="px-5 py-3 font-mono text-accent-yellow">5,3 – 6,8 mill.</td><td className="px-5 py-3 font-mono text-text-secondary">7,2 – 9,0 mill.</td></tr>
            <tr><td className="px-5 py-3 text-text-primary font-medium">200 m²</td><td className="px-5 py-3 font-mono text-text-secondary">5,5 – 7,0 mill.</td><td className="px-5 py-3 font-mono text-accent-yellow">7,0 – 9,0 mill.</td><td className="px-5 py-3 font-mono text-text-secondary">9,5 – 12,0 mill.</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Detaljert kostnadsfordeling</h2>
      <p>
        For å forstå hvor pengene faktisk går, er det nyttig å se på fordelingen i et typisk husbyggprosjekt. Her er et realistisk eksempel for en enebolig på 150 m² med normal standard:
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
          <div className="flex justify-between border-t border-surface-border pt-3 mt-3"><span className="font-semibold text-accent-amber">Buffer for uforutsette kostnader (10-15%)</span><span className="font-mono text-accent-yellow font-semibold">400 000 – 700 000 kr</span></div>
        </div>
      </div>

      <h2>Ferdighus vs arkitekttegnet hus</h2>
      <p>
        Et av de viktigste valgene du tar er mellom ferdighus og arkitekttegnet hus. Forskjellen i pris er betydelig:
      </p>
      <div className="bg-bg-card border border-surface-border rounded-xl p-6 my-6">
        <div className="grid sm:grid-cols-2 gap-6 text-sm">
          <div>
            <p className="font-semibold text-accent-yellow mb-2">Ferdighus</p>
            <p><strong className="text-text-primary">Pris:</strong> 25 000-40 000 kr/m²</p>
            <p><strong className="text-text-primary">Byggetid:</strong> 4-8 måneder</p>
            <p><strong className="text-text-primary">Sparepotensial:</strong> 15-25% vs arkitekttegnet</p>
            <p className="mt-2 text-text-secondary">Forhåndsdesignet og fabrikprodusert. Rask leveranse, velprøvde løsninger, forutsigbar pris. De store produsentene (Block Watne, Mesterhus, Nordbohus) tilbyr nøkkelferdig pakker. Best for de som vil ha god kvalitet uten å designe alt selv.</p>
          </div>
          <div>
            <p className="font-semibold text-text-primary mb-2">Arkitekttegnet</p>
            <p><strong className="text-text-primary">Pris:</strong> 35 000-55 000+ kr/m²</p>
            <p><strong className="text-text-primary">Byggetid:</strong> 8-14 måneder (+ planlegging)</p>
            <p><strong className="text-text-primary">Merkostnad:</strong> 15-25% vs ferdighus</p>
            <p className="mt-2 text-text-secondary">Full designfrihet tilpasset tomten og dine ønsker. Optimalt for utsikt, lysforhold og personlig stil. Høyere pris og lengre prosess, men unikt resultat. Best for krevende tomter og spesielle ønsker.</p>
          </div>
        </div>
      </div>

      <h2>Hva koster grunnarbeid til hus?</h2>
      <p>
        Grunnarbeidet er en av de mest uforutsigbare kostnadspostene. Det du finner i bakken bestemmer prisen, og det vet du ikke sikkert før du graver. Typiske kostnader:
      </p>
      <div className="bg-bg-card border border-surface-border rounded-xl p-6 my-6">
        <div className="space-y-3 text-sm">
          <div className="flex justify-between"><span>Geoteknisk undersøkelse</span><span className="font-mono text-text-primary">10 000 – 30 000 kr</span></div>
          <div className="flex justify-between"><span>Graving og planering</span><span className="font-mono text-text-primary">50 000 – 150 000 kr</span></div>
          <div className="flex justify-between"><span>Grunnmur (100 m²)</span><span className="font-mono text-text-primary">200 000 – 400 000 kr</span></div>
          <div className="flex justify-between"><span>Drenering</span><span className="font-mono text-text-primary">50 000 – 100 000 kr</span></div>
          <div className="flex justify-between"><span>Tilkobling vann og avløp</span><span className="font-mono text-text-primary">30 000 – 100 000 kr</span></div>
          <div className="flex justify-between"><span>Sprengning (hvis fjell)</span><span className="font-mono text-accent-amber">100 000 – 400 000 kr</span></div>
          <div className="flex justify-between"><span>Pæling (hvis kvikkleire)</span><span className="font-mono text-accent-amber">200 000 – 800 000 kr</span></div>
        </div>
      </div>
      <p>
        En grunnmur på 100 m² koster typisk 200 000-400 000 kr. Plate-på-mark (uten kjeller) er billigst, mens full kjeller kan koste 200 000-500 000 kr ekstra. Vi anbefaler alltid en geoteknisk undersøkelse før byggestart — det er den beste investeringen du gjør for å unngå overraskelser.
      </p>

      <h2>Egenkapital og byggelån</h2>
      <p>
        For å bygge hus trenger du et <strong>byggelån</strong>, som er et midlertidig lån som konverteres til vanlig boliglån når huset er ferdig. Her er det du trenger å vite:
      </p>
      <div className="bg-bg-card border border-surface-border rounded-xl p-6 my-6">
        <div className="space-y-3 text-sm">
          <div className="flex justify-between"><span>Egenkapitalkrav</span><span className="font-mono text-text-primary">15% av total prosjektkostnad</span></div>
          <div className="flex justify-between"><span>Egenkapital på 4 mill. prosjekt</span><span className="font-mono text-accent-yellow">600 000 kr</span></div>
          <div className="flex justify-between"><span>Egenkapital på 5 mill. prosjekt</span><span className="font-mono text-accent-yellow">750 000 kr</span></div>
          <div className="flex justify-between"><span>Egenkapital på 6 mill. prosjekt</span><span className="font-mono text-accent-yellow">900 000 kr</span></div>
          <div className="flex justify-between"><span>Med 300 000 i egenkapital kan du låne</span><span className="font-mono text-text-primary">ca. 1,7 mill. (kun bygging)</span></div>
        </div>
      </div>
      <p>
        <strong>Kan tomt telle som egenkapital?</strong> Ja. Eier du allerede en tomt, kan verdien av denne regnes som egenkapital. En tomt verdt 1 million betyr at du allerede har egenkapitalen dekket for et prosjekt opptil ca. 6,5 millioner.
      </p>
      <p>
        <strong>Renter i byggeperioden:</strong> Under bygging betaler du kun renter på det som er utbetalt, ikke hele lånesummen. Byggelånet utbetales i rater etter fremdrift. Typisk rentekostnad i byggeperioden er 80 000-200 000 kr avhengig av prosjektstørrelse og byggetid.
      </p>

      <h2>Regionale prisforskjeller</h2>
      <p>
        Byggepriser varierer betydelig mellom regioner i Norge. Hovedårsaken er forskjeller i lønnskostnader og tilgang på håndverkere:
      </p>
      <div className="bg-bg-card border border-surface-border rounded-xl p-6 my-6">
        <div className="space-y-2 text-sm">
          <div className="flex justify-between"><span><strong className="text-text-primary">Oslo og Akershus</strong></span><span className="font-mono text-accent-yellow">+10-15% over snittet</span></div>
          <div className="flex justify-between"><span><strong className="text-text-primary">Stavanger</strong></span><span className="font-mono text-accent-amber">+5-10%</span></div>
          <div className="flex justify-between"><span><strong className="text-text-primary">Tromsø og Nord-Norge</strong></span><span className="font-mono text-accent-amber">+5-10% (inkl. transport)</span></div>
          <div className="flex justify-between"><span><strong className="text-text-primary">Bergen og Trondheim</strong></span><span className="font-mono text-text-secondary">+3-5%</span></div>
          <div className="flex justify-between"><span><strong className="text-text-primary">Kristiansand, Drammen</strong></span><span className="font-mono text-text-tertiary">Gjennomsnitt</span></div>
          <div className="flex justify-between"><span><strong className="text-text-primary">Sørlandet, Midt-Norge</strong></span><span className="font-mono text-steel-400">-3-5% under snittet</span></div>
        </div>
      </div>
      <p>
        I praksis betyr dette at en enebolig på 150 m² med normal standard kan koste 6-7,5 millioner i Oslo, mens tilsvarende i Midt-Norge kan gjennomføres for 4,8-6 millioner.
      </p>

      <h2>Kan man bygge hus selv?</h2>
      <p>
        Du kan gjøre deler av arbeidet selv, men visse oppgaver krever sertifiserte fagfolk:
      </p>
      <div className="bg-bg-card border border-surface-border rounded-xl p-6 my-6">
        <div className="space-y-4 text-sm">
          <div>
            <p className="font-semibold text-accent-yellow mb-1">Kan gjøre selv</p>
            <p className="text-text-secondary">Maling, tapetsering, legging av gulv (laminat/vinyl), montering av lister, enkel utvendig arbeid, hagearbeid, montering av kjøkkeninnredning</p>
          </div>
          <div className="border-t border-surface-border pt-4">
            <p className="font-semibold text-accent-amber mb-1">Krever fagfolk</p>
            <p className="text-text-secondary">All elektrisk installasjon, alt rørleggerarbeid, membranarbeid i våtrom, bærende konstruksjoner, brannsikring, ventilasjon</p>
          </div>
          <div className="border-t border-surface-border pt-4">
            <p className="font-semibold text-text-primary mb-1">Alltid påkrevd</p>
            <p className="text-text-secondary">Ansvarlig søker for byggesøknad, ansvarlig utførende for tekniske fag, uavhengig kontroll for våtrom og lufttetthet</p>
          </div>
        </div>
      </div>
      <p>
        Realistisk sett kan egeninnsats spare deg for 100 000-300 000 kr, primært på maling, gulvlegging, utvendig arbeid og enkel montering. Men vær ærlig med deg selv — feil arbeid kan bli dyrere å rette enn å leie inn fagfolk fra starten.
      </p>

      <h2>Byggetid og prosess steg for steg</h2>
      <p>
        Hele prosessen fra idé til innflytting tar typisk <strong>12-18 måneder</strong>. Her er en realistisk tidslinje:
      </p>
      <div className="bg-bg-card border border-surface-border rounded-xl p-6 my-6">
        <div className="space-y-3 text-sm">
          <div className="flex gap-4"><span className="font-mono text-accent-yellow w-24 flex-shrink-0">Mnd 1-3</span><span>Planlegging, arkitekt og prosjektering</span></div>
          <div className="flex gap-4"><span className="font-mono text-accent-yellow w-24 flex-shrink-0">Mnd 3-5</span><span>Byggesøknad og godkjenning (4-12 uker behandlingstid)</span></div>
          <div className="flex gap-4"><span className="font-mono text-accent-yellow w-24 flex-shrink-0">Mnd 5-6</span><span>Grunnarbeid, graving og fundamentering</span></div>
          <div className="flex gap-4"><span className="font-mono text-accent-yellow w-24 flex-shrink-0">Mnd 6-10</span><span>Råbygg, tak og tetting av bygningskropp</span></div>
          <div className="flex gap-4"><span className="font-mono text-accent-yellow w-24 flex-shrink-0">Mnd 10-14</span><span>Innvendig arbeid: VVS, elektro, isolasjon, gips</span></div>
          <div className="flex gap-4"><span className="font-mono text-accent-yellow w-24 flex-shrink-0">Mnd 14-16</span><span>Overflater: kjøkken, bad, gulv, maling</span></div>
          <div className="flex gap-4"><span className="font-mono text-accent-yellow w-24 flex-shrink-0">Mnd 16-18</span><span>Utendørs, sluttkontroll og innflytting</span></div>
        </div>
      </div>

      <h2>Totalentreprise vs delt entreprise</h2>
      <p>
        <strong>Totalentreprise</strong> betyr at én hovedentreprenør tar ansvar for hele prosjektet. Du får én kontaktperson, én kontrakt og mer forutsigbar pris. Ulempen er et typisk påslag på 5-10% for koordinering og risikotaking.
      </p>
      <p>
        <strong>Delt entreprise</strong> betyr at du selv koordinerer håndverkerne. Det kan spare 5-15%, men krever mer tid, kompetanse og risiko fra deg. Mange engasjerer en byggeleder (50 000-150 000 kr) for å hjelpe med koordinering.
      </p>

      <h2>Er det billigere å bygge eller kjøpe?</h2>
      <p>
        I pressområder som Oslo, Bergen og Stavanger der bruktboligprisene er svært høye, er det ofte billigere å bygge enn å kjøpe tilsvarende bolig — forutsatt at du har tilgang til rimelig tomt. I mindre pressede områder kan det være rimeligere å kjøpe brukt, spesielt hvis boligen er i god stand.
      </p>
      <p>
        Fordelen med å bygge er at du får en helt ny bolig med moderne standard, lave vedlikeholdskostnader de første 10-15 årene, og god energieffektivitet. Ulempen er lengre prosess, mer usikkerhet og behov for tomt.
      </p>

      <h2>Vanlige feil som sprenger budsjettet</h2>
      <ul>
        <li><strong>For liten buffer:</strong> Mange budsjetterer med 5% buffer. Vi anbefaler minimum 10-15%. For vanskelige grunnforhold, 20%.</li>
        <li><strong>Endringer underveis:</strong> Hver endring etter byggestart koster 2-5 ganger mer enn om den var planlagt fra start.</li>
        <li><strong>Manglende grunnundersøkelse:</strong> Dårlige grunnforhold kan legge 100 000-800 000 kr på fundamenteringen.</li>
        <li><strong>Undervurdering av utendørsarbeid:</strong> Innkjørsel, terrasse, hage og gjerder koster fort 200 000-800 000 kr.</li>
        <li><strong>Feil valg av entreprenør:</strong> Det billigste tilbudet er sjelden det beste. Sjekk referanser, soliditet og tidligere prosjekter.</li>
        <li><strong>Glemmer tilkoblingsavgifter:</strong> Vann, avløp og strøm-tilkobling kan koste 50 000-200 000 kr som mange glemmer.</li>
      </ul>

      <p>
        Les mer om <Link href="/hva-pavirker-byggekostnad" className="text-accent-yellow hover:underline">hva som påvirker byggekostnad</Link>, <Link href="/skjulte-kostnader-ved-oppussing" className="text-accent-yellow hover:underline">skjulte kostnader</Link> og <Link href="/pris-per-kvm" className="text-accent-yellow hover:underline">pris per m² for ulike prosjekttyper</Link>. Bruk vår <Link href="/kalkulator" className="text-accent-yellow hover:underline">gratis kalkulator</Link> for å beregne ditt prosjekt.
      </p>
    </>
  );
}
