"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { FadeInUp, StaggerContainer, staggerChild } from "@/components/ui/animations";
import { projectTypes, formatNOK } from "@/data/prices";
import {
  IconHouse, IconExtension, IconRenovation, IconBathroom, IconKitchen,
  IconWall, IconGarage, IconCabin, IconFlipping, IconArrowRight,
} from "@/components/icons";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  house: IconHouse,
  extension: IconExtension,
  renovation: IconRenovation,
  bathroom: IconBathroom,
  kitchen: IconKitchen,
  wall: IconWall,
  garage: IconGarage,
  cabin: IconCabin,
  flipping: IconFlipping,
};

export default function CategoryGrid() {
  return (
    <section className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInUp className="text-center mb-14">
          <p className="text-accent-yellow text-sm font-semibold tracking-wider uppercase mb-3">
            Byggeprosjekter
          </p>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-display-md text-text-primary mb-4">
            Hva vil du bygge?
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Velg prosjekttype og få et realistisk prisestimat basert på norske markedspriser.
          </p>
        </FadeInUp>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {projectTypes.map((project) => {
            const Icon = iconMap[project.icon] || IconHouse;
            return (
              <motion.div key={project.slug} variants={staggerChild}>
                <Link
                  href={`/${project.slug}`}
                  className="group block relative bg-bg-card border border-surface-border rounded-2xl p-6 hover:border-accent-yellow/30 transition-all duration-300 hover:shadow-glow-sm overflow-hidden"
                >
                  {/* Hover glow */}
                  <div className="absolute inset-0 bg-glow-yellow opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-accent-yellow/10 border border-accent-yellow/20 flex items-center justify-center text-accent-yellow group-hover:bg-accent-yellow/20 transition-colors">
                        <Icon size={24} />
                      </div>
                      <IconArrowRight
                        size={18}
                        className="text-text-muted group-hover:text-accent-yellow group-hover:translate-x-1 transition-all"
                      />
                    </div>

                    <h3 className="font-display font-bold text-lg text-text-primary mb-1 group-hover:text-accent-yellow transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-text-tertiary text-sm mb-4">
                      {project.shortDesc}
                    </p>

                    <div className="flex items-center gap-4 text-xs">
                      <span className="text-text-secondary">
                        <span className="text-text-muted">Fra </span>
                        <span className="font-mono font-semibold text-text-primary">
                          {formatNOK(project.pricePerM2Low)}
                        </span>
                        <span className="text-text-muted"> /m²</span>
                      </span>
                      <span className="w-px h-3 bg-surface-border" />
                      <span className="text-text-muted">
                        {project.timeWeeksLow}–{project.timeWeeksHigh} uker
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
