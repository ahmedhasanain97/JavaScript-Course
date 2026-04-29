let imgs = document.querySelectorAll("img")

imgs.forEach(element => {
    element.hasAttribute("alt") ? element.alt="old" : element.alt="Elzero New"
});