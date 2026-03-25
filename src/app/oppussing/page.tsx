import { Metadata } from "next";
import CategoryPageTemplate from "@/components/sections/CategoryPageTemplate";
import { projectTypes } from "@/data/prices";
import { FAQSchema, BreadcrumbSchema, ArticleSchema } from "@/components/seo/JsonLd";
import { OppussingContent } from "@/components/content/OppussingContent";

const faq = [
  { question: "Hvor mye koster det å pusse opp?", answer: "Oppussing koster typisk 8 000-25 000 kr per m² avhengig av omfang. Overflateoppussing (maling, gulv) koster 5 000-10 000 kr/m². Delvis renovering (nytt bad eller kjøkken) koster 10 000-20 000 kr/m². Gjennomgripende oppussing koster 18 000-30 000 kr/m²." },
  { question: "Hva koster oppussing per kvadratmeter?", answer: "M²-prisen for oppussing varierer fra 5 000 kr for enkel overflateoppussing til 30 000 kr for gjennomgripende renovering med nytt bad, kjøkken og planløsningsendring. Normal oppussing med nye overflater og ett nytt våtrom ligger rundt 12 000-18 000 kr/m²." },
  { question: "Hva regnes som oppussing?", answer: "Oppussing er arbeid som forbedrer boligens standard uten å endre den grunnleggende konstruksjonen: maling, nye gulv, tapetsering, nye lister, oppdatering av kjøkken og bad, ny belysning. Oppussing skilles fra renovering (mer gjennomgripende) og totalrenovering (alt fra gulv til tak)." },
  { question: "Hva er forskjellen på oppussing og renovering?", answer: "Oppussing er primært overflatearbeid (maling, gulv, tapetsering). Renovering innebærer mer dyptgående endringer (nytt bad, ny elektro, nye rør). Totalrenovering betyr at alt renoveres fra gulv til tak. Pris: oppussing 5 000-15 000 kr/m², renovering 12 000-25 000 kr/m², totalrenovering 15 000-40 000 kr/m²." },
  { question: "Hva er dyrest å pusse opp?", answer: "Bad er dyrest per m² (40 000-80 000 kr/m²), fulgt av kjøkken (25 000-70 000 kr/m²). Å fjerne bærende vegger koster 30 000-80 000 kr per vegg. Nytt elektrisk anlegg for hele boligen koster 80 000-200 000 kr." },
  { question: "Er det søknadspliktig å pusse opp bad?", answer: "Vanlig oppussing av eksisterende bad er normalt ikke søknadspliktig. Men å bygge NYTT bad der det ikke var fra før, gjøre vesentlige endringer i bærende konstruksjon, eller endre røropplegget vesentlig kan kreve byggesøknad." },
  { question: "Er rehabilitering av våtrom søknadspliktig?", answer: "Rehabilitering av eksisterende våtrom (bytte fliser, membran, sanitær) er normalt ikke søknadspliktig. Men ny plassering av våtrom, endring av bærende vegger, eller vesentlig omlegging av rør kan utløse søknadsplikt. Sjekk alltid med kommunen." },
  { question: "Er det lov å renovere bad selv?", answer: "Du kan rive, bortkjøre avfall, male tak og montere tilbehør selv. Men rørleggerarbeid, membranarbeid og elektro MÅ utføres av sertifiserte fagfolk. Flislegging i våtsonen bør gjøres av fagperson. Å gjøre uautorisert arbeid kan gi problemer med forsikring og salg." },
  { question: "Er det dyrt å bytte fliser?", answer: "Å bytte fliser koster 500-1 500 kr per m² for arbeid, pluss fliser (300-3 000 kr/m²). For et bad på 6 m² (ca. 25-30 m² flisareal) betyr det 25 000-100 000 kr totalt. Riving av gamle fliser koster 200-400 kr/m² i tillegg." },
  { question: "Er mikrosement billigere enn fliser?", answer: "Mikrosement koster 2 000-4 000 kr/m² inkl. arbeid, mens fliser koster 800-3 000 kr/m² inkl. legging. Mikrosement er altså ofte dyrere, men gir et moderne, fugeløst uttrykk og kan ha kortere monteringstid. Kan være kostnadseffektivt for store flater." },
  { question: "Hva er dyrest av elektriker og rørlegger?", answer: "Rørlegger er normalt dyrere enn elektriker. Timepris rørlegger: 700-1 100 kr. Timepris elektriker: 600-900 kr. Et komplett rørleggerjobb på bad koster 40 000-80 000 kr, mens elektrikerjobben typisk koster 15 000-35 000 kr." },
  { question: "Er det lønnsomt å pusse opp bad?", answer: "Ja, et nytt bad øker boligverdien med typisk 50-80% av investeringen. Avkastningen er best hvis badet var utdatert (over 20 år) eller hadde synlige problemer. For boligsalg er badet et av rommene kjøpere legger mest vekt på." },
];

export const metadata: Metadata = {
  title: "Hva koster oppussing? Priser for oppussing i Norge 2026",
  description: "Oppussing koster 8 000-25 000 kr per m². Se priser for overflateoppussing, delvis renovering, bad, kjøkken og komplett prisguide.",
  alternates: { canonical: "https://byggepris.no/oppussing" },
  openGraph: { title: "Hva koster oppussing?", description: "Typisk 8 000-25 000 kr per m².", url: "https://byggepris.no/oppussing", type: "article" },
};

export default function Page() {
  const project = projectTypes.find((p) => p.slug === "oppussing")!;
  return (<>
    <BreadcrumbSchema items={[{ name: "Hjem", href: "/" }, { name: "Oppussing", href: "/oppussing" }]} />
    <ArticleSchema title="Hva koster oppussing?" description="Prisguide for oppussing i Norge." slug="oppussing" />
    <FAQSchema items={faq} />
    <CategoryPageTemplate project={project}
      intro="Oppussing i Norge koster typisk mellom 8 000 og 25 000 kr per m². For en leilighet på 80 m² betyr det 640 000 til 2 millioner kroner, avhengig av om du gjør overflateoppussing eller gjennomgripende renovering med nytt bad og kjøkken."
      description="Prisen varierer enormt basert på omfang. Enkel overflateoppussing (maling, gulv, lister) kan gjøres for 5 000-10 000 kr/m². Legger du til nytt bad eller kjøkken, øker prisen til 15 000-25 000 kr/m². I denne guiden viser vi prisene for de vanligste oppussingsprosjektene."
      content={<OppussingContent />}
      costFactors={["Omfang – overflater vs våtrom vs planløsningsendring","Antall våtrom som berøres (bad er dyrest)","Boligens alder og skjulte problemer","Materialvalg og standard","Behov for rørlegger og elektriker","Om bærende vegger skal flyttes (30 000-80 000 kr/vegg)","Avfallshåndtering og riving","Midlertidig bolig under omfattende oppussing"]}
      tips={["Start med maling og gulv – gir mest visuell effekt for pengene (5 000-10 000 kr/m²).","Behold eksisterende planløsning for å spare 50 000-200 000 kr.","Gjør enklere arbeid selv: maling, riving, montering – spar 30-50% på disse postene.","Bestill materialer selv for 20-40% bedre pris enn håndverkerens påslag.","Planlegg ALT ferdig før håndverkerne starter – endringer underveis er 2-5x dyrere.","Unngå oppussing i vår/sommer hvis mulig – høst/vinter gir ofte 5-10% lavere priser.","Innhent minst 3 tilbud og sammenlign hva som er inkludert i prisen.","Bruk fastpris der mulig for forutsigbarhet – timebasert arbeid kan løpe ut av kontroll."]}
      faq={faq}
      relatedSlugs={["bad","kjokken","totalrenovering","flipping","skjulte-kostnader-ved-oppussing"]}
      relatedNames={["Bad","Kjøkken","Totalrenovering","Flipping","Skjulte kostnader"]}
    />
  </>);
}
