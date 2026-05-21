"use client";

import { motion } from "framer-motion";
import { Mail, Phone, ArrowRight } from "lucide-react";

const Facebook = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const Instagram = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function Connect() {
  const contacts = [
    {
      label: "Email",
      value: "jayjayjomoc@gmail.com",
      href: "mailto:jayjayjomoc@gmail.com",
      icon: Mail,
    },
    {
      label: "Facebook",
      value: "Ronnel P. Jomoc Jr.",
      href: "https://www.facebook.com/ronnel.polsotin.jomoc",
      icon: Facebook,
    },
    {
      label: "Instagram",
      value: "@rawnnel",
      href: "https://instagram.com/rawnnel",
      icon: Instagram,
    },
    {
      label: "Contact Number",
      value: "09100081973",
      href: "tel:09100081973",
      icon: Phone,
    },
  ];

  const textVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" as const },
    },
  };

  return (
    <section id="connect" className="relative w-full py-20 md:py-36 bg-[#050505] border-t border-neutral-900 overflow-hidden">
      {/* Decorative Index Label */}
      <div className="absolute right-6 top-10 md:right-12 text-xs font-mono text-neutral-800 tracking-[0.4em] select-none hidden sm:block">
        06 / INQUIRIES
      </div>

      <div className="max-w-7xl 2xl:max-w-[1400px] w-full mx-auto px-6 md:px-12 relative">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] gap-10 md:gap-12 lg:gap-16 xl:gap-20 items-start">
          {/* Left Column: Heading Statement */}
          <div className="min-w-0 flex flex-col justify-between">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-neutral-500 font-mono mb-4 block">
                Let&apos;s collaborate
              </span>
              <motion.h3
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={textVariants}
                className="max-w-[12ch] text-3xl sm:text-6xl font-display font-extrabold uppercase tracking-tight text-white leading-[0.95] mb-6 sm:mb-8"
              >
                Let&apos;s build
                <br />
                something
                <br />
                <span className="text-stroke-white text-stroke-white-hover">remarkable.</span>
              </motion.h3>
              <p className="text-sm text-neutral-400 max-w-md font-light leading-relaxed mb-4 sm:mb-6">
                Have a project in mind, looking to hire a full stack web developer, or simply want to chat about development systems? Get in touch and let&apos;s start the discussion.
              </p>
            </div>

            <div className="pt-8 border-t border-neutral-900 hidden lg:block text-xs font-mono text-neutral-600">
              {"// LOCATION: ANTIPOLO, PHILIPPINES • GMT+8"}
            </div>
          </div>

          {/* Right Column: Contact Details Cards Grid */}
          <div className="min-w-0 w-full space-y-4">
            {contacts.map((contact) => {
              const Icon = contact.icon;

              return (
                <motion.a
                  key={contact.label}
                  href={contact.href}
                  target={contact.label !== "Contact Number" && contact.label !== "Email" ? "_blank" : undefined}
                  rel={contact.label !== "Contact Number" && contact.label !== "Email" ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="group block p-4 sm:p-6 border border-neutral-900 bg-neutral-950/40 hover:border-white transition-all duration-500 rounded-sm hover-target"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center space-x-3 sm:space-x-4 min-w-0">
                      <div className="p-2 border border-neutral-900 bg-black group-hover:border-neutral-800 transition-colors duration-300 rounded-sm">
                        <Icon size={16} className="text-neutral-500 group-hover:text-white transition-colors duration-300" />
                      </div>
                      <div className="min-w-0">
                        <span className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase block mb-0.5">
                          {contact.label}
                        </span>
                        <span className="text-sm sm:text-base font-sans text-white group-hover:text-neutral-300 transition-colors duration-300 break-words">
                          {contact.value}
                        </span>
                      </div>
                    </div>
                    <ArrowRight
                      size={16}
                      className="text-neutral-700 group-hover:text-white transform group-hover:translate-x-1 transition-all duration-300"
                    />
                  </div>
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
