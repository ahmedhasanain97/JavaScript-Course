function createStars(num) {
    let text="";
    let starsnum=1;
 for (let i = 1; i <= num; i++) {
        text+=`
${"*".repeat(starsnum)}`
        starsnum+=2
  }
for (let i = num; i >= 0; i--) {
        text+=`
${"*".repeat(starsnum)}`
        starsnum-=2
}
  return text
}

console.log(createStars(3));

// Output Needed
// *
// ***
// *****
// ***
// *

console.log(createStars(7));

// Output Needed
// *
// ***
// *****
// *******
// *********
// ***********
// *************
// ***********
// *********
// *******
// *****
// ***
// *