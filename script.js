// randomly return “rock”, “paper” or “scissors”
function getComputerChoice() {
    return Math.floor((Math.random() * 3) + 1);
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
            getHumanChoice();
    }
}

// variables to keep track of the players score
let humanScore = 0;
let computerScore = 0;

// takes the human and computer player choices as arguments,
// increments the round winner’s score and logs a winner announcement
function playRound(humanChoice, computerChoice) {
    switch (humanChoice) {
        case 1:
            if (computerChoice == 1) {
                console.log("Draw! Both played rock");
            } else if (computerChoice == 2) {
                console.log("You lose! Paper beats rock");
                computerScore += 1;
            } else {
                console.log("You win! Rock beats scissors");
                humanScore += 1; 
            }
            break;
        case 2:
            if (computerChoice == 1) {
                console.log("You win! Paper beats rock");
                humanScore += 1;
            } else if (computerChoice == 2) {
                console.log("Draw! Both played paper");
            } else {
                console.log("You lose! Scissors beats paper");
                computerScore += 1;
            }
            break;
        case 3:
            if (computerChoice == 1) {
                console.log("You lose! Rock beats scissors");
                computerScore += 1;
            } else if (computerChoice == 2) {
                console.log("You win! Scissors beats paper");
                humanScore += 1;
            } else {
                console.log("Draw! Both played scissors");
            }
            break;
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
  
playRound(humanSelection, computerSelection);
console.log(humanScore);
console.log(computerScore);