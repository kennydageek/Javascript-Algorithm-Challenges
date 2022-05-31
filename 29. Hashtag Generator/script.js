/*
Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings. All words must have their first letter capitalized without spaces.

For instance:

"hello case".camelCase() => HelloCase
"camel case word".camelCase() => CamelCaseWord
*/

const testString = "test case"

const camelCase = function (string) {
    // 1) Split strings into 
    const stringArray = string.split(" ");

    // 2) loop over the array and capitalize the first letter of each word
    let capitalize = stringArray.map(cur => {
        const capitalize = cur[0].toUpperCase() + cur.slice(1);
        return capitalize;
    })

    // 3) Join the element together
    let capString = capitalize.join("");
    return capString
}



console.log(camelCase(testString));