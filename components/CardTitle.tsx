import type { ReactNode } from "react";

const SIZES = {
  20: "text-[20px]",
  22: "text-[22px]",
  24: "text-[24px]",
  26: "text-[26px]",
  28: "text-[28px]",
  30: "text-[30px]",
} as const;

/** Card heading (H3): uppercase, bold, tight. */
export function CardTitle({ size = 22, children }: { size?: keyof typeof SIZES; children: ReactNode }) {
  return <h3 className={`m-0 ${SIZES[size]} leading-[1.1] font-bold tracking-[-0.01em] text-white uppercase`}>{children}</h3>;
}
