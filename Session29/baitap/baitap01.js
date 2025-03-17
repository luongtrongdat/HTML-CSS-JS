/* Xây dựng ứng dụng  quản lý danh bạ, mỗi đối tượng “Contact” bao gồm các thuộc tính: 
    id (số nguyên): Định danh duy nhất cho mỗi liên hệ.
    name (string): Tên của người liên hệ.
    email (string): Email của người liên hệ.
    phone (string): Số điện thoại của người liên hệ.
Các chức năng:
1.Thêm đối tượng Contact vào danh sách liên hệ.
2.Hiển thị danh sách danh bạ.
3.Tìm kiếm thông tin Contact theo số điện thoại.
4.Cập nhật thông tin Contact(name, email, phone) theo id.
5.Xóa một đối tượng Contact  khỏi danh sách danh bạ theo id.
6.Thoát.
*/
let choice = 0;
let contact = [];
do {
    choice = +prompt("1.Thêm đối tượng Contact vào danh sách liên hệ.\n2.Hiển thị danh sách danh bạ.\n3.Tìm kiếm thông tin Contact theo số điện thoại.\n4.Cập nhật thông tin Contact(name, email, phone) theo id.\n5.Xóa một đối tượng Contact  khỏi danh sách danh bạ theo id.\n6.Thoát.");
    switch (choice) {
        case 1:
            // 1.Thêm đối tượng Contact vào danh sách liên hệ.
            addObject();
            break;
        case 2:
            // 2.Hiển thị danh sách danh bạ.
            showObject();
            break;
        case 3:
            // 3.Tìm kiếm thông tin Contact theo số điện thoại.
            findByPhoneNumber();
            break;
        case 4:
            updateContact();
            break;
        case 5:
            deleteContact();
            break;
        case 6:
            console.log("Thoát!!!"); 
            break;
        default:
            console.log("Vui lòng nhập lại!!!");
            break;
    }
} while (choice !== 6);
// Tạo hàm thêm đối tượng vào danh sách liên hệ
function addContact() {
    let id = contact.length > 0 ? contact[contact.length - 1].id + 1 : 1;
    let name = prompt("Nhập tên");
    let email = prompt("Nhập email");
    let phone = +prompt("Nhập số điện thoại");
    let object = {
        id: id,
        name: name,
        email: email,
        phone: phone,
    }
    contact.push(object);
    console.log("thêm nhân viên thành công", contact);    
}
// Tạo hàm hiển thị danh sách danh bạ.
function showContact() {
    if (contact.length === 0) {
        console.log("Không có nhân viên");
    } else {
        console.table(contact);
    }
}
// Tạo hàm tìm kiếm thông tin Contact theo số điện thoại.
function findByPhoneNumber(contact){
    const phoneOfContactInput = prompt('Nhập số điện thoại muốn tìm kiếm:');
    const indexOfPhoneNumber = contact.findIndex((contact) => contact.phone === phoneOfContactInput);
    
    if(indexOfPhoneNumber !== -1){
        console.table(contact[indexOfPhoneNumber]);
    }
    else{
        alert('Số điện thoại không tồn tại');
    }
}
// Tạo hàm cập nhật thông tin Contact(name, email, phone) theo id.
function updateContact(contact){
    const idUpdateInput = +prompt('Nhập ID liên hệ muốn chỉnh sửa:');
    const indexOfContactUpdate = contact.findIndex((contact) => contact.id === idUpdateInput);
    let nameOfContactInput;
    let emailOfContactInput;
    let phoneOfContactInput;
    let confirmUpdate;

    if(indexOfContactUpdate !== -1){
        nameOfContactInput = prompt('Nhập tên nhân viên:');
        emailOfContactInput = prompt('Nhập email:');
        phoneOfContactInput = prompt('Nhập số điện thoại:');
        confirmUpdate = confirm('Bạn có xác nhận thay đổi thông tin của liên hệ này không');
    }

    if(confirmUpdate){
        contact[indexOfContactUpdate].fullName = nameOfContactInput;
        contact[indexOfContactUpdate].email = emailOfContactInput;
        contact[indexOfContactUpdate].phone = phoneOfContactInput;
        return contact;
    }
    alert('ID liên hệ không tồn tại');
   
}
// Tạo hàm xóa một đối tượng Contact  khỏi danh sách danh bạ theo id.
function deleteContact(contact){
    const idDeleteContact = +prompt('Nhập ID liên hệ muốn xóa:');
    const indexOfContactDelete = contact.findIndex((contact) => contact.id === idDeleteContact);
    let confirmDelete;

    if(indexOfContactDelete !== -1){
        confirmDelete = confirm('Bạn có xác nhận xóa liên hệ này không?');
    }

    if(confirmDelete){
        alert('Xóa liên hệ thành công');
        return contact.splice(indexOfContactDelete, 1);
    }
    alert('ID liên hệ không tồn tại');
}


