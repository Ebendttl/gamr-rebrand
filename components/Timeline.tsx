import { cn } from "@/lib/cn";
import { Icon, type IconName } from "./Icon";
import { Mono } from "./Mono";

export type TimelineStep = { icon: IconName; title: string; text: string; label?: string };

const COLS = { 5: "lg:grid-cols-5", 7: "lg:grid-cols-7" } as const;

/**
 * Numbered icon steps. Desktop: one row with connector lines; 761–1024 px: two columns, no connectors;
 * ≤ 760 px: vertical list, icon left, with a line joining the steps. The final step is filled blue.
 */
export function Timeline({ steps }: { steps: TimelineStep[] }) {
  return (
    <div className="border border-line bg-surface px-8 py-10">
      <ol
        className={cn(
          "m-0 grid list-none grid-cols-1 gap-x-4 p-0 md:grid-cols-2 md:gap-y-7 lg:gap-y-4",
          COLS[steps.length as keyof typeof COLS],
        )}
      >
        {steps.map((step, i) => {
          const last = i === steps.length - 1;
          return (
            <li key={step.title} className="relative grid grid-cols-[48px_1fr] gap-3.5 pb-6.5 md:flex md:flex-col md:pr-3 md:pb-0">
              <div className="hidden h-4 md:block">
                <Mono size={10}>{step.label}</Mono>
              </div>
              <div
                className={cn(
                  "relative row-span-3 h-12",
                  !last &&
                    "after:absolute after:top-12 after:-bottom-6.5 after:left-[23px] after:w-0.5 after:bg-line-strong md:after:hidden",
                )}
              >
                {!last && <div aria-hidden="true" className="absolute top-[23px] -right-4 left-12 hidden h-0.5 bg-line-strong lg:block" />}
                <div
                  className={cn(
                    "relative box-border flex h-12 w-12 items-center justify-center border-2",
                    last ? "border-blue bg-blue" : "border-blue-text bg-black",
                  )}
                >
                  <Icon name={step.icon} className={cn("block flex-none", last ? "text-white" : "text-blue-text")} />
                </div>
              </div>
              <Mono tone="blue">{String(i + 1).padStart(2, "0")}</Mono>
              <div className="text-[17px] leading-[1.25] font-bold text-white uppercase">{step.title}</div>
              <p className="m-0 max-w-[260px] text-[14px] leading-[1.6] text-muted">{step.text}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
