let a = +prompt("Nhập số tiền gửi ban đầu:");
let b = +prompt("Nhập lãi suất hàng tháng (%):");
let c = +prompt("Nhập số tháng gửi:");
if (a <= 0 && b < 0 && c <= 0) {
    console.log("Vui lòng nhập dữ liệu hợp lệ.");
} else {
    let e = a * (1 + b/100) ** c;
    let d = e - a;
    console.log(`Số tiền lãi là: ${d.toFixed(3)}`);
    console.log(`Số tiền nhận được sau thời gian gửi: ${e.toFixed(3)}`);
}