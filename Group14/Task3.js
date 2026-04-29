let myArray = ["E", "l", "z", ["e", "r"], "o"];

// Elzero

let newArray = myArray.reduce((acc,current) =>{ 
    if(Array.isArray(current))acc.push(...current)
    else acc.push(current)
     return acc
},[]);

console.log(newArray.join(""));