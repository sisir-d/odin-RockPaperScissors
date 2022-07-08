let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll("button");
const currentWinner = document.querySelector(".currentWinner");
const pScore = document.querySelector(".pScore");
const cScore = document.querySelector(".cScore");
const gameWinner = document.querySelector(".gameWinner");

// computer choice function
function computerPlay() {
  let choices = ["Rock", "Paper", "Scissors"];
  let choiceNumber = Math.floor(Math.random() * choices.length);
  return choices[choiceNumber];
}

// play round game
function playRound(playerSelection, computerSelection = computerPlay()) {
  let pS = playerSelection.toLowerCase();
  let cS = computerSelection.toLocaleLowerCase();

  if (pS === cS) {
    currentWinner.textContent = "It's a TIE!";
  } else if ((pS == "rock") & (cS == "scissors")) {
    currentWinner.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
    playerScore++;
  } else if ((pS == "scissors") & (cS == "paper")) {
    currentWinner.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
    playerScore++;
  } else if ((pS == "paper") & (cS == "rock")) {
    currentWinner.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
    playerScore++;
  } else {
    currentWinner.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
    computerScore++;
  }
}

// Disable button score 5
function disableButton() {
  buttons.forEach((btn) => {
    btn.disabled = true;
  });
}

// start game
buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    playRound(btn.className);
    pScore.textContent = playerScore;
    cScore.textContent = computerScore;

    if (playerScore === 5) {
      gameWinner.textContent = "You WIN this game! Try again (reload the page)";
      disableButton();
    } else if (computerScore === 5) {
      gameWinner.textContent =
        "You LOSE this game! Try again (reload the page)";
      disableButton();
    }
  });
});
