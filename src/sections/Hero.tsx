"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 100, damping: 20 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1.2, ease: "easeOut" as const } },
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center pt-28 pb-12 md:pt-24 md:pb-16 overflow-hidden bg-black">
      {/* Background Grid Lines aligned with content max-width */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-10 md:opacity-20 max-w-7xl 2xl:max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="relative w-full h-full">
          <div className="absolute left-1/2 top-0 w-[1px] h-full -translate-x-1/2 bg-neutral-900 md:left-1/4 md:translate-x-0" />
          <div className="absolute hidden md:block left-2/4 top-0 w-[1px] h-full bg-neutral-900" />
          <div className="absolute hidden md:block left-3/4 top-0 w-[1px] h-full bg-neutral-900" />
        </div>
      </div>

      <div className="max-w-7xl 2xl:max-w-[1400px] w-full mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 items-center z-10 relative">
        {/* Info Column */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-8 flex flex-col justify-center space-y-6 md:space-y-8 text-left order-2 lg:order-1"
        >
          <div className="space-y-4">
            <motion.h1
              variants={itemVariants}
              className="text-[3.8rem] sm:text-6xl md:text-7xl xl:text-[5.5rem] font-display font-extrabold tracking-tighter leading-[0.9] text-white"
            >
              <span className="block">Ronnel P.</span>
              <span className="block text-stroke-white text-stroke-white-hover transition-colors duration-500">
                Jomoc Jr.
              </span>
            </motion.h1>
            <motion.h2
              variants={itemVariants}
              className="text-base sm:text-lg md:text-2xl font-sans font-light tracking-wide text-neutral-300"
            >
              Full Stack Web Developer
            </motion.h2>
          </div>

          <motion.p
            variants={itemVariants}
            className="text-sm md:text-base text-neutral-400 max-w-xl font-light leading-relaxed"
          >
            Building clean, responsive, and modern web experiences with a focus on simple design and reliable functionality.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 w-full sm:w-auto">
            <Button variant="solid" onClick={() => scrollToSection("projects")} className="w-full sm:w-auto">
              View Projects
            </Button>
            <Button variant="outline" onClick={() => scrollToSection("connect")} className="w-full sm:w-auto">
              Let&apos;s Connect
            </Button>
          </motion.div>
        </motion.div>

        {/* Portrait Image Column */}
        <motion.div
          variants={imageVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-4 flex justify-center lg:justify-end order-1 lg:order-2"
        >
          {/* Wrapper to align image and its background offset border */}
          <div className="relative w-full max-w-[220px] sm:max-w-[340px] md:max-w-[380px] aspect-[3/4]">
            {/* Overlapping Background Container */}
            <div className="absolute inset-0 border border-neutral-900 translate-x-4 translate-y-4 z-0 pointer-events-none rounded-sm hidden sm:block" />

            {/* Main Image Container */}
            <div className="relative w-full h-full bg-neutral-950 border border-neutral-900 overflow-hidden group rounded-sm z-10">
              <Image
                src="/portrait.png"
                alt="Ronnel P. Jomoc Jr."
                fill
                priority
                className="object-cover object-top filter grayscale contrast-115 hover:grayscale-0 transition-all duration-700 ease-in-out hover:scale-105"
                sizes="(max-width: 640px) 220px, (max-width: 768px) 280px, (max-width: 1024px) 340px, 380px"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Animated Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center space-y-2 pointer-events-none z-10">
        <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-600 font-mono">
          Scroll Down
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-10 bg-neutral-800"
        />
      </div>
    </section>
  );
}
