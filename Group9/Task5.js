let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions
console.log(haystack.indexOf(needle) != -1 ? "found" : "not found");
console.log(haystack.includes(needle)? "found" : "not found");
console.log(haystack.lastIndexOf(needle) != -1? "found" : "not found");