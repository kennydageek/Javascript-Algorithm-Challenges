"use strict";

/*
Create a function that returns an array with words inside a text
*/
const testString = `Hi, I'm Kenny and I a Javascript Developer`;

const arrayOfWords = function (str) {
  return str.split(" ");
};
console.log(arrayOfWords(testString));
