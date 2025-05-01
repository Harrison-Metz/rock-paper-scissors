let humanScore = 0;
let computerScore = 0;
let rounds = 0;
let roundsPlayed = 0;

function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    let randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getHumanChoice() {
    let choice = prompt("Enter rock, paper, or scissors:", "rock, paper, scissors").toLowerCase();
    return choice;
}

function playRound(computerChoice, humanChoice) {
    console.log("Computer: " + computerChoice);
    console.log("You: " + humanChoice);

    if (computerChoice === humanChoice) {
        console.log("It's a tie!");
    }
    else if (humanChoice === "rock" && computerChoice === "scissors" ||
        humanChoice === "paper" && computerChoice === "rock" ||
        humanChoice === "scissors" && computerChoice === "paper") {
            humanScore++;
            console.log("You won!");
    }
    else{
        computerScore++;
        console.log("You lost!");
    }
}

function playGame(){
    rounds = prompt("How many rounds would you like to play?");
    for (let i = 0; i < rounds; i++) {
        playRound(getComputerChoice(), getHumanChoice());
    }

    if (humanScore > computerScore) {
        console.log("You are the winner after " + rounds + " rounds!");
    }
    else{
        console.log("You lost the game after " + rounds + " rounds!");
    }
    console.log("Computer: " + computerScore + " You: " + humanScore);
}

playGame();