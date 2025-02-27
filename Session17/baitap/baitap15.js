let r = prompt("Nhập bán kính của hình cầu: ");
alert(
    "Thể tích hình cầu: " + ((4 / 3) * Math.PI * Math.pow(r, 3)).toFixed(2) + "\n" +
    "Diện tích bề mặt: " + (4 * Math.PI * Math.pow(r, 2)).toFixed(2) + "\n" +
    "Chu vi lớn nhất: " + (2 * Math.PI * r).toFixed(2)
);