let computerSelection = getComputerChoice();
let playerSelection;
let playerScore = 0;
let computerScore = 0;

// update results on html

document.getElementById('playersc').innerHTML = playerScore;
document.getElementById('computersc').innerHTML = computerScore;
let combatText = document.querySelector('.roundtext');

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
    if (
      (playerSelection == 'paper' && computerSelection == 'rock') ||
      (playerSelection == 'rock' && computerSelection == 'scissors') ||
      (playerSelection == 'scissors' && computerSelection == 'paper')
      ){
        playerScore++;
        combatText.innerText = `You chose: ${playerSelection}, Computer chose: ${computerSelection}. You win this round!!`;
        document.getElementById('playersc').innerHTML = playerScore;
        document.getElementById('computersc').innerHTML = computerScore;
      }
    if (
      (playerSelection == 'scissors' && computerSelection == 'rock') ||
      (playerSelection == 'rock' && computerSelection == 'paper') ||
      (playerSelection == 'paper' && computerSelection == 'scissors')
      ){
        computerScore++;
        combatText.innerText = `You chose: ${playerSelection}, Computer chose: ${computerSelection}. Computer win this round!!`;
        document.getElementById('playersc').innerHTML = playerScore;
        document.getElementById('computersc').innerHTML = computerScore;
      }
    if (playerSelection === computerSelection)
      {
        combatText.innerText = `You chose: ${playerSelection}, Computer chose: ${computerSelection}. Tie round!!`;
        document.getElementById('playersc').innerHTML = playerScore;
        document.getElementById('computersc').innerHTML = computerScore;
      }
}

// alert winner on 5 points + reset game

function checkWinner() {
    if (computerScore === 5) {
      combatText.innerText = `Computer won 5 rounds! You lose!!`;
      playerScore = 0;
      computerScore = 0;
      document.getElementById('playersc').innerHTML = playerScore;
      document.getElementById('computersc').innerHTML = computerScore;
      }
    if (playerScore === 5) {
      combatText.innerText = `You won 5 rounds! You are the winner!!`;
      playerScore = 0;
      computerScore = 0;
      document.getElementById('playersc').innerHTML = playerScore;
      document.getElementById('computersc').innerHTML = computerScore;
      }
}