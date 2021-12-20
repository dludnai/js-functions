/* Simple code

//Begin with a function calles computerPlay() that will randomly return either "Rock", "Paper" or "Scissors" 

function computerPlay()
{
    let selectRandom = Math.floor(Math.random()*3);
    if (selectRandom === 0)
    {
        return 'rock';
    }
    else if (selectRandom === 1)
    {
        return 'paper';
    }
    else
    {
        return 'scissors';
    }
}

// Write a function that plays a single round of Rock Paper Scissors
// The function should take two parameters -> (playerSelection, computerSelection)
// Return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"

function playRound(playerSelection, computerSelection)
{
   if(playerSelection === 'rock' && computerSelection === 'paper')
   {
       return 'You Lose! Paper beats Rock';
   }
   else
   {
       return 'Not yet';
   }

}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
*/

/* Improved code */

