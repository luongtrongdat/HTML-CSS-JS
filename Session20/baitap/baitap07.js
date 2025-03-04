let n = +prompt(`Nhập vào n`);
let fiboNum = [];
fiboNum[0] = 0;
fiboNum[1] = 1;
for( let i = 2; i < n; i++){
    fiboNum[i] = fiboNum[i-1] + fiboNum[i-2]; 
}
for(let i = 1; i<fiboNum.length; i++){
    console.log(`${fiboNum[i]}`)
}