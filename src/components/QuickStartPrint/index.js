import React from 'react';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Slide from '@site/src/components/Carousel/Slide';
import { getLanding } from '@site/src/data/quickStart/landing';

/**
 * Every slide of one Quick Start part, stacked as a static document.
 * This is the source the PDF build reads for the Quick Start Guide; it is not
 * linked from the site navigation. `part` is the index into landing.sections.
 */
export default function QuickStartPrint({ part, slides }) {
  const { i18n: { currentLocale } } = useDocusaurusContext();
  const section = getLanding(currentLocale).sections[part];
  const imageUrls = slides.map((slide) => useBaseUrl(slide.image || ''));

  return (
    <Layout title={section.title} description={section.description} noFooter>
      <main className="container margin-vert--lg">
        <article className="qs-print" data-pdf-root>
          <h1>{section.title}</h1>
          <p className="qs-print__intro">{section.description}</p>
          {slides.map((slide, idx) => (
            <section key={idx} className="qs-print__step">
              <Slide slide={slide} imageUrl={slide.image ? imageUrls[idx] : null} variant="print" />
            </section>
          ))}
        </article>
      </main>
    </Layout>
  );
}
