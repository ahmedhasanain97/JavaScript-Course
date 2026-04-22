function sayHello(theName, theGender) {
    if(theGender != null){
        console.log(theGender == "Male"? `Hello Mr ${theName}`:`Hello Miss ${theName}`)
    }
    else{
        console.log(`Hello ${theName}`)
    }
}

// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"