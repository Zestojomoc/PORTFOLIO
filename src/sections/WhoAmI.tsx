"use client";

import { motion } from "framer-motion";
import { useIsMobile } from "@/lib/useIsMobile";

export default function WhoAmI() {
  const isMobile = useIsMobile();
  const revealViewport = { once: true, amount: 0.12 };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" as const },
    },
  };

  const lineVariants = {
    hidden: { width: 0 },
    visible: {
      width: "100%",
      transition: { duration: 1, ease: "easeInOut" as const },
    },
  };

  const textRevealProps = isMobile
    ? { initial: false as const }
    : {
        initial: "hidden" as const,
        whileInView: "visible" as const,
        viewport: revealViewport,
        variants: textVariants,
      };

  const lineRevealProps = isMobile
    ? { initial: false as const, style: { width: "100%" } }
    : {
        initial: "hidden" as const,
        whileInView: "visible" as const,
        viewport: revealViewport,
        variants: lineVariants,
      };

  return (
    <section id="who" className="relative w-full overflow-hidden border-t border-neutral-900 bg-black py-20 sm:py-24 md:py-32">
      {/* Decorative Index Label */}
      <div className="absolute right-6 top-10 md:right-12 text-xs font-mono text-neutral-800 tracking-[0.4em] select-none hidden sm:block">
        01 / IDENTITY
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-4 sm:gap-12 sm:px-6 md:px-12 lg:grid-cols-12 lg:gap-24 2xl:max-w-[1400px]">
        {/* Left Column: Heading */}
        <div className="lg:col-span-4 flex flex-col justify-start">
          <motion.h2
            {...textRevealProps}
            className="text-xs uppercase tracking-[0.3em] text-neutral-500 font-mono mb-4"
          >
            About Me
          </motion.h2>
          <motion.h3
            {...textRevealProps}
            className="text-[1.9rem] font-display font-bold leading-tight tracking-tight text-white sm:text-5xl"
          >
            Crafting Digital
            <br />
            Experiences.
          </motion.h3>
          <motion.div
            {...lineRevealProps}
            className="h-[1px] bg-neutral-800 mt-8 w-full"
          />
        </div>

        {/* Right Column: Bio Content */}
        <div className="lg:col-span-8 flex flex-col justify-between space-y-12">
          {/* Big Editorial Quote/Statement */}
          <motion.p
            {...textRevealProps}
            className="text-base font-sans font-light leading-relaxed tracking-wide text-neutral-200 sm:text-2xl md:text-3xl"
          >
            I&apos;m a full stack web developer based in the Philippines. I build clean, responsive, and easy-to-use web applications for people, businesses, and projects.
          </motion.p>

          {/* Details split */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-neutral-400 font-light leading-relaxed">
            <motion.div
              {...textRevealProps}
              className="space-y-4"
            >
              <h4 className="font-mono text-xs uppercase tracking-widest text-white">
                Frontend & Backend
              </h4>
              <p>
                I work on both the visual and technical sides of websites. I create clean pages, connect data, build useful features, and make sure everything works smoothly across the whole system.
              </p>
            </motion.div>

            <motion.div
              {...textRevealProps}
              className="space-y-4"
            >
              <h4 className="font-mono text-xs uppercase tracking-widest text-white">
                Human-Centered Approach
              </h4>
              <p>
                Beyond writing lines of code, I focus heavily on performance, usability, and responsive execution. Every layout I build is responsive, accessible, and optimized to look and feel premium on any device, from mobile to ultra-wide displays.
              </p>
            </motion.div>
          </div>

          {/* Mini Tech Quote */}
          <motion.div
            {...textRevealProps}
            className="pt-6 border-t border-neutral-900"
          >
            <span className="text-[10px] font-mono text-neutral-600 tracking-[0.2em] uppercase">
              Core Philosophy / Clean Code, High Performance, Minimalist Design
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
