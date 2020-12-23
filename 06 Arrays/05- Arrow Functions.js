// 05- Arrow Functions

/*
An arrow function expression is a compact alternative to a traditional function expression, but is limited and can't be used in all situations.

Differences & Limitations:
    Does not have its own bindings to this or super, and should not be used as methods.
    Does not have arguments, or new.target keywords.
    Not suitable for call, apply and bind methods, which generally rely on establishing a scope.
    Can not be used as constructors.
    Can not use yield, within its body.


Syntax
Basic syntax:

One param. With simple expression return is not needed:
param => expression

Multiple params require parentheses. With simple expression return is not needed:
    (param1, paramN) => expression

Multiline statements require body brackets and return:
param => {
  let a = 1;
  return a + b;
}

Multiple params require parentheses. Multiline statements require body brackets and return:
(param1, paramN) => {
   let a = 1;
   return a + b;
}

Advanced syntax:

To return an object literal expression requires parentheses around expression:
params => ({foo: "a"}) // returning the object {foo: "a"}

Rest parameters are supported:
(a, b, ...r) => expression

Default parameters are supported:
(a=400, b=20, c) => expression

Destructuring within params supported:
([a, b] = [10, 20]) => a + b;  // result is 30
({ a, b } = { a: 10, b: 20 }) => a + b; // result is 30
*/


const courses = [
    { id: 1, name: 'a'},
    { id: 2, name: 'b'}
];

const course = courses.find(course => course.name === 'a');

console.log(course);