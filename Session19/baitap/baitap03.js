let choice = prompt("Chọn loại chuyển đổi: 1: USD -> VND, 2: VND -> USD");
switch (choice) {
    case "1":
        let usd = +prompt("Nhập số tiền ($):");
        const equivalent = 23000;
        let vnd = usd * equivalent;
        alert(usd + " $ = " + vnd + " đ");
        break;
    case "2":
        let VND = +prompt("Nhập số tiền (VND):");
        const vietnam = 23000;
        let USD = VND / vietnam;
        alert(VND + " VND = " + USD + " $");
        break;
    default:
        alert("Lựa chọn không hợp lệ! Vui lòng chọn 1 hoặc 2.");
}