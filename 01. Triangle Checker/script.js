"use strict";

/*
// Write a program that accepts the inputs
 of the sides of a triangle
 from a user and check if the 
 triangle is equilateral, isosceles or scalene.

// Steps to follow
1. Create a function that accepts 3 inputs
2. Check to see if the three inputs are equal: equilateral
3. Check to see if at least two of the inputs are equal: isosceles
4. Check to see if none of the sides are equal: scalene
5: Call the function 
*/
const triangleChecker = function (side1, side2, side3) {
  if (side1 === side2 && side1 === side3) {
    console.log(`The triangle has equal sides and is therefore equilateral`);
  } else if (side1 === side2 || side1 === side3 || side2 === side3) {
    console.log(`The triangle has two equal sides and is therefore isosceles`);
  } else {
    console.log(`The triangle has no equal sides and is therefore scalene`);
  }
};

triangleChecker(1, 2, 3);
