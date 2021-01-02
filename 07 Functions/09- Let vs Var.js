// 09- Let vs Var

/*
let allows you to declare variables that are limited to the scope of a block statement, or expression on which it is used, unlike the var keyword,
which declares a variable globally, or locally to an entire function regardless of block scope.

Just like const the let does not create properties of the window object when declared globally (in the top-most scope).
*/

function startLet() {
  for (let i = 0; i < 5; i++) {
    console.log(i); // The variable i is only accessible in the for loop block.
  }
}

function startVar() {
  for (var i = 0; i < 5; i++) {
    console.log(i);
  }
  console.log(i); // With the var keyword i is accessible outside or the for loop block.
}

// var ---> Creates functions scope variables
// let & const ---> Create block scope variables

var color = 'red'; // When we use var in global scope this variable is attached to the window object in browser.
let age = 30; // Thi does not happens with the let or const keyword.

// There is only one instance of the window object. We should avoid adding stuff to the window object.
// When we define a function, they are technically a global scope function and they are added to the window object.

