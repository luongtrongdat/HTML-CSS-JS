let year = +prompt("Nhập vào năm cần kiểm tra");
if((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0){
    console.log(`Năm ${year} là năm nhuận`);
}else{
    console.log(`Năm ${year} không phải năm nhuận`);
}