let playerScore = '0';
let computerScore = '0';
document.getElementById('playersc').innerHTML = playerScore;
document.getElementById('computersc').innerHTML = computerScore;

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

let computerSelection = getComputerChoice();
let playerSelection = button.id;

function playRound(playerSelection, computerSelection) {
  if (
        (playerSelection == 'paper' && computerSelection == 'rock') ||
        (playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'scissors' && computerSelection == 'paper')
        ){
          playerScore++;
        }
  if (
        (playerSelection == 'scissors' && computerSelection == 'rock') ||
        (playerSelection == 'rock' && computerSelection == 'paper') ||
        (playerSelection == 'paper' && computerSelection == 'scissors')
        ){
          computerScore++;
        }
  if (playerScore == 5)
        {
          alert('You are the winner!!');
          playerScore = '0';
          computerScore = '0';
        }
  if (computerScore == 5)
        {
          alert('Computer Wins!! You lose!!');
          playerScore = '0';
          computerScore = '0';
        }
}