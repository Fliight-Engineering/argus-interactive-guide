import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {getLanding} from '@site/src/data/quickStart/landing';
import styles from './styles.module.css';

export default function QuickStart() {
  const bannerUrl = useBaseUrl('/img/vts-guide/main-banner.png');
  const setupImageUrl = useBaseUrl('/img/vts-guide/qs-setup-complete.png');
  const operationImageUrl = useBaseUrl('/img/vts-guide/qs-op-full-screen.png');
  const {i18n: {currentLocale}} = useDocusaurusContext();
  const content = getLanding(currentLocale);

  const sectionsWithImages = content.sections.map((section, idx) => ({
    ...section,
    imageUrl: idx === 0 ? setupImageUrl : operationImageUrl
  }));

  return (
    <Layout title="Quick Start Guide" description="Visual quick start guides for Argus VTS">
      <div
        className={styles.container}
        style={{
          backgroundImage: `url(${bannerUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          position: 'relative',
          minHeight: 'calc(100vh - var(--ifm-navbar-height))'
        }}
      >
        <div className={styles.overlay} />
        <div className={styles.contentWrapper}>
          <div className={styles.header}>
            <h1 className={styles.title}>{content.title}</h1>
            <p className={styles.subtitle}>
              {content.subtitle}
            </p>
          </div>

          <div className={styles.optionsGrid}>
          {sectionsWithImages.map((section, idx) => (
            <Link
              key={idx}
              to={section.link}
              className={styles.optionCard}
            >
              <div className={styles.cardImage}>
                <img src={section.imageUrl} alt={section.title} />
              </div>
              <div className={styles.cardContent}>
                <h2 className={styles.cardTitle}>{section.title}</h2>
                <p className={styles.cardDescription}>{section.description}</p>
                <div className={styles.cardLink}>
                  {content.startLabel} {section.title} →
                </div>
              </div>
            </Link>
          ))}
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem', width: '100%' }}>
            <p style={{ color: '#ffffff', textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)', fontSize: '0.9rem' }}>
              {content.moreDetail}{' '}
              <Link to="/docs/setup-operation/" style={{ color: 'var(--ifm-color-primary)' }}>{content.fullManual}</Link>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

