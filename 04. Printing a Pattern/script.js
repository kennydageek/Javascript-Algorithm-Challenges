"use strict";

/*
// Write a program that prints the pattern below
*
**
***
****
*****
******
*****
****
***
**
*

// Steps to follow

1. Create a variable with that holds the string
2. Write a for loop and then concatenate * on every 
iteration and log to the console 6 times
3. let startString be equal to the last value of the iteration
4. write another for loop and remove a * upon every iteration
*/

let startString = "*";

for (let i = 0; i < 6; i++) {
  console.log(startString);
  startString += "*";
}

startString = "******";
for (let i = 5; i > 0; i--) {
  let newString = startString.substr(1, startString.length);
  startString = newString;
  console.log(startString);
}
