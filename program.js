// scores to 0 at start

let playerScore = '0';
let computerScore = '0';

// update results on html

document.getElementById('playersc').innerHTML = playerScore;
document.getElementById('computersc').innerHTML = computerScore;

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

let computerSelection = getComputerChoice();

// getting player choice from buttom

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', getPlayerChoice)});

function getPlayerChoice() {
  let playerSelection = (buttons.id);
  playRound(playerSelection, computerSelection);
}

let playerSelection = getPlayerChoice();

// one round game function

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
    if (playerSelection === computerSelection)
      {
        console.log("tie round")
      }
  checkWinner();
}

// alert winner on 5 points + reset game

function checkWinner() {
    if (computerScore === 5) {
      alert('Computer Wins!! You lose!!')
      }
    if (playerScore === 5) {
      alert('You are the winner!!')
      }
}

