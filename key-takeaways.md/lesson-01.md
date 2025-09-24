# Playwright
- Là một framework tiền thân là Puppeteer, được Microsoft tài trợ và phát triển.
- https://playwright.dev/
- Ra đời: 31/01/2020
## Ưu điểm
- Cross browser
- Cross platform
- Auto-wait
- Web-first assertion
- Tracing
- Code-gen
- ...
## Vì sao nên chọn Playwright?
- Cú pháp đơn giản
- Dễ học
- Dễ tiếp cận

# Cài đặt Tools
## Cài đặt NVM
1. On Mac: `brew install nvm` 
2. On Window: *https://github.com/coreybutler/nvm-windows/releases*

## Cài đặt Node 
- `nvm install v22.9.0`
- `nvm use 22.9.0`

## Cài đặt Playwright
- Tạo thư mục trên local: **pw-course**
- Chạy lệnh `npm playwright@latest` (Yes or Enter hết đến khi nào hiển thị **Happy hacking!**)

## Cài đặt Git
- Máy Mac có sẵn
- Máy Window thì download *https://git-scm.com/download*

## Cài đặt tạo tài khoản GitHub
- Tạo tài khoản GitHub: *https://github.com/signup*
- Refer: *youtube.com/watch?v=MWKOBfB8I2s*

## Cài đặt VS code (Visual Studio Code)
- VS Code = IDE = integrated development environmen
- Là công cụ để viết code
- Cài đặt Visual Studio Code: *https://code.visualstudio.com/*
- Cài đặt Playwright extension: *https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright*

## Kết nối GitHub
### SSH Key là gì?
- Cặp khoá (2 cái) 
    - **id_rsa** và **id_rsa.pub**
    - **id_rsa**: cần giữ bí mật 
    - **id_rsa.pub**: có thể gửi cho người khác

- Giúp xác thực đăng nhập trở nên dễ dàng hơn
- Lưu ở ~/.ssh 
    - “~” đại diện cho thư mục home

- Tạo ssh key:
    - Lưu ý: nếu file đã tồn tại, cần kiểm tra kỹ trước khi ghi đè.
    - Câu lệnh: `ssh-keygen -t rsa -b 4096 -C "your_email@example.com"`

- Lấy nội dung ssh key:  `cat~/.ssh/id_rsa.pub`
- Thêm key vào GitHub: *https://github.com/settings/ssh/new*

### Đưa code lên GitHub
- Tạo repository 
    - Truy cập: *https://github.com/new*
    - Điền tên repository
    - Chọn “Public”

- Khởi tạo repo local: `git init`
- Liên kết repository vừa tạo với Git: `git remote add origin <ssh_link>`
- Thêm code: `git add .` 
- Thêm commit: `git commit-m"init project"`
- Push code: `git push origin main`

### Invite collaborators
- Truy cập repo setting: *https://github.com/<username><repo_name>/settings/access*
- Add collaborator
