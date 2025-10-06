let humanScore = 0;
let computerScore = 0;
let tieScore = 0;

const humanChoiceSpan = document.getElementById("human-choice");
const computerChoiceSpan = document.getElementById("computer-choice");
const roundResultSpan = document.getElementById("round-result");
const humanScoreSpan = document.getElementById("human-score");
const computerScoreSpan = document.getElementById("computer-score");
const tieScoreSpan = document.getElementById("tie-score");
const gameWinnerDiv = document.getElementById("game-winner");

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playRound(humanChoice, computerChoice) {
  let result = "";

  if (humanChoice === computerChoice) {
    tieScore++;
    result = "It's a tie!";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    result = `You win! ${humanChoice} beats ${computerChoice}.`;
  } else {
    computerScore++;
    result = `You lose! ${computerChoice} beats ${humanChoice}.`;
  }

  // Update UI instead of console.log
  humanChoiceSpan.textContent = humanChoice;
  computerChoiceSpan.textContent = computerChoice;
  roundResultSpan.textContent = result;
  humanScoreSpan.textContent = humanScore;
  computerScoreSpan.textContent = computerScore;
  tieScoreSpan.textContent = tieScore;

  checkWinner();
}

function checkWinner() {
  if (humanScore === 5 || computerScore === 5) {
    const winner =
      humanScore === 5
        ? "You reached 5 points — You win the game!"
        : "Computer reached 5 points — You lose the game!";
    gameWinnerDiv.textContent = winner;

    // Disable buttons after game ends
    document.querySelectorAll("button").forEach((btn) => (btn.disabled = true));
  }
}

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const humanChoice = button.id;
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
  });
});
