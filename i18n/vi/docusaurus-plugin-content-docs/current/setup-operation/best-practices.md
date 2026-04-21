---
sidebar_position: 6
---

# Thực Hành Tốt Nhất

<div class="best-practices-intro">

Phần này cung cấp hướng dẫn thực hành tốt nhất để sử dụng Argus VTS. Nếu lên kế hoạch trước, việc cài đặt hệ thống chỉ mất khoảng **5 phút**.

</div>

## Các Thực Hành Cốt Lõi

<div class="best-practices-grid">

<div class="best-practice-card">

### Khoảng Cách Nút Radio Tối Thiểu

<div class="card-content">

**Khoảng cách tối thiểu** giữa hai nút radio tĩnh là **30 mét** để tránh nhiễu sóng ảnh hưởng đến độ tin cậy phát trực tiếp.

<div class="card-highlight">

**Điểm Chính**: Gần hơn 30m có thể gây nhiễu và giảm chất lượng video.

</div>

</div>

</div>

<div class="best-practice-card">

### Định Vị Nút Radio

<div class="card-content">

Khi gắn nút radio vào lưới kim loại hàn, đảm bảo:

- **Không đặt ở chỗ lõm tường** — ảnh hưởng tầm nhìn đến các nút lân cận
- **Ở điểm ngoài cùng của tường** — lý tưởng để truyền tín hiệu
- **Cao hơn nút radio máy** — yêu cầu tối thiểu để phủ sóng tối ưu

</div>

</div>

<div class="best-practice-card">

### Giám Sát Kết Nối

<div class="card-content">

1. **Kiểm Tra Ứng Dụng Argus** (góc dưới bên phải) để xem trạng thái mạng
2. **Chờ 1-2 phút** — mạng cần thời gian để ổn định
3. **Nếu hiệu suất kém** — định vị lại nút radio và thử lại

<div class="card-highlight">

**Mẹo**: Cho mạng mesh thời gian thiết lập kết nối trước khi điều chỉnh.

</div>

</div>

</div>

<div class="best-practice-card">

### Khoảng Cách Nút Radio Huấn Luyện Viên

<div class="card-content">

Triển khai nút radio huấn luyện viên càng xa máy tính bảng càng tốt để có vùng phủ hoạt động tốt nhất trong khi vẫn duy trì tầm nhìn thẳng với máy tính bảng.

:::note Giám Sát Huấn Luyện Viên
Huấn luyện viên có thể theo dõi từ khoảng cách an toàn/chiến lược hơn trong khi vẫn duy trì toàn bộ kiểm soát hệ thống.
:::

</div>

</div>

<div class="best-practice-card">

### Bật Nguồn Nút Radio/RCS

<div class="card-content">

Nếu nút radio hoặc RCS có vẻ không bật nguồn:

- Sử dụng **một lần nhấn và thả chắc chắn**
- Cho thiết bị thời gian khởi động (10-15 giây)
- Theo dõi thay đổi trạng thái LED

<div class="card-highlight">

**Vấn Đề Thường Gặp**: Nhấn nhiều lần nhanh có thể ngăn chuỗi khởi động đúng cách.

</div>

</div>

</div>

</div>

## Giám Sát Tình Trạng Mạng

<div class="best-practice-card best-practice-card-full">

### Bảng Giám Sát Tình Trạng Mạng

<div class="card-content">

Bảng giám sát tình trạng mạng (nằm ở **góc dưới bên phải** của Ứng Dụng Argus) cung cấp phương tiện đơn giản và trực quan để đánh giá hiệu suất mạng trực tiếp.

<div class="image-wrapper-70">
  ![Giám Sát Kết Nối](/img/vts-guide/network-health.png)
  *Bảng Giám Sát Tình Trạng Mạng trong Ứng Dụng Argus (góc dưới bên phải)*
</div>

Đối với cả hai băng tần mạng (**wlan0**: 2.4GHz và **wlan1**: 5GHz), các giá trị chi phí được báo cáo với chỉ báo màu sắc.

### Hiểu Các Chỉ Báo

| Chỉ Báo | Trạng Thái | Ý Nghĩa |
|-----------|-------|---------------|
| **Xanh Lá** | Tối Ưu | Chất lượng kết nối tuyệt vời, phát video đáng tin cậy |
| **Cam** | Hoạt Động | Kết nối hoạt động nhưng không tối ưu |
| **Đỏ** | Kém | Vấn đề kết nối đáng kể |

:::tip Kiểm Tra Nhanh
Nếu thấy chỉ báo đỏ, cách khắc phục phổ biến nhất là định vị lại nút radio để cải thiện tầm nhìn thẳng. Ngay cả những điều chỉnh nhỏ cũng có thể tạo ra sự khác biệt đáng kể.
:::

</div>

</div>

## Cấu Hình Nâng Cao

<div class="best-practice-card best-practice-card-full">

### Mở Rộng Vùng Phủ Quanh Góc Khuất

<div class="card-content">

Để mở rộng vùng phủ VTS quanh các góc khuất:

<div class="image-wrapper-70">
  ![Cấu Hình AP Bộ Lặp Góc Khuất](/img/vts-guide/antennas-ouod.png)
  *Một anten lên và một anten xuống, để cung cấp tín hiệu quanh góc khuất*
</div>

1. **Đặt nút radio huấn luyện viên hoặc bộ lặp ở góc khuất**
2. **Định hướng hai anten một cách chiến lược**:
   - **Anten 1**: Hướng về đường di chuyển xe (cung cấp vùng phủ)
   - **Anten 2**: Hướng về nút radio tĩnh trước đó với tầm nhìn thẳng (duy trì kết nối mạng)

Cấu hình này cho phép hệ thống "uốn" quanh các góc và mở rộng vùng phủ vào các khu vực không có tầm nhìn thẳng.

</div>

</div>

<div class="best-practice-card best-practice-card-full">

### Vận Hành Máy Tính Bảng Argus

<div class="card-content">

<div class="image-wrapper-70">
  ![Chế Độ Toàn Màn Hình Argus](/img/vts-guide/qs-op-full-screen.png)
  *Argus toàn màn hình hiển thị nhiều luồng camera và giao diện điều khiển*
</div>

Sau khi ứng dụng mở với hệ thống đã kết nối, bốn luồng camera sẽ tự động bắt đầu phát.

**Để xem luồng camera toàn màn hình**: Nhấp đúp vào bất kỳ video bên cạnh nào

Giao diện cung cấp:

1. **Bắt đầu ghi** tất cả luồng camera vào thư mục đã chỉ định (Cài Đặt/Ghi Hình/Thư Mục)
2. **Nút điều chỉnh chế độ xem camera nhanh**
3. **Mở thư mục lưu trữ bản ghi** trong Explorer
4. **Cài Đặt Ứng Dụng**
5. **Nút mở rộng và đóng ứng dụng**
6. **Bảng Giám Sát Tình Trạng Mạng**

</div>

</div>
