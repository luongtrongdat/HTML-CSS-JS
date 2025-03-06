let a = [2,4,0,4,1,5,0,6,2,6];
let count = 0;
let maxCount = 0;
let max = 0;
for (i = 0 ; i< a.length - 1 ; i++) {
    count=1;
    for(j= 1  ; j < a.length ; j++) {
        if(a[i] == a[j]) {
            count++;
        }
    }
    if(count > maxCount) {
        maxCount = count;
        max = a[i];
    }
}
console.log(`so xuat hien nhieu nhat la ${max}`);