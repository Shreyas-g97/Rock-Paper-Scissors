let playerChoice;
let playerWin = 0;
let playerLoss = 0;
function oneRound(playerChoice) {
    const options = ["rock", "paper", "scissors"]; //defining array and options for computer to choose from
    let getComputerChoice = options[Math.floor(Math.random() * options.length)]; //variable for random computer choice
    console.log(getComputerChoice);

    if (playerChoice === getComputerChoice) {
        roundResults.textContent = "It's a tie!";
        return; //code for a tie
    } else if ((playerChoice === "rock") && (getComputerChoice === "scissors")) {
        roundResults.textContent = "You win this round!";
        playerWin = playerWin + 1; //modifying variable keeping track of player wins
        Wins.textContent = playerWin;
        return; //player win if statement
    } else if ((playerChoice === "paper") && (getComputerChoice === "rock")) {
        roundResults.textContent = "You win this round!";
        playerWin = playerWin + 1; //modifying variable keeping track of player wins
        Wins.textContent = playerWin;
        return; //player win if statement
    } else if ((playerChoice === "scissors") && (getComputerChoice ==="paper")) {
        roundResults.textContent = "You win this round!";
        playerWin = playerWin + 1; //modifying variable keeping track of player wins
        Wins.textContent = playerWin;
        return; //player win if statement
    } else {
        roundResults.textContent = "Womp womp, you lose this one...Better luck next round";
        playerLoss = playerLoss + 1; //modifying variable keeping track of computer wins
        Losses.textContent = playerLoss;
        return; //all other conditions, loss
    }
}

const rockBtn = document.querySelector('#rock'); //adding an event listener for the Rock button and executing code below assuming player choice is rock
rockBtn.addEventListener("click", function(){
        oneRound("rock");
});

const paperBtn = document.querySelector('#paper'); //adding an event listener for the Paper button and executing code below assuming player choice is paper
paperBtn.addEventListener("click", function(){
    console.log("You pressed paper");
    oneRound("paper");
});

const scissorsBtn = document.querySelector('#scissors'); //adding an event listener for the Scissors button and executing code below assuming player choice is scissors
scissorsBtn.addEventListener("click", function(){
    console.log("You pressed scissors");
    oneRound("scissors");
});

const Wins = document.querySelector('#Wins'); //adding a selector to later modify text content of Wins
const Losses = document.querySelector('#Losses'); //adding a selector to later modify text content of Losses
const roundResults = document.querySelector('#roundResults');

