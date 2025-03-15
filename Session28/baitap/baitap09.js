/* 
1.tạo mảng lưu danh sách nhân viên
2. tạo đối tượng nhân viên
    + thêm
    + xóa
    + tìm kiếm
    + cập nhật
*/
let employees = []; // tạo mảng chứa danh sách nhân viên
while (true) {
    let choice = +prompt(
        `
        1.Thêm nhân viên mới.
        2.Xóa nhân viên theo id.
            Tìm thấy nhân viên có id confirm người dùng muốn xóa nhân viên hay không?
            Không tìm thấy nhân viên có id thì hiển thị thông báo.
        3. Cập nhật mức lương của nhân viên theo id
        4. Tìm kiếm nhân viên theo tên.
        5. Thoát 
        `
    );
    switch (choice) {
        case 1:
        // thêm nhân viên
            addNewEmployee();
            break;
        case 2:
            deleteEmployee();
            break;
        case 3:
            updateSalary();
            break;
        case 4:
            searchName();
            break;
        default:
            break;
    }
    if (choice == 5) {
        break;
    }
}
// function thêm nhân viên
function addNewEmployee() {
    let name1 = prompt("nhập tên");
    let position = prompt("nhập vị trí");
    let salary = +prompt("mời nhập lương");
    let id = Math.floor(Math.random() * 5575676 + new Date().getMilliseconds())
    // tạo đối tượng nhân viên
    let employee = {
        id: id,
        name: name1,
        salary: salary,
        position: position,
    }
    // thêm nhân viên vào trong mảng
    employees.push(employee);
    console.log("thêm nhân viên thành công", employees);
}
// hàm đi xóa nhân viên theo id
function deleteEmployee() {
    let id = +prompt("nhập id nhân viên muốn xóa");
    let findIndex = employees.findIndex(item => item.id == id);
        if (findIndex != -1) {
            let confitmDelete = confirm("bạn có muốn xóa hay không?");
                if (confitmDelete) {
                    employees.splice(findIndex, 1);
                    console.log("xóa nhân viên thành công!");
                }
        } else {
            console.log("không tìm thấy nhân viên có id là: ", id);
        }
}
// Cập nhật mức lương của nhân viên theo id
function updateSalary() {

}
// Tìm kiếm nhân viên theo tên.
function searchName() {

}