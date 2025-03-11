/* Xây dựng hàm nhận vào một tham số là một mảng chứa các phần tử bất kì. Xây dựng hàm đếm số lượng các số nguyên dương trong mảng. */
function countNumber(arr) {
    if (!Array.isArray(arr)) {
        console.log("Mảng không phù hợp");
    }
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0 && Number.isInteger(arr[i])) {
            count++;
        }
    }
    count == 0 ? console.log("Không có số nguyên dương trong mảng") : console.log(count);
}
countNumber([-4,5.4,-6,-2]);