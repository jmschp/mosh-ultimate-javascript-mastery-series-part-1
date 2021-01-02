// 04- The Rest Operator

// If we want a function with varying number of parameters we can use the rest operator. It should not be mistaken by the spread operator

// Syntax
function f(a, b, ...theArgs) {
  // ...
}

/*
Description
A function's last parameter can be prefixed with ... which will cause all remaining (user supplied) arguments to be placed within a "standard" JavaScript array.

Only the last parameter can be a "rest parameter".
*/

function sum(...args) {
  return args.reduce((a, b) => a + b); // Here we use the reduce method to sum all the values in the array args
}

console.log(sum(1, 2, 3, 4, 5));

// For example we could use this function to calculate the total of a shopping cart. The rest operator has to be the last parameter.
function sumShoppingCart(discount, ...prices) {
  let total = prices.reduce((a, b) => a + b);
  return total * (1 - discount);
}

console.log(sumShoppingCart(0.1, 50, 30));
