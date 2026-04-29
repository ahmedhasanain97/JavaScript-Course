let ourElement = document.querySelector(".our-element");

ourElement.nextElementSibling.remove();
let startElement = document.createElement("div");
let endElement = document.createElement("div")
startElement.style.cssText='class="start" title="Start Element" data-value="Start';
endElement.style.cssText='class="end" title="End Element" data-value="End"'
startElement.textContent="Start";
endElement.textContent="End";
ourElement.after(endElement);
ourElement.before(startElement)