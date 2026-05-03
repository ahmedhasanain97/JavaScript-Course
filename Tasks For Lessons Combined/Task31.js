let myArray = [100, 200, 300, 400];

// Method 1
let clonedArray = [...myArray];

//method2
let method2 = myArray.slice();
console.log(method2);

//method3
let method3 = [].concat(myArray);
console.log(method3);

//method4
let method4 = Array.from(myArray);
console.log(method4);

//method5
let method5 = myArray.map((el) => el);
console.log(method5);

//method6
let method6 = new Set(myArray);
console.log(method6);

//method7
let method7 = Object.values(myArray);
console.log(method7);

//method8
let method8 = [];
for (let i = 0; i < myArray.length; i++) {
method8.push(myArray[i]);
}
console.log(method8);

//method9
let method9 = Array.of(...myArray);
console.log(method9);

console.log(clonedArray); // [100, 200, 300, 400]