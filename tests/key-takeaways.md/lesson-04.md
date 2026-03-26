## 1. Phạm vi của biến (scope)
- Định nghĩa: xác định nơi mà biến có thể truy cập
- JS có 3 loại phạm vi;
    - Block scope (khối): biến được khai báo trong ngoặc nhon
        - var: không bị giới hạn bởi cặp ngoặc nhọn.
        - let/const: bị giới hạn bởi cạp ngoặc nhọn. Ra ngoài bị undefined
    - Function scope (hàm): biến được khai báo trong 1 hàm -> cả let/var/const ra ngoài hàm đều bị undefined
    - Toàn cục (global): biến được khai báo ở 1 dòng code tự do không nằm trong khối hay hàm.

## 2. Break & continue
- Break: dùng để thoát hoàn toàn hàm khỏi vòng lặp ngay lập tức
- Continute: dùng để bỏ qua phần còn lại của vòng lặp hiện tại và chuyển sang lần lặp tiếp theo


## 3. Câu điều kiện nâng cao
- if...else: Thực thi code khác nhau cho trường hợp true và false
- if...else..if: Kiểm tra nhiều điều kiện theo thứ tự

## 4. Vòng lặp nâng cao
- For...in loop: dùng để duyệt qua các thuộc tính (properties) của 1 object.
    - Ví dụ:
        `const persond = {
            name: "A",
            age: 20,
            city: "Hanoi"
        };
        for(let key in person) {
            console.log(key + ": " + person[key]);
        }
        `

        -> Output
        ` name: A
          age: 20
          tity: Hanoi`

-> Dùng cho cả object và mảng, nhưng không khuyến khích dùng cho mảng

- forEach Method: method ủa array để thực thi 1 function cho mỗi phần tử. Không thể dùng break or continue
    - vd:
    `
    consr numbers = [1,3,5,6,7,9];
    numbers.forEach(function(value){
        console.log(value);
    });
    `

## 5. Utils function
- Định ghĩa: là các hàm có sẵn của JS, giúp việc code trở lên nhanh hơn, gọn hơn

### 5.1 String utils: hàm xử lý chuỗi
- `trim()`: bỏ khoảng trắng 2 đầu
- `trímStart()`: bỏ khoảng trắng bên trái
- `trimEnd()`: bỏ khoảng trắng bên phải
- `topUpperCase`: chuyển chữ thường -> chữ hoa
- `toLowerCase`: chuyển chữ hoa -> chữ thường
- `includes`: kiểm tra chuỗi có gồm chuỗi con hay không - có phân biệt chữ hoa, chữ thường
- `split`: cắt chuỗi
- `replace`: thay thế chuỗi con bằng chuỗi con khác
....

### 5.2 Array utils: hàm xử lý mảng
- `push(<phần tử>)`: thêm vào cuối phầng tử
- `unshift(<phần tử>)`: thêm vào đầu phần tử
- `splice (<vị trí>, <số phần tử cần xoá>, <phần tủ cần thêm vào>)`: thêm vào giữa
- `pop()`: xoá ở cuối
- `shift()`: xoá ở đầu
- `splice(<vị trí>, <số phần từ cần xoá>)`: xoá vị trí bất kì
- `find()`: trả về phần từ đầu tiên hợp lệ
- `filter()`: trả về các phần tử hợp lệ
- `map`: biến đổi mảng - aps dụng 1 hàm lên từng phần tử của mảng gốc
- `sort ((a,b) => a-b)`: Sắp xếp mảng
    - So sánh tưngf cặp phần tử a và b
    - Trả về số âm: a đứng trước b
    - Trả về số dương: b đứng trước a
    - Trả về 0: giữ nguyên thứ tự






         
