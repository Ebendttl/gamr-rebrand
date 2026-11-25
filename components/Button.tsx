import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { SmartLink } from "./SmartLink";

export type ButtonVariant = "primary" | "ghost" | "white" | "dark";
export type ButtonSize = "md" | "sm";

const VARIANTS: Record<ButtonVariant, string> = {
  primary: "bg-blue border-blue text-white",
  ghost: "bg-transparent border-white text-white",
  white: "bg-white border-white text-black",
  dark: "bg-black border-black text-white",
};

const SIZES: Record<ButtonSize, string> = {
  md: "min-h-13 px-7 text-[13px]",
  sm: "min-h-11 px-4.5 text-[12px]",
};

export function buttonClasses(variant: ButtonVariant = "primary", size: ButtonSize = "md") {
  return cn(
    "box-border inline-flex items-center justify-center border-2 font-bold tracking-[0.14em] uppercase no-underline",
    VARIANTS[variant],
    SIZES[size],
  );
}

type Props = { href: string; variant?: ButtonVariant; size?: ButtonSize; children: ReactNode };

export function Button({ href, variant, size, children }: Props) {
  return (
    <SmartLink href={href} className={buttonClasses(variant, size)}>
      {children}
    </SmartLink>
  );
}
