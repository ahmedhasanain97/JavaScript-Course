let myArr = [10, 10, 20, 20, 10, 30, 50, 20, 10];
// method 1
// myArr= []
//method 2
// let len = myArr.length
// for (let i = 0; i < len; i++) {
//     myArr.pop()
// }
//method 3
// myArr.length=0;
//method 4
myArr=myArr.filter(() => false)
console.log(myArr)
// Output Needed
// []