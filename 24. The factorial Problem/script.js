"use strict";

/*
Create a function that accepts a number and return the factorial of that number
*/

const factorial = function (n) {
  let prod = 1;
  for (let i = 1; i <= n; i++) {
    prod *= i;
  }
  return prod;
};

console.log(factorial(10));
