"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, X } from "lucide-react";

const photos = [
  { src: "/outside-the-ide/jay1.jpg", alt: "Outside the IDE photo 01", label: "Photo 01", width: 1536, height: 2048 },
  { src: "/outside-the-ide/jay2.jpg", alt: "Outside the IDE photo 02", label: "Photo 02", width: 1536, height: 2048 },
  { src: "/outside-the-ide/jay3.jpg", alt: "Outside the IDE photo 03", label: "Photo 03", width: 1224, height: 1848 },
  { src: "/outside-the-ide/jay4.jpg", alt: "Outside the IDE photo 04", label: "Photo 04", width: 1536, height: 2048 },
  { src: "/outside-the-ide/jay5.jpg", alt: "Outside the IDE photo 05", label: "Photo 05", width: 1536, height: 2048 },
  { src: "/outside-the-ide/jay6.jpg", alt: "Outside the IDE photo 06", label: "Photo 06", width: 1536, height: 2048 },
];

const stackPositions = [
  { x: "60%", y: 18, rotate: 3, scale: 0.9, opacity: 0.95, zIndex: 3 },
  { x: "96%", y: -12, rotate: -3, scale: 0.82, opacity: 0.8, zIndex: 2 },
  { x: "122%", y: 28, rotate: 4, scale: 0.74, opacity: 0.6, zIndex: 1 },
];

export default function OutsideTheIDE() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);
  const touchStartX = useRef<number | null>(null);

  const activePhoto = photos[activeIndex];
  const upcomingPhotos = stackPositions.map((position, stackIndex) => ({
    photo: photos[(activeIndex + stackIndex + 1) % photos.length],
    position,
  }));

  const goNext = () => {
    setDirection(1);
    setActiveIndex((current) => (current + 1) % photos.length);
  };

  const goPrevious = () => {
    setDirection(-1);
    setActiveIndex((current) => (current - 1 + photos.length) % photos.length);
  };

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedPhoto(null);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <section id="outside-the-ide" className="relative w-full overflow-hidden border-t border-neutral-900 bg-black py-20 md:py-28">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-12 2xl:max-w-[1400px]">
        <div className="mb-12 max-w-2xl md:mb-16">
          <span className="mb-3 block font-mono text-xs uppercase tracking-[0.3em] text-neutral-500">Outside the IDE</span>
          <h3 className="font-display text-3xl font-bold tracking-tight text-white md:text-5xl">Life beyond the code.</h3>
          <p className="mt-5 max-w-xl text-sm font-light leading-relaxed text-neutral-400 md:text-base">When I step away from the screen, I&apos;m usually out exploring, spending time with people, riding, or simply enjoying life outside the tech world. A few moments from when the laptop is closed.</p>
        </div>

        <div
          className="relative h-[310px] select-none sm:h-[390px] md:h-[460px] lg:h-[510px]"
          onPointerDown={(event) => { touchStartX.current = event.clientX; }}
          onPointerUp={(event) => {
            if (touchStartX.current === null) return;
            const distance = event.clientX - touchStartX.current;
            touchStartX.current = null;
            if (distance <= -45) goNext();
            if (distance >= 45) goPrevious();
          }}
          onPointerCancel={() => { touchStartX.current = null; }}
        >
          {upcomingPhotos.map(({ photo, position }) => (
            <motion.div
              key={photo.src}
              className="pointer-events-none absolute left-[4%] top-0 h-full w-[74%] sm:left-[7%] sm:w-[56%] md:left-[10%] md:w-[48%] lg:w-[43%]"
              initial={{ opacity: 0, x: position.x, y: position.y, rotate: position.rotate, scale: position.scale }}
              animate={{ opacity: position.opacity, x: position.x, y: position.y, rotate: position.rotate, scale: position.scale }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              style={{ zIndex: position.zIndex }}
              aria-hidden="true"
            >
              <Image src={photo.src} alt="" fill sizes="(max-width: 640px) 74vw, (max-width: 1024px) 48vw, 43vw" className="object-contain object-left" />
            </motion.div>
          ))}

          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.button
              key={activePhoto.src}
              type="button"
              initial={{ opacity: 0, x: direction === 1 ? "58%" : "-20%", rotate: direction === 1 ? 3 : -5, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, rotate: -1, scale: 1 }}
              exit={{ opacity: 0, x: direction === 1 ? "-18%" : "58%", rotate: direction === 1 ? -8 : 5, scale: 0.94 }}
              transition={{ duration: 0.52, ease: "easeInOut" }}
              onClick={() => setSelectedPhoto(activeIndex)}
              className="group absolute left-[4%] top-0 z-10 h-full w-[74%] overflow-hidden text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-black hover-target sm:left-[7%] sm:w-[56%] md:left-[10%] md:w-[48%] lg:w-[43%]"
              aria-label={`Open ${activePhoto.label.toLowerCase()}`}
            >
              <Image src={activePhoto.src} alt={activePhoto.alt} fill priority sizes="(max-width: 640px) 74vw, (max-width: 1024px) 48vw, 43vw" className="object-contain object-left transition-transform duration-700 ease-out group-hover:scale-[1.025]" />
              <span className="absolute inset-x-0 bottom-0 translate-y-full bg-black/70 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.16em] text-neutral-200 transition-transform duration-300 group-hover:translate-y-0 group-focus-visible:translate-y-0">{activePhoto.label}</span>
            </motion.button>
          </AnimatePresence>
        </div>

        <div className="mt-7 flex items-center justify-between border-t border-neutral-900 pt-5 font-mono text-xs uppercase tracking-[0.14em] text-neutral-500">
          <span>{String(activeIndex + 1).padStart(2, "0")} / {String(photos.length).padStart(2, "0")}</span>
          <div className="flex items-center gap-5 sm:gap-7">
            <button type="button" onClick={goPrevious} className="inline-flex items-center gap-2 transition-colors hover:text-white focus:outline-none focus-visible:text-white" aria-label="Show previous photo"><ArrowLeft size={15} aria-hidden="true" />Previous</button>
            <button type="button" onClick={goNext} className="inline-flex items-center gap-2 text-white transition-colors hover:text-neutral-400 focus:outline-none focus-visible:text-neutral-400" aria-label="Show next photo">Next<ArrowRight size={15} aria-hidden="true" /></button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedPhoto !== null && (
          <motion.div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-5 md:p-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedPhoto(null)} role="dialog" aria-modal="true" aria-label="Photo preview">
            <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.98 }} transition={{ duration: 0.2 }} className="relative max-h-full max-w-6xl" onClick={(event) => event.stopPropagation()}>
              <Image src={photos[selectedPhoto].src} alt={photos[selectedPhoto].alt} width={photos[selectedPhoto].width} height={photos[selectedPhoto].height} className="max-h-[82vh] w-auto max-w-full object-contain" priority />
              <button type="button" onClick={() => setSelectedPhoto((current) => current === null ? null : (current - 1 + photos.length) % photos.length)} className="absolute left-4 top-1/2 grid h-8 w-8 -translate-y-1/2 place-items-center text-white/75 transition-colors hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white" aria-label="Show previous photo"><ArrowLeft size={20} aria-hidden="true" /></button>
              <button type="button" onClick={() => setSelectedPhoto((current) => current === null ? null : (current + 1) % photos.length)} className="absolute right-4 top-1/2 grid h-8 w-8 -translate-y-1/2 place-items-center text-white/75 transition-colors hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white" aria-label="Show next photo"><ArrowRight size={20} aria-hidden="true" /></button>
              <button type="button" onClick={() => setSelectedPhoto(null)} className="absolute right-4 top-4 grid h-8 w-8 place-items-center text-white/75 transition-colors hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white" aria-label="Close photo preview"><X size={20} aria-hidden="true" /></button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
