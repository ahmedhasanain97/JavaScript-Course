// Write Your Function Here
function customMerge(...arr){
    let result=[]
    for (let i = 0; i < arr.length; i++) {
        result.push(...arr[i].map(Number))
    }
    return result.sort((a,b) => a-b)
}
console.log(customMerge([10, 20, "30", 1000], [100, "50", 20], [90, 20, "40", 10]));
// [10, 10, 20, 20, 20, 30, 40, 50, 90, 100, 1000]