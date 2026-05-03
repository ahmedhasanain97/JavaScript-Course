function createStars(num) {
    let text="";
    let starsnum=(num*2)-1;
    let spacecount = 0;
for (let i = num; i > 0; i--) {
        text+=`
${" ".repeat(spacecount)}${"*".repeat(starsnum)}`
        starsnum-=2;
        spacecount++;
}
    starsnum=1;
    spacecount--;
 for (let i = 1; i <= num; i++) {
        text+=`
${" ".repeat(spacecount)}${"*".repeat(starsnum)}`
        starsnum+=2;
        spacecount--;
  }
  return text
}


console.log(createStars(6));

// Output Needed
// ***********
//  *********
//   *******
//    *****
//     ***
//      *
//      *
//     ***
//    *****
//   *******
//  *********
// ***********