import type { Metadata } from "next";

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://gamr.africa").replace(/\/$/, "");
export const INSTAGRAM = "https://www.instagram.com/gamrhq/";

export const ROUTES = ["/", "/games", "/publishing", "/lab", "/for-brands", "/company", "/insights", "/contact"] as const;

/** Per-page title, description, canonical URL and social cards (images come from app/opengraph-image.png). */
export function pageMetadata(path: (typeof ROUTES)[number], title: string, description: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title: `${title} · Gamr`, description, url: path, siteName: "Gamr", type: "website", locale: "en" },
    twitter: { card: "summary_large_image", title: `${title} · Gamr`, description },
  };
}
