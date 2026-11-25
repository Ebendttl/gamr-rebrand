import { pageMetadata } from "@/lib/site";
import Link from "next/link";
import { Button } from "@/components/Button";
import { CardTitle } from "@/components/CardTitle";
import { Eyebrow } from "@/components/Eyebrow";
import { HeroTitle } from "@/components/Heading";
import { ImageBlock } from "@/components/ImageBlock";
import { Mono } from "@/components/Mono";
import { PageShell } from "@/components/PageShell";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { cn } from "@/lib/cn";
import { img, type ImageSrc } from "@/lib/images";

const FILTERS = ["All", "Case studies", "Articles", "Game launches", "News"];

const STORIES: { kind: string; title: string; date: string; src: ImageSrc; position?: string }[] = [
  { kind: "Case study", title: "Spotify × Gamr: where music meets gaming", date: "10 Aug 2026", src: img.spotifyCase },
  { kind: "Case study", title: "Launching Prime Hydration to Nigeria’s gamers", date: "9 Aug 2026", src: img.caseHero },
  { kind: "Game launch", title: "My City Life: New York is live on web", date: "Oct 2026", src: img.mcl1 },
  { kind: "News", title: "The Lab opens at the University of Lagos", date: "Mar 2025", src: img.teamLaunch, position: "center 35%" },
  { kind: "Article", title: "Inside the Lab: from players to builders", date: "Gamr", src: img.labRoom, position: "center 60%" },
  { kind: "Game launch", title: "AfroDrive: build a transport empire on Roblox", date: "Gamr", src: img.afro },
];

export const metadata = pageMetadata(
  "/insights",
  "Insights",
  "Notes from the build: case studies, articles and game launches from across Gamr.",
);

export default function InsightsPage() {
  return (
    <PageShell active="company">
      <section className="bg-black bg-grid">
        <div className="mx-auto box-border flex max-w-[1280px] flex-col gap-6 px-[clamp(20px,5cqw,80px)] pt-[96px] pb-16">
          <Eyebrow>Company · Insights</Eyebrow>
          <HeroTitle line1="Notes from" line2="the build." />
          <p className="m-0 max-w-[560px] text-[19px] leading-[1.6] text-soft">
            Case studies, articles and game launches from across Gamr.
          </p>
        </div>
      </section>

      <Section>
        <Link className="flex flex-wrap border border-line bg-surface" href="/insights">
          <div className="flex-[1.4_1_460px]">
            <ImageBlock
              src={img.labTalk}
              alt="A session at the Lab, University of Lagos"
              sizes="(min-width: 761px) 60vw, 100vw"
              className="md:h-[440px]"
              position="center 45%"
            />
          </div>
          <div className="flex flex-[1_1_360px] flex-col justify-center gap-4.5 p-[clamp(28px,4cqw,48px)]">
            <Mono tone="blue">Featured · Article</Mono>
            <div className="text-[length:clamp(28px,3.4cqw,46px)] leading-[1] font-extrabold tracking-[-0.035em] text-white uppercase">
              To build games that are African made and globally played
            </div>
            <p className="m-0 max-w-[420px] text-[16px] leading-[1.6] text-muted">
              How the Lab at the University of Lagos is turning Nigeria’s players into game builders.
            </p>
            <Mono>Gamr · Mar 2025</Mono>
          </div>
        </Link>
      </Section>

      <Section tone="alt">
        <SectionHeading eyebrow="Latest" title="New from Gamr." />
        <div className="mb-8 flex flex-wrap gap-2.5" role="group" aria-label="Filter by type">
          {FILTERS.map((f, i) => (
            <button
              key={f}
              type="button"
              aria-pressed={i === 0}
              className={cn(
                "min-h-11 cursor-pointer rounded-none border-2 px-4.5 py-0 font-sans text-[13px] font-bold tracking-[0.08em] uppercase",
                i === 0 ? "border-white bg-white text-black" : "border-line-strong bg-transparent text-white",
              )}
            >
              {f}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {STORIES.map((s) => (
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
        <div className="mt-10 flex justify-center">
          <Button href="/insights" variant="ghost">
            Load More
          </Button>
        </div>
      </Section>
    </PageShell>
  );
}
