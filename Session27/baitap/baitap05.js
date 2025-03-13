function arrDivide(arr1, n) {
    let result = [];
    for (let i = 0; i < arr1.length; i += n) {
      result.push(arr1.slice(i, i + n));
    }
    return result;
  }
  let arr1 = [];
  let arrLength = +prompt(`Nhập số lượng số nguyên: `);
  for (let i = 0; i < arrLength; i++) {
    arr1.push(+prompt(`Nhập vào số thứ ${i + 1}: `));
  }
  let n = +prompt(`Nhập kích thước mảng con`);
  let arr2 = arr1.join(",");
  console.log(arrDivide(arr1, n));