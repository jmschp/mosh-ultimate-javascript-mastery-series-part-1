// 05- Do...while

/*
Definition and Usage
The do/while statement creates a loop that executes a block of code once, before checking if the condition is true, then it will repeat the loop as long as the condition is true.
The do/while statement is used when you want to run a loop at least one time, no matter what.
Thats the difference between the while loop and the do...while loop.
    The while loop only executes the code block if teh condition is true. 
    The do...while loop executes the code block at least once even if the condition is false.
    The do...while loop is a variant of the while loop.
    This loop will execute the code block once, before checking if the condition is true, then it will repeat the loop as long as the condition is true.

JavaScript supports different kinds of loops:
    for - loops through a block of code a number of times
    for/in - loops through the properties of an object
    for/of - loops through the values of an iterable object
    while - loops through a block of code while a specified condition is true
    do/while - loops through a block of code once, and then repeats the loop while a specified condition is true

Syntax:

do {
  code block to be executed
} while (condition);

condition:
Required. Defines the condition for running the loop (the code block). If it returns true, the loop will start over again, if it returns false, the loop will end.
Note: If the condition is always true, the loop will never end. This will crash your browser.
Note: If you are using a variable with the condition, initialize it before the loop, and increment it within the loop.
If you forget to increase the variable, the loop will never end. This will also crash your browser.
*/

let i = 0;
do {
  let text = "The number is " + i;
  console.log(text)
  i++;
} while (i <= 5);