"use strict";

/*
// Write a program in which the computer
 determines a secret number, the player guess the number and
 the computer tells if the player's guess is too high, 
  too low or the exact number.

// Steps to follow

1. Collect input from using using the prompt function
2. The input from prompt is considered a string else needed to be 
converted to number
3. Use conditionals to check if the number was guessed right
*/

let userInput = Number(prompt("Guess a Number between 1 and 20"));

let randomNumber = Math.trunc(Math.random() * 20) + 1;

console.log(`The hidden number is ${randomNumber}`);

if (userInput === randomNumber) {
  console.log("You guessed right");
} else if (userInput > randomNumber) {
  console.log(
    `Number is higher than the random number, the correct number is ${randomNumber}`
  );
} else if (userInput < randomNumber) {
  console.log(
    `Number is lower than the random number, the correct number is ${randomNumber}`
  );
} else {
  console.log(NaN);
}
