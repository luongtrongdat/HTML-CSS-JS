let a = +prompt("Nhập vào độ dài cạnh thứ nhất");
let b = +prompt("Nhập vào độ dài cạnh thứ hai");
let c = +prompt("Nhập vào độ dài cạnh thứ ba");
if(a !== 0 && b !== 0 && c !== 0){
    if(a === b && b === c && a === c){
        console.log("Đây là tam giác đềuu");
    }else if(a === b || a === c || b === c){
        console.log("Đây là tam giác cân");   
    }else if( a**2 + c**2 === b**2 || a**2 + b**2 === c**2 || b**2 + c**2 === a**2){
        console.log("Đây là tam giác vuông");
    }else{
        console.log("Đây là tam giác thường");
    } 
}else{
    alert("Độ dài nhập vào không hợp lệ");
}