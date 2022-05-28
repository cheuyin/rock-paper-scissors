// Global variables
let playerScore = 0;
let computerScore = 0;

const playerScoreDisplay= document.querySelector(".scoreboard .score .player");
const computerScoreDisplay = document.querySelector(".scoreboard .score .computer");
const roundMessageDisplay = document.querySelector(".round-message p")
const rockButton = document.querySelector("button.rock");
const paperButton = document.querySelector("button.paper");
const scissorsButton = document.querySelector("button.scissors");
const playAgainButton = document.querySelector(".play-again button");

renderScore();
createButtonListeners();


function createButtonListeners() {
    rockButton.addEventListener("click", () => {
        playRound("Rock", generateRandomComputerSelection());
    });
    
    paperButton.addEventListener("click", () => {
        playRound("Paper", generateRandomComputerSelection());
    });
    
    scissorsButton.addEventListener("click", () => {
        playRound("Scissors", generateRandomComputerSelection());
    });

    playAgainButton.addEventListener("click", () => {
        resetGame();
    });
}

function generateRandomComputerSelection() {
    const options = ["Rock", "Paper", "Scissors"];
    return options[Math.floor(Math.random() * 3)];
}


// Play a single round
// Return the outcome of a round as well as player / computer selections
function playRound(playerSelection, computerSelection) {
    let roundData = [playerSelection, computerSelection, "Undecided"]
    if (playerSelection === computerSelection) {
        roundData[2] = "Tie"
        updateScore("Tie")
        showRoundMessage(roundData);
    } else if ((playerSelection === "Paper" && computerSelection === "Rock") || 
        (playerSelection === "Rock" && computerSelection === "Scissors") ||
        (playerSelection === "Scissors" && computerSelection === "Paper")) {
            roundData[2] = "Player"
            updateScore("Player")
            showRoundMessage(roundData);
    } else {
        roundData[2] = "Computer";
        updateScore("Computer")
        showRoundMessage(roundData);
    }

    checkGameEnd();
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

    // If someone gets to 5 points
    if (playerScore === 5) {
        roundMessageDisplay.textContent = `You win the game! ${playerSelection} 
        beats ${computerSelection}.`;
        return;
    } else if (computerScore === 5) {
        roundMessageDisplay.textContent = `You lose the game! ${playerSelection} 
        loses against ${computerSelection}.`;
        return;
    }


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

// Add end-of-game functionality

function checkGameEnd() {
    if (playerScore === 5 || computerScore === 5) {
        runGameEndLogic();
        return true;
    }
    return false;
}

function runGameEndLogic() {
    // Disable play buttons
    rockButton.setAttribute("disabled", true);
    paperButton.setAttribute("disabled", true);
    scissorsButton.setAttribute("disabled", true);

    // Show "Play Again" button
    playAgainButton.classList.toggle("hide");
}

function resetGame() {
    // Reset buttons
    playAgainButton.classList.toggle("hide");
    rockButton.removeAttribute("disabled");
    paperButton.removeAttribute("disabled");
    scissorsButton.removeAttribute("disabled");

    // Reset score
    playerScore = 0;
    computerScore = 0;
    renderScore();

    // Reset round message
    roundMessageDisplay.textContent = "";
}





