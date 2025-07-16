// step_01
const accountId = 998877;
let accountEmail = 'polo@gmail.com';
var accountPassword = '1234!';
accountCity = 'bhubaneswar';

// Update values 
accountEmail = 'uco@gmail.com';
accountPassword = 'uco123!';
accountCity = 'new daily';

console.table([accountEmail, accountPassword, accountCity])

// step_02
const company = "Polosoftech";
let addresh = 'DLF ';
var work = 'IT'

// Update values 
addresh = 'KIIT'
work = "Frontend Developer"

// Create a structured object for the table
const addDate = {
  cpy: company,
  ads: addresh,
  wk: work,
}

console.log([addDate]);

// step_03
const accountNumber = 998877;
let emailId = 'polo@gmail.com';
let numberPws = '1234!';
let newCity = 'bhubaneswar';

// Update values
emailId = 'uco@gmail.com';
numberPws = 'uco123!';
newCity = 'New Delhi';

// Multiple account data
const accounts = [
  { accountNumber: accountId, emailId: accountEmail, numberPws: accountPassword, newCity: accountCity },
  { accountNumber: 998878, emailId: 'test@gmail.com', numberPws: 'test123!', newCity: 'Mumbai' }
];

console.table(accounts);

// step_04
const myName = 'avijit';
let lastName = 'mahapatra'
var age = '24'
console.log([myName, lastName, age])

lastName = 'Jit'
age = '22'
console.log([lastName, age])

const allData = {
  Name: myName,
  Lastname: lastName,
  Age: 29,
}
console.table([
  { Name: myName, Lastname: lastName, Age: 29 },
  { Name: "Rintu", Lastname: "Adi", Age: 33 }
])


// step_05
const carId = 998877;
let carEmail = 'polo@gmail.com';
let carPassword = '1234!';
let carCity = 'bhubaneswar';

// Update values with validation
carEmail = 'ucogmail.com';
carPassword = 'uco123!';
carCity = 'New Delhi';

// Basic validation
if (!carEmail.includes('@')) {
  console.error('Invalid email format');
} else if (carPassword.length < 5) {
  console.error('Password must be at least 6 characters');
} else {
  const carData = {
    carID: carId,
    Email: carEmail,
    Password: carPassword,
    City: carCity
  };
  console.table([carData]);
}

// step_06
const bikeId = 1234;
let bikeEmail = 'bike@gmail.com';
let bikePassword = 'bike123';
let bikeCity = 'bhubaneswar,odisha';

// Update values with validation
bikeEmail = 'bike300@gmail.com';
bikePassword = '0000';
bikeCity = 'New Delhi,odisha';

console.table([bikeId, bikePassword, bikeCity])

// Basic validation
if (!bikeEmail.includes('@')) {
  console.log('Me Email Is Invalid')
} else if (bikePassword.length < 4) {
  console.log('Password must be at least 6 characters')
} else {
  const bikeData = {
    bikeID: bikeId,
    Email: bikeEmail,
    Password: bikePassword,
    City: bikeCity
  };
  console.table([bikeData]);
}



// PENDING WORK

const accountId = 998877;
let accountEmail = 'polo@gmail.com';
let accountPassword = '1234!';
let accountCity = 'bhubaneswar';

function updateAndDisplayAccount(email, password, city) {
  accountEmail = email;
  accountPassword = password;
  accountCity = city;

  const accountData = {
    AccountID: accountId,
    Email: accountEmail,
    Password: accountPassword,
    City: accountCity
  };
  console.table([accountData]);
}

 Update and display
updateAndDisplayAccount('uco@gmail.com', 'uco123!', 'New Delhi');

