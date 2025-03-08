let n = +prompt(`Nhập số phần tử của mảng`);
let total = 0;
if(n>0){
    let numbers = [];
    for(let i = 0; i < n; i++){
        numbers[i] = +prompt(`Nhập phần tử thứ ${i+1}`);
    }
    console.log(numbers)
    for(let i=0; i<numbers.length; i++){
        if(!Number.isNaN(numbers[i])){
            total += numbers[i];
        }
    }
    console.log(`Tổng các số là: ${total}`);
}else if(n===0){
    alert(`Mảng không có phần tử`)
}else{
    alert(`Số lượng phần tử không hợp lệ`);
}
