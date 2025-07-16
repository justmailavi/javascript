let car = 700000.00
let company = 'Nextion'
let name =true

console.log(typeof name);

// step 2
console.log("The car costs ₹" + car + " and is from " + company + ".");

// step 3
if (name === true) {
  console.log("Name is not provided.");
} else {
  console.log("Name is: " + name);
}

// step 4
name = "Avijit";
console.log("Name updated to: " + name);

// step 5
function showDetails() {
  console.log("Car Brand: " + company);
  console.log("Car Price: ₹" + car);
  console.log("Owner Name: " + name);
}

showDetails(showDetails); 

// step 6
console.log(`The car from ${company} costs ₹${car} and the owner's name is ${name}.`);

// Example 
console.log(typeof 10);         // number
console.log(typeof "hello");   // string
console.log(typeof true);      // boolean
console.log(typeof null);      // ⚠️ "object" (this is a known JavaScript quirk)
console.log(typeof undefined); // undefined
console.log(typeof {});        // object
console.log(typeof []);        // object
console.log(typeof function(){}); // function
