function multiply(a,b,c){
    let num1,num2,num3;
    typeof a === "number"? num1=Math.trunc(a) : num1 =1;
    typeof b === "number"? num2=Math.trunc(b) : num2 =1;
    typeof c === "number"? num3=Math.trunc(c) : num3 =1;
    console.log(num1*num2*num3)
}


multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000