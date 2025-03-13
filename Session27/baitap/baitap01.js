/* Xây dựng menu tính toán trên hai số, gồm các chức năng:
1,Cộng hai số.
2,Trừ hai số.
3,Nhân hai số.
4,Chia hai số.
5,Thoát.
*/
let choice = 0;
do {
    choice = +prompt(`Nhập lựa chọn: \n1,Cộng hai số.\n2,Trừ hai số.\n3,Nhân hai số.\n4,Chia hai số.\n5,Thoát.`)
    switch (choice) {
        case 1:
                sum(input());
            break;
        case 2:
            subtraction(input());
            break;
        case 3:
            multiplication(input());
            break;
        case 4:
            division(input());
            break;
        case 5:
            console.log("Thoát.");
            break;
        default:
            console.log("Vui lòng nhập lại!!");
            break;
    }
} while (choice !== 5);
function sum(dat){
    if (Number.isInteger(dat[0]) && Number.isInteger(dat[1])){
        let total = dat[0] + dat[1];
        console.log(total);
    } else {
        console.log("Dữ liệu không hợp lệ.");   
    }
}
function subtraction(dat){
    if (Number.isInteger(a) && Number.isInteger(b)){
        let hieu = dat[0] - dat[1];
        console.log(hieu);
    } else {
        console.log("Dữ liệu không hợp lệ.");
    }
}
function multiplication(dat){
    if (Number.isInteger(a) && Number.isInteger(b)){
        let tich = dat[0] * dat[1];
        console.log(tich);
    } else {
        console.log("Dữ liệu không hợp lệ.");
    }
}
function division(dat) {
    /* if (Number.isInteger(a) && Number.isInteger(b)){
        let thuong = dat[0] / dat[1];
        if (let i )
        console.log(thuong);
    } else {
        console.log("Dữ liệu không hợp lệ");
    } */
}
function input(){
    a = +prompt("Nhập số thứ 1.");
    b = +prompt("Nhập số thứ 2.");
    return [a,b]; 
}