let result = document.querySelector("form div")
let input = document.querySelector('input[name="dollar"]')

let rate = 15.6;

input.addEventListener("input", function () {
  let usd = input.value;
  if (input.value === "") {
    result.innerHTML = `{0} USD Dollar = {0} Egyptian Pound`;
  } else {
    let egp = (usd * rate).toFixed(2);
    result.innerHTML = `${usd} USD Dollar = ${egp} Egyptian Pound`;
  }
});