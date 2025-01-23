/* Qs1. Create a fnuction using the "function" keyword that takes a string as an argument 
    & returns the number of vowels in the string */

function countVowel(str) {
    let count = 0;
    for(let char of str) {
        if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' ||
            char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' ) {
                count++;
            }
    }
    return count;
}

/* Qs2. Create an arrow function to perform the same task. */

const arrowCountVowel = (str) => {
    let count = 0;
    for(let char of str) {
        if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' ||
            char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' ) {
                count++;
            }
    }
    return count;    
};

/* Qs3. For a given array of numbers, print the square of each value using the forEach loop. */

let nums = [1, 2, 3, 4, 5];

nums.forEach(function printVal(val) {
    console.log(val ** 2);
});

/* Qs4. We are given array of marks of students.
    Filter out the marks of that scored 90+ */

let marks = [97, 64, 32, 49, 99, 96, 86];

let highScore = marks.filter((val) => {
    return val > 90;
});

console.log(highScore); 

/* Qs5. Take a number n as input from user. Create an array of numbers from 1 to n.
    Use the reduce method to calcluate sum of all numbers in a array.
    Use the reduce method to calculate the product of all numbers in a array. */

let n = prompt("Enter a number: ");

let numbers = [];

for (let i = 1; i <= n; i++) {
    numbers[i - 1] = i;
}

let sumNum = numbers.reduce((r, curr) => r + curr, 0);  // This 0 indicates the sum = 0 at default 
console.log("Sum:", sumNum);

let proNum = numbers.reduce((r, curr) => r * curr, 1);  // This 1 indicates the fact = 0 at default 
console.log("Factorial:", proNum);
    