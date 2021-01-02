// 02 - Hoisting

/*
Hoisting is JavaScript's default behavior of moving declarations to the top.
The key difference between Function Declaration and Function Expression is that:
    Function declarations can be called before being declared
    Function expression can not, it's the same as using a variable.

The reason for this is when our JavaScript engine runs this code, it moves all function declarations to the top.
Its called Hoisting. The process of moving Function Declarations to the top of the file, and it is made automatically by the Javascript engine.
*/

walk();

// Function declaration
function walk() {
  console.log("walk");
}
// Anonymous Function Expression
let run = function () {
  console.log("run");
};
