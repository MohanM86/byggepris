import { Metadata } from "next";
import CategoryPageTemplate from "@/components/sections/CategoryPageTemplate";
import { projectTypes } from "@/data/prices";
import { FAQSchema, BreadcrumbSchema, ArticleSchema } from "@/components/seo/JsonLd";
import { KjokkenContent } from "@/components/content/KjokkenContent";

const faq = [
  { question: "Hvor mye koster et helt nytt kjøkken?", answer: "Et helt nytt kjøkken koster typisk 150 000-800 000 kr totalt, avhengig av størrelse og standard. IKEA-kjøkken med montering fra 100 000 kr, norsk merke (Sigdal, HTH) fra 200 000 kr, skreddersydd fra 400 000 kr. Inkludert rørlegger, elektriker og overflater." },
  { question: "Hva koster et normalt kjøkken?", answer: "Et kjøkken med normal standard koster typisk 200 000-500 000 kr totalt. Selve innredningen (skap, fronter, benkeplate) utgjør 80 000-200 000 kr. Resten er montering, rørlegger, elektriker, hvitevarer og overflater." },
  { question: "Hvor lang levetid har et kjøkken?", answer: "Et godt kjøkken varer typisk 15-25 år. Innredning av god kvalitet (massivtre, gode beslag) varer lengst. Laminatfronter har kortere levetid (10-15 år). Hvitevarer bør budsjetteres for utskifting etter 10-15 år." },
  { question: "Er det krav til sluk på kjøkken?", answer: "Nei, det er ikke krav til sluk på kjøkken i Norge. Kjøkken regnes som tørt rom, ikke våtrom. Det er heller ikke krav til membran. Men det er krav til vannfast overflate bak vask og komfyr." },
  { question: "Er kjøkken et våtrom?", answer: "Nei, kjøkken regnes ikke som våtrom i henhold til norske byggeregler. Det stilles derfor ikke krav til membran eller sluk. Men området rundt vask bør ha vannfast overflate, og det anbefales vanntett tilkobling under vasken." },
  { question: "Er kjøkken søknadspliktig?", answer: "Vanlig utskifting av kjøkken er ikke søknadspliktig. Men hvis du flytter kjøkkenet til et annet rom, endrer bærende vegger, eller gjør vesentlige endringer i rør/avløp, kan det kreve byggesøknad. Sjekk med kommunen ved større endringer." },
  { question: "Hva slags kjøkken er moderne nå?", answer: "Trendene i 2026 er: matte fronter i nøytrale farger (grønn, blå, svart), integrerte håndtak, store fliser som bakplate, kompositt benkeplate, åpen hylle-løsning kombinert med lukkede skap, og integrerte hvitevarer. Tidløse valg som hvit/grå med eik gir best langsiktig verdi." },
  { question: "Skal gulv legges under kjøkkeninnredning?", answer: "Det anbefales å legge gulv under kjøkkeninnredningen fordi det gir mest fleksibilitet ved fremtidig ombygging, og det ser bedre ut. Noen gulvtyper (spesielt vinyl) bør legges flytende og da MÅ gulvet legges under. Parkett kan legges før eller etter." },
  { question: "Hva skal ha egen kurs på kjøkken?", answer: "Komfyr/stekeovn skal ha egen kurs (vanligvis 32A). Oppvaskmaskin bør ha egen kurs. Kjøleskap bør ha egen kurs. I tillegg bør det være egne kurser for stikkontakter på benken. En elektriker setter opp riktig kursoversikt." },
  { question: "Hva koster et gjennomsnittlig kjøkken?", answer: "Gjennomsnittet for et komplett nytt kjøkken i Norge er ca. 250 000-350 000 kr inkludert innredning, hvitevarer, montering og nødvendig rørlegger/elektriker. Veldig enkelt fra 120 000 kr, premium fra 500 000 kr." },
  { question: "Er det lov med kjøkken uten vindu?", answer: "Ja, det er lov å ha kjøkken uten vindu, men det stilles krav til mekanisk ventilasjon. Kjøkkenet må ha avtrekk over komfyr (kjøkkenvifte) og tilstrekkelig lufttilførsel. Dagslys er ikke et krav for kjøkken." },
  { question: "Hva koster kjøkkeninnredning fra IKEA?", answer: "IKEA-kjøkken koster typisk 30 000-100 000 kr for innredningen (skap, fronter, skuffer). Med benkeplate legger du til 5 000-25 000 kr. Montering fra IKEA-montør koster 15 000-40 000 kr. Totalt med alt: 80 000-180 000 kr." },
];

export const metadata: Metadata = {
  title: "Hva koster nytt kjøkken? Priser for kjøkkenrenovering 2026",
  description: "Nytt kjøkken koster 25 000-70 000 kr per m². Se priser for IKEA vs skreddersydd, benkeplate, hvitevarer og komplett kostnadsfordeling.",
  alternates: { canonical: "https://byggepris.no/kjokken" },
  openGraph: { title: "Hva koster nytt kjøkken?", description: "Typisk 200 000-800 000 kr totalt.", url: "https://byggepris.no/kjokken", type: "article" },
};

export default function Page() {
  const project = projectTypes.find((p) => p.slug === "kjokken")!;
  return (<>
    <BreadcrumbSchema items={[{ name: "Hjem", href: "/" }, { name: "Kjøkken", href: "/kjokken" }]} />
    <ArticleSchema title="Hva koster nytt kjøkken?" description="Prisguide for kjøkkenrenovering i Norge." slug="kjokken" />
    <FAQSchema items={faq} />
    <CategoryPageTemplate project={project}
      intro="Et nytt kjøkken i Norge koster typisk mellom 25 000 og 70 000 kr per m². For et kjøkken på 12 m² betyr det 300 000-840 000 kroner. Gjennomsnittsbudsjettet for et komplett kjøkkenbytte er 250 000-350 000 kr."
      description="Kjøkkenet er ofte det rommet som gir mest verdi tilbake ved renovering. Innredningen (skap, fronter, benkeplate) utgjør 40-60% av totalbudsjettet. Resten er hvitevarer, montering, rørlegger, elektriker og overflater."
      content={<KjokkenContent />}
      costFactors={["Kjøkkeninnredning – fra IKEA (30 000 kr) til skreddersydd (300 000+ kr)","Benkeplate – fra laminat (5 000 kr) til keramikk (70 000 kr)","Hvitevarer – komplett sett 30 000-120 000 kr","Om rør og elektro må flyttes – legger til 20 000-60 000 kr","Montering – 15 000-50 000 kr avhengig av kompleksitet","Gulv og veggmaterialer","Belysning – under-skap, spots, pendler","Ventilasjon og avtrekksvifte"]}
      tips={["Behold eksisterende rør- og elektroopplegg for å spare 20 000-50 000 kr.","IKEA-kjøkken med god benkeplate er et utmerket kompromiss mellom pris og kvalitet.","Velg standard kabinettstørrelser – spesialbestilte mål koster 30-50% mer.","Bestill all innredning og materialer FØR arbeidet starter – leveringstid er 4-8 uker.","Prioriter god oppbevaring og belysning – det gir mest funksjonell verdi.","Vurder å montere overskap og lister selv for å spare 10 000-20 000 kr.","Velg tidløse fronter (hvit, grå, eik) fremfor trendfarger som dateres raskt.","Integrer hvitevarer for ryddigere uttrykk – merkostnaden er liten."]}
      faq={faq}
      relatedSlugs={["bad","oppussing","totalrenovering","flipping","pris-per-kvm"]}
      relatedNames={["Bad","Oppussing","Totalrenovering","Flipping","Pris per m²"]}
    />
  </>);
}
