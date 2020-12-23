// 09- Break and Continue

/*
Break statement definition and usage:
The break statement exits a switch statement or a loop (for, for ... in, while, do ... while).
When the break statement is used with a switch statement, it breaks out of the switch block.
This will stop the execution of more execution of code and/or case testing inside the block.
When the break statement is used in a loop, it breaks the loop and continues executing the code after the loop (if any).
The break statement can also be used with an optional label reference, to "jump out" of any JavaScript code block (see "More Examples" below).
Note: Without a label reference, the break statement can only be used inside a loop or a switch.

Syntax:

break;

Using the optional label reference:
break label name;
*/

for (let i = 0; i <= 10; i++) {
  if (i === 5) {
    break;
  }
  console.log('For loop - The index is ' + i);
}

let i  = 0
while (i <= 10) {
    if (i === 5) break;
    console.log('While loop - The index is ' + i)
    i++
}

/*
Continue statement definition and usage
The continue statement breaks one iteration (in the loop) if a specified condition occurs, and continues with the next iteration in the loop.
The difference between continue and the break statement, is instead of "jumping out" of a loop, the continue statement "jumps over" one iteration in the loop.
However, when the continue statement is executed, it behaves differently for different types of loops:
    In a while loop, the condition is tested, and if it is true, the loop is executed again
    In a for loop, the increment expression (e.g. i++) is first evaluated, and then the condition is tested to find out if another iteration should be done

The continue statement can also be used with an optional label reference.
Note: The continue statement (with or without a label reference) can only be used inside a loop.

Syntax:
continue;

Using the optional label reference:
continue label name;
*/

for (let i = 0; i <= 10; i++) {
    if (i % 2 === 0) {
      continue;
    }
    console.log('For loop - The index is ' + i);
  }

let x = 0
while (x <= 10) {
    if (x % 2 === 0) {
        x++
        continue;
    }
    console.log('While loop - The index is ' + x)
    x++
}