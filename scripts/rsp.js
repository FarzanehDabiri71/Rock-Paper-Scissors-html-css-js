const rock = document.querySelector(".rock-button");
rock.addEventListener("click", () => playGame("rock"));

const paper = document.querySelector(".paper-button");
paper.addEventListener("click", () => playGame("paper"));

const scissors = document.querySelector(".scissors-button");
scissors.addEventListener("click", () => playGame("scissors"));

function playGame(userPick) {
  let computerMovePick = "";
  let computerMove = Math.random();
  if (computerMove <= 1 / 3) {
    computerMovePick = "rock";
    if (userPick === "rock") {
      console.log("tie", computerMove, computerMovePick, userPick);
    }
    if (userPick === "paper") {
      console.log("win", computerMove, computerMovePick, userPick);
    }
    if (userPick === "scissors") {
      console.log("lose", computerMove, computerMovePick, userPick);
    }
  } else if (computerMove <= 2 / 3) {
    computerMovePick = "paper";
    if (userPick === "rock") {
      console.log("lose", computerMove, computerMovePick, userPick);
    }
    if (userPick === "paper") {
      console.log("tie", computerMove, computerMovePick, userPick);
    }
    if (userPick === "scissors") {
      console.log("win", computerMove, computerMovePick, userPick);
    }
  } else {
    computerMovePick = "scissors";
    if (userPick === "rock") {
      console.log("win", computerMove, computerMovePick, userPick);
    }
    if (userPick === "paper") {
      console.log("lose", computerMove, computerMovePick, userPick);
    }
    if (userPick === "scissors") {
      console.log("tie", computerMove, computerMovePick, userPick);
    }
  }
}
