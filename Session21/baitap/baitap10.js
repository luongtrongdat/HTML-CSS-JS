let number = +prompt("Nhập vào một số nguyên:");
let count = 0;
let num = 1;
while (count < number) {
    let countPrime = 0;
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            countPrime++;
        }
    }
    if (countPrime === 2) {
        console.log(`${num} là số ngyên tố`);
        count++;
    }
    num++;
}