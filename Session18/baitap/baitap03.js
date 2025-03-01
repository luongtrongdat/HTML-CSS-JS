let name = prompt("Nhập tên đăng nhập:");
    if (name === "ADMIN") {
let password = prompt("Nhập mật khẩu:");
    if (password === "TheMaster") {
        console.log("Welcome");
    } else if (password === '') {
        console.log("Cancelled");
    } else {
        console.log("Wrong password");
    }
} else if (name === '') {
    console.log("Cancelled");
} else {
     console.log("I Don’t know you");
}