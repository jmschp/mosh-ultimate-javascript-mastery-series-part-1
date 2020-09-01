// 03- For

/*
Definition and Usage
The for statement creates a loop that is executed as long as a condition is true.
The loop will continue to run as long as the condition is true. It will only stop when the condition becomes false.
JavaScript supports different kinds of loops:
    for - loops through a block of code a number of times
    for/in - loops through the properties of an object
    for/of - loops through the values of an iterable object
    while - loops through a block of code while a specified condition is true
    do/while - loops through a block of code once, and then repeats the loop while a specified condition is true

Tip: Use the break statement to break out of a loop, and the continue statement to skip a value in the loop.

Syntax:

for (statement 1; statement 2; statement 3) {
  code block to be executed
}

statement1: Initial Expression
Optional. Executed before the loop (the code block) starts.
Normally this statement is used to initialize a counter variable. To initiate multiple values, separate each value with a comma.
Note: This parameter can be omitted. However, do not omit the semicolon ";"

statement2: Condition
Optional. Defines the condition for running the loop (the code block).
Normally this statement is used to evaluate the condition of the counter variable.
If it returns true, the loop will start over again, if it returns false, the loop will end.
Note: This parameter can be omitted. However, do not omit the semicolon ";". Also, if you omit this parameter, you must provide a break inside the loop. Otherwise the loop will never end, which will crash your browser

statement3: Increment Expression
Optional. Executed each time after the loop (the code block) has been executed.
Normally this statement is used to increment or decrement the counter variable.
Note: This parameter can be omitted (e.g. to increase/decrease values inside the loop)
*/
console.log('for loop 1')

for (let i = 0; i < 5; i++) {
    let text = 'The number is ' + i
    console.log(text);
}

console.log('for loop 2')

for (let i = 5; i > 0; i--) {
    let text = 'The number is ' + i
    console.log(text);
}


// Example using the continue statement - Loop through a block of code, but skip the value of "3":

console.log('for loop 3')

for (let i = 0; i < 5; i++) {
  if (i == 3) {
    continue;
  }
  let text = "The number is " + i;
  console.log(text)
}