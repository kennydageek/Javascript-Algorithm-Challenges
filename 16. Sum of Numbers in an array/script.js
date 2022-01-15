"use strict";

/*
calculate the sum of numbers in an array of numbers

*/
let testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sumArray = function (arr) {
  let sum = 0;
  for (const [i, sums] of arr.entries()) {
    sum += arr[i];
  }
  return sum;
};
console.log(sumArray(testArray));
