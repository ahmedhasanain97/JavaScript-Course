function checkBiggestNum(word) {
  // Your Line Of Code Here
  return [...word].sort().pop();
}

console.log(checkBiggestNum("1500654")); // 6
console.log(checkBiggestNum("8509507")); // 9