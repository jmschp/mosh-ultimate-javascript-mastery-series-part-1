// 08- For...of


/*
Definition and Usage
The for/of statement loops through the values of an iterable object.

JavaScript supports different kinds of loops:
    for - loops through a block of code a number of times
    for/in - loops through the properties of an object
    for/of - loops through the values of an iterable object
    while - loops through a block of code while a specified condition is true
    do/while - loops through a block of code once, and then repeats the loop while a specified condition is true

Syntax:
for (variable of iterable) {
    code block to be executed
}

variable:
Required. For every iteration the value of the next property is assigned to the variable. Variable can be declared with const, let, or var.

iterable:
Required. An object that has iterable properties
*/

let cars = ['BMW', 'Volvo', 'Mini'];
for (let car of cars) {
  console.log('The car is ' + car);
}


let colors = ['red', 'blue', 'green', 'yellow']
for (let color in colors) {
    console.log('The color is ' + color)
}