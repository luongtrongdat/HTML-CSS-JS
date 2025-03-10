/* Viết chương trình JavaScript thực hiện các thao tác trên mảng số nguyên. Chương trình cung cấp một menu với các chức năng sau:

1. Nhập mảng số nguyên
2. Hiển thị mảng
3. Tìm phần tử lớn nhất trong mảng và in ra chỉ số của nó
4. Tính tổng và trung bình cộng của các số dương trong mảng
5. Đảo ngược mảng
6. Kiểm tra mảng có đối xứng không
7. Thoát chương trình
Chương trình tiếp tục chạy cho đến khi người dùng chọn thoát. */
let arr = [];
let choice = 0;

do {
    choice = +prompt("Nhập lựa chọn:\n1. Nhập mảng số nguyên\n2. Hiển thị mảng\n3. Tìm phần tử lớn nhất trong mảng và in ra chỉ số của nó\n4. Tính tổng và trung bình cộng của các số dương trong mảng\n5. Đảo ngược mảng\n6. Kiểm tra mảng có đối xứng không\n7. Thoát chương trình");
    switch (choice) {
        case 1:
            let n = +prompt("Nhập vào số phần tử của mảng:");
            arr = [];
            for (let i = 0; i < n; i++) {
                arr.push(+prompt(`Nhập vào phần tử thứ ${i + 1}`));
            }
            break;
        case 2:
            console.log("Mảng hiện tại:", arr);
            break;
        case 3:
            if (arr.length === 0) {
                console.log("Mảng rỗng");
            } else {
                let max = arr[0];
                let maxIndex = 0;
                for (let i = 1; i < arr.length; i++) {
                    if (arr[i] > max) {
                        max = arr[i];
                        maxIndex = i;
                    }
                }
                console.log(`Phần tử lớn nhất trong mảng là ${max} tại chỉ số ${maxIndex}`);
            }
            break;
        case 4:
            let sum = 0;
            let count = 0;
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] > 0) {
                    sum += arr[i];
                    count++;
                }
            }
            let tbc = count ? sum / count : 0;
            console.log(`Tổng các số dương trong mảng là: ${sum}`);
            console.log(`Trung bình cộng của các số dương trong mảng là: ${tbc}`);
            break;
        case 5:
            let reversed = arr.slice().reverse();
            console.log("Mảng sau khi đảo ngược:", reversed);
            break;
        case 6:
            let flag = true;
            for (let i = 0; i < Math.floor(arr.length / 2); i++) {
                if (arr[i] !== arr[arr.length - 1 - i]) {
                    flag = false;
                    break;
                }
            }
            console.log(flag ? "Mảng đối xứng" : "Mảng không đối xứng");
            break;
        case 7:
            console.log("Thoát chương trình");
            break;
        default:
            console.log("Lựa chọn không hợp lệ.");
            break;
    }
} while (choice !== 7);