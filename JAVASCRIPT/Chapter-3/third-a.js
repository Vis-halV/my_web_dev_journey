// Loops

// For Loop

for(let i = 1; i <= 5; i++) {
    console.log("Hello World");
}

console.log("Loop has ended.");

// Calculate sum of 1 to 5

let sum = 0;
for(let i = 1; i<=5; i++) {
    sum = sum + i;
}

console.log("Sum = ", sum);

// Infinite Loop

/* for(let i = 1; i >= 0; i++) {
    console.log("i = ", i);
} */

// While Loop

let j = 1;
while(j <= 5) {
    console.log("j = ", j);
    j++;
}

// Do while

let x = 1;
do {
    console.log("x = ", x);
    x++;
} while ( x <= 5);


// Special loops 

// for-of loop - to iterate in string and array

let str = "Vishal";
let length = 0;

for(let i of str) {
    console.log("i = ", i);
    length++;
}

console.log("The size of", str, "is", length);

// for-in loop

let Student = {
    name : "Vishal",
    age : 19,
    cgpa : 8.0,
    isPass : true 
}

for(let key in Student) {
    console.log("Key :",key, "Value :", Student[key]);
}