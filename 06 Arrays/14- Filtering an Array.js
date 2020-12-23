// 14- Filtering an Array

/*
To filter na array we can use the ".filter()" method.
This method evaluates each element of the array with a given condition, and returns the elements that pass that condition to a new array. 
*/

const numbers = [1, 2, -1, 3, -4, -2, 4, 5, 6, 0];

let filteredNumbers = numbers.filter(function(number) {
    return number > 0; // It will return the elements that pass this condition to a new array.
});

console.log(filteredNumbers);

filteredNumbers = numbers.filter(number => number > 0); // It the same code as above but using arrow function for a cleaner code.

console.log(filteredNumbers);