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
    image: '/img/vts-guide/launch-argus.png',
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
    image: '/img/vts-guide/argus-overview.png',
    content: 'The Argus interface provides all the controls you need for training operations.',
    table: {
      headers: ['Control', 'Function'],
      rows: [
        ['A. Version Badge', 'Click to check for updates'],
        ['B. Recording Button', 'Start/stop recording all feeds'],
        ['C. Gallery', 'Open recordings folder'],
        ['D. Voice', 'Open Voice System Control panel'],
        ['E. Switch View', 'Toggle camera grid layout'],
        ['F. Settings/Minimize/Close', 'Application controls'],
        ['G. Network Health Monitor', 'View mesh network status']
      ]
    }
  },
  {
    title: 'Viewing Camera Feeds',
    image: '/img/vts-guide/argus-software.png',
    content: 'Once the app is open with the system connected, the four camera feeds will start streaming automatically.',
    steps: [
      'All 4 camera feeds appear in the sidebar',
      'Each feed shows live video from its mounted position',
      'Feeds update in real-time',
      'You can see all cameras simultaneously or focus on specific views'
    ]
  },
  {
    title: 'Full Screen View',
    image: '/img/vts-guide/argus-app-full-screen.png',
    content: 'To view a camera feed in full screen for detailed observation.',
    steps: [
      'Double-tap any sidebar video feed',
      'That camera will expand to full screen view',
      'Double-tap again to return to multi-view',
      'Use this for detailed monitoring of specific operations'
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
    title: 'Network Health Monitoring',
    image: '/img/vts-guide/network-health.png',
    content: 'Monitor the mesh network connection quality in real-time using the network health panel located in the lower right corner of the Argus application.',
    steps: [
      'Check the network health monitoring panel (lower left corner)',
      'Give network a minutes to stabilise after initial connection'
    ],
    table: {
      headers: ['Indicator', 'Status'],
      rows: [
        ['Green', 'Optimal connection quality, video streaming reliable'],
        ['Orange', 'Functional connection, working but not optimal'],
        ['Red', 'Poor connection, significant issues may occur']
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
    image: '/img/vts-guide/voice-system.png',
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
    image: '/img/vts-guide/ready-for-training.png',
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
    image: '/img/vts-guide/launch-argus.png',
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
    image: '/img/vts-guide/argus-overview.png',
    content: 'Giao diện Argus cung cấp tất cả các điều khiển bạn cần cho hoạt động đào tạo.',
    table: {
      headers: ['Điều Khiển', 'Chức Năng'],
      rows: [
        ['A. Huy hiệu phiên bản', 'Nhấp để kiểm tra cập nhật'],
        ['B. Nút ghi hình', 'Bắt đầu/dừng ghi tất cả luồng'],
        ['C. Thư viện', 'Mở thư mục ghi hình'],
        ['D. Thoại', 'Mở bảng điều khiển hệ thống thoại'],
        ['E. Chuyển chế độ xem', 'Chuyển đổi bố cục lưới camera'],
        ['F. Cài đặt/Thu nhỏ/Đóng', 'Điều khiển ứng dụng'],
        ['G. Theo Dõi Sức Khỏe Mạng', 'Xem trạng thái mạng mesh']
      ]
    }
  },
  {
    title: 'Xem Luồng Camera',
    image: '/img/vts-guide/argus-software.png',
    content: 'Khi ứng dụng mở với hệ thống đã kết nối, bốn luồng camera sẽ tự động bắt đầu phát.',
    steps: [
      'Tất cả 4 luồng camera xuất hiện trong thanh bên',
      'Mỗi luồng hiển thị video trực tiếp từ vị trí lắp đặt',
      'Luồng cập nhật theo thời gian thực',
      'Bạn có thể xem tất cả camera đồng thời hoặc tập trung vào chế độ xem cụ thể'
    ]
  },
  {
    title: 'Chế Độ Xem Toàn Màn Hình',
    image: '/img/vts-guide/argus-app-full-screen.png',
    content: 'Để xem luồng camera ở chế độ toàn màn hình để quan sát chi tiết.',
    steps: [
      'Chạm đôi vào bất kỳ luồng video nào trong thanh bên',
      'Camera đó sẽ mở rộng ra chế độ xem toàn màn hình',
      'Chạm đôi lại để quay về chế độ nhiều camera',
      'Dùng để theo dõi chi tiết các hoạt động cụ thể'
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
    title: 'Theo Dõi Sức Khỏe Mạng',
    image: '/img/vts-guide/network-health.png',
    content: 'Theo dõi chất lượng kết nối mạng mesh theo thời gian thực bằng bảng theo dõi ở góc dưới bên phải của ứng dụng Argus.',
    steps: [
      'Kiểm tra bảng theo dõi sức khỏe mạng (góc dưới bên trái)',
      'Cho mạng một phút để ổn định sau khi kết nối ban đầu'
    ],
    table: {
      headers: ['Chỉ Số', 'Trạng Thái'],
      rows: [
        ['Xanh', 'Chất lượng kết nối tối ưu, truyền video đáng tin cậy'],
        ['Cam', 'Kết nối hoạt động, nhưng chưa tối ưu'],
        ['Đỏ', 'Kết nối kém, có thể xảy ra các vấn đề đáng kể']
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
    image: '/img/vts-guide/voice-system.png',
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
    image: '/img/vts-guide/ready-for-training.png',
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

export default function OperationQuickStart() {
  const bannerUrl = useBaseUrl('/img/vts-guide/main-banner.png');
  const {i18n: {currentLocale}} = useDocusaurusContext();
  const slides = currentLocale === 'vi' ? slidesVi : slidesEn;

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
