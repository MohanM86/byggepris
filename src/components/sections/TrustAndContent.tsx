"use client";
import { FadeInUp, StaggerContainer, staggerChild } from "@/components/ui/animations";
import { motion } from "framer-motion";
import { IconCheck, IconBlueprint, IconTrend, IconRisk, IconContractor } from "@/components/icons";

export function TrustSection() {
  const points = [
    {
      icon: IconBlueprint,
      title: "Basert på reelle markedspriser",
      desc: "Vi samler og analyserer prisdata fra byggebransjen, SSB og offentlige kilder for å gi realistiske estimater.",
    },
    {
      icon: IconTrend,
      title: "Oppdatert jevnlig",
      desc: "Prisdataene oppdateres regelmessig for å reflektere dagens kostnadsnivå i det norske markedet.",
    },
    {
      icon: IconRisk,
      title: "Inkluderer skjulte kostnader",
      desc: "Vi tar hensyn til typiske tilleggskostnader som prosjektering, gebyr, grunnarbeid og uforutsette utgifter.",
    },
    {
      icon: IconContractor,
      title: "Uavhengig informasjon",
      desc: "Byggepris.no er en uavhengig plattform. Vi selger ikke tjenester og har ingen skjult agenda.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInUp className="text-center mb-14">
          <p className="text-accent-yellow text-sm font-semibold tracking-wider uppercase mb-3">
            Vår metode
          </p>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-text-primary mb-4">
            Hvordan vi beregner byggepriser
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Prisene vi viser er basert på grundig research av det norske byggemarkedet.
            Vi kombinerer flere datakilder for å gi deg et så realistisk bilde som mulig.
          </p>
        </FadeInUp>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {points.map((p) => (
            <motion.div
              key={p.title}
              variants={staggerChild}
              className="bg-bg-card border border-surface-border rounded-2xl p-6 flex gap-4"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent-yellow/10 flex items-center justify-center text-accent-yellow">
                <p.icon size={20} />
              </div>
              <div>
                <h3 className="font-display font-bold text-text-primary mb-1">{p.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>

        <FadeInUp delay={0.3} className="mt-10 bg-bg-card border border-surface-border rounded-2xl p-6 lg:p-8">
          <h3 className="font-display font-bold text-lg text-text-primary mb-4">Viktig å vite om prisestimater</h3>
          <ul className="space-y-3">
            {[
              "Alle priser er veiledende og basert på gjennomsnittlige markedspriser i Norge.",
              "Faktisk kostnad kan variere betydelig basert på tomteforhold, materialvalg og tilgjengelighet.",
              "Vi anbefaler alltid å innhente minst 3 konkrete tilbud fra kvalifiserte entreprenører.",
              "Prisene inkluderer normalt materialer og arbeidskostnad, men ikke alltid tomtekjøp eller tilkobling.",
              "Skjulte kostnader på 10-15% bør alltid legges til budsjettet som buffer.",
            ].map((text) => (
              <li key={text} className="flex gap-3 text-sm text-text-secondary">
                <IconCheck size={16} className="flex-shrink-0 text-accent-yellow mt-0.5" />
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </FadeInUp>
      </div>
    </section>
  );
}

export function ContentHub() {
  const articles = [
    { href: "/hva-koster-det-a-bygge-hus", title: "Hva koster det å bygge hus i 2025?", desc: "Komplett guide til kostnader ved husbygging i Norge.", tag: "Guide" },
    { href: "/pris-per-kvm", title: "Pris per m² i Norge", desc: "Oppdatert oversikt over kvadratmeterpriser for bygging og renovering.", tag: "Prisdata" },
    { href: "/hva-pavirker-byggekostnad", title: "Hva påvirker byggekostnad?", desc: "Forstå de viktigste kostnadsdriverne i et byggeprosjekt.", tag: "Innsikt" },
    { href: "/skjulte-kostnader-ved-oppussing", title: "Skjulte kostnader ved oppussing", desc: "De utgiftene mange glemmer i budsjettet.", tag: "Tips" },
    { href: "/bygge-nytt-vs-pusse-opp", title: "Bygge nytt vs pusse opp", desc: "Sammenligning av kostnader og fordeler.", tag: "Sammenligning" },
    { href: "/oppussing-for-salg", title: "Oppussing før salg", desc: "Hva lønner seg å pusse opp før boligsalg?", tag: "Strategi" },
  ];

  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInUp className="text-center mb-14">
          <p className="text-accent-yellow text-sm font-semibold tracking-wider uppercase mb-3">
            Kunnskapssenter
          </p>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-text-primary mb-4">
            Lær mer om byggepriser
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Dybdeartikler og guider som hjelper deg å forstå hva byggeprosjekter faktisk koster.
          </p>
        </FadeInUp>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {articles.map((a) => (
            <motion.a
              key={a.href}
              href={a.href}
              variants={staggerChild}
              className="group block bg-bg-card border border-surface-border rounded-2xl p-6 hover:border-accent-yellow/30 hover:shadow-glow-sm transition-all"
            >
              <span className="inline-block px-2.5 py-1 rounded-md bg-accent-yellow/10 text-accent-yellow text-xs font-semibold mb-3">
                {a.tag}
              </span>
              <h3 className="font-display font-bold text-text-primary group-hover:text-accent-yellow transition-colors mb-2">
                {a.title}
              </h3>
              <p className="text-sm text-text-tertiary">{a.desc}</p>
            </motion.a>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
