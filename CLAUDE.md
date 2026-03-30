# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Argus Video Training System (VTS) — an interactive documentation site built with Docusaurus, deployed to GitHub Pages, and also distributed as an Electron desktop app (Windows/Linux) with offline support and auto-update.

## Common Commands

```bash
# Install dependencies (root + electron/)
make install

# Development server (localhost:3000)
npm start

# Production build (GitHub Pages)
npm run build

# Offline build + local Electron app (for testing)
make test-build

# Run Electron in dev mode
cd electron && npm start

# Clear Docusaurus cache
npm run docusaurus clear
```

### Release

```bash
# Bump version only (updates package.json, electron/package.json, static/version.json)
npm run bump           # patch
npm run bump:minor
npm run bump:major

# Full release: bump + changelog + commit + tag + push
make release "message"
```

No test or lint scripts are configured.

## Architecture

### Dual-deployment model

The same Docusaurus content is built two ways:

| Mode | Command | `baseUrl` | Output |
|------|---------|-----------|--------|
| Web (GitHub Pages) | `npm run build` | `/argus-interactive-guide/` | `build/` |
| Offline (Electron) | `npm run build:offline` | `/` | `build/` |

`OFFLINE_BUILD=true` env var is the switch. The offline build is embedded inside the Electron app.

### Electron app

- `electron/main.js` — main process; loads `build/index.html`, creates `BrowserWindow`, registers IPC handlers, and integrates `electron-updater`
- `electron/preload.js` — exposes `window.electronAPI.minimize()` and `window.electronAPI.close()` to the renderer via contextBridge
- `src/clientModules/windowControls.js` — re-attaches window control button listeners on every Docusaurus route change via `onRouteDidUpdate`

### Auto-update flow

1. `VersionChecker` component polls `static/version.json` every 5 minutes
2. If a newer version is detected, `UpdateModal` shows download progress
3. Electron main process uses `electron-updater` to download from GitHub Releases (`latest.yml`)
4. Update installs on next app quit
5. Auto-update supported on **Windows and Linux only** (macOS builds to DMG but no auto-update)

### Version sync

Three files must always be in sync — `npm run bump` handles this atomically:
- `package.json`
- `electron/package.json`
- `static/version.json`

### Key custom components (`src/components/`)

- `Carousel/` — touch-swipe image carousel
- `LabeledImage/` — images with overlaid labels/captions
- `UpdateModal/` — download progress UI (uses React state simulation)
- `VersionChecker/` — fetches version.json and triggers update flow
- `WindowControls/` — minimize/close buttons wired to Electron IPC

All components are SSR-safe (guard `typeof window` / `typeof navigator` before browser API access).

## CI/CD

- **`deploy.yml`** — triggers on push to `main`; builds site and deploys to GitHub Pages
- **`release-electron.yml`** — triggers on `v*` tags; matrix builds Linux (Ubuntu) and Windows; produces `.AppImage`, `.deb`, and `.exe` artifacts attached to a GitHub Release
