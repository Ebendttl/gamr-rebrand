import Image from "next/image";
import { cn } from "@/lib/cn";
import styles from "./motion.module.css";

export type Logo = { name: string; src: string; width: number; height: number; displayHeight: number; label: string };

/** "Trusted by" strip: continuous 38 s marquee with an edge fade, paused on hover. */
export function LogoMarquee({ logos }: { logos: Logo[] }) {
  return (
    <div
      className={cn(
        styles.marqueeWrap,
        "flex-[1_1_600px] overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]",
      )}
    >
      <ul className={cn(styles.marquee, "m-0 flex w-max list-none p-0")}>
        {[...logos, ...logos].map((logo, i) => (
          <li key={i} aria-hidden={i >= logos.length ? true : undefined} className="flex flex-none flex-col items-center gap-3 px-11">
            <div className="flex h-8.5 items-center">
              <Image
                src={logo.src}
                alt={logo.name}
                width={logo.width}
                height={logo.height}
                style={{ height: logo.displayHeight }}
                className="block w-auto opacity-[0.82]"
              />
            </div>
            <span className="font-mono text-[10px] font-bold tracking-[0.16em] text-muted uppercase">{logo.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
