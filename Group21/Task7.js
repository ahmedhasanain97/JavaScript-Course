let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];

// Needed Output
[1, 2, 3, 4, 5, 6]
//one
let mergedArray = numsOne.concat(numsTwo)
//two
mergedArray = [...numsOne,...numsTwo]
//three
mergedArray = numsOne.concat(...numsTwo)
console.log(mergedArray)
