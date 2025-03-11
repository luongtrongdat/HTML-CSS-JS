/* Xây dựng hàm nhận vào một tham số là một số nguyên dương bất kì. Xây dựng hàm kiểm tra số nguyên dương có phải là số nguyên tố không. */
function kiemTraSoNguyenTo(number) {
    Number.isInteger(number);
    if (number == 1) {
        console.log("Không phải số nguyên tố");
    }
    let flag = 0;
    for (let i = 1; i <= Math.sqrt(number); i++) {
        if (number % i == 0) {
            flag++;
        }
    }
    (flag == 1) ? console.log("Là số nguyên tố"): console.log("Không phải số nguyên tố");
}
kiemTraSoNguyenTo(17);