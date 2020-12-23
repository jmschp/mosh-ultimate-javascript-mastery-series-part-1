// 13- Testing the Elements of an Array

/*
To test elements in an array we can use the ".every()" method or the ".some()" method.

The ".every()" method checks if all the elements in the array respect the indicated condition
    Returns true if every elements respects the condition.
    Returns false if at least one element does not respect the condition. It will pause searching on the first element it does not match the condition.

The ".some()" method checks if at least one of the elements respects a given condition.
    Return true if at least one element respects the condition.
    Return false if not even one element respects the condition.

Both this method take as an argument a callback function

*/

const numbers1 = [1, 2, 3, 4, 5, 6];

let allPositive = numbers1.every(function(value) {
    return value > 0; // If all the elements are greater than 0 it will return true.
});

console.log('Numbers 1 all positive: ', allPositive);

let atLeastOnePositive = numbers1.some(function(value) {
    return value > 0; // If at least one element is greater than zero it will return true.
});

console.log('Numbers 1 at lest one positive: ', atLeastOnePositive);

const numbers2 = [1, 2, -3, 0, -2, 3, 4];

allPositive = numbers2.every(function(value) {
    return value > 0; // If all the elements are greater than 0 it will return true.
});

console.log('Numbers 2 all positive: ', allPositive);

atLeastOnePositive = numbers2.some(function(value) {
    return value > 0; // If at least one element is greater than zero it will return true.
});

console.log('Numbers 2 at lest one positive: ', atLeastOnePositive);
