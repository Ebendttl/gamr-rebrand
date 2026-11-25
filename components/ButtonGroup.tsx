import type { ReactNode } from "react";

/** Row of buttons; each goes full width on phones. */
export function ButtonGroup({ children }: { children: ReactNode }) {
  return <div className="flex flex-wrap gap-3 *:flex-[1_1_100%] md:*:flex-[0_1_auto]">{children}</div>;
}
