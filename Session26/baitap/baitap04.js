let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let newArr = [];

if (!Array.isArray(arr)) {
    console.log(`Dữ liệu không hợp lệ`);
} else if (arr.length === 0) {
    console.log(`Mảng không có phần tử nào`);
} else {
    newArr = arr.filter(value => {
        let count = 0;
        for (let i = 1; i <= value; i++) {
            if(value % i === 0){
                count++;
            }
        }
        return count === 2;
    });
    console.log(newArr);
}