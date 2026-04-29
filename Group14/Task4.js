let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

// [-1, -10, 10, 20, -5, -3]

let newArray = numsAndStrings.filter((char) =>{
    if(Number.isInteger(char)) return char
}).map((number) =>{
    return -number
});
console.log(newArray);