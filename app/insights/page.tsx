import { pageMetadata } from "@/lib/site";
import Link from "next/link";
import { Button } from "@/components/Button";
import { Eyebrow } from "@/components/Eyebrow";
import { HeroTitle } from "@/components/Heading";
import { ImageBlock } from "@/components/ImageBlock";
import { InsightsGrid, type Story } from "@/components/InsightsGrid";
import { Mono } from "@/components/Mono";
import { PageShell } from "@/components/PageShell";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { img } from "@/lib/images";

const STORIES: Story[] = [
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
        <InsightsGrid stories={STORIES} />
        <div className="mt-10 flex justify-center">
          <Button href="/insights" variant="ghost">
            Load More
          </Button>
        </div>
      </Section>
    </PageShell>
  );
}
