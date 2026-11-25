import { pageMetadata } from "@/lib/site";
import Link from "next/link";
import { Button } from "@/components/Button";
import { ButtonGroup } from "@/components/ButtonGroup";
import { Card } from "@/components/Card";
import { CardTitle } from "@/components/CardTitle";
import { Eyebrow } from "@/components/Eyebrow";
import { Body, H2, HeroLead, HeroTitle } from "@/components/Heading";
import { HeroImage } from "@/components/HeroImage";
import { Icon, type IconName } from "@/components/Icon";
import { IconBox } from "@/components/IconBox";
import { ImageBlock } from "@/components/ImageBlock";
import { Mono } from "@/components/Mono";
import { PageShell } from "@/components/PageShell";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { TextLink } from "@/components/TextLink";
import { img, type ImageSrc } from "@/lib/images";

const PARTS: { icon: IconName; title: string; text: string; link: string; href: string }[] = [
  { icon: "gamepad", title: "Games", text: "Original games from Gamr Studios.", link: "Games →", href: "/games" },
  {
    icon: "rocket",
    title: "Publishing",
    text: "A selective publishing route for African studios.",
    link: "Publishing →",
    href: "/publishing",
  },
  { icon: "book", title: "Lab", text: "The talent and developer pipeline.", link: "Lab →", href: "/lab" },
  {
    icon: "target",
    title: "Managed Services",
    text: "The commercial offer for brands and agencies.",
    link: "For Brands →",
    href: "/for-brands",
  },
];

/** Stand-ins: initials tiles until approved headshots arrive (see README). */
const LEADERS = [
  {
    initials: "EE",
    name: "Eniola Edun",
    role: "Co-Founder & Chief Executive Officer",
    text: "Leads Gamr’s strategy, growth and commercial direction.",
  },
  {
    initials: "DP",
    name: "Damilola Pedro",
    role: "Co-Founder & Chief Operating Officer",
    text: "Leads operations, partnerships, programme delivery and organisational execution.",
  },
  {
    initials: "SF",
    name: "Seyi Fakoya",
    role: "Co-Founder & Chief Technology Officer",
    text: "Leads technology, product development, engineering and the infrastructure behind Gamr’s platforms.",
  },
];

const PHOTOS: { src: ImageSrc; alt: string; position: string; caption: string }[] = [
  {
    src: img.teamLaunch,
    alt: "The team in Lab t-shirts at the Lab launch",
    position: "center 40%",
    caption: "At the Lab launch, University of Lagos",
  },
  { src: img.squad, alt: "The Gamr team together on stage", position: "center 22%", caption: "The Gamr team" },
];

const MORE: { icon: IconName; title: string; text: string; link: string; href: string }[] = [
  { icon: "book", title: "Insights", text: "Case studies, articles and game launches.", link: "Read insights →", href: "/insights" },
  {
    icon: "mail",
    title: "Contact",
    text: "Tell us what you need; we’ll route it to the right team.",
    link: "Contact us →",
    href: "/contact",
  },
];

export const metadata = pageMetadata(
  "/company",
  "Company",
  "An African games company: original games, selective publishing, game-making talent and credible brand participation in gaming.",
);

export default function CompanyPage() {
  return (
    <PageShell active="company">
      <section className="relative overflow-hidden bg-black bg-grid">
        <HeroImage src={img.labTalk} alt="" className="md:w-[56%]" position="35% 40%" />
        <div className="relative mx-auto box-border flex max-w-[1280px] flex-col justify-end gap-7 px-[clamp(20px,5cqw,80px)] pt-10 pb-14 md:min-h-[600px] md:pt-[72px] md:pb-[72px]">
          <div className="flex-[1_1_40px]" />
          <Eyebrow>Company · About</Eyebrow>
          <HeroTitle line1="An African" line2="games company." />
          <HeroLead>Original games, selective publishing, game-making talent and credible brand participation in gaming.</HeroLead>
          <ButtonGroup>
            <Button href="/games">Explore Our Games</Button>
            <Button href="/contact" variant="ghost">
              Contact Gamr
            </Button>
          </ButtonGroup>
        </div>
      </section>

      <Section>
        <div className="flex flex-wrap items-end justify-between gap-x-16 gap-y-6">
          <div className="flex flex-[1_1_560px] flex-col gap-5">
            <Eyebrow>Why now</Eyebrow>
            <H2>Africa’s gaming moment has arrived.</H2>
          </div>
          <div className="max-w-[460px] flex-[1_1_360px]">
            <p className="m-0 max-w-[460px] text-[17px] leading-[1.6] text-soft">
              A young population, rising smartphone access, digital payments and creator culture put Africa among the most important gaming
              markets of the next decade.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="alt">
        <SectionHeading eyebrow="How the company fits together" title="One company, four parts." />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {PARTS.map((p) => (
            <Card key={p.title}>
              <IconBox name={p.icon} />
              <CardTitle>{p.title}</CardTitle>
              <p className="m-0 max-w-[520px] text-[15px] leading-[1.6] text-muted">{p.text}</p>
              <div className="mt-auto pt-1.5">
                <TextLink href={p.href}>{p.link}</TextLink>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Leadership and team" title="The people behind the games." />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {LEADERS.map((l) => (
            <div key={l.initials} className="flex flex-col gap-3 border border-line bg-surface p-7">
              <div
                aria-hidden="true"
                className="mb-2 flex h-[72px] w-[72px] items-center justify-center border-2 border-blue-text text-[26px] font-black tracking-[-0.02em] text-white"
              >
                {l.initials}
              </div>
              <CardTitle size={24}>{l.name}</CardTitle>
              <Mono tone="blue">{l.role}</Mono>
              <p className="m-0 max-w-[420px] text-[15px] leading-[1.6] text-muted">{l.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-4">
          <Mono size={10}>Individual portraits to follow</Mono>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
          {PHOTOS.map((p) => (
            <figure key={p.caption} className="m-0 flex flex-col gap-3">
              <ImageBlock src={p.src} alt={p.alt} className="border border-line md:h-[420px]" position={p.position} />
              <figcaption>
                <Mono>{p.caption}</Mono>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      <Section tone="alt" id="careers">
        <div className="flex flex-wrap items-end justify-between gap-x-16 gap-y-8">
          <div className="flex flex-[1_1_480px] flex-col gap-5">
            <Eyebrow>Careers</Eyebrow>
            <H2>Build games with us.</H2>
            <Body>
              We hire across game development, art, production and programmes. Choose “Careers” on the contact form and we’ll reach out when
              a role fits.
            </Body>
          </div>
          <Button href="/contact">Get in Touch</Button>
        </div>
      </Section>

      <Section>
        <div className="mb-8 flex flex-wrap items-end justify-between gap-x-16 gap-y-6">
          <div className="flex flex-[1_1_520px] flex-col gap-5">
            <Eyebrow>More from Company</Eyebrow>
            <H2>Insights and contact.</H2>
          </div>
        </div>
        <div className="flex flex-wrap gap-4">
          {MORE.map((m) => (
            <Link key={m.title} className="flex flex-[1_1_320px] items-start gap-5 border border-line bg-surface p-8" href={m.href}>
              <Icon name={m.icon} size={32} className="block flex-none text-blue-text" />
              <div className="flex flex-col gap-2.5">
                <CardTitle size={24}>{m.title}</CardTitle>
                <p className="m-0 max-w-[420px] text-[15px] leading-[1.6] text-muted">{m.text}</p>
                <span className="font-mono text-[12px] font-bold tracking-[0.14em] text-blue-text uppercase">{m.link}</span>
              </div>
            </Link>
          ))}
        </div>
      </Section>
    </PageShell>
  );
}
