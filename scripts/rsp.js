const rock = document.querySelector(".rock-button");
rock.addEventListener("click", () => playGame("rock"));

const paper = document.querySelector(".paper-button");
paper.addEventListener("click", () => playGame("paper"));

const scissors = document.querySelector(".scissors-button");
scissors.addEventListener("click", () => playGame("scissors"));

const reset = document.querySelector(".reset-button");
reset.addEventListener("click", resetGame);
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
  let result = "";
  const computerSelection = getComputerChoice();
  if (computerSelection === userSelection) {
    gameResult.TIE++;
    result = "Tie.";
  } else if (
    (computerSelection === "rock" && userSelection === "paper") ||
    (computerSelection === "paper" && userSelection === "scissors") ||
    (computerSelection === "scissors" && userSelection === "rock")
  ) {
    gameResult.WIN++;
    result = "You win.";
  } else {
    gameResult.LOSE++;
    result = "You lose.";
  }
  localStorage.setItem("gameResult", JSON.stringify(gameResult));
  document.querySelector(".results").innerHTML = result;
  document.querySelector(".moves").innerHTML = `You
  <img src="images/${userSelection}-emoji.png" class="move-icon">
  <img src="images/${computerSelection}-emoji.png" class="move-icon">
  Computer`;
}

// Function to display the result
function playGame(userSelection) {
  determineWinner(userSelection);
  updateResultUI();
}
updateResultUI();

function resetGame() {
  localStorage.setItem(
    "gameResult",
    JSON.stringify({
      WIN: 0,
      LOSE: 0,
      TIE: 0,
    })
  );
  document.querySelector(".moves").innerHTML = "";
  document.querySelector(".results").innerHTML = "";
  gameResult = {
    WIN: 0,
    LOSE: 0,
    TIE: 0,
  };

  updateResultUI();
}
