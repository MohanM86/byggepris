"use client";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projectTypes, regionMultipliers, standardMultipliers, formatNOK, type ProjectType } from "@/data/prices";
import {
  IconHouse, IconExtension, IconRenovation, IconBathroom, IconKitchen,
  IconWall, IconGarage, IconCabin, IconFlipping, IconCalculator, IconRisk,
  IconArrowRight, IconCheck,
} from "@/components/icons";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  house: IconHouse, extension: IconExtension, renovation: IconRenovation,
  bathroom: IconBathroom, kitchen: IconKitchen, wall: IconWall,
  garage: IconGarage, cabin: IconCabin, flipping: IconFlipping,
};

export default function Calculator() {
  const [step, setStep] = useState(0);
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);
  const [sqm, setSqm] = useState(100);
  const [region, setRegion] = useState("oslo");
  const [standard, setStandard] = useState("normal");
  const [showResult, setShowResult] = useState(false);

  const result = useMemo(() => {
    if (!selectedProject) return null;
    const basePrice = selectedProject.pricePerM2Mid;
    const regionMult = regionMultipliers[region]?.multiplier || 1;
    const standardMult = standardMultipliers[standard]?.multiplier || 1;
    const pricePerM2 = Math.round(basePrice * regionMult * standardMult);
    const total = pricePerM2 * sqm;
    const lowRange = Math.round(total * 0.85);
    const highRange = Math.round(total * 1.2);
    const hidden = Math.round(total * 0.12);
    return { pricePerM2, total, lowRange, highRange, hidden };
  }, [selectedProject, sqm, region, standard]);

  const handleCalculate = () => {
    setShowResult(true);
    setStep(3);
  };

  return (
    <section id="kalkulator" className="py-20 lg:py-28 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent-yellow/20 bg-accent-yellow/5 mb-4">
            <IconCalculator size={14} className="text-accent-yellow" />
            <span className="text-accent-yellow text-xs font-semibold tracking-wide">GRATIS KALKULATOR</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-text-primary mb-3">
            Beregn byggekostnad
          </h2>
          <p className="text-text-secondary text-lg max-w-xl mx-auto">
            Få et realistisk prisestimat på noen sekunder. Velg prosjekttype, størrelse og standard.
          </p>
        </div>

        {/* Steps indicator */}
        <div className="flex items-center justify-center gap-2 mb-10">
          {["Prosjekt", "Detaljer", "Standard", "Resultat"].map((label, i) => (
            <div key={label} className="flex items-center gap-2">
              <button
                onClick={() => { if (i < step || (i === 0)) setStep(i); if (i < 3) setShowResult(false); }}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  i === step
                    ? "bg-accent-yellow text-bg-primary"
                    : i < step
                    ? "bg-accent-yellow/20 text-accent-yellow"
                    : "bg-bg-card text-text-muted"
                }`}
              >
                {i < step ? <IconCheck size={12} /> : <span>{i + 1}</span>}
                <span className="hidden sm:inline">{label}</span>
              </button>
              {i < 3 && <div className={`w-8 h-px ${i < step ? "bg-accent-yellow/40" : "bg-surface-border"}`} />}
            </div>
          ))}
        </div>

        {/* Calculator card */}
        <div className="bg-bg-card border border-surface-border rounded-2xl overflow-hidden shadow-card">
          <AnimatePresence mode="wait">
            {/* STEP 0: Choose project */}
            {step === 0 && (
              <motion.div
                key="step0"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.3 }}
                className="p-6 lg:p-8"
              >
                <h3 className="font-display font-bold text-lg text-text-primary mb-5">Velg prosjekttype</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {projectTypes.map((p) => {
                    const Icon = iconMap[p.icon] || IconHouse;
                    const isSelected = selectedProject?.slug === p.slug;
                    return (
                      <button
                        key={p.slug}
                        onClick={() => { setSelectedProject(p); setSqm(Math.round((p.typicalM2Low + p.typicalM2High) / 2)); }}
                        className={`flex flex-col items-center gap-2 p-4 rounded-xl border transition-all text-center ${
                          isSelected
                            ? "border-accent-yellow bg-accent-yellow/10 shadow-glow-sm"
                            : "border-surface-border hover:border-accent-yellow/30 bg-bg-tertiary/50"
                        }`}
                      >
                        <Icon size={28} className={isSelected ? "text-accent-yellow" : "text-text-tertiary"} />
                        <span className={`text-sm font-semibold ${isSelected ? "text-accent-yellow" : "text-text-secondary"}`}>
                          {p.name}
                        </span>
                      </button>
                    );
                  })}
                </div>
                <button
                  onClick={() => selectedProject && setStep(1)}
                  disabled={!selectedProject}
                  className="mt-6 w-full flex items-center justify-center gap-2 py-3 bg-accent-yellow text-bg-primary font-display font-bold rounded-xl disabled:opacity-30 disabled:cursor-not-allowed hover:bg-accent-warm transition-colors"
                >
                  Neste <IconArrowRight size={16} />
                </button>
              </motion.div>
            )}

            {/* STEP 1: Size + Region */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.3 }}
                className="p-6 lg:p-8"
              >
                <h3 className="font-display font-bold text-lg text-text-primary mb-6">Størrelse og lokasjon</h3>

                {/* Square meters slider */}
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-3">
                    <label className="text-sm text-text-secondary font-medium">Antall kvadratmeter</label>
                    <div className="flex items-center gap-1 bg-bg-primary rounded-lg px-3 py-1.5">
                      <input
                        type="number"
                        value={sqm}
                        onChange={(e) => setSqm(Math.max(1, parseInt(e.target.value) || 0))}
                        className="w-16 bg-transparent text-right text-text-primary font-mono font-bold text-lg focus:outline-none"
                      />
                      <span className="text-text-tertiary text-sm">m²</span>
                    </div>
                  </div>
                  <input
                    type="range"
                    min={selectedProject?.typicalM2Low || 5}
                    max={Math.max((selectedProject?.typicalM2High || 200) * 1.5, sqm + 20)}
                    value={sqm}
                    onChange={(e) => setSqm(parseInt(e.target.value))}
                    className="w-full h-2 bg-bg-primary rounded-full appearance-none cursor-pointer accent-accent-yellow [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-accent-yellow [&::-webkit-slider-thumb]:shadow-glow-sm [&::-webkit-slider-thumb]:cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-text-muted mt-1">
                    <span>{selectedProject?.typicalM2Low} m²</span>
                    <span className="text-text-tertiary">Typisk: {selectedProject?.typicalM2Low}–{selectedProject?.typicalM2High} m²</span>
                    <span>{Math.round((selectedProject?.typicalM2High || 200) * 1.5)} m²</span>
                  </div>
                </div>

                {/* Region */}
                <div className="mb-6">
                  <label className="text-sm text-text-secondary font-medium mb-3 block">Hvor i Norge?</label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {Object.entries(regionMultipliers).map(([key, r]) => (
                      <button
                        key={key}
                        onClick={() => setRegion(key)}
                        className={`px-3 py-2.5 rounded-lg border text-sm font-medium transition-all ${
                          region === key
                            ? "border-accent-yellow bg-accent-yellow/10 text-accent-yellow"
                            : "border-surface-border text-text-tertiary hover:border-accent-yellow/30 hover:text-text-secondary"
                        }`}
                      >
                        {r.name}
                        {r.multiplier !== 1 && (
                          <span className="ml-1 text-xs opacity-60">
                            {r.multiplier > 1 ? "+" : ""}{Math.round((r.multiplier - 1) * 100)}%
                          </span>
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <button onClick={() => setStep(0)} className="px-5 py-3 border border-surface-border text-text-secondary font-semibold rounded-xl hover:bg-bg-tertiary transition-colors">
                    Tilbake
                  </button>
                  <button onClick={() => setStep(2)} className="flex-1 flex items-center justify-center gap-2 py-3 bg-accent-yellow text-bg-primary font-display font-bold rounded-xl hover:bg-accent-warm transition-colors">
                    Neste <IconArrowRight size={16} />
                  </button>
                </div>
              </motion.div>
            )}

            {/* STEP 2: Standard */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.3 }}
                className="p-6 lg:p-8"
              >
                <h3 className="font-display font-bold text-lg text-text-primary mb-6">Velg standard</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  {Object.entries(standardMultipliers).map(([key, s]) => (
                    <button
                      key={key}
                      onClick={() => setStandard(key)}
                      className={`text-left p-4 rounded-xl border transition-all ${
                        standard === key
                          ? "border-accent-yellow bg-accent-yellow/10 shadow-glow-sm"
                          : "border-surface-border hover:border-accent-yellow/30 bg-bg-tertiary/50"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className={`font-display font-bold text-sm ${standard === key ? "text-accent-yellow" : "text-text-primary"}`}>
                          {s.name}
                        </span>
                        {standard === key && <IconCheck size={16} className="text-accent-yellow" />}
                      </div>
                      <p className="text-xs text-text-tertiary">{s.desc}</p>
                      <p className="text-xs text-text-muted mt-2 font-mono">
                        Faktor: {s.multiplier}x
                      </p>
                    </button>
                  ))}
                </div>
                <div className="flex gap-3">
                  <button onClick={() => setStep(1)} className="px-5 py-3 border border-surface-border text-text-secondary font-semibold rounded-xl hover:bg-bg-tertiary transition-colors">
                    Tilbake
                  </button>
                  <button onClick={handleCalculate} className="flex-1 flex items-center justify-center gap-2 py-3 bg-accent-yellow text-bg-primary font-display font-bold rounded-xl hover:bg-accent-warm transition-colors shadow-glow">
                    <IconCalculator size={18} />
                    Beregn pris
                  </button>
                </div>
              </motion.div>
            )}

            {/* STEP 3: Results */}
            {step === 3 && result && showResult && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4 }}
                className="p-6 lg:p-8"
              >
                {/* Result header */}
                <div className="text-center mb-6">
                  <p className="text-text-tertiary text-sm mb-1">
                    {selectedProject?.name} · {sqm} m² · {regionMultipliers[region]?.name} · {standardMultipliers[standard]?.name}
                  </p>
                  <p className="text-xs text-text-muted mb-4">Estimert byggekostnad</p>
                  <motion.p
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    className="font-display font-extrabold text-4xl sm:text-5xl gradient-text mb-2"
                  >
                    {formatNOK(result.total)}
                  </motion.p>
                  <p className="text-text-tertiary text-sm font-mono">
                    ca. {formatNOK(result.pricePerM2)} per m²
                  </p>
                </div>

                {/* Range bar */}
                <div className="bg-bg-primary rounded-xl p-5 mb-6">
                  <p className="text-xs text-text-tertiary font-semibold uppercase tracking-wider mb-3">Normalt prisintervall</p>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-sm text-text-secondary font-mono w-28 text-right">{formatNOK(result.lowRange)}</span>
                    <div className="flex-1 h-3 bg-bg-tertiary rounded-full overflow-hidden relative">
                      <motion.div
                        className="absolute inset-y-0 bg-gradient-to-r from-accent-amber via-accent-yellow to-accent-gold rounded-full"
                        initial={{ left: "50%", right: "50%" }}
                        animate={{ left: "15%", right: "10%" }}
                        transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
                      />
                      <motion.div
                        className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-lg border-2 border-accent-yellow"
                        initial={{ left: "50%" }}
                        animate={{ left: "45%" }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                      />
                    </div>
                    <span className="text-sm text-text-secondary font-mono w-28">{formatNOK(result.highRange)}</span>
                  </div>
                  <p className="text-center text-xs text-text-muted">
                    Ditt estimat ligger innenfor normalt markedsintervall
                  </p>
                </div>

                {/* Key facts */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="bg-bg-tertiary/50 rounded-xl p-4">
                    <p className="text-xs text-text-muted mb-1">Typisk byggetid</p>
                    <p className="font-display font-bold text-text-primary">
                      {selectedProject?.timeWeeksLow}–{selectedProject?.timeWeeksHigh} uker
                    </p>
                  </div>
                  <div className="bg-bg-tertiary/50 rounded-xl p-4">
                    <IconRisk size={16} className="text-accent-amber mb-1" />
                    <p className="text-xs text-text-muted mb-1">Skjulte kostnader</p>
                    <p className="font-display font-bold text-accent-amber">
                      +{formatNOK(result.hidden)}
                    </p>
                  </div>
                </div>

                {/* Disclaimer */}
                <div className="bg-accent-yellow/5 border border-accent-yellow/10 rounded-xl p-4 mb-6">
                  <p className="text-xs text-text-secondary leading-relaxed">
                    <strong className="text-accent-yellow">Merk:</strong> Dette er et veiledende estimat basert på gjennomsnittlige markedspriser i Norge.
                    Faktisk pris avhenger av mange faktorer som tomteforhold, materialvalg, tilgjengelighet på håndverkere og mer.
                    Vi anbefaler alltid å innhente konkrete tilbud fra kvalifiserte entreprenører.
                  </p>
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <button
                    onClick={() => { setStep(0); setShowResult(false); setSelectedProject(null); }}
                    className="px-5 py-3 border border-surface-border text-text-secondary font-semibold rounded-xl hover:bg-bg-tertiary transition-colors"
                  >
                    Ny beregning
                  </button>
                  <a
                    href={`/${selectedProject?.slug}`}
                    className="flex-1 flex items-center justify-center gap-2 py-3 bg-accent-yellow/10 border border-accent-yellow/20 text-accent-yellow font-display font-bold rounded-xl hover:bg-accent-yellow/20 transition-colors"
                  >
                    Les mer om {selectedProject?.name?.toLowerCase()}
                    <IconArrowRight size={16} />
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
