let number = prompt(`Nhập vào 1 số nguyên`);
let count = 0;
for(let i = 2; i <= number ; i++){
    if(number % i === 0){
        count++;
    }
}
if(count > 1){
    console.log(`Số ${number} không phải số nguyên tố`);    
}else{
    console.log(`Số ${number} là số nguyên tố`);
}