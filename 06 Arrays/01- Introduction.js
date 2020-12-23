// 01- Introduction

/*
Description
Arrays are list-like objects whose prototype has methods to perform traversal and mutation operations.
Neither the length of a JavaScript array nor the types of its elements are fixed.

Most common operations we can perform in arrays:
    Adding elements
    Finding elements
    Removing elements
    Splitting arrays
    Combining arrays

Constructor
    Array()
        Creates a new Array object.
*/

// Initializing an array with the Constructor
let myArray1 = new Array();
console.log(myArray1);

// Creating an array literal 
let myArray2 = [];
console.log(myArray2);

// Using "const"
const myArray3 = [];

// In case we use constant to create an array we can not reassign the variable.
// But we can change the content of the array