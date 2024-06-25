# Rock_Paper_Scissors
Basic implementation of the famous game, running in the console.

This README.md file will be used to explain my experience and the process and will also host the Pseudocode for the project itself.

UPDATE:
I just created my first branch ever as a test and will use it to implement a UI for this game.



PSEUDOCODE:



getComputerChoice
-
CREATE local let choice variable
GENERATE random number between 0 and 1
ASSIGN 0-0.33, 0.34-0.67, 0.68-1 to Rock, Paper and Scissors via if-else statement
RETURN choice



getHumanChoice
-
CREATE local let choice variable
PROMPT the user for his choice
RETURN choice


playRound
-
RECEIVE getHumanChoice and getComputerChoice as arguments
TRASNFORM getHumanChoice to lower case
TRANSFORM the first letter of getHumanChoice to upper case
COMPARE the choices 
DECLARE a winner via if-else statement


playGame
.
CALL playround for 5 times via for loop\
INCREMENT player of computer score each round
DETERMINE the winner as soon as a player reaches 3 in score via else-if statement

