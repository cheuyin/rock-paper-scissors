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
    if (playerSelection === false) {
        console.log(`You lose. Your input was invalid.`);
    } else if (outcome === "tie") {
        console.log(`Tie! You both chose ${playerSelection}.`);
    } else if (outcome === "player") {
        console.log(`You Win! ${playerSelection} beats ${computerSelection}.`);
    } else {
        console.log(`You lose. ${playerSelection} loses against ${computerSelection}.`);
    }
}

// Show score board
function showScoreBoard(playerScore, computerScore) {
    console.log(`Player: ${playerScore}\nComputer: ${computerScore}`);
}

// Show round number
function showRoundNumber(roundNumber) {
    console.log(`Round ${roundNumber}/5`)
}

// Show game end message
function showGameEndMessage(finalPlayerScore, finalComputerScore) {
    if (finalPlayerScore === finalComputerScore) {
        console.log(`Tie Game! The final score is ${finalPlayerScore} - ${finalComputerScore}.`);
    } else if (finalPlayerScore > finalComputerScore) {
        console.log(`You win the game! The final score is ${finalPlayerScore} - ${finalComputerScore}.`);
    } else {
        console.log(`You lost the game. The final score is ${finalPlayerScore} - ${finalComputerScore}.`);
    }
}


// Play 5 rounds with scoreboard
function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        showRoundNumber(i + 1);
        const playerSelection = playerPlay();
        const computerSelection = computerPlay();
        if (playRound(playerSelection, computerSelection) === 'player') {
            playerScore += 1;
            showRoundMessage("player", playerSelection, computerSelection)
        } else if (playRound(playerSelection, computerSelection) === 'computer') {
            computerScore += 1;
            showRoundMessage("computer", playerSelection, computerSelection)
        } else {
            showRoundMessage("tie", playerSelection, computerSelection);
        }
        if (playerScore >= 3 || computerScore >= 3) {
            break;
        }
        showScoreBoard(playerScore, computerScore);
    }

    showGameEndMessage(playerScore, computerScore)
}

// Run game loop
game();
