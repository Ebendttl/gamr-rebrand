"use client";

import { useEffect, useRef } from "react";

/** Autoplaying muted loop; held on its poster frame when the visitor prefers reduced motion. */
export function HeroVideo({ src, poster, label }: { src: string; poster: string; label: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => {
      if (!video) return;
      if (query.matches) video.pause();
      else void video.play().catch(() => undefined);
    };
    apply();
    query.addEventListener("change", apply);
    return () => query.removeEventListener("change", apply);
  }, []);

  return (
    <video
      ref={ref}
      src={src}
      poster={poster}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      aria-label={label}
      className="block h-full w-full object-cover"
    />
  );
}
