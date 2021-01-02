// 03 - Arguments

/*
JavaScript is dynamic language
He have the same concept in the arguments of a function
*/

function sum(a, b) {
  return a + b;
}

console.log(sum(1, 2)); // This will return 3 as expected
console.log(sum(1)); // This will return NaN (Not a Number). Because the function is returning 1 + undefined
console.log(sum()); // This will return NaN (Not a Number). Because the function is returning undefined + undefined
console.log(sum(1, 2, 3, 4, 5)); // This will return 3. Only the first two arguments are used, the rest is being ignored.
// The point is we do not get an error.

// If want to have the flexibility to pass as many arguments as we want.
// Every function in JavaScript as a special object called arguments

function sum2() {
  let total = 0;
  for (let num of arguments) {
    total += num;
  }
  return total;
}

console.log(sum2(1, 2, 3, 4, 5));