// Write Your Function Implementation Here
String.prototype.elzeroRepeat=function(num) {
    let repeatText="";
    for (let i = 0; i < num; i++) {
        repeatText += `${this} `
    }
    return repeatText;
}
console.log("Elzero ".elzeroRepeat(3)); // Elzero Elzero Elzero