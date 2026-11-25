"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState, type KeyboardEvent } from "react";
import { cn } from "@/lib/cn";
import { NAV, PITCH_HREF, type NavKey } from "@/lib/nav";
import { Button } from "./Button";
import { Icon } from "./Icon";

const ITEM = "flex min-h-13 items-center border-b border-line text-[20px] font-extrabold tracking-[-0.01em] uppercase";
const SUB = "flex min-h-11 items-center border-b border-line pl-5 text-[15px] font-semibold text-soft";

/** ≤ 760 px navigation: a disclosure button and a full-width panel under the header. */
export function MobileMenu({ active }: { active: NavKey }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [open]);

  function onKeyDown(e: KeyboardEvent<HTMLDivElement>) {
    if (!open) return;
    if (e.key === "Escape") {
      setOpen(false);
      buttonRef.current?.focus();
      return;
    }
    if (e.key !== "Tab" || !rootRef.current) return;
    const focusable = rootRef.current.querySelectorAll<HTMLElement>("button, a[href]");
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last?.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first?.focus();
    }
  }

  const close = () => setOpen(false);

  return (
    <div ref={rootRef} onKeyDown={onKeyDown} className="md:hidden">
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((o) => !o)}
        className={cn(
          "box-content flex h-12 w-12 cursor-pointer items-center justify-center border bg-transparent p-0 text-white",
          open ? "border-blue-text" : "border-line-strong",
        )}
      >
        <Icon name="menu" size={26} strokeWidth={2} />
      </button>
      <div
        id={panelId}
        hidden={!open}
        className="absolute top-full right-0 left-0 border-b border-line bg-black px-5 pt-3 pb-7 shadow-[0_24px_40px_rgba(0,0,0,0.6)]"
      >
        <nav aria-label="Mobile">
          {NAV.map((item) => (
            <div key={item.key}>
              <Link
                href={item.href}
                onClick={close}
                aria-current={item.key === active ? "page" : undefined}
                className={cn(ITEM, item.key === active && "text-blue-text")}
              >
                {item.label}
              </Link>
              {item.children?.map((c) => (
                <Link key={c.label} href={c.href} onClick={close} className={SUB}>
                  {c.label}
                </Link>
              ))}
            </div>
          ))}
        </nav>
        <div className="pt-5" onClick={close}>
          <Button href={PITCH_HREF}>Pitch a Game</Button>
        </div>
      </div>
    </div>
  );
}
