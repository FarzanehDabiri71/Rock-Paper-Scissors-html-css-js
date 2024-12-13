const rock = document.querySelector(".rock-button");
rock.addEventListener("click", () => playGame("rock"));

const paper = document.querySelector(".paper-button");
paper.addEventListener("click", () => playGame("paper"));

const scissors = document.querySelector(".scissors-button");
scissors.addEventListener("click", () => playGame("scissors"));

// Function to get the computer's choice
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Game results
let gameResult = {
  WIN: "You Win.",
  LOSE: "YOu Lose.",
  TIE: "It's a Tie.",
};

// Function to determine the winner
function determineWinner(userSelection) {
  const computerSelection = getComputerChoice();
  if (computerSelection === userSelection) return gameResult.TIE;
  if (
    (computerSelection === "rock" && userSelection === "paper") ||
    (computerSelection === "paper" && userSelection === "scissors") ||
    (computerSelection === "scissors" && userSelection === "rock")
  ) {
    return gameResult.WIN;
  }
  return gameResult.LOSE;
}

// Function to display the result
function playGame(userSelection) {
  const gameResult = determineWinner(userSelection);
  document.querySelector(".result").innerHTML = gameResult;
}
