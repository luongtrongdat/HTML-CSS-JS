/* Viết chương trình JavaScript thực hiện các thao tác trên mảng 2 chiều. Chương trình cung cấp một menu với các chức năng sau:

1. Nhập mảng 2 chiều
2. Hiển thị mảng 2 chiều
3. Tính tổng các phần tử trong mảng
4. Tính tổng đường chéo chính
5. Tính tổng đường chéo phụ
6. Tính trung bình cộng các phần tử trong một hàng hoặc một cột (Người dùng chọn hàng hoặc cột cần tính toán)
7. Thoát chương trình
Chương trình tiếp tục chạy cho đến khi người dùng chọn thoát. */
let arr = [];
let choice = 0;

do {
    choice = +prompt("Nhập lựa chọn:\n1. Nhập mảng 2 chiều\n2. Hiển thị mảng 2 chiều\n3. Tính tổng các phần tử trong mảng\n4. Tính tổng đường chéo chính\n5. Tính tổng đường chéo phụ\n6. Tính trung bình cộng các phần tử trong một hàng hoặc một cột\n7. Thoát chương trình");
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
            let total = 0;
            for (let i = 0; i < arr.length; i++) {
                for (let j = 0; j < arr[i].length; j++) {
                    total += arr[i][j];
                }
            }
            console.log(`Tổng các phần tử trong mảng là: ${total}`);
            break;
        case 4:
            let mainSum = 0;
            for (let i = 0; i < arr.length; i++) {
                if (i < arr[i].length) {
                    mainSum += arr[i][i];
                }
            }
            console.log(`Tổng các phần tử trên đường chéo chính là: ${mainSum}`);
            break;
        case 5:
            let secondarySum = 0;
            for (let i = 0; i < arr.length; i++) {
                if (i < arr[i].length) {
                    secondarySum += arr[i][arr[i].length - 1 - i];
                }
            }
            console.log(`Tổng các phần tử trên đường chéo phụ là: ${secondarySum}`);
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