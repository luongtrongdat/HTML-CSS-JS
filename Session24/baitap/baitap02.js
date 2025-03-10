/* Viết chương trình JavaScript thực hiện các thao tác trên mảng số nguyên. Chương trình sẽ cung cấp một menu với các chức năng:

1. Nhập mảng số nguyên
2. Hiển thị mảng
3. Tìm các phần tử chẵn và lẻ
4. Tính trung bình cộng của mảng
5. Xóa phần tử tại vị trí chỉ định
6. Tìm phần tử lớn thứ hai trong mảng
7. Thoát chương trình
Chương trình sẽ tiếp tục chạy cho đến khi người dùng chọn thoát. */
let arr = [];
let choice = 0;

do {
    choice = +prompt("Nhập lựa chọn:\n1. Nhập mảng số nguyên\n2. Hiển thị mảng\n3. Tìm các phần tử chẵn và lẻ\n4. Tính trung bình cộng của mảng\n5. Xóa phần tử tại vị trí chỉ định\n6. Tìm phần tử lớn thứ hai trong mảng\n7. Thoát chương trình");
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
            let even = arr.filter(num => num % 2 === 0);
            let odd = arr.filter(num => num % 2 !== 0);
            console.log("Các phần tử chẵn:", even);
            console.log("Các phần tử lẻ:", odd);
            break;
        case 4:
            let sum = arr.reduce((acc, num) => acc + num, 0);
            let avg = arr.length ? sum / arr.length : 0;
            console.log(`Trung bình cộng của mảng là: ${avg}`);
            break;
        case 5:
            let index = +prompt("Nhập vị trí phần tử muốn xóa:");
            if (index >= 0 && index < arr.length) {
                arr.splice(index, 1);
                console.log("Mảng sau khi xóa phần tử:", arr);
            } else {
                console.log("Vị trí không hợp lệ");
            }
            break;
        case 6:
            if (arr.length < 2) {
                console.log("Mảng không đủ phần tử để tìm phần tử lớn thứ hai");
            } else {
                let max = Math.max(...arr);
                let secondMax = Math.max(...arr.filter(num => num !== max));
                console.log(`Phần tử lớn thứ hai trong mảng là: ${secondMax}`);
            }
            break;
        case 7:
            console.log("Thoát chương trình");
            break;
        default:
            console.log("Lựa chọn không hợp lệ.");
            break;
    }
} while (choice !== 7);