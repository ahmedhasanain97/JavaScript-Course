let last = 30;
let sum =0;
for (let i = last; i > 0; i--) {
    if(i % 2 == 1 ){
        console.log(i)
        sum+=i;
        i-=3
    }  
}
console.log(sum)