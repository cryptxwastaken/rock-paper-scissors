// randomly return “rock”, “paper” or “scissors”
function getComputerChoice(n) {
    return Math.floor((Math.random() * n) + 1);
}

// takes the user choice and returns it
function getHumanChoice() {
    humanChoice = prompt("Rock, Paper, or Scissors?").toLowerCase();
    switch (humanChoice) {
        case "rock":
            return 1;
        case "paper":
            return 2;
        case "scissors":
            return 3;
        default:
            alert("Invalid choice! Try again!");
    }
}

console.log(getHumanChoice())