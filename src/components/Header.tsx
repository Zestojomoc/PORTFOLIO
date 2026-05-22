"use client";

import Image from "next/image";
import { useState } from "react";
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
        <div className="mx-auto flex h-18 max-w-7xl 2xl:max-w-[1400px] items-center justify-between px-4 sm:h-20 sm:px-6 md:px-12">
          {/* Logo */}
          <a
            href="#"
            aria-label="Go to top"
            className="inline-flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden sm:h-16 sm:w-16 hover-target"
          >
            <Image
              src="/icon-logo.png"
              alt="Ronnel P. Jomoc Jr. icon"
              width={64}
              height={64}
              className="h-11 w-11 scale-110 object-contain object-[center_22%] drop-shadow-[0_0_10px_rgba(255,255,255,0.18)] sm:h-full sm:w-full"
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
            className="p-2.5 text-white focus:outline-none md:hidden hover-target"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-30 flex flex-col justify-start space-y-6 overflow-y-auto bg-black/95 px-4 pt-22 pb-8 backdrop-blur-md sm:space-y-8 sm:px-6 sm:pt-24 md:hidden">
          <nav className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <div key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block font-display text-[clamp(1.9rem,9vw,2.5rem)] font-bold uppercase tracking-[0.08em] text-neutral-400 transition-colors duration-300 hover:text-white"
                >
                  {link.name}
                </a>
              </div>
            ))}
          </nav>
          <div className="pt-8 border-t border-neutral-900 flex flex-col space-y-2">
            <span className="text-xs uppercase tracking-widest text-neutral-600 font-mono">Available for projects</span>
            <a href="mailto:jayjayjomoc@gmail.com" className="break-all text-sm font-mono text-neutral-400">
              jayjayjomoc@gmail.com
            </a>
          </div>
        </div>
      )}
    </>
  );
}
