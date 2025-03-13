function check(arr) {
    if (arr.length < 2) return true;
    let difference = arr[1] - arr[0];
    for (let i = 2; i < arr.length; i++) {
      if (arr[i] - arr[i - 1] !== difference) {
        return false;
      }
    }
    return true;
  }
  let arr = [];
  let arrLength = +prompt(`Nhập số lượng số nguyên: `);
  for (let i = 0; i < arrLength; i++) {
    arr.push(+prompt(`Nhập vào số thứ ${i + 1}: `));
  }
  if (check(arr)) {
    console.log("Mảng là cấp số cộng.");
  } else {
    console.log("Mảng không phải cấp số cộng.");
  }