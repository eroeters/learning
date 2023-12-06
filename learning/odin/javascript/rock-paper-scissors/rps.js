// const ROCK = "rock";
// const PAPER = "paper";
// const SCISSORS = "scissors";

// // random number function to determine computer choice

// function getComputerChoice() {
//   let choice = Math.floor(Math.random() * 3);
//   switch (choice) {
//     case 0:
//       return rock;
//     case 1:
//       return paper;
//     case 2:
//       return scissors;
//   }
// }

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

// function getComputerChoice() {
//   return Math.floor(Math.random() * 3);
// }

const buttons = document.querySelectorAll("button");
const playerScoreText = document.querySelector("#playerScore");
const cpuScoreText = document.querySelector("#computerScore");
const roundMessage = document.querySelector("#roundMessage");
const numRounds = document.querySelector("#rounds");

let playerScore = 0;
let cpuScore = 0;
let rounds = 0;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    let cpuChoice = Math.floor(Math.random() * 3);
    if (playerScore == 5 || cpuScore == 5) {
      if (playerScore == 5) {
        alert(`You have won the game in ${rounds} rounds!`);
      } else if (cpuScore == 5) {
        alert(`The computer has won the game in ${rounds} rounds!`);
      }
    } else {
      // rock
      if (button.id == "rock") {
        if (cpuChoice == 0) {
          rounds++;
          numRounds.textContent = rounds;
          roundMessage.textContent = "The computer also chose Rock, you tied!";
        } else if (cpuChoice == 1) {
          rounds++;
          cpuScore++;
          cpuScoreText.textContent = cpuScore;
          numRounds.textContent = rounds;
          roundMessage.textContent = "The CPU chose paper, you lose!";
        } else if (cpuChoice == 2) {
          rounds++;
          playerScore++;
          playerScoreText.textContent = playerScore;
          numRounds.textContent = rounds;
          roundMessage.textContent = "The CPU chose scissors, you win!";
        }
      }
      // paper
      else if (button.id == "paper") {
        if (cpuChoice == 0) {
          rounds++;
          playerScore++;
          playerScoreText.textContent = playerScore;
          numRounds.textContent = rounds;
          roundMessage.textContent = "The computer chose rock, you win!";
        } else if (cpuChoice == 1) {
          rounds++;
          numRounds.textContent = rounds;
          roundMessage.textContent = "The CPU chose paper, you tied!";
        } else if (cpuChoice == 2) {
          rounds++;
          cpuScore++;
          cpuScoreText.textContent = cpuScore;
          numRounds.textContent = rounds;
          roundMessage.textContent = "The CPU chose scissors, you lose!";
        }
      }
      // scissors
      else if (button.id == "scissors") {
        if (cpuChoice == 0) {
          rounds++;
          cpuScore++;
          numRounds.textContent = rounds;
          cpuScoreText.textContent = cpuScore;
          roundMessage.textContent = "The computer chose rock, you lose!";
        } else if (cpuChoice == 1) {
          rounds++;
          playerScore++;
          numRounds.textContent = rounds;
          playerScoreText.textContent = playerScore;
          roundMessage.textContent = "The CPU chose paper, you win!";
        } else if (cpuChoice == 2) {
          rounds++;
          numRounds.textContent = rounds;
          roundMessage.textContent = "The CPU chose scissors, you tied!";
        }
      }
    }
  });
});
