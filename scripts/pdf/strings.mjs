// Fixed text printed by the PDF build (cover, contents, running heads).
// Page content itself comes from the translated site, so adding a locale here
// is all that's needed to export a PDF in that language.

export const STRINGS = {
  en: {
    dateLocale: 'en-AU',
    quickStartTitle: 'Quick Start Guide',
    manualTitle: 'User Manual',
    contents: 'Contents',
    version: 'Version',
    released: 'Released',
    page: 'Page',
    of: 'of',
    watchVideo: 'Watch this video online',
    scanToWatch: 'Scan to watch',
    onlineGuide: 'Online guide',
    copyright: 'Fliight Technologies',
  },
  es: {
    dateLocale: 'es-ES',
    quickStartTitle: 'Guía de Inicio Rápido',
    manualTitle: 'Manual de Usuario',
    contents: 'Contenido',
    version: 'Versión',
    released: 'Publicado',
    page: 'Página',
    of: 'de',
    watchVideo: 'Vea este video en línea',
    scanToWatch: 'Escanee para verlo',
    onlineGuide: 'Guía en línea',
    copyright: 'Fliight Technologies',
  },
  vi: {
    dateLocale: 'vi-VN',
    quickStartTitle: 'Hướng Dẫn Bắt Đầu Nhanh',
    manualTitle: 'Hướng Dẫn Sử Dụng',
    contents: 'Mục lục',
    version: 'Phiên bản',
    released: 'Ngày phát hành',
    page: 'Trang',
    of: '/',
    watchVideo: 'Xem video này trực tuyến',
    scanToWatch: 'Quét để xem',
    onlineGuide: 'Hướng dẫn trực tuyến',
    copyright: 'Fliight Technologies',
  },
};

export const LOCALE_SUFFIX = { en: '', es: '-ES', vi: '-VI' };
