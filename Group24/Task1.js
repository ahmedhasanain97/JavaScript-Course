let birthday = new Date("dec 15,97");
let now = new Date();
let ageCal = now - birthday;
console.log(`${ageCal/1000} seconds
${ageCal/1000/60} minutes
${ageCal/1000/60/60} Hours
${ageCal/1000/60/60/24} Days
${ageCal/1000/60/60/24/7} weeks
${ageCal/1000/60/60/24/30} months
${ageCal/1000/60/60/24/365} years`)