"use strict";

/*
// Write a program that counts the number of words in a 
   sentence

// Steps to follow
1. Create a function that accepts anyString as an arguement
2. Set a wordNumber variable to zero
3. Loop over any string and increase the wordNumber by 1 
   when there is a space
4. Add 1 to the wordNumber after the loop to account for
   an extra word
5. return the wordNumber
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
