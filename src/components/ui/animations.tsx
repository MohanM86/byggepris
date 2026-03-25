"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView, type Variants } from "framer-motion";

export function FadeInUp({ children, delay = 0, duration = 0.6, className = "", once = true }: { children: React.ReactNode; delay?: number; duration?: number; className?: string; once?: boolean }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-50px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }} transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }} className={className}>
      {children}
    </motion.div>
  );
}

export function StaggerContainer({ children, className = "", staggerDelay = 0.1, once = true }: { children: React.ReactNode; className?: string; staggerDelay?: number; once?: boolean }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-50px" });
  const containerVariants: Variants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: staggerDelay, delayChildren: 0.1 } } };
  return (
    <motion.div ref={ref} variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"} className={className}>
      {children}
    </motion.div>
  );
}

export const staggerChild: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export function useAnimatedCounter(target: number, duration: number = 2000, startOnView: boolean = true): [number, React.RefObject<HTMLSpanElement>] {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null!);
  const isInView = useInView(ref, { once: true });
  useEffect(() => {
    if (!startOnView || !isInView) return;
    const startTime = performance.now();
    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [target, duration, isInView, startOnView]);
  return [count, ref];
}

export function GlowPulse({ className = "" }: { className?: string }) {
  return (
    <motion.div className={`absolute rounded-full bg-accent-yellow/10 blur-3xl ${className}`} animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} />
  );
}
