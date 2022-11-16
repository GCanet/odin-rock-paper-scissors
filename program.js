// getting computer choice

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3)
  switch (randomNumber) {
    case 0:
      return `rock`;
    case 1:
      return `paper`;
    case 2:
      return `scissors`;
  }
}

const computerSelection = getComputerChoice();

// playing one round

let playerScore = `0`;
let computerScore = `0`;

function playRound(playerSelection, computerSelection) {
    if (
        (playerSelection == `paper` && computerSelection == `rock`) ||
        (playerSelection == `rock` && computerSelection == `scissors`) ||
        (playerSelection == `scissors` && computerSelection == `paper`)
        ){
          playerScore++;
        }
    if (
        (playerSelection == `scissors` && computerSelection == `rock`) ||
        (playerSelection == `rock` && computerSelection == `paper`) ||
        (playerSelection == `paper` && computerSelection == `scissors`)
        ){
          computerScore++;
        }
    if (playerSelection === computerSelection)
        {
          playerScore++;
          computerScore++;
        }
}

// game() function based on loop of 5 playRound() + winner declaration

function game() {
  for (let i = 0; i < 5; i++){
      let playerSelection;
      let computerSelection;

      playerSelection = prompt(`Write Rock, Paper or Scissors:`).toLowerCase();
      computerSelection = getComputerChoice();

      console.log(playRound(computerSelection, playerSelection));
  }
  if (playerScore > computerScore)
  {
      console.log(`You win! score: ${playerScore} to ${computerScore}`);
  }
  else if (computerScore > playerScore)
  {
      console.log(`Computer wins! score: ${playerScore} to ${computerScore}`);
  }
  else
  {
      console.log(`It's a tie! score: ${playerScore} to ${computerScore}`);
  }
}

game();