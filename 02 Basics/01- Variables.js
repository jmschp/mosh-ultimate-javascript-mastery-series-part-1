// 01 Variables

/*
In programing we use a variable to store data temporarily in a computer memory.
So we store and give that variable location a name.
With this name we can read the data at a given location in the future.
*/

// var variableName;

// Since ES6 we use the "let" keyword to create a variable. There are issue with the "var" key word, we will learn later.

let variableName;
console.log(variableName)
// prints "undefined" in the console
// By default variable that we define in JavaScript there value is undefined.

/*
We can also initialize a variable give it a value
*/

let name = 'Miguel'
console.log(name)

/*
We have a few rule to name a variable:
    1 Cannot be a keyword like "if".
    2 Should be meaningful, so anyone can understand the code, use descriptive names.
    3 They can not start wit a number
    4 They can not contain a space or a hyphen (-)
    5 Use camelCase, the first letter is lowercase and the first letter of every word after is uppercase.
    6 They are case sensitive
*/

// To set multiple variables i the same line
let firstName, lastName;
let firstName = 'Miguel', lastName;
let firstName, lastName = "Pimenta";
let firstName = 'Miguel', lastName = 'Pimenta';

// But the modern best practice is to declare each variable in a single line
let firstName = 'Miguel';
let lastName = 'Pimenta';