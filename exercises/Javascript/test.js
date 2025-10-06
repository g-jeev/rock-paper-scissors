// // const arr = [1, 2, 3];

// // function sumAll(array) {
// //   return array.reduce((total, num) => total + num, 0);
// // }

// // console.log(sumAll(arr)); // 6

// // function greet() {
// //   let message = "Hello Rajeev!";
// //   console.log(message); // should work
// // }

// // greet();

// // function sum(a, b) {
// //   return a + b;
// // }

// // console.log(sum(3, 4)); // 7

// // let result = sum(10, 20);

// // console.log(result * 2);

// // store and reuse later

// // console.log(message); // ❌ what happens here?

// function add7(a){

//     return a + 7;
// }

// function multiply(a, b){

//     return a * b;
// }

// function capitalize(string) {

// return string.charAt(0).toUpperCase(2) + string.slice(3).toLowerCase(4);
// }

// function lastLetter(letter){

//    return letter.charAt(letter.length - 1);

// }

// console.log(add7(10));
// console.log(multiply(2,5));
// console.log(capitalize("hello, my fucking world!"));
// console.log(lastLetter("abcd"))

// getComputerChoice();

// let array = [1,2,3,98];

// function Add(arr){
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum;
// }

// console.log(Add(array)); // Output: 6

// function getComputerChoice() {
//   const a = "rock";
//   const b = "paper";
//   const c = "scissors";
//   const randomNum = Math.floor(Math.random() * 3);

//   let randomPicker;
//   if (randomNum === 0) {
//     randomPicker = a;
//   } else if (randomNum === 1) {
//     randomPicker = b;
//   } else {
//     randomPicker = c;
//   }
//   console.log("Computer entered: " + randomPicker);
//   return randomPicker;
// }

// getComputerChoice();

// function getHumanChoice() {
//   let userInput = prompt("Enter:\n rock \n paper \n scissors");

//   const a = "rock";
//   const b = "paper";
//   const c = "scissors";
//   const d = "incorrect input";

//   userInput = userInput.toLowerCase();

//   if (userInput === "rock") {
//     userInput = a;
//   } else if (userInput === "paper") {
//     userInput = b;
//   } else if (userInput === "scissors") {
//     userInput = c;
//   } else {
//     userInput = d;
//   }

//   console.log("You entered: " + userInput);
//   return userInput;
// }

// getHumanChoice();

// let humanScore = 0;
// let computerScore = 0;
// let tieScore = 0;

// function playRound(getHumanChoice, getComputerChoice) {
//   if (getHumanChoice === getComputerChoice) {
//     winner = "It's a tie!";
//     tieScore++;
//   } else if (
//     (getHumanChoice === "rock" && getComputerChoice === "scissors") ||
//     (getHumanChoice === "scissors" && getComputerChoice === "paper") ||
//     (getHumanChoice === "paper" && getComputerChoice === "rock")
    
//   ) {
//     winner = "You wins!";
//     humanScore++;
//   } else {
//     winner = "Computer wins!";
//     computerScore++;
//   }
// }

// function playGame() {
//   rounds = 5;
//   for (let i = 0; i < rounds; i++) {
//     const humanSelection = getHumanChoice();
//     const computerSelection = getComputerChoice();
//     playRound(humanSelection, computerSelection);
//   }
//   console.log(`Final Score of Human: ", ${humanScore}`);
//   console.log(`Final Score of Computer: ", ${computerScore}`);
//   console.log(`Tie score: ${tieScore}`);
  
//   gameWinner(humanScore, computerScore);
// }

// playGame();

// function gameWinner(humanScore, computerScore) {
//   if (humanScore === computerScore) {
//     console.log("It's a Tieeee!");
//   } else if (humanScore < computerScore) {
//     console.log("You Loooosee!");
//   } else {
//     console.log("You winn!");
//   }
// }

// const filtered = cats.filter((cat) => cat.startsWith("L"));
// console.log(filtered);
// // [ "Leopard", "Lion" ]

// const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

// function cat(a){
// return a.startsWith("L");


// }

// let typeCats = cat.filter(cats);
// console.log(typeCats);

const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

for (const cat of cats) {
  console.log(cat);
}