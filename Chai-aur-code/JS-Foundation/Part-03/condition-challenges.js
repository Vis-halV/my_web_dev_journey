// Checking if a number is greater than another number:

let num1 = 5;
let num2 = 8;

if(num1 > num2) {
    console.log(" num1 is greater than num2 ");
} else {
    console.log(" Nope, num1 is not greater ");
}

// Checking if a string is equal to another string:

let username = "chai";
let anotherusername = "chai";

if(username == anotherusername) {
    console.log("Pick another username");
}   else {
    console.log("You can use this username");
}

// Checking if a varaible is number or odd:

let score = 44;

if(typeof score === "number") {
    console.log("Yep, this is a number");
} else {
    console.log("No that is not a number");
}

// Checking if a boolean is true or false:

if(isTeaReady) {
    log("Tea is ready, let's drink it!");
} else {
    log("Tea is not ready yet, wait for a while.");
}

// Checking if an array is empty or not:

let items = ["item1", "item2", "item3"]; 

console.log(items.length)

if(items.length === 0) {
    console.log("The array is empty");
} else {      
    console.log("The array is not empty");
}   

