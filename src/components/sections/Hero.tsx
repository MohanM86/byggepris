"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconCalculator, IconArrowRight } from "@/components/icons";
import { GlowPulse } from "@/components/ui/animations";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-blueprint" />
      <GlowPulse className="w-[600px] h-[600px] -top-20 -right-20" />
      <GlowPulse className="w-[400px] h-[400px] bottom-20 -left-20" />

      {/* Diagonal accent line */}
      <motion.div
        className="absolute top-0 right-0 w-px h-[150%] bg-gradient-to-b from-transparent via-accent-yellow/20 to-transparent origin-top-right -rotate-[25deg]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent-yellow/20 bg-accent-yellow/5 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-accent-yellow animate-pulse" />
              <span className="text-accent-yellow text-xs font-semibold tracking-wide">
                NORGES BYGGEPRISGUIDE
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-display font-extrabold text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[4rem] leading-[1.08] tracking-tight text-text-primary mb-6"
            >
              Hva koster det
              <br />
              <span className="gradient-text">å bygge i Norge?</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="text-text-secondary text-lg lg:text-xl leading-relaxed mb-8 max-w-lg"
            >
              Sjekk byggepris, oppussingskostnad og m²-pris for ditt prosjekt.
              Gratis kalkulator med realistiske estimater basert på norske markedspriser.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/kalkulator"
                className="group flex items-center justify-center gap-2 px-6 py-3.5 bg-accent-yellow text-bg-primary font-display font-bold text-base rounded-xl hover:bg-accent-warm transition-all shadow-glow hover:shadow-glow-lg"
              >
                <IconCalculator size={20} />
                Start kalkulator
                <IconArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/byggepriser"
                className="flex items-center justify-center gap-2 px-6 py-3.5 border border-surface-border text-text-primary font-display font-semibold text-base rounded-xl hover:border-accent-yellow/40 hover:bg-bg-card transition-all"
              >
                Se byggepriser
              </Link>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="flex items-center gap-6 mt-10 text-text-tertiary text-sm"
            >
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                Gratis å bruke
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                Oppdaterte priser
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                Uavhengig
              </span>
            </motion.div>
          </div>

          {/* Right: Price preview card */}
          <motion.div
            initial={{ opacity: 0, x: 40, rotateY: -5 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Glow behind card */}
              <div className="absolute -inset-4 bg-accent-yellow/5 blur-3xl rounded-3xl" />

              <div className="relative glass rounded-2xl p-6 border border-surface-border shadow-elevated">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-xs text-text-tertiary font-semibold uppercase tracking-wider mb-1">Prisestimat</p>
                    <p className="font-display font-bold text-text-primary">Bygge hus 150 m²</p>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-accent-yellow/10 border border-accent-yellow/20">
                    <span className="text-accent-yellow text-xs font-semibold">Normal standard</span>
                  </div>
                </div>

                {/* Price */}
                <div className="bg-bg-primary/50 rounded-xl p-5 mb-5">
                  <p className="text-text-tertiary text-xs mb-1">Estimert totalpris</p>
                  <motion.p
                    className="font-display font-extrabold text-3xl text-accent-yellow tabular-nums"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                  >
                    5 250 000 kr
                  </motion.p>
                  <p className="text-text-tertiary text-xs mt-1">ca. 35 000 kr per m²</p>
                </div>

                {/* Breakdown */}
                <div className="space-y-3 mb-5">
                  {[
                    { label: "Grunnarbeid", amount: "420 000 kr", pct: 8 },
                    { label: "Råbygg og konstruksjon", amount: "1 890 000 kr", pct: 36 },
                    { label: "Innredning og overflater", amount: "1 575 000 kr", pct: 30 },
                    { label: "VVS og elektro", amount: "787 500 kr", pct: 15 },
                    { label: "Prosjektering og gebyr", amount: "577 500 kr", pct: 11 },
                  ].map((item, i) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.2 + i * 0.1 }}
                    >
                      <div className="flex items-center justify-between text-sm mb-1">
                        <span className="text-text-secondary">{item.label}</span>
                        <span className="text-text-primary font-mono text-xs">{item.amount}</span>
                      </div>
                      <div className="h-1.5 bg-bg-primary rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-accent-yellow to-accent-gold rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${item.pct}%` }}
                          transition={{ delay: 1.4 + i * 0.1, duration: 0.8, ease: "easeOut" }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Range */}
                <div className="flex items-center justify-between px-4 py-3 bg-bg-tertiary/50 rounded-lg text-xs">
                  <span className="text-text-tertiary">Typisk markedspris</span>
                  <span className="text-text-secondary font-mono">4,5 – 6,8 mill. kr</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
