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

// Caching the DOM
let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score"); //DOM Variable
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

// Creating a function that generates a random pick from the computer
function getComputerChoice()
{
    const choices = ['r','p','s']; // Array of computer choices
    const randomNumber = Math.floor(Math.random()*3); //
    return choices[randomNumber];
}
//console.log(getComputerChoice());

function convertToWord(letter)
{
    if (letter === "r") return "Rock";
    if (letter === "s") return "Scissors";
    if (letter === "p") return "Paper";
}

function win(userChoice, computerChoice)
{
    const smallUserWord = "user".fontsize(3).sup(); // sup() -> moves the string up
    const smallCompWord = "comp".fontsize(3).sup(); // sub() -> moves the string down
    const userChoice_div = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    //result_p.innerHTML = convertToWord(userChoice) + " beats " + convertToWord(computerChoice) + ". You win!"; //ES5
    result_p.innerHTML = `${smallUserWord}${convertToWord(userChoice)} beats ${smallCompWord}${convertToWord(computerChoice)}. You win! `;//ES6 with backticks(``)
    userChoice_div.classList.add('green-glow');// Added the class .green-glow from .css file
    //setTimeout(function() {userChoice_div.classList.remove('green-glow')}, 300);// Remove the green glow with the JS setTimeout function 
    setTimeout(() => userChoice_div.classList.remove('green-glow'), 300);//JS ES6 
}

function lose(userChoice, computerChoice)
{
    const smallUserWord = "user".fontsize(3).sup(); // sup() -> moves the string up
    const smallCompWord = "comp".fontsize(3).sup(); // sub() -> moves the string down
    const userChoice_div = document.getElementById(userChoice);
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${smallUserWord}${convertToWord(userChoice)} loses to ${smallCompWord}${convertToWord(computerChoice)}. You lost! `;
    userChoice_div.classList.add('red-glow');
    setTimeout(function() {userChoice_div.classList.remove('red-glow')}, 300);
}

function draw(userChoice, computerChoice)
{
    const smallUserWord = "user".fontsize(3).sup(); // sup() -> moves the string up
    const smallCompWord = "comp".fontsize(3).sup(); // sub() -> moves the string down
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = `${smallUserWord}${convertToWord(userChoice)} equals ${smallCompWord}${convertToWord(computerChoice)}. It's a tie! `;
    userChoice_div.classList.add('grey-glow');
    setTimeout(function() {userChoice_div.classList.remove('grey-glow')}, 300);
}

// Creating a game() function which compares the user choice with the random choice from the computer
function game(userChoice)
{
    const computerChoice = getComputerChoice();
    //console.log(getComputerChoice());
    switch (userChoice + computerChoice)
    {
        case "rs":
        case "pr":
        case "sp":
            //console.log("USER WINS");
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            //console.log("USER LOSES");
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            //console.log("TIE");
            draw(userChoice, computerChoice);
            break;
    }  
}


// Adding a main() function that wraps it all together
function main() 
{
    // Adding the buttons from the HTML so that it will perform an action when 'clicking'
    /*rock_div.addEventListener('click', function()
    {
        //console.log("hey you clicked on rock");
        game("r");
    })
    */
    rock_div.addEventListener('click', () => game("r"));//JS ES6

    paper_div.addEventListener('click', () => game("p"));//JS ES6

    scissors_div.addEventListener('click', () => game("s"));//JS ES6
}

main();

