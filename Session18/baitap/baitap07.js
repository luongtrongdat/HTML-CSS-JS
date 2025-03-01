
let mathMethod = prompt("Nhập vào phép tính muốn thực hiện (+,-, *, /)");
let a = +prompt("Nhập vào số a");
let b = +prompt("Nhập vào số b");
let result = 0;
switch(mathMethod){
    case "+" :
        result = a + b;
        alert(`Kết quả của phép tính: ${a} + ${b} = ${result}`);
    break;
    case "-" :
        result = a - b;
        alert(`Kết quả của phép tính: ${a} - ${b} = ${result}`);
    break;
    case "*" :
        result = a * b;
        alert(`Kết quả của phép tính: ${a} * ${b} = ${result}`);
    break;
    case "/" :
        result = a / b;
        alert(`Kết quả của phép tính: ${a} / ${b} = ${result}`);
    break;
}