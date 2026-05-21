"use client";

import { motion } from "framer-motion";

export default function Skills() {
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

  return (
    <section className="relative w-full py-20 bg-black border-t border-neutral-900 overflow-hidden">
      {/* Decorative Index Label */}
      <div className="absolute right-6 top-10 md:right-12 text-xs font-mono text-neutral-800 tracking-[0.4em] select-none">
        04 / COMPETENCIES
      </div>

      <div className="max-w-7xl 2xl:max-w-[1400px] w-full mx-auto px-6 md:px-12 relative">
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
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-wrap gap-3"
            >
              {skills.map((skill) => (
                <motion.div
                  key={skill}
                  variants={tagVariants}
                  whileHover={{ y: -3 }}
                  className="px-6 py-4 border border-neutral-800 bg-neutral-950/40 text-neutral-300 text-xs sm:text-sm font-mono tracking-wider hover:border-white hover:text-white hover:bg-neutral-950 transition-colors duration-300 rounded-sm hover-target"
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
