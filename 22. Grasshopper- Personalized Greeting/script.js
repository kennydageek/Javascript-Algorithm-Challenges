"use strict";

/*
Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

Use conditionals to return the proper message:
case 1: Name equals owner - Hello Boss
case 2: Name != owner - Hello Guest
*/

function greet(name, owner) {
  return `Hello ${name === owner ? "Boss" : "Guest"}`;
}

console.log(greet("Kenny", "Kenny"));
console.log(greet("Fega", "Kenny"));
