let listBook = [
    {
        id : 1,
        name : "A",
        price : 100000,
        quantity : 100,
        category : "Hành động",
    },
    {
        id : 2,
        name : "B",
        price : 100000,
        quantity : 100,
        category : "Khoa học",
    },
    {
        id : 3,
        name : "C",
        price : 100000,
        quantity : 100,
        category : "Tiểu thuyết",
    },
    {
        id : 4,
        name : "D",
        price : 100000,
        quantity : 100,
        category : "Hành động"
    },
];
let carts = [];
let choice = 0;
do {
    choice = +prompt(`
        Nhập lựa chọn:
        1.Hiển thị danh sách sách theo thể loại
        2.Thêm sách mới vào kho
        3.Tìm kiếm sách theo tên hoặc id.
        4.Mua sách
        5.Sắp xếp sách theo giá
        6.Tính tổng số lượng sách đã mua và in ra tổng tiền trong giỏ hàng
        7.Hiển thị tổng số lượng sách trong kho.
        8.Thoát chương trình.
    `)
    switch (choice) {
        case 1:
            displayBookByCategory();
            break;
        case 2:
            addBook();
            break;
        case 3:
            searchBook();
            break;
        case 4:
            buyBook();
            break;
        case 5:
            sortBook();
            break;
        case 6:
            payBook();
            break;
        case 7:
            showendBook();
            break;
        case 8:
            console.log("Thoát chương trình.");            
            break;
        default:
            console.log("Vui lòng nhập lại!!!");        
            break;
    }
} while (choice !== 8);
function displayBookByCategory() {
    let choice = +prompt(`
        1: Khoa học
        2: Hành động
        3: Tiểu thuyết
    `);
    let listBookByCategory = [];
    if (choice === 1) {
        listBookByCategory = listBook.filter((book) => book.category === "Khoa học");
    } else if (choice === 2) {
        listBookByCategory = listBook.filter((book) => book.category === "Hành động");
    } else if (choice === 3) {
        listBookByCategory = listBook.filter((book) => book.category === "Tiểu thuyết");
    } else {
        console.log("Lựa chọn không hợp lệ");
    }
    console.log(listBookByCategory);
}
function addBook() {
    let id = listBook.length > 0 ? listBook[listBook.length - 1].id + 1 : 1;
    let name = prompt("Nhập tên sách");
    let price = +prompt("Nhập giá");
    let quantity = +prompt("Nhập số lượng");
    let category = prompt("Nhập thể loại");
    let newBook = {
        id: id,
        name: name,
        price: price,
        quantity: quantity,
        category: category
    };
    listBook.push(newBook);
    console.log("Sách đã được thêm thành công!", newBook);
}
function searchBook(){
    let choice =+prompt(`
        1. Tìm kiếm theo tên
        2. Tìm kiếm theo ID
        `);
    switch(choice){
        case 1:
            searchByName();
            break;
        case 2:
            searchById();
            break;
        default:
            console.log("Lựa chọn không hợp lệ. Mời bạn nhập lại.");
            break;
    }    
}
function searchByName(){
    let searchName=prompt("Nhập tên sách cần tìm kiếm:");
    let filterName=listBook.filter(item=>item.name==searchName);
    if(filterName){
        console.table(filterName);
    }else{
        console.log("Không có sẵn phẩm trong cửa hàng");
    }
}
function searchById(){
    let searchId=+prompt("Nhập ID sách cần tìm kiếm:");
    let filterId=listBook.filter(item=>item.id==searchId);
    if(filterId){
        console.table(filterId);
    }else{
        console.log("Không có sẵn phẩm trong cửa hàng");
    }
}
function buyBook(){

    let searchId=+prompt("Nhập ID sản phẩm cần mua:");
    let index=listBook.findIndex(item=>item.id==searchId);
    if(index!=-1){
        let quantity=+prompt("Mời bạn nhập số lượng sản phẩm:");
        if(quantity > listBook[index].quantity){
            console.log(`Sản phẩm không đủ, còn lại ${listBook[index].quantity}`)
        }else{
            listBook[index].quantity-=quantity;
            let indexCart = carts.findIndex(item=>item.id==searchId);
            if(indexCart==-1){
                carts.push({
                    id:searchId,
                    name: listBook[index].name,
                    price:listBook[index].price,
                    quantity:quantity,
                    category:listBook[index].category
                })
                console.log("Thêm giỏ hàng thành công");
                console.table(carts);
            }else{
                carts[indexCart].quantity+=quantity;
                console.log("Thêm giỏ hàng thành công");
                console.table(carts);
            }
        }
    }else{
        console.log("Không có sẵn phẩm trong cửa hàng")
    }
}
function sortBook(){
    let choice=prompt(`
        a.Tăng dần
        b.Giảm dần
        `)
    switch (choice) {
        case "a":
            listBook.sort((a, b) => a.price - b.price);
            console.log(listBook);
            break;
        case "b":
            listBook.sort((a, b) => b.price - a.price);
            console.log(listBook);
            break;
        default:
            console.log("Lựa chọn không hợp lệ. Mời bạn nhập lại.");
            break;
    }
}
function payBook() {
    if (carts.length === 0) {
        console.log("Giỏ hàng của bạn đang trống.");
    } else {
        let sumQuantity = carts.reduce((sum, carts) => sum + carts.quantity,0);
        console.log(`Tổng số sách trong giỏ hàng là: ${sumQuantity}`);
        let total = carts.reduce((sum, item) => sum + item.price * item.quantity, 0);
        console.log(`Tổng số tiền cần thanh toán: ${total.toLocaleString()} VNĐ`);
    }
}
function showendBook(){
    let sumQuantity = listBook.reduce((sum, listBook) => sum + listBook.quantity,0);
    console.log(`Tổng số lượng sách trong kho là: ${sumQuantity}`);
}