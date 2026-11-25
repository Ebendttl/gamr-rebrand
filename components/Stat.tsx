import { Mono } from "./Mono";

/** Big number with a label and source line, under a 2 px blue rule. */
export function Stat({ value, label, source }: { value: string; label: string; source: string }) {
  return (
    <div className="flex flex-col gap-2.5 border-t-2 border-blue-text pt-5">
      <div className="text-[length:clamp(36px,4.4cqw,60px)] leading-[1] font-black tracking-[-0.04em] text-white">{value}</div>
      <div className="text-[16px] font-bold text-white uppercase">{label}</div>
      <Mono size={10}>{source}</Mono>
    </div>
  );
}
