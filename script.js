//write function called computerPlay() that randomly returns rock, paper or scissors. This will be the computer's turn played.
    /* write an array that is ["rock", "paper", "scissors"]. Use Math.floor((Math.random()*10)+3) to get a random result from the array
    To make it reproducable, use Math.floor((Math.random()*10)+array.length) so it can always pick from the length of the array. */

const rpsarray = ["rock", "paper", "scissors"];
function computerPlay(rpsarr) {
   return rpsarr[Math.floor(Math.random() * 3)];
}

/*Math.floor() = rounds down
Math.random() = random number between 0 and 1. Therefore will always be 0 when Math.floor(Math.random()
Math.floor(Math.random()+1 = 1
will always be the number added. So we need to multiply it.
Math.floor(Math.random()*10)) = random number between 0 and 10 (ie up to and inc 9).



/*write a function () that plays a single round of rock, paper, scissors.
The function should take two parameters - the playerSelection and computerSelection - and then return a string that declares the winner of the round and why.
    **make the player's input case insensitive, so they can put rock, ROCk, ROCK etc.
    make sure to return the results of the function call, not console.log() them. But do test out the function using console.log().*/


    function playsOneRound(playerSelection, computerSelection) {
        
             if (playerSelection === "rock" && computerSelection === "scissors") {
                return "You win! Rock beats scissors!";
            } else if (playerSelection === "rock" && computerSelection === "paper") {
                return "You lose! Paper beats rock!";
            } else if (playerSelection === "paper" && computerSelection === "rock") {
                return "You win! Paper beats rock!";
            } else if (playerSelection === "paper" && computerSelection === "scissors") {
                return "You lose! Scissors beat paper!";
            } else if (playerSelection === "scissors" && computerSelection === "paper") {
                return "You win! Scissors beat paper!";
            } else if (playerSelection === "scissors" && computerSelection === "rock") {
                return "You lose! Rock beats scissors!";
            } else if (playerSelection === computerSelection) {
                return "It's a draw!";
            } else {
                return "I think you misspelt something there! Let's restart.";
            }
   }

//console.log(playsOneRound(playerSelection, computerSelection));

/*Write a NEW function called game(). Use the previous function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.
You have not officially learned how to “loop” over code to repeat function calls… 
if you already know about loops from somewhere else (or if you feel like doing some more learning) feel free to use them. 
At this point you should be using console.log() to display the results of each round and the winner at the end.
Use prompt() to get input from the user.*/


let playerSelection;
    let computerSelection;
    let roundCount = 0;
    let winCount = 0;

function game() {
    for (roundCount = 0; roundCount < 5; ++roundCount) {
        playerSelection = window.prompt("Please enter 'rock', 'paper' or 'scissors'.");
        playerSelection = playerSelection.toLowerCase();
        console.log(playerSelection);
        computerSelection = computerPlay(rpsarray);
        console.log(computerSelection);
        playsOneRound(playerSelection, computerSelection);
        didPlayerWin(playerSelection, computerSelection);
    }
    winCount > 2 ? console.log("You win overall!") : console.log("You lose overall.");
}

console.log(game());


//helper function to be included in game() that checks if the player's hand is a winning one

function didPlayerWin(playerSelection, computerSelection) {
    (playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissors" && computerSelection === "paper") ? ++winCount && console.log("You won this round!")
        : (playerSelection === computerSelection) ? console.log("Draw. No points gained.")
        : console.log("You lost.");
}





