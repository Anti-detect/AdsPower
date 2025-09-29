ADSPower — Trang review trình duyệt Antidetect

Nội dung trong repo này là một scaffold tĩnh cho một trang review / so sánh trình duyệt antidetect. Các file chính:

- `index.html` — Trang chủ tiếng Việt (đã có meta SEO cơ bản và CTA affiliate Multilogin)
- `style.css` — Style tối, responsive
- `script.js` — Xử lý chuyển đổi ngôn ngữ và placeholder analytics
- `/vi/`, `/en/`, `/zh/`, `/ru/`, `/pt/` — thư mục khởi tạo cho các ngôn ngữ (các file cần được dịch và hoàn thiện)
- `multilogin-review.html` — Bài đánh giá Multilogin tiếng Việt chuẩn SEO (đã chèn mã giảm giá ADBNEW50 và link aff)
- `robots.txt`, `sitemap.xml` — file cơ bản; chỉnh domain trong sitemap.xml trước khi deploy

Hướng dẫn nhanh để dùng Copilot hoàn thiện nội dung:

1. Mở mỗi file `index.html` trong thư mục ngôn ngữ (ví dụ `/en/index.html`). Dán prompt đã có ở đầu file vào Copilot để tự động tạo nội dung dịch thuật.
2. Kiểm tra và hiệu đính: luôn rà soát thuật ngữ chuyên ngành (fingerprint, proxy, profile).
3. Thay `https://example.com/` trong `sitemap.xml` bằng domain thật của bạn (ví dụ: `https://adspower.example/`).
4. Thay link affiliate và test: `https://multilogin.com/#a_aid=ADB` đã được chèn sẵn. Test link trên môi trường staging trước khi publish.

SEO & kỹ thuật tối ưu cơ bản:
- Thêm thẻ meta (title/description) riêng cho từng trang.
- Thêm Open Graph image (og:image) 1200x630 cho chia sẻ mạng xã hội.
- Cấu hình canonical nếu cần.
- Tạo sitemap động khi site lớn (sử dụng script để sinh sitemap nếu có nhiều page).

Gợi ý nội dung review và CTA:
- Viết đoạn mở đầu 2-3 đoạn ngắn, trả lời ngay 3 câu: Multilogin là gì? Phù hợp với ai? Lợi ích chính?
- Thêm bảng tóm tắt (Pros/Cons) ở đầu bài review để người đọc nhanh nắm.
- Dùng heading H2/H3 hợp lý, chèn từ khóa chính (Multilogin, mã giảm giá Multilogin, antidetect browser) một vài lần vừa phải.
- Chèn affiliate CTA ở đầu và cuối bài, ghi rõ mã giảm giá ADBNEW50 và điều kiện áp dụng.

Ghi chú pháp lý & affiliate:
- Thêm một disclosure ngắn ở cuối bài (đã làm sẵn trên trang review) để minh bạch về thu nhập affiliate.
- Kiểm tra chính sách affiliate của Multilogin để tuân thủ các yêu cầu về labeling (ví dụ: cần thêm rel="sponsored").

Next steps tôi có thể làm cho bạn:
1. Dịch tự động nội dung sang English/Chinese/Russian/Portuguese và tinh chỉnh SEO cho mỗi trang.
2. Tạo một page blog/template để xuất bản các review khác.
3. Thiết lập pipeline nhỏ (GitHub Pages / Netlify) để preview và publish.

Cho tôi biết muốn tôi làm bước tiếp theo nào (ví dụ: viết bản dịch EN + OG image + meta tags), tôi sẽ bắt tay làm và cập nhật todo list.
---

Deploy & QA
------------

GitHub Pages (quick):

1. Đổi tên branch thành `gh-pages` hoặc vào Settings → Pages và chọn branch `main`/`/root` (tùy cách bạn muốn). 
2. Push repo lên GitHub, sau khi Pages build xong bạn sẽ nhận URL `https://<your-username>.github.io/<repo>`.
3. Test các đường dẫn: `/`, `/multilogin-review.html`, `/en/`, `/en/multilogin-review.html`, v.v.

Netlify (recommended for custom domain & redirects):

1. Đăng nhập Netlify và chọn "New site from Git" → kết nối repo.
2. Build settings: site tĩnh (no build command). Publish directory: `/`.
3. Thiết lập domain và bật HTTPS.

QA checklist (quick):
- [ ] Thay `https://example.com/` trong `sitemap.xml` bằng domain thật.
- [ ] Kiểm tra link affiliate (https://multilogin.com/#a_aid=ADB) hoạt động và mã ADBNEW50 áp dụng.
- [ ] Kiểm tra thẻ meta / og:image hiển thị đúng khi chia sẻ (Facebook/Twitter Card validator).
- [ ] Kiểm tra responsive trên mobile.
- [ ] Kiểm tra file `robots.txt` (cho phép lập chỉ mục các trang cần thiết).

Nếu bạn muốn, tôi có thể: tự động cấu hình GitHub Pages/Netlify bằng commits hướng dẫn, hoặc tạo file `_redirects`/`netlify.toml` nếu cần.

---

ADSPower
