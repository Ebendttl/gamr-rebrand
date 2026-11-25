import { pageMetadata } from "@/lib/site";
import { BriefForm } from "@/components/forms/BriefForm";
import { Button } from "@/components/Button";
import { ButtonGroup } from "@/components/ButtonGroup";
import { Card } from "@/components/Card";
import { CardTitle } from "@/components/CardTitle";
import { Eyebrow } from "@/components/Eyebrow";
import { H2, HeroLead, HeroTitle } from "@/components/Heading";
import { HeroImage } from "@/components/HeroImage";
import { Icon, type IconName } from "@/components/Icon";
import { IconBox } from "@/components/IconBox";
import { ImageBlock } from "@/components/ImageBlock";
import { Mono } from "@/components/Mono";
import { PageShell } from "@/components/PageShell";
import { RowList, type Row } from "@/components/RowList";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { TextLink } from "@/components/TextLink";
import { Timeline, type TimelineStep } from "@/components/Timeline";
import { img, type ImageSrc } from "@/lib/images";

type IconCard = { icon: IconName; title: string; text: string };

const OBJECTIVES: IconCard[] = [
  { icon: "target", title: "Reach gaming audiences", text: "Meet players where they already spend time, with formats they choose." },
  { icon: "rocket", title: "Launch products", text: "Introduce something new through play, not interruption." },
  { icon: "users", title: "Build community", text: "Create participation, not just impressions." },
  { icon: "gamepad", title: "Create branded play", text: "A game or experience people choose to play." },
];

const CAPABILITIES: IconCard[] = [
  { icon: "bulb", title: "Strategy and insight", text: "Gaming strategy and audience understanding for your market." },
  { icon: "gamepad", title: "Branded games and Roblox experiences", text: "Built by a team that makes its own games." },
  { icon: "trophy", title: "Esports and tournaments", text: "Competition design, registration and delivery." },
  { icon: "users", title: "Creators and community", text: "Work with creators and communities players trust." },
  { icon: "broadcast", title: "Live activations and production", text: "Experiential builds and event production." },
  { icon: "chart", title: "Measurement and reporting", text: "Results reported against the objectives you set." },
];

const STEPS: TimelineStep[] = [
  { icon: "search", title: "Discover", text: "Objective, audience and market.", label: "Brief" },
  { icon: "layers", title: "Design", text: "Concept and plan." },
  { icon: "cube", title: "Build", text: "Experience, content or event." },
  { icon: "rocket", title: "Activate", text: "Launch and run." },
  { icon: "chart", title: "Measure", text: "Report against the brief.", label: "Report" },
];

const CASES: { client: string; src: ImageSrc; alt: string; rows: Row[] }[] = [
  {
    client: "Spotify",
    src: img.spotifyCase,
    alt: "Spotify campaign",
    rows: [
      {
        label: "Objective",
        value: "Build visibility and affinity with Gen Z and Millennial gamers, and connect music with gaming culture.",
      },
      {
        label: "What Gamr did",
        value:
          "A music-and-gaming event at Carven: an FC24 creator showdown, artist and DJ sets, playlist collection and community promotion.",
      },
      { label: "Result", value: "400+ guests, 1,000+ playlist entries and 20M+ combined digital impressions." },
    ],
  },
  {
    client: "Prime Hydration",
    src: img.caseHero,
    alt: "Prime Hydration campaign",
    rows: [
      { label: "Objective", value: "Introduce Prime to Nigeria and position it with gamers and Gen Z." },
      {
        label: "What Gamr did",
        value: "Turned Carven into a Prime-branded gaming venue with pods, hydration booths, creators, competitions and social content.",
      },
      { label: "Result", value: "500+ attendees, 1M+ impressions, 22% average engagement and 1,200+ bottles distributed." },
    ],
  },
];

const WHY: IconCard[] = [
  { icon: "gamepad", title: "We build games", text: "The same team makes Gamr’s own titles." },
  { icon: "globe", title: "African gaming context", text: "We work inside the culture we advise on." },
  { icon: "users", title: "Creators and community", text: "We understand who players listen to." },
  { icon: "broadcast", title: "Production experience", text: "We have run activations and competitions." },
];

function CardText({ children }: { children: string }) {
  return <p className="m-0 max-w-[520px] text-[15px] leading-[1.6] text-muted">{children}</p>;
}

export const metadata = pageMetadata(
  "/for-brands",
  "For Brands",
  "Help your brand show up, and belong, in gaming: strategy, playable experiences, creators, esports and live activation, from a team that builds its own games.",
);

export default function ForBrandsPage() {
  return (
    <PageShell active="brands">
      <section className="relative overflow-hidden bg-black bg-grid">
        <HeroImage src={img.esports} alt="" className="md:w-[60%]" position="55% 45%" />
        <div className="relative mx-auto box-border flex max-w-[1280px] flex-col justify-end gap-7 px-[clamp(20px,5cqw,80px)] pt-10 pb-14 md:min-h-[620px] md:pt-[72px] md:pb-[72px]">
          <div className="flex-[1_1_40px]" />
          <Eyebrow>For Brands · Managed Services</Eyebrow>
          <HeroTitle line1="Help your brand show up," line2="and belong, in gaming." />
          <HeroLead>Strategy, playable experiences, creators, esports and live activation, from a team that builds its own games.</HeroLead>
          <ButtonGroup>
            <Button href="/for-brands#brief">Brief Us</Button>
            <Button href="/for-brands#work" variant="ghost">
              View Case Studies
            </Button>
          </ButtonGroup>
        </div>
      </section>

      <Section>
        <SectionHeading eyebrow="Start from your objective" title="What do you need gaming to do?" />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {OBJECTIVES.map((o) => (
            <div key={o.title} className="flex items-start gap-6 border border-line bg-surface p-9">
              <div className="flex h-16 w-16 flex-[0_0_64px] items-center justify-center border border-line-strong">
                <Icon name={o.icon} size={34} className="block flex-none text-blue-text" />
              </div>
              <div className="flex flex-col gap-3">
                <CardTitle size={26}>{o.title}</CardTitle>
                <p className="m-0 max-w-[420px] text-[16px] leading-[1.6] text-muted">{o.text}</p>
                <div>
                  <Button href="/for-brands#brief" variant="ghost" size="sm">
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="alt">
        <SectionHeading eyebrow="Capabilities" title="What Gamr delivers." />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {CAPABILITIES.map((c) => (
            <Card key={c.title}>
              <IconBox name={c.icon} />
              <CardTitle>{c.title}</CardTitle>
              <CardText>{c.text}</CardText>
            </Card>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-center gap-5 border border-line bg-surface p-10 text-center">
          <CardTitle size={30}>Have a brief in mind?</CardTitle>
          <p className="m-0 max-w-[520px] text-[16px] leading-[1.6] text-muted">
            Tell us the objective. We’ll come back with the right mix.
          </p>
          <ButtonGroup>
            <Button href="/for-brands#brief">Brief Us</Button>
            <Button href="/contact" variant="ghost">
              Work With Us
            </Button>
          </ButtonGroup>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="How Gamr works" title="Five steps, one team." />
        <Timeline steps={STEPS} />
      </Section>

      <Section tone="alt" id="work">
        <SectionHeading
          eyebrow="Selected work"
          title="Show the brief. Show the role. Show the result."
          lead="Recent projects, each with the client, date, objective, what Gamr did and the result."
        />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {CASES.map((c) => (
            <article key={c.client} className="flex flex-col border border-line bg-surface">
              <ImageBlock src={c.src} alt={c.alt} className="border-b border-line md:h-[260px]" />
              <div className="flex flex-col gap-4 p-7">
                <Mono tone="blue">Client project · 2024</Mono>
                <CardTitle size={28}>{c.client}</CardTitle>
                <RowList rows={c.rows} />
                <Mono size={10}>Results as published by Gamr</Mono>
                <div>
                  <TextLink href="/insights">Read the case study →</TextLink>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-7">
          <TextLink href="/insights">View all case studies →</TextLink>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Why Gamr" title="A games company first." />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {WHY.map((w) => (
            <Card key={w.title}>
              <IconBox name={w.icon} />
              <CardTitle>{w.title}</CardTitle>
              <CardText>{w.text}</CardText>
            </Card>
          ))}
        </div>
      </Section>

      <Section tone="alt" id="brief" className="flex flex-wrap gap-x-[72px] gap-y-10">
        <div className="flex flex-[1_1_320px] flex-col gap-5">
          <Eyebrow>Brief us</Eyebrow>
          <H2>Tell us what you need.</H2>
          <p className="m-0 max-w-[380px] text-[16px] leading-[1.6] text-muted">
            Every call to action on this page lands here. Your brief is routed automatically to the right team, not a shared inbox.
          </p>
          <div className="flex items-center gap-3 border border-line-strong px-4 py-3.5">
            <Icon name="arrowCircle" size={22} className="block flex-none text-blue-text" />
            <span className="text-[14px] text-soft">
              Routed by intent: brand briefs, sponsorships and Lab partnerships each reach their owner.
            </span>
          </div>
        </div>
        <BriefForm />
      </Section>
    </PageShell>
  );
}
