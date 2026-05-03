let st = "elzero";
console.log(st[0].toUpperCase()+st.slice(1))
console.log([...st].map((el,index) => index==0? el.toUpperCase():el).join(""))
console.log(st.replace(st[0],st[0].toUpperCase()))
console.log(st.replace(/^./,(char) => char.toUpperCase()))
console.log(st.charAt(0).toUpperCase()+st.slice(1))
// Output Needed
// "Elzero"
// "Elzero"
// "Elzero"
// "Elzero"
// "Elzero"
// "Elzero"
// "Elzero"