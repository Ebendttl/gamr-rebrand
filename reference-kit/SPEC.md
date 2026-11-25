# Gamr rebrand — Build specification

This document plus `reference/gamr-rebrand-site.html` define the site completely. **The reference HTML is the source of truth** for markup, copy, spacing and behaviour; this spec explains it so it can be rebuilt as a production Next.js site. When the spec and the reference disagree, the reference wins.

## 1. What's in this kit

| Path | What it is |
|---|---|
| `reference/gamr-rebrand-site.html` | The approved mockup: all 8 pages in one self-contained file, desktop **and** mobile. Open it in a browser; pages switch by hash (`#home`, `#games`, `#publishing`, `#lab`, `#brands`, `#company`, `#insights`, `#contact`). |
| `reference/screenshots/desktop/*.jpg` | Full-page renders at 1440 px wide (Inter font). |
| `reference/screenshots/mobile/*.jpg` | Full-page renders at 390 px wide (iPhone 12–15 size). |
| `assets/` | Every image, logo and the hero video as real files, web-optimised. `assets/manifest.json` maps each file to the reference. |
| `assets/originals/` | Higher-resolution originals for the photos, screenshots and illustrations. Use these as `next/image` sources so retina screens stay sharp. |
| `BUILD_PROMPT.md` | The instructions for Claude Code. |

## 2. Principles
1. **Mobile-first.** Most visitors are on phones. The 390 px layout in the reference is the primary design; it scales up to the 1440 px desktop design.
2. **Exact clone.** Same copy, colours, type, spacing, order of sections and behaviour as the reference. No new sections, no rewritten copy.
3. **Honest content.** Badges and labels state real status ("Live on Roblox", "In development", "Concept illustration"). Keep stand-in labels until real assets arrive (section 10).

## 3. Design tokens

### Colour
| Token | Value | Use |
|---|---|---|
| `bg` | `#000000` | Page background, odd sections |
| `bg-alt` | `#050505` | Alternating sections |
| `surface` | `#09090B` | Cards, panels, dropdowns |
| `field` | `#18181B` | Form fields, image placeholders |
| `line` | `#27272A` | 1 px borders, section dividers |
| `line-strong` | `#3F3F46` | Icon boxes, inputs, ghost elements |
| `text` | `#FFFFFF` | Headings, primary text |
| `text-soft` | `#D1D5DB` | Leads, form labels, footer links |
| `text-muted` | `#9CA3AF` | Body copy, captions, mono labels |
| `blue` | `#2563EB` | Primary buttons, filled timeline step |
| `blue-text` | `#3B82F6` | Eyebrow text, icons, active nav, badges, links on hover |
| `red` | `#DC2626` | **Accent only**: 32×2 px line before eyebrows, quote bar, the "r" in the wordmark. Never for status. |

Status colours are brand-only: live/open = blue `#3B82F6`, in development/opening soon = white, closed/unknown = grey `#9CA3AF`. No green, amber or violet anywhere.

### Typography
- **Inter** 400–900 (load with `next/font`), fallback `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`.
- **Mono labels**: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace`, 12 px (10–11 px in small captions), weight 700, letter-spacing `0.16em` (0.14em on links and buttons), uppercase.

| Style | Size | Line height | Weight | Tracking | Other |
|---|---|---|---|---|---|
| H1 (hero) | `clamp(42px, 7.4cqw, 108px)` | 0.92 | 900 | −0.045em | Uppercase. Second line is **outlined**: transparent fill + `-webkit-text-stroke: 2px #fff`. |
| H2 (section) | `clamp(32px, 4.6cqw, 66px)` | 0.96 | 800 | −0.04em | Uppercase |
| H3 (card) | 22 px (20–28 px variants in reference) | 1.1 | 700 | −0.01em | Uppercase |
| Lead | 19 px (17 px secondary) | 1.6 | 400 | – | `text-soft` |
| Body | 16 px (14–15 px in cards) | 1.6 | 400 | – | `text-muted` |
| Quote | `clamp(30px, 4.2cqw, 58px)` | 1.02 | 800 | −0.035em | Uppercase, curly quotes |
| Stat number | `clamp(36px, 4.4cqw, 60px)` | 1 | 900 | −0.04em | |

`cqw` units are relative to the page wrapper, which has `container-type: inline-size`. Keep that, or convert to `vw` with identical results at 390 and 1440.

### Layout
- Content container: `max-width: 1280px`, side padding `clamp(20px, 5cqw, 80px)`, centred.
- Section: `padding-block: clamp(56px, 7cqw, 104px)`, `border-top: 1px solid #27272A`, background alternating `#000` / `#050505` exactly as in the reference.
- Hero backgrounds: a faint 56 px grid, `linear-gradient(rgba(255,255,255,.045) 1px, transparent 1px)` in both directions.
- Section heading block: eyebrow + H2 on the left, optional lead (max 440 px) bottom-right; wraps on mobile.
- **Square corners everywhere** (border-radius 0), except the 4 px radius on the bus illustration windows.

### Components
- **Eyebrow**: 32×2 px red line, 12 px gap, mono label in `blue-text`.
- **Button**: min-height 52 px (small 44 px), padding 0 28 px (small 0 18 px), 2 px border, 13 px weight 700, tracking 0.14em, uppercase. Variants: primary (blue fill), ghost (transparent, white border), white (white fill, black text, used on blue), dark.
- **Text link**: mono 12 px, uppercase, bottom border `line-strong`, followed by "→".
- **Badge**: 1 px border in status colour, padding 6×10 px, mono 12 px, a 7 px square dot before the label.
- **Card**: `surface` background, 1 px `line` border, 28 px padding, 14 px gap; optional 52 px icon box (1 px `line-strong`) holding a 28 px line icon.
- **Icons**: 24×24 viewBox line icons, stroke 1.75, `stroke-linecap: square`, colour `blue-text`. The exact SVG paths are inline in the reference; reuse them (or the matching Lucide icons where identical).
- **Row list** (label/value pairs): mono label column 150 px + value; 1 px dividers.
- **Timeline** (Publishing review, For Brands steps): numbered steps, each with a 48 px square icon box (blue outline; the final step filled blue with a white checkmark). Labels "Start" above the first step and "Go live"/"Report" above the last. No red.
- **Image blocks**: cover-fit, 1 px `line` border; heights as in the reference on desktop, 4:3 on mobile.
- **Header**: black, bottom border `rgba(255,255,255,.1)`, wordmark 30 px tall (links to Home). Desktop nav: Games · Publishing · Lab ▾ (Programmes, Talent) · For Brands · Company ▾ (About, Insights, Contact) + "Pitch a Game" button. Dropdowns open on hover **and** keyboard focus.
- **Mobile menu** (≤ 760 px): 48×48 bordered hamburger; full-width panel under the header; items 52 px tall, 20 px weight 800 uppercase; sub-items indented 20 px, 15 px weight 600; "Pitch a Game" button at the bottom. Closes on navigation. Build it as an accessible disclosure (`aria-expanded`, Escape closes, focus stays inside while open).
- **Footer**: wordmark + one-line description; columns Games / Build with Gamr / Company / Legal (Instagram link); bottom bar "© 2026 Gamr". **Remove** the "Mockup for review…" line in production.

### Motion (all paused under `prefers-reduced-motion: reduce`)
| Element | Behaviour |
|---|---|
| Trusted-by logo strip (Home) | Continuous marquee, duplicated list, `translateX(0 → -50%)`, 38 s linear, pauses on hover, edge fade mask. Each logo has a small mono label under it. |
| Game slate (Games hero) | Same marquee technique, 46 s, pauses on hover/focus. |
| Games hero background | 4 gameplay frames crossfading, 5 s each (20 s loop), slight 1.04 → 1 scale, under a dark gradient. **Stand-in for the Lab gameplay video** (section 10). |
| "From idea to launch" carousel (Games) | 6 slides at 4:5, auto-advance every 4 s (24 s loop, ~0.9 s ease-in-out slide), progress dots, pauses on hover/focus. On touch devices also allow swipe. |
| Hero video (Home) | `autoplay muted loop playsinline`, 300 px wide, aspect 368 / 656, 2 px `line-strong` border. |
| Dropdowns | Show on hover/focus, no animation. |

### Breakpoints
| Width | Changes |
|---|---|
| ≥ 1025 px | Desktop layout exactly as the 1440 reference. |
| 761–1024 px | 4- to 7-column grids become 2 columns; timelines become 2 columns without connector lines. |
| ≤ 760 px | Hamburger menu replaces nav and header button; all card grids become 1 column (alumni grid stays 2 columns); timelines become vertical (icon left, text right, connector line between steps); images 4:3; photo heroes stack the image (280 px) above the text; hero min-heights removed; buttons in button groups go full width; the Home hero video centres at `min(260px, 70vw)`; no horizontal scrolling anywhere. |

## 4. Routes and anchors
| Route | Page | In-page anchors |
|---|---|---|
| `/` | Home | – |
| `/games` | Games | – |
| `/publishing` | Publishing | `#criteria`, `#pitch` |
| `/lab` | Lab | `#programmes`, `#talent`, `#partner` |
| `/for-brands` | For Brands (Managed Services) | `#work`, `#brief` |
| `/company` | Company (About) | `#careers` |
| `/insights` | Insights | – |
| `/contact` | Contact | – |

Permanent redirects from the current site: `/gamrlab` → `/lab` (it's printed in the Build Africa on Roblox video), `/gamr-lab` → `/lab`, `/team`, `/vision`, `/mission`, `/why-now`, `/assets` → `/company`, `/blog`, `/blogs` → `/insights`, `/gamrtag` → `/for-brands`, `/esports`, `/creators`, `/case-studies` → `/for-brands#work`.

## 5. Pages and sections (in order)
Copy every heading, paragraph, label and button **verbatim** from the reference.

### Home — `/`
Reference: `reference/gamr-rebrand-site.html#home` · Screenshots: `reference/screenshots/desktop/home.jpg`, `reference/screenshots/mobile/home.jpg`

| # | Section | Anchor |
|---|---|---|
| 1 | Gamr Games & Publishing — Games from Africa.Played everywhere. |  |
| 2 | Trusted by industry leaders |  |
| 3 | One company — How we work. |  |
| 4 | At the Lab opening, University of Lagos, March 2025 — “To build games that are African made and globally played.” |  |
| 5 | Our games — A growing library. |  |
| 6 | Publishing — Built in Africa. Ready for the world. |  |
| 7 | Lab — Turn players into builders. |  |
| 8 | For Brands · Managed Services — Help your brand show up, and belong, in gaming. |  |
| 9 | Insights — Case studies, articles and game launches. |  |
| 10 | Closing panels — Have a playable game? / Have a brand brief? |  |

### Games — `/games`
Reference: `reference/gamr-rebrand-site.html#games` · Screenshots: `reference/screenshots/desktop/games.jpg`, `reference/screenshots/mobile/games.jpg`

| # | Section | Anchor |
|---|---|---|
| 1 | Games — Worlds built here.Played everywhere. |  |
| 2 | Featured game — AfroDrive |  |
| 3 | Also live — My City Life: New York (screenshots + Play in Browser) |  |
| 4 | Our games — The library. |  |
| 5 | In development — What’s next. |  |
| 6 | How Gamr builds — From idea to launch. |  |
| 7 | Gamr Studios — What we make. |  |
| 8 | Publishing — Building your own game? |  |

### Publishing — `/publishing`
Reference: `reference/gamr-rebrand-site.html#publishing` · Screenshots: `reference/screenshots/desktop/publishing.jpg`, `reference/screenshots/mobile/publishing.jpg`

| # | Section | Anchor |
|---|---|---|
| 1 | Gamr Publishing — Built in Africa.Ready for the world. |  |
| 2 | What Gamr publishes — Three lanes, labelled. |  |
| 3 | What Gamr can provide — A package agreed for each title. |  |
| 4 | Our criteria — What Gamr looks for. | #criteria |
| 5 | Review process — From pitch to decision. |  |
| 6 | FAQ — Questions developers ask. |  |
| 7 | Pitch a game. | #pitch |

### Lab — `/lab`
Reference: `reference/gamr-rebrand-site.html#lab` · Screenshots: `reference/screenshots/desktop/lab.jpg`, `reference/screenshots/mobile/lab.jpg`

| # | Section | Anchor |
|---|---|---|
| 1 | Lab · by Gamr Studios — Turn playersinto builders. |  |
| 2 | Stats band — 1,350+ people trained · 4 Lab partners · 20.03.25 opening |  |
| 3 | What the Lab is — A practical route into making games. |  |
| 4 | Programmes — Open, opening soon and closed. | #programmes |
| 5 | Skills and pathways — What you learn to do. |  |
| 6 | Talent — The alumni library. | #talent |
| 7 | Work with the Lab — Partner with us. | #partner |

### For Brands (Managed Services) — `/for-brands`
Reference: `reference/gamr-rebrand-site.html#brands` · Screenshots: `reference/screenshots/desktop/for-brands.jpg`, `reference/screenshots/mobile/for-brands.jpg`

| # | Section | Anchor |
|---|---|---|
| 1 | For Brands · Managed Services — Help your brand show up,and belong, in gaming. |  |
| 2 | Start from your objective — What do you need gaming to do? |  |
| 3 | Capabilities — What Gamr delivers. |  |
| 4 | How Gamr works — Five steps, one team. |  |
| 5 | Selected work — Show the brief. Show the role. Show the result. | #work |
| 6 | Why Gamr — A games company first. |  |
| 7 | Brief us — Tell us what you need. | #brief |

### Company (About) — `/company`
Reference: `reference/gamr-rebrand-site.html#company` · Screenshots: `reference/screenshots/desktop/company.jpg`, `reference/screenshots/mobile/company.jpg`

| # | Section | Anchor |
|---|---|---|
| 1 | Company · About — An Africangames company. |  |
| 2 | Why now — Africa’s gaming moment has arrived. |  |
| 3 | How the company fits together — One company, four parts. |  |
| 4 | Leadership and team — The people behind the games. |  |
| 5 | Careers — Build games with us. | #careers |
| 6 | More from Company — Insights and contact. |  |

### Insights — `/insights`
Reference: `reference/gamr-rebrand-site.html#insights` · Screenshots: `reference/screenshots/desktop/insights.jpg`, `reference/screenshots/mobile/insights.jpg`

| # | Section | Anchor |
|---|---|---|
| 1 | Company · Insights — Notes fromthe build. |  |
| 2 | Featured story |  |
| 3 | Latest — New from Gamr. |  |

### Contact — `/contact`
Reference: `reference/gamr-rebrand-site.html#contact` · Screenshots: `reference/screenshots/desktop/contact.jpg`, `reference/screenshots/mobile/contact.jpg`

| # | Section | Anchor |
|---|---|---|
| 1 | Company · Contact — Tell us whatyou need. |  |
| 2 | Quick routes — Pick the one that fits. |  |
| 3 | Send a message (routed form) + Find us (details + map pin) |  |

## 6. Forms
All forms post to a server route (Next.js Route Handler) that validates input, blocks spam (honeypot field plus rate limit) and emails the right team. **No team or personal email addresses appear anywhere on the site**; the only public address is `info@gamr.africa`.

| Form | Where | Fields (exactly as reference) | Routing |
|---|---|---|---|
| Brief us | `/for-brands#brief` | What's this about? (Brand brief / Sponsorship / Lab partnership / Something else), Company or agency, Your name, Email, Phone, Objective, Audience and market, Required capability (6 options), Timing, Budget range (Under ₦5m / ₦5m – ₦20m / ₦20m – ₦50m / Above ₦50m / Not sure yet), Existing brief (file upload), How will you measure success?, privacy consent | By "What's this about?" |
| Contact | `/contact` | I want to… (Pitch a game / Send a brand brief / Learn with the Lab / Partner with the Lab / Hire talent / Press enquiry / Careers / Something else), Your name, Email, Phone, Company (optional), Message, privacy consent | By "I want to…" |
| Pitch a game | `/publishing#pitch` | The reference lists the 11 materials to prepare. For launch, "Start Your Pitch" opens `/contact?intent=pitch` with "Pitch a game" preselected. A full multi-step pitch form is phase 2. | Publishing team |

Every call to action that says "Brief Us" goes to `/for-brands#brief`; "Get in Touch"/"Contact Gamr" go to `/contact`; "Hire Talent" goes to `/contact?intent=hire`; "Join the Waitlist"/"Get Notified" go to `/contact?intent=lab`. Routing addresses come from environment variables (`ROUTE_PUBLISHING`, `ROUTE_BRANDS`, `ROUTE_LAB`, `ROUTE_PRESS`, `ROUTE_CAREERS`, `ROUTE_DEFAULT=info@gamr.africa`) so they can change without a deploy. Send with Resend (or the team's chosen provider) via `RESEND_API_KEY`. Show an inline success message; never lose typed input on error.

## 7. Contact details (exactly)
- Visit: **UNILAG Guesthouse, University of Lagos, Lagos, Nigeria**. The map pin and "Open map →" link open `https://www.google.com/maps/search/?api=1&query=UNILAG+Guesthouse+University+of+Lagos` (opens the Maps app on phones). Keep the styled map card from the reference; don't embed a Google Maps iframe.
- Call: **+234 905 570 2309** as a `tel:` link (to be confirmed as the company line, section 10).
- Email: **info@gamr.africa** as a `mailto:` link.
- Instagram: https://www.instagram.com/gamrhq/

## 8. SEO, sharing and metadata
- Per-page `<title>` and meta description, written from each page's hero headline and lead (for example, "Games · Gamr" / "A growing library of original games from Gamr Studios…").
- Open Graph and Twitter cards: a 1200×630 image (black, Gamr wordmark, the H1 "Games from Africa. Played everywhere.").
- `sitemap.xml`, `robots.txt`, canonical URLs, `lang="en"`.
- schema.org `Organization` JSON-LD (name Gamr, url, logo, sameAs Instagram).
- Favicon from the wordmark "g" with the red "r" (or the existing Gamr favicon).

## 9. Quality bars
- **Accessibility**: WCAG 2.2 AA. Visible focus (2 px `#3B82F6` outline, 3 px offset), touch targets ≥ 44 px, every image has the alt text from the reference's `aria-label`, decorative images `aria-hidden`, labelled form fields, motion paused under reduced motion and on hover/focus.
- **Performance** (mobile 4G): LCP < 2.5 s, CLS < 0.05, total JS minimal (static pages; only the menu, carousel and forms need client code). Use `next/image` (AVIF/WebP, responsive `sizes`) from `assets/originals/`, lazy-load below-the-fold images and the slides, keep the hero video under 300 KB with a poster frame.
- **Browsers**: latest Chrome, Safari (iOS 16+), Firefox, Edge, and Android Chrome.

## 10. Stand-ins to swap later (keep these labels until then)
| Item | Now | Replace with |
|---|---|---|
| Games hero background | Crossfading game frames | The autoplaying gameplay loop from Lab activities (muted, looping, < 1 MB, with poster). |
| Team photo (Company) | `photos/gamr-team.jpg` + `photos/team-lab-launch.jpg` | The team photo from the current gamr.africa site, plus a more recent group photo when available. |
| Leadership portraits | Initials tiles (EE, DP, SF) | Approved headshots, 1:1, same tile size. |
| AfroDrive art | Illustration, captioned "Artwork: illustration, not in-game footage" | Real in-game screenshots or key art. |
| Crossroads art | Concept illustration, labelled | Official approved art. |
| Phone number | +234 905 570 2309 | Confirmed company line. |
| Partner logos | 9 white logos with relationship labels | Keep only those with written permission to display. |

## 11. Out of scope for this build
The GamrTag pitch document, the VPS/Docker setup, and the AI voice/correspondence agent (planned after launch).
