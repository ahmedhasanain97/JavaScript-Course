let rangeEnd = 10;

let myRange = []
for (let i = 0; i < rangeEnd; i++) {
    myRange.push(i)  
}

let myRange1 = [...Array(rangeEnd).keys()].map(n => n + 1);

let myRange3 = Array.from({ length: rangeEnd }, (_, index) => index + 1);
// Output Needed
console.log(myRange3); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]