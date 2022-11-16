// getting computer choice

const myArray = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
  return myArray[~~(Math.random() * myArray.length)];
}

console.log(getComputerChoice());

// getting player choice

const playerSelection = prompt("Choose Rock, Paper or Scissors:").toLowerCase();

console.log(playerSelection);

// building computer function into variable

const computerSelection = getComputerChoice();

console.log(computerSelection);

// playRound() playing one round of player vs computer

function playRound(playerSelection, computerSelection) {
    if (playerSelection = "paper") + (computerSelection = "rock")
        function win() {
          alert("You won, paper wins rocks");
        }
    if (playerSelection = "rock") + (computerSelection = "scissors")
        function win() {
          alert("You won, rock wins scissors");
        }
    if (playerSelection = "scissors") + (computerSelection = "paper")
        function win() {
          alert("You won, scissors wins paper");
        }
    if (playerSelection = "scissors") + (computerSelection = "rock")
        function lose() {
          alert("You lost, rock wins scissors");
        }
    if (playerSelection = "rock") + (computerSelection = "paper")
        function lose() {
          alert("You lost, paper wins rock");
        }
    if (playerSelection = "paper") + (computerSelection = "scissors")
        function lose() {
          alert("You lost, scissors wins paper");
        }
    if (playerSelection = "rock") + (computerSelection = "rock")
        function tie() {
          alert("Tie round! No one won");
        }
    if (playerSelection = "paper") + (computerSelection = "paper")
        function tie() {
          alert("Tie round! No one won");
        }
    if (playerSelection = "scissors") + (computerSelection = "scissors")
        function tie() {
          alert("Tie round! No one won");
      }
}

// loop to create 1 game based on 5 playRound()

//game (playRound());
//  for (let i = 0; i < 5; i++) {
//    if (let === 5) {
//      return;
//    }
//};