import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { INSTAGRAM, SITE_URL } from "@/lib/site";
import "./globals.css";

/** Inter (OFL), the exact Google Fonts v20 latin variable file, self-hosted so hinting matches the approved mockup. */
const inter = localFont({
  src: "./fonts/inter-latin-var.woff2",
  weight: "400 900",
  style: "normal",
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "Gamr: Games from Africa. Played everywhere.", template: "%s · Gamr" },
  description:
    "Gamr creates original games and selectively partners with African studios to fund, finish, launch and grow distinctive titles.",
};

const ORGANIZATION = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Gamr",
  url: SITE_URL,
  logo: `${SITE_URL}/assets/brand/gamr-wordmark.png`,
  email: "info@gamr.africa",
  sameAs: [INSTAGRAM],
  address: {
    "@type": "PostalAddress",
    streetAddress: "UNILAG Guesthouse, University of Lagos",
    addressLocality: "Lagos",
    addressCountry: "NG",
  },
};

export const viewport: Viewport = { themeColor: "#000000" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION) }} />
        {children}
      </body>
    </html>
  );
}
