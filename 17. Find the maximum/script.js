"use strict";

/*
Find the maximum number in an array of numbers

*/
let testArray = [1, 2, 300, 3, 4, 5, 55, 6, 7, 8, 100, 9, 10];

const maxNum = function (arr) {
  let max = 0;
  for (const [i, currentNum] of arr.entries()) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
};
console.log(maxNum(testArray));
