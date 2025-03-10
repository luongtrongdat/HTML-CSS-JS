/* Viết chương trình JavaScript thực hiện các thao tác trên mảng 2 chiều. Chương trình cung cấp một menu với các chức năng sau:

1. Nhập mảng 2 chiều
2. Hiển thị mảng 2 chiều
3. Tính tổng các phần tử trong mảng
4. Tìm phần tử lớn nhất trong mảng và chỉ số của nó
5. Tính trung bình cộng các phần tử của một hàng cụ thể
6. Đảo ngược các hàng trong mảng
7. Thoát chương trình
Chương trình tiếp tục chạy cho đến khi người dùng chọn thoát. */
let arr = [];
let choice = 0;

do {
    choice = +prompt("Nhập lựa chọn:\n1. Nhập mảng 2 chiều\n2. Hiển thị mảng 2 chiều\n3. Tính tổng các phần tử trong mảng\n4. Tìm phần tử lớn nhất trong mảng và chỉ số của nó\n5. Tính trung bình cộng các phần tử của một hàng cụ thể\n6. Đảo ngược các hàng trong mảng\n7. Thoát chương trình");
    switch (choice) {
        case 1:
            let rows = +prompt("Nhập vào số hàng của mảng:");
            arr = [];
            for (let i = 0; i < rows; i++) {
                let cols = +prompt(`Nhập vào số cột của hàng thứ ${i + 1}:`);
                arr[i] = [];
                for (let j = 0; j < cols; j++) {
                    arr[i][j] = +prompt(`Nhập vào phần tử tại vị trí (${i + 1}, ${j + 1}):`);
                }
            }
            break;
        case 2:
            console.log("Mảng 2 chiều hiện tại:");
            for (let i = 0; i < arr.length; i++) {
                console.log(arr[i]);
            }
            break;
        case 3:
            let total= 0;
            for (let i = 0; i < arr.length; i++) {
                for (let j = 0; j < arr[i].length; j++) {
                    total += arr[i][j];
                }
            }
            console.log(`Tổng các phần tử trong mảng là: ${total}`);
            break;
        case 4:
            let max = arr[0][0];
            let maxIndex = [0, 0];
            for (let i = 0; i < arr.length; i++) {
                for (let j = 0; j < arr[i].length; j++) {
                    if (arr[i][j] > max) {
                        max = arr[i][j];
                        maxIndex = [i, j];
                    }
                }
            }
            console.log(`Phần tử lớn nhất trong mảng là ${max} tại chỉ số (${maxIndex[0]}, ${maxIndex[1]})`);
            break;
        case 5:
            let rowIndex = +prompt("Nhập chỉ số hàng muốn tính trung bình cộng:");
            if (rowIndex >= 0 && rowIndex < arr.length) {
                let rowSum = arr[rowIndex].reduce((acc, num) => acc + num, 0);
                let rowAvg = arr[rowIndex].length ? rowSum / arr[rowIndex].length : 0;
                console.log(`Trung bình cộng của các phần tử trong hàng ${rowIndex} là: ${rowAvg}`);
            } else {
                console.log("Chỉ số hàng không hợp lệ");
            }
            break;
        case 6:
            for (let i = 0; i < arr.length; i++) {
                arr[i].reverse();
            }
            console.log("Mảng sau khi đảo ngược các hàng:");
            for (let i = 0; i < arr.length; i++) {
                console.log(arr[i]);
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