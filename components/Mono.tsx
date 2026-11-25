import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

const TONES = { muted: "text-muted", blue: "text-blue-text", white: "text-white", soft: "text-soft" } as const;

type Props = { size?: 10 | 11 | 12; tone?: keyof typeof TONES; className?: string; children: ReactNode };

/** Uppercase monospace label. */
export function Mono({ size = 11, tone = "muted", className, children }: Props) {
  return (
    <span
      className={cn(
        "font-mono font-bold tracking-[0.16em] uppercase",
        { 10: "text-[10px]", 11: "text-[11px]", 12: "text-[12px]" }[size],
        TONES[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
