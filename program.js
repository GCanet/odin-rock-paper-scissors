let computerSelection = getComputerChoice();
let playerSelection;
let playerScore = 0;
let computerScore = 0;

// update results on html // NOT WORKING // 

document.getElementById('playersc').innerHTML = playerScore;
document.getElementById('computersc').innerHTML = computerScore;

// player and computer choices

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

let buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const img = button.querySelector('img');
    playerSelection = img.alt.toLowerCase();

    playRound(playerSelection, computerSelection);

    if (playerScore === 5 || computerScore === 5) {
      checkWinner();
    }
  });
});

// one round game

function playRound(playerSelection, computerSelection) {
  computerSelection = getComputerChoice();
  playerSelection = playerSelection;
  console.log(playerSelection);
  console.log(computerSelection);
    if (
      (playerSelection == 'paper' && computerSelection == 'rock') ||
      (playerSelection == 'rock' && computerSelection == 'scissors') ||
      (playerSelection == 'scissors' && computerSelection == 'paper')
      ){
        playerScore++;
        console.log('player wins')
      }
    if (
      (playerSelection == 'scissors' && computerSelection == 'rock') ||
      (playerSelection == 'rock' && computerSelection == 'paper') ||
      (playerSelection == 'paper' && computerSelection == 'scissors')
      ){
        computerScore++;
        console.log('computer wins')
      }
    if (playerSelection === computerSelection)
      {
        console.log('tie round')
      }
}

// alert winner on 5 points + reset game

function checkWinner() {
    if (computerScore === 5) {
      alert('Computer Wins!! You lose!!')
      playerScore = 0;
      computerScore = 0;
      }
    if (playerScore === 5) {
      alert('You are the winner!!')
      playerScore = 0;
      computerScore = 0;
      }
}