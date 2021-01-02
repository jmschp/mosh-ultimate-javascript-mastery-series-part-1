// 08- Local vs Global Scope

/*
Scope determines the accessibility (visibility) of variables.

JavaScript Scope
In JavaScript there are two types of scope:
    Local scope
    Global scope

JavaScript has code block scope: Each code block creates a new scope.

Scope determines the accessibility (visibility) of these variables.

Variables defined inside a code block are not accessible (visible) from outside the code block.
*/

const color = "red"; // This variable has global scope. We can acesses it anywhere

function start() {
  const message = "hi"; // This variable is only accessible inside of the function. The scope of this constant is limited to the block in which it is define.
  const color = "blue"; // If we define a new variable "color" with local scope, it will override the variable with global scope. Local scope take precedence over global scope.
  console.log(color);
  if (true) {
    const another = "bye"; // This const it is only visible in the if block
  }
  // console.log(another); // If we try to log the "another" outside of the if block, we will have a Reference Error.

  for (let i = 0; i < 5; i++) {
    console.log(i); // The variable i is only accessible in the for loop code block.
  }
}

function stop() {
  const message = "bye"; // Although we have here another variable named "message", this is perfectly fine. This variable is in the local scope of the "stop()" function.
}

// In general we should avoid defining global variables, its considered a bad practice.
// This applies to the let and const key words.