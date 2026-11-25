export type NavKey = "home" | "games" | "publishing" | "lab" | "brands" | "company";

export type NavItem = {
  key: NavKey;
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export const NAV: NavItem[] = [
  { key: "games", label: "Games", href: "/games" },
  { key: "publishing", label: "Publishing", href: "/publishing" },
  {
    key: "lab",
    label: "Lab",
    href: "/lab",
    children: [
      { label: "Programmes", href: "/lab#programmes" },
      { label: "Talent", href: "/lab#talent" },
    ],
  },
  { key: "brands", label: "For Brands", href: "/for-brands" },
  {
    key: "company",
    label: "Company",
    href: "/company",
    children: [
      { label: "About", href: "/company" },
      { label: "Insights", href: "/insights" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export const PITCH_HREF = "/publishing#pitch";
