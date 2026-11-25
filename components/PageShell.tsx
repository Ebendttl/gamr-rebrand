import type { ReactNode } from "react";
import type { NavKey } from "@/lib/nav";
import { Footer } from "./Footer";
import { Header } from "./Header";

/** Page wrapper: the inline-size container that `cqw` units resolve against, plus header and footer. */
export function PageShell({ active, children }: { active: NavKey; children: ReactNode }) {
  return (
    <div className="@container flex min-h-screen flex-col bg-black font-sans text-white">
      <Header active={active} />
      <main id="main" className="flex-[1_0_auto]">
        {children}
      </main>
      <Footer />
    </div>
  );
}
