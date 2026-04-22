function ageInTime(theAge) {
  if(theAge > 10 && theAge < 100)
  {
    console.log(`
        Months ${theAge*12}
        Weeks ${theAge*12*4}
        Days ${theAge*12*4*7}
        Hours ${theAge*12*4*7*24}
        Minutes ${theAge*12*4*7*24*60}
        seconds ${theAge*12*4*7*24*60*60}`)
  }
  else
  {
    console.log("Age Out Of Range")
  }
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months