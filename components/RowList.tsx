import type { ReactNode } from "react";
import { Mono } from "./Mono";

export type Row = { label: string; value: ReactNode };

/** Label/value pairs: 150 px mono label column, 1 px dividers. */
export function RowList({ rows }: { rows: Row[] }) {
  return (
    <div className="border-b border-line">
      {rows.map((r) => (
        <div key={r.label} className="flex flex-wrap gap-x-6 gap-y-1 border-t border-line py-3.5">
          <div className="flex-[0_0_150px]">
            <Mono>{r.label}</Mono>
          </div>
          <div className="flex-[1_1_200px] text-[15px] leading-[1.5] text-white">{r.value}</div>
        </div>
      ))}
    </div>
  );
}
