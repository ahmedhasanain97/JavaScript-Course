let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";

// Output
// ['Os10O', 'OsO', 'Os100O']

let regex = /\bOs\d*O\b/ig;
console.log(specialNames.match(regex))