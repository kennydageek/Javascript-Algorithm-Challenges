"use strict";

/*
Print the first 10 numbers of the fibonacci sequence
1,1,2,3,5,8,13,21,34,55
*/

let num = 1;
console.log(num);
let num1 = 1;
console.log(num1);

for (let i = 0; i < 8; i++) {
  let num2 = num1 + num;
  console.log(num2);

  num = num1;
  num1 = num2;
}
