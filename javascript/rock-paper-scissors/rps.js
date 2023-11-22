const computerSelection = getComputerChoice();
const playerSelection = prompt(
  "Choose Rock, Paper, or Scissors!"
).toLowerCase();

// Random generator for computer choice
// Gets called in playGame function after player clicks Play button

function getComputerChoice() {
  let selection = Math.floor(Math.random() * 3) + 1;
  if (selection == 1) {
    return "rock";
  } else if (selection == 2) {
    return "paper";
  } else if (selection == 3) {
    return "scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection === "rock") {
    console.log("You both chose rock, you tied!");
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    console.log("The computer chose paper, you lose!");
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    console.log("The computer chose scissors, you win!!");
  }
}

// Takes value of player input and matches it against getComputerChoice function

// Game function that limits games played and will end after limit is reached
