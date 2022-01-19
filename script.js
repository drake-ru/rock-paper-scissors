//write function called computerPlay() that randomly returns rock, paper or scissors. This will be the computer's turn played.
    /* write an array that is ["rock", "paper", "scissors"]. Use Math.floor((Math.random()*10)+3) to get a random result from the array
    To make it reproducable, use Math.floor((Math.random()*10)+array.length) so it can always pick from the length of the array. */


/*Math.floor() = rounds down
Math.random() = random number between 0 and 1. Therefore will always be 0 when Math.floor(Math.random()
Math.floor(Math.random()+1 = 1
will always be the number added. So we need to multiply it.
Math.floor(Math.random()*10)) = random number between 0 and 10 (ie up to and inc 9).*/

    
    const rockButton = document.querySelector('#rock');
    const paperButton = document.querySelector('#paper');
    const scissorsButton = document.querySelector('#scissors');
    const playerSelectionText = document.querySelector('.playerSelection');
    const computerSelectionText = document.querySelector('.computerSelection');
    const whoWonTheRound = document.querySelector('.whoWonRound');
    const roundCounter = document.querySelector('.roundCount');
    const runningScore = document.querySelector('.runningScore');
    const overallWinner = document.querySelector('.overallWinner');

    const rpsarray = ["rock", "paper", "scissors"];
    function computerPlay(rpsarr) {
       return rpsarr[Math.floor(Math.random() * 3)];
    }

    let playerSelection;
    let computerSelection;
    let roundCount = 0;
    roundCounter.textContent = `Round Counter: ${roundCount}`;
    let winCount = 0;
    runningScore.textContent = `Running Score: ${winCount}`;

    
    rockButton.addEventListener('click', () => playsOneRound("rock", computerSelection));
    paperButton.addEventListener('click', () => playsOneRound("paper", computerSelection));
    scissorsButton.addEventListener('click', () => playsOneRound("scissors", computerSelection));
    

    function playsOneRound(playerSelection, computerSelection) {
        if (winCount > 2) {
            overallWinner.textContent = "You are the overall winner!";
            return;
        } else if (winCount < 3 && roundCount > 3) {
            overallWinner.textContent = "The computer is the overall winner.";
        }
        if (roundCount >= 5) {return};
    
        computerSelection = computerPlay(rpsarray);
        playerSelectionText.textContent = playerSelection;
        computerSelectionText.textContent = computerSelection;

             if (playerSelection === "rock" && computerSelection === "scissors") {
                whoWonTheRound.textContent = "You win! Rock beats scissors!";
                ++winCount;
            } else if (playerSelection === "rock" && computerSelection === "paper") {
                whoWonTheRound.textContent = "You lose! Paper beats rock!";
            } else if (playerSelection === "paper" && computerSelection === "rock") {
                whoWonTheRound.textContent = "You win! Paper beats rock!";
                ++winCount;
            } else if (playerSelection === "paper" && computerSelection === "scissors") {
                whoWonTheRound.textContent = "You lose! Scissors beat paper!";
            } else if (playerSelection === "scissors" && computerSelection === "paper") {
                whoWonTheRound.textContent = "You win! Scissors beat paper!";
                ++winCount;
            } else if (playerSelection === "scissors" && computerSelection === "rock") {
                whoWonTheRound.textContent = "You lose! Rock beats scissors!";
            } else if (playerSelection === computerSelection) {
                whoWonTheRound.textContent = "It's a draw!";
            } else {
                whoWonTheRound.textContent = "I think you misspelt something there! Let's restart.";
            }
        if (playerSelection !== computerSelection) {++roundCount};
        runningScore.textContent = `Running Score: ${winCount}`;
        roundCounter.textContent = `Round Counter: ${roundCount}`;
   }
//Potential improvements: have a delay on the computer's choice (before it's shown on screen)?
