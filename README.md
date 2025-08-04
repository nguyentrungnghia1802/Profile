
# Profile Website

Portfolio cá nhân của Nguyen Trung Nghia.

## 🚀 Triển khai tự động với GitHub Pages

Website sẽ tự động build và deploy mỗi khi bạn push lên nhánh `main`.

### Cách hoạt động
- Khi bạn push code lên `main`, GitHub Actions sẽ tự động chạy workflow `.github/workflows/gh-pages.yml`.
- Source code sẽ được deploy lên nhánh `gh-pages` và hiển thị trên GitHub Pages.

### Xem website
- Vào repo > Settings > Pages để lấy link website.
- Hoặc truy cập: `https://<username>.github.io/<repo-name>/`

### Cấu trúc dự án
- `index.html`: Trang chính
- `src/resources/css/home_page.css`: CSS
- `src/resources/media/svg/`: SVG icons, background, favicon
- `.github/workflows/gh-pages.yml`: Workflow tự động deploy

### Tuỳ chỉnh
- Sửa nội dung, hình ảnh, SVG theo ý muốn
- Đẩy lên `main` để cập nhật website

---
**Chúc bạn thành công!**
