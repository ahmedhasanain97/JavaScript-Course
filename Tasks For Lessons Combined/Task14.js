function repeatWithRules(word) {
    let result="";
  // Your Code Here
//   for (let i = 0; i < word.length; i++) {
//     let repeat="";
//     for (let j = 0; j <= i; j++) {
//         repeat+=word[i]
//     }
//     result+=repeat
//   }
    //better impmentaition >>>>>>>>>>>>
    for (let i = 0; i < word.length; i++) {
        result += word[i].repeat(i + 1);
    }
  return result;
}

console.log(repeatWithRules("Elzero")); // Ellzzzeeeerrrrroooooo
console.log(repeatWithRules("Hello")); // Heelllllllooooo