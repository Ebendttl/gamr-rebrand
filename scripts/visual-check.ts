/**
 * Visual check: screenshots every page of the build and of the approved reference mockup at 390×844 and
 * 1440×900 (full page, motion frozen), diffs them with pixelmatch and writes images to visual-diffs/.
 * Also checks 320–1440 px for horizontal overflow.
 *
 * Usage: pnpm build && pnpm start   (in another terminal)
 *        pnpm visual-check [page ...]   BASE_URL defaults to http://localhost:3000
 */
import { mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";
import pixelmatch from "pixelmatch";
import { chromium, type Page } from "playwright";
import { PNG } from "pngjs";

const BASE_URL = process.env.BASE_URL ?? "http://localhost:3000";
const REFERENCE = pathToFileURL(path.resolve("reference-kit/reference/gamr-rebrand-site.html")).href;
const OUT = path.resolve("visual-diffs");
const THRESHOLD = 2; // % of differing pixels allowed

const PAGES = [
  { name: "home", route: "/", hash: "home" },
  { name: "games", route: "/games", hash: "games" },
  { name: "publishing", route: "/publishing", hash: "publishing" },
  { name: "lab", route: "/lab", hash: "lab" },
  { name: "for-brands", route: "/for-brands", hash: "brands" },
  { name: "company", route: "/company", hash: "company" },
  { name: "insights", route: "/insights", hash: "insights" },
  { name: "contact", route: "/contact", hash: "contact" },
];

const VIEWPORTS = [
  { label: "390", width: 390, height: 844 },
  { label: "1440", width: 1440, height: 900 },
];

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

const OVERFLOW_WIDTHS = [320, 360, 390, 414, 600, 760, 761, 768, 900, 1024, 1025, 1280, 1440];

/** Shared freeze: no CSS motion, first crossfade frame and first carousel dot shown. */
const FREEZE_CSS = `
  *, *::before, *::after { animation: none !important; transition: none !important; caret-color: transparent !important; }
  .xf:first-child, [data-xf-frame]:first-child { opacity: 1 !important; }
`;
/** Reference only: the carousel dots are pure CSS there, and the mockup-only footer note is removed in production. */
const REFERENCE_CSS = `
  .dot:first-child { background: #3B82F6 !important; width: 28px !important; }
  footer > div > div:last-child > span:nth-child(2) { display: none !important; }
`;

async function settle(page: Page, extraCss: string) {
  await page.addStyleTag({ content: FREEZE_CSS + extraCss });
  // Load every lazy image, then return to the top. Timers in the page are frozen by page.clock, so pace from Node.
  const height = await page.evaluate(() => document.body.scrollHeight);
  for (let y = 0; y < height; y += 600) {
    await page.evaluate((top) => window.scrollTo(0, top), y);
    await sleep(60);
  }
  await page.evaluate(() => window.scrollTo(0, 0));
  // Off-screen lazy images (e.g. later carousel slides) load eagerly; then poll from Node until all are decoded.
  await page.evaluate(() => document.querySelectorAll("img[loading=lazy]").forEach((i) => i.setAttribute("loading", "eager")));
  for (let waited = 0; waited < 15_000; waited += 200) {
    const pending = await page.evaluate(() => Array.from(document.images).filter((i) => !i.complete).length);
    if (pending === 0) break;
    await sleep(200);
  }
  await page.evaluate(async () => {
    await document.fonts.ready;
    for (const v of Array.from(document.querySelectorAll("video"))) {
      v.pause();
      v.currentTime = 0;
    }
  });
  await sleep(400);
}

function compare(a: PNG, b: PNG, diffPath: string) {
  const width = Math.max(a.width, b.width);
  const height = Math.max(a.height, b.height);
  const pad = (img: PNG) => {
    if (img.width === width && img.height === height) return img;
    const out = new PNG({ width, height });
    out.data.fill(0);
    PNG.bitblt(img, out, 0, 0, img.width, img.height, 0, 0);
    return out;
  };
  const pa = pad(a);
  const pb = pad(b);
  const diff = new PNG({ width, height });
  const changed = pixelmatch(pa.data, pb.data, diff.data, width, height, { threshold: 0.1, includeAA: false });
  writeFileSync(diffPath, PNG.sync.write(diff));
  return (changed / (width * height)) * 100;
}

async function main() {
  const only = process.argv.slice(2);
  const pages = only.length ? PAGES.filter((p) => only.includes(p.name)) : PAGES;
  mkdirSync(OUT, { recursive: true });
  const browser = await chromium.launch();
  const rows: string[] = [];
  let failed = false;

  for (const vp of VIEWPORTS) {
    for (const p of pages) {
      const shots: PNG[] = [];
      for (const target of ["build", "ref"] as const) {
        const context = await browser.newContext({ viewport: { width: vp.width, height: vp.height }, deviceScaleFactor: 1 });
        const page = await context.newPage();
        await page.clock.install();
        await page.goto(target === "build" ? BASE_URL + p.route : `${REFERENCE}#${p.hash}`, { waitUntil: "load" });
        await settle(page, target === "ref" ? REFERENCE_CSS : "");
        const file = path.join(OUT, `${p.name}-${vp.label}-${target}.png`);
        shots.push(PNG.sync.read(await page.screenshot({ path: file, fullPage: true })));
        await context.close();
      }
      const [build, ref] = shots as [PNG, PNG];
      const pct = compare(build, ref, path.join(OUT, `${p.name}-${vp.label}-diff.png`));
      const ok = pct <= THRESHOLD;
      failed ||= !ok;
      const row = `| ${p.name} | ${vp.label} | ${pct.toFixed(2)}% | ${build.height}px / ${ref.height}px | ${ok ? "pass" : "FAIL"} |`;
      rows.push(row);
      console.log(row);
    }
  }

  const overflow: string[] = [];
  for (const width of OVERFLOW_WIDTHS) {
    const context = await browser.newContext({ viewport: { width, height: 900 } });
    const page = await context.newPage();
    for (const p of pages) {
      await page.goto(BASE_URL + p.route, { waitUntil: "load" });
      const scroll = await page.evaluate(() => {
        document.documentElement.style.overflowX = "visible";
        document.body.style.overflowX = "visible";
        return document.documentElement.scrollWidth - document.documentElement.clientWidth;
      });
      if (scroll > 0) overflow.push(`${p.name} @ ${width}px overflows by ${scroll}px`);
    }
    await context.close();
  }
  await browser.close();

  const report = [
    "| Page | Width | Differing pixels | Height (build / ref) | Result |",
    "|---|---|---|---|---|",
    ...rows,
    "",
    overflow.length
      ? `Horizontal overflow:\n${overflow.map((o) => `- ${o}`).join("\n")}`
      : `No horizontal overflow at ${OVERFLOW_WIDTHS.join(", ")} px.`,
  ].join("\n");
  writeFileSync(path.join(OUT, "results.md"), report + "\n");
  console.log("\n" + report);
  process.exit(failed || overflow.length ? 1 : 0);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
