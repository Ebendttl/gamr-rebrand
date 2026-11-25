import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Container } from "./Container";

type Props = {
  tone?: "base" | "alt";
  id?: string;
  label?: string;
  className?: string;
  children: ReactNode;
};

/** Standard page section: alternating background, top divider, fluid vertical padding. */
export function Section({ tone = "base", id, label, className, children }: Props) {
  return (
    <section id={id} aria-label={label} className={cn("border-t border-line", tone === "alt" ? "bg-bg-alt" : "bg-black")}>
      <Container className={cn("py-[clamp(56px,7cqw,104px)]", className)}>{children}</Container>
    </section>
  );
}
