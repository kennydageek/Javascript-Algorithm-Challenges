"use strict";

/*
Return the longest word in a string

*/
let testString = `Hello, I'm Kenny and I am a JavaScript Developer.`;

const maxWords = function (str) {
  let maximumString = ``;
  str = str.split(" ");

  console.log(str);

  for (const [i, maxString] of str.entries()) {
    // console.log(maxString);
    // console.log(maxString);
    // console.log(str[i]);

    if (str[i].length > maximumString.length) {
      maximumString = str[i];
    }
  }
  return maximumString;
};

console.log(maxWords(testString));
