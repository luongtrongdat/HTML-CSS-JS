let number = +prompt("Nhập vào số: ");
let text_number = number.toString();
if (Number.isInteger(number)) {
    let check = 0;
    for (let i = 0; i < text_number.length / 2; i++) {
        if (text_number[i] !== text_number[text_number.length - 1 - i]) {
            check++;
            break;
        }
    }
    console.log(check == 0 ? "Số đã nhập là số đối xứng" : "Số đã nhập không phải là số đôi xúng");
} else {
    console.log("Số đã nhập không phải là số nguyên");
}