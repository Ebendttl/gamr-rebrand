import type { ReactNode } from "react";

/** Red 32×2 accent line followed by a blue mono label. */
export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <span aria-hidden="true" className="h-0.5 w-8 bg-red" />
      <span className="font-mono text-[12px] font-bold tracking-[0.16em] text-blue-text uppercase">{children}</span>
    </div>
  );
}
