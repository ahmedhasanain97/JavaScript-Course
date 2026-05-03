function formatName(theName) {
  // Your Code Here
  return theName.split(" ").map((ele,index) =>{
    return index==0?ele.slice(0,1).toUpperCase() : ele.slice(0,1).toLowerCase() 
  }).join(".")
}

console.log(formatName("Osama Elzero")); // O.e
console.log(formatName("Elzero Web School")); // E.w.s