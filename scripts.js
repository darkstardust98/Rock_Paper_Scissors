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

const computerSelection = getComputerChoice();

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
            return;
        } else if (computerChoice === "Scissors") {
            humanScore++;
            return;
        } else if (computerChoice === "Paper") {
            computerScore++;
            return;
        };

    // Player choice Paper scenario
    } else if (humanChoice === "Paper") {
        if (computerChoice === "Paper") {
            return;
        } else if (computerChoice === "Rock") {
            humanScore++;
            return;
        } else if (computerChoice === "Scissors") {
            computerScore++;
            return;
        };
    // Player choice Scissors scenario
    } else if (humanChoice === "Scissors") {
        if (computerChoice === "Scissors") {
            return;
        } else if (computerChoice === "Paper") {
            humanScore++;
            return;
        } else if (computerChoice === "Rock") {
            computerScore++;
            return;
        };

    } else return "Something went wrong, try again.";

}


//EVENT LISTENERS

document.getElementById("rock").addEventListener("click", 
    function() {
        // alert("You chose Rock!");
        humanChoice = "Rock";
        computerChoice = getComputerChoice();
        document.getElementById("player-selection").innerText = "Rock";
        document.getElementById("computer-selection").innerText = computerChoice;
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
        document.getElementById("computer-selection").innerText = computerChoice;
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
        document.getElementById("computer-selection").innerText = computerChoice;
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