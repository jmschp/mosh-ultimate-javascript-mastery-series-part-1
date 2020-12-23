// 06 Arrays

/*
When we are dealing with a list of objects we use an array.
Like for example a list of products in a shopping cart in ana application.
To create an array we use [] brackets.
let myArray = [] 
This is whats is called an Array literal.
In this case an empty array.
An array is a data structure that we use to represent a list of items.
*/

let selectedColors = ['red', 'green'];
console.log(selectedColors);

/*
Each element in the array as an index, stating in 0
    0: red
    1: green
*/

console.log(selectedColors[0]); // With this syntax we can access a index.

/*
JavaScript is Dynamic Language, the same principle applies to the array.
The length of the array can change, and it can hold different type at the same time.
*/

selectedColors[2] = 'yellow' // With this syntax we are creating a new object i the array at index 2. If we jump a position it will create a <1 empty item> in that position.
console.log(selectedColors)

selectedColors[3] = 4
console.log(selectedColors)

console.log(typeof selectedColors) // An array is of type object.
console.log(selectedColors.length) // An array as several properties pre defined. The length property returns the number of items in an array.