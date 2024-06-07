# Rock_Paper_Scissors
Basic implementation of the famous game, running in the console.

This README.md file will be used to explain my experience and the process and will also host the Pseudocode for the project itself.



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
