/* Xây dựng menu tính toán hình học, gồm các chức năng:
1.Tính diện tích hình tròn.
2.Tính chu vi hình tròn.
3.Tính diện tích hình chữ nhật.
4.Tính chu vi hình chữ nhật.
5.Thoát. */
function main() {
    let choice = 0;
    do {
        choice = +prompt("Nhập lựa chọn:\n1.Tính diện tích hình tròn.\n2.Tính chu vi hình tròn.\n3.Tính diện tích hình chữ nhật.\n4.Tính chu vi hình chữ nhật.\n5.Thoát.");
        switch (choice) {
            case 1:
                let banKinh = +prompt("Nhập vào bán kính hinh tròn.");
                if (!Number.isInteger(banKinh)) {
                    console.log("Không thỏa mãn");
                } else {
                    let dienTich = Math.PI*banKinh*banKinh;
                    console.log("Diện tích hình tròn là:", dienTich);
                }
                break;
            case 2:
                let banKinh2 = +prompt("Nhập vào bán kính hình tròn.");
                if (!Number.isInteger(banKinh2)) {
                    console.log("Không thỏa mãn");
                } else {
                    let chuVi = 2*Math.PI*banKinh2;
                    console.log("Chu vi hình tròn là:",chuVi);
                }
                break;
            case 3:
                let chieuDai = +prompt("Nhập chiều dài của HCN");
                let chieuRong = +prompt("Nhập chiểu rộng của HCN");
                if (!Number.isInteger(chieuDai) && !Number.isInteger(chieuRong)) {
                    console.log("Không thỏa mãn");
                } else {
                    let dienTichHcn = chieuDai * chieuRong;
                    console.log("Diện tích hình chữ nhật là:",dienTichHcn);
                }
                break;
            case 4:
                let chieuDaiHcn = +prompt("Nhập chiều dài của HCN");
                let chieuRongHcn = +prompt("Nhập chiểu rộng của HCN");
                if (!Number.isInteger(chieuDaiHcn) && !Number.isInteger(chieuRongHcn)) {
                    console.log("Không thỏa mãn");
                } else {
                    let chuViHcn = (chieuDaiHcn + chieuRongHcn) * 2;
                    console.log("Chu vi hình chữ nhật là:",chuViHcn);
                }
                break;
            default:
                console.log("Vui lòng nhập lại!!");               
                break;
        }
    } while (choice !== 5);
}
main();