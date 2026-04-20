import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';

const contentEn = {
  title: 'Quick Start Guide',
  subtitle: 'Step-by-step visual guides to get you up and running quickly',
  sections: [
    {
      title: 'Setup',
      description: 'Complete physical deployment and power-on sequence. Get your system ready for operation.',
      image: '/img/vts-guide/qs-setup-complete.png',
      link: '/quick-start/setup'
    },
    {
      title: 'Operation',
      description: 'Learn how to use the Argus software, view feeds, record sessions, and monitor network health.',
      image: '/img/vts-guide/argus-software.png',
      link: '/quick-start/operation'
    }
  ],
  startLabel: 'Start',
  moreDetail: 'Need more detail? Check out the',
  fullManual: 'full manual'
};

const contentVi = {
  title: 'Hướng Dẫn Bắt Đầu Nhanh',
  subtitle: 'Hướng dẫn trực quan từng bước để khởi động nhanh chóng',
  sections: [
    {
      title: 'Cài Đặt',
      description: 'Cài đặt vật lý và quy trình bật nguồn đầy đủ. Chuẩn bị hệ thống sẵn sàng hoạt động.',
      image: '/img/vts-guide/qs-setup-complete.png',
      link: '/quick-start/setup'
    },
    {
      title: 'Vận Hành',
      description: 'Tìm hiểu cách sử dụng phần mềm Argus, xem luồng camera, ghi hình và theo dõi sức khỏe mạng.',
      image: '/img/vts-guide/argus-software.png',
      link: '/quick-start/operation'
    }
  ],
  startLabel: 'Bắt Đầu',
  moreDetail: 'Cần thêm chi tiết? Xem',
  fullManual: 'hướng dẫn đầy đủ'
};

const contentEs = {
  title: 'Guía de Inicio Rápido',
  subtitle: 'Guías visuales paso a paso para ponerse en marcha rápidamente',
  sections: [
    {
      title: 'Configuración',
      description: 'Despliegue físico completo y secuencia de encendido. Prepare su sistema para operar.',
      image: '/img/vts-guide/qs-setup-complete.png',
      link: '/quick-start/setup'
    },
    {
      title: 'Operación',
      description: 'Aprenda a usar el software Argus, ver flujos de video, grabar sesiones y monitorear la salud de la red.',
      image: '/img/vts-guide/argus-software.png',
      link: '/quick-start/operation'
    }
  ],
  startLabel: 'Iniciar',
  moreDetail: '¿Necesita más detalle? Consulte el',
  fullManual: 'manual completo'
};

export default function QuickStart() {
  const bannerUrl = useBaseUrl('/img/vts-guide/main-banner.png');
  const setupImageUrl = useBaseUrl('/img/vts-guide/qs-setup-complete.png');
  const operationImageUrl = useBaseUrl('/img/vts-guide/argus-software.png');
  const {i18n: {currentLocale}} = useDocusaurusContext();
  const content = currentLocale === 'vi' ? contentVi : currentLocale === 'es' ? contentEs : contentEn;

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
