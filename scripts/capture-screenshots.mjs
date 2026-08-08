import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";
import path from "node:path";

const root = path.resolve("public/projects");

const targets = [
  {
    slug: "peacock-studio",
    shots: [
      { name: "01-home", url: "https://peacockstudio.app/" },
      { name: "02-solutions", url: "https://peacockstudio.app/solutions/business-analysts" },
    ],
  },
  {
    slug: "securosphere",
    shots: [
      { name: "01-home", url: "https://securosphere.mentorbridge.in/" },
      { name: "02-features", url: "https://securosphere.mentorbridge.in/", scrollY: 900 },
    ],
  },
  {
    slug: "stublab",
    shots: [
      { name: "01-home", url: "https://stublab.mentorbridge.in/" },
      { name: "02-about", url: "https://stublab.mentorbridge.in/", scrollY: 800 },
    ],
  },
  {
    slug: "stupro",
    shots: [
      { name: "01-home", url: "https://stupro.mentorbridge.in/" },
      { name: "02-product", url: "https://stupro.mentorbridge.in/", scrollY: 700 },
    ],
  },
];

async function dismissNoise(page) {
  await page.evaluate(() => {
    const buttons = [...document.querySelectorAll("button, a")];
    const accept = buttons.find((el) =>
      /accept all|accept|agree|got it/i.test((el.textContent || "").trim()),
    );
    accept?.click();
  }).catch(() => {});
  await page.waitForTimeout(500);
}

const browser = await chromium.launch();
const context = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  deviceScaleFactor: 1,
});

for (const target of targets) {
  const dir = path.join(root, target.slug);
  await mkdir(dir, { recursive: true });
  for (const shot of target.shots) {
    const page = await context.newPage();
    try {
      await page.goto(shot.url, { waitUntil: "networkidle", timeout: 45000 });
      await dismissNoise(page);
      if (shot.scrollY) {
        await page.evaluate((y) => window.scrollTo(0, y), shot.scrollY);
        await page.waitForTimeout(600);
      }
      const out = path.join(dir, `${shot.name}.png`);
      await page.screenshot({ path: out, fullPage: false });
      console.log("OK", out);
    } catch (err) {
      console.error("FAIL", shot.url, err.message);
    } finally {
      await page.close();
    }
  }
}

await browser.close();
