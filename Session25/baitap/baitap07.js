/* Tạo hàm biến ký tự đầu tiên ở mỗi từ thành chữ in hoa */
function upperString(string) {
    let arr = string.split(" ");
    for(let i=0; i<arr.length; i++){
        arr[i] = (arr[i])[0].toLocaleUpperCase() + arr[i].slice(1).toLowerCase();
    }
    string = arr.join(" ");
    return  string;
}
const upperfirstLetter = upperString(prompt(`Nhập vào chuỗi`));
console.log(upperfirstLetter);