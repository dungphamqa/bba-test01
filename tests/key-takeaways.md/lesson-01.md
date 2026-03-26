## 1. Playwright là gì?
- Định nghĩa:
    - Là 1 framwork
    - Tiền thân là pupeteer được microsoft tài trợ và phát triển
    - Ra đời 21/10/2020
    - Version: V1.56

- Ưu điểm:
    - Cross browser: viết code 1 lần nhưng chạy được trên nhiều trịnh duyệt
    - Cross platfrom: chạy trên nhiều hệ điều hành
    - Tính năng: 
        - auto waitting
        - auto-retry asertion giúp giảm flsky tests
    - Report đầy đủ:
        - pass/fails theo từng trình duyệt
        - chi tiết ở từng thời điểm: gọi API nào, response trả về là gì?, ứng với dòng chữ nào...

## 2. Tại sao lại chọn playwright?
- Dễ cài đặt
- Cú pháp đơn giản, dễ học
- Framework trending, nhiều cơ hội việc làm

## 3. 1 số công cụ
- NVM: Node version manager : quản lí các phiên bản nodejs
- NodeJs: công cụ để chạy code
- Git: quản lý source code
- Git hub: chia sẻ code, làm việc nhóm

## 4. Cấu hình Git
- Cấu hình mặc định để đẩy thông tin lên git
    - Config username: `git config --global user.name "tên"`
    - Cấu hình email: `git config --global user.email "email"`
    - branch default: `git config --global defaultBranch main`

- Khởi tạp playwright: npm init playwright@latest

## 5. ưa code lên Git hub: tạo repo
- Khởi tạo repo local: `git init`
- Tạo repo git hub và liên kết với repo local: `git remote add origin <url>`
- Thêm file vào stg: `git add .`
- Commit file: `git commit -m "mgs"`
- Push code: `git push origin main`