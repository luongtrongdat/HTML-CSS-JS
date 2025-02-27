let r = prompt("Nhập bán kính: ");
let h = prompt("Nhập chiều cao: ");
alert(
    "Chu vi đáy: " + (2 * Math.PI * r).toFixed(2) + "\n" +
    "Diện tích xung quanh: " + (2 * Math.PI * r * h).toFixed(2) + "\n" +
    "Diện tích toàn phần: " + ((2 * Math.PI * r * h) + (2 * Math.PI * r * r)).toFixed(2) + "\n" +
    "Thể tích hình trụ: " + (Math.PI * r * r * h).toFixed(2)
);