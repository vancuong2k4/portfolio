# Modern Creative Developer Portfolio (Web & Mobile)

Trang Portfolio chuyên nghiệp, hiện đại và giàu tính tương tác dành cho Kỹ sư Phần mềm Full-Stack & Mobile. Được xây dựng với **React 19**, **TypeScript**, **Tailwind CSS v4**, **Framer Motion** và **Lucide Icons**.

---

## 🚀 Tính năng nổi bật

- 🎨 **Giao diện Creative & Hiện đại**: Phong cách Glassmorphism, hiệu ứng ánh sáng gradient động theo chuột, hỗ trợ chuyển đổi mượt mà giữa **Dark Mode** và **Light Mode**.
- ⚡ **Thẻ 3D Interactive & Typewriter Code**: Hero section với card mô phỏng IDE 3D nghiêng theo chuột, hiển thị trực quan thông số và trạng thái sẵn sàng nhận việc.
- 📱 **Tối ưu chuẩn Mobile-First & Responsive**: Hoạt động hoàn hảo trên mọi kích thước màn hình từ điện thoại, tablet đến màn hình lớn 4K.
- 💼 **Bộ sưu tập Dự án (Projects Showcase)**: Lọc dự án theo danh mục (Full-stack SaaS, Mobile Apps, Frontend, Backend), modal xem chi tiết kiến trúc giải pháp và đường dẫn Live Demo / Source Code.
- 🎯 **Kỹ năng & Lộ trình sự nghiệp**: Tab kỹ năng phân loại trực quan kèm thang đo độ thành thạo, Timeline kinh nghiệm làm việc và học vấn chi tiết.
- ✉️ **Form liên hệ tương tác & Tải CV**: Nút tải CV và gửi tin nhắn tích hợp hiệu ứng pháo hoa Confetti 🎉; sẵn sàng kết nối dịch vụ gửi email miễn phí không cần máy chủ backend.
- 🌐 **Sẵn sàng Deploy 100% Miễn Phí**: Cấu hình chuẩn tĩnh (Static SPA) tối ưu tuyệt đối cho Vercel, Netlify, Cloudflare Pages hoặc GitHub Pages.

---

## 🛠️ Công nghệ sử dụng

- **Core**: React 19, TypeScript, Vite
- **Styling**: Tailwind CSS v4, Custom Glassmorphism Utilities
- **Animations**: Framer Motion, Canvas Confetti
- **Icons**: Lucide React & Custom SVG Social Icons
- **Theme**: Dark / Light Mode Provider (lưu trạng thái `localStorage`)

---

## 📂 Cấu trúc thư mục

```
src/
├── types/
│   └── index.ts            # Định nghĩa kiểu dữ liệu TypeScript (Profile, Skill, Project,...)
├── data/
│   └── portfolioData.ts    # TOÀN BỘ thông tin cá nhân, dự án, kỹ năng, kinh nghiệm (dễ sửa đổi)
├── context/
│   └── ThemeContext.tsx    # Quản lý chế độ Dark / Light mode
├── components/
│   ├── Navbar.tsx          # Thanh điều hướng trên cùng kèm Theme toggle & nút tải CV
│   ├── BackgroundEffects.tsx # Hiệu ứng gradient mờ ảo và lưới cyber
│   ├── Hero.tsx            # Section giới thiệu với thẻ 3D và text gõ tự động
│   ├── About.tsx           # Giới thiệu bản thân & 4 trụ cột kỹ thuật
│   ├── Skills.tsx          # Danh sách kỹ năng có bộ lọc danh mục
│   ├── Projects.tsx        # Danh sách dự án tiêu biểu
│   ├── ProjectModal.tsx    # Hộp thoại popup xem chi tiết dự án & kiến trúc
│   ├── Experience.tsx      # Lộ trình kinh nghiệm làm việc & học vấn
│   ├── Testimonials.tsx    # Chứng chỉ quốc tế & đánh giá
│   ├── Contact.tsx         # Form gửi tin nhắn & thông tin liên hệ kèm nút copy 1 chạm
│   ├── Footer.tsx          # Chân trang & nút cuộn lên đầu
│   └── SocialIcons.tsx     # Bộ icon mạng xã hội sắc nét
├── App.tsx
├── main.tsx
└── index.css
```

---

## ✏️ Hướng dẫn tùy biến thông tin của bạn

Bạn chỉ cần mở **duy nhất** file sau để thay đổi toàn bộ nội dung hiển thị trên trang web:
👉 `src/data/portfolioData.ts`

Trong file này, bạn có thể thay thế:
1. `profileData`: Họ tên, chức danh, đoạn giới thiệu ngắn, email, số điện thoại, địa chỉ, link GitHub, LinkedIn, Telegram.
2. `skillsData`: Các công nghệ bạn sử dụng và mức độ thành thạo.
3. `projectsData`: Tên dự án, ảnh bìa, công nghệ, link demo và link source code GitHub của bạn.
4. `experiencesData` & `educationData`: Quá trình làm việc tại các công ty và bằng cấp đại học.
5. `certificatesData`: Các chứng chỉ bạn đã đạt được.

---

## 🌐 Hướng dẫn đưa lên Internet HOÀN TOÀN MIỄN PHÍ 100%

### Cách 1: Triển khai lên Vercel (Được khuyên dùng nhất - Nhanh nhất & Tốt nhất)

1. **Đưa mã nguồn lên GitHub**:
   Mở terminal tại thư mục dự án và chạy:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/<tên-tài-khoản-github-của-bạn>/portfolio.git
   git push -u origin main
   ```

2. **Kết nối với Vercel**:
   - Truy cập [vercel.com](https://vercel.com) và bấm **Sign Up / Log In** bằng tài khoản **GitHub**.
   - Bấm nút **"Add New..."** -> Chọn **"Project"**.
   - Tìm repository `portfolio` vừa tạo và bấm **"Import"**.
   - Tại màn hình cấu hình, giữ nguyên mọi thiết lập mặc định (Vercel tự động nhận diện `Vite`) và bấm **"Deploy"**.

3. **Hoàn tất**:
   - Sau khoảng 30 giây, Vercel sẽ cung cấp cho bạn một đường link truy cập công khai dạng `https://portfolio-<ten-ban>.vercel.app`.
   - Trang web có sẵn chứng chỉ bảo mật HTTPS (SSL) miễn phí trọn đời.
   - Mỗi lần bạn sửa code và push lên GitHub, Vercel sẽ tự động build lại và cập nhật website tức thì!
   - Bạn cũng có thể gắn tên miền riêng miễn phí (ví dụ: `nguyenvanan.dev`, `alex.com`...) vào Vercel nếu sau này có mua tên miền.

---

### Cách 2: Triển khai lên GitHub Pages (Miễn phí 100%)

1. Mở file `vite.config.ts`, thêm thuộc tính `base`:
   ```ts
   export default defineConfig({
     base: '/portfolio/', // Thay 'portfolio' bằng tên repository trên GitHub
     plugins: [react(), tailwindcss()],
   })
   ```
2. Cài package hỗ trợ deploy:
   ```bash
   npm install -D gh-pages
   ```
3. Mở `package.json`, thêm vào mục `scripts`:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
4. Chạy lệnh:
   ```bash
   npm run deploy
   ```
   Website sẽ xuất hiện tại địa chỉ: `https://<username>.github.io/portfolio/`.

---

### Cách 3: Nhận tin nhắn từ Form liên hệ miễn phí (Không cần Server)

Để form liên hệ trong mục "Liên Hệ" tự động gửi email thẳng vào Gmail của bạn mà không tốn 1 xu:
1. Đăng ký tài khoản miễn phí tại [Web3Forms](https://web3forms.com) (nhận Access Key ngay lập tức không cần đăng ký phức tạp).
2. Hoặc sử dụng [EmailJS](https://www.emailjs.com) (hỗ trợ 200 email gửi miễn phí mỗi tháng).
3. Đặt Access Key vào form tại file `src/components/Contact.tsx`.

---

## 💻 Chạy thử nghiệm trên máy cục bộ (Local Development)

```bash
# Cài đặt thư viện (nếu chưa cài)
npm install

# Khởi chạy server phát triển
npm run dev

# Đóng gói sản phẩm production
npm run build

# Xem trước bản build
npm run preview
```
