const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

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

for (let i = 0; i < 5; i++) {
  let choice = prompt("Choose Rock, Paper, or Scissors");
  compChoice = getComputerChoice();
  console.log(playRound(choice, compChoice));
}

// Takes value of player input and matches it against getComputerChoice function

// Game function that limits games played and will end after limit is reached
