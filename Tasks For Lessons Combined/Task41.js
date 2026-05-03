const myData = {
  user: "Elzero",
  age: 41,
  country: "Egypt",
};

// Your Code Here
let cloned=Object.assign(myData)
let cloned1=myData;
let cloned2={...myData}
let cloned3=structuredClone(myData)
console.log(cloned3); // {user: 'Elzero', age: 41, country: 'Egypt'}