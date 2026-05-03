let names = ["Osso", "Aola", "Essa", "Igaa", "Daad", "Roor"];
let result = [];

// Your Code Here
result=names.filter(ele => ele[0].toLowerCase()===ele[ele.length-1].toLowerCase())
console.log(result); // ['Osso', 'Aola', 'Daad', 'Roor']