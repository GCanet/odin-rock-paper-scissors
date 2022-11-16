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

// playing one round

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
          winnerStatus = "You won the round.";
        }
    if (
        (playerSelection == "scissors" && computerSelection == "rock") ||
        (playerSelection == "rock" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "scissors")
        ){
          computerScore ++;
          winnerStatus = "Computer wins, you lose the round.";
        }
    if (playerSelection === computerSelection)
        {
          winnerStatus = "This is a tie round.";
        }
  return winnerStatus;
}

playRound(playerSelection, computerSelection);
console.log(winnerStatus);

// game() function based on loop of 5 playRound()

function game ();
  for (let i = 0; i < 5; i++) {
    if (let === 1) {
      playRound(playerSelection, computerSelection);
    }
    if (let === 2) {
      playRound(playerSelection, computerSelection);
    }
    if (let === 3) {
      playRound(playerSelection, computerSelection);
    }
    if (let === 4) {
      playRound(playerSelection, computerSelection);
    }
    if (let === 5) {
      playRound(playerSelection, computerSelection)
      return;
    }
  return;
};

// score = 5 = declare winner

const gameWon = alert("You won the computer 5 times, you are a WINNER!");
const gameLost = alert("The computer won 5 times, you are a LOSER!");

function winner(playerScore, computerScore) {
  if (playerScore == 5)
    {
      return gameWon;
    }
  if (computerScore == 5)
    {
      return gameLost;
    }
  return;
}

winner(gameWon, gameLost);
console.log(winner(gameWon, gameLost));