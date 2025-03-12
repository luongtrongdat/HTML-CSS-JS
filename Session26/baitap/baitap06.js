let arr = ["2025-03-10", "2024-12-25", "2023-07-01"];
let result = [];
if (!Array.isArray(arr)) {
    console.log(`Dữ liệu không hợp lệ`);
} else if (arr.length === 0) {
    console.log(`Mảng không có phần tử nào`);
} else {
    arr.forEach(date => {
        const detachedDate = date.split('-');
        const reverseDate = detachedDate.reverse();
        const connectDate = reverseDate.join('/').split(' ') 
        result = result.concat(connectDate);
    })
    console.log(result);
    
}