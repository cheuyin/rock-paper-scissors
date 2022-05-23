// Computer randomly chooses "rock", "paper", or "scissors"
function computerPlay() {
    const randInt = Math.floor(Math.random() * 3);
    switch (randInt) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
        default:
            console.log("Something went wrong");
    }
}

// Ask player to choose 
function playerPlay() {
    const playerChoice = prompt("Choose 'rock', 'paper', or 'scissors': ").trim().toLowerCase();
    if (playerChoice === "rock" || playerChoice === "paper" || playerChoice === "scissors") {
        return playerChoice;
    } else {
        return false;
    }
}

// Play a single round
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "tie";
    } else if ((playerSelection === "paper" && computerSelection === "rock") || 
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "paper")) {
        return "player";
    } else {
        return "computer";
    }
}

console.log(playRound("scissors", "rock"));