function addEl(str) {
  // Your Code Here
  let El="El"
  if(str.length == 0) return str
  else if (str.slice(0,2) == "El") return str
  else return El+=str
}

console.log(addEl("")); // ""
console.log(addEl("Elzero")); // Elzero
console.log(addEl("zero")); // Elzero