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


let humanScore = 0;
let computerScore = 0;
// function getHumanChoice() {
//     let choice = prompt("Tell me your choice.");
//     return choice;
// }

// const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

// console.log(playRound(humanSelection, computerSelection));


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
            return "Congratulations your Rock smashed the computer's Scissors!"
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
            return "Congratulations your Paper wrapped around the computer's Rock!"
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
            return "Congratulations your Scissors cut the computer's Paper to pieces!"
        } else if (computerChoice === "Rock") {
            computerScore++;
            return "That's a shame... The computer's Rock smashed your Scissors!"
        } else return "Something went wrong. Try again."

    } else return "Something went wrong, try again.";

}


//EVENT LISTENERS

document.getElementById("rock").addEventListener("click", 
    function() {
        // alert("You chose Rock!");
        humanChoice = "Rock";
        computerChoice = getComputerChoice();
        document.getElementById("player-selection").innerText = "Rock";
        document.getElementById("computer-selection").innerText = getComputerChoice();
        playRound(humanChoice, computerChoice);
        document.getElementById("game-result").innerText = `${humanScore} to ${computerScore}`;
        checkScore();
    }
)

document.getElementById("paper").addEventListener("click", 
    function() {
        // alert("You chose Paper!");
        humanChoice = "Paper";
        computerChoice = getComputerChoice();
        document.getElementById("player-selection").innerText = "Paper";
        document.getElementById("computer-selection").innerText = getComputerChoice();
        playRound(humanChoice, computerChoice);
        document.getElementById("game-result").innerText = `${humanScore} to ${computerScore}`;
        checkScore();
    }
)

document.getElementById("scissors").addEventListener("click", 
    function() {
        // alert("You chose Scissors!");
        humanChoice = "Scissors";
        computerChoice = getComputerChoice();
        document.getElementById("player-selection").innerText = "Scissors";
        document.getElementById("computer-selection").innerText = getComputerChoice();
        playRound(humanChoice, computerChoice);
        document.getElementById("game-result").innerText = `${humanScore} to ${computerScore}`;
        checkScore();
    }
)

function checkScore() {
    if (humanScore === 5) {
        alert("You Won!");
        humanScore = 0;
        computerScore = 0;
    } else if (computerScore === 5) { 
        alert("You Lost!")
        humanScore = 0;
        computerScore = 0;
    }
}