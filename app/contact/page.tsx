import { pageMetadata } from "@/lib/site";
import { ContactForm } from "@/components/forms/ContactForm";
import { Button, type ButtonVariant } from "@/components/Button";
import { Card } from "@/components/Card";
import { CardTitle } from "@/components/CardTitle";
import { Eyebrow } from "@/components/Eyebrow";
import { H2, HeroLead, HeroTitle } from "@/components/Heading";
import { Icon, type IconName } from "@/components/Icon";
import { Mono } from "@/components/Mono";
import { PageShell } from "@/components/PageShell";
import { Section } from "@/components/Section";

const MAP_URL = "https://www.google.com/maps/search/?api=1&query=UNILAG+Guesthouse+University+of+Lagos";

const ROUTES: { icon: IconName; title: string; text: string; cta: string; href: string; variant: ButtonVariant }[] = [
  {
    icon: "gamepad",
    title: "I have a game",
    text: "For studios and developers with a playable build.",
    cta: "Pitch a Game",
    href: "/publishing#pitch",
    variant: "primary",
  },
  {
    icon: "target",
    title: "I have a brand brief",
    text: "For brands and agencies planning work in gaming.",
    cta: "Brief Us",
    href: "/for-brands#brief",
    variant: "ghost",
  },
  {
    icon: "book",
    title: "I want to learn",
    text: "For learners, institutions and employers.",
    cta: "Go to the Lab",
    href: "/lab#programmes",
    variant: "ghost",
  },
];

const DETAILS: { icon: IconName; label: string; value: string; href?: string }[] = [
  { icon: "pin", label: "Visit", value: "UNILAG Guesthouse, University of Lagos, Lagos, Nigeria" },
  { icon: "phone", label: "Call", value: "+234 905 570 2309", href: "tel:+2349055702309" },
  { icon: "mail", label: "Email", value: "info@gamr.africa", href: "mailto:info@gamr.africa" },
];

export const metadata = pageMetadata(
  "/contact",
  "Contact",
  "Tell us what you need. Pick a quick route, or send a message and we’ll route it to the right team.",
);

export default function ContactPage() {
  return (
    <PageShell active="company">
      <section className="relative overflow-hidden bg-black bg-grid">
        <div className="relative mx-auto box-border flex max-w-[1280px] flex-col justify-end gap-7 px-[clamp(20px,5cqw,80px)] pt-10 pb-14 md:min-h-[420px] md:pt-[72px] md:pb-[72px]">
          <div className="flex-[1_1_40px]" />
          <Eyebrow>Company · Contact</Eyebrow>
          <HeroTitle line1="Tell us what" line2="you need." />
          <HeroLead>Pick a quick route, or send a message and we’ll route it to the right team.</HeroLead>
        </div>
      </section>

      <Section>
        <div className="mb-8 flex flex-wrap items-end justify-between gap-x-16 gap-y-6">
          <div className="flex flex-[1_1_520px] flex-col gap-5">
            <Eyebrow>Quick routes</Eyebrow>
            <H2>Pick the one that fits.</H2>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {ROUTES.map((r) => (
            <Card key={r.title}>
              <Icon name={r.icon} size={30} className="block flex-none text-blue-text" />
              <CardTitle size={24}>{r.title}</CardTitle>
              <p className="m-0 max-w-[320px] text-[15px] leading-[1.6] text-muted">{r.text}</p>
              <div className="mt-auto">
                <Button href={r.href} variant={r.variant} size="sm">
                  {r.cta}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section tone="alt">
        <div className="flex flex-wrap gap-x-[72px] gap-y-12">
          <div className="flex flex-[1.4_1_480px] flex-col gap-6">
            <Eyebrow>Send a message</Eyebrow>
            <CardTitle size={28}>Tell us the basics. We route it to the right person.</CardTitle>
            <p className="m-0 max-w-[520px] text-[16px] leading-[1.6] text-muted">
              Choose what it’s about and your message goes straight to the team that owns it, not a shared inbox.
            </p>
            <ContactForm />
          </div>
          <div className="flex flex-[1_1_340px] flex-col gap-6">
            <Eyebrow>Find us</Eyebrow>
            <div className="flex flex-col">
              <div className="border-b border-line">
                {DETAILS.map((d) => (
                  <div key={d.label} className="flex items-start gap-4 border-t border-line px-0 py-5">
                    <Icon name={d.icon} className="block flex-none text-blue-text" />
                    <div className="flex flex-col gap-1.5">
                      <Mono>{d.label}</Mono>
                      {d.href ? (
                        <a href={d.href} className="text-[17px] leading-[1.45] text-white">
                          {d.value}
                        </a>
                      ) : (
                        <span className="text-[17px] leading-[1.45] text-white">{d.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <a
                className="relative mt-6 block h-[260px] overflow-hidden border border-line bg-[#0B1120]"
                href={MAP_URL}
                aria-label="Open the Gamr Lab location in Google Maps"
              >
                <svg aria-hidden="true" width="100%" height="100%" viewBox="0 0 400 260" preserveAspectRatio="xMidYMid slice">
                  <rect width="400" height="260" fill="#0B1120" />
                  <path d="M260 0 C300 60 250 120 320 170 C360 200 380 230 400 240 L400 0 Z" fill="#0E2A47" />
                  <path d="M0 70 L400 110 M0 190 L400 150 M120 0 L160 260 M240 0 L210 260" stroke="#1F2A3D" strokeWidth="10" />
                  <path d="M0 130 L400 128" stroke="#27324A" strokeWidth="5" />
                  <rect x="150" y="96" width="44" height="30" fill="#16233A" />
                  <rect x="200" y="140" width="34" height="26" fill="#16233A" />
                  <text x="300" y="80" fontFamily="Arial,sans-serif" fontSize="11" fill="#5B7DB1" letterSpacing="2">
                    LAGOS LAGOON
                  </text>
                </svg>
                <div className="absolute top-[46%] left-[50%] flex [transform:translate(-50%,-100%)] flex-col items-center gap-1.5">
                  <Icon name="pin" size={40} className="block flex-none text-blue-text" />
                </div>
                <div className="absolute right-4 bottom-4 left-4 flex items-center justify-between gap-3 border border-line-strong bg-surface px-3.5 py-3">
                  <span className="text-[13px] font-bold text-white">UNILAG Guesthouse, University of Lagos</span>
                  <span className="font-mono text-[11px] font-bold tracking-[0.12em] text-blue-text uppercase">Open map →</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </Section>
    </PageShell>
  );
}
