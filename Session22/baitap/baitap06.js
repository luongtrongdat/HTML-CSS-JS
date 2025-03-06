let array = [1,2,3,4,5,6,7,8,9,10];
let number = +prompt("Nhập số nguyên bất kì: ");
let count = 0;
for (let i = 0; i < array.length; i++) {
    number == array[i] ? count++ : count;
}
count != 0 ? console.log(`Số ${number} xuất hiện ${count} lần`) : console.log("Không tồn tại");