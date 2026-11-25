import type { ReactNode } from "react";
import { SmartLink } from "./SmartLink";

/** Mono uppercase link with a line-strong underline; copy carries its own "→". */
export function TextLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <SmartLink
      href={href}
      className="inline-flex min-h-11 items-center border-b border-line-strong font-mono text-[12px] font-bold tracking-[0.14em] uppercase"
    >
      {children}
    </SmartLink>
  );
}
