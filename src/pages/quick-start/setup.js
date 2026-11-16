import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Carousel from '@site/src/components/Carousel';
import {getSetup} from '@site/src/data/quickStart/setup';
import styles from './styles.module.css';

export default function SetupQuickStart() {
  const bannerUrl = useBaseUrl('/img/vts-guide/main-banner.png');
  const {i18n: {currentLocale}} = useDocusaurusContext();
  const slides = getSetup(currentLocale);

  return (
    <Layout title="Setup - Quick Start" description="Complete physical deployment and power-on sequence">
      <div
        style={{
          padding: '1rem 1rem 0',
          width: '100%',
          margin: 0,
          minHeight: 'calc(100vh - var(--ifm-navbar-height))',
          height: 'calc(100vh - var(--ifm-navbar-height))',
          backgroundImage: `url(${bannerUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <div
          className={styles.backgroundOverlay}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'var(--ifm-background-color)',
            opacity: '0.85',
            zIndex: 1
          }}
        />
        <div style={{ position: 'relative', zIndex: 2, width: '100%', marginTop: '-5vh' }}>
          <Carousel slides={slides} backLink="/quick-start/" />
        </div>
      </div>
    </Layout>
  );
}
