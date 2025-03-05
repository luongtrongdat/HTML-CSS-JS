let a = +prompt("Nhập vào số a:");
let b = +prompt("Nhập vào số b:");
let c = +prompt("Nhập vào số c:");
let delta = b * b - 4 * a * c;
if (delta > 0) {
    let x1 = (-b + Math.sqrt(delta)) / (2 * a);
    let x2 = (-b - Math.sqrt(delta)) / (2 * a);
    console.log(`Phương trình có 2 nghiệm phân biệt: x1 = ${x1}; x2 = ${x2}`);
} else if (delta === 0) {
    let x = -b / (2 * a);
    console.log(`Phương trình có nghiệm kép x1 = x2 = ${x}`);
} else {
    console.log("Phương trình vô nghiệm.");
}