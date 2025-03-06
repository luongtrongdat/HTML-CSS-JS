let array = [1, 2, 3, 4, 5]; 
let even = 0; 
let odd = 0;  
for (let i = 0; i < array.length; i++) {
    (array[i] % 2 == 0) ? even += array[i] : odd += array[i];
}
console.log(even, odd);