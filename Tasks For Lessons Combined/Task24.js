function dashBetweenOdd(num) {
  return num.toString().split("").reduce((acc,curr) => {
    if (acc[acc.length-1]%2 == 1 && curr % 2 == 1){
        acc.push("-"); acc.push(curr)
    }else{acc.push(curr)}
    return acc;
  },[]).join("")
}

console.log(dashBetweenOdd(150653127)); // 1-5065-3-127
console.log(dashBetweenOdd(5314557922)); // 5-3-145-5-7-922