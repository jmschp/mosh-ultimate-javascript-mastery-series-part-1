// 07- Value vs Reference Types

/*
As we seen before in JavaScript we have two category of type

Primitives Types (or Value Types)
    String
    Numbers
    Boolean
    Symbol
    undefined
    null (object)

Reference Types
    Objects
    Array
    Function
  

*/

let x = 10;
let y = x;

x = 20;

console.log(y); // It returns 10.
//Primitives are independent, the value is stored inside of the variable.

let xObj = {value: 10};
let yObj = x;

x.value = 20;

console.log(yObj); // It return 20.
// In using object they are not stored in the variable. They are stored somewhere in the memory, and the address (or the reference) of that place in memory is store in the variable.

// Primitives are copied by their value.
// Objects are copied by their reference.


let number = 10;

function increase(number) {
    number++;
}

increase(number);
console.log(number); // It returns 10.
// When we call increase and pass the number variable to that functions as an argument.
// The "number" variable is completely independent from the "number" paramter in the "increase()" function.
// The "number" parameter is local to the "increase()" function.



let obj = {value: 10};

function increase(obj) {
    obj.value++;
}

increase(obj);
console.log(obj); // It returns { value: 11 }.

// In this case we are not dealing with two independent copies.
// So any changes made to that object will be visible in the variable.