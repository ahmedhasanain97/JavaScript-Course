// Needed Output

// "Loop Took 1921 Milliseconds."

let start = performance.now();
for (let i = 0; i <= 99999; i++) {
    console.log(i)
}

let end = performance.now();
let duration = end-start;
console.log(`Loop Took ${duration} Milliseconds.`)
