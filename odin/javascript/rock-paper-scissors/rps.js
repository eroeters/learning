const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

// random number function to determine computer choice

function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  switch (choice) {
    case 0:
      return ROCK;
    case 1:
      return PAPER;
    case 2:
      return SCISSORS;
  }
}

// switch function to determine use cases for player and computer choices

function playRound(playerChoice, computerChoice) {
  playerChoice = playerChoice.toLowerCase();

  if (playerChoice == computerChoice) {
    return "Draw";
  }
  switch (playerChoice) {
    case ROCK:
      return computerChoice == SCISSORS ? "Player wins!" : "Computer wins!";
    case SCISSORS:
      return computerChoice == PAPER ? "Player wins!" : "Computer wins!";
    default:
      return computerChoice == ROCK ? "Player wins!" : "Computer wins!";
  }
}

// loop for determining game length

for (let i = 0; i < 5; i++) {
  let choice = prompt("Choose Rock, Paper, or Scissors");
  compChoice = getComputerChoice();
  console.log(playRound(choice, compChoice));
}
