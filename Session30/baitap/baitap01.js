let products = [
    {
        id: 1,
        name: "mèn mén",
        price: 20000,
        quantity: 20,
        category: "món ăn dân tộc Mông"
    },
    {
        id: 2,
        name: "mứt",
        price: 80000,
        quantity: 21,
        category: "món ăn dân tộc Kinh"
    },
    {
        id: 3,
        name: "cơm lam",
        price: 40000,
        quantity: 15,
        category: "món ăn dân tộc Mông"
    },
    {
        id: 4,
        name: "bánh đậu xanh",
        price: 60000,
        quantity: 30,
        category: "món ăn dân tộc Kinh"
    }
];
let cart = []; // Giỏ hàng để đi mua hàng
// Tạo menu
while (true) {
    let choice = +prompt(`
        1. Hiển thị sản phẩm theo danh mục
        2. Đi mua hàng 
        3. Sắp xếp sản phẩm theo giá
        4. Tính hóa đơn
        5. Thoát
        `)
    if (choice==5) {
        break;
    }
    switch (choice) {
        case 1:
            // Tạo hàm lọc những sản phẩm
            showProductByCategory();
            break;
        case 2:
            // Tạo hàm đi mua hàng
            addToCart();
            break;
        case 3:
            // Tạo hàm sắp xếp sp theo giá
            handleSort();
            break;
        case 4:
            // Tạo hàm thanh toán
            handleGetTotalPrice();
            break;
        case 5:
            console.log("Thoát.");
            break;
        default:
            break;
    }
}
// Tạo hàm lọc sp theo danh mục
function showProductByCategory() {
    let choice = +prompt(`
        1.Món ăn của dân tộc Kinh
        2.Món ăn của dân tộc Mông            
    `)
    if (choice == 1) {
        // Lọc sản phẩm theo category == Món ăn dân tộc Kinh
        let result = products.filter(item => item.category == "món ăn dân tộc Kinh");
        console.log(result);
    } else if(choice == 2) {
        let result = products.filter(item => item.category == "món ăn dân tộc Mông");
        console.log(result);
    } else {
        console.log("Lựa chọn không hợp lệ!");
    }
}
// Tạo hàm đi mua hàng
function addToCart() {
    let productId = +prompt("Nhập id sản phẩm cần mua");
    // Kiểm tra sp có trong cửa hàng hay không?
    let productIndex = products.findIndex(item=>item.id==productId);
    if (productIndex) {
        let quantity = +prompt("Nhập số lượng:");
        if (quantity > products[productIndex].quantity) {
            console.log(`Sản phẩm không đủ, còn lại ${products[productIndex].quantity} sản phẩm`);
        } else {
            // trong trường hợp ng dùng nhập số lượng mua thỏa mãm
            // giảm số lượng trg cửa hàng
            products[productIndex].quantity -= quantity;
            // tiến hành thêm vào giỏ hàng
            // kiểm tra xem sp đã có trg giỏ hàng chưa
            // nếu có tăng số lượng, nếu chưa thì push vào giỏ hàng
            let index = cart.findIndex(item=>item.id==productId);
            if (index == -1) {
                // sp chưa có trg giỏ hàng
                /* cart.push({
                    id : productId,
                    name : products[productIndex].name,
                    quantity : quantity,
                    category : products[productIndex].category
                }) */
               cart.push({...products[productIndex],quantity : quantity});
               console.log("Thêm sp thành công.", cart);
            } else {
                // sp đã có trg cửa hàng
                // cập nhật số lượng
                cart[index].quantity += quantity;
                console.log("Thêm sp thành công.", cart);    
            }
        }
    } else {
        console.log("Sản phẩm không có trong cửa hàng.");  
    }
}
// Tạo hàm sắp xếp sp theo giá
function handleSort(products) {
    let choice = +prompt(`
        1.Tăng dần
        2.Giảm dần
    `);
    products.sort((a, b) => choice == 1 ? a.price - b.price : b.price - a.price);
    console.log(products);
}
// Tạo hàm thanh toán
function handleGetTotalPrice(cart) {
    let total = cart.reduce((total, product) => total + product.price * product.quantity, 0);
    console.log(total);
}
