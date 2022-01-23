"use strict";

/*
Given a non-empty array of integers, return the result of multiplying the values together in order. Example:
[1,2,3,4] = 1*2*3*4 =24
*/

const testArray = [1, 2, 3, 4];

const grow = function (x) {
  const multiply = x.reduce((acc, cur) => acc * cur);

  return multiply;
};

console.log(grow(testArray));
