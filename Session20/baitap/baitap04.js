let str = prompt("Nhập vào một chuỗi:");
let search = prompt("Nhập ký tự cần tìm:");
let flag = 0;
for (let i = 0; i < str.length; i++) {
    if (str[i] === search) {
        flag++;
        break;
    }
}
console.log(flag ? "Tồn tại từ cần tìm kiếm" : "Không tồn tại từ cần tìm kiếm");