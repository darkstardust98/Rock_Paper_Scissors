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
    return choice;
}

// const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

// console.log(playRound(humanSelection, computerSelection));

function playGame() {

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

    // for (let i = 0; i < 5; i++) {
    //     let humanRoundSelection = getHumanChoice();
    //     let computerRoundSelection = getComputerChoice();
    //     console.log(playRound(humanRoundSelection, computerRoundSelection));
    // }

    if (humanScore >= 3) {
        return `Congratulations, you won ${humanScore} rounds this game and thus have won!`;
    } else if (computerScore >= 3) {
        return `Unfortunately the computer won the game with a total of ${computerScore} won rounds.`;
    } else if (humanScore > computerScore) {
        return `You won with a score of ${humanScore} against the computer's score of ${computerScore}`;
    } else if (computerScore > humanScore) {
        return `Unfortunately you lost ${humanScore} to ${computerScore}`;
    } else if (humanScore = computerScore) {
        return `Both players scored the same with a result of ${humanScore} to ${computerScore}, so this game is a tie.`;
    } else return "An unexpected error occured.";

}

console.log(playGame());


//EVENT LISTENERS
document.getElementById("rock").addEventListener("click", 
    function() {
        alert("You chose Rock!");
    }
)

document.getElementById("paper").addEventListener("click", 
    function() {
        alert("You chose Paper!");
    }
)

document.getElementById("scissors").addEventListener("click", 
    function() {
        alert("You chose Scissors!");
    }
)