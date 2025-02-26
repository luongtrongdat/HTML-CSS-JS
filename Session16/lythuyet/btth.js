/* Viết chương trình yêu cầu người dùng nhập điểm 3 môn Toán, Lý, Hóa
Sau đó tính điểm trung bình, làm tròn 2 số sau dấu phẩy */
let math = +prompt("Nhập điểm Toán:");
let physics = +prompt("Nhập điểm Lý:");
let chemistry = +prompt("Nhập điểm Hóa:");
let average = (math + physics + chemistry) / 3;
console .log("Điểm trung bình là: ", average.toFixed(2));
