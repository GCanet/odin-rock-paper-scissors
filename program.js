// getting computer choice

const myArray = ["rock", "paper", "scissors"];

function getComputerChoice() {
  return myArray[~~(Math.random() * myArray.length)];
}

const computerSelection = getComputerChoice();

console.log(computerSelection);

// getting player choice

const playerSelection = prompt("Choose Rock, Paper or Scissors:").toLowerCase();

console.log(playerSelection);

// playRound() playing one round of player vs computer

let playerScore = "0"
let computerScore = "0"
let winnerStatus = ""

function playRound(playerSelection, computerSelection) {
    if (
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "paper")
        ){
            playerScore ++;
            winnerStatus = "winner"
            alert("You won");
        }
    if (
        (playerSelection == "scissors" && computerSelection == "rock") ||
        (playerSelection == "rock" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "scissors")
        ){
            computerScore ++;
            winnerStatus = "loser"
            alert("You lost");
        }
    if (playerSelection === computerSelection){
            winnerStatus = "tie"
            alert("Tie round!");
        }
}

console.log(playRound());

// loop to create 1 game based on 5 playRound()

//game (playRound());
//  for (let i = 0; i < 5; i++) {
//    if (let === 5) {
//      return;
//    }
//};