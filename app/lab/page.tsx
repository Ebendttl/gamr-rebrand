import { Badge, type BadgeTone } from "@/components/Badge";
import { Button, type ButtonVariant } from "@/components/Button";
import { ButtonGroup } from "@/components/ButtonGroup";
import { Card } from "@/components/Card";
import { CardTitle } from "@/components/CardTitle";
import { Eyebrow } from "@/components/Eyebrow";
import { HeroLead, HeroTitle } from "@/components/Heading";
import { HeroImage } from "@/components/HeroImage";
import type { IconName } from "@/components/Icon";
import { IconBox } from "@/components/IconBox";
import { ImageBlock } from "@/components/ImageBlock";
import { Mono } from "@/components/Mono";
import { PageShell } from "@/components/PageShell";
import { RowList, type Row } from "@/components/RowList";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { Stat } from "@/components/Stat";
import { img } from "@/lib/images";

type Feature = { icon: IconName; title: string; text: string };

const STATS = [
  { value: "1,350+", label: "People trained", source: "Source: gamr.africa homepage, 2026" },
  { value: "4", label: "Lab partners", source: "French Embassy, NSC, HP, Unreal Engine" },
  { value: "20.03.25", label: "Lab opened at the University of Lagos", source: "UNILAG Guest Houses, Akoka" },
];

const APPROACH: Feature[] = [
  { icon: "book", title: "Practical learning", text: "Learning by building, not by lecture." },
  { icon: "message", title: "Mentorship", text: "Guidance from people who make games." },
  { icon: "bolt", title: "Production sprints", text: "Short team sprints that end in something playable." },
  { icon: "folder", title: "Portfolio projects", text: "Work you can show." },
  { icon: "briefcase", title: "Industry pathways", text: "Links to real opportunities in games." },
];

const PROGRAMMES: { tone: BadgeTone; status: string; title: string; rows: Row[]; cta: string; variant: ButtonVariant }[] = [
  {
    tone: "live",
    status: "Applications open",
    title: "The Lab waitlist",
    rows: [
      { label: "Format", value: "Rolling, all year" },
      { label: "For", value: "Aspiring game developers, designers and artists" },
      { label: "Closes", value: "Always open" },
    ],
    cta: "Join the Waitlist",
    variant: "primary",
  },
  {
    tone: "dev",
    status: "Opening soon",
    title: "Game Development Pathways",
    rows: [
      { label: "Format", value: "Unreal Engine, Unity or Godot" },
      { label: "Tracks", value: "Design, development, art & animation, UI/UX" },
      { label: "Opens", value: "Next intake to be announced" },
    ],
    cta: "Get Notified",
    variant: "ghost",
  },
  {
    tone: "closed",
    status: "Applications closed",
    title: "Build Africa on Roblox",
    rows: [
      { label: "Format", value: "2 months: player → builder → creator" },
      { label: "For", value: "Young Africans, mostly students" },
      { label: "Next cohort", value: "To be announced" },
    ],
    cta: "Join the Waitlist",
    variant: "ghost",
  },
];

const SKILLS: Feature[] = [
  { icon: "layers", title: "Game design", text: "Core loops, levels and player experience." },
  { icon: "code", title: "Roblox and Luau", text: "Scripting and building on Roblox." },
  { icon: "cube", title: "3D worlds", text: "Modelling and environment building." },
  { icon: "users", title: "Production and teamwork", text: "Shipping as a team, on a schedule." },
  { icon: "spark", title: "Creative technology", text: "Tools and practice around games." },
];

const ALUMNI = [
  "Roblox developer",
  "Game designer",
  "3D artist",
  "UI/UX designer",
  "Gameplay programmer",
  "Level designer",
  "Animator",
  "Esports producer",
  "Sound designer",
  "Narrative designer",
  "Technical artist",
  "Community lead",
];

const PARTNERSHIPS: Feature[] = [
  { icon: "money", title: "Sponsor a cohort", text: "Fund places on a programme." },
  { icon: "institution", title: "Host a programme", text: "Bring a Lab programme to your institution." },
  { icon: "search", title: "Hire talent", text: "Meet graduates who have built and shipped work." },
];

function FeatureCard({ icon, title, text }: Feature) {
  return (
    <Card>
      <IconBox name={icon} />
      <CardTitle>{title}</CardTitle>
      <p className="m-0 max-w-[520px] text-[15px] leading-[1.6] text-muted">{text}</p>
    </Card>
  );
}

export default function LabPage() {
  return (
    <PageShell active="lab">
      <section className="relative overflow-hidden bg-black bg-grid">
        <HeroImage src={img.labDesk} alt="" className="md:w-[60%]" position="62% 45%" />
        <div className="relative mx-auto box-border flex max-w-[1280px] flex-col justify-end gap-7 px-[clamp(20px,5cqw,80px)] pt-10 pb-14 md:min-h-[600px] md:pt-[72px] md:pb-[72px]">
          <div className="flex-[1_1_40px]" />
          <Eyebrow>Lab · by Gamr Studios</Eyebrow>
          <HeroTitle line1="Turn players" line2="into builders." />
          <HeroLead>Programmes that take people from playing games to building them.</HeroLead>
          <ButtonGroup>
            <Button href="/lab#programmes">Apply Now</Button>
            <Button href="/lab#partner" variant="ghost">
              Partner With Us
            </Button>
          </ButtonGroup>
        </div>
      </section>

      <Section tone="alt">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {STATS.map((s) => (
            <Stat key={s.label} {...s} />
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="What the Lab is"
          title="A practical route into making games."
          lead="Gaming PCs, VR stations, motion capture and an esports arena at the University of Lagos."
        />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5">
          {APPROACH.map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </div>
        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
          <ImageBlock
            src={img.labTalk}
            alt="A session at the Lab, with a speaker presenting to guests at the workstations"
            className="border border-line md:h-[380px]"
            position="center 45%"
          />
          <ImageBlock
            src={img.labEmpty}
            alt="The Lab room: rows of workstations in front of a game-themed mural"
            className="border border-line md:h-[380px]"
            position="center 55%"
          />
        </div>
      </Section>

      <Section tone="alt" id="programmes">
        <SectionHeading eyebrow="Programmes" title="Open, opening soon and closed." lead="Know exactly when to apply." />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {PROGRAMMES.map((p) => (
            <article key={p.title} className="flex flex-col gap-4.5 border border-line bg-surface p-7">
              <Badge tone={p.tone}>{p.status}</Badge>
              <CardTitle size={26}>{p.title}</CardTitle>
              <RowList rows={p.rows} />
              <div className="mt-auto">
                <Button href="/contact?intent=lab" variant={p.variant}>
                  {p.cta}
                </Button>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Skills and pathways" title="What you learn to do." />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5">
          {SKILLS.map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </div>
      </Section>

      <Section tone="alt" id="talent">
        <SectionHeading eyebrow="Talent" title="The alumni library." lead="Graduates, their skills and what they’ve built." />
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-6">
          {ALUMNI.map((role) => (
            <div key={role} className="flex flex-col border border-line bg-surface">
              <div className="aspect-[1/1] bg-field bg-grid" aria-hidden="true" />
              <div className="flex flex-col gap-1.5 px-3.5 py-3">
                <Mono size={10} tone="white">
                  {role}
                </Mono>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-7 flex flex-wrap items-center justify-between gap-x-8 gap-y-4">
          <p className="m-0 max-w-[620px] text-[14px] leading-[1.6] text-muted">
            Profiles appear only with each graduate’s consent. Stories are drafted with AI and approved by the graduate before publishing.
          </p>
          <Button href="/contact?intent=hire">Hire Talent</Button>
        </div>
      </Section>

      <Section id="partner">
        <SectionHeading eyebrow="Work with the Lab" title="Partner with us." />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {PARTNERSHIPS.map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </div>
        <div className="mt-8">
          <Button href="/contact?intent=hire">Hire Talent</Button>
        </div>
      </Section>
    </PageShell>
  );
}
