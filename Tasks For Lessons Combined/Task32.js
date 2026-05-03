let strNumber = "10";

// Method 1
console.log(strNumber * 1); // 10
console.log(strNumber - 0); // 10 <= Same Solution
//method2
console.log(+strNumber);

//method3
console.log(Number(strNumber));

//method4
console.log(parseInt(strNumber));

//method5
console.log(parseFloat(strNumber));

//method6
console.log(Number.parseInt(strNumber));

//method7
console.log(Math.floor(strNumber));
// Output Needed
// 10