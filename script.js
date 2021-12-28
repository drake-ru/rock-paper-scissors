//write function called computerPlay() that randomly returns rock, paper or scissors. This will be the computer's turn played.
    /* write an array that is ["rock", "paper", "scissors"]. Use Math.floor((Math.random()*10)+3 to get a random result from the array. */

const rpsarray = ["rock", "paper", "scissors"];
function computerPlay(rpsarr) {
   return rpsarr[Math.floor(Math.random() * 3)];
}

//woop woop!!! This works!!! WAHOO!//

/*Math.floor() = rounds down
Math.random() = random number between 0 and 1. Therefore will always be 0 when Math.floor(Math.random()
Math.floor(Math.random()+1 = 1
will always be the number added. So we need to multiply it.
Math.floor(Math.random()*10)) = random number between 0 and 10 (ie up to and inc 9).

/*write a function () that plays a single round of rock, paper, scissors.
The function should take two parameters - the playerSelection and computerSelection - and then return a string that declares the winner of the round and why.
    **make the player's input case insensitive, so they can put rock, ROCk, ROCK etc.
    make sure to return the results of the function call, not console.log() them. But do test out the function using console.log().*/

/*ok, so function that has two paramenters. computerSelection will run the computerPlay function. playerSelection will run a prompt 
to get you to enter (type) rock, paper or scissors; case insensitive.
Add if statements to dictate winner -
if rock and paper
if rock and scissors
if paper and scissors
return a string that says you win / you lose.*/



function playsOneRound(playerSelection, computerSelection) {

     playerSelection = window.prompt("Please enter 'rock', 'paper' or 'scissors'.");
     computerSelection = computerPlay(rpsarray);

     playerSelection = playerSelection.toLowerCase();
     //makes whatever the player inputs lowercase, so their input can be case insensitive.//

     if (playerSelection === "rock" && computerSelection === "rock") {
         return "Rock and rock! It's a draw!";
     } else if (playerSelection === "rock" && computerSelection === "scissors") {
         return "You win! Rock beats scissors!";
     } else if (playerSelection === "rock" && computerSelection === "paper") {
         return "You lose! Paper beats rock!";
     } else if (playerSelection === "paper" && computerSelection === "paper") {
         return "Paper and paper! It's a draw!";
     } else if (playerSelection === "paper" && computerSelection === "rock") {
         return "You win! Paper beats rock!";
     } else if (playerSelection === "paper" && computerSelection === "scissors") {
         return "You lose! Scissors beat paper!";
     } else if (playerSelection === "scissors" && computerSelection === "scissors") {
         return "Scissors and scissors! It's a draw!";
     } else if (playerSelection === "scissors" && computerSelection === "paper") {
         return "You win! Scissors beat paper!";
     } else if (playerSelection === "scissors" && computerSelection === "rock") {
         return "You lose! Rock beats scissors!";
     } else {
         return "I think you misspelt something there! Let's restart.";
     }
}














/*write a NEW function called game().
Use the previous function INSIDE of this one to play a 5 round game that keeps score and reports a winner and loser at the end.
Use loops or call the function 5 times. 
Use console.log() to display the results of the game at the end.
Use prompt() to get input from the user. */
