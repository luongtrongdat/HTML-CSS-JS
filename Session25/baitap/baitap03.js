/* Xây dựng hàm nhận vào một tham số là một mảng cho trước. Hiển thị các phần tử trong mảng là số chẵn. */
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function filterNumber(arr) {
    if (!Array.isArray(arr)) {
        console.log("Dữ liệu không hợp lệ");
        return;
    }
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        (arr[i] % 2 == 0) ? newArr.push(arr[i]) : newArr;
    }
    if (newArr.length == 0) {
        console.log("Không có số chẵn trong mảng");
    } else {
        console.log(newArr);
    }
}
filterNumber(arr);