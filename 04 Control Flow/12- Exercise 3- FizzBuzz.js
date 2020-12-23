// 12- Exercise 3- FizzBuzz


/*
Create the FizzBuzz function
Divisible by 3 => Fizz
Divisible by 5 => Buzz
Divisible by both 3 and 5 => FizzBuzz
Not divisible by 3 or 5 => input
Not a number => 'Not a number'
*/

function fizzBuzz(input) {
    if (typeof input !== 'number') return NaN;
    else if ((input % 3 === 0) && (input % 5 === 0)) return 'FizzBuzz';
    else if (input % 3 === 0) return 'Fizz';
    else if (input % 5 === 0) return 'Buzz';
    else return input;
}

let result = fizzBuzz('a')
console.log(result)