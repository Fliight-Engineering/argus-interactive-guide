# Reusable CI Workflows

Reusable GitHub Actions workflows for **Docusaurus + Electron** projects. Supports auto-deployment to GitHub Pages and Electron app releases with auto-updater.

## Workflows

| Workflow | Description |
|----------|-------------|
| `reusable-build.yml` | Build Docusaurus site (online/offline) |
| `reusable-deploy.yml` | Deploy to GitHub Pages or create Release |
| `reusable-electron.yml` | Build Electron app for Win/Mac/Linux |
| `reusable-test.yml` | Run tests |

## Custom Actions

| Action | Description |
|--------|-------------|
| `setup-docusaurus` | Setup Node.js, cache, install dependencies |
| `bump-version` | Bump version in package.json and version.json |

## Quick Start

### Deploy to GitHub Pages

```yaml
jobs:
  build:
    uses: Fliight-Engineering/reusable-ci-workflows/.github/workflows/reusable-build.yml@main
    with:
      node-version: '20'
      offline-build: false

  deploy:
    needs: build
    uses: Fliight-Engineering/reusable-ci-workflows/.github/workflows/reusable-deploy.yml@main
    with:
      deploy-target: 'github-pages'
    secrets:
      GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

### Build Electron App

```yaml
jobs:
  build-and-release:
    uses: Fliight-Engineering/reusable-ci-workflows/.github/workflows/reusable-electron.yml@main
    with:
      platforms: 'linux,win,mac'
    secrets:
      GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

## Documentation

See [docs/how-to-use.md](docs/how-to-use.md) for detailed instructions.

## License

MIT