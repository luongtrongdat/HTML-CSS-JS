let input = prompt("Nhập một ký tự:");
if (input.indexOf(0 || 1 || 2 || 3 || 4 || 5 || 6 || 7 || 8 || 9) != -1) {
    console.log("không phải chữ cái");
} else {
    console.log(`ký tự ${input} là chữ cái`);
}