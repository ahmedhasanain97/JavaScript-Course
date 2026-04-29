let elements = Array.from(document.body.children);
elements.forEach(element => {
    element.addEventListener("click",() =>{
        console.log("this is "+element.tagName)
    })
})