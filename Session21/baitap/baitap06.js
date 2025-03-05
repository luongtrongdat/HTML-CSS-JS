let number = +prompt("Nhập một số nguyên:");
for (let i = 1; i <= Math.abs(number); i++) {
    if (number % i === 0) {
        console.log(` Ưóc của ${number} là :${-i}`);
        console.log(` Ưóc của ${number} là :${i}`);
    }
}