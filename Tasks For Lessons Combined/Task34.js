let arr = [1, 1, 1, 2, 3, 4, 3];
//method 1 
// let uniqueElements =Array.from(new Set(arr))
//method 2
// let uniqueElements = arr.filter((item, index) => arr.indexOf(item) === index);
//method 3
let uniqueElements = arr.reduce((acc, current) => {
  if (!acc.includes(current)) {
    acc.push(current);
  }
  return acc;
}, []);
//method 4
console.log(uniqueElements); // [1, 2, 3, 4]