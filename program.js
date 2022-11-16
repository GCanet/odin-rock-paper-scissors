// getComputerChoice()

getComputerChoice();

console.log(getComputerChoice());

// playerSelection

const playerSelection = prompt("Choose Rock, Paper or Scissors:").toLowerCase();

console.log(playerSelection);

// computerSelection
// 1 = rock > 2 = scissors
// 2 = scissors > 3 = paper
// 3 = paper > 1 = rock

const computerSelection = getComputerChoice(); ;

console.log(computerSelection);

// oneRound () // function that plays one round // return

function playRound(playerSelection, computerSelection) {
    if (playerSelection = 1) + (computerSelection = 2)
        function win() {
          alert("You won");
        }
    if (playerSelection = 2) + (computerSelection = 3)
        function win() {
          alert("You won");
        }
    if (playerSelection = 3) + (computerSelection = 1)
        function win() {
          alert("You won");
        }
}

console.log(playRound());

// calls one round * 5 times loops

game ();

for (let i = 0; i < 5; i++) {
    
    };