#!/bin/bash

# Colors
GREEN='\033[0;32m'
YELLOW='\033[0;33m'
RED='\033[0;31m'
BLUE='\033[0;34m'
NC='\033[0m'

# Get changelog message from argument
CHANGELOG_MSG="$*"

# Get current version
CURRENT_VERSION=$(node -p "require('./package.json').version")

echo -e "${BLUE}═══════════════════════════════════════════════════${NC}"
echo -e "${GREEN}🚀 Argus VTS Guide - Release Process${NC}"
echo -e "${BLUE}═══════════════════════════════════════════════════${NC}"
echo ""
echo -e "${YELLOW}Current version: ${GREEN}v${CURRENT_VERSION}${NC}"
echo ""

# Calculate next version (patch bump)
IFS='.' read -r -a VERSION_PARTS <<< "$CURRENT_VERSION"
MAJOR="${VERSION_PARTS[0]}"
MINOR="${VERSION_PARTS[1]}"
PATCH="${VERSION_PARTS[2]}"
NEXT_VERSION="${MAJOR}.${MINOR}.$((PATCH + 1))"

echo -e "${YELLOW}New version will be: ${GREEN}v${NEXT_VERSION}${NC}"
echo ""

# Check if changelog message provided
if [ -z "$CHANGELOG_MSG" ]; then
    echo -e "${RED}❌ Error: Changelog message required!${NC}"
    echo ""
    echo -e "${YELLOW}Usage:${NC}"
    echo "  make release \"Your changelog message here\""
    echo ""
    echo -e "${YELLOW}Example:${NC}"
    echo "  make release \"Fixed icon and responsive layout\""
    echo ""
    exit 1
fi

# Check if changelog exists for this version
if ! grep -q "## \[${NEXT_VERSION}\]" CHANGELOG.md; then
    echo -e "${YELLOW}Adding changelog entry...${NC}"
    
    TODAY=$(date +%Y-%m-%d)
    TEMP_FILE=$(mktemp)
    
    # Create changelog entry
    cat > "$TEMP_FILE" << EOF
## [${NEXT_VERSION}] - ${TODAY}
### Changed
- ${CHANGELOG_MSG}

EOF
    
    # Insert after [Unreleased]
    awk -v template="$(cat "$TEMP_FILE")" '
        /## \[Unreleased\]/ { print; print ""; print template; next }
        { print }
    ' CHANGELOG.md > CHANGELOG.md.tmp
    
    mv CHANGELOG.md.tmp CHANGELOG.md
    rm "$TEMP_FILE"
    
    echo -e "${GREEN}✅ Added changelog for v${NEXT_VERSION}${NC}"
fi

# Show changelog for this version
echo ""
echo -e "${BLUE}═══════════════════════════════════════════════════${NC}"
echo -e "${GREEN}📝 Changelog for v${NEXT_VERSION}:${NC}"
echo -e "${BLUE}═══════════════════════════════════════════════════${NC}"
awk -v ver="$NEXT_VERSION" '
    /^## \[/ {
        if (found) exit
        if ($0 ~ "\\[" ver "\\]") { found=1; next }
    }
    found && /^## \[/ { exit }
    found { print }
' CHANGELOG.md
echo -e "${BLUE}═══════════════════════════════════════════════════${NC}"
echo ""

# Confirm release
read -p "Proceed with release v${NEXT_VERSION}? [y/N]: " CONFIRM
if [[ ! "$CONFIRM" =~ ^[Yy]$ ]]; then
    echo -e "${RED}Release cancelled${NC}"
    exit 1
fi

# Run release
echo ""
echo -e "${GREEN}🚀 Publishing release...${NC}"
echo ""

# Run npm publish command
npm run publish

if [ $? -eq 0 ]; then
    echo ""
    echo -e "${GREEN}═══════════════════════════════════════════════════${NC}"
    echo -e "${GREEN}✅ Release v${NEXT_VERSION} published successfully!${NC}"
    echo -e "${GREEN}═══════════════════════════════════════════════════${NC}"
    echo ""
    echo -e "${YELLOW}Next steps:${NC}"
    echo "  1. Check GitHub Actions: https://github.com/Fliight-Engineering/argus-interactive-guide/actions"
    echo "  2. Monitor builds for Windows/Linux"
    echo "  3. Test auto-update from previous version"
    echo ""
else
    echo ""
    echo -e "${RED}❌ Release failed${NC}"
    exit 1
fi
