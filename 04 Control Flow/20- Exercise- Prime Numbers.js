// 20- Exercise- Prime Numbers

/*
In maths we have to type of numbers
    Prime number are numbers whose factors are only 1 and itself
    Composite number as many factors

11 ---> 1, 11 ---> 11 is Prime because only has two factors.
12 ---> 1, 2, 3, 6, 12 ---> 12 is composite because is has more than two factors.
*/

function showPrime(limit) {
    for (let i = 1; i <= limit; i++) {
        let counter = 0;
        for (let x = 1; x <= limit; x++) {
            if (i % x === 0) counter++;
        }
        if (counter === 2) console.log(i);
    }
}

showPrime(20)


// Mosh solution
function showPrime(limit) {
    for (let number = 2; number <= limit; number++) {
        let isPrime = true;
        for (let factor = 2; factor < number; factor++) {
            if (number % factor === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) console.log(number);
    }
}


// Solution applying the Single Responsibility Principle

function isPrime(number) {
    for (let factor = 2; factor < number; factor++)
        if (number % factor === 0) return false;
    return true
}


function showPrime(limit) {
    for (let number = 2; number <= limit; number++)
    if (isPrime(number)) console.log(number);
}