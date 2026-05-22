"use client";

import { motion } from "framer-motion";

export default function TechStack() {
  const revealViewport = { once: true, amount: 0.12 };

  const coreTech = [
    { name: "Next.js", category: "Framework", desc: "React Framework for production" },
    { name: "React", category: "Library", desc: "Component-based UI development" },
    { name: "Django", category: "Framework", desc: "Python web framework for secure systems" },
    { name: "Python", category: "Language", desc: "Robust scripting & backend architecture" },
    { name: "JavaScript", category: "Language", desc: "Interactive frontend logic & programming" },
    { name: "Alpine.js", category: "Library", desc: "Minimal framework for simple page behaviors" },
    { name: "Tailwind CSS", category: "Styling", desc: "Utility-first modern CSS framework" },
    { name: "CSS", category: "Styling", desc: "Structured layouts & design styling" },
    { name: "HTML", category: "Markup", desc: "Semantic structural documents" },
  ];

  const tools = ["Vercel", "Docker", "GitHub", "Render"];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <section id="stack" className="relative w-full overflow-hidden border-t border-neutral-900 bg-black py-20 sm:py-24 md:py-32">
      {/* Decorative Label */}
      <div className="absolute right-6 top-10 md:right-12 text-xs font-mono text-neutral-800 tracking-[0.4em] select-none hidden sm:block">
        02 / CAPABILITIES
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-12 2xl:max-w-[1400px]">
        {/* Section Header */}
        <div className="mb-12 sm:mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-neutral-500 font-mono mb-2 block">
            Technical Arsenal
          </span>
          <h3 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-white uppercase">
            Tech Stack &amp; Tools
          </h3>
        </div>

        {/* Core Tech Stack Editorial Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-neutral-900 bg-neutral-950/20"
        >
          {coreTech.map((tech, index) => (
            <motion.div
              key={tech.name}
              variants={cardVariants}
                className="group relative cursor-default border-b border-neutral-900 p-5 transition-colors duration-500 hover:bg-white hover:text-black sm:p-8 md:border-r md:last:border-r-0 lg:border-r [&:nth-child(3n)]:lg:border-r-0 last:border-b-0"
            >
              <div className="flex justify-between items-start mb-6">
                <span className="text-[10px] font-mono tracking-widest text-neutral-500 group-hover:text-neutral-700 uppercase">
                  {tech.category}
                </span>
                <span className="text-[10px] font-mono text-neutral-600 group-hover:text-neutral-400">
                  {"// 0"}
                  {index + 1}
                </span>
              </div>
              <h4 className="text-lg sm:text-xl font-display font-bold tracking-wide mb-2">
                {tech.name}
              </h4>
              <p className="text-xs text-neutral-500 group-hover:text-neutral-800 leading-relaxed font-light">
                {tech.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Tools & Deployment Subsection */}
        <div className="mt-20 pt-10 border-t border-neutral-900">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4">
              <h4 className="text-xs uppercase tracking-[0.25em] text-neutral-400 font-mono">
                Tools &amp; Infrastructure
              </h4>
              <p className="text-xs text-neutral-500 mt-2 max-w-sm leading-relaxed font-light">
                Platforms and services I utilize for containerization, code management, and automated continuous deployment.
              </p>
            </div>
            <div className="lg:col-span-8 flex flex-wrap gap-3 sm:gap-4 lg:justify-end">
              {tools.map((tool) => (
                <motion.div
                  key={tool}
                  whileHover={{ scale: 1.05 }}
                  className="rounded-sm border border-neutral-900 bg-neutral-950 px-4 py-3 text-center text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-300 transition-all duration-300 hover:border-white hover:text-white sm:px-6 sm:py-4 sm:text-xs sm:tracking-widest hover-target"
                >
                  {tool}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
