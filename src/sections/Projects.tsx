"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      name: "SHM",
      type: "Structural Health Monitoring System",
      desc: "A centralized web-based system for monitoring structural health, identifying dynamic properties, and evaluating inter-story drift of the Science and Technology Building using Raspberry shake 4D.",
      image: "/SHMImage.png",
      link: "https://my-django-app-latest-zvea.onrender.com/",
      index: "01",
    },
    {
      name: "CEMS",
      type: "College Event Management System",
      desc: "College Event Management System (CEMS), a web-based system designed to help schools manage college events in a faster, easier, and more organized way.",
      image: "/CEMSImaged.png",
      link: " https://github.com/Zestojomoc/CEMS-.git",
      index: "02",
    },
    {
      name: "CLF",
      type: "Campus Lost and found",
      desc: "A safe and reliable place for students to report found items, search for lost belongings, and reconnect with what matters most. Our platform helps the campus community work together to return lost items quickly, easily, and securely.",
      image: "/L&FImage.png",
      link: "https://github.com/Zestojomoc/LOST-AND-FOUND.git",
      index: "03",
    },
  ];

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" as const },
    },
  };

  return (
    <section id="projects" className="relative w-full py-20 md:py-32 bg-black border-t border-neutral-900 overflow-hidden">
      {/* Decorative Index Label */}
      <div className="absolute right-6 top-10 md:right-12 text-xs font-mono text-neutral-800 tracking-[0.4em] select-none hidden sm:block">
        05 / WORK
      </div>

      <div className="max-w-7xl 2xl:max-w-[1400px] w-full mx-auto px-6 md:px-12 relative">
        {/* Section Header */}
        <div className="mb-12 md:mb-20">
          <span className="text-xs uppercase tracking-[0.3em] text-neutral-500 font-mono mb-2 block">
            Selected Creation
          </span>
          <h3 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-white uppercase">
            PROJECTS
          </h3>
        </div>

        {/* Projects List */}
        <div className="space-y-20 md:space-y-48">
          {projects.map((project, idx) => {
            const isEven = idx % 2 === 0;
            const normalizedLink = project.link.trim();
            const isExternal = normalizedLink.startsWith("http");

            return (
              <div
                key={project.name}
                className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-16 items-center"
              >
                {/* Image Showcase Container */}
                <div
                  className={`lg:col-span-7 relative order-1 ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" as const }}
                    className="relative w-full aspect-[4/3] sm:aspect-[16/10] bg-neutral-950 border border-neutral-900 group overflow-hidden rounded-sm hover-target"
                  >
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      className="object-cover filter grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-in-out"
                      sizes="(max-width: 768px) 100vw, 800px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </motion.div>
                </div>

                {/* Typography details block */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={textVariants}
                  className={`lg:col-span-5 flex flex-col justify-center order-2 ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-4">
                    <span className="text-xs font-mono text-neutral-600">{project.index}</span>
                    <span className="text-xs uppercase tracking-widest text-neutral-500 font-mono">
                      {project.type}
                    </span>
                  </div>

                  <h4 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold uppercase tracking-tight text-white mb-5 sm:mb-6 group">
                    <a
                      href={normalizedLink}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noopener noreferrer" : undefined}
                      className="hover-target flex items-center gap-2"
                    >
                      {project.name}
                    </a>
                  </h4>

                  <p className="text-neutral-400 text-sm md:text-base font-light leading-relaxed mb-6 md:mb-8">
                    {project.desc}
                  </p>

                  <div>
                    <a
                      href={normalizedLink}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noopener noreferrer" : undefined}
                      className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-white hover:text-neutral-400 transition-colors duration-300 group hover-target border-b border-white pb-1"
                    >
                      <span>View Project</span>
                      <ArrowUpRight size={14} className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    </a>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
