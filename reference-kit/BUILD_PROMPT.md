# Build prompt for Claude Code

Paste everything below the line into Claude Code, opened on the `gamr-rebrand` repository, after committing this kit into `reference-kit/` at the repo root.

---

You are building the new production website for **Gamr** (gamr.africa), an African games company. The design is final and approved. Your job is to **clone it exactly** as a fast, accessible, **mobile-first** Next.js site, then deploy a Vercel preview. Do not redesign anything.

## Inputs (all in `reference-kit/`)
1. `reference/gamr-rebrand-site.html`: the approved mockup and **the source of truth**. All 8 pages, desktop and mobile, in one file; switch pages with `#home`, `#games`, `#publishing`, `#lab`, `#brands`, `#company`, `#insights`, `#contact`. Read its markup and CSS directly: every colour, size, spacing value, icon path, alt text and line of copy you need is in it.
2. `SPEC.md`: explains the tokens, components, motion, breakpoints, routes, forms, contact details, SEO, quality bars and the stand-ins. Read it fully before writing code.
3. `reference/screenshots/mobile/*.jpg` (390 px) and `reference/screenshots/desktop/*.jpg` (1440 px): what each page must look like.
4. `assets/`: every image, logo and the hero video as files; `assets/originals/` has higher-resolution versions; `assets/manifest.json` maps them to the reference.

## Stack
- Next.js (App Router, latest stable) + TypeScript (strict).
- Tailwind CSS for styling, with the exact token values from SPEC.md §3 in the theme (use arbitrary values where a value is unique, for example `clamp(42px,7.4cqw,108px)`). Plain CSS modules are fine for the marquee, carousel and crossfade keyframes.
- `next/font` for Inter, `next/image` for every image.
- No UI kit, no animation library, no CMS for now. Static rendering for all pages; client components only for the mobile menu, carousel and forms.
- Package manager: pnpm. Node LTS.

## Build plan (do it in this order, committing after each step)
1. **Read** `SPEC.md` and the reference HTML. Write `docs/build-notes.md` listing every page, its sections in order and every reusable component you'll create, mapped to the reference. Ask me only if something is truly ambiguous; otherwise follow the reference.
2. **Scaffold** the app, Tailwind theme (tokens), fonts, global styles (`html, body { overflow-x: hidden }`, focus styles), and copy `assets/` into `public/assets/` (optimised sources from `assets/originals/` where available).
3. **Shared components**: Header (desktop nav with hover/focus dropdowns, mobile disclosure menu), Footer, Section, SectionHeading (eyebrow + H2 + lead), Eyebrow, Button (4 variants, 2 sizes), TextLink, Badge, Card, IconBox, Icon set (port the exact SVG paths from the reference), RowList, Timeline (icon steps, vertical on mobile), Stat, ImageBlock, LogoMarquee, GameSlate, Carousel, HeroCrossfade, QuoteBlock, Door panels, Form fields.
4. **Pages**: build all 8 routes from SPEC.md §4 and §5, mobile-first, with copy taken **verbatim** from the reference. Add the redirects in §4.
5. **Behaviour**: motion exactly per SPEC.md §3 (durations, pause on hover/focus, reduced motion), anchor links (`/publishing#pitch`, `/for-brands#brief`, and so on) with correct scroll offset under the header, mobile menu closes on navigation and Escape.
6. **Forms** per SPEC.md §6: Route Handler, validation (zod), honeypot plus basic rate limiting, routing by intent via environment variables, Resend email, inline success and error states, `?intent=` preselection on `/contact`. Never expose team emails; only `info@gamr.africa` is public. Add `.env.example`.
7. **SEO and metadata** per SPEC.md §8 (per-page metadata, OG image, sitemap, robots, JSON-LD, favicon). Remove the footer's "Mockup for review…" line.
8. **Visual verification (mandatory, this is what makes it an exact clone).** Add a Playwright script `scripts/visual-check.ts` that, for every page, screenshots your build and the reference (`reference/gamr-rebrand-site.html#<page>`) full-page at **390×844 first, then 1440×900**, with animations frozen (inject CSS that sets `animation: none` and shows the first carousel slide and first crossfade frame in both), and compares them with pixelmatch. Write diff images to `visual-diffs/`. Fix differences and re-run until every page is within **2% differing pixels** at both widths (font antialiasing aside). Also check 768 px and 1024 px for broken layouts and confirm there's no horizontal scroll at any width from 320 px up. Report the final percentages per page and width.
9. **Quality pass** per SPEC.md §9: Lighthouse mobile (Performance ≥ 90, Accessibility ≥ 95, Best Practices ≥ 95, SEO ≥ 95), keyboard-only walkthrough of every page, screen-reader labels, reduced-motion check. Fix what fails.
10. **Deploy a Vercel preview**, not production. Do the work on a branch (`rebrand-build`) and open a pull request into `main`; don't touch the current live gamr.africa site. Put the preview URL, the visual-check table and the Lighthouse scores in the PR description.

## Rules
- **Don't change the design**: no new sections, colours, fonts, copy or reordering. If the reference and SPEC.md disagree, follow the reference and note it in the PR.
- **Keep honesty labels** ("Illustration", "Concept illustration", status badges) and all stand-ins listed in SPEC.md §10 exactly as they are; list them in the PR as follow-ups.
- **No secrets in the repo**; use environment variables.
- Keep components small and typed; no dead code; no `any`.
- Write a short `README.md`: how to run, environment variables, how to run the visual check, how to swap each stand-in asset.

## Definition of done
- All 8 routes live on a Vercel preview URL, matching the reference within 2% at 390 px and 1440 px.
- Mobile menu, dropdowns, marquees, carousel, crossfade, video, anchors and redirects all work; motion respects reduced motion.
- Forms deliver to the right inbox by intent; no team emails exposed.
- Lighthouse targets met on mobile.
- PR open with the preview link, visual-check results, Lighthouse scores and the stand-in follow-up list.
