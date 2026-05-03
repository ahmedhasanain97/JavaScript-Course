let myArr = [10, 10, 20, 20, 10, 30, 50, 20, 10];
//method 1 
method1= new Set([...myArr])
console.log(method1)
//method 2 using reduce
console.log(myArr.reduce((acc,curr) => {
    if (!acc.includes(curr)) {
        acc.push(curr);
    }
    return acc
},[]))
//method 3
console.log(myArr.filter((el,index,arr) => {
    if (arr.indexOf(el)===index) return el
}))
// Output Needed
// [10, 20, 30, 50]