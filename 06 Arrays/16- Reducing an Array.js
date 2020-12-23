// 16- Reducing an Array

/*
With the ".reduce()" method we can reduce all the methods in the array to a single value.
This value can be a string a number, a object or anything.

This method takes a callback function with two values.
    Accumulator
    Current Value
Optionally we can pass a second argument to the ".reduce()", that is the value to inicialize the accumulator.
If we don't set the initial value for the accumulator, it will assume the first value of the array.
*/

const numbers = [1, 2, 3, 4, 5, 6];
// we could use a for...of loop to sum all the numbers, but the ".reduce()" method provides a cleaner implementation.

let sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

console.log(sum);

/*
In this example we are using reduce to sum all the values in the array.
In each time the current value is added to the accumulator
a = 0 --- c = 1 ---> a = 1
a = 1 --- c = 2 ---> a = 3
a = 3 --- c = 3 ---> a = 6
a = 6 --- c = 4 ---> a = 10
a = 10 --- c = 5 ---> a = 15
a = 15 --- c = 6 ---> a = 21

Result 21
*/