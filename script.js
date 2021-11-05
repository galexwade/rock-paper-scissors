// RULES:
// Paper beats Rock
// Rock beats Scissors
// Scissors beats Paper

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "tie";
  }

  if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      return "player";
    } else if (computerSelection === "scissors") {
      return "computer";
    }
  }

  if (playerSelection === "rock") {
    if (computerSelection === "scissors") {
      return "player";
    } else if (computerSelection === "paper") {
      return "computer";
    }
  }

  if (playerSelection === "scissors") {
    if (computerSelection === "paper") {
      return "player";
    } else if (computerSelection === "rock") {
      return "computer";
    }
  }
}

function computerPlay() {
  let random = Math.floor(Math.random() * 3) + 1;
  switch (random) {
    case 1:
      return "rock";
    case 2:
      return "paper";
    case 3:
      return "scissors";
  }
}

const playerSelection = prompt(
  "Do you choose rock, paper or scissors?"
).toLowerCase();
const computerSelection = computerPlay();
