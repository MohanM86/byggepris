"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { FadeInUp, StaggerContainer, staggerChild } from "@/components/ui/animations";
import { IconArrowRight } from "@/components/icons";

const I = ({ d }: { d: string }) => (
  <svg width="22" height="22" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"><path d={d} /></svg>
);

const sections = [
  {
    label: "Nybygg",
    color: "text-accent-yellow",
    bar: "bg-accent-yellow",
    items: [
      { href: "/bygge-hus", name: "Bygge hus", desc: "Enebolig eller rekkehus", price: "30 000–55 000", unit: "kr/m²", icon: "M8 2L14 7V14H10V10H6V14H2V7L8 2Z", pop: true },
      { href: "/grunnarbeid", name: "Grunnarbeid", desc: "Graving, mur og fundamentering", price: "300 000–800 000", unit: "kr", icon: "M2 10H14 M4 10V14H12V10 M5 10V7H11V10 M7 7V5H9V7 M2 14H14" },
      { href: "/garasje", name: "Garasje", desc: "Enkel, dobbel eller carport", price: "15 000–35 000", unit: "kr/m²", icon: "M2 7L8 3L14 7V13H2V7Z M5 13V9H11V13" },
      { href: "/hytte", name: "Hytte", desc: "Fritidsbolig eller minihytte", price: "25 000–50 000", unit: "kr/m²", icon: "M3 8L8 3L13 8V13H3V8Z M6 13V10H10V13 M1 8L8 1L15 8" },
    ],
  },
  {
    label: "Innvendig",
    color: "text-accent-yellow",
    bar: "bg-accent-amber",
    items: [
      { href: "/bad", name: "Bad", desc: "Nytt bad eller renovering", price: "40 000–80 000", unit: "kr/m²", icon: "M2 8C2 5 4 4 8 4S14 5 14 8V9H2V8Z M4 9V12 M12 9V12 M3 12H13", pop: true },
      { href: "/kjokken", name: "Kjøkken", desc: "Nytt kjøkken eller oppgradering", price: "25 000–70 000", unit: "kr/m²", icon: "M2 6H14V13H2V6Z M5 6V4 M11 6V4 M2 9H14", pop: true },
      { href: "/gulv", name: "Gulv", desc: "Parkett, vinyl, laminat eller fliser", price: "400–1 500", unit: "kr/m²", icon: "M2 10H14 M2 10L4 6H12L14 10 M2 10V13H14V10 M6 10V13 M10 10V13" },
      { href: "/maling", name: "Maling", desc: "Innvendig og utvendig", price: "80–600", unit: "kr/m²", icon: "M10 2L13 2L13 6L10 6L10 8L7 8L7 14L5 14L5 8L3 8L3 5L10 5V2Z" },
      { href: "/pipe-og-ildsted", name: "Pipe og ildsted", desc: "Vedovn, peis eller gasspeis", price: "25 000–200 000", unit: "kr", icon: "M6 14V8L8 5L10 8V14 M4 14H12 M7 3C7 1.5 8 1 8 1S9 1.5 9 3" },
    ],
  },
  {
    label: "Utvendig",
    color: "text-accent-yellow",
    bar: "bg-accent-gold",
    items: [
      { href: "/tak", name: "Tak", desc: "Omlegging eller nytt tak", price: "1 500–4 000", unit: "kr/m²", icon: "M2 8L8 3L14 8 M4 7V4H6V5.5 M3 8H13" },
      { href: "/fasade", name: "Fasade", desc: "Maling, kledning eller isolering", price: "300–4 000", unit: "kr/m²", icon: "M3 3H13V13H3V3Z M3 7H13 M8 3V13 M5 5V5.01 M11 5V5.01" },
      { href: "/terrasse", name: "Terrasse", desc: "Tre, kompositt eller Kebony", price: "2 000–7 000", unit: "kr/m²", icon: "M1 10H15 M3 10V14 M7 10V14 M11 10V14 M1 14H15 M2 10L4 7H12L14 10" },
      { href: "/vinduer", name: "Vinduer", desc: "Tolags, trelags eller dører", price: "5 000–15 000", unit: "kr/stk", icon: "M3 3H13V13H3V3Z M3 8H13 M8 3V13" },
      { href: "/drenering", name: "Drenering", desc: "Rundt hus eller enkeltvegg", price: "2 000–4 000", unit: "kr/m", icon: "M3 4C5 6 5 8 3 10C5 12 5 14 3 14 M8 4C10 6 10 8 8 10C10 12 10 14 8 14 M13 4C15 6 15 8 13 10" },
    ],
  },
  {
    label: "Hele boligen",
    color: "text-accent-yellow",
    bar: "bg-accent-yellow",
    items: [
      { href: "/oppussing", name: "Oppussing", desc: "Overflater og lettere tiltak", price: "8 000–25 000", unit: "kr/m²", icon: "M3 13V8L5 6H11L13 8V13 M6 10H10 M6 13V10", pop: true },
      { href: "/totalrenovering", name: "Totalrenovering", desc: "Komplett fra gulv til tak", price: "15 000–40 000", unit: "kr/m²", icon: "M2 14H14 M4 14V5L8 2L12 5V14 M7 14V10H9V14" },
      { href: "/tilbygg", name: "Tilbygg", desc: "Utvid boligen med nytt areal", price: "35 000–65 000", unit: "kr/m²", icon: "M2 6L6 3L10 6V12H2V6Z M10 8H14V12H10" },
      { href: "/kjeller", name: "Kjeller", desc: "Innredning til boareal", price: "15 000–35 000", unit: "kr/m²", icon: "M2 8H14 M4 8V14H12V8 M6 10H10 M6 12H10 M4 4H12" },
      { href: "/utleiedel", name: "Utleiedel", desc: "Egen boenhet for utleie", price: "500k–1,5 mill.", unit: "", icon: "M2 7L8 3L14 7V14H2V7Z M8 7V14 M5 10H5.01 M11 10H11.01" },
    ],
  },
  {
    label: "Energi og teknikk",
    color: "text-accent-yellow",
    bar: "bg-emerald-500",
    items: [
      { href: "/isolasjon", name: "Isolasjon", desc: "Loft, vegger eller gulv", price: "300–1 500", unit: "kr/m²", icon: "M4 2V14 M8 2V14 M12 2V14 M2 5H6 M6 8H10 M10 11H14" },
      { href: "/varmepumpe", name: "Varmepumpe", desc: "Luft, vann eller bergvarme", price: "15 000–300 000", unit: "kr", icon: "M8 2C5 2 3 4.5 3 7.5C3 10 5 12 8 14C11 12 13 10 13 7.5C13 4.5 11 2 8 2Z M6 7L8 9L10 5" },
      { href: "/elektriker", name: "Elektriker", desc: "Nytt anlegg, tavle eller elbil", price: "600–900", unit: "kr/time", icon: "M9 2L5 8H8L7 14L11 8H8L9 2Z" },
      { href: "/rorlegger", name: "Rørlegger", desc: "Rør, sluk og varmtvann", price: "700–1 100", unit: "kr/time", icon: "M4 3V7C4 9 6 10 8 10S12 9 12 7V3 M6 10V14 M10 10V14 M4 14H12" },
    ],
  },
  {
    label: "Økonomi og strategi",
    color: "text-accent-yellow",
    bar: "bg-accent-amber",
    items: [
      { href: "/flipping", name: "Flipping", desc: "Oppgradering for videresalg", price: "5 000–20 000", unit: "kr/m²", icon: "M4 12L8 4L12 12 M6 9H10 M3 14H13" },
      { href: "/oppussing-for-salg", name: "Oppussing før salg", desc: "Tiltak som øker verdien", price: "Varierer", unit: "", icon: "M3 8L8 3L13 8V13H3V8Z M7 13V9H9V13 M2 3L14 3" },
      { href: "/byggesaknad", name: "Byggesøknad", desc: "Gebyrer og ansvarlig søker", price: "25 000–100 000", unit: "kr", icon: "M4 2H12V14H4V2Z M6 5H10 M6 7H10 M6 9H8 M9 11L10 12L12 10" },
    ],
  },
];

function PriceBar({ price }: { price: string }) {
  const num = parseInt(price.replace(/\D/g, ""));
  let level = 1;
  if (num > 10000) level = 2;
  if (num > 30000) level = 3;
  return (
    <div className="flex gap-0.5">
      <div className={`h-1 w-3 rounded-full ${level >= 1 ? "bg-accent-yellow" : "bg-surface-border"}`} />
      <div className={`h-1 w-3 rounded-full ${level >= 2 ? "bg-accent-yellow" : "bg-surface-border"}`} />
      <div className={`h-1 w-3 rounded-full ${level >= 3 ? "bg-accent-yellow" : "bg-surface-border"}`} />
    </div>
  );
}

export default function CategoryGrid() {
  return (
    <section className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInUp className="text-center mb-16">
          <p className="text-accent-yellow text-sm font-semibold tracking-wider uppercase mb-3">
            25 prosjekttyper med priser
          </p>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-display-md text-text-primary mb-4">
            Hva vil du bygge?
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Velg prosjekttype og få et realistisk prisestimat. Alle priser er oppdatert for 2026.
          </p>
        </FadeInUp>

        <div className="space-y-14">
          {sections.map((section) => (
            <div key={section.label}>
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-1 h-5 rounded-full ${section.bar}`} />
                <h3 className="font-display font-bold text-lg text-text-primary">{section.label}</h3>
                <div className="flex-1 h-px bg-surface-border/50" />
              </div>

              <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                {section.items.map((item) => (
                  <motion.div key={item.href} variants={staggerChild}>
                    <Link
                      href={item.href}
                      className="group block relative bg-bg-card border border-surface-border rounded-xl p-5 hover:border-accent-yellow/30 transition-all duration-300 hover:shadow-glow-sm overflow-hidden h-full"
                    >
                      <div className="absolute inset-0 bg-glow-yellow opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      <div className="relative">
                        <div className="flex items-start justify-between mb-3">
                          <div className="w-10 h-10 rounded-lg bg-accent-yellow/10 border border-accent-yellow/20 flex items-center justify-center text-accent-yellow group-hover:bg-accent-yellow/20 transition-colors">
                            <I d={item.icon} />
                          </div>
                          <div className="flex items-center gap-2">
                            {item.pop && (
                              <span className="text-[10px] font-semibold text-accent-yellow bg-accent-yellow/10 border border-accent-yellow/20 px-1.5 py-0.5 rounded">
                                POPULÆR
                              </span>
                            )}
                            <IconArrowRight size={14} className="text-text-muted group-hover:text-accent-yellow group-hover:translate-x-0.5 transition-all" />
                          </div>
                        </div>

                        <h4 className="font-display font-bold text-text-primary mb-0.5 group-hover:text-accent-yellow transition-colors">
                          {item.name}
                        </h4>
                        <p className="text-text-tertiary text-xs mb-3">
                          {item.desc}
                        </p>

                        <div className="flex items-center justify-between">
                          <span className="text-xs text-text-secondary">
                            <span className="font-mono font-semibold text-text-primary">{item.price}</span>
                            {item.unit && <span className="text-text-muted"> {item.unit}</span>}
                          </span>
                          <PriceBar price={item.price} />
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </StaggerContainer>
            </div>
          ))}
        </div>

        <FadeInUp className="text-center mt-14">
          <Link
            href="/pris-per-kvm"
            className="inline-flex items-center gap-2 px-6 py-3 bg-bg-card border border-surface-border rounded-xl text-text-secondary hover:text-accent-yellow hover:border-accent-yellow/30 transition-all font-display font-semibold text-sm"
          >
            Se alle m² priser <IconArrowRight size={16} />
          </Link>
        </FadeInUp>
      </div>
    </section>
  );
}
