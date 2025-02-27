let n = parseInt(prompt("Nhập một số:"));
let x = Math.sqrt(n);
console.log(Number.isInteger(x) ? `${n} là số chính phương` : `${n} không phải số chính phương`);