import Image from "next/image";
import { cn } from "@/lib/cn";
import type { ImageSrc } from "@/lib/images";
import styles from "./motion.module.css";

const DELAYS = ["0s", "5s", "10s", "15s"];

/**
 * Stand-in for the Lab gameplay video: four frames crossfading every 5 s under a dark gradient.
 * Decorative (aria-hidden). Swap for a <video> when the loop is ready (see README).
 */
export function HeroCrossfade({ frames }: { frames: [ImageSrc, ImageSrc, ImageSrc, ImageSrc] }) {
  return (
    <>
      <div aria-hidden="true">
        {frames.map((src, i) => (
          <div key={src} data-xf-frame="" className={cn(styles.frame, "absolute inset-0")} style={{ animationDelay: DELAYS[i] }}>
            <Image
              src={src}
              alt=""
              fill
              preload={i === 0}
              fetchPriority={i === 0 ? "high" : "low"}
              sizes="100vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[image:linear-gradient(90deg,rgba(0,0,0,0.92)_0%,rgba(0,0,0,0.7)_45%,rgba(0,0,0,0.35)_100%),linear-gradient(0deg,#000000_0%,rgba(0,0,0,0)_40%)]"
      />
    </>
  );
}
