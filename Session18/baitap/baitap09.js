let hour = +prompt("Nhập vào giờ");
let minute = +prompt("Nhập vào phút");
let second = +prompt("Nhập vào giây");
let hourUnit;
if(hour >= 0 && hour <= 12){
    hourUnit = "AM";
    hour = hour % 12;
    console.log(`${hour}:${minute}:${second} ${hourUnit}`);    
}else if(hour > 13 && hour <= 24){
    hourUnit = "PM";
    hour = hour % 12;
    console.log(`${hour}:${minute}:${second} ${hourUnit}`);    
}