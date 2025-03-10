let arr = [];
// case1
let a = +prompt("Nhập vào số phần tử của mảng:");
for(let i = 0; i < a; i++){
    arr[i] = +prompt(`Nhập vào phần tử thứ ${i +1}`);
}
// case2
console.log(arr);
// case3
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
// case4
let sum = 0;
for(let i = 0; i < arr.length; i++){
    if(!Number.isNaN(arr[i])){
        sum += arr[i];
    }
}
console.log(`Tổng các số là: ${sum}`);
// case5
let number = +prompt("Nhập số nguyên muốn kiểm tra: ");
let count = 0;
for (let i = 0; i < arr.length; i++) {
    number == arr[i] ? count++ : count;
}
count != 0 ? console.log(`Số ${number} xuất hiện ${count} lần`) : console.log("Không tồn tại");
// case6
let sort = arr.sort();
console.log(sort);
// case7
console.log("Thoát chương trình");
