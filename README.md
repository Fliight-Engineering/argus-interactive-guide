# VTS Interactive Guide

Interactive documentation for Argus VTS system with offline desktop app support.

## 🚀 Quick Start

```bash
# Install dependencies
make install        # Or: npm install

# Development
make dev            # Or: npm start (http://localhost:3000)

# Test Electron build locally
make test-build     # Build & check artifacts/dist-electron/

# Release new version
make release "Your changelog message here"
```

## 📦 Available Commands

```bash
make help           # Show all available commands
make dev            # Start development server
make build          # Build website
make test-build     # Build Electron app locally
make release "msg"  # Release with automatic changelog
make clean          # Clean build artifacts
make check-version  # Show current version
```

## 📝 Release Process

Simple one-command release:

```bash
make release "Fixed icon and responsive layout"
```

This will:
1. Auto-bump patch version (e.g., 1.0.13 → 1.0.14)
2. Add changelog entry with your message
3. Show preview and ask for confirmation
4. Commit, tag, and push to GitHub
5. Trigger CI/CD to build Windows/Linux apps
6. Create GitHub Release with installers and the two PDFs

**Manual release:**
```bash
# Traditional way (still works)
npm run publish
```

## ✨ Features

- **Website**: Auto-deploy to GitHub Pages on push
- **Desktop Apps**: Windows (.exe), macOS (.dmg), Linux (.AppImage, .deb)
- **Auto-Update**: Windows & Linux apps auto-update from GitHub Releases
- **Offline Mode**: Full documentation available offline
- **PDFs**: Quick Start Guide and User Manual, print-ready, attached to every release

## 📄 PDFs (Quick Start Guide & User Manual)

Both PDFs are generated from the same content as the website and app; there is no
separate Word/PDF copy to maintain.

```bash
npm run build:pdf                          # both PDFs, English → dist-pdf/
npm run build:pdf -- --doc manual          # just one: quick-start | manual
npm run build:pdf -- --locale es           # another language: en | es | vi | all
npm run build:pdf -- --skip-build          # reuse the last site build (fast re-layout)
npm run build:pdf -- --pages 1-3,12        # a few pages only, for layout samples
```

Output: `dist-pdf/Argus-VTS-Quick-Start-Guide-vX.Y.Z.pdf` and
`dist-pdf/Argus-VTS-User-Manual-vX.Y.Z.pdf` (other languages get `-ES` / `-VI`).
The version comes from the release tag (CI) or `package.json`; the date is that
tag's commit date. Nothing is typed in by hand.

**What goes in each PDF** — `scripts/pdf/manifest.mjs`:
- **User Manual**: every page in `sidebars.js`, in sidebar order. Add a page to
  the sidebar and it's in the manual.
- **Quick Start Guide**: the Quick Start slides in `src/data/quickStart/`
  (the same data the interactive carousel uses), one numbered step per card.

**How it works** — `scripts/pdf/build-pdf.mjs` builds the site into `.pdf-build/`,
takes each page's rendered article, adds a cover and contents, and prints it with
headless Chromium (Playwright). Layout rules are in `scripts/pdf/pdf.css`; cover and
running-head text per language in `scripts/pdf/strings.mjs`. The build fails if an
image is missing, a video has no poster, or interactive UI is left in the PDF.

**CI** — `.github/workflows/pdf.yml` builds the PDFs on pull requests that touch
content (download them from the run's *pdf* artifact) and on manual runs. On a
`v*` tag, `release-electron.yml` runs it and attaches both PDFs to the release.

### Writing content that prints cleanly

- **Images**: use real screenshots/photos at least ~1200 px wide; they are scaled
  to fit A4 (max ~85 mm tall). Put labels and callouts in the image large enough to
  read at that size.
- **Videos**: use the `Video` component with a `poster` still — the PDF shows the
  still plus a QR code and link to the page online:
  ```mdx
  import Video from '@site/src/components/Video';

  <Video src="/video/clip.mp4" poster="/video/clip-poster.jpg" caption="What it shows" />
  ```
  Grab a poster with `ffmpeg -ss 2 -i clip.mp4 -frames:v 1 clip-poster.jpg`.
- **Steps**: write procedures as numbered lists; a list item never splits across pages.
- **Screen-only content** (e.g. "click here to open the app"): wrap it in
  `<div class="screen-only">…</div>` and it's left out of the PDF.
- **Links** between docs become links inside the PDF; links to pages not in that
  PDF go to the website.
- **Interactive widgets** (tabs, accordions, carousels): any new one needs a static
  print form, the same way Quick Start slides have `/print/quick-start-*`. The build
  fails if a `<video>`, `<iframe>`, `<button>` or closed `<details>` reaches the PDF.
- Check your change with `npm run build:pdf -- --doc manual` (or `quick-start`).
  `--skip-build` only re-lays out the last build, so use it for `pdf.css` tweaks,
  not content edits.

## 📁 Project Structure

```
├── .github/workflows/    # CI/CD workflows
├── docs/                 # Documentation content (Markdown)
├── docs-internal/        # Developer documentation
├── electron/             # Electron desktop app
├── scripts/              # Build & utility scripts (scripts/pdf/: PDF build)
├── src/                  # React components & styles (src/data/: shared Quick Start content)
├── static/               # Static assets
├── CHANGELOG.md          # Release notes
├── docusaurus.config.js  # Site configuration
└── package.json          # Project config
```

## 📖 Documentation

- [Deployment Guide](docs-internal/DEPLOYMENT_AND_UPDATES.md) - CI/CD & auto-update
- [Developer Guide](docs-internal/DEVELOPER_GUIDE.md) - Development workflow
- [Template Guide](docs-internal/TEMPLATE_GUIDE.md) - Reuse for other projects

## 🔗 Links

- **Website**: https://fliight-engineering.github.io/argus-interactive-guide/
- **Releases**: https://github.com/Fliight-Engineering/argus-interactive-guide/releases
