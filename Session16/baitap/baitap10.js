let num1 = Number(prompt("Nhập số thứ nhất:"));
let num2 = Number(prompt("Nhập số thứ hai:"));
let min = Math.min(num1, num2);
let max = Math.max(num1, num2);
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
document.write("Số ngẫu nhiên trong khoảng từ " + num1 + " đến " + num2 + " là: " + randomNum);