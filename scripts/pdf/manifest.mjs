// Which content goes into each PDF.
//
// The User Manual follows sidebars.js, so any page added to the sidebar is in
// the manual automatically, in the same order as the web guide and the app.
// The Quick Start Guide is the Quick Start slides (src/data/quickStart/*),
// rendered statically by the /print/quick-start-* pages.

export const PRODUCT_NAME = 'Argus Video Training System';

/** Public web guide, used for links and QR codes that leave the PDF. */
export const WEB_BASE = 'https://fliight-engineering.github.io/argus-interactive-guide';

export const DOCUMENTS = {
  'quick-start': {
    titleKey: 'quickStartTitle',
    fileName: 'Argus-VTS-Quick-Start-Guide',
    // Include each step (slide title) in the table of contents.
    tocDepth: 2,
    chapters: [
      { path: '/print/quick-start-setup', aliases: ['/quick-start/setup'] },
      { path: '/print/quick-start-operation', aliases: ['/quick-start/operation'] },
    ],
  },
  manual: {
    titleKey: 'manualTitle',
    fileName: 'Argus-VTS-User-Manual',
    tocDepth: 1,
    chapters: { sidebar: 'docs' },
  },
};

/**
 * Turn a sidebars.js sidebar into an ordered chapter list.
 * Categories with a linked doc become a chapter with their items nested under it.
 */
export function chaptersFromSidebar(items, docUrl, level = 1) {
  const out = [];
  for (const item of items) {
    if (typeof item === 'string') {
      out.push({ path: docUrl(item), level });
    } else if (item.type === 'doc') {
      out.push({ path: docUrl(item.id), level });
    } else if (item.type === 'category') {
      if (item.link?.type === 'doc') {
        // The category label titles the chapter ("Set Up and Operation", not the page's "Overview").
        out.push({ path: docUrl(item.link.id), level, label: item.label });
      } else {
        out.push({ part: item.label, level });
      }
      out.push(...chaptersFromSidebar(item.items || [], docUrl, level + 1));
    }
    // 'link' and 'html' sidebar items have no printable content.
  }
  return out;
}
