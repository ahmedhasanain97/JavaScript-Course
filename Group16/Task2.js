let imgs = document.querySelectorAll("div img");

for (let i = 0; i < imgs.length; i++) {
  imgs[i].src = "https://elzero.org/wp-content/themes/elzero/imgs/logo.png";
  imgs[i].alt = "Elzero Logo";
}


console.log(imgs[1].src)