"use strict";

/*
// Given an array of integers, return a new array with each value doubled


// Steps to follow

1. create a function that accepts an array called x as an input
2. inside the function initialize an empty array called newArray
3. loop over the x array and for every iteration, multiply by 2 and push to the newArray
4. return newArray
*/

function maps(x) {
  let newArray = [];
  for (let i = 0; i < x.length; i++) {
    newArray.push(x[i] * 2);
  }
  return newArray;
}

console.log(maps([1, 2, 3]));
