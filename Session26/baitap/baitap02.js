/* Viết một hàm nhận vào một mảng chuỗi và trả về một mảng chỉ chứa những chuỗi có độ dài lớn hơn 5 ký tự. */
function filterArr(arr) {
    if (!Array.isArray(arr)) {
        console.log("Dữ liệu không hợp lệ");
        return;
    }
    if (arr.length == 0) {
        console.log("Mảng không có phần tử nào");
        return;
    }
    let newArr = arr.filter((item) => item.length > 5);
    console.log(newArr);
    return newArr;
}
filterArr(["apple", "banana", "cat", "elephant", "dog"]);