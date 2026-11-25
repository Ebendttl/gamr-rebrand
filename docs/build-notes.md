# Build notes

Source of truth: `reference-kit/reference/gamr-rebrand-site.html` (all 8 pages, inline styles, one global `<style>` block). These notes map the reference to the Next.js build.

## How the reference is built (and how we match it)

- Every element is styled inline; there is no CSS reset beyond `body{margin:0}`. The build therefore **does not use Tailwind's preflight** (only the theme and utilities layers), so browser defaults (line-height `normal`, `box-sizing: content-box`, etc.) behave exactly as in the reference.
- The page wrapper sets `container-type: inline-size`; `cqw` values are kept as-is via the `@container` class on the root wrapper.
- Responsive behaviour in the reference is desktop-first (`max-width:1024px` / `max-width:760px` overrides on helper classes `rg2`–`rg7`, `tl`, `imx`, `hpic`, `hin`, `bts`, `hvid`, `xfwrap`). The build is mobile-first: base styles are the ≤ 760 px layout, `md:` = ≥ 761 px, `lg:` = ≥ 1025 px.
- Images are CSS backgrounds (`.im-<key>`) in the reference; the build uses `next/image` (`fill` + `object-cover` + the same `object-position`) inside the same sized box. Alt text comes from each `aria-label`.
- Footer line "Mockup for review. Bracketed items await approved content." is removed (SPEC §5/§3).

## Routes

| Reference hash | Route | Anchors |
|---|---|---|
| `#home` | `/` | – |
| `#games` | `/games` | – |
| `#publishing` | `/publishing` | `#criteria`, `#pitch` |
| `#lab` | `/lab` | `#programmes`, `#talent`, `#partner` |
| `#brands` | `/for-brands` | `#work`, `#brief` |
| `#company` | `/company` | `#careers` |
| `#insights` | `/insights` | – |
| `#contact` | `/contact` | – |

Link rewrites: "Start Your Pitch" → `/contact?intent=pitch`; "Hire Talent" → `/contact?intent=hire`; "Join the Waitlist" / "Get Notified" → `/contact?intent=lab`; every "Brief Us" → `/for-brands#brief`.

## Pages and sections (in order)

### Home `/`
1. Hero (grid bg): eyebrow "Gamr Games & Publishing", H1 "Games from Africa. / Played everywhere.", lead, buttons (Explore Our Games, Pitch a Game), text link "Building for a brand? Brief Us →", hero video figure + caption.
2. Trusted by industry leaders: label + LogoMarquee (9 logos, duplicated, 38 s).
3. "One company — How we work.": SectionHeading + 4 cards (`rg4`) with icon, mono tag, H3, copy, text link.
4. QuoteBlock (bg-alt): Eniola Edun quote.
5. "Our games — A growing library.": SectionHeading + 3 game cards (`rg3`).
6. "Publishing — Built in Africa. Ready for the world.": two-column (`rg2`) with lists and buttons.
7. "Lab — Turn players into builders.": `rg2` text + image.
8. "For Brands · Managed Services": SectionHeading + 6 capability cards (`rg3`) + buttons.
9. "Insights": 3 story cards (`rg3`).
10. Closing Door panels: "Have a playable game?" / "Have a brand brief?".

### Games `/games`
1. Hero: HeroCrossfade (4 frames, 20 s) + gradient, eyebrow, H1, lead, buttons, GameSlate marquee (46 s, focusable, pauses on hover/focus).
2. Featured game: AfroDrive (image + details row list + buttons).
3. Also live: My City Life: New York (3 screenshots `rg2`, Play in Browser).
4. "Our games — The library." `rg3` cards.
5. "In development — What's next." `rg3` cards.
6. "How Gamr builds — From idea to launch.": numbered list + Carousel (6 slides 4:5, 4 s each, dots).
7. "Gamr Studios — What we make." `rg4` cards.
8. Publishing CTA "Building your own game?".

### Publishing `/publishing`
1. Photo hero (`hpic` image right 60 %, `hin` text).
2. "What Gamr publishes — Three lanes, labelled." `rg3`.
3. "What Gamr can provide" `rg3` (6 cards).
4. `#criteria` "What Gamr looks for." RowList.
5. "Review process — From pitch to decision." Timeline (7 steps, `rg7 tl`).
6. FAQ (6 items).
7. `#pitch` blue panel "Pitch a game." + 11-item two-column list.

### Lab `/lab`
1. Photo hero. 2. Stats band (3 Stat). 3. "What the Lab is" (`rg2` images, `rg5` cards). 4. `#programmes` (3 programme cards with status badges). 5. Skills `rg5`. 6. `#talent` alumni grid (`rg6`, stays 2 cols on mobile). 7. `#partner` `rg3`.

### For Brands `/for-brands`
1. Photo hero. 2. Objectives `rg2` (4). 3. Capabilities `rg3` (7). 4. Timeline 5 steps (`rg5 tl`). 5. `#work` case studies `rg2`. 6. "Why Gamr" `rg4`. 7. `#brief` Brief form.

### Company `/company`
1. Photo hero. 2. Why now. 3. Four parts `rg4`. 4. Leadership (initials tiles `rg3`, team photos `rg2`). 5. `#careers`. 6. More from Company (2 panels).

### Insights `/insights`
1. Hero (grid bg). 2. Featured story. 3. Latest `rg3` (6 cards).

### Contact `/contact`
1. Hero (`hin`). 2. Quick routes `rg3`. 3. Contact form (routed) + Find us (details + styled map card).

## Shared components (`components/`)

| Component | Reference pattern |
|---|---|
| `Header` (+ `MobileMenu` client) | `<header>` with `.dnav`, `.dd/.ddm` dropdowns, `.dcta`, `details.mnav` |
| `Footer` | `<footer>` columns + bottom bar |
| `Section` | `section` bg `#000`/`#050505` + border-top + container with `padding-block:clamp(56px,7cqw,104px)` |
| `Container` | `max-width:1280px; padding-inline:clamp(20px,5cqw,80px)` |
| `SectionHeading` | eyebrow + H2 left (`flex:1 1 520px`), lead right (`flex:1 1 300px; max-width:440px`) |
| `Eyebrow` | 32×2 red line + 12 px mono blue label |
| `Mono` | mono uppercase labels (10/11/12 px, muted/blue/white/soft) |
| `Button` | primary / ghost / white / dark, sizes md (52) and sm (44) |
| `TextLink` | mono 12 px link with `line-strong` underline |
| `Badge` | status badge (live = blue, dev = white, closed = grey) |
| `Card`, `IconBox`, `Icon` | surface card, 52 px icon box, 24-viewBox line icons (paths ported from the reference) |
| `RowList` | 150 px mono label column + value, 1 px dividers |
| `Timeline` | icon steps, 2 cols ≤ 1024, vertical ≤ 760 |
| `Stat` | stat number + label |
| `ImageBlock` | `next/image` cover box with border, 4:3 on mobile |
| `LogoMarquee`, `GameSlate` | CSS marquees (38 s / 46 s), pause on hover/focus |
| `Carousel` (client) | 6-slide auto-advance with dots, pause on hover/focus, swipe |
| `HeroCrossfade` | 4 frames crossfading (CSS) |
| `QuoteBlock` | red bar + large quote |
| `DoorPanel` | closing CTA panels |
| `Field`, `Select`, `TextArea`, `Checkbox`, forms (client) | form controls styled as `#18181B` fields |
