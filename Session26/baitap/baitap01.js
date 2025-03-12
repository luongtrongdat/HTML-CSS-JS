/* Viết chương trình khởi tạo nhập vào một mảng số nguyên gồm 10 phần tử. Chương trình thực hiện hiển thị các số nguyên lớn hơn hoặc bằng 10 ra màn hình.
3. Kết quả mong muốn
input:
-[1, 22, 10, 9, 8]
-[ 22, 10]
-[]
output:
-Mảng không có phần tử nào
-“abc”
-Dữ liệu không hợp lệ
*/
filterNumber();
function filterNumber(){
    let array=[];
    for (let i = 0; i < 10; i++) {
        let number=+prompt("Nhập phần tử thứ "+(i+1)+": ");
        if(!Number.isInteger(Number(number))){
            array.push(number);
        }else{
            console.log("Dữ liệu không hợp lệ");
            return;
        }
    }
    let newArr=array.filter((item)=>{
        return item >= 10;
    })
    newArr.length == 0 ? console.log("Mảng không có phần tử nào") : console.log(newArr);
    return newArr;
}