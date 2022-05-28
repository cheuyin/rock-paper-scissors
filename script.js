// Global variables
let playerScore = 0;
let computerScore = 0;

const playerScoreDisplay= document.querySelector(".scoreboard .player .score");
const computerScoreDisplay = document.querySelector(".scoreboard .computer .score");
const roundMessageDisplay = document.querySelector(".round-message p")

renderScore();
activateButtons();


function activateButtons() {
    const rockButton = document.querySelector("button.rock");
    rockButton.addEventListener("click", () => {
        playRound("Rock", generateRandomComputerSelection());
    });
    
    const paperButton = document.querySelector("button.paper");
    paperButton.addEventListener("click", () => {
        playRound("Paper", generateRandomComputerSelection());
    });
    
    const scissorsButton = document.querySelector("button.scissors");
    scissorsButton.addEventListener("click", () => {
        playRound("Scissors", generateRandomComputerSelection());
    });
}

function generateRandomComputerSelection() {
    const options = ["Rock", "Paper", "Scissors"];
    return options[Math.floor(Math.random() * 3)];
}

// Play a single round
// Return the outcome of a round as well as player / computer selections
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        updateScore("Tie")
        showRoundMessage([playerSelection, computerSelection, "Tie"]);
    } else if ((playerSelection === "Paper" && computerSelection === "Rock") || 
        (playerSelection === "Rock" && computerSelection === "Scissors") ||
        (playerSelection === "Scissors" && computerSelection === "Paper")) {
            updateScore("Player")
            showRoundMessage([playerSelection, computerSelection, "Player"]);
    } else {
        updateScore("Computer")
        showRoundMessage([playerSelection, computerSelection, "Computer"]);
    }
}

function updateScore(outcome) {
    switch (outcome) {
        case "Tie":
            break;
        case "Player":
            playerScore += 1;
            break;
        case "Computer": 
            computerScore += 1;
            break;
        default:
            alert("Something went wrong")
    }
    renderScore();
}

function renderScore() {
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
}

function showRoundMessage(roundData) {
    const playerSelection = roundData[0];
    const computerSelection = roundData[1];
    const roundOutcome = roundData[2];

    switch (roundOutcome) {
        case "Tie":
            roundMessageDisplay.textContent = `Tie! You both chose 
                    ${playerSelection}.`
            break;
        case "Player":
            roundMessageDisplay.textContent = `You win the round! ${playerSelection} 
                    beats ${computerSelection}.`;
            break;
        case "Computer":
            roundMessageDisplay.textContent = `You lose the round. ${playerSelection} 
                    loses against ${computerSelection}.`;
            break;     
        default:
            console.log(roundOutcome)
            alert("Something went wrong with the round message display");
    }
}




