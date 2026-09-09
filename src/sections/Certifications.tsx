"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Award, ArrowUpRight } from "lucide-react";

type Certification = {
  title: string;
  issuer: string;
  description: string;
  image: string | null;
  certificateUrl: string | null;
};

const certifications: Certification[] = [
  {
    title: "Exploring Networking with Cisco Packet Tracer",
    issuer: "Cisco Networking Academy",
    description: "Network simulation and basic network configuration.",
    image: "/certificates/cisco-packet-tracer.png",
    certificateUrl: "/certificates/cisco-packet-tracer.pdf",
  },
  {
    title: "Network Addressing and Basic Troubleshooting",
    issuer: "Cisco Networking Academy",
    description: "IP addressing, network connectivity checks, and basic troubleshooting.",
    image: "/certificates/network-addressing-troubleshooting.png",
    certificateUrl: "/certificates/network-addressing-troubleshooting.pdf",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="relative w-full overflow-hidden border-t border-neutral-900 bg-[#050505] py-20 md:py-28">
      <div className="relative mx-auto w-full max-w-7xl px-6 md:px-12 2xl:max-w-[1400px]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-12 max-w-2xl md:mb-16"
        >
          <span className="mb-2 block font-mono text-xs uppercase tracking-[0.3em] text-neutral-500">
            Learning &amp; Training
          </span>
          <h3 className="font-display text-3xl font-bold uppercase tracking-tight text-white md:text-4xl">
            Certifications
          </h3>
          <p className="mt-4 text-sm font-light leading-relaxed text-neutral-400 md:text-base">
            Certifications and training that support my development and networking skills.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-7">
          {certifications.map((certification, index) => (
            <motion.article
              key={certification.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              viewport={{ once: true, amount: 0.16 }}
              transition={{ duration: 0.55, delay: index * 0.08, ease: "easeOut" }}
              className="group flex min-w-0 flex-col border border-neutral-900 bg-black p-4 transition-colors duration-500 hover:border-neutral-700 sm:p-5"
            >
              <div className="relative mb-6 flex aspect-[16/10] items-center justify-center overflow-hidden border border-neutral-800 bg-neutral-950 sm:mb-7">
                {certification.image ? (
                  <Image
                    src={certification.image}
                    alt={`${certification.title} certificate`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                  />
                ) : (
                  <div className="flex flex-col items-center gap-3 text-center transition-transform duration-500 group-hover:scale-[1.025]">
                    <Award size={30} className="text-neutral-500" aria-hidden="true" />
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-600">
                      Certificate preview
                    </span>
                  </div>
                )}
              </div>

              <div className="flex flex-1 flex-col">
                <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.18em] text-neutral-500">
                  {certification.issuer}
                </p>
                <h4 className="text-2xl font-display font-bold leading-tight text-white sm:text-3xl">
                  {certification.title}
                </h4>
                <p className="mt-4 text-sm font-light leading-relaxed text-neutral-400">
                  {certification.description}
                </p>

                <div className="mt-7 pt-5">
                  {certification.certificateUrl ? (
                    <a
                      href={certification.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 border-b border-white pb-1 font-mono text-xs uppercase tracking-widest text-white transition-colors duration-300 hover:text-neutral-400 hover-target"
                    >
                      View Certificate
                      <ArrowUpRight size={14} aria-hidden="true" />
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-2 border-b border-neutral-700 pb-1 font-mono text-xs uppercase tracking-widest text-neutral-500" title="Add a certificate URL to enable this link">
                      View Certificate
                      <ArrowUpRight size={14} aria-hidden="true" />
                    </span>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
