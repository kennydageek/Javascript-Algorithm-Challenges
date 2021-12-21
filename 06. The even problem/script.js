"use strict";

/*
// Write a program which will find all such numbers between 1000 and 30000 (both included) such that each digit of the number is an even number. The numbers should be printed in a comma separated sequence on a single line

// Steps to follow


*/

let numberArray = [];
let stringNumberArray = [];
let numberNumberArray = [];

// Getting all even numbers from 1000 to 3000
for (let i = 1000; i <= 3000; i += 2) {
  numberArray.push(i);
}

// console.log(numberArray);

// converting each number to string and pushing to a stringNumberArray
for (let i = 0; i < numberArray.length; i++) {
  stringNumberArray.push(String(numberArray[i]));
}
// console.log(numberArray);

// console.log(stringNumberArray);

for (let i = 0; i < stringNumberArray.length; i++) {
  for (let x = 0; x < stringNumberArray.length; x++) {
    if (stringNumberArray[i][x] % 2 === 0) {
      numberNumberArray.push(Number(stringNumberArray[i]));
    } else {
      continue;
    }
  }
}

console.log(numberNumberArray);
