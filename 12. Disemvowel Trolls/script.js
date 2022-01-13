"use strict";

/*
// Trolls are attacking your comment section!

 


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
