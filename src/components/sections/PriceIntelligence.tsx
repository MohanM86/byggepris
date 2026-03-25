"use client";
import { motion } from "framer-motion";
import { FadeInUp, StaggerContainer, staggerChild, useAnimatedCounter } from "@/components/ui/animations";
import { IconTrend, IconSquareMeter, IconBudget, IconTimeline } from "@/components/icons";

function StatCard({
  icon: Icon,
  value,
  suffix,
  label,
  sublabel,
}: {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  value: number;
  suffix: string;
  label: string;
  sublabel: string;
}) {
  const [count, ref] = useAnimatedCounter(value, 2000);

  return (
    <motion.div
      variants={staggerChild}
      className="relative bg-bg-card border border-surface-border rounded-2xl p-6 lg:p-8 group hover:border-accent-yellow/20 transition-all"
    >
      <div className="w-10 h-10 rounded-lg bg-accent-yellow/10 flex items-center justify-center text-accent-yellow mb-4">
        <Icon size={20} />
      </div>
      <p className="font-display font-extrabold text-3xl lg:text-4xl text-text-primary mb-1 tabular-nums">
        <span ref={ref}>{count.toLocaleString("nb-NO")}</span>
        <span className="text-accent-yellow">{suffix}</span>
      </p>
      <p className="font-display font-semibold text-sm text-text-secondary mb-0.5">{label}</p>
      <p className="text-xs text-text-tertiary">{sublabel}</p>
    </motion.div>
  );
}

export default function PriceIntelligence() {
  return (
    <section className="py-20 lg:py-28 bg-bg-secondary relative overflow-hidden">
      {/* Subtle grid bg */}
      <div className="absolute inset-0 bg-blueprint opacity-50" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInUp className="text-center mb-14">
          <p className="text-accent-yellow text-sm font-semibold tracking-wider uppercase mb-3">
            Prisintelligens
          </p>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-display-md text-text-primary mb-4">
            Norske byggepriser i tall
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Oppdatert prisdata for de vanligste byggeprosjektene i Norge.
          </p>
        </FadeInUp>

        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 mb-14">
          <StatCard
            icon={IconSquareMeter}
            value={35000}
            suffix=" kr"
            label="Snittpris per m²"
            sublabel="Nybygg normal standard"
          />
          <StatCard
            icon={IconBudget}
            value={5200000}
            suffix=" kr"
            label="Typisk husbygg"
            sublabel="150 m² enebolig"
          />
          <StatCard
            icon={IconTrend}
            value={8}
            suffix="%"
            label="Prisøkning siste år"
            sublabel="Gjennomsnitt for nybygg"
          />
          <StatCard
            icon={IconTimeline}
            value={9}
            suffix=" mnd"
            label="Typisk byggetid"
            sublabel="Enebolig fra start til innflytting"
          />
        </StaggerContainer>

        {/* Price range visualization */}
        <FadeInUp>
          <div className="bg-bg-card border border-surface-border rounded-2xl p-6 lg:p-8">
            <h3 className="font-display font-bold text-xl text-text-primary mb-6">
              Typisk m²-pris etter prosjekttype
            </h3>
            <div className="space-y-4">
              {[
                { name: "Bad", low: 40000, high: 80000, color: "from-accent-yellow to-accent-gold" },
                { name: "Tilbygg", low: 35000, high: 65000, color: "from-accent-yellow to-accent-gold" },
                { name: "Nybygg", low: 30000, high: 55000, color: "from-accent-yellow to-accent-gold" },
                { name: "Totalrenovering", low: 15000, high: 40000, color: "from-accent-amber to-accent-gold" },
                { name: "Kjøkken", low: 25000, high: 70000, color: "from-accent-yellow to-accent-gold" },
                { name: "Garasje", low: 15000, high: 35000, color: "from-accent-amber to-accent-gold" },
                { name: "Oppussing", low: 8000, high: 25000, color: "from-steel-500 to-steel-400" },
              ].map((item) => {
                const maxVal = 80000;
                const leftPct = (item.low / maxVal) * 100;
                const widthPct = ((item.high - item.low) / maxVal) * 100;
                return (
                  <div key={item.name} className="group">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-sm text-text-secondary font-medium">{item.name}</span>
                      <span className="text-xs text-text-tertiary font-mono">
                        {(item.low / 1000).toFixed(0)}k – {(item.high / 1000).toFixed(0)}k kr/m²
                      </span>
                    </div>
                    <div className="h-3 bg-bg-primary rounded-full overflow-hidden relative">
                      <motion.div
                        className={`absolute h-full rounded-full bg-gradient-to-r ${item.color}`}
                        style={{ left: `${leftPct}%` }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${widthPct}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                );
              })}
              <div className="flex items-center justify-between text-xs text-text-muted pt-2">
                <span>0 kr</span>
                <span>20 000 kr</span>
                <span>40 000 kr</span>
                <span>60 000 kr</span>
                <span>80 000 kr</span>
              </div>
            </div>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}
