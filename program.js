// getting computer choice

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3)
  switch (randomNumber) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
}

const computerSelection = getComputerChoice();

console.log(computerSelection);

// getting player choice

const playerSelection = prompt("Write: Rock, Paper or Scissors").toLowerCase();

console.log(playerSelection);

// playRound() playing one round of player vs computer

let playerScore = "0";
let computerScore = "0";
let winnerStatus = "";

function playRound(playerSelection, computerSelection) {
    if (
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "paper")
        ){
            playerScore ++;
            winnerStatus = "winner";
        }
    if (
        (playerSelection == "scissors" && computerSelection == "rock") ||
        (playerSelection == "rock" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "scissors")
        ){
            computerScore ++;
            winnerStatus = "loser";
        }
    if (playerSelection === computerSelection)
        {
            winnerStatus = "tie";
        }
}

console.log(winnerStatus);

// loop to create 1 game based on 5 playRound()

//game (playRound());
//  for (let i = 0; i < 5; i++) {
//    if (let === 5) {
//      return;
//    }
//};