let myString = "EElllzzzzzzzeroo";

// Elzero

let newString = myString.split('').filter((char,index,arry) => {
    return arry.indexOf(char) === index
});

console.log(newString.join(""));