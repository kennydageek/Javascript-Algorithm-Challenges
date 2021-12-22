"use strict";

/*
// Write a program to print 5 random even numbers between 100 and 300.


// Steps to follow

1. create an empty array called randomArray
2. loop from 100 to 300 and push to therandomArray. 
   This makes the randomArray contain number between 100 and 300
3. Write a function(randomNumbers) that loops randomly five 
   times and push each number from the iteration into another array called '
   theNumber' array
4. return theNumber array
5. Call the randomNumbers function with the randomArray as an arguement
*/

let randomArray = [];

for (let i = 100; i < 300; i++) {
  randomArray.push(i);
}

// Write a function that pick five random numbers from an array

const randomNumbers = function (randomArray) {
  let theNumber = [];
  let randomIndex = Math.trunc(Math.random() * 200) + 1;

  // loop randomly five times and push each number into theNumber array
  for (let i = 0; i < 5; i++) {
    theNumber.push(randomArray[randomIndex]);
    randomIndex = Math.trunc(Math.random() * 200) + 1;
  }

  return theNumber;
};

console.log(randomNumbers(randomArray));
console.log(randomNumbers(randomArray));
console.log(randomNumbers(randomArray));
console.log(randomNumbers(randomArray));
console.log(randomNumbers(randomArray));
