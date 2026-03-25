import Link from "next/link";

export function KjokkenContent() {
  return (
    <>
      <h2>Komplett guide til kjøkkenrenovering i Norge</h2>
      <p>
        Kjøkkenet er hjertet av boligen og det rommet som ofte har størst innvirkning på boligverdien. Et nytt kjøkken gir umiddelbar visuell effekt og kan øke salgsprisen med mer enn investeringen koster, spesielt hvis det eksisterende kjøkkenet er utdatert.
      </p>
      <p>
        I Norge koster et nytt kjøkken typisk mellom <strong>200 000 og 800 000 kr</strong> for de fleste prosjekter. Totalprisen avhenger av kjøkkeninnredningens kvalitet, om rør og elektro må flyttes, og hvilke materialer du velger for benkeplate, gulv og vegg.
      </p>

      <h2>De største kostnadspostene</h2>
      <p>
        Selve kjøkkeninnredningen (skap, fronter, skuffer) utgjør typisk 40-60% av totalbudsjettet. Her er en oversikt over typiske kostnadsposter:
      </p>
      <div className="bg-bg-card border border-surface-border rounded-xl p-6 my-6">
        <div className="space-y-3 text-sm">
          <div className="flex justify-between"><span>Kjøkkeninnredning (skap og fronter)</span><span className="font-mono text-text-primary">50 000 – 300 000 kr</span></div>
          <div className="flex justify-between"><span>Benkeplate</span><span className="font-mono text-text-primary">10 000 – 80 000 kr</span></div>
          <div className="flex justify-between"><span>Hvitevarer (komplett sett)</span><span className="font-mono text-text-primary">30 000 – 120 000 kr</span></div>
          <div className="flex justify-between"><span>Rørlegger (vask, oppvaskmaskin)</span><span className="font-mono text-text-primary">10 000 – 30 000 kr</span></div>
          <div className="flex justify-between"><span>Elektriker</span><span className="font-mono text-text-primary">10 000 – 30 000 kr</span></div>
          <div className="flex justify-between"><span>Montering</span><span className="font-mono text-text-primary">20 000 – 50 000 kr</span></div>
          <div className="flex justify-between"><span>Gulv</span><span className="font-mono text-text-primary">10 000 – 40 000 kr</span></div>
          <div className="flex justify-between"><span>Maling og ferdigstillelse</span><span className="font-mono text-text-primary">5 000 – 15 000 kr</span></div>
        </div>
      </div>

      <h2>IKEA vs skreddersydd vs mellomklasse</h2>
      <p>
        Valget av kjøkkenleverandør har enorm innvirkning på prisen. Her er en sammenligning av de vanligste alternativene i det norske markedet:
      </p>
      <div className="bg-bg-card border border-surface-border rounded-xl p-6 my-6">
        <div className="space-y-4 text-sm">
          <div>
            <p className="font-semibold text-text-primary mb-1">IKEA (budsjett til mellomklasse)</p>
            <p>Innredning: <strong>30 000 – 100 000 kr</strong>. God kvalitet for prisen, stort utvalg av fronter og løsninger. Planlegging og montering kan gjøres selv eller av IKEA-montør. Best egnet for standardmål.</p>
          </div>
          <div className="border-t border-surface-border pt-4">
            <p className="font-semibold text-text-primary mb-1">Norske kjøkkenprodusenter (Sigdal, HTH, Kvik)</p>
            <p>Innredning: <strong>80 000 – 250 000 kr</strong>. Høyere kvalitet, bedre tilpasning, profesjonell planlegging inkludert. Flere benkeplatevalg og skreddersøm.</p>
          </div>
          <div className="border-t border-surface-border pt-4">
            <p className="font-semibold text-text-primary mb-1">Skreddersydd fra snekker</p>
            <p>Innredning: <strong>150 000 – 500 000+ kr</strong>. Helt unikt design, perfekt tilpasset rommet, premium materialer. Lengre leveringstid og høyest pris.</p>
          </div>
        </div>
      </div>

      <h2>Benkeplatematerialer</h2>
      <p>
        Benkeplaten er en av de mest synlige delene av kjøkkenet og prisen varierer enormt basert på materiale:
      </p>
      <ul>
        <li><strong>Laminat:</strong> 2 000-8 000 kr. Rimelig, mange designs, men tåler ikke varme og kan hovne opp ved fukt.</li>
        <li><strong>Heltre:</strong> 5 000-15 000 kr. Varmt uttrykk, kan slipes ned, men krever vedlikehold.</li>
        <li><strong>Kompositt (Silestone, Dekton):</strong> 15 000-40 000 kr. Slitesterkt, flekk-resistent, mange farger.</li>
        <li><strong>Naturstein (granitt, marmor):</strong> 20 000-60 000 kr. Unikt uttrykk, holdbart, men kan flekkes.</li>
        <li><strong>Keramikk:</strong> 25 000-70 000 kr. Ekstremt slitesterkt, varmebestandig, premium utseende.</li>
      </ul>

      <h2>Når lønner det seg å flytte rør og elektro?</h2>
      <p>
        Å flytte kjøkkenvasken, oppvaskmaskinen eller komfyren til en ny plassering krever rørlegger og elektriker, noe som typisk legger <strong>20 000-60 000 kr</strong> til prosjektet. Det lønner seg å flytte rør og elektro når:
      </p>
      <ul>
        <li>Den nye planløsningen gir vesentlig bedre funksjonalitet</li>
        <li>Du renoverer gulv og vegger uansett</li>
        <li>Eksisterende opplegg er gammelt og bør byttes</li>
      </ul>
      <p>
        Behold eksisterende rør- og elektroopplegg hvis det fungerer godt og du primært ønsker ny innredning og overflater. Det er den enkleste måten å holde budsjettet nede.
      </p>

      <p>
        Se også <Link href="/bad" className="text-accent-yellow hover:underline">hva nytt bad koster</Link> og <Link href="/oppussing-for-salg" className="text-accent-yellow hover:underline">hvilke tiltak som lønner seg før salg</Link>.
      </p>
    </>
  );
}
