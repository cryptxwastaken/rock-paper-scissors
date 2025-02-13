// randomly return “rock”, “paper” or “scissors”
function getComputerChoice() {
    return Math.floor((Math.random() * 3) + 1);
}

// takes the user choice and returns it
function getHumanChoice() {
    let humanChoice = prompt("Rock, Paper, or Scissors?").toLowerCase();
    switch (humanChoice) {
        case "rock":
            return 1;
        case "paper":
            return 2;
        case "scissors":
            return 3;
        default:
            alert("Invalid choice! Try again!");
            return getHumanChoice();
    }
}

// takes the human and computer player choices as arguments,
// increments the round winner’s score and logs a winner announcement
function playRound(humanChoice, computerChoice) {
    switch (humanChoice) {
        case 1:
            if (computerChoice == 1) {
                console.log("Draw! Both played rock");
                break;
            } else if (computerChoice == 2) {
                console.log("You lose! Paper beats rock");
                return "Computer";
            } else {
                console.log("You win! Rock beats scissors");
                return "Human";
            }
        case 2:
            if (computerChoice == 1) {
                console.log("You win! Paper beats rock");
                return "Human";
            } else if (computerChoice == 2) {
                console.log("Draw! Both played paper");
                break;
            } else {
                console.log("You lose! Scissors beats paper");
                return "Computer";
            }
        case 3:
            if (computerChoice == 1) {
                console.log("You lose! Rock beats scissors");
                return "Computer";
            } else if (computerChoice == 2) {
                console.log("You win! Scissors beats paper");
                return "Human";
            } else {
                console.log("Draw! Both played scissors");
                break;
            }
    }
}

// calls playRound to play 5 rounds,
// and declares a winner at the end.
function playGame() {
    // variables to keep track of the players score
    let humanScore = 0;
    let computerScore = 0;
    for (let i = 1; i <= 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        let roundResult = playRound(humanSelection, computerSelection);
        if (roundResult == "Human") {
            humanScore++;
        } else if (roundResult == "Computer") {
            computerScore++;
        }
    }
    console.log(`Score: ${humanScore} to ${computerScore}`)
    if (humanScore > computerScore) {
        console.log("You are the winner!");
    } else if (humanScore == computerScore) {
        console.log("It's a tie");
    } else {
        console.log("You lost...");
    }
}

// Plays the game
playGame()