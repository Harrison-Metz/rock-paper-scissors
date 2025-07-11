let humanScore = 0;
let computerScore = 0;
let rounds = 0;
let roundsPlayed = 0;

const rock_btn = document.getElementById("rock");
const paper_btn = document.getElementById("paper");
const scissors_btn = document.getElementById("scissors");
const computer_score = document.getElementById("computer-score");
const player_score = document.getElementById("player-score");
const message = document.getElementById("message");
const outcome = document.getElementById("outcome");




function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    let randomIndex = Math.floor(Math.random() * choices.length);
    console.log('computer choice: ' + choices[randomIndex]);
    return choices[randomIndex];
}


function playRound(computerChoice, humanChoice) {
    console.log('player choice: ' + humanChoice);
    if (computerChoice === humanChoice) {
        outcome.textContent = "It's a tie!";
    }
    else if (humanChoice === "rock" && computerChoice === "scissors" ||
        humanChoice === "paper" && computerChoice === "rock" ||
        humanChoice === "scissors" && computerChoice === "paper") {
            humanScore++;
            outcome.textContent = "You won!";
    }
    else{
        computerScore++;
        outcome.textContent = "You lost!";
    }

    computer_score.textContent = computerScore;
    player_score.textContent = humanScore;
    message.textContent = "COMPUTER: " + computerChoice + " YOU: " + humanChoice
}

rock_btn.addEventListener("click", function(){playRound(getComputerChoice(), "rock")});
paper_btn.addEventListener("click", function(){playRound(getComputerChoice(), "paper")});
scissors_btn.addEventListener("click", function(){playRound(getComputerChoice(), "scissors")});
