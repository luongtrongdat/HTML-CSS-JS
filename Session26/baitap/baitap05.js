let arr = [10, 9, 5, 11, 24, 5];

if (!Array.isArray(arr)) {
    console.log(`Dữ liệu không hợp lệ`);
} else if (arr.length === 0) {
    console.log(`Mảng không có phần tử nào`);
} else {
    let max = -Infinity;
    let maxIndex = 0;
    arr.forEach((value,valueIndex) => {
        if(value > max){
            max = value;
            maxIndex = valueIndex;
        }
    });
    console.log(`Max = ${max}
Position: ${maxIndex}`);
}
