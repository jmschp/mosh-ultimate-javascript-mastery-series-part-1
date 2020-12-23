// 04- Finding Elements (Reference Types)


/*
Finding Reference Type elements, is deferent that finding Primitive type elements.
To do that we can use the "find()" method,

Syntax
arr.find(callback(element[, index[, array]])[, thisArg])

Parameters:
    callback: Function to execute on each value in the array, taking 3 arguments:
    element: The current element in the array.
    index (Optional): The index (position) of the current element in the array.
    array (Optional): The array that find was called on.
    thisArg (Optional): Object to use as this inside callback.

Return value
The value of the first element in the array that satisfies the provided testing function. Otherwise, undefined is returned.

Description
The find method executes the callback function once for each index of the array until the callback returns a truthy value.
If so, find immediately returns the value of that element. Otherwise, find returns undefined.
*/

const courses = [
    { id: 1, name: 'a'},
    { id: 2, name: 'b'}
];

console.log(courses.includes({ id: 1, name: 'a'})); // This will return false because, even though the object syntax is the same, they are referencing different address in memory.

// find()
const course1 = courses.find(function(course) {
    return course.name === 'a';
});

console.log(course1); // Return the complete object


const course2 = courses.find(function(course) {
    return course.name === 'd';
});

console.log(course2); // Return undefined, because we don\t have a course with name "d".


// findIndex() This method return the index. In case it does not find a match it returns "-1".
const course3 = courses.findIndex(function(course) {
    return course.name === 'a';
});

console.log(course3) // Returns 0