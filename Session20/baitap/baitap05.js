let a = prompt("Nhập số a:");
let b = prompt("Nhập số b:");
a = Number(a);
b = Number(b);
if (Number.isInteger(a) && Number.isInteger(b) && b >= 0) {
    let result = 1;
    for (let i = 0; i < b; i++) {
        result *= a;
    }
    console.log(`Kết quả: ${result}`);
} else {
    console.log("Không hợp lệ");
}