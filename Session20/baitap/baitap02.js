let a = Number(prompt(`Nhập một số nguyên:`));
let b = " ";
if ((Number.isInteger(a)) && (a > 0)) {
    for (i =1; i <= a; i++) {
        if (i % 5 == 0) {
            b = b + i + " ," + " ";
        }
    }
    console.log(`Các số chia hết cho 5 từ 1 đến ${a} là : ${b}`);
} else {
    console.log("Dữ liệu bạn nhập không hợp lệ");
}