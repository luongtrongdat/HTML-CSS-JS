let numbers = [2, 4, 6, 8, 10];
let a = Number(prompt("Nhập vào một số:"));
if (numbers.includes(a)) {
    console.log("Bingo");
} else {
    console.log("Chúc bạn may mắn lần sau!");
}