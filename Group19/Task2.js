let formData= Array.from(document.querySelector("form").children)

formData.forEach((item,index) => {
    let savedValue = sessionStorage.getItem(item.getAttribute("name"))
    if(savedValue)
    {
        item.value=savedValue
    }
    else{
        item.addEventListener("change",()=>{
            let currentValue = item.value;
            let type = item.getAttribute("name")
            sessionStorage.setItem(type,currentValue)
        })
    }
})
