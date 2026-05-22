"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Code2, PenTool, Compass } from "lucide-react";

export default function Services() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const services = [
    {
      title: "Full Stack Web Development",
      icon: Code2,
      desc: "Building complete web applications with clean frontend interfaces, backend systems, and responsive functionality across different devices.",
      index: "01",
    },
    {
      title: "Responsive UI Development",
      icon: PenTool,
      desc: "Creating modern, responsive, and user-friendly interfaces with clean layouts, smooth interactions, and consistent design structure.",
      index: "02",
    },
    {
      title: "Backend & Deployment",
      icon: Compass,
      desc: "Managing backend logic, APIs, databases, and deployment workflows using modern tools and scalable web technologies.",
      index: "03",
    },
  ];

  return (
    <section id="services" className="relative w-full overflow-hidden border-t border-neutral-900 bg-[#050505] py-20 sm:py-24 md:py-32">
      {/* Decorative Index Label */}
      <div className="absolute right-6 top-10 md:right-12 text-xs font-mono text-neutral-800 tracking-[0.4em] select-none hidden sm:block">
        03 / OFFERINGS
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-12 2xl:max-w-[1400px]">
        {/* Section Header */}
        <div className="mb-12 sm:mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-neutral-500 font-mono mb-2 block">
            Crafting value
          </span>
          <h3 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-white uppercase">
            Services
          </h3>
        </div>

        {/* Expanding Flex/Grid Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => {
            const Icon = service.icon;
            const isHovered = hoveredIdx === idx;
            const isAnyHovered = hoveredIdx !== null;

            return (
              <motion.div
                key={service.title}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                layout
                className={`relative flex min-h-[280px] flex-col justify-between rounded-sm border bg-neutral-950/20 p-5 transition-all duration-500 cursor-default sm:min-h-[380px] sm:p-8 md:p-10 ${
                  isHovered
                    ? "border-white"
                    : isAnyHovered
                    ? "border-neutral-950 opacity-40"
                    : "border-neutral-900"
                }`}
              >
                <div>
                  <div className="mb-8 flex items-center justify-between sm:mb-10">
                    {/* Subtle Icon */}
                    <div className="p-3 border border-neutral-900 bg-black rounded-sm">
                      <Icon
                        size={22}
                        className={`transition-colors duration-500 ${
                          isHovered ? "text-white" : "text-neutral-500"
                        }`}
                      />
                    </div>
                    <span className="text-xs font-mono text-neutral-700">{service.index}</span>
                  </div>

                  <h4 className="mb-4 text-xl font-display font-bold leading-tight text-white sm:mb-6 md:text-2xl">
                    {service.title}
                  </h4>

                  <p className="text-sm text-neutral-400 font-light leading-relaxed">
                    {service.desc}
                  </p>
                </div>

                {/* Subtle Hover Action Line */}
                <div className="mt-8 overflow-hidden h-[1px] bg-neutral-900 relative">
                  <motion.div
                    initial={{ x: "-100%" }}
                    animate={{ x: isHovered ? "0%" : "-100%" }}
                    transition={{ duration: 0.5, ease: "easeOut" as const }}
                    className="absolute inset-0 bg-white"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
