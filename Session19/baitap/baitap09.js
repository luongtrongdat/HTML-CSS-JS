let result1 = "javascript" + 5; // --> javascript5 
let result2 = "javascript" - 1; // --> NaN : dạng chuỗi - dạng số
let result3 = "3" + 2; // --> 32 : chuỗi + chuỗi, vì 2, 3 chưa được định dạng về dạng số
let result4 = "5" - 4; // --> 1 : phép toán hợp lệ cả khi chưa được đưa về dạng số
let result5 =  isNaN( "123"); // false : 123 đang ở dạng chuỗi --> not a number
let result6 = isNaN("hello"); // true : hello là chuỗi nên đúng là không phải 1 số
let result7 = Number.isNaN("123"); //--> false : tương tự result 5, 123 đang là dạng chuỗi
let result8 = Number.isNaN(NaN); // --> true : NaN đúng là NaN