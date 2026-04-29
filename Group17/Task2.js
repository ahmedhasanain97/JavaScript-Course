let classToAddInput = document.querySelector(".classes-to-add");
let classToRemoveInput = document.querySelector(".classes-to-remove")
let currentElement = document.querySelector(".current")
let classListDisplay = document.querySelector(".classes-list")
let classList;
let newDiv;

classToAddInput.addEventListener("blur",function(){
    classesToAdd = classToAddInput.value.split(" ");
    classesToAdd.forEach(element => {
        if (element.trim() !== "") {
             currentElement.classList.add(element.toLowerCase());
         }
    });
    classToAddInput.value="";
    classListDisplay.innerHTML="<h5>Current Element Class Lists</h5>"
    updateClassList();
})


    classToRemoveInput.addEventListener("blur",function(){
    classesToRemove = classToRemoveInput.value.split(" ");
    classesToRemove.forEach(element => {
        if (element.trim() !== "") {
             currentElement.classList.remove(element.toLowerCase());
         }
    });
    classToRemoveInput.value="";
    classListDisplay.innerHTML="<h5>Current Element Class Lists</h5>"
    updateClassList();
})

function updateClassList (){
    classList=currentElement.classList
    if(classList.length === 0) classListDisplay.innerHTML += " <br> no classes to show"
    else {classList.forEach(element => {
        newDiv=document.createElement("div");
        newDiv.textContent=`${element}`
        classListDisplay.append(newDiv)
    })
    }
}

