"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-neutral-900 bg-black py-8 md:py-10">
      <div className="mx-auto flex max-w-7xl 2xl:max-w-[1400px] flex-col items-center justify-between gap-4 px-4 sm:px-6 md:flex-row md:gap-6 md:px-12">
        {/* Left column */}
        <div className="flex max-w-[22rem] flex-col items-center space-y-1 text-center md:items-start md:text-left">
          <p className="text-[10px] leading-relaxed text-neutral-500 sm:text-xs font-mono">
            &copy; {currentYear} Ronnel P. Jomoc Jr. All rights reserved.
          </p>
        </div>

        {/* Right column */}
        <div className="flex w-full flex-col items-center justify-center gap-1 text-[10px] text-neutral-500 sm:w-auto sm:flex-row sm:flex-wrap sm:gap-x-4 sm:gap-y-2 sm:text-xs md:justify-end font-mono">
          <a
            href="#who"
            className="px-1 py-1 transition-colors duration-300 hover:text-white hover-target"
          >
            TOP
          </a>
          <span className="hidden text-neutral-800 sm:inline">/</span>
          <a
            href="mailto:jayjayjomoc@gmail.com"
            className="px-1 py-1 break-all text-center transition-colors duration-300 hover:text-white hover-target"
          >
            EMAIL
          </a>
          <span className="hidden text-neutral-800 sm:inline">/</span>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-1 py-1 transition-colors duration-300 hover:text-white hover-target"
          >
            FB
          </a>
        </div>
      </div>
    </footer>
  );
}
