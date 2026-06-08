// Variables
let age = 20; 
const country = "India"; 
var city = "Delhi"; 
console.log(age);
console.log(country);
console.log(city);

// Strings, Numbers, Booleans
let firstName = "Mridul";
let lastName = "Krishan";
let number = 100;
let isStudent = true;
console.log(firstName);
console.log(number);
console.log(isStudent);

// Problem 1: Full Name
let fullName = firstName + " " + lastName;
console.log("Full Name:", fullName);

// Problem 2: String vs Number
let str = "25";
let num = 25;
console.log(typeof str);
console.log(typeof num);

// Problem 3: Positive, Negative or Zero
let value = -5;
if (value > 0) {
    console.log("Positive");
} else if (value < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}

// Problem 4: Voting Eligibility
let voterAge = 18;
if (voterAge >= 18) {
    console.log("Eligible to vote");
} else {
    console.log("Not eligible to vote");
}

// Problem 5: Even or Odd
let num1 = 7;
if (num1 % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}

// Problem 6: Greater Number
let a = 10;
let b = 20;

if (a > b) {
    console.log(a + " is greater");
} else {
    console.log(b + " is greater");
}

// Functions

// Function to add two numbers
function add(x, y) {
    return x + y;
}
console.log("Sum:", add(5, 10));

// Function to greet user
function greet(name) {
    return "Hello, " + name;
}
console.log(greet("Mridul"));

// Function to return square
function square(num) {
    return num * num;
}
console.log("Square:", square(4));

// Function to check even or odd
function checkEvenOdd(num) {
    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}
console.log(checkEvenOdd(9));