import Link from "next/link";
import { Badge, type BadgeTone } from "@/components/Badge";
import { Button } from "@/components/Button";
import { ButtonGroup } from "@/components/ButtonGroup";
import { Card } from "@/components/Card";
import { CardTitle } from "@/components/CardTitle";
import { Carousel, type Slide } from "@/components/Carousel";
import { Eyebrow } from "@/components/Eyebrow";
import { GameSlate, type SlateGame } from "@/components/GameSlate";
import { Body, H2, HeroLead, HeroTitle } from "@/components/Heading";
import { HeroCrossfade } from "@/components/HeroCrossfade";
import { Icon, type IconName } from "@/components/Icon";
import { IconBox } from "@/components/IconBox";
import { ImageBlock } from "@/components/ImageBlock";
import { Mono } from "@/components/Mono";
import { PageShell } from "@/components/PageShell";
import { RowList } from "@/components/RowList";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { img, type ImageSrc } from "@/lib/images";

const ROBLOX_AFRODRIVE = "https://www.roblox.com/games/122444818290399";

const SLATE: SlateGame[] = [
  { title: "AfroDrive", src: img.afro, status: "Live on Roblox", tone: "live" },
  { title: "My City Life", src: img.mcl1, status: "Live on web", tone: "live" },
  { title: "Crossroads", src: img.crossroads, status: "In development", tone: "dev" },
  { title: "Unannounced", src: img.teaser, status: "In development", tone: "dev" },
  { title: "Unannounced", src: img.teaser, status: "Coming soon", tone: "live" },
];

type Tile = { title: string; src: ImageSrc; alt: string; status: string; tone: BadgeTone; text: string; meta: string };

const LIBRARY: Tile[] = [
  {
    title: "AfroDrive",
    src: img.afro,
    alt: "AfroDrive",
    status: "Live on Roblox",
    tone: "live",
    text: "Start your journey as a local bus driver and build your own transport empire across vibrant African-inspired cities.",
    meta: "Roblox · A Gamr Original · Illustration",
  },
  {
    title: "My City Life: New York",
    src: img.mcl1,
    alt: "My City Life: New York",
    status: "Live on web",
    tone: "live",
    text: "A free life sim in a low-poly New York City: hustle, commute, make rent and vote alongside real players.",
    meta: "A Gamr Original · Web · Launched Oct 2026 · 16+",
  },
];

const NEXT: Tile[] = [
  {
    title: "Crossroads: Lagos Stories",
    src: img.crossroads,
    alt: "Crossroads: Lagos Stories",
    status: "In development",
    tone: "dev",
    text: "A narrative game of decision-based storytelling, drawn from the lives of young Nigerians.",
    meta: "A Gamr Original · Concept illustration · No release date",
  },
  {
    title: "Unannounced",
    src: img.teaser,
    alt: "Unannounced",
    status: "In development",
    tone: "dev",
    text: "A new Gamr Original in production. More soon.",
    meta: "Platform to be announced",
  },
  {
    title: "Unannounced",
    src: img.teaser,
    alt: "Unannounced",
    status: "Coming soon",
    tone: "live",
    text: "Another Gamr Original on the way. Watch this space.",
    meta: "Platform to be announced",
  },
];

const STAGES = ["Concept & story", "Game design & mechanics", "Development & coding", "Testing & feedback", "Launch & growth"];

const SLIDES: Slide[] = [
  "Every great game starts with an idea",
  "Concept and story",
  "Game design and mechanics",
  "Development and coding",
  "Testing and feedback",
  "Launch and growth",
].map((alt, i) => ({ src: `/assets/slides/idea-to-launch-${i + 1}.jpg`, alt }));

const MAKE: { icon: IconName; title: string; text: string }[] = [
  { icon: "spark", title: "Original IP", text: "Games Gamr starts, owns and controls." },
  { icon: "users", title: "Co-development", text: "Games built with other studios, on terms agreed per project." },
  { icon: "globe", title: "Cross-platform", text: "Roblox, mobile, web and other platforms, wherever the players are." },
  {
    icon: "layers",
    title: "Production approach",
    text: "Small teams, short production sprints and early playtests with real players, so every title ships, learns and improves.",
  },
];

function GameTile({ tile }: { tile: Tile }) {
  return (
    <article className="flex flex-col border border-line bg-surface">
      <ImageBlock src={tile.src} alt={tile.alt} sizes="(min-width: 761px) 33vw, 100vw" className="border-b border-line md:h-[240px]" />
      <div className="flex flex-1 flex-col gap-3.5 p-6">
        <Badge tone={tile.tone}>{tile.status}</Badge>
        <div className="text-[length:clamp(26px,2.6cqw,36px)] leading-[0.95] font-black tracking-[-0.04em] uppercase">{tile.title}</div>
        <p className="m-0 max-w-[400px] text-[15px] leading-[1.6] text-muted">{tile.text}</p>
        <div className="mt-auto">
          <Mono>{tile.meta}</Mono>
        </div>
      </div>
    </article>
  );
}

export default function GamesPage() {
  return (
    <PageShell active="games">
      <section className="relative overflow-hidden bg-black">
        <HeroCrossfade frames={[img.mcl1, img.afro, img.mcl3, img.crossroads]} />
        <div className="relative mx-auto box-border flex max-w-[1280px] flex-col gap-7 px-[clamp(20px,5cqw,80px)] pt-[120px]">
          <Eyebrow>Games</Eyebrow>
          <HeroTitle line1="Worlds built here." line2="Played everywhere." />
          <HeroLead>A growing library of original games from Gamr Studios, across Roblox, mobile, web and other platforms.</HeroLead>
          <ButtonGroup>
            <Button href={ROBLOX_AFRODRIVE}>Play AfroDrive</Button>
            <Button href="/publishing#pitch" variant="ghost">
              Pitch a Game
            </Button>
          </ButtonGroup>
        </div>
        <div className="relative">
          <GameSlate games={SLATE} />
        </div>
        <div className="h-[72px]" />
      </section>

      <Section>
        <div className="flex flex-wrap gap-x-16 gap-y-10">
          <div className="flex-[1.3_1_460px]">
            <ImageBlock
              src={img.afro}
              alt="Illustration of a yellow bus on an African city street, inspired by AfroDrive"
              className="border border-line md:h-[480px]"
            />
          </div>
          <div className="flex flex-[1_1_380px] flex-col justify-center gap-5">
            <Eyebrow>Featured game</Eyebrow>
            <Badge tone="live">Live on Roblox</Badge>
            <div className="text-[length:clamp(44px,6cqw,88px)] leading-[0.9] font-black tracking-[-0.045em] uppercase">AfroDrive</div>
            <p className="m-0 max-w-[480px] text-[17px] leading-[1.6] text-soft">
              Start your journey as a local bus driver and build your own transport empire across vibrant African-inspired cities.
            </p>
            <RowList
              rows={[
                { label: "Platform", value: "Roblox" },
                { label: "Label", value: "A Gamr Original" },
                { label: "Developer", value: "Gamr Studios" },
              ]}
            />
            <Mono size={10}>Artwork: illustration, not in-game footage</Mono>
            <ButtonGroup>
              <Button href={ROBLOX_AFRODRIVE}>Play on Roblox</Button>
            </ButtonGroup>
          </div>
        </div>
      </Section>

      <Section tone="alt">
        <div className="flex flex-col gap-8">
          <div className="flex flex-wrap items-end justify-between gap-x-16 gap-y-6">
            <div className="flex flex-[1_1_520px] flex-col gap-4.5">
              <Eyebrow>Also live</Eyebrow>
              <Badge tone="live">Live on web</Badge>
              <div className="text-[length:clamp(40px,5.4cqw,76px)] leading-[0.9] font-black tracking-[-0.045em] uppercase">
                My City Life:
                <br />
                New York
              </div>
              <p className="m-0 max-w-[560px] text-[17px] leading-[1.6] text-soft">
                A free life sim in a low-poly New York City: hustle, commute, make rent and vote alongside real players.
              </p>
            </div>
            <div className="flex flex-[0_1_auto] flex-col gap-4">
              <RowList
                rows={[
                  { label: "Platform", value: "Web browser" },
                  { label: "Label", value: "A Gamr Original" },
                  { label: "Launched", value: "October 2026" },
                  { label: "Age rating", value: "16+" },
                ]}
              />
              <Button href="https://mycitylife.gg/">Play in Browser</Button>
            </div>
          </div>
          <ImageBlock
            src={img.mcl1}
            alt="My City Life: a player outside their room near 74th St in Jackson Heights"
            sizes="(min-width: 1280px) 1120px, 100vw"
            className="border border-line md:h-[460px]"
          />
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <ImageBlock
              src={img.mcl2}
              alt="My City Life: the in-game phone with apps for rent, transit and more"
              className="border border-line md:h-[300px]"
            />
            <ImageBlock
              src={img.mcl3}
              alt="My City Life: the in-game transit map of New York"
              className="border border-line md:h-[300px]"
            />
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Our games"
          title="The library."
          lead="Every title we’ve shipped or are about to, the platform it’s on and where to play it."
        />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {LIBRARY.map((t) => (
            <GameTile key={t.title} tile={t} />
          ))}
          <Link
            className="box-border flex min-h-[420px] flex-col justify-between gap-6 border border-blue bg-blue p-8"
            href="/publishing#pitch"
          >
            <Icon name="rocket" size={40} className="block flex-none text-white" />
            <div className="flex flex-col gap-3.5">
              <div className="text-[length:clamp(28px,2.8cqw,40px)] leading-[0.95] font-black tracking-[-0.04em] text-white uppercase">
                Could your game be next?
              </div>
              <p className="m-0 max-w-[360px] text-[15px] leading-[1.6] text-white">
                Gamr selectively publishes games from African studios with a playable build.
              </p>
              <span className="text-[13px] font-bold tracking-[0.14em] text-white uppercase">Pitch a game →</span>
            </div>
          </Link>
        </div>
      </Section>

      <Section tone="alt">
        <SectionHeading
          eyebrow="In development"
          title="What’s next."
          lead="Three titles in production at a time, shown with approved art only."
        />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {NEXT.map((t) => (
            <GameTile key={t.status + t.text} tile={t} />
          ))}
        </div>
      </Section>

      <Section>
        <div className="flex flex-wrap items-center justify-between gap-x-[72px] gap-y-12">
          <div className="flex flex-[1_1_420px] flex-col gap-5.5">
            <Eyebrow>How Gamr builds</Eyebrow>
            <H2>From idea to launch.</H2>
            <p className="m-0 max-w-[520px] text-[16px] leading-[1.6] text-muted">
              Every Gamr game moves through the same five stages, from the first story idea to getting it into players’ hands.
            </p>
            <ol className="m-0 list-none border-b border-line p-0">
              {STAGES.map((stage, i) => (
                <li key={stage} className="flex items-baseline gap-4 border-t border-line py-4">
                  <Mono tone="blue">{String(i + 1).padStart(2, "0")}</Mono>
                  <span className="text-[19px] font-bold text-white uppercase">{stage}</span>
                </li>
              ))}
            </ol>
          </div>
          <Carousel slides={SLIDES} label="Slides from idea to launch, advancing automatically. Hover or focus to pause." />
        </div>
      </Section>

      <Section tone="alt">
        <SectionHeading eyebrow="Gamr Studios" title="What we make." />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {MAKE.map((m) => (
            <Card key={m.title}>
              <IconBox name={m.icon} />
              <CardTitle>{m.title}</CardTitle>
              <p className="m-0 max-w-[520px] text-[15px] leading-[1.6] text-muted">{m.text}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <div className="flex flex-wrap items-end justify-between gap-x-16 gap-y-8">
          <div className="flex flex-[1_1_480px] flex-col gap-5">
            <Eyebrow>Publishing</Eyebrow>
            <H2>Building your own game?</H2>
            <Body>Gamr selectively publishes games from African studios with a playable build.</Body>
          </div>
          <ButtonGroup>
            <Button href="/publishing#pitch">Pitch a Game</Button>
            <Button href="/publishing#criteria" variant="ghost">
              Our Criteria
            </Button>
          </ButtonGroup>
        </div>
      </Section>
    </PageShell>
  );
}
