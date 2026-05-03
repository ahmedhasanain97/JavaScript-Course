let nums = [20, 100, 50, 10, 15, -20, 30];
let bigNums =[nums.sort((a,b) => a-b).pop(),nums.pop()];
console.log(bigNums)
// Needed Output
// [100, 50]