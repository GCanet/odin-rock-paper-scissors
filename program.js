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

// game() function based on loop of 5 playRound() + winner declaration

const gameWon = alert("You won the 5 rounds game, you are a WINNER!");
const gameLost = alert("Computer won the 5 rounds game, you are a LOSER!");

function game ();
  for (let i = 0; i < 6; i++) {
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
    }
    if (let == 6) {
      if (playerScore > computerScore) 
      {
        return gameWon;
      }
      if (playerScore < computerScore)
      {
        return gameLost;
      }
    }
  return;
};

game();

// if winner dosen't work in loop i can try this*
//
//function winner(playerScore, computerScore) {
//  if (playerScore > computerScore) 
//  {
//    return gameWon;
//  }
//  if (playerScore < computerScore)
//  {
//    return gameLost;
//  }
//}
//winner(playerScore, computerScore);