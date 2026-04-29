let inputs = document.querySelectorAll(".input")
let form = document.querySelector("form")
let result = document.querySelector(".results")
form.addEventListener("submit",function(event){
        event.preventDefault();
        let elementsNumber = inputs[0].value
        let elementText = inputs[1].value
        let elementType =inputs[2].value
        result.innerHTML="";
        for(let i = 0 ; i< elementsNumber;i++){
            element = document.createElement(`${elementType}`)
            element.textContent= elementText;
            result.append(element)
        }
})
