import { Metadata } from "next";
import CategoryPageTemplate from "@/components/sections/CategoryPageTemplate";
import { projectTypes } from "@/data/prices";
import { FAQSchema, BreadcrumbSchema, ArticleSchema } from "@/components/seo/JsonLd";
import { HytteContent } from "@/components/content/HytteContent";

const faq = [
  { question: "Hva koster det å bygge en hytte på 50 m²?", answer: "En hytte på 50 m² koster typisk 1,25-2,5 millioner kr. Med enkel standard og ferdighytte kan du komme ned mot 1 million. Med høy standard og arkitekttegnet kan det overstige 3 millioner. Tomt, grunnarbeid og infrastruktur kommer i tillegg." },
  { question: "Hva koster det å bygge en hytte på 100 m²?", answer: "En hytte på 100 m² koster typisk 2,5-5 millioner kr for selve hytten. Med grunnarbeid, infrastruktur og buffer bør du budsjettere 3-6 millioner totalt. Ferdighytte er 20-30% rimeligere enn arkitekttegnet." },
  { question: "Er det lov å bo permanent i hytte?", answer: "Det avhenger av reguleringsplanen. Mange hytteområder er regulert til fritidsbruk og tillater ikke helårsbolig. Noen kommuner åpner for bruksendring, men det krever søknad og at hytten oppfyller TEK17-krav for bolig (isolasjon, brannsikring, tilgjengelighet)." },
  { question: "Er hytte en dårlig investering?", answer: "Rent økonomisk er hytte ofte en dårlig investering sammenlignet med bolig, fordi verdistigningen er lavere og driftskostnadene er høye (forsikring, strøm, vedlikehold, kommunale avgifter). Men livskvalitet og rekreasjon har en verdi som ikke måles i kroner." },
  { question: "Er hyttelån dyrere enn boliglån?", answer: "Ja, hyttelån har typisk 0,5-1,0 prosentpoeng høyere rente enn boliglån. Krav til egenkapital er ofte 25-40% (mot 15% for bolig). Noen banker tilbyr bedre vilkår hvis hytten kan brukes helårs." },
  { question: "Hvor stor hytte kan man bygge uten å søke?", answer: "Du kan ikke bygge hytte uten byggesøknad. Alle bygninger beregnet for opphold krever søknad. Regelen om 15 m² eller 50 m² uten søknad gjelder kun uthus/bod uten oppholdsrom, ikke hytter." },
  { question: "Hva koster en ferdighytte?", answer: "En ferdighytte koster typisk 20 000-35 000 kr per m² levert som byggesett. For en hytte på 80 m² betyr det 1,6-2,8 millioner kr. Nøkkelferdig (ferdig montert) koster 10-20% mer. De store produsentene (Nordbohus, Saltdalshytta, BoligPartner) har mange modeller." },
  { question: "Hva koster en minihytte?", answer: "En minihytte (20-30 m²) koster typisk 400 000-900 000 kr. Ferdige minihytter fra produsent kan leveres fra 300 000 kr som byggesett. Med grunnarbeid og montering bør du budsjettere 500 000-1 000 000 kr totalt." },
  { question: "Hva koster grunnarbeid til hytte?", answer: "Grunnarbeid for hytte koster typisk 100 000-400 000 kr. Pilarer/søyler er billigst (80 000-150 000 kr). Støpt plate koster 150 000-300 000 kr. Vanskelig tilgjengelige tomter kan ha betydelig høyere transportkostnader for maskiner og materialer." },
  { question: "Hvor lang tid tar det å bygge en hytte?", answer: "En ferdighytte tar typisk 3-6 måneder fra bestilling til ferdig. Arkitekttegnet hytte tar 6-12 måneder. Byggesøknad tar 4-12 uker. Kort byggeseson i fjellet (mai-oktober) kan forlenge prosessen til neste sesong." },
  { question: "Hva koster det å ha hytte i året?", answer: "Årlige driftskostnader for en hytte er typisk 40 000-100 000 kr, inkludert forsikring (5 000-15 000 kr), strøm (10 000-30 000 kr), kommunale avgifter (5 000-15 000 kr), vedlikehold (10 000-30 000 kr) og veirydding/brøyting." },
  { question: "Hvor mye egenkapital trenger man til hytte?", answer: "De fleste banker krever 25-40% egenkapital for hyttelån, altså 625 000-1 000 000 kr for en hytte til 2,5 millioner. Noen banker godtar 20% for hytter som kan brukes helårs. Eksisterende bolig kan brukes som tilleggssikkerhet for å redusere kravet." },
];

export const metadata: Metadata = {
  title: "Hva koster hyttebygging? Priser for hytte 2026",
  description: "Hytte koster 25 000-50 000 kr per m². Se priser for ferdighytte, minihytte, 50 og 100 m² hytte, grunnarbeid og årlige driftskostnader.",
  alternates: { canonical: "https://byggepris.no/hytte" },
  openGraph: { title: "Hva koster hyttebygging?", description: "Typisk 25 000-50 000 kr per m².", url: "https://byggepris.no/hytte", type: "article" },
};

export default function Page() {
  const project = projectTypes.find((p) => p.slug === "hytte")!;
  return (<>
    <BreadcrumbSchema items={[{ name: "Hjem", href: "/" }, { name: "Hytte", href: "/hytte" }]} />
    <ArticleSchema title="Hva koster hyttebygging?" description="Prisguide for hyttebygging i Norge." slug="hytte" />
    <FAQSchema items={faq} />
    <CategoryPageTemplate project={project}
      intro="Å bygge hytte i Norge koster typisk mellom 25 000 og 50 000 kr per m². For en hytte på 80 m² betyr det 2-4 millioner kroner for selve hytten. Med grunnarbeid, infrastruktur og buffer bør du budsjettere 2,5-5 millioner totalt."
      description="Hyttebygging har unike kostnadsdrivere sammenlignet med bolig: tilgjengelighet, transport av materialer, infrastruktur (strøm, vann, avløp) og kort byggeseson i fjellet. Ferdighytte er 20-30% rimeligere enn arkitekttegnet."
      content={<HytteContent />}
      costFactors={["Tomtens tilgjengelighet – transport kan koste 100 000-300 000 kr ekstra","Infrastruktur: strøm, vann og avløp er ikke alltid tilgjengelig","Ferdighytte vs arkitekttegnet – 20-30% prisforskjell","Kort byggeseson i fjellet (mai-oktober)","Grunnforhold og fundamentering","Standard og isolasjonsgrad (sesong vs helår)","Reguleringsbestemmelser for størrelse og utforming","Materialvalg og transport til utilgjengelige tomter"]}
      tips={["Velg ferdighytte for forutsigbar pris og rask leveranse.","Planlegg transport og logistikk nøye – dette er ofte den største overraskelsen.","Vurder off-grid med solceller og biotoalett for å spare 200 000-500 000 kr på infrastruktur.","Bygg i sommerhalvåret for lavere kostnad og enklere logistikk.","Isoler for helårsbruk selv om du primært bruker hytten om sommeren – det øker verdien.","Sjekk reguleringsplan for maks størrelse FØR du kjøper tomt.","Planlegg for fremtidig utvidelse – det er billigere å legge til rette nå enn å bygge om senere.","Bruk lokal entreprenør som kjenner forholdene i området."]}
      faq={faq}
      relatedSlugs={["bygge-hus","garasje","tilbygg","oppussing","pris-per-kvm"]}
      relatedNames={["Bygge hus","Garasje","Tilbygg","Oppussing","Pris per m²"]}
    />
  </>);
}
