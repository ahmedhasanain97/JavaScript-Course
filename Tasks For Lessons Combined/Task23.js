function reversing(str) {
  // Write Your Code Here
    return str.replace(/[a-zA-Z]+/g, (word) => {
        return word.split("").reverse().join("");
    });
}

console.log(reversing(",@Hello, E@lzero")); // ,@olleH, E@orezl