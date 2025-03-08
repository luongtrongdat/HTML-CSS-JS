let arr = [];
for (let i = 0; i < 10; i++) {
    let num = prompt(`Mời nhập vào phần tử ${i + 1}`);
    arr.push(Number(num));
}
let maxValue = arr[0];
let maxIndex = 0;
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxValue) {
        maxValue = arr[i];
        maxIndex = i;
    }
}
console.log(`Giá trị lớn nhất có trong mảng là: ${maxValue}`);
console.log(`Vị trí giá trị lớn nhất là: ${maxIndex}`);
