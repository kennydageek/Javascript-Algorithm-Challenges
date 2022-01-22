"use strict";

/*
Create a function that will receive two arrays of numbers as arguments
and return an array composed of all the numbers that are either in the
first array or second array but not both.
*/

const testArray1 = [1, 2, 3, 10, 5, 3, 14];
const testArray2 = [-1, 4, 5, 6, 14];

const removeIntersect = function (arr1, arr2) {
  let arr = [];

  for (const elements of arr1) {
    if (!arr2.includes(elements)) {
      arr.push(elements);
    }
  }
  for (const elements of arr2) {
    if (!arr1.includes(elements)) {
      arr.push(elements);
    }
  }
  return arr;
};

console.log(removeIntersect(testArray1, testArray2));
