let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// Your Code Here
allArrs = arr2.slice(2).concat(arr1.pop()).sort();

console.log(allArrs); // fxy