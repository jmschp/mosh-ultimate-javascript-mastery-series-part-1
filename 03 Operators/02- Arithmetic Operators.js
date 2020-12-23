// 02- Arithmetic Operators


/*
There are the arithmetic operator in JavaScript 
    +   Addition
    -	Subtraction
    *	Multiplication
    /	Division
    %	Modulus (division remainder)
    **  Exponentiation
    ++	Increment	
    --	Decrement
*/

let x = 10;
let y = 3;

console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);
console.log(x ** y); // x to the power of y


// ++ Incremete operator behaves differently depending on where we put the operator.
console.log(++x); // If we put increment before x, first the value of x first will be incremented by 1, and then we see x it in the console.
console.log(x++); // If we put increment after x, first we see it in the console, and them the value of x will be incremented by 1.
console.log(x);

// -- Decrement operator behaves just like the Increment, but subtract 1.
console.log(--x);
console.log(x--);
console.log(x);