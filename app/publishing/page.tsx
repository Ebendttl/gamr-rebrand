import { pageMetadata } from "@/lib/site";
import { Button } from "@/components/Button";
import { ButtonGroup } from "@/components/ButtonGroup";
import { Card } from "@/components/Card";
import { CardTitle } from "@/components/CardTitle";
import { Eyebrow } from "@/components/Eyebrow";
import { Body, H2, HeroLead, HeroTitle } from "@/components/Heading";
import { HeroImage } from "@/components/HeroImage";
import { Icon, type IconName } from "@/components/Icon";
import { IconBox } from "@/components/IconBox";
import { Mono } from "@/components/Mono";
import { PageShell } from "@/components/PageShell";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { Timeline, type TimelineStep } from "@/components/Timeline";
import { img } from "@/lib/images";

const LANES: { icon: IconName; title: string; text: string; tag: string }[] = [
  { icon: "spark", title: "Gamr Originals", text: "Games initiated and controlled by Gamr.", tag: "A Gamr Original" },
  {
    icon: "users",
    title: "Publishing Partners",
    text: "Third-party studios normally keep their underlying IP. Publishing rights are agreed by platform, territory and term.",
    tag: "Published by Gamr",
  },
  {
    icon: "layers",
    title: "Co-development",
    text: "Responsibilities and rights are agreed project by project.",
    tag: "Developed with Gamr Studios",
  },
];

const SERVICES: { icon: IconName; title: string; text: string }[] = [
  { icon: "money", title: "Milestone funding", text: "Where approved, tied to agreed milestones." },
  { icon: "layers", title: "Product and production", text: "Design reviews, milestone planning and scope management." },
  { icon: "checkCircle", title: "Playtesting and QA", text: "Coordinated testing before release." },
  { icon: "users", title: "Marketing and community", text: "Positioning, launch assets and community building." },
  { icon: "rocket", title: "Store and platform release", text: "Submission and release coordination." },
  { icon: "trendUp", title: "Lifecycle", text: "Analytics, live operations and planning after launch." },
];

const PLATFORMS: { icon: IconName; label: string }[] = [
  { icon: "grid", label: "Roblox" },
  { icon: "mobile", label: "Mobile" },
  { icon: "browser", label: "Web" },
  { icon: "globe", label: "Other platforms" },
];

const CRITERIA = [
  "A playable prototype or vertical slice",
  "A clear core loop and a marketable hook",
  "A capable, accountable team",
  "Clean ownership of the IP",
  "A realistic scope, budget and timeline",
  "A defined audience and platform",
  "A clear reason Gamr can improve the outcome",
];

const STEPS: TimelineStep[] = [
  { label: "Start", icon: "clipboard", title: "Self-qualification", text: "Check the criteria." },
  { icon: "upload", title: "Submission", text: "Send the structured pitch." },
  { icon: "shield", title: "Eligibility review", text: "Completeness and fit." },
  { icon: "gamepad", title: "Playtest", text: "Build and product review." },
  { icon: "message", title: "Developer call", text: "Meet the team." },
  { icon: "scale", title: "Diligence", text: "Technical, legal and commercial." },
  { label: "Go live", icon: "checkCircle", title: "Decision", text: "Greenlight to launch, re-pitch, Lab referral or decline." },
];

const FAQ = [
  {
    q: "Do I keep my IP?",
    a: "Third-party studios normally keep their underlying IP. Publishing rights are agreed by platform, territory and term.",
  },
  { q: "Does Gamr fund games?", a: "Milestone funding is available where approved. It is agreed per title." },
  { q: "Which platforms?", a: "Roblox, mobile, web and other platforms." },
  {
    q: "Is my submission confidential?",
    a: "Yes. Pitches are reviewed only by Gamr’s publishing team and are never shared outside Gamr without your permission.",
  },
  { q: "When will I hear back?", a: "We confirm every submission and aim to give you a first decision within a few weeks." },
  { q: "Who can apply?", a: "African studios, African-led teams and developers with a playable build." },
];

const PITCH_MATERIALS = [
  "Studio and team details",
  "One-sentence hook",
  "Pitch deck",
  "Gameplay video",
  "Private playable build",
  "Target audience and platforms",
  "Roadmap, budget and funding request",
  "Support requested from Gamr",
  "Traction or test data",
  "IP ownership declaration",
  "Consent and privacy acknowledgement",
];

export const metadata = pageMetadata(
  "/publishing",
  "Publishing",
  "Built in Africa. Ready for the world. You build the game; Gamr helps fund, finish, launch and grow it through a package agreed for each title.",
);

export default function PublishingPage() {
  return (
    <PageShell active="publishing">
      <section className="relative overflow-hidden bg-black bg-grid">
        <HeroImage src={img.mcl1} className="md:w-[60%]" />
        <div className="relative mx-auto box-border flex max-w-[1280px] flex-col justify-end gap-7 px-[clamp(20px,5cqw,80px)] pt-10 pb-14 md:min-h-[560px] md:pt-[72px] md:pb-[72px]">
          <div className="flex-[1_1_40px]" />
          <Eyebrow>Gamr Publishing</Eyebrow>
          <HeroTitle line1="Built in Africa." line2="Ready for the world." />
          <HeroLead>You build the game. Gamr helps fund, finish, launch and grow it through a package agreed for each title.</HeroLead>
          <ButtonGroup>
            <Button href="/publishing#pitch">Pitch a Game</Button>
            <Button href="/publishing#criteria" variant="ghost">
              Our Criteria
            </Button>
          </ButtonGroup>
        </div>
      </section>

      <Section>
        <SectionHeading eyebrow="What Gamr publishes" title="Three lanes, labelled." />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {LANES.map((l) => (
            <Card key={l.title}>
              <IconBox name={l.icon} />
              <CardTitle>{l.title}</CardTitle>
              <p className="m-0 max-w-[520px] text-[15px] leading-[1.6] text-muted">{l.text}</p>
              <div className="mt-auto pt-1.5">
                <Mono tone="blue">{l.tag}</Mono>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section tone="alt">
        <SectionHeading
          eyebrow="What Gamr can provide"
          title="A package agreed for each title."
          lead="Not every game gets every service. Specialist work may use external partners."
        />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {SERVICES.map((s) => (
            <Card key={s.title}>
              <IconBox name={s.icon} />
              <CardTitle>{s.title}</CardTitle>
              <p className="m-0 max-w-[520px] text-[15px] leading-[1.6] text-muted">{s.text}</p>
            </Card>
          ))}
        </div>
        <div className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-5 border-t border-line pt-8">
          <div className="flex-none">
            <Mono tone="blue">Platform scope</Mono>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {PLATFORMS.map((p) => (
              <span
                key={p.label}
                className="inline-flex min-h-12 items-center gap-2.5 border-2 border-white px-5 text-[14px] font-bold tracking-[0.08em] uppercase"
              >
                <Icon name={p.icon} size={20} className="block flex-none text-white" />
                {p.label}
              </span>
            ))}
          </div>
        </div>
      </Section>

      <Section id="criteria">
        <div className="flex flex-wrap gap-x-[72px] gap-y-10">
          <div className="flex flex-[1_1_340px] flex-col gap-5">
            <Eyebrow>Our criteria</Eyebrow>
            <H2>What Gamr looks for.</H2>
            <Body>Check your game against these before you pitch. Projects that are too early can be referred to the Lab.</Body>
            <div>
              <Button href="/publishing#pitch">Pitch a Game</Button>
            </div>
          </div>
          <ul className="m-0 flex-[1.4_1_460px] list-none border-b border-line p-0">
            {CRITERIA.map((c) => (
              <li
                key={c}
                className="flex items-center gap-4.5 border-t border-line py-4.5 text-[length:clamp(17px,1.8cqw,22px)] font-semibold text-white"
              >
                <svg
                  className="flex-[0_0_22px]"
                  aria-hidden="true"
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  stroke="#3B82F6"
                  strokeWidth="2.5"
                >
                  <path d="M4 11.5l4.5 4.5L18 6.5" />
                </svg>
                {c}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section tone="alt">
        <SectionHeading
          eyebrow="Review process"
          title="From pitch to decision."
          lead="One route, start to finish. Every pitch moves through the same seven stages."
        />
        <Timeline steps={STEPS} />
      </Section>

      <Section>
        <SectionHeading eyebrow="FAQ" title="Questions developers ask." />
        <div className="border-b border-line">
          {FAQ.map((f) => (
            <div key={f.q} className="flex flex-wrap gap-x-12 gap-y-2 border-t border-line py-6">
              <div className="flex-[1_1_300px]">
                <CardTitle size={20}>{f.q}</CardTitle>
              </div>
              <div className="flex-[1.4_1_380px]">
                <p className="m-0 max-w-[600px] text-[16px] leading-[1.6] text-muted">{f.a}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <section className="bg-blue" id="pitch">
        <div className="mx-auto box-border flex max-w-[1280px] flex-wrap gap-x-[72px] gap-y-10 px-[clamp(20px,5cqw,80px)] py-[clamp(56px,7cqw,104px)]">
          <div className="flex flex-[1_1_380px] flex-col gap-6">
            <Mono size={12} tone="white">
              How to pitch
            </Mono>
            <h2 className="m-0 text-[length:clamp(40px,6cqw,88px)] leading-[0.92] font-black tracking-[-0.045em] text-white uppercase">
              Pitch a game.
            </h2>
            <p className="m-0 max-w-[420px] text-[18px] leading-[1.6] text-white">
              A short multi-step form. Have these ready before you start; your pitch goes straight to the publishing team.
            </p>
            <div>
              <Button href="/contact?intent=pitch" variant="white">
                Start Your Pitch
              </Button>
            </div>
          </div>
          <ol className="m-0 flex-[1.2_1_420px] list-none columns-[2_220px] gap-x-10 border-b border-[rgba(255,255,255,0.3)] p-0">
            {PITCH_MATERIALS.map((m, i) => (
              <li
                key={m}
                className="flex items-baseline gap-3.5 border-t border-[rgba(255,255,255,0.3)] py-3 text-[16px] font-semibold text-white"
              >
                <span className="font-mono text-[12px] text-white">{String(i + 1).padStart(2, "0")}</span>
                {m}
              </li>
            ))}
          </ol>
        </div>
      </section>
    </PageShell>
  );
}
