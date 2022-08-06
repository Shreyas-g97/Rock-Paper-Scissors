console.log("Hello World");

const options = ["rock", "paper", "scissors"]; //defining array and options for computer to choose from
let getComputerChoice = options[Math.floor(Math.random() * options.length)]; //variable for random computer choice
console.log(getComputerChoice);

let playerChoice1 = prompt("Please choose Rock/Paper/Scissors", ""); //inputting player choice
let playerChoice = playerChoice1.toLowerCase(); //converting player choice to lower case always to make results not case sensitive

function oneRound(choice1, choice2) {
    alert("The computer chose " + choice2); //alert indicating what the computer chose
    if (choice1 === choice2) {
        alert("It's a tie!"); //code for a tie
    } else if ((choice1 === "rock") && (choice2 === "scissors")) {
        alert("You win!"); //player win if statement
    } else if ((choice1 === "paper") && (choice2 === "rock")) {
        alert("You win!"); //player win if statement
    } else if ((choice1 === "scissors") && (choice2 ==="paper")) {
        alert("You win!"); //player win if statement
    } else {
        alert("Womp womp, you lose...better luck next time!"); //all other conditions, loss
    }
}

oneRound(playerChoice, getComputerChoice); //calling on function