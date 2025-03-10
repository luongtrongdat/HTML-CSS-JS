let arr = [];
let choice = 0;
do {
    choice = +prompt("Nhập lựa chọn:\n1. Nhập mảng\n2. Hiển thị mảng\n3. Tìm phần tử lớn nhất và nhỏ nhất trong mảng\n4. Tính tổng các phần tử trong mảng\n5. Tìm số lần xuất hiện của một phần tử trong mảng\n6. Sắp xếp mảng tăng dần\n7. Thoát chương trình\n")
    switch (choice) {
        case 1:
            let a = +prompt("Nhập vào số phần tử của mảng:");
            for (let i = 0; i < a; i++) {
                arr[i] = +prompt(`Nhập vào phần tử thứ ${i + 1}`);
            }
            break;
        case 2:
            console.log(arr);
            break;
        case 3:
            let max = arr[0];
            for (let i = 1; i < arr.length; i++) {
                if (arr[i] > max) {
                    max = arr[i];
                }
            }
            let min = arr[0];
            for (let i = 1; i < arr.length; i++) {
                if (arr[i] < min) {
                    min = arr[i];
                }
            }
            console.log(`Giá trị lớn nhất có trong mảng là: ${max}`);
            console.log(`Giá trị nhỏ nhất có trong mảng là: ${min}`);
            break;
        case 4:
            let sum = 0;
            for (let i = 0; i < arr.length; i++) {
                if (!Number.isNaN(arr[i])) {
                    sum += arr[i];
                }
            }
            console.log(`Tổng các số là: ${sum}`);
            break;
        case 5:
            let number = +prompt("Nhập số nguyên muốn kiểm tra: ");
            let count = 0;
            for (let i = 0; i < arr.length; i++) {
                number == arr[i] ? count++ : count;
            }
            count != 0 ? console.log(`Số ${number} xuất hiện ${count} lần`) : console.log("Không tồn tại");
            break;
        case 6:
            let sort = arr.sort();
            console.log(`Mảng sắp xếp theo thứ tự tăng dần là: `, sort);
            break;
        case 7:
            console.log("Thoát chương trình");
            break;
        default:
            console.log("Lựa chọn không hợp lệ.");
            break;
    }
} while (choice !== 7);