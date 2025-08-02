// let Obj = {};

// console.log(Obj);
// console.log(typeof Obj);

const username = {
    firstName: "Vishal",
    isLoggedIn: false,
    "temp name": "Vishal", // Property names can have spaces 
};

username.firstName = "Visanth"; // Object may be const but the values inside can change
username.lastName = "Design"; // Adding a new property to the object

const myFirstName = "Vishal";

// console.log(myFirstName);
// console.log(username.firstName);
// console.log(username.lastName);
// console.log(username);
// console.log(typeof username);

// console.log(username["temp name"]); // Accessing property with space using brackets

let today = new Date(); // Creating a new Date object
// console.log(today);
// console.log(today.getDate());

// Array

let anotherUser = ["vishal", true];

// console.log(anotherUser[0]);

// let isValue = true;
// console.log(Number(isValue) + 1);

let isValue = "2abc"; // Type - NaN (Not a Number) because it cannot be converted to a number 

console.log(typeof Number(isValue));
console.log(Number(null));

