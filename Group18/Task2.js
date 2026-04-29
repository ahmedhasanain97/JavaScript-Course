
setTimeout(popUp, 5000);

function popUp() {
  let container = document.createElement('div');
  container.className = "container";
  container.style.cssText='display:flex;justify-content:center;align-items:center;background-color:#eee;flex-direction:column; margin:50px auto;position:relative;width:400px'

  let h3 = document.createElement('h3');
  h3.textContent = "Welcome";

  let p = document.createElement('p');
  p.textContent = "Welcome to Elzero Web School";

  let button = document.createElement('button');
  button.textContent = "X";
  button.style.cssText='background-color:red;color:white;position:absolute;top:-5px;right:-5px;border-radius:50%;border-color:transparent;'

  container.append(h3, p, button);
  document.scripts[0].before(container);
  
  button.onclick = function () {
    container.remove();
  }
}