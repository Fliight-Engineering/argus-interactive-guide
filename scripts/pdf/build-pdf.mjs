#!/usr/bin/env node
/**
 * Build print-ready PDFs (Quick Start Guide, User Manual) from the Docusaurus site.
 *
 *   npm run build:pdf                         # both PDFs, English
 *   npm run build:pdf -- --doc manual         # one document (quick-start | manual | all)
 *   npm run build:pdf -- --locale es          # another language (en | es | vi | all)
 *   npm run build:pdf -- --skip-build         # reuse the last site build in .pdf-build/
 *   npm run build:pdf -- --pages 1-3,9        # only these pages (layout samples)
 *   npm run build:pdf -- --keep-html          # also write the print HTML for debugging
 *
 * How it works: build the site (offline baseUrl) into .pdf-build/, serve it,
 * read each page's rendered article in manifest order, assemble one print
 * document (cover, contents, chapters) and print it with headless Chromium.
 * Chromium paginates natively (honours break-inside: avoid, @page margin boxes
 * for headers/footers, PDF bookmarks from headings). Contents page numbers
 * take two passes: print once, read where each contents link lands in the PDF,
 * fill the numbers in, print again.
 *
 * Version comes from --version, $PDF_VERSION, a v* tag in $GITHUB_REF_NAME, or
 * package.json. Date is the commit date of that version's tag (or HEAD).
 */
import fs from 'node:fs';
import path from 'node:path';
import http from 'node:http';
import { execSync, spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';
import { chromium } from 'playwright';
import QRCode from 'qrcode';
import sharp from 'sharp';
import serveHandler from 'serve-handler';
import { getDocument } from 'pdfjs-dist/legacy/build/pdf.mjs';
import { DOCUMENTS, PRODUCT_NAME, WEB_BASE, chaptersFromSidebar } from './manifest.mjs';
import { STRINGS, LOCALE_SUFFIX } from './strings.mjs';

const require = createRequire(import.meta.url);
const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(HERE, '..', '..');
const SITE_OUT = path.join(ROOT, '.pdf-build');

// ---------------------------------------------------------------- arguments

function parseArgs(argv) {
  const args = { doc: 'all', locale: 'en', out: 'dist-pdf' };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    const next = () => argv[++i];
    if (a === '--doc') args.doc = next();
    else if (a === '--locale') args.locale = next();
    else if (a === '--out') args.out = next();
    else if (a === '--pages') args.pages = next();
    else if (a === '--version') args.version = next();
    else if (a === '--date') args.date = next();
    else if (a === '--skip-build') args.skipBuild = true;
    else if (a === '--keep-html') args.keepHtml = true;
    else if (a === '--help' || a === '-h') args.help = true;
    else throw new Error(`Unknown argument: ${a}`);
  }
  return args;
}

const args = parseArgs(process.argv.slice(2));
if (args.help) {
  console.log(fs.readFileSync(fileURLToPath(import.meta.url), 'utf8').split('*/')[0]);
  process.exit(0);
}

const docKeys = args.doc === 'all' ? Object.keys(DOCUMENTS) : args.doc.split(',');
const locales = args.locale === 'all' ? Object.keys(STRINGS) : args.locale.split(',');
for (const d of docKeys) if (!DOCUMENTS[d]) throw new Error(`Unknown --doc "${d}" (${Object.keys(DOCUMENTS).join(', ')})`);
for (const l of locales) if (!STRINGS[l]) throw new Error(`No PDF strings for locale "${l}" — add it to scripts/pdf/strings.mjs`);

// ---------------------------------------------------------- version & date

function git(cmd) {
  try {
    return execSync(`git ${cmd}`, { cwd: ROOT, stdio: ['ignore', 'pipe', 'ignore'] }).toString().trim();
  } catch {
    return '';
  }
}

function releaseInfo() {
  const pkg = JSON.parse(fs.readFileSync(path.join(ROOT, 'package.json'), 'utf8'));
  const ref = process.env.GITHUB_REF_NAME || '';
  const version = args.version || process.env.PDF_VERSION || (/^v\d/.test(ref) ? ref.slice(1) : '') || pkg.version;
  let date = args.date;
  if (!date) {
    const tag = `v${version}`;
    const rev = git(`rev-parse -q --verify refs/tags/${tag}`) ? tag : 'HEAD';
    date = git(`log -1 --format=%cs ${rev}`) || new Date().toISOString().slice(0, 10);
  }
  return { version, date };
}

// ------------------------------------------------------------- site build

function buildSite(locale) {
  const outDir = path.join(SITE_OUT, locale);
  console.log(`\n▶ Building site (${locale}) → ${path.relative(ROOT, outDir)}`);
  const res = spawnSync(
    process.execPath,
    [require.resolve('@docusaurus/core/bin/docusaurus.mjs'), 'build', '--locale', locale, '--out-dir', outDir],
    { cwd: ROOT, stdio: 'inherit', env: { ...process.env, OFFLINE_BUILD: 'true' } },
  );
  if (res.status !== 0) throw new Error(`Site build failed for locale ${locale}`);
}

/** Where a locale's pages live in its build dir: '' (root) or '/es'. */
function localePrefix(outDir, locale) {
  if (fs.existsSync(path.join(outDir, locale, 'docs'))) return `/${locale}`;
  if (fs.existsSync(path.join(outDir, 'docs'))) return '';
  throw new Error(`No built docs found in ${outDir} — run without --skip-build`);
}

// --------------------------------------------------------------- manifest

async function loadSidebars() {
  // sidebars.js is ESM inside a CommonJS package; import its source as a data: URL.
  const src = fs.readFileSync(path.join(ROOT, 'sidebars.js'), 'utf8').replace(/^﻿/, '');
  const mod = await import(`data:text/javascript;base64,${Buffer.from(src).toString('base64')}`);
  return mod.default;
}

function docUrl(id) {
  const file = ['.md', '.mdx'].map((ext) => path.join(ROOT, 'docs', id + ext)).find((f) => fs.existsSync(f));
  if (!file) throw new Error(`Sidebar doc "${id}" has no file in docs/`);
  const fm = fs.readFileSync(file, 'utf8').match(/^﻿?---\r?\n([\s\S]*?)\r?\n---/);
  const slug = fm?.[1].match(/^slug:\s*['"]?([^'"\r\n]+)/m)?.[1];
  if (slug) {
    const base = slug.startsWith('/') ? '' : `/${path.posix.dirname(id)}`.replace(/\/\.$/, '');
    return `/docs${base}/${slug.replace(/^\//, '')}`.replace(/\/+$/, '/') || '/docs/';
  }
  return `/docs/${id}`.replace(/(^|\/)index$/, '/');
}

async function chapterList(doc) {
  if (Array.isArray(doc.chapters)) return doc.chapters.map((c) => ({ level: 1, ...c }));
  const sidebars = await loadSidebars();
  return chaptersFromSidebar(sidebars[doc.chapters.sidebar], docUrl);
}

/** Install directory of an npm package (works even when "exports" hides package.json). */
function pkgDir(name) {
  let dir = path.dirname(require.resolve(name));
  while (!fs.existsSync(path.join(dir, 'package.json')) || JSON.parse(fs.readFileSync(path.join(dir, 'package.json'), 'utf8')).name !== name) {
    const up = path.dirname(dir);
    if (up === dir) throw new Error(`Cannot locate package ${name}`);
    dir = up;
  }
  return dir;
}

const norm = (p) => decodeURI(p).replace(/\/index\.html$/, '').replace(/\.html$/, '').replace(/\/+$/, '') || '/';

// ------------------------------------------------------------ static server

function fontFaceCss() {
  const dir = pkgDir('@fontsource-variable/noto-sans');
  return ['wght.css', 'wght-italic.css']
    .map((f) => fs.readFileSync(path.join(dir, f), 'utf8'))
    .join('\n')
    .replaceAll('./files/', '/__pdf/fonts/noto-sans/files/');
}

// Images as the PDF embeds them: at most ~1800 px wide (full A4 text width at
// ~260 dpi), opaque images as JPEG. Keeps the PDFs small enough to email; the
// site and app keep the originals.
const PRINT_IMAGE_WIDTH = 1800;
const imageCache = new Map();

function printImage(file) {
  if (!imageCache.has(file)) {
    imageCache.set(
      file,
      (async () => {
        const img = sharp(file, { failOn: 'none' }).rotate();
        const [meta, stats] = await Promise.all([img.metadata(), img.stats()]);
        const resized = meta.width > PRINT_IMAGE_WIDTH ? img.resize({ width: PRINT_IMAGE_WIDTH }) : img;
        if (stats.isOpaque) {
          return { type: 'image/jpeg', body: await resized.flatten({ background: '#fff' }).jpeg({ quality: 85, mozjpeg: true }).toBuffer() };
        }
        return { type: 'image/png', body: await resized.png({ compressionLevel: 9, palette: true, quality: 90 }).toBuffer() };
      })(),
    );
  }
  return imageCache.get(file);
}

function startServer(siteDir, pdfAssets) {
  const fontDir = pkgDir('@fontsource-variable/noto-sans');
  const server = http.createServer((req, res) => {
    const url = decodeURI(req.url.split('?')[0]);
    if (url.startsWith('/__pdf/')) {
      const name = url.slice('/__pdf/'.length);
      if (pdfAssets.has(name)) {
        const { type, body } = pdfAssets.get(name);
        res.writeHead(200, { 'Content-Type': type });
        return res.end(body);
      }
      let file = null;
      if (name === 'pdf.css') file = path.join(HERE, 'pdf.css');
      else if (name.startsWith('fonts/noto-sans/')) file = path.join(fontDir, name.slice('fonts/noto-sans/'.length));
      if (file && fs.existsSync(file)) {
        const type = file.endsWith('.js') ? 'text/javascript' : file.endsWith('.css') ? 'text/css' : 'font/woff2';
        res.writeHead(200, { 'Content-Type': type });
        return fs.createReadStream(file).pipe(res);
      }
      res.writeHead(404);
      return res.end();
    }
    if (/\.(png|jpe?g|webp)$/i.test(url)) {
      const file = path.join(siteDir, url);
      if (file.startsWith(siteDir) && fs.existsSync(file)) {
        return printImage(file).then(({ type, body }) => {
          res.writeHead(200, { 'Content-Type': type });
          res.end(body);
        });
      }
    }
    return serveHandler(req, res, { public: siteDir });
  });
  return new Promise((resolve) => server.listen(0, '127.0.0.1', () => resolve(server)));
}

// ------------------------------------------------------- page extraction

/** Runs in the browser on a built site page. Returns the printable article. */
function extractChapter({ id, level, label, pathMap, webBase, prefix, qrDataUrl, chapterWebUrl, strings }) {
  const root =
    document.querySelector('[data-pdf-root]') || document.querySelector('article .theme-doc-markdown');
  if (!root) throw new Error(`No printable content on ${location.pathname}`);
  const el = root.cloneNode(true);

  // Screen-only UI.
  el.querySelectorAll(
    '.screen-only, .hash-link, .theme-doc-toc-mobile, .pagination-nav, .theme-doc-footer, nav, button, script, noscript',
  ).forEach((n) => n.remove());

  // Unique ids across the whole document.
  el.querySelectorAll('[id]').forEach((n) => (n.id = `${id}-${n.id}`));

  // Images: absolute, eager.
  el.querySelectorAll('img').forEach((img) => {
    img.setAttribute('src', img.src);
    img.removeAttribute('loading');
    img.removeAttribute('srcset');
  });

  // Videos → poster still + QR code + link.
  const errors = [];
  el.querySelectorAll('figure.doc-video, video').forEach((node) => {
    if (!el.contains(node)) return;
    const fig = node.matches('figure') ? node : node.closest('figure') || node;
    const video = fig.matches('video') ? fig : fig.querySelector('video');
    const poster = video?.getAttribute('poster');
    if (!poster) {
      errors.push(`Video without a poster on ${location.pathname} — use <Video poster="…"> so it can print`);
      return;
    }
    const caption = fig.querySelector('figcaption')?.textContent || '';
    const out = document.createElement('figure');
    out.className = 'pdf-video';
    out.innerHTML = `
      <img class="pdf-video__poster" src="${new URL(poster, location.href).href}" alt="">
      <div class="pdf-video__info">
        <img class="pdf-video__qr" src="${qrDataUrl}" alt="QR code">
        <div>
          <div class="pdf-video__label">▶ ${strings.watchVideo}</div>
          ${caption ? `<div class="pdf-video__caption"></div>` : ''}
          <a class="pdf-video__url" href="${chapterWebUrl}">${chapterWebUrl}</a>
        </div>
      </div>`;
    if (caption) out.querySelector('.pdf-video__caption').textContent = caption;
    fig.replaceWith(out);
  });

  // Links: into this PDF where possible, otherwise to the public web guide.
  el.querySelectorAll('a[href]').forEach((a) => {
    const raw = a.getAttribute('href');
    if (raw.startsWith('#')) {
      a.setAttribute('href', `#${id}-${raw.slice(1)}`);
      return;
    }
    const u = new URL(raw, location.href);
    if (u.origin !== location.origin) return;
    let p = u.pathname;
    if (prefix && p.startsWith(prefix + '/')) p = p.slice(prefix.length);
    const key = decodeURI(p).replace(/\/index\.html$/, '').replace(/\.html$/, '').replace(/\/+$/, '') || '/';
    const target = pathMap[key];
    if (target) {
      a.setAttribute('href', u.hash ? `#${target}-${decodeURIComponent(u.hash.slice(1))}` : `#${target}`);
    } else {
      a.setAttribute('href', `${webBase}${prefix}${p}${u.hash}`);
      a.classList.add('pdf-external');
    }
  });

  // One chapter title; nested chapters shift their headings down a level so the
  // PDF bookmarks nest the same way as the sidebar.
  const h1s = [...el.querySelectorAll('h1')];
  let title = (h1s[0]?.textContent || '').trim();
  const shift = level - 1;
  const retag = (node, tag) => {
    const n = document.createElement(tag);
    for (const attr of node.attributes) n.setAttribute(attr.name, attr.value);
    n.innerHTML = node.innerHTML;
    node.replaceWith(n);
    return n;
  };
  h1s.slice(1).forEach((h) => retag(h, 'h2'));
  if (shift > 0) {
    for (let lvl = 5; lvl >= 1; lvl--) {
      el.querySelectorAll(`h${lvl}`).forEach((h) => retag(h, `h${Math.min(6, lvl + shift)}`));
    }
  }
  const titleEl = el.querySelector('h1, h2, h3, h4, h5, h6');
  if (titleEl) {
    titleEl.classList.add('chapter-title');
    titleEl.id = id;
    if (label && label !== title) {
      titleEl.textContent = label;
      title = label;
    }
  }

  // Second-level headings for the contents page.
  const subLevel = `h${Math.min(6, 2 + shift)}`;
  const sections = [...el.querySelectorAll(subLevel)].map((h, i) => {
    if (!h.id || h.id === id) h.id = `${id}-s${i}`;
    return { id: h.id, title: h.textContent.trim() };
  });

  return { title, html: el.innerHTML, sections, errors };
}

// ------------------------------------------------------------ assembly

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const cssString = (s) => `"${String(s).replace(/\\/g, '\\\\').replace(/"/g, '\\"')}"`;

function pageRulesCssFor({ docTitle, version, strings }) {
  const box = `font-family: 'Noto Sans Variable', sans-serif; font-size: 7.5pt; color: #5f6368;`;
  const rule = `border-bottom: 0.5pt solid #d9dce1; padding-bottom: 3mm; vertical-align: bottom;`;
  return `
@page {
  size: A4;
  margin: 22mm 17mm 20mm 17mm;
  @top-left { content: ${cssString(`Argus VTS ${docTitle}`)}; ${box} ${rule} color: #ba0c2f; font-weight: 600; }
  @top-right { content: ${cssString(`${strings.version} ${version}`)}; ${box} ${rule} text-align: right; }
  @bottom-left { content: ${cssString(`© ${strings.copyright}`)}; ${box} vertical-align: top; padding-top: 3mm; }
  @bottom-right { content: ${cssString(strings.page + ' ')} counter(page) ${cssString(` ${strings.of} `)} counter(pages); ${box} vertical-align: top; padding-top: 3mm; text-align: right; }
}
@page cover {
  margin: 0;
  @top-left { content: none; border: none; } @top-right { content: none; border: none; }
  @bottom-left { content: none; } @bottom-right { content: none; }
}`;
}

// The page number starts as a same-width placeholder so filling it in can't reflow the contents.
const tocLink = (id, title) =>
  `<a href="#${id}" data-toc-target="${id}"><span class="toc__text">${esc(title)}</span><span class="toc__dots"></span><span class="toc__page">000</span></a>`;

function assembleHtml({ locale, doc, docTitle, version, dateText, chapters, siteCss, tocDepth }) {
  const strings = STRINGS[locale];
  const pageRulesCss = pageRulesCssFor({ docTitle, version, strings });
  const toc = chapters
    .map((c) => {
      const subs =
        tocDepth >= 2 && c.sections.length
          ? `<ol>${c.sections.map((s) => `<li class="toc-sub">${tocLink(s.id, s.title)}</li>`).join('')}</ol>`
          : '';
      return `<li class="toc-l${c.level}">${tocLink(c.id, c.title)}${subs}</li>`;
    })
    .join('\n');

  const body = chapters
    .map((c) => `<section class="chapter chapter--l${c.level}" data-chapter="${c.id}"><div class="markdown">${c.html}</div></section>`)
    .join('\n');

  return `<!doctype html>
<html lang="${locale}" data-theme="light">
<head>
<meta charset="utf-8">
<title>${esc(`${PRODUCT_NAME} — ${docTitle} v${version}`)}</title>
${siteCss.map((href) => `<link rel="stylesheet" href="${href}">`).join('\n')}
<link rel="stylesheet" href="/__pdf/fonts.css">
<link rel="stylesheet" href="/__pdf/pdf.css">
<style>${pageRulesCss}</style>
</head>
<body class="pdf-doc pdf-doc--${doc}">
<section class="cover">
  <img class="cover__logo" src="/img/brand/argus-logo-red-on-light.svg" alt="Argus">
  <div class="cover__body">
    <div class="cover__product">${esc(PRODUCT_NAME)}</div>
    <div class="cover__title">${esc(docTitle)}</div>
    <div class="cover__rule"></div>
    <dl class="cover__meta">
      <dt>${esc(strings.version)}</dt><dd>${esc(version)}</dd>
      <dt>${esc(strings.released)}</dt><dd>${esc(dateText)}</dd>
    </dl>
  </div>
  <div class="cover__footer">
    <img class="cover__fliight" src="/img/brand/fliight-technologies-color.svg" alt="Fliight Technologies">
    <div class="cover__web">${esc(strings.onlineGuide)}: ${esc(WEB_BASE.replace(/^https:\/\//, ''))}</div>
  </div>
</section>
<nav class="toc">
  <h1 class="toc__title">${esc(strings.contents)}</h1>
  <ol class="toc__list">${toc}</ol>
</nav>
${body}
</body>
</html>`;
}

// ----------------------------------------------------- render & checks

/** Prepare the assembled document in the browser and report problems. */
async function prepare(page) {
  return page.evaluate(async () => {
    // Anchors that point nowhere fall back to their chapter.
    const ids = new Set([...document.querySelectorAll('[id]')].map((n) => n.id));
    const broken = [];
    document.querySelectorAll('a[href^="#"]').forEach((a) => {
      const target = a.getAttribute('href').slice(1);
      if (ids.has(target)) return;
      broken.push(target);
      a.setAttribute('href', `#${a.closest('[data-chapter]')?.dataset.chapter || ''}`);
    });

    await document.fonts.ready;
    await Promise.all(
      [...document.images].map((img) => (img.complete ? null : new Promise((r) => (img.onload = img.onerror = r)))),
    );
    const failedImages = [...document.images].filter((img) => !img.naturalWidth).map((img) => img.src);
    const leftovers = [...document.querySelectorAll('video, iframe, button, details:not([open])')].map((n) =>
      n.tagName.toLowerCase(),
    );
    const tocTargets = [...document.querySelectorAll('[data-toc-target]')].map((a) => a.dataset.tocTarget);
    return { broken, failedImages, leftovers, tocTargets };
  });
}

/**
 * Page number (1-based) each contents entry links to, in contents order.
 * The contents pages come straight after the cover and hold nothing but
 * contents links, so the first `tocCount` internal links are the entries.
 */
async function readPdf(pdfBuffer, tocCount) {
  const task = getDocument({ data: new Uint8Array(pdfBuffer), verbosity: 0 });
  const pdf = await task.promise;
  const pages = [];
  for (let p = 1; p <= pdf.numPages && pages.length < tocCount; p++) {
    const page = await pdf.getPage(p);
    const links = (await page.getAnnotations()).filter((a) => a.subtype === 'Link' && a.dest);
    // Top-to-bottom on the page (PDF y grows upwards).
    links.sort((a, b) => b.rect[3] - a.rect[3] || a.rect[0] - b.rect[0]);
    for (const link of links) {
      const dest = typeof link.dest === 'string' ? await pdf.getDestination(link.dest) : link.dest;
      pages.push(dest ? (await pdf.getPageIndex(dest[0])) + 1 : null);
    }
  }
  const outline = (await pdf.getOutline()) || [];
  const numPages = pdf.numPages;
  await task.destroy();
  return { pages: pages.slice(0, tocCount), outlineCount: outline.length, numPages };
}

async function renderPdf({ browser, base, built, outDir, pdfAssets }) {
  pdfAssets.set(built.assetKey, { type: 'text/html', body: built.html });

  const page = await browser.newPage();
  page.on('pageerror', (e) => console.warn(`  [page error] ${e.message}`));
  await page.goto(`${base}/__pdf/${built.assetKey}`, { waitUntil: 'load' });
  const report = await prepare(page);

  const pdfOptions = { printBackground: true, preferCSSPageSize: true, outline: true, tagged: true };

  // Pass 1: find where each contents entry lands.
  const draft = await page.pdf(pdfOptions);
  const toc = await readPdf(draft, report.tocTargets.length);
  const missing = report.tocTargets.filter((_, i) => !toc.pages[i]);
  if (missing.length) throw new Error(`Contents entries with no target page: ${missing.join(', ')}`);

  // Pass 2: fill the numbers in and print for real.
  await page.evaluate((nums) => {
    document.querySelectorAll('[data-toc-target] .toc__page').forEach((el, i) => (el.textContent = String(nums[i])));
  }, toc.pages);
  const finalPdf = await page.pdf(pdfOptions);
  const check = await readPdf(finalPdf, report.tocTargets.length);
  if (check.pages.join() !== toc.pages.join()) throw new Error('Contents page numbers moved between passes');
  if (!check.outlineCount) throw new Error('PDF has no bookmarks');

  const file = path.join(outDir, `${built.name}.pdf`);
  fs.writeFileSync(file, args.pages ? await page.pdf({ ...pdfOptions, pageRanges: args.pages }) : finalPdf);
  if (args.keepHtml) fs.writeFileSync(path.join(outDir, `${built.name}.html`), await page.content());
  await page.close();

  console.log(`  → ${path.relative(ROOT, file)}  (${check.numPages} pages, ${built.chapterCount} chapters)`);
  const problems = [];
  if (report.failedImages.length) problems.push(`Images failed to load:\n    ${report.failedImages.join('\n    ')}`);
  if (report.leftovers.length) problems.push(`Interactive elements left in the PDF: ${report.leftovers.join(', ')}`);
  if (report.broken.length) console.warn(`  ⚠ Links to missing anchors (sent to their chapter): ${report.broken.join(', ')}`);
  if (problems.length) throw new Error(problems.join('\n'));
  return file;
}

async function buildDocument({ browser, base, locale, prefix, docKey, info, outDir }) {
  const doc = DOCUMENTS[docKey];
  const strings = STRINGS[locale];
  const docTitle = strings[doc.titleKey];
  const list = await chapterList(doc);

  // Chapter ids and the path → chapter map used to rewrite links.
  const pathMap = {};
  list.forEach((c, i) => {
    c.id = `c${i + 1}`;
    if (c.path) {
      pathMap[norm(c.path)] = c.id;
      (c.aliases || []).forEach((a) => (pathMap[norm(a)] = c.id));
    }
  });

  const page = await browser.newPage();
  const chapters = [];
  let siteCss = [];
  const errors = [];
  for (const c of list) {
    if (c.part) {
      chapters.push({ ...c, title: c.part, html: `<h1 class="chapter-title" id="${c.id}">${esc(c.part)}</h1>`, sections: [] });
      continue;
    }
    const url = `${base}${prefix}${c.path}`;
    const res = await page.goto(url, { waitUntil: 'load' });
    if (!res || !res.ok()) throw new Error(`Could not load ${prefix}${c.path} (${res?.status()})`);
    if (!siteCss.length) {
      siteCss = await page.$$eval('link[rel="stylesheet"]', (ls) => ls.map((l) => new URL(l.href).pathname));
    }
    const chapterWebUrl = `${WEB_BASE}${prefix}${c.path}`;
    const qrDataUrl = await QRCode.toDataURL(chapterWebUrl, { margin: 1, width: 300, errorCorrectionLevel: 'M' });
    const out = await page.evaluate(extractChapter, {
      id: c.id,
      level: c.level,
      label: c.label,
      pathMap,
      webBase: WEB_BASE,
      prefix,
      qrDataUrl,
      chapterWebUrl,
      strings,
    });
    errors.push(...out.errors);
    chapters.push({ ...c, ...out });
    console.log(`  ${'  '.repeat(c.level - 1)}• ${out.title}  (${prefix}${c.path})`);
  }
  await page.close();
  if (errors.length) throw new Error(errors.join('\n'));

  const dateText = new Date(`${info.date}T00:00:00Z`).toLocaleDateString(strings.dateLocale, {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  });
  const html = assembleHtml({ locale, doc: docKey, docTitle, version: info.version, dateText, chapters, siteCss, tocDepth: doc.tocDepth });

  const name = `${doc.fileName}-v${info.version}${LOCALE_SUFFIX[locale] ?? `-${locale.toUpperCase()}`}`;
  const assetKey = `${docKey}-${locale}.html`;
  return { name, html, assetKey, docTitle, chapterCount: chapters.length };
}

// ------------------------------------------------------------------ main

async function main() {
  const info = releaseInfo();
  const outDir = path.resolve(ROOT, args.out);
  fs.mkdirSync(outDir, { recursive: true });
  console.log(`Argus VTS PDFs — v${info.version} (${info.date}) — ${docKeys.join(', ')} — ${locales.join(', ')}`);

  const browser = await chromium.launch();
  const written = [];
  try {
    for (const locale of locales) {
      const siteDir = path.join(SITE_OUT, locale);
      if (!args.skipBuild) buildSite(locale);
      const prefix = localePrefix(siteDir, locale);
      const pdfAssets = new Map([['fonts.css', { type: 'text/css', body: fontFaceCss() }]]);
      const server = await startServer(siteDir, pdfAssets);
      const base = `http://127.0.0.1:${server.address().port}`;
      try {
        for (const docKey of docKeys) {
          console.log(`\n▶ ${STRINGS[locale][DOCUMENTS[docKey].titleKey]} (${locale})`);
          const built = await buildDocument({ browser, base, locale, prefix, docKey, info, outDir });
          written.push(await renderPdf({ browser, base, built, outDir, pdfAssets }));
        }
      } finally {
        server.close();
      }
    }
  } finally {
    await browser.close();
  }
  console.log(`\n✅ ${written.length} PDF(s) in ${path.relative(ROOT, outDir)}/`);
}

main().catch((err) => {
  console.error(`\n❌ ${err.message}`);
  process.exit(1);
});
