// 09- The Spread Operator


/*
With the Spread Operator we can also combine and copy arrays.
This is a cleaner approach.
*/

const first = [1, 2, 3];
const second = [4, 5, 6];

// Combining arrays
const combined = [...first, ...second];
console.log(combined);

const combined2 = [...first, 'a', 'b', ...second, 'c'];
console.log(combined2);

// Copy array

const copied = [...first];
console.log(copied);

const copied2 = [...combined];
console.log(copied2)