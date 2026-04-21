---
sidebar_position: 2
---

# Hệ Thống Thoại

Phần mềm Argus bao gồm hệ thống giao tiếp thoại tích hợp cho phép giao tiếp âm thanh hai chiều thời gian thực giữa huấn luyện viên (trên máy tính bảng) và học viên (trên máy). Tính năng này sử dụng tai nghe Bluetooth để hoạt động rảnh tay trong suốt buổi đào tạo.

## Tổng Quan

Hệ thống thoại gồm hai thành phần chính:

| Thành Phần | Vị Trí | Mục Đích |
|-----------|----------|---------|
| **Tai Nghe Huấn Luyện Viên** | Máy Tính Bảng/Trạm Mặt Đất | Cho phép huấn luyện viên nói chuyện và nghe học viên |
| **Tai Nghe Học Viên** | Máy/Nút Hyperion | Cho phép học viên nhận hướng dẫn và phản hồi |

## Bảng Điều Khiển Hệ Thống Thoại

Truy cập bảng điều khiển Hệ Thống Thoại bằng cách nhấp nút **Thoại** trên thanh công cụ chính.

<div class="image-wrapper-50">
  ![Bảng Điều Khiển Hệ Thống Thoại](/img/vts-guide/voice-system-control.png)
  *Bảng điều khiển Hệ Thống Thoại hiển thị trạng thái hệ thống và các mục tai nghe*
</div>

### Mục Trạng Thái Hệ Thống

Mục **Trạng Thái Hệ Thống** có thể thu gọn hiển thị:

- **Trạng Thái Server Thoại**: Hiển thị server thoại có đang chạy không (Trực Tuyến/Ngoại Tuyến)
- **Trạng Thái Nút Máy**: Trạng thái kết nối với nút Hyperion của máy
- **Trạng Thái WiFi Mesh**: Kết nối với mạng mesh ARGUS-VTS
- **IP Server**: Địa chỉ IP của server thoại
- **Thời Gian Hoạt Động**: Server thoại đã chạy bao lâu

Nhấp **Chạy Chẩn Đoán** để kiểm tra kết nối hệ thống thoại.

### Tai Nghe Huấn Luyện Viên (Máy Tính Bảng)

Mục này quản lý tai nghe Bluetooth được kết nối với máy tính bảng huấn luyện viên:

1. **Bật Bluetooth**: Mở Cài Đặt Nhanh Bluetooth Windows để ghép nối tai nghe
2. **Thông Tin Thiết Bị Đã Kết Nối**: Hiển thị tên tai nghe đã ghép nối và mức pin
3. **Kiểm Tra Âm Thanh**: Phát âm thanh thử để xác nhận đầu ra âm thanh

:::tip
Nếu không có tai nghe Bluetooth được kết nối, hệ thống sẽ tự động sử dụng loa và micro tích hợp của máy tính bảng như dự phòng.
:::

### Tai Nghe Học Viên (Máy)

Mục này quản lý tai nghe được kết nối với nút Hyperion của máy:

1. **Quét**: Quét các thiết bị Bluetooth khả dụng trên nút máy
2. **Danh Sách Thiết Bị**: Hiển thị các thiết bị tìm thấy - nhấp thiết bị để chọn
3. **Liên Kết**: Kết nối thiết bị đã chọn với nút máy
4. **Chỉ Báo Pin**: Hiển thị mức pin tai nghe học viên
5. **Kiểm Tra Âm Thanh**: Phát âm thanh thử trên tai nghe học viên

## Cách Sử Dụng

<div class="image-wrapper-50">
  ![Khởi Động Hệ Thống Thoại](/img/vts-guide/qs-op-voice-status.png)
  *Quy trình khởi động và kết nối Hệ Thống Thoại*
</div>

**Bước 1: Kết Nối Tai Nghe Huấn Luyện Viên**
1. Nhấp nút **Thoại** trên thanh công cụ
2. Trong mục Tai Nghe Huấn Luyện Viên, nhấp **Bật Bluetooth**
3. Ghép nối tai nghe Bluetooth qua cài đặt Windows
4. Tai nghe sẽ xuất hiện trong Thông Tin Thiết Bị Đã Kết Nối

**Bước 2: Kết Nối Tai Nghe Học Viên**
1. Đảm bảo nút máy đã kết nối (kiểm tra trạng thái Nút Máy)
2. Nhấp **Quét** để tìm các thiết bị Bluetooth khả dụng
3. Chọn tai nghe của học viên từ danh sách
4. Nhấp **Liên Kết** để kết nối

<div class="image-wrapper-50">
  ![Hệ Thống Thoại Đã Kết Nối](/img/vts-guide/voice-system-connected.png)
  *Hệ Thống Thoại với cả hai tai nghe đã kết nối - hiển thị mức pin*
</div>

**Bước 3: Xác Nhận Kết Nối**
1. Sử dụng **Kiểm Tra Âm Thanh** ở cả hai bên để xác nhận âm thanh
2. Kiểm tra chỉ báo trạng thái hiển thị xanh (đã kết nối)
3. Theo dõi mức pin trong suốt buổi học

## Chỉ Báo Trạng Thái

| Màu | Ý Nghĩa |
|-------|---------|
| Xanh Lá | Đã kết nối và hoạt động tốt |
| Vàng | Đang khởi tạo hoặc kết nối một phần |
| Đỏ | Mất kết nối hoặc lỗi |

## Xử Lý Sự Cố

| Vấn Đề | Giải Pháp |
|-------|----------|
| Không phát hiện tai nghe huấn luyện viên | Mở cài đặt Bluetooth Windows và đảm bảo tai nghe đã ghép nối |
| Quét tai nghe học viên không thấy thiết bị | Xác nhận Nút Máy đang trực tuyến; đặt tai nghe ở chế độ ghép nối |
| Không có âm thanh sau khi kết nối | Chạy Kiểm Tra Âm Thanh; xác nhận mức pin tai nghe |
| Kết nối không ổn định | Kiểm tra cường độ tín hiệu mạng mesh; di chuyển gần điểm truy cập hơn |
