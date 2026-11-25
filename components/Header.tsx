import Image from "next/image";
import { Fragment } from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { NAV, PITCH_HREF, type NavKey } from "@/lib/nav";
import { Button } from "./Button";
import { MobileMenu } from "./MobileMenu";

function Chevron() {
  return (
    <svg aria-hidden="true" width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.75">
      <path d="M1.5 3.5l3.5 3.5 3.5-3.5" />
    </svg>
  );
}

export function Wordmark({ height }: { height: 30 | 36 }) {
  return (
    <Link href="/" aria-label="Gamr home" className="inline-flex min-h-11 items-center">
      <Image
        src="/assets/brand/gamr-wordmark.png"
        alt="gamr"
        width={293}
        height={80}
        preload={height === 30}
        className={cn("block w-auto", height === 30 ? "h-7.5" : "h-9")}
      />
    </Link>
  );
}

export function Header({ active }: { active: NavKey }) {
  return (
    <header className="relative z-10 border-b border-[rgba(255,255,255,0.1)] bg-black">
      <div className="mx-auto box-border flex max-w-[1280px] flex-wrap items-center justify-between gap-x-8 gap-y-3 px-[clamp(20px,5cqw,80px)] py-4.5">
        <Wordmark height={30} />
        <nav aria-label="Primary" className="hidden flex-wrap items-center gap-x-7.5 gap-y-1 md:flex">
          {NAV.map((item) => {
            const isActive = item.key === active;
            const link = (
              <Link
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                aria-haspopup={item.children ? "true" : undefined}
                className={cn(
                  "inline-flex min-h-11 items-center gap-2 border-b-2 text-[14px] font-semibold",
                  isActive ? "border-blue-text text-blue-text" : "border-transparent",
                )}
              >
                {item.label}
                {item.children && <Chevron />}
              </Link>
            );
            if (!item.children) return <Fragment key={item.key}>{link}</Fragment>;
            return (
              <div key={item.key} className="group relative">
                {link}
                <div className="absolute top-full -left-4.5 z-20 hidden min-w-[200px] border border-line-strong bg-surface group-focus-within:block group-hover:block">
                  {item.children.map((c) => (
                    <Link
                      key={c.label}
                      href={c.href}
                      className="flex min-h-11 items-center border-t border-line px-4.5 text-[14px] font-semibold"
                    >
                      {c.label}
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </nav>
        <div className="hidden md:block">
          <Button href={PITCH_HREF}>Pitch a Game</Button>
        </div>
        <MobileMenu active={active} />
      </div>
    </header>
  );
}
