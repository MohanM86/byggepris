import { Metadata } from "next";
import CategoryPageTemplate from "@/components/sections/CategoryPageTemplate";
import { projectTypes } from "@/data/prices";
import { FAQSchema, BreadcrumbSchema, ArticleSchema } from "@/components/seo/JsonLd";
import { TotalrenoveringContent } from "@/components/content/TotalrenoveringContent";

const faq = [
  { question: "Hvor mye koster en totalrenovering?", answer: "Totalrenovering koster typisk 15 000-40 000 kr per m². For en leilighet på 80 m² betyr det 1,2-3,2 millioner kr. For et hus på 150 m² betyr det 2,25-6 millioner kr. Prisen avhenger av standard, boligens alder og omfang." },
  { question: "Hva koster det å totalrenovere en leilighet på 100 m²?", answer: "Totalrenovering av en leilighet på 100 m² koster typisk 1,5-4 millioner kr. Normal standard med nytt bad, kjøkken og overflater ligger rundt 2-2,8 millioner. Med ny planløsning og høy standard kan det overstige 4 millioner." },
  { question: "Hva koster det å totalrenovere et hus på 200 m²?", answer: "Totalrenovering av et hus på 200 m² koster typisk 3-8 millioner kr. Normal standard ligger rundt 4-5,5 millioner. Høy standard med ny planløsning, nytt elektrisk anlegg og nye rør kan overstige 7 millioner." },
  { question: "Hva innebærer totalrenovering?", answer: "Totalrenovering betyr at hele boligen renoveres fra gulv til tak: riving til bærekonstruksjon, nye rør og elektro, ny isolasjon, nye overflater, nytt bad, nytt kjøkken, og ofte ny planløsning. Det er det mest omfattende renoveringsprosjektet du kan gjøre." },
  { question: "Hva er forskjellen på oppussing og renovering?", answer: "Oppussing er overflatearbeid: maling, nye gulv, tapetsering. Renovering er mer gjennomgripende: nytt bad, nytt kjøkken, nye rør/elektro. Totalrenovering er alt: hele boligen strippes og bygges opp på nytt. Pris: oppussing 8 000-25 000 kr/m², totalrenovering 15 000-40 000 kr/m²." },
  { question: "Er totalrenovering søknadspliktig?", answer: "Totalrenovering er normalt ikke søknadspliktig hvis du beholder eksisterende planløsning. Men endring av bærende vegger, nytt våtrom der det ikke var fra før, endret bruk av rom, eller fasadeendring krever byggesøknad. Sjekk med kommunen." },
  { question: "Hvor lang tid tar en totalrenovering?", answer: "Totalrenovering av en leilighet (80-100 m²) tar typisk 3-5 måneder. Et hus (150-200 m²) tar 5-8 måneder. Planlegging og evt. byggesøknad tar 1-3 måneder i tillegg. Flytt ut under arbeidet for raskere gjennomføring." },
  { question: "Hva koster totalrenovering av bad?", answer: "Totalrenovering av bad (komplett stripning og nybygg) koster 40 000-80 000 kr per m². Et bad på 6 m² koster 240 000-480 000 kr. Et bad på 10 m² koster 400 000-800 000 kr. Se vår detaljerte guide om badpriser." },
  { question: "Hva er forskjellen på restaurering og rehabilitering?", answer: "Restaurering betyr å tilbakeføre til opprinnelig stand (bevare originale detaljer). Rehabilitering betyr å sette i stand til brukbar tilstand. Totalrenovering betyr å fornye helt med moderne standard. Ved totalrenovering beholdes normalt kun bærekonstruksjonen." },
  { question: "Hva koster innvendig renovering?", answer: "Innvendig renovering (uten fasade/tak) koster typisk 12 000-35 000 kr per m². For en bolig på 100 m² betyr det 1,2-3,5 millioner. Innvendig inkluderer bad, kjøkken, overflater, rør og elektro, men ikke grunnarbeid eller fasade." },
  { question: "Hva koster det å renovere et gammelt hus?", answer: "Renovering av gammelt hus (pre-1970) koster typisk 20-50% mer enn renovering av nyere hus, fordi du ofte finner skjulte problemer: asbest, fuktskader, dårlig isolasjon, underdimensjonert elektro. Budsjetter med minst 20% buffer." },
  { question: "Lønner det seg å totalrenovere?", answer: "Det lønner seg hvis boligen har god beliggenhet, solid bærekonstruksjon, og totalrenoveringen koster under 60-70% av nybyggpris for tilsvarende bolig. I pressområder med høye boligpriser er totalrenovering ofte svært lønnsomt." },
];

export const metadata: Metadata = {
  title: "Hva koster totalrenovering? Komplett prisguide 2026",
  description: "Totalrenovering koster 15 000-40 000 kr per m². Se priser for leilighet 100 m², hus 200 m², og hva som inngår i totalrenovering.",
  alternates: { canonical: "https://byggepris.no/totalrenovering" },
  openGraph: { title: "Hva koster totalrenovering?", description: "Typisk 15 000-40 000 kr per m².", url: "https://byggepris.no/totalrenovering", type: "article" },
};

export default function Page() {
  const project = projectTypes.find((p) => p.slug === "totalrenovering")!;
  return (<>
    <BreadcrumbSchema items={[{ name: "Hjem", href: "/" }, { name: "Totalrenovering", href: "/totalrenovering" }]} />
    <ArticleSchema title="Hva koster totalrenovering?" description="Prisguide for totalrenovering i Norge." slug="totalrenovering" />
    <FAQSchema items={faq} />
    <CategoryPageTemplate project={project}
      intro="Totalrenovering i Norge koster typisk mellom 15 000 og 40 000 kr per m². For en leilighet på 100 m² betyr det 1,5-4 millioner kr. For et hus på 200 m² kan det koste 3-8 millioner kr. Det er det mest omfattende renoveringsprosjektet du kan gjennomføre."
      description="En totalrenovering innebærer at hele boligen strippes ned til bærekonstruksjon og bygges opp på nytt med nye rør, ny elektro, nye overflater, nytt bad, nytt kjøkken og ofte ny planløsning. Prisen varierer mest basert på boligens alder, standard og om det finnes skjulte problemer."
      content={<TotalrenoveringContent />}
      costFactors={["Boligens alder – eldre boliger har oftere skjulte problemer","Antall våtrom som skal renoveres","Endring av planløsning og bærende vegger","Nytt elektrisk anlegg – ofte nødvendig i boliger pre-1990","Nye rør og VVS – kan være påkrevd i eldre boliger","Isolasjon og energioppgradering","Standard og materialvalg","Skjulte fuktskader, asbest og andre overraskelser"]}
      tips={["Flytt ut under arbeidet – det går raskere og blir billigere når håndverkerne har fri tilgang.","Bruk totalentreprenør for bedre koordinering og mer forutsigbar pris.","Sett av minimum 15-20% buffer – eldre boliger har ALLTID overraskelser.","Ta bilder og dokumenter alt FØR riving – nyttig for forsikring og planlegging.","Bestill materialer tidlig – leveringstid på bad, kjøkken og vinduer er 4-12 uker.","Sjekk om det er asbest i boligen FØR riving – asbesttest koster bare 1 000-3 000 kr.","Vurder om totalrenovering er billigere enn å selge og kjøpe ny – sammenlign realistisk.","Lag en detaljert prioriteringsliste: hva MÅ gjøres vs hva er ønskelig."]}
      faq={faq}
      relatedSlugs={["oppussing","bad","kjokken","bygge-hus","bygge-nytt-vs-pusse-opp"]}
      relatedNames={["Oppussing","Bad","Kjøkken","Bygge hus","Bygge nytt vs pusse opp"]}
    />
  </>);
}
