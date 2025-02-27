let soTienGui = prompt("Nhập số tiền gửi: ");
let soThangGui = prompt("Nhập số tháng gửi: ");
alert("Tiền lãi nhận được: " + (soTienGui * 0.043 / 12 * soThangGui).toFixed(2) + " VND");