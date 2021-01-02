// 01- Function Declarations vs Expressions

/*
Function declarations
A function definition (also called a function declaration, or function statement) consists of the function keyword, followed by:

The name of the function.
A list of parameters to the function, enclosed in parentheses and separated by commas.
The JavaScript statements that define the function, enclosed in curly brackets, {...}.
For example, the following code defines a simple function named walk:
*/

// Function declaration
function walk() {
  console.log("walk");
}

/*
Function expressions
While the function declaration above is syntactically a statement, functions can also be created by a function expression.

Such a function can be anonymous; it does not have to have a name. For example, the function walk could have been defined as:
*/

// Anonymous Function Expression
let run = function () {
  console.log("run");
};

// Different from the Function Declaration a Function Expression should have a ; in the end

// Named Function Expression
const jump = function jump() {
  console.log("jump");
};

walk();
run();
jump();

// We can referent a function expression
const move = run;

move();
