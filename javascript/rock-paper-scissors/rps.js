console.log(choice);

function getComputerChoice() {
  let selection = Math.floor(Math.random() * 3) + 1;
  if (selection == 1) {
    console.log(selection);
    return selection;
  } else if (selection == 2) {
    console.log(selection);
    return selection;
  } else if (selection == 3) {
    console.log(selection);
    return selection;
  }
}
function playGame() {
  let choice = prompt("Enter Rock, Paper, or Scissors").toLowerCase();
  if (choice == "rock") {
    if (getComputerChoice() == 1) {
      console.log("You tied!");
    } else if (getComputerChoice() == 2) {
      console.log("You lose! Paper covers rock");
    } else if (getComputerChoice() == 3) {
      console.log("You win! Rock smashes scissors");
    }
  }
}
