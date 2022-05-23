// Computer randomly chooses "rock", "paper", or "scissors"
function computerPlay() {
    const randInt = Math.floor(Math.random() * 3);
    switch (randInt) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
        default:
            console.log("Something went wrong");
    }
}

// Ask player to choose 
function playerPlay() {
    const playerChoice = capitalizeFirstLetter(prompt('Choose "Rock", "Paper", or "Scissors": ').trim());
    if (playerChoice === "Rock" || playerChoice === "Paper" || playerChoice === "Scissors") {
        return playerChoice;
    } else {
        return false;
    }
}

// Play a single round
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "tie";
    } else if ((playerSelection === "Paper" && computerSelection === "Rock") || 
        (playerSelection === "Rock" && computerSelection === "Scissors") ||
        (playerSelection === "Scissors" && computerSelection === "Paper")) {
            return "player"
    } else {
        return "computer";
    }
}

// Capitalize the first letter of a string
function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

// Show round message
function showRoundMessage(outcome, playerSelection, computerSelection) {
    if (outcome === "tie") {
        return `Tie Game! You both chose ${playerSelection}.`;
    } else if (outcome === "player") {
            return `You Win! ${playerSelection} beats ${computerSelection}.`;
    } else {
        return `You lose. ${playerSelection} loses against ${computerSelection}.`;
    }
}




console.log(playRound(playerPlay(), computerPlay()));