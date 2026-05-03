let st = "Elzero";
console.log(st.slice(-1))
console.log(st[st.length-1])
console.log([...st].pop())
console.log([...st].filter((el,index) => index==st.length-1?el:"").pop())
console.log([...st][st.length-1])
// // Needed Output
// "o"
// "o"
// "o"
// "o"
// "o"
// "o"
// "o"