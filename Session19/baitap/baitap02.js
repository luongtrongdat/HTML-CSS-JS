let input = prompt("Nhập một ký tự: ");
let chucai = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
if (input.length === 1 && chucai.indexOf(input) !== -1) {
    console.log(`ký tự ${input} là chữ cái`);
    document.write(`ký tự ${input} là chữ cái`);
    alert(`ký tự ${input} là chữ cái`);
} else {
    console.log("không phải chữ cái");
    document.write("không phải chữ cái");
    alert("không phải chữ cái");
}