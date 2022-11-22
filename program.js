buttons.forEach(button =>{
  button.addEventListener(`click`, function(){
      playRound(button.id)
  })
})

const player = document.querySelector("playerscore");
player.textContent = `Player Score: ${playerScore}`;

const computer = document.querySelector("computerscore");
computer.textContent = `Computer Score: ${computerScore}`;

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

let playerScore = `0`;
let computerScore = `0`;

function playRound(playerSelection, computerSelection) {
  let playerSelection = button.id;
  let computerSelection = getComputerChoice();
  
  player.textContent = `You: ${playerScore}`;
  computer.textContent = `Computer: ${compScore}`;
  if (
        (playerSelection == `paper` && computerSelection == `rock`) ||
        (playerSelection == `rock` && computerSelection == `scissors`) ||
        (playerSelection == `scissors` && computerSelection == `paper`)
        ){
          playerScore++;
          player.textContent = `You: ${playerScore}`;
          computer.textContent = `Computer: ${compScore}`;
        }
  if (
        (playerSelection == `scissors` && computerSelection == `rock`) ||
        (playerSelection == `rock` && computerSelection == `paper`) ||
        (playerSelection == `paper` && computerSelection == `scissors`)
        ){
          computerScore++;
          player.textContent = `You: ${playerScore}`;
          computer.textContent = `Computer: ${compScore}`;
        }
  if (playerScore == 5)
        {
          alert("You are the winner!!");
          player.textContent = `You: ${playerScore}`;
          computer.textContent = `Computer: ${compScore}`;
          playerScore = `0`;
          computerScore = `0`;
        }
  if (computerScore == 5)
        {
          alert("Computer Wins!! You lose!!");
          player.textContent = `You: ${playerScore}`;
          computer.textContent = `Computer: ${compScore}`;
          playerScore = `0`;
          computerScore = `0`;
        }
}