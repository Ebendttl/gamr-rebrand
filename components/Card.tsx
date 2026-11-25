import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/** Surface panel with a 1 px border, 28 px padding and 14 px gap. */
export function Card({ as: Tag = "div", className, children }: { as?: "div" | "article"; className?: string; children: ReactNode }) {
  return <Tag className={cn("flex flex-col gap-3.5 border border-line bg-surface p-7", className)}>{children}</Tag>;
}
