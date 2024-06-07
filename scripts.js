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

console.log(`The computer chose: ${getComputerChoice()}`);

function getHumanChoice() {
    let choice = prompt("Tell me your choice.");
    return "Your choice was: " + choice;
}

console.log(getHumanChoice());