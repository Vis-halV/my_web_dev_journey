// Loops

/* Qs1. Print all even numbers from 0 to 100. */

for(let num = 0; num <= 100; num++) {
    if(num % 2 == 0) {
        console.log("num = ", num);
    }
}

/* Qs2. Create a game where you start with any random number. 
Ask the user to keep guessing the game number until 
the user enter correct value. */

let gameNum = 25;
let userNum = prompt("Guess the game number : ");

while(userNum != gameNum) {
    userNum = prompt("You have entered the wrong number, Guess again : ");
}

console.log("Congratulations, you have entered the right number.");

// String

/* Qs2. Prompt the user to enter their full name. 
Generate a username for them based on input. 
Start username with @, followed by their fullname and 
ending with the full name lenght 

E.g: username = "rahul", username should be "@rahul5"   */

let fullName = prompt("Enter your full name : ");

let userName = "@" + fullName + fullName.length;

let result = `Full name : ${fullName} and the generated username is ${userName}`;

console.log(result);