function getComputerChoice() {
    let choice_num = Math.random();
    let choice = "";
    if (choice_num >= 0 && choice_num < 0.34) {
        choice = "Rock";
        return choice;
    } else if (choice_num >= 0.34 && choice_num < 0.67) {
        choice = "Paper";
        return choice;
    } else if (choice_num >= 0.67 && choice_num < 1) {
        choice = "Scissors";
        return choice;
    } else {
        return "something went wrong, try again.";
    }
}

function getHumanChoice() {
    let choice = prompt("Tell me your choice.");
    return "Your choice was: " + choice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (typeof humanChoice === 'string') {
        humanChoice = humanChoice.toLowerCase();
        humanChoice = humanChoice[0].toUpperCase() + humanChoice.slice(1);
    } else {
        console.log('Error: humanChoice is not a string');
    }
    // Player choice Rock scenario
    if (humanChoice === "Rock") {
        if (computerChoice === "Rock") {
            return "Both players chose the same. This is a tie.";
        } else if (computerChoice === "Scissors") {
            humanScore++;
            return "Congratulation your Rock smashed the computer's Scissors!"
        } else if (computerChoice === "Paper") {
            computerScore++;
            return "That's a shame... The computer's Paper wrapped around your Rock!"
        } else return "Something went wrong. Try again."

    // Player choice Paper scenario
    } else if (humanChoice === "Paper") {
        if (computerChoice === "Paper") {
            return "Both players chose the same. This is a tie.";
        } else if (computerChoice === "Rock") {
            humanScore++;
            return "Congratulation your Paper wrapped around the computer's Rock!"
        } else if (computerChoice === "Scissors") {
            computerScore++;
            return "That's a shame... The computer's Scissors cut your Paper in pieces!"
        }
    // Player choice Scissors scenario
    } else if (humanChoice === "Scissors") {
        if (computerChoice === "Scissors") {
            return "Both players chose the same. This is a tie.";
        } else if (computerChoice === "Paper") {
            humanScore++;
            return "Congratulation your Scissors cut the computer's Paper to pieces!"
        } else if (computerChoice === "Rock") {
            computerScore++;
            return "That's a shame... The computer's Rock smashed your Scissors!"
        } else return "Something went wrong. Try again."

    } else return "Something went wrong, try again.";

}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(playRound());