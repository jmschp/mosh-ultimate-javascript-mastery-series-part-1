// 04- While

/*
Definition and Usage
The while statement creates a loop that is executed while a specified condition is true.
The loop will continue to run as long as the condition is true. It will only stop when the condition becomes false.
JavaScript supports different kinds of loops:
    for - loops through a block of code a number of times
    for/in - loops through the properties of an object
    for/of - loops through the values of an iterable object
    while - loops through a block of code while a specified condition is true
    do/while - loops through a block of code once, and then repeats the loop while a specified condition is true

Tip: Use the break statement to break out of a loop, and the continue statement to skip a value in the loop.

Syntax
while (condition) {
  code block to be executed
}

condition:
Required. Defines the condition for running the loop (the code block).
If it returns true, the loop will start over again, if it returns false, the loop will end.

Note: If the condition is always true, the loop will never end. This will crash your browser.
Note: If you are using a variable with the condition, initialize it before the loop, and increment it within the loop.
If you forget to increase the variable, the loop will never end. This will also crash your browser.
*/

console.log('While loop 1')
let i = 0;
while (i <= 5) {
  let text = "The number is " + i;
  console.log(text)
  i++;
}


console.log('While loop 2')
let index = 0;
while (index <= 10) {
    if (index % 2 !== 0) {
        let text = 'Index is odd ' + index
        console.log(text)
    }
    index++;
}