"use strict";

/*
// Define a function which can generate a dictionary
 where the keys are numbers between 1 and 20 (both included)
  and the values are square of keys. The function should just
   print the keys only


// Steps to follow
1. create an empty array for keys and values
2. create a function called dictionary
3. write a for loop that runs from 1 to 20 and for each iteration push the iteration number into keys and push 2 * iteration number into values
4. call the function
5. Log the array keys to the console
*/

let keys = [];
let values = [];

const dictionary = function () {
  for (let i = 1; i <= 20; i++) {
    keys.push(i);
    values.push(2 * i);
  }
};
dictionary();

console.log(keys);
// console.log(values);
