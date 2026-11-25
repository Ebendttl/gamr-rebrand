import type { ReactNode } from "react";
import type { NavKey } from "@/lib/nav";
import { Footer } from "./Footer";
import { Header } from "./Header";

/** Page wrapper: the inline-size container that `cqw` units resolve against, plus header and footer. */
export function PageShell({ active, children }: { active: NavKey; children: ReactNode }) {
  return (
    <div className="@container flex min-h-screen flex-col bg-black font-sans text-white">
      <a
        href="#main"
        className="sr-only z-50 bg-blue px-4 py-3 text-[14px] font-bold text-white focus:not-sr-only focus:absolute focus:top-2 focus:left-2"
      >
        Skip to content
      </a>
      <Header active={active} />
      <main id="main" tabIndex={-1} className="flex-[1_0_auto] outline-none">
        {children}
      </main>
      <Footer />
    </div>
  );
}
