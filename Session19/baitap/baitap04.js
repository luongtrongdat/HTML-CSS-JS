let number = prompt("Nhập một số:");
if (!Number.isInteger(number)) {
    console.log("Đây không phải số");
} else if (number % 3 === 0 && number % 5 === 0) {
    console.log(number + " chia hết cho cả 3 và 5");
} else {
    console.log(number + " không chia hết cho cả 3 và 5");
}