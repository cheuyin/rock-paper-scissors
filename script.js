const rockButton = document.querySelector("button.rock");
rockButton.addEventListener("click", () => {
    return "Rock";
});

const paperButton = document.querySelector("button.paper");
paperButton.addEventListener("click", () => {
    return "Paper";
});

const scissorsButton = document.querySelector("button.scissors");
scissorsButton.addEventListener("click", () => {
    return "Scissors";
});

function generateRandomComputerSelection() {
    const options = ["Rock", "Paper", "Scissors"];
    return options[Math.floor(Math.random() * 3)];
}