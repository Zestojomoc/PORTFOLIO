"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { useIsMobile } from "@/lib/useIsMobile";

export default function Hero() {
  const isMobile = useIsMobile();

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

  const containerMotionProps = isMobile
    ? { initial: false as const }
    : { variants: containerVariants, initial: "hidden" as const, animate: "visible" as const };

  const itemMotionProps = isMobile
    ? { initial: false as const }
    : { variants: itemVariants };

  const imageMotionProps = isMobile
    ? { initial: false as const }
    : { variants: imageVariants, initial: "hidden" as const, animate: "visible" as const };

  return (
    <section className="relative flex min-h-[auto] w-full items-center justify-center overflow-hidden bg-black pt-22 pb-8 sm:pt-24 sm:pb-10 md:min-h-screen md:pt-24 md:pb-16">
      {/* Background Grid Lines aligned with content max-width */}
      <div className="absolute inset-0 z-0 pointer-events-none hidden md:block opacity-20 max-w-7xl 2xl:max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="relative w-full h-full">
          <div className="absolute left-1/4 top-0 w-[1px] h-full bg-neutral-900" />
          <div className="absolute left-2/4 top-0 w-[1px] h-full bg-neutral-900" />
          <div className="absolute left-3/4 top-0 w-[1px] h-full bg-neutral-900" />
        </div>
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-6 px-4 sm:gap-8 sm:px-6 md:gap-12 md:px-12 lg:grid-cols-12 2xl:max-w-[1400px]">
        {/* Info Column */}
        <motion.div
          {...containerMotionProps}
          className="order-1 flex flex-col justify-center space-y-4 text-left sm:space-y-5 md:space-y-8 lg:order-1 lg:col-span-8"
        >
          <div className="space-y-3 md:space-y-4">
            <motion.span
              {...itemMotionProps}
              className="text-[10px] uppercase tracking-[0.28em] text-neutral-500 sm:text-xs sm:tracking-[0.35em] font-mono"
            >
              Available for projects
            </motion.span>
            <motion.h1
              {...itemMotionProps}
              className="font-display text-[clamp(2.35rem,14vw,4rem)] font-extrabold leading-[0.92] tracking-[-0.05em] text-white sm:text-6xl md:text-7xl md:tracking-tighter xl:text-[5.5rem]"
            >
              <span className="block">Ronnel P.</span>
              <span className="block text-stroke-white text-stroke-white-hover transition-colors duration-500">
                Jomoc Jr.
              </span>
            </motion.h1>
            <motion.h2
              {...itemMotionProps}
              className="text-base font-sans font-light tracking-wide text-neutral-300 sm:text-lg md:text-2xl"
            >
              Full Stack Web Developer
            </motion.h2>
          </div>

          <motion.p
            {...itemMotionProps}
            className="max-w-xl text-sm font-light leading-relaxed text-neutral-400 sm:text-base md:text-base"
          >
            Building clean, responsive, and modern web experiences with a focus on simple design and reliable functionality.
          </motion.p>

          <motion.div {...itemMotionProps} className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-1 md:pt-2 w-full sm:w-auto">
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
          {...imageMotionProps}
          className="order-2 flex justify-center pt-1 sm:pt-2 md:pt-0 lg:order-2 lg:col-span-4 lg:justify-end"
        >
          {/* Wrapper to align image and its background offset border */}
          <div className="relative aspect-[3/4] w-full max-w-[min(72vw,230px)] sm:max-w-[340px] md:max-w-[380px]">
            {/* Overlapping Background Container */}
            <div className="absolute inset-0 z-0 hidden translate-x-3 translate-y-3 rounded-sm border border-neutral-900 pointer-events-none sm:block sm:translate-x-4 sm:translate-y-4" />

            {/* Main Image Container */}
            <div className="relative w-full h-full bg-neutral-950 border border-neutral-900 overflow-hidden group rounded-sm z-10">
              <Image
                src="/portrait.png"
                alt="Ronnel P. Jomoc Jr."
                fill
                priority
                className="object-cover object-top filter grayscale contrast-115 transition-all duration-700 ease-in-out md:hover:grayscale-0 md:hover:scale-105"
                sizes="(max-width: 640px) 190px, (max-width: 768px) 280px, (max-width: 1024px) 340px, 380px"
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
