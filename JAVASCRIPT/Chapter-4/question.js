/* Qs1. For a given array with marks of students -> [85, 97, 44, 37, 76, 60]
    Find the average marks of the student.  */

let marks = [85, 97, 44, 37, 76, 60];
let sum = 0;

for(let val of marks) {
    sum += val;
}

let avg = sum / marks.length;
console.log(`Average mark of a student is : ${avg}`);

/* Qs2. For a given array with prices of 5 items -> [250, 645, 300, 900, 50]
    All items have an offer of 10% OFF on them. Change the array 
    to store final price after applying offer */

let prices = [250, 645, 300, 900, 50];

for(let i = 0; i < prices.length; i++) {
    let off = prices[i] / 10;
    prices[i] -= off;
}

console.log(prices);

/* Qs3. Create an array to store companies -> "Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"

    a. Remove the first company from the array. 
    b. Remove Uber & Add Ola in its place
    c. Add amazon at the end    */

let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

companies.shift(); // Deleted the first element 
companies.splice(2, 1, "Ola");  // To replace Ola
companies.push("Amazon");

