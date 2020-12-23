// 07- Emptying an Array


/*
We can use different approaches to empty an array.
*/

// Solution 1
let numbers1 = [1, 2, 3, 4, 5, 6];
let another1 = numbers1;

numbers1 = [];
// if we use a constant "const" variable, this will not work because we can not reassign a value to a "const".
console.log(numbers1);
// In case we have other references to this object, like in this example another is referencing numbers, even if we reassign the numbers variable, the original array will still be in memory.
console.log(another1);
// If there are no references to the object eventually it will be removed from memory by the garbage collector.


// Solution 2
let numbers2 = [10, 20, 30, 40, 50, 60];
let another2 = numbers2;

numbers2.length = 0;
// Here we set the length property to 0. This will truncate the array removing all values.
// With this method it does not matter if we have references to the object.
// Its the original array that is being empty.
console.log(numbers2);
console.log(another2);


// Solution 3
let numbers3 = [100, 200, 300, 400, 500, 600];
let another3 = numbers3;

numbers3.splice(0, numbers3.length);
// With the "splice()" method, starting from index 0 and using as second argument the length of the array.


// Solution 4
let numbers4 = [1000, 2000, 3000, 4000, 5000, 6000];
let another4 = numbers4;

while (numbers4.length > 0) {
    numbers4.pop();
}
// Using the "pop()" method in a loop. In case we are dealing with a large array we may encounter performance issues.


// Depending on the approach the best solution are 1 and 2.