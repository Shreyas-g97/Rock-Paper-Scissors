console.log("Hello World");

const options = ["Rock", "Paper", "Scissors"]; //defining array and options for computer to choose from
let getComputerChoice = options[Math.floor(Math.random() * options.length)]; //variable for random computer choice
console.log(getComputerChoice);

let playerChoice1 = prompt("Please choose Rock/Paper/Scissors", ""); //inputting player choice

function oneRound(choice1, choice2) {
    if (choice1 === choice2) {
        alert("It's a tie!");
    }
    else if 

}