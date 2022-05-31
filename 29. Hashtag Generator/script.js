/*
The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false.
*/

const testString = "hash tag"

function generateHashtag(str) {
    let hashtag = '#';
    const result = hashtag + str.split(' ').map(cur => cur[0].toUpperCase() + cur.slice(1)).join('');

    if (result.length > 140) return false;
    if (result.length = 0) return false;

    else return result
}

console.log(generateHashtag(testString));