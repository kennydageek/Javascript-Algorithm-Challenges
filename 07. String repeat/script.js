"use strict";

/*
// Write a function that repeats a given string n times


// Steps to follow
1. create a function that accepts a number and a string as an arguement
2. use the repeat function in JS
*/

const repeatStr = function (n, anyString) {
  return `${anyString.repeat(n)};`;
};

console.log(repeatStr(5, "hello"));
