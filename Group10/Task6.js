let start = 0;
let swappedName = "elZerO";
let newName =""

// Output
// "ELzERo"

for(let i = start; i<swappedName.length ;i++)
{
    if(swappedName[i] == swappedName[i].toUpperCase())
    {
        newName= newName.concat(swappedName[i].toLowerCase());
    }
    else{
        newName = newName.concat(swappedName[i].toUpperCase());
    }
}

console.log(newName)