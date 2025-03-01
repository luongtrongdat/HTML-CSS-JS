let math = +prompt("Nhập điểm toán");
let literature = +prompt("Nhập điểm văn");
let english = +prompt("Nhập điểm tiếng anh");
let average = (math + literature + english) / 3;
console.log("Điểm trung bình là: ", average);
if (average >= 8.0) {
    console.log("Giỏi");
} else if (average < 8.0 && average >= 6.4) {
    console.log("Khá");
} else if (average < 6.4 && average >= 5.0) {
    console.log("Trung bình");
} else if(average < 5.0) {
    console.log("Yếu");
}