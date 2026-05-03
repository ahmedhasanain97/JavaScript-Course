let str = "i lovE elzeRO weB schOOL";

// Output Needed
// "I Love Elzero Web School"

function firstLetterCapital(str){
    let strArr = str.split(" ");
    return strArr.map(curr => curr[0].toUpperCase()+curr.slice(1).toLowerCase()).join(" ");
}

console.log(firstLetterCapital(str))