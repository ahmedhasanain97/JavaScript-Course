function checkRange(n1, n2, n3, n4, n5) {
  // Your Code Here
//   let con1=n1 >= n4 && n1 <= n5
//   let con2=n2 >= n4 && n2 <= n5
//   let con3=n3 >= n4 && n3 <= n5
//   let finalCon = con1 && con2 && con3
//   return finalCon ?  'Yes All Numbers In Range' :  'Not All Numbers In Range'
// Better Implmentation >>>>>>>>>>>>
let array = [n1,n2,n3]
return array.every(el => el >= n4 && el <= n5)? 'Yes All Numbers In Range' :  'Not All Numbers In Range'
}

console.log(checkRange(5, 10, 15, 5, 50)); // Yes All Numbers In Range
console.log(checkRange(8, 4, 20, 2, 50)); // Yes All Numbers In Range
console.log(checkRange(10, 15, 20, 5, 18)); // Not All Numbers Is In Range