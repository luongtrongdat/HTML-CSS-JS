let sum = 0;
for (let i = 0; i < 5; i++) {
    let number = +prompt(`Nhập số nguyên thứ ${i + 1}:`);
    if (number % 2 !== 0) {
        sum += number;
    }
}
console.log("Tổng các số lẻ trong các số đã nhập là:", sum);