/* Xây dựng hàm nhận vào 2 tham số là giá trị của 2 số nguyên bất kì. Hàm thực hiện tính tổng và trả về giá trị. */
function sum(a, b) {
   if (Number.isInteger(a) && Number.isInteger(b)) {
      let total = a + b;
      console.log(total);
    } else {
        console.log("Dữ liệu không hợp lệ");
    }
}
sum(2, 4.5); 