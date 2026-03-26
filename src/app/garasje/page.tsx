import { Metadata } from "next";
import CategoryPageTemplate from "@/components/sections/CategoryPageTemplate";
import { projectTypes } from "@/data/prices";
import { FAQSchema, BreadcrumbSchema, ArticleSchema } from "@/components/seo/JsonLd";
import { GarasjeContent } from "@/components/content/GarasjeContent";

const faq = [
  { question: "Hva koster en garasje på 50 m²?", answer: "En garasje på 50 m² koster typisk 750 000-1 750 000 kr avhengig av type og standard. Uisolert tregarasje fra 600 000 kr, isolert fra 900 000 kr, murgarasje fra 1 200 000 kr." },
  { question: "Hva koster en garasje på 36 m²?", answer: "En garasje på 36 m² (typisk 6x6m dobbeltgarasje) koster ca. 540 000-1 260 000 kr. Ferdiggarasje i tre er rimeligst fra ca. 400 000-600 000 kr, stedsbygd murgarasje dyrest." },
  { question: "Hvor stor garasje kan man bygge uten å søke?", answer: "Du kan bygge frittliggende garasje inntil 50 m² og mønehøyde under 4 m uten å søke, men du MÅ melde det til kommunen. Garasjen må stå minst 1 meter fra nabogrense. Nærmere enn 1 meter krever alltid søknad og nabosamtykke." },
  { question: "Hva koster en ferdig montert garasje?", answer: "En ferdiggarasje (prefabrikert) koster typisk 150 000-500 000 kr for enkeltgarasje og 300 000-800 000 kr for dobbeltgarasje, levert og montert. Monteringen tar vanligvis 1-3 dager." },
  { question: "Hva koster det å støpe garasjegulv?", answer: "Støping av garasjegulv koster typisk 800-1 500 kr per m². For en garasje på 40 m² betyr det 32 000-60 000 kr inkludert armering, isolasjon under og avrettning." },
  { question: "Er det lov å bygge garasje selv?", answer: "Ja, du kan bygge garasje selv. For garasjer under 50 m² trengs ingen ansvarlig utførende, men du må følge byggtekniske krav (TEK17) for bæring, brann og ventilasjon. Elektrikerarbeid må utføres av autorisert elektriker." },
  { question: "Er det lov å bo i garasje?", answer: "Nei, det er ikke lovlig å bruke garasje som bolig uten å søke bruksendring og oppfylle TEK17-krav for boenhet (isolasjon, rømningsvei, lysforhold, ventilasjon, brannsikring). En slik ombygging krever full byggesøknad." },
  { question: "Hva koster grunnarbeid til garasje?", answer: "Grunnarbeid for garasje koster typisk 50 000-150 000 kr, avhengig av grunnforhold. Planering og graving 20 000-50 000 kr, støpt plate 30 000-60 000 kr, drenering 15 000-30 000 kr." },
  { question: "Hva koster en uisolert garasje?", answer: "En uisolert garasje koster typisk 200 000-500 000 kr for enkeltgarasje (ca. 25 m²). Ferdiggarasje i tre er rimeligst. Uisolert garasje er 30-40% billigere enn isolert, men kan ikke brukes som verksted i kulde." },
  { question: "Hva koster det å sette opp en dobbel garasje?", answer: "En dobbeltgarasje (40-50 m²) koster typisk 600 000-1 400 000 kr. Ferdiggarasje fra 300 000-600 000 kr. Stedsbygd isolert fra 800 000-1 200 000 kr. Murgarasje fra 1 000 000-1 800 000 kr." },
  { question: "Hvor stor er en enkelt garasje?", answer: "Standard enkeltgarasje er 3,5-4 m bred og 6-7 m lang, altså ca. 22-28 m². Minimumsanbefaling for komfortabel bruk med en bil er 3,5 x 6 m (21 m²). Med lagringsplass langs veggen bør du ha minst 4 x 7 m (28 m²)." },
  { question: "Hva koster en carport?", answer: "En carport koster typisk 80 000-200 000 kr for enkel bilplass og 150 000-350 000 kr for dobbel. Carport er det rimeligste alternativet fordi det ikke har vegger, noe som sparer materialer og arbeid. Beskytter mot nedbør men ikke kulde." },
];

export const metadata: Metadata = {
  title: "Hva koster garasje? Priser for garasjebygging 2026",
  description: "Garasje koster 15 000-35 000 kr per m². Se priser for ferdiggarasje, dobbeltgarasje, murgarasje, carport og byggesøknad.",
  alternates: { canonical: "https://byggepris.no/garasje" },
  openGraph: { title: "Hva koster garasje?", description: "Typisk 15 000-35 000 kr per m². Prisguide for garasje.", url: "https://byggepris.no/garasje", type: "article" },
};

export default function Page() {
  const project = projectTypes.find((p) => p.slug === "garasje")!;
  return (<>
    <BreadcrumbSchema items={[{ name: "Hjem", href: "/" }, { name: "Garasje", href: "/garasje" }]} />
    <ArticleSchema title="Hva koster garasje?" description="Prisguide for garasjebygging i Norge." slug="garasje" />
    <FAQSchema items={faq} />
    <CategoryPageTemplate project={project}
      intro="En ny garasje i Norge koster typisk mellom 15 000 og 35 000 kr per m². En standard dobbeltgarasje på 40 m² koster 600 000-1 400 000 kroner. Ferdiggarasje er 20-30% rimeligere enn stedsbygd."
      description="Garasjebygging er et av de enklere byggeprosjektene. Garasjer under 50 m² kan ofte bygges uten søknad. Prisen varierer mest basert på om den er isolert eller uisolert, tre eller mur, og om den er prefabrikert eller stedsbygd."
      content={<GarasjeContent />}
      costFactors={["Type: carport er rimeligst, murgarasje dyrest","Isolert vs uisolert – 30-40% prisforskjell","Ferdiggarasje vs stedsbygd – ferdig er 20-30% rimeligere","Grunnforhold og fundamentering","Garasjeport – fra 8 000 kr (vippeport) til 35 000 kr (seksjonalport)","Elektrisk installasjon","Størrelse – m²-prisen faller med størrelse","Om garasjen skal ha varme, vann eller verkstedfunksjon"]}
      tips={["Velg ferdiggarasje for lavest pris og raskest montering (1-3 dager).","Sjekk om du kan bygge uten søknad: under 50 m², mønehøyde under 4m, min 1m fra nabogrense.","Seksjonalport med motor er det beste valget for daglig bruk.","Isoler taket selv om veggene er uisolerte – det hindrer kondens.","Planlegg for strøm og belysning fra start – det er mye billigere å legge inn under bygging.","Velg en størrelse som gir plass til lagring i tillegg til bil.","Vurder dobbeltgarasje – prisen per m² er lavere, og ekstra plass er alltid nyttig.","Legg inn støping av gulv i totalbudsjettet – etterstøping koster mer."]}
      faq={faq}
      relatedSlugs={["bygge-hus","tilbygg","hytte","oppussing","pris-per-kvm"]}
      relatedNames={["Bygge hus","Tilbygg","Hytte","Oppussing","Pris per m²"]}
    />
  </>);
}
