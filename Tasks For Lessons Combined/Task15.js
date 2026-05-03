function concatenateWithoutLast(words) {
  // Your Code Here
  return words.map(ele => ele.slice(0,-1)).join(" ")
}

console.log(concatenateWithoutLast(["Elzeros", "Webd", "Schoold"])); // Elzero Web School