.PHONY: help dev build test-build changelog release clean

# Colors for output
GREEN := \033[0;32m
YELLOW := \033[0;33m
RED := \033[0;31m
NC := \033[0m # No Color

help: ## Show this help message
	@echo "$(GREEN)Available commands:$(NC)"
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "  $(YELLOW)%-15s$(NC) %s\n", $$1, $$2}'

dev: ## Start development server (npm start)
	@echo "$(GREEN)Starting development server...$(NC)"
	npm start

build: ## Build Docusaurus website
	@echo "$(GREEN)Building website...$(NC)"
	npm run build

build-offline: ## Build offline version for Electron
	@echo "$(GREEN)Building offline version...$(NC)"
	npm run build:offline

test-build: build-offline ## Build and test Electron app locally
	@echo "$(GREEN)Building Electron app for testing...$(NC)"
	cd electron && npm ci && npm run build
	@echo "$(GREEN)✅ Build complete! Check artifacts/dist-electron/$(NC)"

changelog: ## Add new changelog entry interactively
	@echo "$(YELLOW)Creating new changelog entry...$(NC)"
	@./scripts/add-changelog.sh

release: ## Release new version: make release "Your changelog message"
	@./scripts/release.sh "$(filter-out $@,$(MAKECMDGOALS))"

%:
	@:

clean: ## Clean build artifacts and node_modules
	@echo "$(YELLOW)Cleaning build artifacts...$(NC)"
	rm -rf build/ artifacts/ .docusaurus/
	rm -rf node_modules/ electron/node_modules/
	@echo "$(GREEN)✅ Clean complete!$(NC)"

install: ## Install all dependencies
	@echo "$(GREEN)Installing dependencies...$(NC)"
	npm ci
	cd electron && npm ci
	@echo "$(GREEN)✅ Installation complete!$(NC)"

check-version: ## Show current version
	@echo "$(GREEN)Current version:$(NC) $$(node -p "require('./package.json').version")"
	@echo "$(GREEN)Electron version:$(NC) $$(node -p "require('./electron/package.json').version")"

.DEFAULT_GOAL := help
