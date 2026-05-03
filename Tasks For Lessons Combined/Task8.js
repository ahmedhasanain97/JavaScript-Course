let nums = [10, 80, 85, 25, 30, 88, 15];
let goal = 100;

// Your Code Here
let closest = nums[0];
//انا حليتها من غير abs بس دورت علي طريقة احسن احلها بيها
for (let i = 1; i < nums.length; i++) {
  if (Math.abs(goal - nums[i]) < Math.abs(goal - closest)) {
    closest = nums[i];
  }
}

console.log("Closest Number Is", closest);
// Closest Number Is 88