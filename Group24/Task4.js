// // Needed Output

// "Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)"
// "Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)"
// "Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)"

let date1 = new Date("Oct 25 1982");

let date2 = new Date(1982, 9, 25);

let date3 = new Date(404344800000); 

console.log(date1);
console.log(date2);
console.log(date3);