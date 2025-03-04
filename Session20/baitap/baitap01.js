let number = +prompt("mời nhập số");
if(number > 0 && Number.isInteger(number)){
    let sum = 0;
    for(let i = 0 ; i<= number ; i++){
        sum = sum + i;
    }
    console.log(sum);
}else{
    alert("Không hợp lệ");
}