let n = +prompt("Mời bạn nhập số lượng phần tử");
let arr = [];
let count = 0; 
if (n === 0) {
    console.log("Mảng không có phần tử");
} else {
    for (let i = 0; i < n; i++) {
        let num = +prompt(`Mời bạn nhập phần tử thứ ${i + 1}`);
        arr.push(num);
        if (num < 0) {
            count++;
        }
    }
    console.log(`Mảng: [${arr}]`);
    console.log(`Số lượng phần tử âm: ${count}`);
}