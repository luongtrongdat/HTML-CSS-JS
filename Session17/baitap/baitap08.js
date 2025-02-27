const d1 = new Date(prompt("Mời nhập ngày thứ nhất"));
const d2 = new Date(prompt("Mời nhập ngày thứ hai"));
let day1 = +(d1.getTime());
let day2 = +(d2.getTime());
let result = (day1 - day2) / 1000 / 3600 / 24;
console.log(Math.abs(result));