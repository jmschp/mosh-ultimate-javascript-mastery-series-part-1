// 07 Functions

/*
Functions are one of the fundamentals building blocks of JavaScript
A function is basically a set of statements tha performs a task or calculates value.
We declare a function with the keyword function and the the name of the function.
function myFunction {

}
Between the curly brackets {} is the body of the functions, and it's were we add all the statements we want to our function.
The statements in the function must end with semicolon ";" but the function just ends int }
*/


function greet() {
    console.log('Hello World');
}

greet();

// A function can also have one or more parameters. Parameters are like variables but they only exist inside the function.
function greetPerson(firstName, lastName) {
    console.log("Hello " + firstName + " " + lastName);
}

greetPerson('Miguel', 'Pimenta'); // Now we pass the arguments to the function.
greetPerson('Miguel'); // If we don't pass an argument it will return the default value for variable "undefined".
greetPerson();