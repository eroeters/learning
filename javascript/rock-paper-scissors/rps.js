const playerScore = document.querySelector("#playerScore");
const computerScore = document.querySelector("#computerScore");
const playTxt = document.querySelector("#playTxt");

// Random generator for computer choice
// Gets called in playGame function after player clicks Play button

function getComputerChoice() {
  let selection = Math.floor(Math.random() * 3) + 1;
  if (selection == 1) {
    return selection;
  } else if (selection == 2) {
    return selection;
  } else if (selection == 3) {
    return selection;
  }
}

// Takes value of player input and matches it against getComputerChoice function

function playGame() {
  let playerScore = 0;
  let computerScore = 0;
  let choice = prompt("Enter Rock, Paper, or Scissors").toLowerCase();
  if (choice == "rock") {
    if (getComputerChoice() == 1) {
      playTxt.innerText = "The computer chose rock, you tied!";
    } else if (getComputerChoice() == 2) {
      playTxt.innerText =
        "The computer chose paper, you lose! Paper covers rock";
    } else if (getComputerChoice() == 3) {
      playTxt.innerText =
        "The computer chose scissors, you win! Rock smashes scissors";
    }
  } else if (choice == "paper") {
    if (getComputerChoice() == 1) {
      playTxt.innerText = "The computer chose rock, you win! Paper covers rock";
    } else if (getComputerChoice() == 2) {
      playTxt.innerText = "The computer chose paper, you tied!";
    } else if (getComputerChoice() == 3) {
      playTxt.innerText =
        "The computer chose scissors, you lose! Scissors cuts paper";
    }
  } else if (choice == "scissors") {
    if (getComputerChoice() == 1) {
      playTxt.innerText =
        "The computer chose rock, you lose! Rock smashes scissors";
    } else if (getComputerChoice() == 2) {
      playTxt.innerText =
        "The computer chose paper, you win! Scissors cuts paper";
    } else if (getComputerChoice() == 3) {
      playTxt.innerText = "The computer chose scissors, you tied!";
    }
  }
}
