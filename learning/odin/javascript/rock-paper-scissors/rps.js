// const ROCK = "rock";
// const PAPER = "paper";
// const SCISSORS = "scissors";

// // random number function to determine computer choice

function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  switch (choice) {
    case 0:
      return rock;
    case 1:
      return paper;
    case 2:
      return scissors;
  }
}

// switch function to determine use cases for player and computer choices

// function playRound(playerChoice, computerChoice) {
//   playerChoice = playerChoice.toLowerCase();

//   if (playerChoice == computerChoice) {
//     return "Draw";
//   }
//   switch (playerChoice) {
//     case ROCK:
//       return computerChoice == SCISSORS ? "Player wins!" : "Computer wins!";
//     case SCISSORS:
//       return computerChoice == PAPER ? "Player wins!" : "Computer wins!";
//     default:
//       return computerChoice == ROCK ? "Player wins!" : "Computer wins!";
//   }
// }

// loop for determining game length

// for (let i = 0; i < 5; i++) {
//   let choice = prompt("Choose Rock, Paper, or Scissors");
//   compChoice = getComputerChoice();
//   console.log(playRound(choice, compChoice));
// }

// New event listener function for game

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.id == "rock") {
      if (getComputerChoice == "rock") {
        alert("you tied");
      } else if (getComputerChoice == "paper") {
        alert("The CPU chose paper, you lose!");
      } else if (getComputerChoice == "scissors") {
        alert("The CPU chose scissors, you win!");
      }
      // alert("You pressed the 1st button");
    } else if (button.id == "paper") {
      alert("You pressed the 2nd button");
    } else if (button.id == "scissors") {
      alert("You pressed the 3rd button");
    }
  });
});
