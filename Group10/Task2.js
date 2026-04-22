let start = 10;
let end = 0;
let stopp = 3;

// Output
// 10
// 09
// 08
// 07
// 06
// 05
// 04
// 03
for(let i = start; i >= stopp;i--)
{
    console.log(i< 10 ? `0${i}` : i)
}