// function Car(name, model, price) {
//   this.n = name;
//   this.m = model;
//   this.p = price;
// }
class Car{
    constructor(name,model,price){
        this.n =name;
        this.m=model;
        this.p=price;
    }
    run() {
        return 'car is running now';
    }
    stop() {
        return 'car is stopped';
    }
}
// Needed Output

"Car One Name Is MG And Model Is 2022 And Price Is 420000"
"Car Is Running Now"

let carOne = new Car('chevorlet','anymodel',5000)
let carTwo = new Car('mercedes','2025',10000)
let carThree = new Car('WolksWagen','2015',3000)

console.log(`Car One Name Is ${carOne.n} And Model Is ${carOne.m} And Price Is ${carOne.p}`)
console.log(carOne.run())