// function checkStatus(a, b, c) {
//   if(a == true || a == false)
//   {
//     if(typeof(b) == typeof(1))
//     {
//         console.log(`Hello ${c}, Your Age Is ${b}, You Are ${a? `Available`:`Not Available`} For Hire`)
//     }
//     else{
//         console.log(`Hello ${b}, Your Age Is ${c}, You Are ${a? `Available`:`Not Available`} For Hire`)
//     }
//   }
//   else if(typeof(a) == typeof(1))
//   {
//     if(b == true || b == false)
//     {
//         console.log(`Hello ${c}, Your Age Is ${a}, You Are ${b? `Available`:`Not Available`} For Hire`)
//     }
//     else
//     {
//         console.log(`Hello ${b}, Your Age Is ${a}, You Are ${c? `Available`:`Not Available`} For Hire`)
//     }
//   }
//   else
//   {
//     if(b == true || b == false)
//     {
//         console.log(`Hello ${a}, Your Age Is ${c}, You Are ${b? `Available`:`Not Available`} For Hire`)
//     }
//     else{
//         console.log(`Hello ${a}, Your Age Is ${b}, You Are ${c? `Available`:`Not Available`} For Hire`)
//     }
//   }
// }

function checkStatus(a, b, c) {
  let name, age, available;

  if (typeof a === "string") name = a;
  else if (typeof a === "number") age = a;
  else available = a;

  if (typeof b === "string") name = b;
  else if (typeof b === "number") age = b;
  else available = b;

  if (typeof c === "string") name = c;
  else if (typeof c === "number") age = c;
  else available = c;

  console.log(
    `Hello ${name}, Your Age Is ${age}, You Are ${
      available ? "Available" : "Not Available"
    } For Hire`
  );
}

// Needed Output
checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"