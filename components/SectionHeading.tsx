import type { ReactNode } from "react";
import { Eyebrow } from "./Eyebrow";

type Props = { eyebrow: ReactNode; title: ReactNode; lead?: ReactNode };

/** Eyebrow + H2 on the left, optional lead bottom-right; wraps on narrow screens. */
export function SectionHeading({ eyebrow, title, lead }: Props) {
  return (
    <div className="mb-12 flex flex-wrap items-end justify-between gap-x-16 gap-y-6">
      <div className="flex flex-[1_1_520px] flex-col gap-5">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="m-0 text-[length:clamp(32px,4.6cqw,66px)] leading-[0.96] font-extrabold tracking-[-0.04em] text-white uppercase">
          {title}
        </h2>
      </div>
      {lead && (
        <div className="max-w-[440px] flex-[1_1_300px]">
          <p className="m-0 max-w-[560px] text-[16px] leading-[1.6] text-muted">{lead}</p>
        </div>
      )}
    </div>
  );
}
