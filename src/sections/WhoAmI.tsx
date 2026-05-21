"use client";

import { motion } from "framer-motion";

export default function WhoAmI() {
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

  return (
    <section id="who" className="relative w-full py-24 md:py-32 bg-black border-t border-neutral-900 overflow-hidden">
      {/* Decorative Index Label */}
      <div className="absolute right-6 top-10 md:right-12 text-xs font-mono text-neutral-800 tracking-[0.4em] select-none">
        01 / IDENTITY
      </div>

      <div className="max-w-7xl 2xl:max-w-[1400px] w-full mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 relative">
        {/* Left Column: Heading */}
        <div className="lg:col-span-4 flex flex-col justify-start">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={textVariants}
            className="text-xs uppercase tracking-[0.3em] text-neutral-500 font-mono mb-4"
          >
            About Me
          </motion.h2>
          <motion.h3
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={textVariants}
            className="text-4xl sm:text-5xl font-display font-bold tracking-tight text-white leading-tight"
          >
            Crafting Digital
            <br />
            Experiences.
          </motion.h3>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={lineVariants}
            className="h-[1px] bg-neutral-800 mt-8 w-full"
          />
        </div>

        {/* Right Column: Bio Content */}
        <div className="lg:col-span-8 flex flex-col justify-between space-y-12">
          {/* Big Editorial Quote/Statement */}
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={textVariants}
            className="text-xl sm:text-2xl md:text-3xl font-sans font-light leading-relaxed text-neutral-200 tracking-wide"
          >
            I&apos;m a full stack web developer based in the Philippines. I build clean, responsive, and easy-to-use web applications for people, businesses, and projects.
          </motion.p>

          {/* Details split */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-neutral-400 font-light leading-relaxed">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={textVariants}
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
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={textVariants}
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
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={textVariants}
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
