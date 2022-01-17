"use strict";

/*
Create a function that will capitalize the first letter of each word in a text
*/
const testString = `Hi, i'm KENNY and I am a Javascript developer`;

const capitalizer = function (str) {
  let lowerCaseArray = testString.toLowerCase().split(" ");

  // console.log(lowerCaseArray);
  for (const [i, word] of lowerCaseArray.entries()) {
    lowerCaseArray[i] =
      lowerCaseArray[i].charAt(0).toUpperCase() + lowerCaseArray[i].slice(1);
  }

  let capitalizedString = lowerCaseArray.join(" ");
  return capitalizedString;
};

console.log(capitalizer(testString));
