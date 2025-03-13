/* Xây dựng menu quản lý sinh viên, gồm các chức năng:
1.Nhập danh sách sinh viên.
Cho người dùng nhập số lượng số sinh viên, nhập lần lượt tên đầy đủ từng sinh viên.
2.Hiển thị danh sách sinh viên.
3.Tìm sinh viên theo tên.
Cho người dùng nhập tên sinh viên cần tìm kiếm, hiển thị tên đầy đủ sinh viên nếu tìm thấy, trong trường hợp không tìm thấy sinh viên thông báo sinh viên không có trong danh sách .
4.Xóa sinh viên khỏi danh sách.
Cho người dùng nhập tên sinh viên cần xóa, trong trường hợp có nhiều sinh viên trùng tên thì xóa sinh viên đầu tiên.
5.Thoát.
*/
function studentMenu() {
    let students = [];
    let choice;

    do {
        choice = +prompt("Chọn chức năng:\n1. Nhập danh sách sinh viên\n2. Hiển thị danh sách sinh viên\n3. Tìm sinh viên theo tên\n4. Xóa sinh viên khỏi danh sách\n5. Thoát");

        switch (choice) {
            case 1:
                let count = +prompt("Nhập số lượng sinh viên: ");
                for (let i = 0; i < count; i++) {
                    let name = prompt("Nhập tên sinh viên thứ " + (i + 1) + ":");
                    students.push(name);
                }
                break;
            case 2:
                console.log("Danh sách sinh viên:\n" + students.join("\n"));
                break;
            case 3:
                let searchName = prompt("Nhập tên sinh viên cần tìm: ");
                let foundStudents = students.filter((student) => {
                    return student.toLowerCase().includes(searchName.toLowerCase());
                });
                console.log(foundStudents.length > 0 ? "Sinh viên tìm thấy:\n" + foundStudents.join("\n") : "Không tìm thấy sinh viên!");
                break;
            case 4:
                let deleteName = prompt("Nhập tên sinh viên cần xóa: ");
                let index = students.indexOf(deleteName);
                if (index !== -1) {
                    students.splice(index, 1);
                    console.log("Đã xóa sinh viên: " + deleteName);
                } else {
                    console.log("Không tìm thấy sinh viên để xóa!");
                }
                break;
            case 5:
                console.log("Thoát chương trình!");
                return;
            default:
                console.log("Lựa chọn không hợp lệ!");
        }
    } while (choice != 5);
}
studentMenu();