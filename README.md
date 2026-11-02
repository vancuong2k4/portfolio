# Portfolio cá nhân — Trần Văn Cường

Mã nguồn trang portfolio cá nhân của mình, được triển khai trực tiếp tại: **[vancuong-official.id.vn](https://www.vancuong-official.id.vn)**.

Dự án được xây dựng bằng **React 19**, **TypeScript**, **Tailwind CSS v4** và **Vite**.

---

## Mục đích dự án

Trang web này mình tạo ra với mục tiêu:
- Giới thiệu bản thân, kỹ năng và các dự án thực tế mình đã tham gia phát triển (Full-stack, Mobile App, Frontend).
- Chia sẻ hành trình học tập, kinh nghiệm làm việc và định hướng phát triển bản thân.
- Cung cấp kênh liên hệ trực tiếp cho nhà tuyển dụng hoặc khách hàng có nhu cầu hợp tác.

---

## Công nghệ sử dụng

- **Nền tảng chính:** React 19, TypeScript, Vite
- **Giao diện & Styling:** Tailwind CSS v4 (thiết kế theo phong cách tối giản đen trắng - Monochrome)
- **Hiệu ứng chuyển động:** Framer Motion, Canvas Confetti
- **Bộ icon:** Lucide React & bộ icon SVG nhận diện công nghệ tự định nghĩa
- **Đo lường & Phân tích:** Vercel Web Analytics
- **Hosting & Tên miền:** Vercel, trỏ DNS tên miền cá nhân `.id.vn`

---

## Một số điểm nổi bật trong mã nguồn

- **Giao diện Dark / Light:** Tự động nhận diện theme mặc định của thiết bị, hỗ trợ nút bấm chuyển đổi thủ công và lưu trạng thái vào `localStorage`.
- **Tối ưu hiệu năng trên di động:** Sự kiện cuộn trang (scroll) và hiệu ứng ánh sáng spotlight được xử lý qua `requestAnimationFrame` và ref throttling, giúp hạn chế re-render thừa và giữ khung hình ổn định 60fps khi lướt trên điện thoại.
- **Phân loại dự án linh hoạt:** Hỗ trợ lọc dự án theo từng nhóm (Full-Stack, Mobile, Frontend, Backend) kèm modal hiển thị chi tiết kiến trúc giải pháp.
- **Bảo vệ tài sản hình ảnh:** Ảnh đại diện và logo được áp dụng lớp chặn kéo thả và vô hiệu hóa menu chuột phải cơ bản để tránh bị sao chép tùy tiện.
- **Form liên hệ tiện lợi:** Tích hợp dịch vụ Web3Forms nhận tin nhắn trực tiếp qua email, kèm tính năng 1-chạm sao chép nhanh số điện thoại và địa chỉ email.
- **Chuẩn SEO & Chia sẻ:** Cấu hình đầy đủ thẻ meta OpenGraph (hiển thị đẹp mắt khi gửi link qua Zalo, Facebook) và dữ liệu có cấu trúc Schema.org JSON-LD.

---

## Cấu trúc thư mục

```
src/
├── components/          # Các component giao diện (Navbar, Hero, About, Projects, Contact...)
├── context/             # Quản lý trạng thái theme sáng/tối (ThemeContext)
├── data/                # Toàn bộ dữ liệu dự án, kỹ năng, kinh nghiệm (portfolioData.ts)
├── types/               # Khai báo kiểu dữ liệu TypeScript
├── App.tsx              # Component gốc, tích hợp Vercel Analytics
├── main.tsx             # File khởi chạy ứng dụng React
└── index.css            # Cấu hình Tailwind CSS v4 và styles toàn cục
```

---

## Hướng dẫn cài đặt và chạy trên máy cá nhân

### Yêu cầu môi trường
- Node.js phiên bản 18 trở lên
- Trình quản lý gói npm (hoặc yarn / pnpm)

### Các bước thực hiện

1. **Clone mã nguồn về máy:**
   ```bash
   git clone https://github.com/vancuong2k4/portfolio.git
   cd portfolio
   ```

2. **Cài đặt các gói phụ thuộc:**
   ```bash
   npm install
   ```

3. **Chạy môi trường phát triển (Development):**
   ```bash
   npm run dev
   ```
   Mở trình duyệt và truy cập theo đường dẫn `http://localhost:5173`.

4. **Đóng gói sản phẩm (Production Build):**
   ```bash
   npm run build
   ```

---

## Thông tin liên hệ

- **Họ và tên:** Trần Văn Cường (vancuong2k4)
- **Vị trí:** Full-Stack Developer
- **Email:** [cuongtran190404@gmail.com](mailto:cuongtran190404@gmail.com)
- **Số điện thoại:** 0326 570 425
- **Website:** [https://www.vancuong-official.id.vn](https://www.vancuong-official.id.vn)
- **GitHub:** [github.com/vancuong2k4](https://github.com/vancuong2k4)
