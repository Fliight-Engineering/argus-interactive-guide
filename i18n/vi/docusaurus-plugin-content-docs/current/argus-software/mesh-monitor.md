---
sidebar_position: 4
---

# Giám Sát Mạng Mesh

Phần mềm Argus bao gồm tính năng giám sát mạng mesh theo thời gian thực, hiển thị trạng thái kết nối giữa máy tính bảng huấn luyện viên, các nút relay và máy. Tính năng này giúp bạn nhanh chóng xác định tình trạng mạng trước và trong suốt buổi đào tạo.

## Cách Mở

Trạng thái mạng mesh luôn hiển thị trên thanh công cụ phía trên. Nhấp vào chỉ báo trạng thái mesh để mở bảng Mạng Mesh đầy đủ.

<div class="image-wrapper-90">
  ![Vị trí giám sát mesh trên thanh công cụ](/img/vts-guide/mesh-nav.png)
  *Chỉ báo trạng thái mesh nằm trên thanh công cụ phía trên — nhấp vào để mở bảng đầy đủ*
</div>

---

## Thanh Trạng Thái

Trạng thái mạng mesh luôn hiển thị trên thanh công cụ phía trên. Thanh này cho thấy tuyến đường hiện tại từ máy về máy tính bảng của bạn.

### Xanh — Đã Kết Nối

Mạng đang hoạt động tốt. Tuyến đường hiển thị cho biết tín hiệu di chuyển từ máy (M) về máy tính bảng như thế nào.

<div class="image-wrapper-70">
  ![Trạng thái mesh xanh - kết nối trực tiếp](/img/vts-guide/mesh-status-green-direct.png)
  *Kết nối trực tiếp: Máy → Cổng → Máy tính bảng*
</div>

Nếu tuyến đường đi qua các nút relay, chúng sẽ xuất hiện trong chuỗi:

<div class="image-wrapper-70">
  ![Trạng thái mesh xanh - tuyến relay](/img/vts-guide/mesh-status-green-relay.png)
  *Tuyến relay: Máy → R2 → R → Cổng → Máy tính bảng*
</div>

:::tip
Tuyến relay hoàn toàn bình thường khi làm việc dưới lòng đất. Miễn là chỉ báo màu xanh, kết nối vẫn đang hoạt động tốt.
:::

### Cam — Chất Lượng Trung Bình

Mạng đã kết nối nhưng chất lượng liên kết ở mức trung bình. Tín hiệu yếu hơn mức lý tưởng — hệ thống vẫn hoạt động, nhưng bạn có thể thấy chất lượng video giảm hoặc gián đoạn ngắn.

<div class="image-wrapper-70">
  ![Trạng thái mesh cam - chất lượng trung bình](/img/vts-guide/mesh-status-orange-marginal.png)
  *Chất lượng kết nối trung bình — liên kết hoạt động nhưng tín hiệu yếu*
</div>

:::note
Trạng thái cam thường gặp khi máy ở rìa vùng phủ sóng hoặc có vật cản giữa các nút. Hãy cân nhắc di chuyển nút relay nếu tình trạng này kéo dài.
:::

### Đỏ — Chất Lượng Kém

Kết nối mạng rất kém. Truyền video và giao tiếp thoại có thể không hoạt động ổn định ở mức này. Cần xử lý trước khi bắt đầu hoặc tiếp tục buổi đào tạo.

:::warning
Nếu thanh trạng thái màu đỏ, không bắt đầu buổi đào tạo. Di chuyển nút relay hoặc đưa máy lại gần hơn để cải thiện tín hiệu trước khi tiếp tục.
:::

### Đang Quét

Phần mềm đang tìm kiếm mạng mesh. Trạng thái này xuất hiện ngắn trong khi khởi động hoặc kết nối lại.

<div class="image-wrapper-70">
  ![Trạng thái mesh đang quét](/img/vts-guide/mesh-status-scanning.png)
  *Đang tìm kiếm mạng mesh — chờ vài giây*
</div>

### Không Có Mesh

Máy tính bảng không tìm thấy mạng mesh. Kiểm tra xem máy tính bảng đã kết nối WiFi ARGUS-VTS chưa.

<div class="image-wrapper-70">
  ![Trạng thái không có mesh](/img/vts-guide/mesh-status-no-mesh.png)
  *Chưa kết nối mạng mesh*
</div>

---

## Bảng Mạng Mesh

Nhấp vào nút trạng thái mesh trên thanh công cụ để mở bảng Mạng Mesh đầy đủ.

### Tab Tổng Quan

Tab Tổng Quan cung cấp tóm tắt đơn giản về tình trạng mạng — đây là giao diện chính bạn sẽ sử dụng hàng ngày.

<div class="image-wrapper-70">
  ![Tab tổng quan mesh](/img/vts-guide/mesh-overview.png)
  *Tab Tổng Quan hiển thị tuyến đường hoạt động và trạng thái nút*
</div>

| Mục | Ý Nghĩa |
|-----|---------|
| **Trạng Thái Hệ Thống — Trực Tuyến & Hoạt Động** | Tất cả nút trong tuyến đường hoạt động đều đã kết nối và hoạt động |
| **Machine (Máy)** | Nút trên phương tiện — chấm xanh nghĩa là đang trực tuyến |
| **Trainer (Huấn Luyện Viên)** | Nút cổng ở cửa hầm — chấm xanh nghĩa là đang trực tuyến |
| **Tablet (Máy Tính Bảng)** | Thiết bị này — hiển thị lưu lượng dữ liệu hiện tại |
| **Good (Tốt)** (nhãn xanh) | Chất lượng tín hiệu trên liên kết đó chấp nhận được |
| **Marginal (Trung Bình)** (nhãn cam) | Chất lượng tín hiệu yếu — liên kết hoạt động nhưng có thể không ổn định |
| **Bad (Kém)** (nhãn đỏ) | Chất lượng tín hiệu rất kém — video và thoại có thể không hoạt động |

### Màu Sắc Chất Lượng Liên Kết

Liên kết giữa các nút hiển thị nhãn màu cho biết chất lượng tín hiệu:

| Màu | Nhãn | Ý Nghĩa |
|-----|------|---------|
| Xanh lá | Good (Tốt) | Tín hiệu mạnh và ổn định |
| Cam | Marginal (Trung Bình) | Tín hiệu yếu — có thể làm giảm chất lượng video |
| Đỏ | Bad (Kém) | Tín hiệu rất kém — cần xử lý |

### Màu Sắc Nút

Mỗi nút trong danh sách hiển thị một chấm màu cho biết trạng thái hiện tại:

| Màu | Trạng Thái |
|-----|-----------|
| Xanh lá | Trực tuyến và đã kết nối |
| Xanh dương | Thiết bị này (máy tính bảng của bạn) |
| Đỏ | Ngoại tuyến hoặc không thể kết nối |

### Tab Nâng Cao

Tab Nâng Cao hiển thị thông tin chi tiết về từng bước nhảy trong tuyến đường hoạt động, bao gồm cường độ tín hiệu và phiên bản firmware của từng nút.

<div class="image-wrapper-70">
  ![Tab nâng cao mesh](/img/vts-guide/mesh-advanced.png)
  *Tab Nâng Cao hiển thị từng nút trong tuyến đường hoạt động với chi tiết tín hiệu*
</div>

### Các Nút Khác

Các nút thuộc mạng nhưng hiện không nằm trong tuyến đường hoạt động được liệt kê dưới **Other Nodes (Các Nút Khác)**. Đây thường là các nút relay dự phòng đang bật nguồn nhưng không cần thiết cho tuyến đường hiện tại.

<div class="image-wrapper-70">
  ![Các nút mesh khác](/img/vts-guide/mesh-other-nodes.png)
  *Các nút khác — chấm xanh nghĩa là trực tuyến, chấm đỏ nghĩa là ngoại tuyến*
</div>

---

## Phải Làm Gì Khi Mất Kết Nối

Nếu thanh trạng thái hiển thị **No Mesh** hoặc các nút xuất hiện **Offline**:

1. **Kiểm tra WiFi máy tính bảng** — Đảm bảo máy tính bảng đã kết nối mạng ARGUS-VTS-XXX (Cài đặt → WiFi)
2. **Kiểm tra nguồn điện nút** — Đi đến nút ngoại tuyến và xác nhận đèn LED nguồn đang sáng
3. **Chờ 30 giây** — Mạng có thể mất đến 30 giây để thiết lập lại tuyến đường sau khi nút bật nguồn
4. **Liên hệ hỗ trợ** — Nếu sự cố vẫn tiếp diễn, hãy liên hệ nhóm hỗ trợ Fliight

:::warning
Không bắt đầu buổi đào tạo nếu Trạng Thái Hệ Thống hiển thị bất kỳ điều gì khác ngoài **Online & Operational (Trực Tuyến & Hoạt Động)**.
:::
