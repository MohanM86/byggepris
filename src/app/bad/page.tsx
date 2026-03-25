import { Metadata } from "next";
import CategoryPageTemplate from "@/components/sections/CategoryPageTemplate";
import { projectTypes } from "@/data/prices";
import { FAQSchema, BreadcrumbSchema, ArticleSchema } from "@/components/seo/JsonLd";
import { BadContent } from "@/components/content/BadContent";

const faq = [
  { question: "Hva koster et nytt bad i 2026?", answer: "Et nytt bad koster typisk 40 000-80 000 kr per m² i 2026. For et standard bad på 6 m² betyr det 240 000-480 000 kr. Et lite bad på 3 m² koster 150 000-280 000 kr, mens et stort bad på 10 m² kan koste 400 000-800 000 kr." },
  { question: "Hva koster det å pusse opp et bad på 10 m²?", answer: "Et bad på 10 m² koster typisk 400 000-800 000 kr å renovere, avhengig av standard. Normal standard med gode fliser og sanitær ligger rundt 500 000-600 000 kr. Med luksuriøs standard og designprodukter kan det overstige 800 000 kr." },
  { question: "Hva koster et bad på 3 m²?", answer: "Et lite bad eller toalettrom på 3 m² koster typisk 150 000-280 000 kr. M²-prisen er høyere for små bad fordi faste kostnader som rigg, rørlegger og membranarbeid fordeles på færre kvadratmeter." },
  { question: "Hva koster det å pusse opp et bad på 5 m²?", answer: "Et bad på 5 m² koster typisk 200 000-400 000 kr å renovere. Med normal standard og gode materialer bør du budsjettere ca. 250 000-350 000 kr inkludert rørlegger, fliser, membran og sanitær." },
  { question: "Er det lov å pusse opp badet selv?", answer: "Du kan gjøre riving, bortkjøring av avfall og maling selv. Men membranarbeid, rørleggerarbeid og elektrisk installasjon MÅ utføres av sertifiserte fagfolk. Flislegging i våtsonen bør også gjøres av fagperson for å sikre riktig membranarbeid." },
  { question: "Er det søknadspliktig å pusse opp bad?", answer: "Vanlig oppussing av eksisterende bad er normalt ikke søknadspliktig. Men hvis du bygger NYTT bad der det ikke var bad før, eller gjør vesentlige endringer i røropplegget, kan det kreve søknad. Sjekk alltid med kommunen." },
  { question: "Er mikrosement billigere enn fliser?", answer: "Mikrosement koster typisk 2 000-4 000 kr per m² inkl. arbeid, mens fliser koster 800-3 000 kr/m² inkl. legging. Mikrosement kan altså være dyrere, men gir et moderne, fugeløst utseende og raskere montering. Færre arbeidstimer kan gjøre det konkurransedyktig." },
  { question: "Hva koster en rørlegger på bad?", answer: "Rørleggerarbeid på bad koster typisk 40 000-80 000 kr, avhengig av om rør må omlegges eller bare kobles til eksisterende opplegg. Timepris for rørlegger er 700-1 100 kr inkl. mva. Et komplett rørleggerjobb på standard bad tar 3-5 dager." },
  { question: "Hva koster en elektriker på bad?", answer: "Elektrikerarbeid på bad koster typisk 15 000-35 000 kr. Det inkluderer gulvvarme, nye kurser, spotlights og ventilasjon. Timepris for elektriker er 600-900 kr inkl. mva. Varmekabler i gulv koster ca. 5 000-10 000 kr for materialer." },
  { question: "Hvor lang tid tar totalrenovering av bad?", answer: "En komplett baderomsrenovering tar typisk 3-6 uker. Riving tar 2-3 dager, rørlegger 3-5 dager, membran og tørketid 3-5 dager, flislegging 5-8 dager, og montering/ferdigstillelse 3-5 dager." },
  { question: "Hvor mye øker verdien med nytt bad?", answer: "Et nytt bad øker boligverdien med typisk 50-80% av investeringen. Et bad til 350 000 kr kan altså øke verdien med 175 000-280 000 kr. Avkastningen er best hvis det gamle badet var utdatert eller skadet." },
  { question: "Hvorfor er oppussing av bad så dyrt?", answer: "Bad er dyrt fordi det krever mange ulike fagfolk (rørlegger, elektriker, flislegger, membranarbeider, snekker), strenge krav til våtromssikring, og materialer som er dyrere enn i andre rom. Membranarbeid alene koster 25 000-50 000 kr." },
  { question: "Er det lov å legge fliser på badet selv?", answer: "Du kan legge fliser selv utenfor våtsonen (mer enn 1 meter fra dusj/badekar). I våtsonen bør flislegging gjøres av fagperson som kan dokumentere korrekt membranarbeid under. Feil membranarbeid kan føre til fuktskader som koster hundretusener." },
  { question: "Hvor mye sparer man på å rive badet selv?", answer: "Å rive badet selv sparer typisk 15 000-30 000 kr. Du trenger slegge, brekkjern, bøtte og container for avfall. Vær forsiktig med rør og elektrisk — slå av vann og strøm først. Sorter avfall (fliser, tre, plast) for lavere deponiavgift." },
  { question: "Hva koster det å flislegge et bad?", answer: "Flislegging koster 500-1 500 kr per m² for arbeid, pluss flisene selv (300-3 000 kr/m²). For et bad på 6 m² med gulv og vegger (ca. 25-30 m² flisareal) betyr det 25 000-100 000 kr totalt for fliser og legging." },
];

export const metadata: Metadata = {
  title: "Hva koster nytt bad? Priser for baderomsrenovering 2026",
  description: "Komplett prisguide for nytt bad i Norge. Typisk pris 40 000-80 000 kr per m². Se kostnadsfordeling, materialpriser, tidsplan og sparetips.",
  alternates: { canonical: "https://byggepris.no/bad" },
  openGraph: { title: "Hva koster nytt bad i 2026?", description: "Typisk 40 000-80 000 kr per m². Komplett prisguide.", url: "https://byggepris.no/bad", type: "article" },
};

export default function Page() {
  const project = projectTypes.find((p) => p.slug === "bad")!;
  return (<>
    <BreadcrumbSchema items={[{ name: "Hjem", href: "/" }, { name: "Bad", href: "/bad" }]} />
    <ArticleSchema title="Hva koster nytt bad?" description="Komplett prisguide for baderomsrenovering i Norge." slug="bad" />
    <FAQSchema items={faq} />
    <CategoryPageTemplate project={project}
      intro="Et nytt bad i Norge koster typisk mellom 40 000 og 80 000 kr per m². For et standard bad på 6 m² betyr det 240 000-480 000 kroner. Bad er det dyreste rommet å renovere per m², men også et av de viktigste for boligverdien."
      description="Prisen avhenger av størrelse, materialvalg, om rør må omlegges, og hvilken standard du velger. Membranarbeid, rørlegger og flislegger utgjør hoveddelen av kostnaden. I denne guiden viser vi deg hva pengene går til og hvordan du kan spare uten å gå på kompromiss med kvaliteten."
      content={<BadContent />}
      costFactors={[
        "Membranarbeid og våtromssikring – lovpålagt og kritisk for kvaliteten",
        "Rørleggerarbeid – omlegging av rør koster 40 000-80 000 kr",
        "Fliser og materialer – fra 300 kr/m² for budsjett til 3 000+ kr/m² for naturstein",
        "Sanitærprodukter – toalett, servant og dusj fra 15 000 til 80 000 kr",
        "Gulvvarme – materialer og installasjon 10 000-20 000 kr",
        "Størrelse – faste kostnader gjør små bad dyrere per m²",
        "Elektriker – nye kurser, spots og ventilasjon 15 000-35 000 kr",
        "Om rør flyttes eller beholdes på plass – kan spare 20 000-50 000 kr",
      ]}
      tips={[
        "Behold eksisterende røropplegg hvis mulig – å flytte rør koster 20 000-50 000 kr ekstra som du kan spare.",
        "Riv badet selv for å spare 15 000-30 000 kr, men vær forsiktig med rør og elektro.",
        "Velg store fliser – færre fuger betyr raskere legging og lavere arbeidskostnad.",
        "Spar aldri på membranarbeid – en lekkasje kan koste 100 000-500 000 kr å reparere.",
        "Vurder baderomsplater i stedet for fliser utenfor våtsonen – raskere og rimeligere.",
        "Kjøp sanitærprodukter selv – du kan spare 20-40% vs. håndverkerens påslag.",
        "Planlegg alt ferdig før riving starter – endringer underveis er ekstremt dyre på bad.",
        "Bruk sertifisert våtromshåndverker – dokumentasjon er viktig for forsikring og videresalg.",
      ]}
      faq={faq}
      relatedSlugs={["kjokken", "oppussing", "totalrenovering", "tilbygg", "pris-per-kvm"]}
      relatedNames={["Kjøkken", "Oppussing", "Totalrenovering", "Tilbygg", "Pris per m²"]}
    />
  </>);
}
