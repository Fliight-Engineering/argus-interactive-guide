#!/bin/bash

# Colors
GREEN='\033[0;32m'
YELLOW='\033[0;33m'
BLUE='\033[0;34m'
NC='\033[0m'

echo -e "${BLUE}═══════════════════════════════════════════════════${NC}"
echo -e "${GREEN}📝 Add Changelog Entry${NC}"
echo -e "${BLUE}═══════════════════════════════════════════════════${NC}"
echo ""

# Get current version and calculate next
CURRENT_VERSION=$(node -p "require('./package.json').version")
IFS='.' read -r -a VERSION_PARTS <<< "$CURRENT_VERSION"
MAJOR="${VERSION_PARTS[0]}"
MINOR="${VERSION_PARTS[1]}"
PATCH="${VERSION_PARTS[2]}"
NEXT_VERSION="${MAJOR}.${MINOR}.$((PATCH + 1))"

read -p "Version for changelog [${NEXT_VERSION}]: " VERSION
VERSION=${VERSION:-$NEXT_VERSION}

TODAY=$(date +%Y-%m-%d)
TEMP_FILE=$(mktemp)

# Create changelog template
cat > "$TEMP_FILE" << EOF
## [${VERSION}] - ${TODAY}
### Added
- 

### Changed
- 

### Fixed
- 

EOF

# Insert after [Unreleased]
awk -v template="$(cat "$TEMP_FILE")" '
    /## \[Unreleased\]/ { print; print ""; print template; next }
    { print }
' CHANGELOG.md > CHANGELOG.md.tmp

mv CHANGELOG.md.tmp CHANGELOG.md
rm "$TEMP_FILE"

echo -e "${GREEN}✅ Added changelog template for v${VERSION}${NC}"
echo -e "${YELLOW}Opening editor...${NC}"
echo ""

# Open editor
${EDITOR:-nano} CHANGELOG.md

echo ""
echo -e "${GREEN}✅ Changelog updated!${NC}"
