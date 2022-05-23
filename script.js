// Computer randomly chooses "rock", "paper", or "scissors"
function computerPlay() {
    const randInt = Math.floor(Math.random() * 3)
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


