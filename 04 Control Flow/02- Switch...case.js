// 02- Switch...case


/*
Definition and Usage
The switch statement executes a block of code depending on different cases.
The switch statement is a part of JavaScript's "Conditional" Statements, which are used to perform different actions based on different conditions.
Use switch to select one of many blocks of code to be executed. This is the perfect solution for long, nested if/else statements.
The switch statement evaluates an expression. The value of the expression is then compared with the values of each case in the structure.
If there is a match, the associated block of code is executed.
The switch statement is often used together with a break or a default keyword (or both). These are both optional:
    The break keyword breaks out of the switch block. This will stop the execution of more execution of code and/or case testing inside the block.
        If break is omitted, the next code block in the switch statement is executed.
    The default keyword specifies some code to run if there is no case match. There can only be one default keyword in a switch.
        Although this is optional, it is recommended that you use it, as it takes care of unexpected cases.

switch(expression) {
    case n:
        code block
        break;
    case n:
        code block
        break;
    default:
        default code block
}
*/

let role = 'guest';

switch (role) {
    case 'guest':
        console.log('Guest user');
        break;
    case 'moderator':
        console.log('moderator user');
        break;
   default:
        console.log('Unknown user');
}