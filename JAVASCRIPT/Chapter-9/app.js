let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

// To generate random choice 
const genChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

// Runs after user selects a choice 
const playGame = (userChoice) => {
    console.log("User choice: ", userChoice);
    // Generate compChoice
    const compChoice = genChoice();
    console.log("Computer Choice: ", compChoice);
 
    if(userChoice === compChoice) { // Draw condition
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        } 
        showWinner(userWin, userChoice, compChoice);
    }
}

// To get user choice 
choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

// When draw 
const drawGame = () => {
    console.log("Draw")
    msg.innerText = "Game was Draw, Play Again";
    msg.style.backgroundColor = "Grey";
}

// To display the winner 
const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        console.log("You Win!");
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "Green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        console.log("You lose!");
        msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "Red";
    }
}