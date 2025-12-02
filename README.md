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
6. Create GitHub Release with installers

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

## 📁 Project Structure

```
├── .github/workflows/    # CI/CD workflows
├── docs/                 # Documentation content (Markdown)
├── docs-internal/        # Developer documentation
├── electron/             # Electron desktop app
├── scripts/              # Build & utility scripts
├── src/                  # React components & styles
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
