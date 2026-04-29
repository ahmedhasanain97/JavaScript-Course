let chars = ["A", "B", "C", "D", "E", 10, 15, 6];

// Needed Output
// ['A', 'B', 'C', 'A', 'B', 'C', 'D', 'E']

//first we need to find the numbers and put them first

let finalArray = [];

// let numbArray = chars.filter((element) => {
//     if(Number.isInteger(element)){
//         return element;
//     }
// })
// let alphabetArray = chars.filter((element) => {
//     if(!Number.isInteger(element)){
//         return element;
//     }
// })
//second we need to replace the numbers with the first characters of the chars array
// for (let i = 0; i < numbArray.length; i++) {
//         finalArray.push(alphabetArray[i])
// }
// finalArray = finalArray.concat(alphabetArray)
//better looking code (with the help of ai )>>>>
finalArray = [...chars.filter(el => typeof el === 'number'),...chars.filter(el => typeof el === 'string')]
let numbLength = chars.filter(el => typeof el === 'number').length
finalArray.copyWithin(0,numbLength,numbLength*2)
 console.log(finalArray)  
