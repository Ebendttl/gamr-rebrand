import { Mono } from "./Mono";
import { SmartLink } from "./SmartLink";
import { Wordmark } from "./Header";

const COLUMNS: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Games",
    links: [
      { label: "Our Games", href: "/games" },
      { label: "Publishing", href: "/publishing" },
      { label: "Pitch a Game", href: "/publishing#pitch" },
    ],
  },
  {
    title: "Build with Gamr",
    links: [
      { label: "Lab", href: "/lab" },
      { label: "Talent", href: "/lab#talent" },
      { label: "For Brands", href: "/for-brands" },
      { label: "Brief Us", href: "/for-brands#brief" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/company" },
      { label: "Insights", href: "/insights" },
      { label: "Careers", href: "/company#careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "/contact" },
      { label: "Terms", href: "/contact" },
      { label: "Instagram", href: "https://www.instagram.com/gamrhq/" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-line bg-black">
      <div className="mx-auto box-border max-w-[1280px] px-[clamp(20px,5cqw,80px)] pt-16 pb-8">
        <div className="flex flex-wrap gap-x-12 gap-y-10">
          <div className="flex flex-[2_1_280px] flex-col gap-4">
            <Wordmark height={36} />
            <p className="m-0 max-w-[340px] text-[14px] leading-[1.6] text-muted">
              An African games company: original games, selective publishing, game-making talent and credible brand participation in gaming.
            </p>
          </div>
          {COLUMNS.map((col) => (
            <div key={col.title} className="flex flex-[1_1_160px] flex-col gap-0.5">
              <div className="mb-2.5">
                <Mono>{col.title}</Mono>
              </div>
              {col.links.map((l) => (
                <SmartLink key={l.label} href={l.href} className="inline-flex min-h-10 items-center text-[15px] text-soft">
                  {l.label}
                </SmartLink>
              ))}
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-wrap justify-between gap-x-6 gap-y-2 border-t border-line pt-5">
          <Mono>© 2026 Gamr</Mono>
        </div>
      </div>
    </footer>
  );
}
