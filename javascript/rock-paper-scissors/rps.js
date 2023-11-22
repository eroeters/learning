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
function playGame() {
  getComputerChoice();
  let choice = prompt("Enter Rock, Paper, or Scissors").toLowerCase();
  if (choice == "rock") {
    if (getComputerChoice() == 1) {
      console.log("The computer chose rock, you tied!");
    } else if (getComputerChoice() == 2) {
      console.log("THe computer chose paper, you lose! Paper covers rock");
    } else if (getComputerChoice() == 3) {
      console.log(
        "The computer chose scissors, you win! Rock smashes scissors"
      );
    }
  } else if (choice == "paper") {
    if (getComputerChoice() == 1) {
      console.log("The computer chose rock, you win! Paper covers rock");
    } else if (getComputerChoice() == 2) {
      console.log("The computer chose paper, you tied!");
    } else if (getComputerChoice() == 3) {
      console.log("The computer chose scissors, you lose! Scissors cuts paper");
    }
  } else if (choice == "scissors") {
    if (getComputerChoice() == 1) {
      console.log(
        "The computer chose rock, you win! You lose! Rock smashes scissors"
      );
    } else if (getComputerChoice() == 2) {
      console.log("The computer chose paper, you win! Scissors cuts paper");
    } else if (getComputerChoice() == 3) {
      console.log("The computer chose scissors, you tied!");
    }
  }
}
