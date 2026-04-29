let divs = document.querySelectorAll("div")
let firstDiv = document.querySelector(".one")
let secondDiv = document.querySelector(".two")
let content=firstDiv.textContent
console.log(divs)

firstDiv.textContent=secondDiv.textContent;
firstDiv.title=secondDiv.title;

secondDiv.title=content;
secondDiv.textContent=`${content} ${divs.length}`