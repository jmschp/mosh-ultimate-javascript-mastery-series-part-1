// 11- Math

/*
Math object
Is one of the built-in objects in JavaScript.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

Reviewing a few properties and methods from the "Math" object.
*/

// Pi property
const pi = Math.PI
console.log(pi)


// Random method
console.log(Math.random())
// The random method returns a random number between 0 and 1. In case we want to specify the range we can use a function.
function getRandom(min, max) {
    return Math.random() * (max - min) + min;
};

// Round method
console.log(Math.round(1.954));

// Max method
console.log(Math.max(1, 2, 5, 4, 7, 9, 6));
// Pass to it several numbers and it will return the max.

// Min method
console.log(Math.min(1, 2, 5, 4, 7, 9, 6));
// Pass to it several numbers and it will return the min.
