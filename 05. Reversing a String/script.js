"use strict";

/*
// Write a program that reverses a string of any length

// Steps to follow

1. Create a function that accepts anyString as a parameter
2. loop backwards from the array and push each elements into
an empty array called reversedArray
3. Create an empty array reversedString
4. Loop over the reversedArray and concatenate the array
at each position with the reversedString;
5. return the reversed string
*/

const testString = "kenny";

const reverseString = function (anyString) {
  let reversedArray = [];
  let reversedString = "";

  for (let i = testString.length - 1; i >= 0; i--) {
    reversedArray.push(testString[i]);
  }

  console.log(reversedArray);

  for (let i = 0; i < reversedArray.length; i++) {
    reversedString += reversedArray[i];
  }

  return reversedString;
};

console.log(reverseString(testString));
