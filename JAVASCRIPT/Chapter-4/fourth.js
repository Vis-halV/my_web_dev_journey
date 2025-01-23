// Arrays 

let mark = [97, 82, 75, 64, 89];
console.log(typeof mark);  //Object instead of key index is placed

let sub1 = mark[0];

mark[0] = 98;  // Mutable

// Looping over an array

for(let idx = 0; idx < mark.length; idx++) {
    console.log("Mark of subject ",idx, ":", mark[idx]);
}

for(let marks of mark) {
    console.log(marks);
}

// Array Methods

// push(), pop(), toString(), etc..
// concat(), slice(start, end) can also be useed like the strings 

let fruits = ["apple", "bannana", "kiwi", "watermelon"];
fruits.push("gauva");
console.log(fruits);

fruits.pop();
let deletedItem = fruits.pop();

console.log(fruits);
console.log(deletedItem);
console.log(fruits);

console.log(fruits.toString());

// Shift and Unshift

fruits.unshift("dragonFruit");  // To add in front
console.log(fruits);
fruits.shift();
console.log(fruits);    // To delete in front

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

// map method -> similar to for each but return a new arr with the result itself

// let arr = [1, 2, 3, 4, 5];

let newArr = arr.map((val) => {
    return val ** 2;
}); 

console.log(newArr);