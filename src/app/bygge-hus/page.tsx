import { Metadata } from "next";
import CategoryPageTemplate from "@/components/sections/CategoryPageTemplate";
import { projectTypes } from "@/data/prices";
import { FAQSchema, BreadcrumbSchema, ArticleSchema } from "@/components/seo/JsonLd";
import { ByggeHusContent } from "@/components/content/ByggeHusContent";

const faq = [
  { question: "Hva koster det å bygge hus i 2026?", answer: "I 2026 koster det typisk 30 000-55 000 kr per m² å bygge hus i Norge. For en enebolig på 150 m² betyr det 4,5-8,5 millioner kroner avhengig av standard, beliggenhet og kompleksitet. Normal standard ligger rundt 35 000-40 000 kr/m²." },
  { question: "Kan man bygge hus for 4 millioner?", answer: "Ja, det er mulig å bygge hus for 4 millioner, men det krever enkel standard, kompakt form (ca. 100-120 m²), ferdighus og rimelig beliggenhet. Du må holde utendørsarbeid på et minimum og velge standardmaterialer. Tomt kommer i tillegg." },
  { question: "Hvor stort hus kan man bygge for 5 millioner?", answer: "For 5 millioner kroner kan du bygge et hus på ca. 120-150 m² med normal standard, eller et mindre hus på 100 m² med høy standard. Størrelsen avhenger av standard, beliggenhet og grunnforhold. Ferdighus gir mest areal for pengene." },
  { question: "Hvilke hus er billigst å bygge?", answer: "De billigste husene er ferdighus med enkel rektangulær form, pulttak og standard materialer. Kompakte hus på 80-120 m² uten kjeller og med færrest mulig hjørner gir lavest m²-pris. Modulhus og tinyhouses er også rimelige alternativer." },
  { question: "Er det billigere å bygge hus eller kjøpe?", answer: "Det varierer med beliggenhet. I pressområder som Oslo er det ofte billigere å bygge enn å kjøpe tilsvarende ferdig bolig, fordi bruktboligprisene er svært høye. I mindre pressede områder kan det være rimeligere å kjøpe brukt. Husk at bygging krever tomt i tillegg." },
  { question: "Kan man få lån til å bygge hus?", answer: "Ja, bankene tilbyr byggelån som konverteres til boliglån når huset er ferdig. Du trenger minimum 15% egenkapital av total prosjektkostnad (tomt + bygging). Banken utbetaler byggelånet i rater etter fremdrift, og du betaler kun renter i byggeperioden." },
  { question: "Hvor mye egenkapital må man ha på 4 millioner?", answer: "Med 15% egenkapitalkrav trenger du 600 000 kr i egenkapital for et byggeprosjekt til 4 millioner. Tomt du allerede eier kan telle som egenkapital. Noen banker krever 20% for byggelån, altså 800 000 kr." },
  { question: "Er det lurt å bygge hus nå?", answer: "Det avhenger av din situasjon. Materialpriser har stabilisert seg etter toppårene 2021-2022, og det er bedre tilgang på håndverkere nå. Rentene er fortsatt høyere enn historisk lavnivå, men byggekostnadene stiger typisk 3-5% per år, så å vente er sjelden billigere." },
  { question: "Hvor lang tid tar det å bygge et nytt hus?", answer: "Selve byggeprosessen tar vanligvis 8-12 måneder. Planleggingsfasen med arkitekt, prosjektering og byggesøknad tar 3-6 måneder i tillegg. Totalt bør du regne 12-18 måneder fra du starter planlegging til innflytting." },
  { question: "Hva koster grunnarbeid til hus?", answer: "Grunnarbeid for et hus koster typisk 300 000-600 000 kr, avhengig av grunnforhold, tomtens beskaffenhet og om det trengs sprengning eller pæling. En grunnmur på 100 m² koster ca. 200 000-400 000 kr. Geoteknisk undersøkelse (10 000-30 000 kr) bør gjøres først." },
  { question: "Er det lov å bygge hus selv?", answer: "Ja, du kan i prinsippet bygge huset ditt selv, men du trenger godkjent ansvarlig søker og ansvarlige utførende for de tekniske fagene (elektro, VVS, bærende konstruksjoner). Mye av innvendig arbeid som maling, gulvlegging og montering kan du gjøre lovlig selv." },
  { question: "Hva er kvadratmeterprisen på nybygg?", answer: "Gjennomsnittlig kvadratmeterpris for nybygg i Norge er 35 000-40 000 kr med normal standard. Enkel standard starter fra 25 000 kr/m², høy standard koster 45 000-55 000 kr/m², og luksuriøs standard kan overstige 60 000 kr/m²." },
  { question: "Hvorfor bygges ikke nye hus med kjeller?", answer: "Mange nye hus bygges uten kjeller fordi det er dyrt (200 000-500 000 kr ekstra), krever god drenering, og nye boligkonsepter prioriterer ett-plans løsninger. Kjeller lønner seg mest på bratte tomter der du uansett må grave, eller i pressområder der m²-prisen er høy." },
  { question: "Hvor mye koster det å bygge et hus på 100 m²?", answer: "Et hus på 100 m² koster typisk 3-5,5 millioner kr avhengig av standard. Med normal standard og grunnarbeid inkludert bør du budsjettere ca. 3,8-4,5 millioner kr. Med enkel standard og ferdighus kan du komme ned mot 3 millioner." },
  { question: "Kan man bygge 50 m² uten å søke?", answer: "Nei, bolighus krever alltid byggesøknad uavhengig av størrelse. Regelen om 50 m² uten søknad gjelder kun frittliggende garasjer, uthus og lignende – ikke boliger. For bolig trengs full byggesøknad med ansvarlig søker." },
];

export const metadata: Metadata = {
  title: "Hva koster det å bygge hus? Pris per m² og totalkostnad 2026",
  description: "Se hva det koster å bygge hus i Norge i 2026. Typisk pris 30 000-55 000 kr per m². Komplett prisguide med kalkulator, kostnadsfordeling, ferdighus vs arkitekt, og tips.",
  alternates: { canonical: "https://byggepris.no/bygge-hus" },
  openGraph: {
    title: "Hva koster det å bygge hus i Norge?",
    description: "Typisk pris 30 000-55 000 kr per m². Komplett prisguide for nybygg med kalkulator.",
    url: "https://byggepris.no/bygge-hus",
    type: "article",
  },
};

export default function ByggeHus() {
  const project = projectTypes.find((p) => p.slug === "bygge-hus")!;
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Hjem", href: "/" }, { name: "Bygge hus", href: "/bygge-hus" }]} />
      <ArticleSchema title="Hva koster det å bygge hus i Norge?" description="Komplett prisguide for husbygging i Norge. Typisk pris 30 000-55 000 kr per m²." slug="bygge-hus" />
      <FAQSchema items={faq} />
      <CategoryPageTemplate
        project={project}
        intro="Å bygge hus i Norge koster typisk mellom 30 000 og 55 000 kr per m² avhengig av standard. For en enebolig på 150 m² betyr det en totalkostnad på 4,5 til 8,5 millioner kroner inkludert grunnarbeid og prosjektering."
        description="Kostnaden for å bygge nytt hus varierer mye basert på beliggenhet, standard, kompleksitet og markedsforhold. Oslo-regionen er typisk 10-15% dyrere enn landsgjennomsnittet. Ferdighus er 15-25% rimeligere enn arkitekttegnet. I denne guiden gir vi deg en komplett oversikt over hva du kan forvente å betale."
        content={<ByggeHusContent />}
        costFactors={[
          "Standard og materialvalg – den viktigste enkeltfaktoren, kan doble m²-prisen",
          "Beliggenhet – Oslo 10-15% dyrere, Stavanger og Tromsø 5-10% over snittet",
          "Husets form – enkle rektangulære hus er 15-25% billigere enn komplekse former",
          "Grunnforhold – fjell, leire eller høy grunnvannstand kan koste 100 000-800 000 kr ekstra",
          "Ferdighus vs arkitekttegnet – ferdighus er 15-25% rimeligere",
          "Energikrav (TEK17) – øker kostnaden 5-10%, men sparer energi i mange tiår",
          "Entrepriseform – totalentreprise er 5-10% dyrere, men mer forutsigbart",
          "Sesong – vinterbygging kan gi 5-10% lavere håndverkerpriser",
        ]}
        tips={[
          "Velg enkel bygningsform – rektangulært grunnriss med standard takhelling sparer 15-25% sammenlignet med komplekse former med mange hjørner.",
          "Innhent minst 3 tilbud fra ulike entreprenører – prisforskjellen kan være 20-30% for samme prosjekt.",
          "Vurder ferdighus – 15-25% rimeligere enn arkitekttegnet, med god kvalitet og forutsigbar pris fra produsenter som Block Watne og Nordbohus.",
          "Sett av minimum 15% buffer – uforutsette kostnader dukker opp i nesten alle byggeprosjekter, spesielt knyttet til grunnforhold.",
          "Gjør grundig tomteundersøkelse – en geoteknisk rapport (10 000-30 000 kr) kan spare deg for hundretusener i overraskelser.",
          "Prioriter det varige – invester i god isolasjon, vinduer og teknikk. Overflater og innredning kan oppgraderes senere.",
          "Planlegg ferdig før byggestart – endringer underveis koster 2-5 ganger mer enn om de var med fra starten.",
          "Vurder egeninnsats på enklere arbeid – maling, enkel montering og utvendig arbeid kan spare 50 000-150 000 kr.",
        ]}
        faq={faq}
        relatedSlugs={["tilbygg", "hytte", "garasje", "totalrenovering", "hva-koster-det-a-bygge-hus"]}
        relatedNames={["Tilbygg", "Hytte", "Garasje", "Totalrenovering", "Hva koster husbygging?"]}
      />
    </>
  );
}
