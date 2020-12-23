// 01- If...else

/*
Conditional Statements:
Definition and Usage
The if/else statement executes a block of code if a specified condition is true. If the condition is false, another block of code can be executed.

The if/else statement is a part of JavaScript's "Conditional" Statements, which are used to perform different actions based on different conditions.

In JavaScript we have the following conditional statements:
    Use "if" to specify a block of code to be executed, if a specified condition is true
    Use "else" to specify a block of code to be executed, if the same condition is false
    Use "else if" to specify a new condition to test, if the first condition is false
    Use "switch" to select one of many blocks of code to be executed

Syntax:
The if statement specifies a block of code to be executed if a condition is true:
if (condition) {
    block of code to be executed if the condition is true
}

The else statement specifies a block of code to be executed if the condition is false:
if (condition) {
    block of code to be executed if the condition is true
} else {
    block of code to be executed if the condition is false
}

The else if statement specifies a new condition if the first condition is false:
if (condition1) {
  block of code to be executed if condition1 is true
} else if (condition2) {
  block of code to be executed if the condition1 is false and condition2 is true
} else {
  block of code to be executed if the condition1 is false and condition2 is false
}

When a condition is true, the following conditions will be ignored.

Example depending on the hour we want to display a different message.
If hour is between 6:00 and 12:00, we want to display good morning.
If hour is between 12:00 and 18:00, we want to display good afternoon.
Otherwise display good evening.
*/

let hour = 15

if (hour >= 6 && hour < 12)
    console.log('Good Morning')
else if (hour >= 12 && hour <= 18)
    console.log('Good afternoon')
else
    console.log('Good evening')