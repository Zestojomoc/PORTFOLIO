"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Who", href: "#who" },
    { name: "Tech Stack", href: "#stack" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Connect", href: "#connect" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-40 border-b border-neutral-900 bg-black/60 backdrop-blur-md">
        <div className="max-w-7xl 2xl:max-w-[1400px] mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            aria-label="Go to top"
            className="inline-flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden hover-target"
          >
            <Image
              src="/icon-logo.png"
              alt="Ronnel P. Jomoc Jr. icon"
              width={64}
              height={64}
              className="h-full w-full scale-110 object-contain object-[center_22%] drop-shadow-[0_0_10px_rgba(255,255,255,0.18)]"
              unoptimized
              preload
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs uppercase tracking-widest text-neutral-400 hover:text-white transition-colors duration-300 hover-target font-mono"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover-target p-2 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-30 bg-black pt-28 px-6 flex flex-col justify-start space-y-8 md:hidden"
          >
            <nav className="flex flex-col space-y-6">
              {navLinks.map((link, idx) => (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  key={link.name}
                >
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="font-display text-3xl font-bold uppercase tracking-wider text-neutral-400 hover:text-white transition-colors duration-300 block"
                  >
                    {link.name}
                  </a>
                </motion.div>
              ))}
            </nav>
            <div className="pt-8 border-t border-neutral-900 flex flex-col space-y-2">
              <span className="text-xs uppercase tracking-widest text-neutral-600 font-mono">Available for projects</span>
              <a href="mailto:jayjayjomoc@gmail.com" className="text-sm font-mono text-neutral-400">
                jayjayjomoc@gmail.com
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
