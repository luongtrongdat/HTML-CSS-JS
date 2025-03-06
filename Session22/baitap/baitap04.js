let numbers = prompt("Mời bạn nhập vào một dãy số bất kì:");
Number.isInteger(numbers);
let array = numbers.split("");
console.log(array.reverse());
let max = array[0];
for (let i = 1; i < array.length; i++) {
    if (max < array[i]) {
        max = array[i];
    }
}
console.log("Số lớn nhất trong dãy số bạn vừa nhập là: " + max);