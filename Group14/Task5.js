let nums = [2, 12, 11, 5, 10, 1, 99];

// 500

let result= nums.reduce((acc,current) => {
    current%2==0 ? acc *= current : acc += current;
    return acc
},1)

console.log(result);