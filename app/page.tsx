import Link from "next/link";
import { Badge, type BadgeTone } from "@/components/Badge";
import { Button } from "@/components/Button";
import { ButtonGroup } from "@/components/ButtonGroup";
import { Card } from "@/components/Card";
import { CardTitle } from "@/components/CardTitle";
import { DoorPanel } from "@/components/DoorPanel";
import { Eyebrow } from "@/components/Eyebrow";
import { Body, H2, HeroLead, HeroTitle } from "@/components/Heading";
import { HeroVideo } from "@/components/HeroVideo";
import { Icon, type IconName } from "@/components/Icon";
import { IconBox } from "@/components/IconBox";
import { ImageBlock } from "@/components/ImageBlock";
import { LogoMarquee, type Logo } from "@/components/LogoMarquee";
import { Mono } from "@/components/Mono";
import { PageShell } from "@/components/PageShell";
import { QuoteBlock } from "@/components/QuoteBlock";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { Stat } from "@/components/Stat";
import { TextLink } from "@/components/TextLink";
import { img, type ImageSrc } from "@/lib/images";

const LOGOS: Logo[] = [
  { name: "Google", src: "/assets/logos/google-white.png", width: 94, height: 96, displayHeight: 30, label: "2022 Black Founders Fund" },
  { name: "Techstars", src: "/assets/logos/techstars-white.png", width: 533, height: 96, displayHeight: 24, label: "2023 accelerator" },
  { name: "Logitech", src: "/assets/logos/logitech-white.png", width: 320, height: 96, displayHeight: 28, label: "Gamr X 2023 sponsor" },
  {
    name: "Ballantine’s",
    src: "/assets/logos/ballantines-white.png",
    width: 388,
    height: 96,
    displayHeight: 28,
    label: "Gamr X 2023 sponsor",
  },
  { name: "Spotify", src: "/assets/logos/spotify-white.png", width: 257, height: 82, displayHeight: 28, label: "2024 campaign" },
  { name: "Lenovo", src: "/assets/logos/lenovo-white.png", width: 384, height: 96, displayHeight: 24, label: "Ecosystem partner" },
  { name: "Carven", src: "/assets/logos/carven-white.png", width: 438, height: 96, displayHeight: 24, label: "Venue partner" },
  { name: "Nivea", src: "/assets/logos/nivea-white.png", width: 96, height: 96, displayHeight: 34, label: "Brand partner" },
  { name: "Golden Penny", src: "/assets/logos/goldenpenny-white.png", width: 61, height: 96, displayHeight: 38, label: "Brand partner" },
];

const PARTS: { icon: IconName; tag: string; title: string; text: string; link: string; href: string }[] = [
  {
    icon: "gamepad",
    tag: "Identity",
    title: "Games",
    text: "Original games from Gamr Studios, built for Roblox, mobile, web and other platforms.",
    link: "Explore our games →",
    href: "/games",
  },
  {
    icon: "rocket",
    tag: "Publishing",
    title: "Publishing",
    text: "A selective route that helps African studios fund, finish, launch and grow their games.",
    link: "Our criteria →",
    href: "/publishing#criteria",
  },
  {
    icon: "book",
    tag: "Talent pipeline",
    title: "Lab",
    text: "Practical programmes that take people from playing games to building them.",
    link: "Explore the Lab →",
    href: "/lab",
  },
  {
    icon: "target",
    tag: "For brands",
    title: "Managed Services",
    text: "Strategy, playable experiences, creators, esports and live activation for brands and agencies.",
    link: "Brief us →",
    href: "/for-brands#brief",
  },
];

const GAMES: {
  title: string;
  src: ImageSrc;
  alt: string;
  tone: BadgeTone;
  status: string;
  text: string;
  meta: string;
  cta?: { label: string; href: string };
}[] = [
  {
    title: "AfroDrive",
    src: img.afro,
    alt: "AfroDrive gameplay",
    tone: "live",
    status: "Live on Roblox",
    text: "Start your journey as a local bus driver and build your own transport empire across vibrant African-inspired cities.",
    meta: "A Gamr Original · By Gamr Studios · Illustration",
    cta: { label: "Play on Roblox", href: "https://www.roblox.com/games/122444818290399" },
  },
  {
    title: "My City Life",
    src: img.mcl1,
    alt: "My City Life gameplay",
    tone: "live",
    status: "Live on web",
    text: "A free life sim in a low-poly New York City: hustle, commute, make rent and vote alongside real players.",
    meta: "A Gamr Original · Web · mycitylife.gg",
    cta: { label: "Play in Browser", href: "https://mycitylife.gg/" },
  },
  {
    title: "Crossroads: Lagos Stories",
    src: img.crossroads,
    alt: "Crossroads: Lagos Stories gameplay",
    tone: "dev",
    status: "In development",
    text: "A narrative game of decision-based storytelling, drawn from the lives of young Nigerians.",
    meta: "A Gamr Original · Concept illustration · No release date",
  },
];

const LANES = [
  { title: "Gamr Originals", tag: "A Gamr Original", text: "Games initiated and controlled by Gamr, built by Gamr Studios." },
  {
    title: "Publishing Partners",
    tag: "Published by Gamr",
    text: "Games from independent African studios. Studios normally keep their underlying IP; publishing rights are agreed by platform, territory and term.",
  },
  {
    title: "Co-development",
    tag: "Developed with Gamr Studios",
    text: "Games built together, with responsibilities and rights agreed project by project.",
  },
];

const SUPPORT: { icon: IconName; title: string; text: string }[] = [
  { icon: "money", title: "Fund", text: "Milestone funding where approved." },
  { icon: "checkCircle", title: "Finish", text: "Production support, playtesting and QA coordination." },
  { icon: "rocket", title: "Launch", text: "Positioning, marketing and store release." },
  { icon: "trendUp", title: "Grow", text: "Analytics, live operations and lifecycle planning." },
];

const CAPABILITIES: { icon: IconName; title: string; text: string }[] = [
  { icon: "bulb", title: "Strategy and insight", text: "Gaming strategy and audience understanding for your market." },
  { icon: "gamepad", title: "Branded games", text: "Branded games and Roblox experiences." },
  { icon: "trophy", title: "Esports and tournaments", text: "Tournament and esports operations." },
  { icon: "users", title: "Creators and community", text: "Creator and community campaigns." },
  { icon: "broadcast", title: "Live activations", text: "Experiential production and live events." },
  { icon: "chart", title: "Measurement", text: "Reporting against the objectives you set." },
];

const STORIES: { kind: string; title: string; date: string; src: ImageSrc }[] = [
  { kind: "Case study", title: "Spotify × Gamr: where music meets gaming", date: "10 Aug 2026", src: img.spotifyCase },
  { kind: "Case study", title: "Launching Prime Hydration to Nigeria’s gamers", date: "9 Aug 2026", src: img.caseHero },
  { kind: "Game launch", title: "My City Life: New York is live on web", date: "Oct 2026", src: img.mcl1 },
];

export default function HomePage() {
  return (
    <PageShell active="home">
      <section className="bg-black bg-grid">
        <div className="mx-auto box-border flex min-h-[760px] max-w-[1280px] flex-wrap items-center gap-x-16 gap-y-12 px-[clamp(20px,5cqw,80px)] py-[72px]">
          <div className="flex flex-[1_1_560px] flex-col gap-7">
            <Eyebrow>Gamr Games &amp; Publishing</Eyebrow>
            <HeroTitle line1="Games from Africa." line2="Played everywhere." />
            <HeroLead>
              Gamr creates original games and selectively partners with African studios to fund, finish, launch and grow distinctive titles.
            </HeroLead>
            <ButtonGroup>
              <Button href="/games">Explore Our Games</Button>
              <Button href="/publishing#pitch" variant="ghost">
                Pitch a Game
              </Button>
            </ButtonGroup>
            <div>
              <TextLink href="/for-brands#brief">Building for a brand? Brief Us →</TextLink>
            </div>
          </div>
          <figure className="m-0 flex flex-[1_1_100%] flex-col items-center gap-3.5 md:flex-[0_0_300px] md:items-stretch">
            <div className="aspect-[368/656] w-[min(260px,70vw)] overflow-hidden border-2 border-line-strong bg-white md:w-[300px]">
              <HeroVideo
                src="/assets/video/build-africa-on-roblox.mp4"
                poster="/assets/video/build-africa-on-roblox-poster.jpg"
                label="Gamr Studios introduces Build Africa on Roblox"
              />
            </div>
            <figcaption>
              <Mono size={10}>Gamr Studios · Build Africa on Roblox</Mono>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="border-t border-line bg-black" aria-label="Trusted by industry leaders">
        <div className="mx-auto box-border flex max-w-[1280px] flex-wrap items-center gap-x-12 gap-y-6 px-[clamp(20px,5cqw,80px)] py-10">
          <div className="flex-none">
            <Mono>Trusted by industry leaders</Mono>
          </div>
          <LogoMarquee logos={LOGOS} />
        </div>
      </section>

      <Section>
        <SectionHeading
          eyebrow="One company"
          title="How we work."
          lead="Gamr makes games, publishes them, trains the people who build them, and helps brands take part in gaming."
        />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {PARTS.map((p, i) => (
            <div
              key={p.title}
              className={`box-border flex min-h-[300px] flex-col gap-4 bg-surface p-7 ${i === 0 ? "border-2 border-blue" : "border border-line"}`}
            >
              <Icon name={p.icon} size={32} className="block flex-none text-blue-text" />
              <div>
                <Mono tone="blue">{p.tag}</Mono>
              </div>
              <CardTitle size={24}>{p.title}</CardTitle>
              <p className="m-0 max-w-[360px] text-[15px] leading-[1.6] text-muted">{p.text}</p>
              <div className="mt-auto">
                <TextLink href={p.href}>{p.link}</TextLink>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="alt">
        <QuoteBlock
          quote="“To build games that are African made and globally played.”"
          name="Eniola Edun, CEO & Co-founder, Gamr"
          context="At the Lab opening, University of Lagos, March 2025"
        />
      </Section>

      <Section tone="alt">
        <SectionHeading
          eyebrow="Our games"
          title="A growing library."
          lead="Live, in development and on the way, across Roblox, mobile, web and other platforms. Every title carries an honest status."
        />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {GAMES.map((g) => (
            <article key={g.title} className="flex flex-col border border-line bg-surface">
              <ImageBlock src={g.src} alt={g.alt} sizes="(min-width: 761px) 33vw, 100vw" className="border-b border-line md:h-[280px]" />
              <div className="flex flex-1 flex-col gap-4 p-7">
                <Badge tone={g.tone}>{g.status}</Badge>
                <div className="text-[length:clamp(30px,3.2cqw,44px)] leading-[0.92] font-black tracking-[-0.045em] uppercase">
                  {g.title}
                </div>
                <p className="m-0 max-w-[420px] text-[15px] leading-[1.6] text-muted">{g.text}</p>
                <div className="mt-auto flex flex-col gap-3.5">
                  <Mono>{g.meta}</Mono>
                  {g.cta && (
                    <Button href={g.cta.href} size="sm">
                      {g.cta.label}
                    </Button>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-7">
          <TextLink href="/games">See all games →</TextLink>
        </div>
      </Section>

      <Section>
        <div className="flex flex-wrap gap-x-[72px] gap-y-12">
          <div className="flex flex-[1_1_380px] flex-col gap-6">
            <Eyebrow>Publishing</Eyebrow>
            <H2>Built in Africa. Ready for the world.</H2>
            <Body>
              Gamr publishes its own games and selectively partners with African studios, with a support package agreed for each title.
            </Body>
            <ButtonGroup>
              <Button href="/games">See What We’ve Published</Button>
              <Button href="/publishing#pitch" variant="ghost">
                Pitch a Game
              </Button>
            </ButtonGroup>
          </div>
          <div className="flex flex-[1.3_1_460px] flex-col gap-7">
            <div className="border-b border-line">
              {LANES.map((l) => (
                <div key={l.title} className="flex flex-wrap gap-x-6 gap-y-2 border-t border-line py-5.5">
                  <div className="flex flex-[1_1_220px] flex-col gap-2">
                    <CardTitle>{l.title}</CardTitle>
                    <div>
                      <Mono tone="blue">{l.tag}</Mono>
                    </div>
                  </div>
                  <div className="flex-[2_1_300px]">
                    <p className="m-0 max-w-[520px] text-[15px] leading-[1.6] text-muted">{l.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
              {SUPPORT.map((s, i) => (
                <div key={s.title} className="flex flex-col gap-2.5 border border-line bg-surface p-5.5">
                  <Icon name={s.icon} className="block flex-none text-blue-text" />
                  <Mono tone="blue">{String(i + 1).padStart(2, "0")}</Mono>
                  <CardTitle size={20}>{s.title}</CardTitle>
                  <p className="m-0 max-w-[300px] text-[14px] leading-[1.6] text-muted">{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section tone="alt">
        <div className="flex flex-wrap items-stretch gap-x-16 gap-y-10">
          <div className="flex-[1_1_420px]">
            <ImageBlock
              src={img.labRoom}
              alt="Guests and learners at the Lab workstations during the launch"
              className="border border-line md:h-[500px]"
              position="center 60%"
            />
          </div>
          <div className="flex flex-[1_1_400px] flex-col justify-center gap-6">
            <Eyebrow>Lab</Eyebrow>
            <H2>Turn players into builders.</H2>
            <Body>Practical skills, mentorship and production sprints that lead to real projects and industry pathways.</Body>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <Stat value="1,350+" label="People trained" source="Source: gamr.africa homepage, 2026" />
              <Stat value="4" label="Lab partners" source="French Embassy, NSC, HP, Unreal Engine · UNILAG, 2025" />
            </div>
            <ButtonGroup>
              <Button href="/lab#programmes">Explore Programmes</Button>
              <Button href="/lab#partner" variant="ghost">
                Partner With the Lab
              </Button>
            </ButtonGroup>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="For Brands · Managed Services"
          title="Help your brand show up, and belong, in gaming."
          lead="A separate route for brands and agencies, backed by a team that makes its own games."
        />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {CAPABILITIES.map((c) => (
            <Card key={c.title}>
              <IconBox name={c.icon} />
              <CardTitle>{c.title}</CardTitle>
              <p className="m-0 max-w-[520px] text-[15px] leading-[1.6] text-muted">{c.text}</p>
            </Card>
          ))}
        </div>
        <div className="mt-8">
          <ButtonGroup>
            <Button href="/for-brands#brief">Brief Us</Button>
            <Button href="/for-brands#work" variant="ghost">
              View Case Studies
            </Button>
          </ButtonGroup>
        </div>
      </Section>

      <Section tone="alt">
        <SectionHeading eyebrow="Insights" title="Case studies, articles and game launches." />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {STORIES.map((s) => (
            <Link key={s.title} className="flex flex-col border border-line bg-surface" href="/insights">
              <ImageBlock src={s.src} alt={s.title} sizes="(min-width: 761px) 33vw, 100vw" className="border-b border-line md:h-[200px]" />
              <div className="flex flex-col gap-3 p-6">
                <Mono tone="blue">{s.kind}</Mono>
                <CardTitle size={20}>{s.title}</CardTitle>
                <Mono>{s.date}</Mono>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-7">
          <TextLink href="/insights">All insights →</TextLink>
        </div>
      </Section>

      <section className="border-t border-line bg-black">
        <div className="mx-auto box-border max-w-[1280px] px-[clamp(20px,5cqw,80px)] py-[clamp(56px,7cqw,96px)]">
          <div className="flex flex-wrap gap-4">
            <DoorPanel tone="blue" title="Have a playable game?" cta="Pitch a Game" href="/publishing#pitch" />
            <DoorPanel tone="dark" title="Have a brand brief?" cta="Brief Us" href="/for-brands#brief" />
          </div>
        </div>
      </section>
    </PageShell>
  );
}
