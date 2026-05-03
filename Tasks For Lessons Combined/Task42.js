// Message Needed In Output
// "You Pressed Ctrl + Alt + Shift"
function checkKeys(e){
      if (e.ctrlKey && e.altKey && e.shiftKey) {
    console.log("You Pressed Ctrl + Alt + Shift");
    document.removeEventListener("keydown",checkKeys)

  }
}
document.addEventListener("keydown", checkKeys);