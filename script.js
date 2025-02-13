// randomly return “rock”, “paper” or “scissors”
function getComputerChoice(n) {
    return Math.floor((Math.random() * n) + 1);
}

console.log(getComputerChoice(3));