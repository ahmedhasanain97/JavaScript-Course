let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

// Elzero

function onlyLetters(element){
    if(isNaN(element))
    {
        return element
    }
    else{
        return ""
    }
}
let newMix = mix.map(onlyLetters);
console.log(newMix)

console.log(newMix.reduce((accumulator, current) => accumulator + current, ""))