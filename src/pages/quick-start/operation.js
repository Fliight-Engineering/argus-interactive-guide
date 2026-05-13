import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Carousel from '@site/src/components/Carousel';
import styles from './styles.module.css';

const slidesEn = [
  {
    title: 'Training Area Layout',
    image: '/img/vts-guide/example-map.png',
    content: 'Example training area layout showing optimal positioning. The map illustrates trainer position, AP locations, and vehicle operational area for effective deployment planning.',
    steps: [
      'Trainer position situated out of the way of vehicle travel',
      'Trainer AP and Repeater AP locations positioned for coverage',
      'Vehicle operational area clearly defined',
      'Safe distances maintained for trainer positioning'
    ]
  },
  {
    title: 'Launch Argus Software',
    image: '/img/vts-guide/qs-op-launch-argus.png',
    content: 'Open the Argus software on the trainer tablet.',
    steps: [
      'Locate Argus software (usually pinned to taskbar or start menu)',
      'Launch the application',
      'Wait 10-15 seconds for software to initialise',
      'Software will automatically detect and connect to all cameras',
      'All 4 camera feeds should start streaming automatically'
    ]
  },
  {
    title: 'Argus Interface Overview',
    image: '/img/vts-guide/qs-op-interface-overview.png',
    content: 'The Argus interface provides all the controls you need for training operations.',
    table: {
      headers: ['Control', 'Function'],
      rows: [
        ['A. Version Badge', 'Click to check for updates'],
        ['B. Network Health Monitor', 'View mesh network status'],
        ['C. Voice', 'Open Voice System Control panel'],
        ['D. Start Recording & Gallery', 'Start/stop recording and open recordings folder'],
        ['E. Switch View', 'Toggle camera grid layout'],
        ['F. Settings/Minimise/Close', 'Application controls']
      ]
    }
  },
  {
    title: 'Viewing Camera Feeds',
    image: '/img/vts-guide/qs-op-full-screen.png',
    content: 'Once the app is open with the system connected, the four camera feeds will start streaming automatically.',
    steps: [
      'All 4 camera feeds appear in the sidebar',
      'Each feed shows live video from its mounted position',
      'Feeds update in real-time',
      'Double-tap any feed to view full screen, double-tap again to return'
    ]
  },
  {
    title: 'Start Recording',
    image: '/img/vts-guide/start-recording.png',
    content: 'Record all camera feeds simultaneously for post-training review and coaching.',
    steps: [
      'Click the "Start Recording" button in the Argus interface',
      'All connected camera feeds will be recorded simultaneously',
      'Recordings are saved to the specified folder (Settings/Recording/Directory)',
      'Recording continues until you click "Stop Recording"',
      'All camera angles are captured in sync for comprehensive review'
    ]
  },
  {
    title: 'Session Playback Review',
    image: '/img/vts-guide/playback-session-list.png',
    content: 'Review recorded training sessions directly inside ARGUS without leaving the app.',
    steps: [
      'Open Playback from the toolbar after a recording has been saved',
      'Use Sort and View to find the session and choose larger driver thumbnails when needed',
      'Double-tap a session to replay all camera feeds in sync',
      'Use the T and M speaker controls to mute or unmute trainer and machine audio channels during playback',
      'Use Select to mark one or more sessions for deletion; ARGUS will ask for confirmation before removing files',
      'Tap the red X on the playback bar to return to live camera view'
    ],
    link: {
      text: 'Session Playback Details ->',
      url: '/docs/argus-software/session-playback'
    }
  },  {
    title: 'Network Health Monitoring',
    image: '/img/vts-guide/mesh-status-orange-marginal.png',
    content: 'Monitor the mesh network connection quality in real-time using the network health panel located in the lower right corner of the Argus application.',
    steps: [
      'Check the network health monitoring panel (lower left corner)',
      'Give the network a minute to stabilise after initial connection',
      'If the indicator is orange or red, reposition relay nodes before starting a training session'
    ],
    link: {
      text: 'Mesh Network Monitor Details \u2192',
      url: '/docs/argus-software/mesh-monitor'
    },
    table: {
      headers: ['Indicator', 'Status'],
      rows: [
        ['Green', 'Optimal connection quality, video streaming reliable'],
        ['Orange', 'Marginal connection \u2014 working but signal is weak'],
        ['Red', 'Poor connection \u2014 do not begin training, reposition nodes']
      ]
    }
  },
  {
    title: 'Recording Management',
    image: '/img/vts-guide/view-recordings.png',
    content: 'Access and manage your recorded training sessions.',
    steps: [
      'Click "Open Recording Directory" button to access saved recordings',
      'Recordings are stored in the folder specified in Settings/Recording/Directory',
      'All camera feeds are recorded simultaneously in sync',
      'Playback recordings for post-training review and trainee coaching',
      'Use recordings for assessment and improvement feedback'
    ]
  },
  {
    title: 'Voice System Status',
    image: '/img/vts-guide/qs-op-voice-status.png',
    content: 'Monitor voice communication via the Voice indicator in the toolbar. The phone icon and color indicator show connection status, while the sound bars indicate voice activity.',
    note: 'T = Trainer, M = Machine/Trainee.',
    steps: [
      'Phone icon with color shows connection status (Green/Orange/Red)',
      'Sound bars indicate voice activity when speaking',
      'Battery level displayed when headsets are connected',
      'System status shows green when voice channel is ready'
    ],
    link: {
      text: 'Troubleshooting Guide →',
      url: '/docs/argus-software/voice-system'
    },
    table: {
      headers: ['Indicator', 'Status'],
      rows: [
        ['Green', 'Voice channel connected and ready'],
        ['Orange', 'Headset not connected or initializing'],
        ['Red', 'Connection error - check headset pairing']
      ]
    }
  },
  {
    title: 'Ready for Training!',
    image: '/img/vts-guide/qs-op-ready.png',
    content: 'Your Argus VTS system is now fully operational and ready for training operations. The system will automatically maintain mesh connections and camera feeds during use.',
    noNumbers: true,
    steps: [
      '✅ All camera feeds are streaming',
      '✅ Network health is monitored',
      '✅ Recording capability is ready',
      '✅ Voice communication active',
      '✅ System is maintaining connections'
    ]
  }
];

const slidesVi = [
  {
    title: 'Bố Cục Khu Vực Đào Tạo',
    image: '/img/vts-guide/example-map.png',
    content: 'Bố cục khu vực đào tạo mẫu cho thấy vị trí tối ưu. Bản đồ minh họa vị trí huấn luyện viên, vị trí các nút radio và khu vực hoạt động xe để lập kế hoạch triển khai hiệu quả.',
    steps: [
      'Vị trí huấn luyện viên không vướng đường đi của xe',
      'Vị trí nút radio huấn luyện viên và bộ lặp được bố trí để phủ sóng',
      'Khu vực hoạt động xe được xác định rõ',
      'Khoảng cách an toàn được duy trì cho vị trí huấn luyện viên'
    ]
  },
  {
    title: 'Khởi Chạy Phần Mềm Argus',
    image: '/img/vts-guide/qs-op-launch-argus.png',
    content: 'Mở phần mềm Argus trên máy tính bảng huấn luyện viên.',
    steps: [
      'Tìm phần mềm Argus (thường ghim trên taskbar hoặc menu start)',
      'Khởi chạy ứng dụng',
      'Đợi 10-15 giây để phần mềm khởi động',
      'Phần mềm sẽ tự động phát hiện và kết nối với tất cả camera',
      'Tất cả 4 luồng camera sẽ tự động bắt đầu phát trực tiếp'
    ]
  },
  {
    title: 'Tổng Quan Giao Diện Argus',
    image: '/img/vts-guide/qs-op-interface-overview.png',
    content: 'Giao diện Argus cung cấp tất cả các điều khiển bạn cần cho hoạt động đào tạo.',
    table: {
      headers: ['Điều Khiển', 'Chức Năng'],
      rows: [
        ['A. Huy hiệu phiên bản', 'Nhấp để kiểm tra cập nhật'],
        ['B. Theo Dõi Sức Khỏe Mạng', 'Xem trạng thái mạng mesh'],
        ['C. Thoại', 'Mở bảng điều khiển hệ thống thoại'],
        ['D. Ghi Hình & Thư Viện', 'Bắt đầu/dừng ghi hình và mở thư mục ghi hình'],
        ['E. Chuyển chế độ xem', 'Chuyển đổi bố cục lưới camera'],
        ['F. Cài đặt/Thu nhỏ/Đóng', 'Điều khiển ứng dụng']
      ]
    }
  },
  {
    title: 'Xem Luồng Camera',
    image: '/img/vts-guide/qs-op-full-screen.png',
    content: 'Khi ứng dụng mở với hệ thống đã kết nối, bốn luồng camera sẽ tự động bắt đầu phát.',
    steps: [
      'Tất cả 4 luồng camera xuất hiện trong thanh bên',
      'Mỗi luồng hiển thị video trực tiếp từ vị trí lắp đặt',
      'Luồng cập nhật theo thời gian thực',
      'Chạm đôi vào bất kỳ luồng nào để xem toàn màn hình, chạm đôi lại để quay về'
    ]
  },
  {
    title: 'Bắt Đầu Ghi Hình',
    image: '/img/vts-guide/start-recording.png',
    content: 'Ghi tất cả luồng camera đồng thời để xem lại và huấn luyện sau buổi học.',
    steps: [
      'Nhấp nút "Bắt Đầu Ghi" trong giao diện Argus',
      'Tất cả luồng camera đã kết nối sẽ được ghi đồng thời',
      'Bản ghi được lưu vào thư mục đã chỉ định (Cài đặt/Ghi hình/Thư mục)',
      'Ghi hình tiếp tục cho đến khi bạn nhấp "Dừng Ghi"',
      'Tất cả góc camera được ghi đồng bộ để xem lại toàn diện'
    ]
  },
  {
    title: 'Xem Lại Phiên Ghi Hình',
    image: '/img/vts-guide/playback-session-list.png',
    content: 'Xem lại các phiên đào tạo đã ghi trực tiếp trong ARGUS mà không cần rời ứng dụng.',
    steps: [
      'Mở Playback từ thanh công cụ sau khi đã lưu bản ghi',
      'Dùng Sort và View để tìm phiên ghi hình và chọn thumbnail lớn khi cần nhìn rõ người lái',
      'Chạm đôi vào một phiên để phát lại tất cả camera đồng bộ',
      'Dùng nút loa T và M để mute hoặc unmute kênh âm thanh trainer và machine trong lúc playback',
      'Dùng Select để chọn một hoặc nhiều phiên cần xóa; ARGUS sẽ hỏi xác nhận trước khi xóa file',
      'Chạm nút X đỏ trên thanh playback để quay lại màn hình camera trực tiếp'
    ],
    link: {
      text: 'Chi Tiết Session Playback ->',
      url: '/docs/argus-software/session-playback'
    }
  },  {
    title: 'Theo Dõi Sức Khỏe Mạng',
    image: '/img/vts-guide/mesh-status-orange-marginal.png',
    content: 'Theo dõi chất lượng kết nối mạng mesh theo thời gian thực bằng bảng theo dõi ở góc dưới bên phải của ứng dụng Argus.',
    steps: [
      'Kiểm tra bảng theo dõi sức khỏe mạng (góc dưới bên trái)',
      'Cho mạng một phút để ổn định sau khi kết nối ban đầu',
      'Nếu chỉ báo màu cam hoặc đỏ, di chuyển nút relay trước khi bắt đầu buổi đào tạo'
    ],
    link: {
      text: 'Chi Tiết Giám Sát Mạng Mesh \u2192',
      url: '/docs/argus-software/mesh-monitor'
    },
    table: {
      headers: ['Chỉ Số', 'Trạng Thái'],
      rows: [
        ['Xanh', 'Chất lượng kết nối tối ưu, truyền video đáng tin cậy'],
        ['Cam', 'Kết nối trung bình \u2014 hoạt động nhưng tín hiệu yếu'],
        ['Đỏ', 'Kết nối kém \u2014 không bắt đầu đào tạo, di chuyển nút']
      ]
    }
  },
  {
    title: 'Quản Lý Ghi Hình',
    image: '/img/vts-guide/view-recordings.png',
    content: 'Truy cập và quản lý các buổi đào tạo đã ghi.',
    steps: [
      'Nhấp nút "Mở Thư Mục Ghi Hình" để truy cập bản ghi đã lưu',
      'Bản ghi được lưu trong thư mục đã chỉ định trong Cài đặt/Ghi hình/Thư mục',
      'Tất cả luồng camera được ghi đồng thời và đồng bộ',
      'Phát lại bản ghi để xem lại sau đào tạo và huấn luyện học viên',
      'Sử dụng bản ghi để đánh giá và phản hồi cải thiện'
    ]
  },
  {
    title: 'Trạng Thái Hệ Thống Thoại',
    image: '/img/vts-guide/qs-op-voice-status.png',
    content: 'Theo dõi giao tiếp thoại qua chỉ số Thoại trong thanh công cụ. Biểu tượng điện thoại và màu sắc hiển thị trạng thái kết nối, trong khi các thanh âm thanh chỉ hoạt động thoại.',
    note: 'T = Huấn luyện viên, M = Máy/Học viên.',
    steps: [
      'Biểu tượng điện thoại với màu sắc hiển thị trạng thái kết nối (Xanh/Cam/Đỏ)',
      'Các thanh âm thanh chỉ hoạt động thoại khi nói',
      'Mức pin hiển thị khi tai nghe đã kết nối',
      'Trạng thái hệ thống hiển thị xanh khi kênh thoại sẵn sàng'
    ],
    link: {
      text: 'Hướng Dẫn Xử Lý Sự Cố →',
      url: '/docs/argus-software/voice-system'
    },
    table: {
      headers: ['Chỉ Số', 'Trạng Thái'],
      rows: [
        ['Xanh', 'Kênh thoại đã kết nối và sẵn sàng'],
        ['Cam', 'Tai nghe chưa kết nối hoặc đang khởi động'],
        ['Đỏ', 'Lỗi kết nối - kiểm tra ghép đôi tai nghe']
      ]
    }
  },
  {
    title: 'Sẵn Sàng Đào Tạo!',
    image: '/img/vts-guide/qs-op-ready.png',
    content: 'Hệ thống Argus VTS của bạn hiện hoàn toàn hoạt động và sẵn sàng cho hoạt động đào tạo. Hệ thống sẽ tự động duy trì kết nối mesh và luồng camera trong quá trình sử dụng.',
    noNumbers: true,
    steps: [
      '✅ Tất cả luồng camera đang phát trực tiếp',
      '✅ Sức khỏe mạng được theo dõi',
      '✅ Khả năng ghi hình sẵn sàng',
      '✅ Giao tiếp thoại đang hoạt động',
      '✅ Hệ thống đang duy trì kết nối'
    ]
  }
];

const slidesEs = [
  {
    title: 'Distribución del Área de Entrenamiento',
    image: '/img/vts-guide/example-map.png',
    content: 'Ejemplo de distribución del área de entrenamiento mostrando el posicionamiento óptimo. El mapa ilustra la posición del instructor, ubicaciones de los nodos y el área operacional del vehículo para una planificación eficaz del despliegue.',
    steps: [
      'Posición del instructor fuera del camino del vehículo',
      'Ubicaciones del nodo del instructor y nodo repetidor posicionadas para cobertura',
      'Área operacional del vehículo claramente definida',
      'Distancias seguras mantenidas para el posicionamiento del instructor'
    ]
  },
  {
    title: 'Lanzar Software Argus',
    image: '/img/vts-guide/qs-op-launch-argus.png',
    content: 'Abra el software Argus en la tableta del instructor.',
    steps: [
      'Ubique el software Argus (generalmente fijado en la barra de tareas o menú de inicio)',
      'Lance la aplicación',
      'Espere 10-15 segundos para que el software se inicialice',
      'El software detectará y se conectará automáticamente a todas las cámaras',
      'Los 4 flujos de cámara deberían comenzar a transmitir automáticamente'
    ]
  },
  {
    title: 'Descripción General de la Interfaz Argus',
    image: '/img/vts-guide/qs-op-interface-overview.png',
    content: 'La interfaz Argus proporciona todos los controles necesarios para las operaciones de entrenamiento.',
    table: {
      headers: ['Control', 'Función'],
      rows: [
        ['A. Insignia de Versión', 'Haga clic para verificar actualizaciones'],
        ['B. Monitor de Salud de Red', 'Ver estado de la red mesh'],
        ['C. Voz', 'Abrir panel de control del sistema de voz'],
        ['D. Grabación y Galería', 'Iniciar/detener grabación y abrir carpeta de grabaciones'],
        ['E. Cambiar Vista', 'Alternar diseño de cuadrícula de cámaras'],
        ['F. Ajustes/Minimizar/Cerrar', 'Controles de la aplicación']
      ]
    }
  },
  {
    title: 'Ver Flujos de Cámara',
    image: '/img/vts-guide/qs-op-full-screen.png',
    content: 'Una vez que la aplicación está abierta con el sistema conectado, los cuatro flujos de cámara comenzarán a transmitir automáticamente.',
    steps: [
      'Los 4 flujos de cámara aparecen en la barra lateral',
      'Cada flujo muestra video en vivo desde su posición montada',
      'Los flujos se actualizan en tiempo real',
      'Toque dos veces cualquier flujo para ver en pantalla completa, toque dos veces para regresar'
    ]
  },
  {
    title: 'Iniciar Grabación',
    image: '/img/vts-guide/start-recording.png',
    content: 'Grabe todos los flujos de cámara simultáneamente para revisión y entrenamiento post-sesión.',
    steps: [
      'Haga clic en el botón "Iniciar Grabación" en la interfaz Argus',
      'Todos los flujos de cámara conectados se grabarán simultáneamente',
      'Las grabaciones se guardan en la carpeta especificada (Ajustes/Grabación/Directorio)',
      'La grabación continúa hasta que haga clic en "Detener Grabación"',
      'Todos los ángulos de cámara se capturan sincronizados para una revisión completa'
    ]
  },
  {
    title: 'Revisión de Sesiones Grabadas',
    image: '/img/vts-guide/playback-session-list.png',
    content: 'Revise sesiones de entrenamiento grabadas directamente dentro de ARGUS sin salir de la aplicación.',
    steps: [
      'Abra Playback desde la barra de herramientas después de guardar una grabación',
      'Use Sort y View para encontrar la sesión y mostrar miniaturas más grandes cuando sea necesario',
      'Toque dos veces una sesión para reproducir todas las cámaras sincronizadas',
      'Use los controles de altavoz T y M para silenciar o activar los canales de audio del instructor y la máquina durante la reproducción',
      'Use Select para marcar una o más sesiones para eliminar; ARGUS pedirá confirmación antes de borrar archivos',
      'Toque la X roja en la barra de reproducción para volver a la vista de cámara en vivo'
    ],
    link: {
      text: 'Detalles de Session Playback ->',
      url: '/docs/argus-software/session-playback'
    }
  },  {
    title: 'Monitoreo de Salud de Red',
    image: '/img/vts-guide/mesh-status-orange-marginal.png',
    content: 'Monitoree la calidad de conexión de la red mesh en tiempo real usando el panel de salud de red ubicado en la esquina inferior derecha de la aplicación Argus.',
    steps: [
      'Revise el panel de monitoreo de salud de red (esquina inferior izquierda)',
      'Dé a la red un minuto para estabilizarse después de la conexión inicial',
      'Si el indicador está en naranja o rojo, reposicione los nodos relay antes de iniciar una sesión de entrenamiento'
    ],
    link: {
      text: 'Detalles del Monitor de Red Mesh \u2192',
      url: '/docs/argus-software/mesh-monitor'
    },
    table: {
      headers: ['Indicador', 'Estado'],
      rows: [
        ['Verde', 'Calidad de conexión óptima, transmisión de video confiable'],
        ['Naranja', 'Conexión marginal \u2014 funcional pero señal débil'],
        ['Rojo', 'Conexión deficiente \u2014 no comience el entrenamiento, reposicione nodos']
      ]
    }
  },
  {
    title: 'Gestión de Grabaciones',
    image: '/img/vts-guide/view-recordings.png',
    content: 'Acceda y gestione sus sesiones de entrenamiento grabadas.',
    steps: [
      'Haga clic en el botón "Abrir Directorio de Grabaciones" para acceder a las grabaciones guardadas',
      'Las grabaciones se almacenan en la carpeta especificada en Ajustes/Grabación/Directorio',
      'Todos los flujos de cámara se graban simultáneamente y sincronizados',
      'Reproduzca las grabaciones para revisión post-entrenamiento y entrenamiento del operador',
      'Use las grabaciones para evaluación y retroalimentación de mejora'
    ]
  },
  {
    title: 'Estado del Sistema de Voz',
    image: '/img/vts-guide/qs-op-voice-status.png',
    content: 'Monitoree la comunicación de voz a través del indicador de Voz en la barra de herramientas. El ícono de teléfono e indicador de color muestran el estado de conexión, mientras que las barras de sonido indican actividad de voz.',
    note: 'I = Instructor, M = Máquina/Operador en Formación.',
    steps: [
      'Ícono de teléfono con color muestra estado de conexión (Verde/Naranja/Rojo)',
      'Las barras de sonido indican actividad de voz al hablar',
      'Nivel de batería mostrado cuando los auriculares están conectados',
      'El estado del sistema muestra verde cuando el canal de voz está listo'
    ],
    link: {
      text: 'Guía de Solución de Problemas →',
      url: '/docs/argus-software/voice-system'
    },
    table: {
      headers: ['Indicador', 'Estado'],
      rows: [
        ['Verde', 'Canal de voz conectado y listo'],
        ['Naranja', 'Auricular no conectado o inicializando'],
        ['Rojo', 'Error de conexión - verifique el emparejamiento del auricular']
      ]
    }
  },
  {
    title: '¡Listo para Entrenar!',
    image: '/img/vts-guide/qs-op-ready.png',
    content: 'Su sistema Argus VTS ahora está completamente operacional y listo para las operaciones de entrenamiento. El sistema mantendrá automáticamente las conexiones mesh y los flujos de cámara durante el uso.',
    noNumbers: true,
    steps: [
      '✅ Todos los flujos de cámara están transmitiendo',
      '✅ La salud de red está siendo monitoreada',
      '✅ La capacidad de grabación está lista',
      '✅ La comunicación de voz está activa',
      '✅ El sistema está manteniendo las conexiones'
    ]
  }
];

export default function OperationQuickStart() {
  const bannerUrl = useBaseUrl('/img/vts-guide/main-banner.png');
  const {i18n: {currentLocale}} = useDocusaurusContext();
  const slides = currentLocale === 'vi' ? slidesVi : currentLocale === 'es' ? slidesEs : slidesEn;

  return (
    <Layout title="Operation - Quick Start" description="Learn how to use the Argus software and operate the VTS system">
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


