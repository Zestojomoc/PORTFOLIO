"use client";

import { motion } from "framer-motion";
import { useIsMobile } from "@/lib/useIsMobile";

export default function Skills() {
  const isMobile = useIsMobile();
  const revealViewport = { once: true, amount: 0.12 };

  const skills = [
    "Responsive Web Design",
    "Frontend Development",
    "Backend Development",
    "API Integration",
    "Deployment",
    "Database Integration",
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const tagVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 15 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 100, damping: 15 },
    },
  };

  const containerRevealProps = isMobile
    ? { initial: false as const }
    : {
        variants: containerVariants,
        initial: "hidden" as const,
        whileInView: "visible" as const,
        viewport: revealViewport,
      };

  const tagRevealProps = isMobile ? {} : { variants: tagVariants, whileHover: { y: -3 } };

  return (
    <section className="relative w-full overflow-hidden border-t border-neutral-900 bg-black py-20">
      {/* Decorative Index Label */}
      <div className="absolute right-6 top-10 md:right-12 text-xs font-mono text-neutral-800 tracking-[0.4em] select-none hidden sm:block">
        04 / COMPETENCIES
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-12 2xl:max-w-[1400px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Title Grid */}
          <div className="lg:col-span-4">
            <span className="text-xs uppercase tracking-[0.3em] text-neutral-500 font-mono mb-2 block">
              Skillsets
            </span>
            <h3 className="text-3xl font-display font-bold text-white uppercase tracking-tight">
              Expertise
            </h3>
          </div>

          {/* Right Tags Grid */}
          <div className="lg:col-span-8">
            <motion.div
              {...containerRevealProps}
              className="grid grid-cols-1 gap-3 sm:flex sm:flex-wrap"
            >
              {skills.map((skill) => (
                <motion.div
                  key={skill}
                  {...tagRevealProps}
                  className="rounded-sm border border-neutral-800 bg-neutral-950/40 px-4 py-3 text-center text-[10px] font-mono leading-relaxed tracking-[0.14em] text-neutral-300 transition-colors duration-300 hover:border-white hover:bg-neutral-950 hover:text-white sm:w-auto sm:px-6 sm:py-4 sm:text-sm sm:tracking-wider hover-target"
                >
                  {skill}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
