"use strict";

/*
// Write a program that counts
the number of words in a sentence

// Steps to follow

1. Create a function that accepts a string as an input
2. Loop over the string and look for a space
3. Each space means a word has just been passed and can be added to the number of words
4. at the end of the loop add another 1 more word to compensate for extra word.
*/

const anyString = `I am getting good at this`;

// const stringWords = [];

const numberOfWords = function (anyString) {
  let totalWords = 0;
  for (let i = 0; i < anyString.length; i++) {
    if (anyString[i] === " ") {
      totalWords += 1;
    }
  }
  totalWords += 1;

  return totalWords;
};

console.log(numberOfWords(anyString));
