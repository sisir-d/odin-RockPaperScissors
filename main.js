let playerScore = 0;
let computerScore = 0;

// computer choice function
function computerPlay() {
    let choices = ["rock", "paper", "scissors"];
    let choiceNumber = Math.floor(Math.random() * choices.length);
    return choices[choiceNumber];
}

// play round game
function playRound(playerSelection, computerSelection = computerPlay()) {
    let pS = playerSelection.toLowerCase();
    let cS = computerSelection;
    let msg = "";

    // tie
    if (pS === cS) {
        return "It's a TIE!";
    }

    // winner // loser
    if ((pS == "rock") & (cS == "scissors")) {
        msg += "You Win! Rock beats scissors";
        playerScore++;
    } else if ((pS == "scissors") & (cS == "paper")) {
        msg += "You Win! Scissors beats Paper";
        playerScore++;
    } else if ((pS == "paper") & (cS == "rock")) {
        msg += "You Win! Paper beats Rock";
        playerScore++;
    } else {
        msg += `You Lose! ${cS} beats ${pS}`;
        computerScore++;
    }

    return msg;
}

// function game() {
//     // for (let i = 0; i < 5; i++) {
//     //   const playerSelection = prompt("Enter [rock, paper or scissors] : ");
//     //   console.log(playRound(playerSelection));
//     // }
//     // // game winner / loser
//     // if (playerScore > computerScore) {
//     //   console.log("You Won this game!");
//     // } else if (playerScore < computerScore) {
//     //   console.log("You Lost this game!");
//     // } else {
//     //   console.log("This game is TiE!");
//     // }
// }

// game();
