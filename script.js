// Variables
let playerScore = 0;
let cpuScore = 0;

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const pScoreDisplay = document.querySelector(".player-score");
const cScoreDisplay = document.querySelector(".cpu-score");
const commentator = document.querySelector(".commentator-text");
const hideBtn = document.querySelector("#btn");

// Refresh game whe winner is announced
const refreshGame = hideBtn.addEventListener("click", (e) => {
  location.reload();
  return false;
});

// Computer's choices
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

// Function that plays a single round
function playRound(playerSelection, computerSelection) {
  console.log("You selected:", playerSelection);
  console.log("Computer selected:", computerSelection);

  // Tie
  if (playerSelection === computerSelection) {
    commentator.innerHTML = `It's a tie folks, you both chose: ${playerSelection}`;
  }
  // User chooses Rock
  else if (playerSelection === "rock") {
    if (computerSelection === "scissors") {
      playerScore++;
      pScoreDisplay.innerHTML = playerScore;
      commentator.innerHTML = `Nice one! You chose: ${playerSelection} and the CPU chose: ${computerSelection}`;
    } else {
      cpuScore++;
      cScoreDisplay.innerHTML = cpuScore;
      commentator.innerHTML = `What are you doing?! We can't afford to lose. You chose: ${playerSelection} and the CPU chose: ${computerSelection}`;
    }
  }

  // User chooses Paper
  else if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      playerScore++;
      pScoreDisplay.innerHTML = playerScore;
      commentator.innerHTML = `That's what I like to see!! Good job! You chose: ${playerSelection} and the CPU chose: ${computerSelection}`;
    } else {
      cpuScore++;
      cScoreDisplay.innerHTML = cpuScore;
      commentator.innerHTML = `Are you even trying at this point?! You chose: ${playerSelection} and the CPU chose: ${computerSelection}`;
    }
  }
  // User chooses Scissors
  else if (playerSelection === "scissors") {
    if (computerSelection === "paper") {
      playerScore++;
      pScoreDisplay.innerHTML = playerScore;
      commentator.innerHTML = `There we go, Another point for the humans! Good job! You chose: ${playerSelection} and the CPU chose: ${computerSelection}`;
    } else {
      cpuScore++;
      cScoreDisplay.innerHTML = cpuScore;
      commentator.innerHTML = `Another point for the CPU... You chose: ${playerSelection} and the CPU chose: ${computerSelection}`;
    }
  }
}

function game(playerChoice) {
  let player = playerChoice;
  let cpu = computerPlay();

  playRound(player, cpu);

  if (playerScore === 5) {
    commentator.innerHTML = `WINNER WINNER CHICKEN DINNER`;
    rock.classList.add("hidden");
    paper.classList.add("hidden");
    scissors.classList.add("hidden");
    hideBtn.classList.remove("hidden");
    refreshGame();
  } else if (cpuScore === 5) {
    commentator.innerHTML = `Welp.. we might as well let robots rull the world. :(`;
    rock.classList.add("hidden");
    paper.classList.add("hidden");
    scissors.classList.add("hidden");
    hideBtn.classList.remove("hidden");
    refreshGame();
  }
}

rock.addEventListener("click", () => {
  game("rock");
});
scissors.addEventListener("click", () => {
  game("scissors");
});
paper.addEventListener("click", () => {
  game("paper");
});
