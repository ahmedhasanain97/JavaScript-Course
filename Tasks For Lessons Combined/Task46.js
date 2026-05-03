let nums = [10, -20, 300, 50, 100, -50];
let maxNumber = nums.sort((a,b) => a-b)[nums.length-1];
console.log(maxNumber)
maxNumber=0;
maxNumber=nums.reduce((acc,curr) => (curr > acc ? curr : acc), nums[0])
console.log(maxNumber)
maxNumber=0;
maxNumber= Math.max(...nums)
console.log(maxNumber)
maxNumber=0;
for (let num of nums) {
  if (num > maxNumber) {
    maxNumber = num;
  }
}
console.log(maxNumber)
// console.log(maxNumber); // 300