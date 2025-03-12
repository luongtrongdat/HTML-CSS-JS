let arr = [2, 5, 10, ];
if (!Array.isArray(arr)) {
    console.log(`Dữ liệu không hợp lệ`);
} else if (arr.length === 0) {
    console.log(`Mảng không có phần tử nào`);
} else {
    const newArr = arr.map(value => value**2).filter(value => value % 2 === 0);
    console.log(newArr);
}