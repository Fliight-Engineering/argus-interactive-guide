#!/usr/bin/env node
/**
 * Build the VTS Guide app icon: the Argus mark with a white pill reading
 * "Guide" in Orbitron (the Argus brand typeface).
 *
 *   node scripts/make-guide-icon.mjs            # writes static/img/brand/argus-guide-icon{,-512,-256}.{svg,png}
 *   node scripts/make-guide-icon.mjs --preview  # writes all layout variants to a preview sheet instead
 *
 * The mark path is copied from fliight-branding (argus/mark/argus-mark-red.svg).
 * Text is drawn by headless Chromium with the vendored Orbitron font, so the PNGs
 * don't depend on fonts installed on the machine.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const BRAND = path.join(ROOT, 'static', 'img', 'brand');
const RED = '#BA0C2F';

const markSvg = fs.readFileSync(path.join(BRAND, 'argus-mark-red.svg'), 'utf8');
const markPath = markSvg.match(/<path d="([^"]+)"/)[1];
const font = fs.readFileSync(path.join(ROOT, 'static', 'fonts', 'orbitron', 'Orbitron.ttf')).toString('base64');

// Layouts in the mark's 24-unit space. `mark` scales/offsets the mark;
// the pill is centred on (12, pillY).
export const VARIANTS = {
  lower: { label: 'A · pill across the lower mark', mark: { scale: 1, dx: 0, dy: 0 }, pillY: 17.4, pillW: 18.6, pillH: 6.0, text: 3.6 },
  centre: { label: 'B · pill across the centre', mark: { scale: 1, dx: 0, dy: 0 }, pillY: 12.4, pillW: 19.4, pillH: 6.2, text: 3.7 },
  badge: { label: 'C · smaller mark, pill on its base', mark: { scale: 0.86, dx: 1.68, dy: 0.2 }, pillY: 19.6, pillW: 20.4, pillH: 6.2, text: 3.8 },
  stack: { label: 'C1 · mark above pill', mark: { scale: 0.72, dx: 3.36, dy: -0.414 }, pillY: 20.3, pillW: 21.4, pillH: 6.4, text: 4.0 },
  stackBold: { label: 'C2 · smaller mark, bigger pill', mark: { scale: 0.64, dx: 4.32, dy: -0.323 }, pillY: 19.9, pillW: 22.6, pillH: 7.4, text: 4.6 },
  stackTuck: { label: 'C3 · larger mark, pill tucked under', mark: { scale: 0.78, dx: 2.64, dy: -0.481 }, pillY: 20.4, pillW: 21.0, pillH: 6.2, text: 3.9 },
};

function iconSvg(v) {
  const { scale, dx, dy } = v.mark;
  const x = 12 - v.pillW / 2;
  const y = v.pillY - v.pillH / 2;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
  <title>VTS Guide</title>
  <style>@font-face { font-family: 'Orbitron'; src: url(data:font/ttf;base64,${font}); font-weight: 400 900; }</style>
  <g transform="translate(${dx} ${dy}) scale(${scale})"><path d="${markPath}" fill="${RED}"/></g>
  <rect x="${x}" y="${y}" width="${v.pillW}" height="${v.pillH}" rx="${v.pillH / 2}" fill="#fff" stroke="${RED}" stroke-width="0.35"/>
  <text x="12" y="${v.pillY}" text-anchor="middle" dominant-baseline="central" font-family="Orbitron" font-weight="700" font-size="${v.text}" letter-spacing="0.06em" fill="${RED}">Guide</text>
</svg>`;
}

async function render(page, svg, size) {
  await page.setViewportSize({ width: size, height: size });
  await page.setContent(
    `<html><body style="margin:0;background:transparent">${svg.replace('width="24" height="24"', `width="${size}" height="${size}"`)}</body></html>`,
  );
  await page.evaluate(() => document.fonts.ready);
  return page.locator('svg').screenshot({ omitBackground: true });
}

const browser = await chromium.launch();
const page = await browser.newPage();

if (process.argv.includes('--preview')) {
  const out = process.argv[process.argv.indexOf('--preview') + 1] || path.join(ROOT, 'icon-preview.png');
  const cells = [];
  const only = process.argv.slice(process.argv.indexOf('--preview') + 2);
  for (const [key, v] of Object.entries(VARIANTS).filter(([k]) => !only.length || only.includes(k))) {
    const svg = iconSvg(v);
    const big = (await render(page, svg, 256)).toString('base64');
    const small = await Promise.all([48, 32, 16].map(async (s) => [s, (await render(page, svg, s)).toString('base64')]));
    const smalls = (bg) =>
      `<div style="background:${bg};padding:8px;display:flex;gap:10px;align-items:center;border-radius:6px">${small
        .map(([s, b]) => `<img width="${s}" height="${s}" src="data:image/png;base64,${b}">`)
        .join('')}</div>`;
    cells.push(`<div style="text-align:center;font:600 15px system-ui"><div style="margin-bottom:8px">${v.label}</div>
      <img width="256" src="data:image/png;base64,${big}"><div style="display:flex;gap:8px;justify-content:center;margin-top:8px">${smalls('#f3f3f3')}${smalls('#202020')}</div></div>`);
  }
  await page.setViewportSize({ width: 960, height: 420 });
  await page.setContent(`<html><body style="margin:0;padding:20px;background:#fff;display:flex;gap:30px">${cells.join('')}</body></html>`);
  await page.screenshot({ path: out });
  console.log(`Preview: ${out}`);
} else {
  const key = process.argv[2] || 'stack'; // C1, the chosen layout
  const svg = iconSvg(VARIANTS[key]);
  fs.writeFileSync(path.join(BRAND, 'argus-guide-icon.svg'), svg);
  for (const size of [512, 256]) {
    fs.writeFileSync(path.join(BRAND, `argus-guide-icon-${size}.png`), await render(page, svg, size));
  }
  console.log(`Wrote argus-guide-icon.svg, -512.png, -256.png (${VARIANTS[key].label})`);
}
await browser.close();
