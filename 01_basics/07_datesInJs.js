// Dates

// let myDate = new Date()
// console.log(myDate.toString());     // Thu Aug 07 2025 04:38:44 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString()); // Thu Aug 07 2025
// console.log(myDate.toISOString());  // 2025-08-06T23:08:44.014Z
// console.log(myDate.toJSON());       // 2025-08-06T23:08:44.014Z
// console.log(myDate.toLocaleDateString());  // 7/8/2025
// console.log(myDate.toLocaleString());    // 7/8/2025, 4:38:44 am
// console.log(myDate.toLocaleTimeString());  // 4:38:44 am
// console.log(myDate.toTimeString());  // 04:38:44 GMT+0530 (India Standard Time)
// console.log(myDate.toUTCString());   // Wed, 06 Aug 2025 23:08:44 GMT
// console.log(myDate.getTimezoneOffset()); // -330
// console.log(myDate.getHours());     // 4
// console.log(myDate.getMonth());     // 7


// console.log(typeof myDate);

let myCreatedDate = new Date(2025, 7, 7)
let myCreatedDate2 = new Date(2025, 7, 7,4,12,45)
let myCreatedDate3 = new Date("2025-08-07")
// console.log(myCreatedDate.toDateString())
// console.log(myCreatedDate2.toLocaleString())



let myTimeStamp = Date.now();
// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime())
console.log(Date.now()/1000) // 1754522558.959 gives decimal values 
console.log(Math.floor(Date.now()/1000)) // 1754522558 removes decimal value


let newDate = new Date()
console.log(newDate);
console.log(newDate.getDay());
console.log(newDate.getMonth() + 1);
console.log(newDate.getFullYear());
console.log(newDate.getHours());
console.log(newDate.getHours());
console.log(newDate.getTime());


console.log(`today is day ${newDate.getDay()} and the time is ${newDate.getTime().toLocaleString()}`)



console.log(newDate.toLocaleString('default', {
    weekday: "short"
}))