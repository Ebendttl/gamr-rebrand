import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/** live/open = blue, in development/opening soon = white, closed/unknown = grey. */
export type BadgeTone = "live" | "dev" | "closed";

const TONES: Record<BadgeTone, { box: string; dot: string }> = {
  live: { box: "border-blue-text text-blue-text", dot: "bg-blue-text" },
  dev: { box: "border-white text-white", dot: "bg-white" },
  closed: { box: "border-muted text-muted", dot: "bg-muted" },
};

export function Badge({ tone, children }: { tone: BadgeTone; children: ReactNode }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 self-start border px-2.5 py-1.5 font-mono text-[12px] font-bold tracking-[0.14em] uppercase",
        TONES[tone].box,
      )}
    >
      <span aria-hidden="true" className={cn("h-[7px] w-[7px]", TONES[tone].dot)} />
      {children}
    </span>
  );
}
