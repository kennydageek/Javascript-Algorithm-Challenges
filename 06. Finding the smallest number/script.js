"use strict";

/*
// Write a program that finds the smallest number in an array of numbers


// Steps to follow
1. Create a function that accepts an array(args) as an arguement
2. Create a state variable called smallest Integer and sets its 
value to args[0];
3. Loop through args and for each iteration, run an if statement
   which checks:
   if the args[i] is < args[0] and if this is true, set the smallest
   integer to the args[i]
4. reset the args[0] to be the smallest integer

5. return the smallest Integer
*/

const testArray = [34, -345, -1, 100];

const findSmallestInt = function (args) {
  let smallestInteger = args[0];
  for (let i = 0; i < args.length; i++) {
    if (args[i] < args[0]) {
      smallestInteger = args[i];
      args[0] = smallestInteger;
    }
  }
  return smallestInteger;
};

console.log(findSmallestInt(testArray));
