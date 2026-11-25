import { cn } from "@/lib/cn";
import type { ImageSrc } from "@/lib/images";
import { Badge, type BadgeTone } from "./Badge";
import { ImageBlock } from "./ImageBlock";
import styles from "./motion.module.css";

export type SlateGame = { title: string; src: ImageSrc; status: string; tone: BadgeTone };

/** Games hero slate: 46 s marquee of game cards; focusable, pauses on hover or focus. */
export function GameSlate({ games }: { games: SlateGame[] }) {
  return (
    <div
      tabIndex={0}
      aria-label="Game slate, scrolling. Hover or focus to pause."
      className={cn(
        styles.marqueeWrap,
        "mt-14 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_6%,#000_94%,transparent)]",
      )}
    >
      <ul className={cn(styles.slate, "m-0 flex w-max list-none p-0")}>
        {[...games, ...games].map((g, i) => (
          <li
            key={i}
            aria-hidden={i >= games.length ? true : undefined}
            className="mr-4 flex flex-[0_0_300px] flex-col border border-line bg-surface"
          >
            <ImageBlock src={g.src} alt={g.title} sizes="300px" className="border-b border-line md:h-[250px]" />
            <div className="flex flex-col gap-3 p-5">
              <Badge tone={g.tone}>{g.status}</Badge>
              <div className="text-[30px] leading-[0.95] font-black tracking-[-0.045em] uppercase">{g.title}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
