//function to play one round of Rock/Paper/Scissors
function oneRound() {
    const options = ["rock", "paper", "scissors"]; //defining array and options for computer to choose from
    let getComputerChoice = options[Math.floor(Math.random() * options.length)]; //variable for random computer choice
    console.log(getComputerChoice);

    let playerChoice1 = prompt("Please choose Rock/Paper/Scissors", ""); //inputting player choice
    let playerChoice = playerChoice1.toLowerCase(); //converting whatever the player inputs to be case insensitive
    alert("The computer chose " + getComputerChoice); //alert indicating what the computer chose

    if (playerChoice === getComputerChoice) {
        alert("It's a tie!");
        return; //code for a tie
    } else if ((playerChoice === "rock") && (getComputerChoice === "scissors")) {
        alert("You win!");
        playerWin = playerWin + 1; //modifying variable keeping track of player wins
        return; //player win if statement
    } else if ((playerChoice === "paper") && (getComputerChoice === "rock")) {
        alert ("You win!");
        playerWin = playerWin + 1; //modifying variable keeping track of player wins
        return; //player win if statement
    } else if ((playerChoice === "scissors") && (getComputerChoice ==="paper")) {
        alert("You win!");
        playerWin = playerWin + 1; //modifying variable keeping track of player wins
        return; //player win if statement
    } else {
        alert("Womp womp, you lose...better luck next time!");
        playerLoss = playerLoss + 1; //modifying variable keeping track of computer wins
        return; //all other conditions, loss
    }
}

//defining variables to keep track of player and computer wins in a global scope to call upon them in other functions
let playerWin = 0;
let playerLoss = 0;

//making function to play 5 rounds of rock/paper/scissors and determine overall winner (player or computer)
/*function game() {
    for (let i=0; i<5; i++) {
        oneRound();
} 
alert("You won " + playerWin + " rounds");
alert("The computer won " + playerLoss + " rounds");
if (playerWin > playerLoss) {
    alert("You're the overall winner of the 5 rounds! Congrats!!");
} else if (playerWin == playerLoss) {
        alert("Overall, it's a tie!");
    } else {
        alert("The computer destroyed you overall. Better luck next time!");
    }
};

game();
*/