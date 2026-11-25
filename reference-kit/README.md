# Gamr rebrand — build kit

Everything needed to build the new gamr.africa as an exact, mobile-first clone of the approved mockup.

## How to use
1. Unzip this kit into your `gamr-rebrand` repo as a folder named `reference-kit/`, then commit and push it.
2. Open Claude Code on the repo (web or Antigravity).
3. Paste the contents of `BUILD_PROMPT.md` (everything below the line) as your first message.
4. Claude Code builds on a branch, checks its work against the mockup at phone and desktop sizes, deploys a Vercel preview and opens a pull request for review.

## Contents
- `reference/gamr-rebrand-site.html`: the approved mockup (open in any browser).
- `reference/screenshots/`: every page at 390 px (mobile) and 1440 px (desktop).
- `assets/`: all images, logos and the hero video; `assets/originals/` has full-resolution versions.
- `SPEC.md`: the full build specification.
- `BUILD_PROMPT.md`: the prompt to paste into Claude Code.
