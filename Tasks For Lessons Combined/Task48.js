function createStars(num) {
    let text="";
    let starsnum=1;
 for (let i = 1; i <= num; i++) {
        text+=`
${"*".repeat(starsnum)}`
        starsnum+=2
  }

  return text
}

console.log(createStars(8));

// Output Needed
// *
// ***
// *****
// *******
// *********
// ***********
// *************
// ***************