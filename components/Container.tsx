import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/** 1280 px content column with the fluid side gutter. */
export function Container({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cn("mx-auto box-border max-w-[1280px] px-[clamp(20px,5cqw,80px)]", className)}>{children}</div>;
}
