// Functions 

function myFunc() {
    console.log("The function has been called ...")
};

myFunc();

function print(msg) {
    // Parameter -> Input
    console.log(msg);
}

print("Hello World");   // Argument

// Sum of two numbers :

function sum(a, b) {
    // local varibles -> scope of a, b
    console.log(a + b);
}

// Return 

function mul(a, b) {
    c = a * b;
    return c;
    // no code will execute after retur statement 
};

val = mul(10, 5);
console.log(val);   // 50

// Arrow function -> part of modern java script

const arrowSum = (a, b) => {
    console.log(a + b);
};

const printHello = () => console.log("Hello ");
printHello(); 

// For each loop is a method -> Higher order function uses other function or return function 

// Call Back Function is a function passed as an argument to another function 

let arr = [1, 2, 3, 4, 5];

arr.forEach(function printVal(val) {
    console.log(val);
});

arr.forEach((val) => console.log(val));

let cities = ["Pune", "Vashi", "Chennai", "Banglore"];

cities.forEach(function printVal(val, idx) {
    console.log(val, idx);
});

let newArr = arr.map((val) => {
    return val ** 2;    //[1, 4, 9, 16, 25]
});

// filter method -> stores value if true 

let evenArr = arr.filter((val) => {
    return val % 2 == 0;
});

console.log(evenArr);   // [2, 4]

// reduce method is used when a lot of input is given but one output is retunred eg. avg, sum, ...

const total = arr.reduce((res, curr) => {
    return res + curr;
});

console.log(total); // 10