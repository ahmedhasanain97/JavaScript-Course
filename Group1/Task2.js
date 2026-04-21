const myElement = document.createElement("h1");
myElement.textContent ="Elzero";
myElement.style.cssText = "color: blue;font-size: 80px;font-weight: bold;text-align: center;font-family: Arial;"
document.body.appendChild(myElement);

//task 3
console.log("%cElzero %cWeb %cSchool","color:red;font-size:40px;","color:green;font-weight:bold;font-size:40px;","color:white;background-color:blue;font-size:40px;")

//task 4
console.group("Group 1");
console.log("Message One");
console.log("Message Two");
console.group("Child Group");
console.log("Message One");
console.log("Message Two");
console.group("Grand Child Group");
console.log("Message One");
console.log("Message Two");
console.groupEnd();
console.groupEnd();
console.groupEnd();
console.group("Group 2");
console.log("Message One");
console.log("Message Two");

//task 5
console.table(["Elzero","Ahmed","Sameh","Gamal","Aya"]);

//task 6
/*
console.log("Iam In Console");
document.write("Iam In Page");
*/