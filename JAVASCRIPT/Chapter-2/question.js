/* Qs1. Get user to input a number using prompt("Enter a number").
Check if the number is a multiple of 5 or not.*/

let num = prompt("Enter a number: ");

if (num % 5 == 0) {
    console.log("Multiple of 5.");
} else {
    console.log("Not a multiple of 5.");
}

/* Qs2. Write a code which can give grades to students according to their score.
    90 - 100 : O
    80 - 89 : A
    70 - 79 : B
    60 - 69 : C
    50 - 59 : D
    0 - 49 : F
*/ 

let score = prompt("Enter the score(0-100) ");
let grade;

if (score >= 90 && score <= 100) {
    grade = "O";
} else if (score >= 80 && score <= 89) {
    grade = "A";
} else if (score >= 70 && score <= 79) {
    grade = "B";
} else if (score >= 60 && score <= 69) {
    grade = "C";
} else if (score >= 50 && score <= 59) {
    grade = "D";
} else {
    grade = "E";
}

console.log("According to your score, your grade is : ", grade);