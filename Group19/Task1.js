let selectBoxes = document.querySelectorAll('select');
let [fontFamilySelect, colorSelect, fontSizeSelect] = selectBoxes;

for (let i = 16; i <= 30; i++) {
  let option = document.createElement('option');
  option.setAttribute('value', `${i}px`);
  option.textContent = `${i}px`;
  fontSizeSelect.append(option);
}
function applyStyles(type, value) {
    if (!value) return;

    if (type === 'font-family') {
        let fullFont = `${value}, sans-serif`;
        document.body.style.fontFamily = fullFont;
        selectBoxes.forEach(el => el.style.fontFamily = fullFont);
        fontFamilySelect.value = value;
    } 
    else if (type === 'color') {
        document.body.style.color = value;
        selectBoxes.forEach(el => el.style.color = value);
        colorSelect.value = value;
    } 
    else if (type === 'font-size') {
        document.body.style.fontSize = value;
        selectBoxes.forEach(el => el.style.fontSize = value);
        fontSizeSelect.value = value;
    }
}

let settings =['font-family','color','font-size']
settings.forEach((setting,index) =>{
    let savedValue = localStorage.getItem(setting)
    if(savedValue){
    applyStyles(setting,localStorage.getItem(setting))
    }
    else {
        let defaultValue=selectBoxes[index].value
        applyStyles(setting,defaultValue)
        localStorage.setItem(setting,defaultValue)
    }
})

selectBoxes.forEach((select,index) => {
    select.addEventListener("change", () => {
        let type=settings[index]
        let value=select.value;
        localStorage.setItem(type,value)
        applyStyles(type,value)
    })
})