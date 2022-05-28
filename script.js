// Global variables
let playerScore = 0;
let computerScore = 0;

const playerScoreDisplay= document.querySelector(".scoreboard .player .score");
const computerScoreDisplay = document.querySelector(".scoreboard .computer .score");

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
        return [playerSelection, computerSelection, "Tie"];
    } else if ((playerSelection === "Paper" && computerSelection === "Rock") || 
        (playerSelection === "Rock" && computerSelection === "Scissors") ||
        (playerSelection === "Scissors" && computerSelection === "Paper")) {
            updateScore("Player")
            return [playerSelection, computerSelection, "Player"];
        } else {
            updateScore("Computer")
            return [playerSelection, computerSelection, "Computer"];
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

function showRoundMessage() {

}



