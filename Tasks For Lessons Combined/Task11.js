let myMoney = 5301503206;
console.log(myMoney.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))
// Needed Output
// 5,301,503,206