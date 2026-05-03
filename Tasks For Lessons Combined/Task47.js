let textArea = document.querySelector("textarea");
let saveBtn = document.querySelector("button");

saveBtn.onclick = function () {
  if (textArea.value !== "") {

    let myBlob = new Blob([textArea.value], { type: "text/plain" });
    let downloadLink = document.createElement("a");
    downloadLink.download = "saved-file.txt";
    downloadLink.href = window.URL.createObjectURL(myBlob);
    downloadLink.click();
    window.URL.revokeObjectURL(downloadLink.href);
  }
};