let myDiv = document.querySelector('div');

let counter = setInterval(function () {
  myDiv.innerHTML -= 1;
  //task 5
  if (myDiv.innerHTML === "5") {
    window.open('https://elzero.org', '', 'width=400, height=400, top=20, left=700')
  }
  if (myDiv.innerHTML === "0") {
    clearInterval(counter);
    //task 4
    //window.location.replace('https://elzero.org')
  }

}, 1000)