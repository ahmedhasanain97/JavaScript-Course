let n1 = [10, 30, 10, 20];
let n2 = [30, 20, 10];

// Needed Output
//210
//10301020302010

console.log([...n1,...n2].length * (n2.sort().pop()) )
