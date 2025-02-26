let num1 = +prompt("Nhập vào số thứ nhất:");
let num2 = +prompt("Nhập vào số thứ hai:");
let num3 = +prompt("Nhập vào số thứ ba:");
let max;
if(num1 > num2){
    max = num1;
    if(num3 > max){
        max = num3;
    }
}else{
    max = num2;
    if(num3 > max){
        max = num3;
    }
}
document.write(`Max = ${max}`);