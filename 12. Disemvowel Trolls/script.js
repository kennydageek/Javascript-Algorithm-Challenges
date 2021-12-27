"use strict";

/*
// Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".


*/

let trollString = "This website is for losers LOL!";

function disemvowel(anyString) {
  let emptyString = "";
  let arrayConv = [];
  for (let i = 0; i < anyString.length; i++) {
    arrayConv.push(anyString[i]);
  }
  console.log(arrayConv);

  for (let i = 0; i < arrayConv.length; i++) {
    if (
      arrayConv[i] !== "a" &&
      arrayConv[i] !== "e" &&
      arrayConv[i] !== "i" &&
      arrayConv[i] !== "o" &&
      arrayConv[i] !== "u" &&
      arrayConv[i] !== "A" &&
      arrayConv[i] !== "E" &&
      arrayConv[i] !== "I" &&
      arrayConv[i] !== "O" &&
      arrayConv[i] !== "U"
    ) {
      emptyString += arrayConv[i];
    }
  }
  return emptyString;
}

console.log(disemvowel(trollString));
