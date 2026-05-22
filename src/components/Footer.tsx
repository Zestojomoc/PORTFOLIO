"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-neutral-900 bg-black py-10">
      <div className="max-w-7xl 2xl:max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left column */}
        <div className="flex flex-col items-center md:items-start space-y-1">
          <p className="text-xs text-neutral-500 font-mono">
            &copy; {currentYear} Ronnel P. Jomoc Jr. All rights reserved.
          </p>
          
        </div>

        {/* Right column */}
        <div className="flex flex-wrap items-center justify-center md:justify-end gap-x-4 gap-y-2 text-xs text-neutral-500 font-mono">
          <a
            href="#who"
            className="hover:text-white transition-colors duration-300 hover-target"
          >
            TOP
          </a>
          <span className="text-neutral-800">/</span>
          <a
            href="mailto:jayjayjomoc@gmail.com"
            className="hover:text-white transition-colors duration-300 hover-target"
          >
            EMAIL
          </a>
          <span className="text-neutral-800">/</span>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-300 hover-target"
          >
            FB
          </a>
        </div>
      </div>
    </footer>
  );
}
