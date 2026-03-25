"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { FadeInUp, StaggerContainer, staggerChild } from "@/components/ui/animations";
import { type ProjectType, formatNOK, hiddenCosts } from "@/data/prices";
import FAQAccordion from "@/components/sections/FAQAccordion";
import {
  IconCalculator, IconRisk, IconCheck, IconSquareMeter,
  IconBudget, IconTimeline, IconLocation,
} from "@/components/icons";

interface CategoryPageProps {
  project: ProjectType;
  intro: string;
  description: string;
  content?: React.ReactNode;
  costFactors: string[];
  tips: string[];
  faq: { question: string; answer: string }[];
  relatedSlugs: string[];
  relatedNames: string[];
}

export default function CategoryPageTemplate({
  project, intro, description, content, costFactors, tips, faq, relatedSlugs, relatedNames,
}: CategoryPageProps) {
  return (
    <main className="pt-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="text-sm text-text-muted flex items-center gap-2">
          <Link href="/" className="hover:text-accent-yellow transition-colors">Hjem</Link>
          <span>/</span>
          <span className="text-text-secondary">{project.name}</span>
        </nav>
      </div>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-14">
        <div className="grid lg:grid-cols-5 gap-10 items-start">
          <div className="lg:col-span-3">
            <FadeInUp>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent-yellow/20 bg-accent-yellow/5 mb-4">
                <span className="text-accent-yellow text-xs font-semibold">PRISGUIDE</span>
              </div>
              <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-display-sm text-text-primary mb-4">
                Hva koster {project.name.toLowerCase()}?
              </h1>
              {/* AI-friendly direct answer */}
              <p className="text-lg text-text-secondary leading-relaxed mb-4">
                {intro}
              </p>
              <p className="text-text-secondary leading-relaxed mb-6">{description}</p>
              <Link
                href="/kalkulator"
                className="inline-flex items-center gap-2 px-5 py-3 bg-accent-yellow text-bg-primary font-display font-bold rounded-xl hover:bg-accent-warm transition-colors shadow-glow-sm"
              >
                <IconCalculator size={18} />
                Beregn pris for {project.name.toLowerCase()}
              </Link>
            </FadeInUp>
          </div>

          {/* Quick stats card */}
          <FadeInUp delay={0.2} className="lg:col-span-2">
            <div className="bg-bg-card border border-surface-border rounded-2xl p-6">
              <h2 className="font-display font-bold text-sm text-text-tertiary uppercase tracking-wider mb-4">
                Prisoversikt
              </h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-accent-yellow/10 flex items-center justify-center text-accent-yellow"><IconSquareMeter size={18} /></div>
                  <div>
                    <p className="text-xs text-text-muted">Pris per m²</p>
                    <p className="font-display font-bold text-text-primary">
                      {formatNOK(project.pricePerM2Low)} – {formatNOK(project.pricePerM2High)}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-accent-yellow/10 flex items-center justify-center text-accent-yellow"><IconBudget size={18} /></div>
                  <div>
                    <p className="text-xs text-text-muted">Typisk totalpris</p>
                    <p className="font-display font-bold text-text-primary">
                      {formatNOK(project.typicalTotalLow)} – {formatNOK(project.typicalTotalHigh)}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-accent-yellow/10 flex items-center justify-center text-accent-yellow"><IconTimeline size={18} /></div>
                  <div>
                    <p className="text-xs text-text-muted">Typisk byggetid</p>
                    <p className="font-display font-bold text-text-primary">
                      {project.timeWeeksLow}–{project.timeWeeksHigh} uker
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-accent-yellow/10 flex items-center justify-center text-accent-yellow"><IconLocation size={18} /></div>
                  <div>
                    <p className="text-xs text-text-muted">Snittpris (normal standard)</p>
                    <p className="font-display font-bold text-accent-yellow">
                      {formatNOK(project.pricePerM2Mid)} per m²
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Deep content section */}
      {content && (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <FadeInUp>
            <div className="prose-custom space-y-6 text-text-secondary leading-relaxed [&_h2]:font-display [&_h2]:font-extrabold [&_h2]:text-2xl [&_h2]:text-text-primary [&_h2]:mt-10 [&_h2]:mb-4 [&_h3]:font-display [&_h3]:font-bold [&_h3]:text-lg [&_h3]:text-text-primary [&_h3]:mt-8 [&_h3]:mb-3 [&_p]:mb-4 [&_ul]:space-y-2 [&_ul]:my-4 [&_li]:text-sm [&_li]:text-text-secondary [&_strong]:text-text-primary [&_strong]:font-semibold">
              {content}
            </div>
          </FadeInUp>
        </section>
      )}

      {/* Price comparison table */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <FadeInUp>
          <div className="bg-bg-card border border-surface-border rounded-2xl overflow-hidden">
            <div className="p-6 border-b border-surface-border">
              <h2 className="font-display font-bold text-xl text-text-primary">
                Pris etter standard – {project.name}
              </h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left text-xs text-text-muted uppercase tracking-wider">
                    <th className="px-6 py-3">Standard</th>
                    <th className="px-6 py-3">Pris per m²</th>
                    <th className="px-6 py-3">50 m²</th>
                    <th className="px-6 py-3">100 m²</th>
                    <th className="px-6 py-3">150 m²</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-surface-border">
                  {[
                    { name: "Enkel", mult: 0.8 },
                    { name: "Normal", mult: 1.0 },
                    { name: "Høy", mult: 1.3 },
                    { name: "Luksuriøs", mult: 1.7 },
                  ].map((s) => {
                    const price = Math.round(project.pricePerM2Mid * s.mult);
                    return (
                      <tr key={s.name} className="text-sm hover:bg-bg-tertiary/30 transition-colors">
                        <td className="px-6 py-4 font-semibold text-text-primary">{s.name}</td>
                        <td className="px-6 py-4 font-mono text-text-secondary">{formatNOK(price)}</td>
                        <td className="px-6 py-4 font-mono text-text-secondary">{formatNOK(price * 50)}</td>
                        <td className="px-6 py-4 font-mono text-text-secondary">{formatNOK(price * 100)}</td>
                        <td className="px-6 py-4 font-mono text-text-secondary">{formatNOK(price * 150)}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </FadeInUp>
      </section>

      {/* Cost factors */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <FadeInUp>
          <h2 className="font-display font-extrabold text-2xl text-text-primary mb-6">
            Hva påvirker prisen på {project.name.toLowerCase()}?
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {costFactors.map((f) => (
              <div key={f} className="flex gap-3 bg-bg-card border border-surface-border rounded-xl p-4">
                <IconCheck size={16} className="flex-shrink-0 text-accent-yellow mt-0.5" />
                <span className="text-sm text-text-secondary">{f}</span>
              </div>
            ))}
          </div>
        </FadeInUp>
      </section>

      {/* Hidden costs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <FadeInUp>
          <div className="bg-accent-yellow/5 border border-accent-yellow/10 rounded-2xl p-6 lg:p-8">
            <div className="flex items-center gap-2 mb-4">
              <IconRisk size={20} className="text-accent-amber" />
              <h2 className="font-display font-bold text-lg text-text-primary">
                Skjulte kostnader du bør budsjettere for
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {hiddenCosts.map((c) => (
                <div key={c.name} className="flex items-center justify-between text-sm">
                  <span className="text-text-secondary">{c.name}</span>
                  <span className="font-mono text-accent-amber font-semibold">{c.percent}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeInUp>
      </section>

      {/* Tips */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <FadeInUp>
          <h2 className="font-display font-extrabold text-2xl text-text-primary mb-6">
            Tips for å spare penger på {project.name.toLowerCase()}
          </h2>
          <StaggerContainer className="space-y-3">
            {tips.map((tip, i) => (
              <motion.div key={i} variants={staggerChild} className="flex gap-3 items-start">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent-yellow/10 text-accent-yellow text-xs font-bold flex items-center justify-center mt-0.5">
                  {i + 1}
                </span>
                <p className="text-text-secondary text-sm leading-relaxed">{tip}</p>
              </motion.div>
            ))}
          </StaggerContainer>
        </FadeInUp>
      </section>

      {/* FAQ */}
      <FAQAccordion
        items={faq}
        title={`Spørsmål om ${project.name.toLowerCase()}`}
      />

      {/* Related */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 pb-20">
        <FadeInUp>
          <h2 className="font-display font-bold text-xl text-text-primary mb-4">Relaterte prosjekter</h2>
          <div className="flex flex-wrap gap-3">
            {relatedSlugs.map((slug, i) => (
              <Link
                key={slug}
                href={`/${slug}`}
                className="px-4 py-2 bg-bg-card border border-surface-border rounded-xl text-sm text-text-secondary hover:text-accent-yellow hover:border-accent-yellow/30 transition-all"
              >
                {relatedNames[i]}
              </Link>
            ))}
            <Link
              href="/kalkulator"
              className="px-4 py-2 bg-accent-yellow/10 border border-accent-yellow/20 rounded-xl text-sm text-accent-yellow font-semibold hover:bg-accent-yellow/20 transition-all flex items-center gap-1"
            >
              <IconCalculator size={14} /> Bruk kalkulator
            </Link>
          </div>
        </FadeInUp>
      </section>
    </main>
  );
}
