import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Carousel from '@site/src/components/Carousel';
import styles from './styles.module.css';

const slidesEn = [
  {
    title: 'Overview & Pre-Deployment Check',
    image: '/img/vts-guide/kit-contents-clean.png',
    content: 'Complete setup should take around 5 minutes if properly planned.',
    steps: [
      'Ensure all batteries are charged before heading underground',
      'Verify all kit components are ready for operation',
      'Check Machine AP, Repeater APs (if needed), and all 4 cameras',
      'Verify tablet is charged and ready'
    ]
  },
  {
    title: 'Machine AP Setup - Unfold Antennas',
    image: '/img/vts-guide/machine-node-setup-2.png',
    steps: [
      'Pickup the Machine AP from the case',
      'Unfold the lower two antennas from their storage position beneath the carbon fibre plate'
    ]
  },
  {
    title: 'Machine AP Setup - Rotate Mast & Engage Locking Pin',
    image: '/img/vts-guide/machine-node-setup-3.png',
    steps: [
      'Unclip the antenna mast and rotate it upwards',
      'Pull the latch loop and engage the locking pin once the mast is in the vertical position.'
    ]
  },
  {
    title: 'Machine AP Setup - Position Antennas',
    image: '/img/vts-guide/machine-node-setup-4.png',
    steps: [
      'Rotate two of the antennas so their elbow joints point upwards',
      'Fold all antennas at their 45 degree latched position',
      "The Machine AP is now ready to be mounted and powered on."
    ]
  },
  {
    title: 'Mount Machine AP on Vehicle',
    image: '/img/vts-guide/machine-ap-rear.png',
    content: 'For underground loader training, mount the Machine AP on the rear of the vehicle on top of the radiator.',
    steps: [
      'Position on rear of vehicle, with clear line-of-sight to the camera positions',
      'Mount securely on an even metal surfaceto prevent movement during operation',
      'Verify elevated position for optimal signal propagation to other APs'
    ]
  },
  {
    title: 'Deploy Repeater APs (If Needed)',
    image: '/img/vts-guide/antennas-up-render.png',
    content: 'Repeater APs extend network coverage for safe trainer positioning at significant distances (200m+) or around corners.',
    steps: [
      'Position at height equal to or higher than Machine AP',
      'Ensure clear line of sight to other APs',
      'Mount using magnetic feet or hooks on metal surfaces',
      'Configure antennas: both up for straight runs, one up/one down for corners'
    ]
  },
  {
    title: 'Rear Camera Position',
    image: '/img/vts-guide/rcs-rear-quarter.png',
    content: 'Mount rear camera (magnetic mount) to observe:',
    steps: [
      'Overall vehicle operation from behind',
      'Ingress of any other vehicles or people into the operational area'
    ]
  },
  {
    title: 'Forward Bucket View',
    image: '/img/vts-guide/rcs-forward.png',
    content: 'Mount forward-facing camera (magnetic mount) to observe:',
    steps: [
      'Bucket positioning and movement from above',
      'Loading technique',
      'Material engagement',
      'Forward ground surface conditions'
    ]
  },
  {
    title: 'Front Side View',
    image: '/img/vts-guide/rcs-bucket-view.png',
    content: 'Mount front side camera (magnetic mount) to observe:',
    steps: [
      'Bucket approach angle',
      'Tire position relative to obstacles',
      'Side clearances',
      'Bucket cutting edge alignment'
    ]
  },
  {
    title: 'Cab Interior Camera',
    image: '/img/vts-guide/rcs-cab.png',
    content: 'Mount interior camera using suction cups on glass to observe:',
    steps: [
      'Trainee position in operator cabin',
      'Control inputs and operating technique',
      'Trainee awareness and reactions',
      'Proper cab procedures'
    ]
  },
  {
    title: 'Power On - Access Points',
    image: '/img/vts-guide/ap-power-button.png',
    content: 'CRITICAL: Always turn on Access Points FIRST before powering up cameras.',
    warning: true,
    steps: [
      'Press the large black power button firmly and release immediately',
      'Wait for access points to initialise then turn to solid green',
      'Allow 30-60 seconds for mesh network to establish'
    ]
  },
  {
    title: 'Power On - Cameras',
    image: '/img/vts-guide/rcs-power-up.png',
    content: 'Once all Access Points show solid green, power on the cameras.',
    steps: [
      'Press power button on each camera',
      'LED will illuminate red when powered',
      'Listen for faint clicking noise as lens calibrates'
    ]
  },
  {
    title: 'Power On - Tablet',
    image: '/img/vts-guide/tablet-buttons.png',
    content: 'Power on the trainer tablet PC.',
    steps: [
      'Locate power button on top edge, left-hand side (leftmost of three buttons)',
      'Press power button to turn on tablet',
      'Wait for boot sequence to complete',
      'Tablet will be ready for login'
    ]
  },
  {
    title: 'Tablet Login & App Launch',
    image: '/img/vts-guide/argus-software.png',
    content: 'Login to windows using the PIN 2580 and launch the Argus software.',
    steps: [
      'Swipe up from the lock screen to show the Argus VTS user login page',
      'Enter the Windows Tablet PIN: 2580',
      'Click the Argus applcation icon in the task bar to launch the software',
      'Wait for the software to initialise (10-15 seconds)',
      'All 4 camera feeds should start streaming automatically'
    ]
  },
  {
    title: 'Power On - Headsets',
    image: '/img/vts-guide/headset.png',
    content: 'CRITICAL: The instruction is based on our headset setup yours may be different but always turn on headset FIRST before starting Argus app.',
    warning: true,
    steps: [
      'Locate the power button on the headset (as shown in image)',
      'Press and hold the power button until the LED lights up',
      'The headset will announce "Power On" or play a tone when ready',
      'Repeat for both trainer and trainee headsets'
    ]
  },
  {
    title: 'System Verification',
    image: '/img/vts-guide/system-verification.png',
    content: 'Before beginning training operations, verify everything is working correctly.',
    noNumbers: true,
    steps: [
      '✅ All Access Points show solid green LED',
      '✅ All cameras connected',
      '✅ Tablet is connected to WiFi (ARGUS-VTS-XXX)',
      '✅ All components are powered and ready',
      '✅ Camera feeds are streaming',
      '✅ All headsets connected',
      '✅ Headsets and mics communicable'
    ]
  },
  {
    title: 'Setup Complete!',
    image: '/img/vts-guide/setup-complete-banner.png',
    content: 'Your Argus VTS system is now physically set up and powered on.',
    link: { text: 'Proceed to Operation Guide →', url: '/quick-start/operation' },
    steps: [
      'All hardware is deployed and powered',
      'Mesh network is established',
      'Cameras are connected with video streaming',
      'Headsets are connected with voice channel',
      'Ready to proceed to Operation guide'
    ]
  }
];

const slidesVi = [
  {
    title: 'Tổng Quan & Kiểm Tra Trước Triển Khai',
    image: '/img/vts-guide/kit-contents-clean.png',
    content: 'Việc cài đặt đầy đủ sẽ mất khoảng 5 phút nếu được lên kế hoạch đúng.',
    steps: [
      'Đảm bảo tất cả pin đã sạc đầy trước khi xuống mỏ',
      'Kiểm tra tất cả các thành phần trong bộ kit sẵn sàng hoạt động',
      'Kiểm tra nút radio máy, nút radio bộ lặp (nếu cần), và cả 4 camera',
      'Kiểm tra máy tính bảng đã sạc và sẵn sàng'
    ]
  },
  {
    title: 'Cài Đặt Nút Radio Máy - Mở Anten',
    image: '/img/vts-guide/machine-node-setup-2.png',
    steps: [
      'Lấy nút radio máy ra khỏi hộp',
      'Mở hai anten phía dưới từ vị trí lưu trữ bên dưới tấm carbon'
    ]
  },
  {
    title: 'Cài Đặt Nút Radio Máy - Xoay Cột & Khóa Chốt',
    image: '/img/vts-guide/machine-node-setup-3.png',
    steps: [
      'Tháo kẹp cột anten và xoay lên trên',
      'Kéo vòng chốt và cài khóa khi cột đã ở vị trí thẳng đứng.'
    ]
  },
  {
    title: 'Cài Đặt Nút Radio Máy - Định Vị Anten',
    image: '/img/vts-guide/machine-node-setup-4.png',
    steps: [
      'Xoay hai anten để khớp nối hướng lên trên',
      'Gập tất cả anten ở vị trí khóa 45 độ',
      'Nút radio máy giờ sẵn sàng để lắp và bật nguồn.'
    ]
  },
  {
    title: 'Lắp Nút Radio Máy Lên Xe',
    image: '/img/vts-guide/machine-ap-rear.png',
    content: 'Để đào tạo máy xúc dưới lòng đất, lắp nút radio máy phía sau xe trên đỉnh bộ tản nhiệt.',
    steps: [
      'Đặt ở phía sau xe, với tầm nhìn thẳng đến các vị trí camera',
      'Lắp chắc chắn trên bề mặt kim loại phẳng để tránh dịch chuyển khi vận hành',
      'Xác nhận vị trí cao để truyền tín hiệu tối ưu đến các nút radio khác'
    ]
  },
  {
    title: 'Triển Khai Nút Radio Bộ Lặp (Nếu Cần)',
    image: '/img/vts-guide/antennas-up-render.png',
    content: 'Nút radio bộ lặp mở rộng vùng phủ mạng cho vị trí an toàn của huấn luyện viên ở khoảng cách đáng kể (200m+) hoặc quanh góc khuất.',
    steps: [
      'Đặt ở độ cao bằng hoặc cao hơn nút radio máy',
      'Đảm bảo tầm nhìn thẳng đến các nút radio khác',
      'Lắp bằng chân nam châm hoặc móc trên bề mặt kim loại',
      'Cấu hình anten: cả hai hướng lên cho đường thẳng, một lên/một xuống cho góc khuất'
    ]
  },
  {
    title: 'Vị Trí Camera Phía Sau',
    image: '/img/vts-guide/rcs-rear-quarter.png',
    content: 'Lắp camera phía sau (gắn từ tính) để quan sát:',
    steps: [
      'Vận hành tổng thể của xe từ phía sau',
      'Xe khác hoặc người vào khu vực hoạt động'
    ]
  },
  {
    title: 'Góc Nhìn Gầu Phía Trước',
    image: '/img/vts-guide/rcs-forward.png',
    content: 'Lắp camera hướng về phía trước (gắn từ tính) để quan sát:',
    steps: [
      'Vị trí và chuyển động của gầu từ phía trên',
      'Kỹ thuật xúc tải',
      'Tiếp xúc với vật liệu',
      'Điều kiện bề mặt mặt đất phía trước'
    ]
  },
  {
    title: 'Góc Nhìn Cạnh Bên Phía Trước',
    image: '/img/vts-guide/rcs-bucket-view.png',
    content: 'Lắp camera cạnh bên phía trước (gắn từ tính) để quan sát:',
    steps: [
      'Góc tiếp cận của gầu',
      'Vị trí lốp so với chướng ngại vật',
      'Khoảng hở hai bên',
      'Căn chỉnh lưỡi cắt của gầu'
    ]
  },
  {
    title: 'Camera Bên Trong Cabin',
    image: '/img/vts-guide/rcs-cab.png',
    content: 'Lắp camera bên trong bằng giác hút trên kính để quan sát:',
    steps: [
      'Vị trí học viên trong cabin vận hành',
      'Thao tác điều khiển và kỹ thuật vận hành',
      'Nhận thức và phản xạ của học viên',
      'Quy trình cabin đúng cách'
    ]
  },
  {
    title: 'Bật Nguồn - Các Nút Radio',
    image: '/img/vts-guide/ap-power-button.png',
    content: 'QUAN TRỌNG: Luôn bật nút radio TRƯỚC khi bật camera.',
    warning: true,
    steps: [
      'Nhấn nút nguồn đen lớn chắc chắn và thả ra ngay',
      'Đợi các nút radio khởi động rồi chuyển sang xanh liên tục',
      'Chờ 30-60 giây để mạng mesh thiết lập'
    ]
  },
  {
    title: 'Bật Nguồn - Camera',
    image: '/img/vts-guide/rcs-power-up.png',
    content: 'Khi tất cả nút radio hiển thị xanh liên tục, bật camera.',
    steps: [
      'Nhấn nút nguồn trên mỗi camera',
      'Đèn LED sẽ sáng đỏ khi được bật',
      'Nghe tiếng click nhỏ khi ống kính hiệu chỉnh'
    ]
  },
  {
    title: 'Bật Nguồn - Máy Tính Bảng',
    image: '/img/vts-guide/tablet-buttons.png',
    content: 'Bật máy tính bảng của huấn luyện viên.',
    steps: [
      'Tìm nút nguồn ở cạnh trên, phía bên trái (nút ngoài cùng bên trái trong ba nút)',
      'Nhấn nút nguồn để bật máy tính bảng',
      'Đợi quá trình khởi động hoàn tất',
      'Máy tính bảng sẵn sàng để đăng nhập'
    ]
  },
  {
    title: 'Đăng Nhập Máy Tính Bảng & Khởi Chạy Ứng Dụng',
    image: '/img/vts-guide/argus-software.png',
    content: 'Đăng nhập Windows bằng mã PIN 2580 và khởi chạy phần mềm Argus.',
    steps: [
      'Vuốt lên từ màn hình khóa để hiển thị trang đăng nhập Argus VTS',
      'Nhập mã PIN máy tính bảng Windows: 2580',
      'Nhấp vào biểu tượng ứng dụng Argus trên thanh taskbar để khởi chạy',
      'Đợi phần mềm khởi động (10-15 giây)',
      'Tất cả 4 luồng camera sẽ tự động bắt đầu phát trực tiếp'
    ]
  },
  {
    title: 'Bật Nguồn - Tai Nghe',
    image: '/img/vts-guide/headset.png',
    content: 'QUAN TRỌNG: Hướng dẫn dựa trên cài đặt tai nghe của chúng tôi, của bạn có thể khác nhưng luôn bật tai nghe TRƯỚC khi khởi động ứng dụng Argus.',
    warning: true,
    steps: [
      'Tìm nút nguồn trên tai nghe (như hình)',
      'Nhấn và giữ nút nguồn cho đến khi đèn LED sáng',
      'Tai nghe sẽ thông báo "Bật nguồn" hoặc phát âm thanh khi sẵn sàng',
      'Lặp lại cho cả tai nghe huấn luyện viên và học viên'
    ]
  },
  {
    title: 'Xác Nhận Hệ Thống',
    image: '/img/vts-guide/system-verification.png',
    content: 'Trước khi bắt đầu hoạt động đào tạo, xác nhận mọi thứ hoạt động đúng.',
    noNumbers: true,
    steps: [
      '✅ Tất cả nút radio hiển thị đèn LED xanh liên tục',
      '✅ Tất cả camera đã kết nối',
      '✅ Máy tính bảng đã kết nối WiFi (ARGUS-VTS-XXX)',
      '✅ Tất cả thành phần đã được bật và sẵn sàng',
      '✅ Luồng camera đang phát trực tiếp',
      '✅ Tất cả tai nghe đã kết nối',
      '✅ Tai nghe và mic có thể liên lạc'
    ]
  },
  {
    title: 'Cài Đặt Hoàn Tất!',
    image: '/img/vts-guide/setup-complete-banner.png',
    content: 'Hệ thống Argus VTS của bạn đã được cài đặt vật lý và bật nguồn.',
    link: { text: 'Tiến hành Hướng Dẫn Vận Hành →', url: '/quick-start/operation' },
    steps: [
      'Tất cả phần cứng đã triển khai và bật nguồn',
      'Mạng mesh đã được thiết lập',
      'Camera đã kết nối với luồng video',
      'Tai nghe đã kết nối với kênh thoại',
      'Sẵn sàng tiến hành hướng dẫn vận hành'
    ]
  }
];

export default function SetupQuickStart() {
  const bannerUrl = useBaseUrl('/img/vts-guide/main-banner.png');
  const {i18n: {currentLocale}} = useDocusaurusContext();
  const slides = currentLocale === 'vi' ? slidesVi : slidesEn;

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
