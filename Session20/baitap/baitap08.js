let n = prompt(`Nhập vào 1 số nguyên`);
let count = 0;
let count2 = 0;
for(let j = 2; j <= n; j++){
    count = 0;
    for(let i = 2; i <= j ; i++){
        if(j % i === 0){
            count++;
        }
    }
    if(count <= 1){
        console.log(`${j}`); 
        count2++;
    }
}
if(count2 < 1){
    console.log(`Không có số nguyên tố nào`);
}