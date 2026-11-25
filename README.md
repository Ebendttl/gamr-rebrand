# gamr-rebrand

The production website for **Gamr** (gamr.africa): a static, mobile-first Next.js site cloned from the approved mockup in `reference-kit/`.

## Run it

Requires Node 22 LTS and pnpm (`corepack enable`).

```bash
pnpm install
cp .env.example .env.local   # fill in what you need; see below
pnpm dev                     # http://localhost:3000
pnpm build && pnpm start     # production build
pnpm lint                    # TypeScript strict check
```

## Environment variables

| Variable | Purpose |
|---|---|
| `RESEND_API_KEY` | Resend API key for form email. Without it, `pnpm dev` logs submissions to the terminal instead of sending; production returns an error asking people to email info@gamr.africa. |
| `MAIL_FROM` | Sender address, e.g. `Gamr website <website@gamr.africa>` (domain must be verified in Resend). |
| `ROUTE_PUBLISHING` | Inbox for "Pitch a game". |
| `ROUTE_BRANDS` | Inbox for brand briefs and sponsorships. |
| `ROUTE_LAB` | Inbox for "Learn with the Lab", "Partner with the Lab", "Hire talent" and Lab partnership briefs. |
| `ROUTE_PRESS` | Inbox for press enquiries. |
| `ROUTE_CAREERS` | Inbox for careers. |
| `ROUTE_DEFAULT` | Fallback inbox (`info@gamr.africa`), also used for any unset route. |
| `NEXT_PUBLIC_SITE_URL` | Canonical URL for metadata, sitemap and robots (defaults to `https://gamr.africa`). |

Team addresses live only in these variables; they are never rendered or sent to the browser. Change them in Vercel without a code change. Forms post to `app/api/enquiry/route.ts`, which validates with zod, drops honeypot submissions, rate-limits per IP (5 per 10 minutes per instance) and emails the routed inbox with the sender as `Reply-To`.

## Visual check

`scripts/visual-check.ts` screenshots every page of the build and of `reference-kit/reference/gamr-rebrand-site.html` at 390×844 and 1440×900 (full page, motion frozen), diffs them with pixelmatch and checks 320–1440 px for horizontal overflow.

```bash
pnpm exec playwright install chromium   # once
pnpm build && pnpm start                 # terminal 1
pnpm visual-check                        # terminal 2; or: pnpm visual-check home games
```

Screenshots, diff images and `results.md` are written to `visual-diffs/` (git-ignored). The script exits non-zero if any page differs by more than 2 % or overflows horizontally. Set `BASE_URL` to check a deployed preview.

## Project layout

- `app/`: one folder per route; metadata, sitemap, robots, icons and the OG image live here too.
- `components/`: shared UI (Header, Footer, Section, Button, Card, Timeline, marquees, Carousel, forms…). Only `MobileMenu`, `Carousel`, `HeroVideo`, `InsightsGrid` and the forms run on the client.
- `lib/`: design data (`nav.ts`, `images.ts`, `enquiry.ts`), site constants and helpers.
- `public/assets/`: images, logos and video (high-resolution originals where available; `next/image` serves AVIF/WebP).
- Design tokens are in `app/globals.css` (`@theme`). Tailwind's preflight is intentionally not loaded: the mockup relies on browser defaults, and matching them keeps the clone pixel-exact.

## Swapping stand-in assets

Keep the honesty labels on the page until the real asset is approved, then update the label in the same change.

| Stand-in | Where | How to swap |
|---|---|---|
| Games hero background (crossfading frames) | `app/games/page.tsx` → `<HeroCrossfade>` | Put the gameplay loop (muted, < 1 MB, with a poster) in `public/assets/video/` and replace `<HeroCrossfade>` with a `<video autoPlay muted loop playsInline poster=…>` under the same gradient overlay. |
| Team photos | `lib/images.ts` → `squad`, `teamLaunch` | Replace `public/assets/photos/gamr-team.jpg` / `team-lab-launch.jpg` (same names), or point the keys at new files. |
| Leadership portraits (EE, DP, SF initials) | `app/company/page.tsx` → leadership tiles | Add 1:1 headshots to `public/assets/photos/` and render `<ImageBlock>` in place of the initials tile at the same size. |
| AfroDrive art | `lib/images.ts` → `afro` | Replace `public/assets/games/afrodrive-illustration.png`; then remove "Illustration" / "Artwork: illustration, not in-game footage" from the AfroDrive copy. |
| Crossroads art | `lib/images.ts` → `crossroads` | Replace `public/assets/games/crossroads-concept-illustration.png` with approved art; then drop "Concept illustration" from its labels. |
| Phone number (+234 905 570 2309) | `app/contact/page.tsx` | Update the displayed number and the `tel:` link together. |
| Partner logos | `app/page.tsx` → `LOGOS` | Remove any entry without written permission; files are in `public/assets/logos/`. |
