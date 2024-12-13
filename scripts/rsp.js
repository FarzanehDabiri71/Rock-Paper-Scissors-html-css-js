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
let gameResult = JSON.parse(localStorage.getItem("gameResult")) || {
  WIN: 0,
  LOSE: 0,
  TIE: 0,
};

function updateResultUI() {
  document.querySelector(".result").innerHTML = `
    
<p>Wins: ${gameResult.WIN}, 
Losses: ${gameResult.LOSE}, 
Ties: ${gameResult.TIE}</p>
`;
}
// Function to determine the winner
function determineWinner(userSelection) {
  const computerSelection = getComputerChoice();
  if (computerSelection === userSelection) {
    gameResult.TIE++;
  } else if (
    (computerSelection === "rock" && userSelection === "paper") ||
    (computerSelection === "paper" && userSelection === "scissors") ||
    (computerSelection === "scissors" && userSelection === "rock")
  ) {
    gameResult.WIN++;
  } else {
    gameResult.LOSE++;
  }
  localStorage.setItem("gameResult", JSON.stringify(gameResult));
}

// Function to display the result
function playGame(userSelection) {
  determineWinner(userSelection);
  updateResultUI();
}
updateResultUI();
