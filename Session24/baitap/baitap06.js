/* Viết chương trình JavaScript thực hiện các thao tác trên chuỗi. Chương trình cung cấp một menu với các chức năng sau:

1. Nhập chuỗi
2. Hiển thị chuỗi
3. Tính độ dài của chuỗi
4. Đếm số lần xuất hiện của một ký tự (Người dùng nhập) trong chuỗi
5. Kiểm tra chuỗi có phải là chuỗi đối xứng không
6. Chuyển đổi chuỗi thành chữ in hoa các ký tự đầu tiên của từ
7. Thoát chương trình
Chương trình tiếp tục chạy cho đến khi người dùng chọn thoát. */
let str = "";
let choice = 0;

do {
    choice = +prompt("Nhập lựa chọn:\n1. Nhập chuỗi\n2. Hiển thị chuỗi\n3. Tính độ dài của chuỗi\n4. Đếm số lần xuất hiện của một ký tự\n5. Kiểm tra chuỗi có phải là chuỗi đối xứng không\n6. Chuyển đổi chuỗi thành chữ in hoa các ký tự đầu tiên của từ\n7. Thoát chương trình");
    switch (choice) {
        case 1:
            str = prompt("Nhập vào chuỗi:");
            break;
        case 2:
            console.log("Chuỗi hiện tại:", str);
            break;
        case 3:
            console.log("Độ dài của chuỗi là:", str.length);
            break;
        case 4:
            let char = prompt("Nhập ký tự muốn đếm:");
            let count = 0;
            for (let i = 0; i < str.length; i++) {
                if (str[i] === char) {
                    count++;
                }
            }
            console.log(`Số lần xuất hiện của ký tự '${char}' trong chuỗi là: ${count}`);
            break;
        case 5:
            let string = str === str.split('').reverse().join('');
            console.log(string ? "Chuỗi là chuỗi đối xứng" : "Chuỗi không phải là chuỗi đối xứng");
            break;
        case 6:
            
            break;
        case 7:
            console.log("Thoát chương trình");
            break;
        default:
            console.log("Lựa chọn không hợp lệ.");
            break;
    }
} while (choice !== 7);