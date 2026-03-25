import { Metadata } from "next";
import CategoryPageTemplate from "@/components/sections/CategoryPageTemplate";
import { projectTypes } from "@/data/prices";
import { FAQSchema, BreadcrumbSchema, ArticleSchema } from "@/components/seo/JsonLd";
import { FlippingContent } from "@/components/content/FlippingContent";

const faq = [
  { question: "Er boligflipping lønnsomt?", answer: "Det kan være lønnsomt hvis du kjøper under markedspris og fokuserer på tiltak med høy avkastning. Typisk brutto fortjeneste er 300 000-800 000 kr per prosjekt, men etter skatt, megler og holdekostnader sitter du igjen med 150 000-500 000 kr. Risikoen er reell – feil kjøp eller budsjettsprekk kan gi tap." },
  { question: "Er flipping lovlig?", answer: "Ja, boligflipping er fullt lovlig i Norge. Men gevinsten er skattepliktig (22% kapitalskatt) hvis du ikke har bodd i boligen i minst 12 av de siste 24 månedene. Driver du flipping som næring, kan skatten bli opptil 47,4%." },
  { question: "Hva vil det si å flippe bolig?", answer: "Å flippe bolig betyr å kjøpe en bolig under markedspris, pusse opp strategisk for å øke verdien, og deretter selge med fortjeneste. Nøkkelen er å fokusere på tiltak som gir høyere verdiøkning enn de koster – typisk maling, gulv, kjøkken og bad." },
  { question: "Hva øker verdi på bolig?", answer: "Tiltakene som øker boligverdien mest er: nytt bad (50-80% avkastning), nytt kjøkken (60-90% avkastning), maling og nye overflater (100-200% avkastning), nye gulv (80-120% avkastning) og åpen planløsning. Utvendig oppgradering og energitiltak gir også god avkastning." },
  { question: "Hva er dyrest å pusse opp?", answer: "Bad er dyrest per m² (40 000-80 000 kr/m²), fulgt av kjøkken (25 000-70 000 kr/m²). Totalrenovering er dyrest totalt (1,2-7,2 mill.). Planløsningsendring med fjerning av bærende vegger koster 30 000-80 000 kr per vegg." },
  { question: "Hvordan lykkes med flipping?", answer: "Nøkkelen er: 1) Kjøp riktig – du tjener penger på kjøpet, ikke salget. 2) Ha et detaljert budsjett med buffer. 3) Fokuser på tiltak med høy avkastning. 4) Hold deg til nøytrale, tidsriktige valg. 5) Bruk profesjonell styling og foto ved salg." },
  { question: "Hvor lenge bør man bo før man selger?", answer: "For å unngå skatt på gevinsten må du ha bodd i boligen i minst 12 av de siste 24 månedene. Selger du før dette, betaler du 22% skatt på gevinsten. Mange som flipper velger å bo i boligen under oppussing for å oppnå skattefrihet." },
  { question: "Når på året lønner det seg å selge?", answer: "Våren (mars-juni) er beste tid for boligsalg i Norge – flest kjøpere, mest aktivitet og typisk høyere priser. Høsten (september-oktober) er nest best. Unngå å legge ut i juli og desember. Planlegg flippingen slik at du er klar for salg i mars-april." },
  { question: "Er det lurt å kjøpe bolig med utleiedel?", answer: "For flipping kan utleiedel være verdifullt fordi det utvider kjøpergruppen ved salg. En godkjent utleiedel kan øke boligverdien med 500 000-1 500 000 kr. Men å LAGE ny utleiedel krever byggesøknad og oppfyllelse av TEK17-krav, noe som er kostbart." },
  { question: "Hva trekker opp prisen på boligen?", answer: "De viktigste verdidriverne er: beliggenhet (kan ikke endres), modernisert bad og kjøkken, god planløsning (åpen stue/kjøkken), lyse og nøytrale overflater, nye gulv, energieffektivitet og godt vedlikehold. Profesjonell styling kan løfte prisen 5-10%." },
  { question: "Er det billigere å bygge hus eller kjøpe?", answer: "I pressområder er det ofte billigere å bygge. I mindre pressede områder kan bruktbolig være rimeligere. For flipping er det nesten alltid bedre å kjøpe brukt og pusse opp – du tjener på å skape verdi gjennom oppussing, ikke på nybygg." },
  { question: "Hvor mye penger bør man ha for å kjøpe leilighet?", answer: "For flipping trenger du minimum 15% egenkapital av kjøpspris, pluss oppussingsbudsjett og holdekostnader for 3-6 måneder. For en leilighet til 3,5 mill. med 500 000 i oppussing betyr det ca. 1 025 000 kr i tilgjengelig kapital (525 000 egenkapital + 500 000 oppussing)." },
];

export const metadata: Metadata = {
  title: "Hva koster flipping? Priser og guide for boligflipping 2026",
  description: "Komplett guide til boligflipping i Norge. Typisk oppussingskostnad 5 000-20 000 kr per m². Se kostnadsregnskap, avkastning per tiltak, skatteregler og tips.",
  alternates: { canonical: "https://byggepris.no/flipping" },
  openGraph: { title: "Hva koster flipping?", description: "Komplett guide til boligflipping.", url: "https://byggepris.no/flipping", type: "article" },
};

export default function Page() {
  const project = projectTypes.find((p) => p.slug === "flipping")!;
  return (<>
    <BreadcrumbSchema items={[{ name: "Hjem", href: "/" }, { name: "Flipping", href: "/flipping" }]} />
    <ArticleSchema title="Hva koster flipping?" description="Prisguide for boligflipping i Norge." slug="flipping" />
    <FAQSchema items={faq} />
    <CategoryPageTemplate project={project}
      intro="Flipping av bolig koster typisk 5 000-20 000 kr per m² i oppussing. For en leilighet på 80 m² betyr det 400 000-1 600 000 kroner. Men kostnaden er bare halve bildet – det viktige er hva oppussingen gir tilbake i økt salgsverdi."
      description="Boligflipping handler om å kjøpe under markedspris, pusse opp strategisk, og selge med fortjeneste. Nøkkelen er å fokusere på tiltak som gir høyere verdiøkning enn de koster, og å ha full kontroll på alle kostnader inkludert skatt, megler og holdekostnader."
      content={<FlippingContent />}
      costFactors={["Kjøpspris – den viktigste faktoren, du tjener penger på kjøpet","Oppussingskostnad vs forventet verdiøkning","Dokumentavgift 2,5% av kjøpspris","Holdekostnader: lån, felleskost, forsikring i 3-6 mnd","Meglerkostnader 1-2% ved salg","Styling og foto 15 000-30 000 kr","Skatt på gevinst 22% (eller 0% hvis du har bodd i boligen 12+ mnd)","Uforutsette funn og tilleggskostnader"]}
      tips={["Kjøp riktig – totalinvestering bør ligge 15-20% under forventet salgsverdi for å dekke risiko.","Maling og gulv gir best avkastning – 100-200% tilbake på investert beløp.","Ikke overinvester – tilpass standarden til nabolaget, ikke din personlige smak.","Bo i boligen 12+ mnd for skattefri gevinst – sparer 22% av overskuddet.","Bruk profesjonell styling og fotograf – koster 15 000-30 000 kr men øker prisen 5-10%.","Ha et komplett budsjett FØR kjøp – inkluder alle kostnader, ikke bare oppussing.","Selg om våren (mars-juni) for best pris og flest kjøpere.","Vurder overflateoppdatering av bad (fuging, tilbehør) i stedet for full renovering – ofte bedre ROI."]}
      faq={faq}
      relatedSlugs={["oppussing","bad","kjokken","totalrenovering","oppussing-for-salg"]}
      relatedNames={["Oppussing","Bad","Kjøkken","Totalrenovering","Oppussing før salg"]}
    />
  </>);
}
