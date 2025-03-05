for (let i = 100; i < 1000; i++) {
    let a = Math.floor(i / 100);
    let b = Math.floor((i % 100) / 10);
    let c = i % 10; 
    let sum = a**3 + b**3 + c**3;
    if (sum === i) {
        console.log(i);
    }
}
console.log("Các số Armstrong có 3 chữ số là:");