// Write Your Function Here
function customCalc(...num){
    let sum=0
    const firstNum=num.find(firstNum => typeof firstNum === 'number')
    let LastNum;
    for (let i = 0; i < num.length; i++) {
        if(Number.isInteger(+num[i]))
        {
            sum+=parseInt(num[i])
            LastNum=num[i]
        }
    }
    return sum*firstNum*LastNum
}
console.log(customCalc("10", 20, "A", "40", 15));
// 12750 <= (10 + 20 + 40 + 15) * 10 * 15

console.log(customCalc(5, "15", 10, 5, 10));
// 2250 <= (5 + 15 + 10 + 5 + 10) * 5 * 10

console.log(customCalc(30, 5, "C", 10));
// 13500 <= (30 + 5 + 10) * 30 * 10