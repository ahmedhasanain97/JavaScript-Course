function swapEveryTwoChars(word) {
  return word.split("").map((char,i) => {
    if(i % 2 === 0){
      return char === char.toLowerCase() ? char.toUpperCase() : char.toLowerCase();
    } else{
      return char;
    }
  }).join("");
}

console.log(swapEveryTwoChars("elZeRo")); // Elzero
console.log(swapEveryTwoChars("heLlO")); // Hello