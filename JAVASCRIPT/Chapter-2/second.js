// Operators 

let a = 5;
let b = 2;
console.log("a = ", a, ", b = ", b);

// ARITHMETIC OPERATORS 

console.log("a + b = ", a + b);
console.log("a - b = ", a - b);
console.log("a * b = ", a * b);
console.log("a / b = ", a / b);
console.log("a % b = ", a % b);

// Unary Operator

// --a, a--, a++, ++a

// a++;
console.log("a = ", a++);
console.log("a = ", a);

// Assignmwnt Operators 

// =, +=, -=, *=, %=, **=

a += 10;    // a = a + 10
console.log("a = ", a);

// Comparision operators

// ==, ===, !=, !==, >, >=, <, <=

// === - Equal to & data type 


// Logical Operators

// && - AND, || - OR, ! - NOT

// Output - Boolean 

// Conditional Statement 

// IF statement

let age = 20;

if (age > 18) {
    console.log("You can Vote...");
}

if (age < 18) {
    console.log("You cannot Vote...");
}

// IF-ELSE statement

if (age > 18) {
    console.log("You can Vote...");
} else {
    console.log("You cannot Vote...");
}

// ELSE-IF statement

if (age < 18) {
    console.log("Junior");
} else if (age < 40) {
    console.log("Major");
} else {
    console.log("Senior");
}

// Ternary Operator 

// condition ? true output : false output

age > 18 ? "Adult" : "Not an adult";    // Simplest and compact if-else 

