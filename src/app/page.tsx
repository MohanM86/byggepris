import Hero from "@/components/sections/Hero";
import CategoryGrid from "@/components/sections/CategoryGrid";
import PriceIntelligence from "@/components/sections/PriceIntelligence";
import Calculator from "@/components/calculator/Calculator";
import { TrustSection, ContentHub } from "@/components/sections/TrustAndContent";
import FAQAccordion from "@/components/sections/FAQAccordion";
import { FAQSchema } from "@/components/seo/JsonLd";

const homeFAQ = [
  {
    question: "Hvor nøyaktige er prisestimatene på Byggepris.no?",
    answer: "Våre estimater er basert på gjennomsnittlige markedspriser i Norge og gir et realistisk bilde av hva byggeprosjekter typisk koster. Faktisk pris kan variere med 15-25% avhengig av lokale forhold, materialvalg og entreprenør. Vi anbefaler alltid å innhente konkrete tilbud.",
  },
  {
    question: "Hva koster det å bygge hus i Norge i 2025?",
    answer: "En typisk enebolig på 150 m² koster mellom 4,5 og 8,5 millioner kroner å bygge i Norge, avhengig av standard, beliggenhet og kompleksitet. Normal standard ligger rundt 30 000-40 000 kr per m². Høy standard kan koste over 55 000 kr per m².",
  },
  {
    question: "Hva er typisk pris per m² for nybygg?",
    answer: "Typisk pris per kvadratmeter for nybygg i Norge ligger mellom 30 000 og 55 000 kr, avhengig av standard. Enkel standard starter fra ca. 25 000 kr/m², mens luksusstandard kan overstige 60 000 kr/m². Prisen varierer også mellom regioner.",
  },
  {
    question: "Hva koster det å pusse opp bad?",
    answer: "Et nytt bad koster typisk mellom 160 000 og 960 000 kr, avhengig av størrelse og standard. Pris per m² for bad ligger normalt mellom 40 000 og 80 000 kr. Et standard bad på 6 m² koster typisk 250 000-450 000 kr.",
  },
  {
    question: "Er det dyrere å bygge i Oslo enn resten av Norge?",
    answer: "Ja, Oslo er typisk 10-15% dyrere enn landsgjennomsnittet for byggeprosjekter. Stavanger og Tromsø er også over snittet. Deler av Sørlandet og Midt-Norge har de laveste prisene. Forskjellene skyldes lønnskostnader, tomtepriser og lokal etterspørsel.",
  },
  {
    question: "Hva er skjulte kostnader ved bygging?",
    answer: "Vanlige skjulte kostnader inkluderer prosjektering og arkitekt (5-10% av totalpris), byggesøknad og gebyr (1-3%), grunnarbeid (5-15%), tilkobling av vann og avløp (2-5%), og uforutsette kostnader (10-15%). Vi anbefaler alltid å budsjettere med en buffer.",
  },
  {
    question: "Hvor lang tid tar det å bygge hus?",
    answer: "Typisk byggetid for en enebolig i Norge er 8-12 måneder fra byggestart til innflytting. Planleggingsfasen med arkitekt og byggesøknad kan ta ytterligere 3-6 måneder. Totalrenovering tar vanligvis 3-7 måneder avhengig av omfang.",
  },
  {
    question: "Er Byggepris.no gratis å bruke?",
    answer: "Ja, Byggepris.no er helt gratis å bruke. Vår kalkulator, prisguider og all informasjon er tilgjengelig uten kostnad. Vi er en uavhengig plattform som gir deg nøytral prisinformasjon om byggeprosjekter i Norge.",
  },
];

export default function Home() {
  return (
    <main>
      <FAQSchema items={homeFAQ} />
      <Hero />
      <CategoryGrid />
      <PriceIntelligence />
      <Calculator />
      <TrustSection />
      <ContentHub />
      <FAQAccordion
        items={homeFAQ}
        title="Ofte stilte spørsmål om byggepriser"
        subtitle="De vanligste spørsmålene om byggekostnader i Norge"
      />
    </main>
  );
}
