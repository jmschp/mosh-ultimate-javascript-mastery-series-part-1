// 08- Logical Operators with Non-booleans

/*
We can use the logical operators with non boolean values
    &&
    ||
    !

The result of the logical expression it is not necessarily a boolean value true or false.
That depends on the value of the operands we have.
The logical operations looks at each operant, and if the operand is not a boolean true or false, it will try to interpret it as Truthy or Falsy.

Falsy values (False)
    false
    undefined
    null
    0
    '' (empty string)
    NaN (Not a Number)

If we use any of this values in a logical operation, they will be treated as falsy. Which is kind a like a boolean False, but is not exactly the same.
Any other value that is not Falsy is Truthy.

*/

console.log(false || true) // This will return true
console.log(false || 'Miguel') // This will return true because a non empty string is a Truthy value.
console.log(false || -1) // This will return true because any number different of 0 is a Truthy value.
console.log(false || 1 || 2) // This returns 1 because is the first Truthy operand.

// When using the '||' or operator the evaluation starts in the first operand, and stops in the first Truthy value it finds, if there are any.
// This is called short-circuiting

// A real world example to use this could be for default values.
// For example if a user picks a color we that color, if we does not pick a color we use the default value.

let userColor = 'red'
let defaultColor = 'blue'
console.log(userColor || defaultColor) // This basically means that if we have a value for the user color we use that, if we don't we use the default color.

userColor = undefined
console.log(userColor || defaultColor) // Here the user did not pick a color, the variable user is set to undefined, so we will use the default color.