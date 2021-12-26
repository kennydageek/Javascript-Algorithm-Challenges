"use strict";

/*
// Write a program that counts the number of words in a 
   sentence

// Steps to follow
1. create an empty array for keys and values
2. create a function called dictionary
3. write a for loop that runs from 1 to 20 and for each iteration push the iteration number into keys and push 2 * iteration number into values
4. call the function
5. Log the array keys to the console
*/

const emptyString = "Hi, I'm Kenny and I'm a Javascript developer";

const wordCounter = function (anyString) {
  let wordNumber = 0;
  for (let i = 0; i < anyString.length; i++) {
    if (anyString[i].includes(" ")) {
      wordNumber++;
    }
  }
  wordNumber++;

  return wordNumber;
};

console.log(wordCounter(emptyString));
