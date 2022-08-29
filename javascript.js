let playerChoice; //defining variable for player choice
let playerWin = 0; //defining variable for player wins
let playerLoss = 0; //defining variable for player losses

function oneRound(playerChoice) {
    const options = ["rock", "paper", "scissors"]; //defining array and options for computer to choose from
    let getComputerChoice = options[Math.floor(Math.random() * options.length)]; //variable for random computer choice
    compChoice.textContent = "The computer chose " + getComputerChoice + "!"; //display the computer choice to user in p tag
        if (playerChoice === getComputerChoice) { //if condition for a tie
            roundResults.textContent = "It's a tie!";
            Wins.textContent = playerWin;
            Losses.textContent = playerLoss;
            return;
        } else if ((playerChoice === "rock") && (getComputerChoice === "scissors")) {
            roundResults.textContent = "You win this round!";
            playerWin = playerWin + 1; //modifying variable keeping track of player wins
            Wins.textContent = playerWin;
            Losses.textContent = playerLoss;
            return;
        } else if ((playerChoice === "paper") && (getComputerChoice === "rock")) {
            roundResults.textContent = "You win this round!";
            playerWin = playerWin + 1; //modifying variable keeping track of player wins
            Wins.textContent = playerWin;
            Losses.textContent = playerLoss;
            return;
             //player win if statement
        } else if ((playerChoice === "scissors") && (getComputerChoice ==="paper")) {
            roundResults.textContent = "You win this round!";
            playerWin = playerWin + 1; //modifying variable keeping track of player wins
            Wins.textContent = playerWin;
            Losses.textContent = playerLoss;
            return;
        } else {
            roundResults.textContent = "Womp womp, you lose this one...Better luck next round";
            playerLoss = playerLoss + 1; //modifying variable keeping track of computer wins
            Wins.textContent = playerWin;
            Losses.textContent = playerLoss;
            return;
        }
    };

const rockBtn = document.querySelector('#rock'); //adding an event listener for the Rock button and executing code below assuming player choice is rock
const paperBtn = document.querySelector('#paper'); //adding an event listener for the Paper button and executing code below assuming player choice is paper
const scissorsBtn = document.querySelector('#scissors'); //adding an event listener for the Scissors button and executing code below assuming player choice is scissors
const choice = document.querySelector('#choice'); //adding a selector for a p tag to display user choice to the user for clarity
const compChoice = document.querySelector('#compChoice'); //adding a selector for a p tag to display computer choice to the user


rockBtn.addEventListener("click", function(){ //function called when button is clicked
    if (playerWin == 5 || playerLoss == 5) {
        return; //prevents function from executing if player win or computer win are at 5
    } else {
        theGame("rock");
    }
});

paperBtn.addEventListener("click", function(){
    if (playerWin == 5 || playerLoss == 5) {
        return;
    } else {
        theGame("paper");
    }
});

scissorsBtn.addEventListener("click", function(){
    if (playerWin == 5 || playerLoss == 5) {
        return;
    } else {
        theGame("scissors");
    }
});

const Wins = document.querySelector('#Wins'); //adding a selector to later modify text content of Wins
const Losses = document.querySelector('#Losses'); //adding a selector to later modify text content of Losses
const roundResults = document.querySelector('#roundResults');

function theGame(playerChoice) {
    choice.textContent = "You chose "+ playerChoice+"!"; //display the player choice
    oneRound(playerChoice); //calling function to play one round of rock/paper/scissors
    setTimeout(() => { //timeout to display updated results in DOM before alert
        if (playerWin == 5) {
            if (confirm("You have won the game! Try again?") == true) {
                location.reload(); //reloads the page is user wants to try again
            } else {
            return;
            }
        } else if (playerLoss == 5) {
            if (confirm("You have lost the game! Try again?") == true) {
                location.reload();
            } else {
            return;
            }
        } else {
            return;
        }
    }, 10) //interval time
}