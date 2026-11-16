// Quick Start landing page copy (en / vi / es)
// Shared by the interactive Quick Start pages and the printable/PDF Quick Start.
// Edit here only; both outputs pick changes up automatically.

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
      description: 'Learn how to use the Argus software, view feeds, record and replay sessions, and monitor network health.',
      image: '/img/vts-guide/qs-op-full-screen.png',
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
      description: 'Tìm hiểu cách sử dụng phần mềm Argus, xem luồng camera, ghi hình, xem lại playback và theo dõi sức khỏe mạng.',
      image: '/img/vts-guide/qs-op-full-screen.png',
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
      description: 'Aprenda a usar el software Argus, ver flujos de video, grabar y reproducir sesiones, y monitorear la salud de la red.',
      image: '/img/vts-guide/qs-op-full-screen.png',
      link: '/quick-start/operation'
    }
  ],
  startLabel: 'Iniciar',
  moreDetail: '¿Necesita más detalle? Consulte el',
  fullManual: 'manual completo'
};

const contentByLocale = {
  en: contentEn,
  vi: contentVi,
  es: contentEs,
};

export function getLanding(locale) {
  return contentByLocale[locale] || contentByLocale.en;
}

export default contentByLocale;
