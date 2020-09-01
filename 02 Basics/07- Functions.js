// 07 Functions

/*
Functions are one of the fundementals builsding bolcks of JavaScript
A funtions is basiclly a set of statments tha performs a task or calculates value.
We declare a function with the keyword funtion and the the name of the function.
function myFunction {

}
Between the curly brackets {} is the body of the functions, and it's were we add all the statments we want to our function.
The statments in the function must end with semicolon ";" but the function just ends int }
*/


function greet() {
    console.log('Hello World');
}

greet();

// A function can also have one or more parameters. Parameters are like variables but they only exist inside the function.
function greetPerson(firstName, lastName) {
    console.log("Hello " + firstName + " " + lastName);
}

greetPerson('Miguel', 'Pimenta'); // Now we pass the arguments to the funcion.
greetPerson('Miguel'); // If we don't pass an argument it will return the default value for variable "undefined".
greetPerson();