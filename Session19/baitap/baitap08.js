let month = +prompt("Nhập vào một tháng:");
if (month >= 1 && month <= 3) {
    console.log("mùa xuân");
} else if (month >= 4 && month <= 6) {
    console.log("mùa hạ");
} else if (month >= 7 && month <= 9) {
    console.log("mùa thu");
} else if (month >= 10 && month <= 12) {
    console.log("mùa đông");
} else {
    console.log("tháng không hợp lệ");
}