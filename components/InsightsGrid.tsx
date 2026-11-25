"use client";

import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/cn";
import type { ImageSrc } from "@/lib/images";
import { CardTitle } from "./CardTitle";
import { ImageBlock } from "./ImageBlock";
import { Mono } from "./Mono";

export type Story = {
  kind: "Case study" | "Article" | "Game launch" | "News";
  title: string;
  date: string;
  src: ImageSrc;
  position?: string;
};

const FILTERS: { label: string; kind?: Story["kind"] }[] = [
  { label: "All" },
  { label: "Case studies", kind: "Case study" },
  { label: "Articles", kind: "Article" },
  { label: "Game launches", kind: "Game launch" },
  { label: "News", kind: "News" },
];

/** Type filter (toggle buttons) and the story grid it filters. */
export function InsightsGrid({ stories }: { stories: Story[] }) {
  const [active, setActive] = useState(0);
  const kind = FILTERS[active]?.kind;
  const shown = kind ? stories.filter((s) => s.kind === kind) : stories;

  return (
    <>
      <div className="mb-8 flex flex-wrap gap-2.5" role="group" aria-label="Filter by type">
        {FILTERS.map((f, i) => (
          <button
            key={f.label}
            type="button"
            aria-pressed={i === active}
            onClick={() => setActive(i)}
            className={cn(
              "min-h-11 cursor-pointer rounded-none border-2 px-4.5 py-0 font-sans text-[13px] font-bold tracking-[0.08em] uppercase",
              i === active ? "border-white bg-white text-black" : "border-line-strong bg-transparent text-white",
            )}
          >
            {f.label}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3" aria-live="polite">
        {shown.map((s) => (
          <Link key={s.title} className="flex flex-col border border-line bg-surface" href="/insights">
            <ImageBlock
              src={s.src}
              alt={s.title}
              sizes="(min-width: 761px) 33vw, 100vw"
              className="border-b border-line md:h-[200px]"
              position={s.position}
            />
            <div className="flex flex-col gap-3 p-6">
              <Mono tone="blue">{s.kind}</Mono>
              <CardTitle size={20}>{s.title}</CardTitle>
              <Mono>{s.date}</Mono>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
