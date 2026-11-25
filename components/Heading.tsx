import type { ReactNode } from "react";

/** Hero H1: first line solid, second line outlined. */
export function HeroTitle({ line1, line2 }: { line1: ReactNode; line2: ReactNode }) {
  return (
    <h1 className="m-0 text-[length:clamp(42px,7.4cqw,108px)] leading-[0.92] font-black tracking-[-0.045em] text-white uppercase">
      {line1}
      <br />
      <span className="text-transparent [-webkit-text-stroke:2px_#FFFFFF]">{line2}</span>
    </h1>
  );
}

/** Section H2 used outside SectionHeading (split layouts). */
export function H2({ children }: { children: ReactNode }) {
  return (
    <h2 className="m-0 text-[length:clamp(32px,4.6cqw,66px)] leading-[0.96] font-extrabold tracking-[-0.04em] text-white uppercase">
      {children}
    </h2>
  );
}

/** 19 px hero lead. */
export function HeroLead({ children }: { children: ReactNode }) {
  return <p className="m-0 max-w-[600px] text-[19px] leading-[1.6] text-soft">{children}</p>;
}

/** 16 px section body copy. */
export function Body({ children }: { children: ReactNode }) {
  return <p className="m-0 max-w-[560px] text-[16px] leading-[1.6] text-muted">{children}</p>;
}
