// 05- Default Parameters

/*
Syntax
function [name]([param1[ = defaultValue1 ][, ..., paramN[ = defaultValueN ]]]) {
   statements
}

Description
In JavaScript, function parameters default to undefined. However, it's often useful to set a different default value. This is where default parameters can help.

In the past, the general strategy for setting defaults was to test parameter values in the function body and assign a value if they are undefined.

In the following example, if no value is provided for b when multiply is called, b's value would be undefined when evaluating a * b and multiply would return NaN.
*/

function interests(principal, rate, years) {
  return ((principal * rate) / 100) * years;
}

console.log(interests(10000, 3.5, 5));


// If we want to have default value for interest rate and years
function interests1(principal, rate = 3.5, years = 5) {
  rate = rate || 3.5 // We could user the or operator 
  year = year || 5
  return ((principal * rate) / 100) * years;
}

console.log(interests1(10000));

// From ES6 there is a new way to set the defaults values
function interestsDefault(principal, rate = 3.5, years = 5) {
  return ((principal * rate) / 100) * years;
}

console.log(interestsDefault(10000, 3.5, 5));

// Once we give a paramter a default value, all the following parameters should also have a default value.

