// 04 Dynamic Typing


/*
JavaScript is a dynamic language.

We have two types of programing languages 
    Static languages (Statically-typed)
      In static languages when we declare a variable, the type of that variable is set and can not be changed.
      For example "string name = 'Miguel'", this variable is a of type string and can not be changed.
    Dynamic languages (Dynamically-typed)
        In a dynamic language the type of a variable can change at runtime.
*/

let typeString = "String";
let typeNumber = 4;

console.log(typeof typeString); // string
console.log(typeof typeNumber); // number

typeString = 15
typeNumber = "I am a string now"

console.log(typeof typeString); // number
console.log(typeof typeNumber); // string

// This is what we call a dynamic language, the type of this variables will be determined at runtime, base on the value er assign to them.

let typeNull = null;
console.log(typeof typeNull); // object