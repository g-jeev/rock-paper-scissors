function getHumanChoice() {
  let userInput = prompt("Enter:\n rock \n paper \n scissors"); //allows the user to pick rock, paper, scissors.

  const a = "rock";
  const b = "paper";
  const c = "scissors";
  const d = "incorrect input"; //for incorrect input (if not rock, paper, scissors)

  userInput = userInput.toLowerCase(); //lower casing all the inputs of the user to be case insensitive.

  if (userInput === "rock") {
    userInput = a;
  } else if (userInput === "paper") {
    userInput = b;
  } else if (userInput === "scissors") {
    userInput = c;
  } else {
    userInput = d;
  }

  console.log("You entered: " + userInput); //display the current value of userInput before returning
  return userInput;
}

getHumanChoice(); //invoke the function to get the human's choice.

// To get the computer's pick of rock, paper, scissors.
function getComputerChoice() {
  const a = "rock";
  const b = "paper";
  const c = "scissors";
  const randomNum = Math.floor(Math.random() * 3); // Math.floor REMOVES chop offs decimals.
  // // Math.random randomly picks between 3 numbers (0,1,2).

  // Displaying the computer's pick based on randomNum's variable
  let randomPicker; // variable that holds the value of the randomNum to display
  if (randomNum === 0) {
    randomPicker = a;
  } else if (randomNum === 1) {
    randomPicker = b;
  } else {
    randomPicker = c;
  }
  console.log("Computer entered: " + randomPicker); //display the current value of randomPicker before returning
  return randomPicker;
}

getComputerChoice(); //invoke the function to get and display the computer's choice.

//variables that will hold the scores of human, computer and tie score.
let humanScore = 0;
let computerScore = 0;
let tieScore = 0;

function playRound(getHumanChoice, getComputerChoice) {
  //invoking the functions with return values from computerChoice and humanChoice.
  if (getHumanChoice === getComputerChoice) {
    tieScore++; //increment the value initialized from 0 of tieScore
  } else if (
    //check multiple winning conditions for human
    (getHumanChoice === "rock" && getComputerChoice === "scissors") ||
    (getHumanChoice === "scissors" && getComputerChoice === "paper") ||
    (getHumanChoice === "paper" && getComputerChoice === "rock")
  ) {
    humanScore++; //increment the value initialized from 0 of humanScore
  } else {
    // checking the opposite of winning coditions of human
    computerScore++; //increment the value initialized from 0 of computerScore
  }
}

function playGame() {
  rounds = 4; //total rounds of the game

  for (let i = 0; i < rounds; i++) {
    //loop from round 1-5
    const humanSelection = getHumanChoice(); //get the player's choice
    const computerSelection = getComputerChoice(); //get the computer's choice
    playRound(humanSelection, computerSelection); //play one round
  }
  console.log(`Final Score of Human: ", ${humanScore}`);
  console.log(`Final Score of Computer: ", ${computerScore}`);
  console.log(`Tie score: ${tieScore}`);
  gameWinner(humanScore, computerScore);
}

playGame();

function gameWinner(humanScore, computerScore) {
  //determines the winner
  if (humanScore === computerScore) {
    //if equal score: tie
    console.log("It's a Tieeee!");
  } else if (humanScore < computerScore) {
    //if computer accumulated more points, you lose
    console.log("You Loooosee!");
  } else {
    // else, player accumulated more points and wins
    console.log("You winn!");
  }
}
