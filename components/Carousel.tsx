"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type KeyboardEvent, type PointerEvent } from "react";
import { cn } from "@/lib/cn";

export type Slide = { src: string; alt: string };

const INTERVAL_MS = 4000;
const SWIPE_PX = 40;

/**
 * "From idea to launch" slides at 4:5. Advances every 4 s with a 0.9 s ease-in-out slide; pauses on hover
 * or focus; swipe and arrow keys move manually. No autoplay under prefers-reduced-motion.
 */
export function Carousel({ slides, label }: { slides: Slide[]; label: string }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);
  const startX = useRef<number | null>(null);
  const count = slides.length;

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (paused || reduced) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % count), INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [paused, reduced, count]);

  const go = (delta: number) => setIndex((i) => (i + delta + count) % count);

  function onKeyDown(e: KeyboardEvent<HTMLDivElement>) {
    if (e.key === "ArrowRight") go(1);
    else if (e.key === "ArrowLeft") go(-1);
  }

  function onPointerUp(e: PointerEvent<HTMLDivElement>) {
    if (startX.current === null) return;
    const dx = e.clientX - startX.current;
    startX.current = null;
    if (Math.abs(dx) >= SWIPE_PX) go(dx < 0 ? 1 : -1);
  }

  return (
    <div
      className="flex w-[440px] max-w-full flex-col gap-4"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div
        tabIndex={0}
        role="region"
        aria-roledescription="carousel"
        aria-label={label}
        onKeyDown={onKeyDown}
        onPointerDown={(e) => (startX.current = e.clientX)}
        onPointerUp={onPointerUp}
        onPointerCancel={() => (startX.current = null)}
        className="touch-pan-y overflow-hidden border border-line"
      >
        <ul
          className="m-0 flex list-none p-0 transition-transform duration-900 ease-in-out motion-reduce:transition-none"
          style={{ width: `${count * 100}%`, transform: `translateX(-${(index * 100) / count}%)` }}
        >
          {slides.map((s, i) => (
            <li key={s.src} aria-hidden={i !== index} className="flex-none" style={{ flexBasis: `${100 / count}%` }}>
              <Image
                src={s.src}
                alt={s.alt}
                width={864}
                height={1080}
                sizes="440px"
                className="block aspect-[4/5] h-auto w-full object-cover"
              />
            </li>
          ))}
        </ul>
      </div>
      <div aria-hidden="true" className="flex items-center gap-2">
        {slides.map((s, i) => (
          <span
            key={s.src}
            className={cn(
              "block h-1 transition-[width,background-color] duration-300",
              i === index ? "w-7 bg-blue-text" : "w-2.5 bg-line-strong",
            )}
          />
        ))}
      </div>
      <p className="sr-only" aria-live={paused ? "polite" : "off"}>
        {`Slide ${index + 1} of ${count}: ${slides[index]?.alt ?? ""}`}
      </p>
    </div>
  );
}
