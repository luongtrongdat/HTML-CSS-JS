// let a = [2,4,0,4,1,5,0,6,2,6];
// let count = 0;
// let maxCount = 0;
// let max = 0;
// for (i = 0 ; i< a.length - 1 ; i++) {
//     count=1;
//     for(j= 1  ; j < a.length ; j++) {
//         if(a[i] == a[j]) {
//             count++;
//         }
//     }
//     if(count > maxCount) {
//         maxCount = count;
//         max = a[i];
//     }
// }
// console.log(`so xuat hien nhieu nhat la ${max}`);
let arr = [1,2,3,4,5,6,7,8,9,10];
let maxCount = 0;
let minElement;
for (let i = 0; i < 12; i++) {
    let count = 0;
    for (let j = 0; j < 12; j++) {
        if (arr[i] == arr[j]) {
            count++
        }
    }
    if (count > maxCount) {
        maxCount = count;
        minElement = arr[i];
    } else if (count == maxCount && minElement > arr[i]) {
        minElement = arr[i];
    }
}
console.log(`So xuat hien nhieu nhat la ${maxCount}`);
